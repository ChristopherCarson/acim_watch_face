Modules.addCached("time_utils",function(){// module "time_utils"
    //
    // Utility functions useful to work with time and durations.
    //
    // This module functions usually receive or return a {d, h, m, s} object
    // or a number of milliseconds representing a time or a duration.
    //
    // The {h, m, s} object encapsulates a "time" (eg: 12:30:00).
    // Note: a "time" needs the day set to 0/undefined, otherwise it is a "duration".
    //
    // The {d, h, m, s} object encapsulates a "duration" in number of days, hours,
    // minutes and seconds (eg. 3d 20h 35m 20s).
    // Note that if a field is undefined then its value is zero.
    //
    
    const ONE_SECOND = 1000;
    const ONE_MINUTE = 60 * ONE_SECOND;
    const ONE_HOUR = 60 * ONE_MINUTE;
    const ONE_DAY = 24 * ONE_HOUR;
    
    /**
     * @param {object} time {d, h, m, s}
     * @returns the milliseconds contained in the passed time object
     */
    exports.encodeTime = (time) => {
      time = safeTime(time);
      return time.d * ONE_DAY + time.h * ONE_HOUR + time.m * ONE_MINUTE + time.s * ONE_SECOND;
    }
    
    // internal use, set to zero all the undefined fields
    function safeTime(time) {
      return { d: time.d || 0, h: time.h || 0, m: time.m || 0, s: time.s || 0 };
    }
    
    /**
     * @param {int} millis the number of milliseconds
     * @returns a time object {d, h, m, s} built from the milliseconds
     */
    exports.decodeTime = (millis) => {
      if (typeof millis !== "number") throw "Only a number can be decoded";
      var d = Math.floor(millis / ONE_DAY);
      millis -= d * ONE_DAY;
      var h = Math.floor(millis / ONE_HOUR);
      millis -= h * ONE_HOUR;
      var m = Math.floor(millis / ONE_MINUTE);
      millis -= m * ONE_MINUTE;
      var s = Math.floor(millis / ONE_SECOND);
      return { d: d, h: h, m: m, s: s };
    }
    
    /** 
     * @param {object|int} value {h, m} object or milliseconds
     * @returns an human-readable time string like "10:25"
     * @throws an exception if d != 0 or h > 23 or m > 59
     */
    exports.formatTime = (value) => {
      var time = safeTime(typeof value === "object" ? value : exports.decodeTime(value));
      if (time.d != 0) throw "days not supported here";
      if (time.h < 0 || time.h > 23) throw "Invalid value: must be 0 <= h <= 23";
      if (time.m < 0 || time.m > 59) throw "Invalid value: must be 0 <= m <= 59";
      return time.h + ":" + ("0" + time.m).substr(-2);
    }
    
    /**
     * @param {object|int} value {d, h, m, s} object or milliseconds
     * @param {boolean} compact `true` to remove all whitespaces between the values
     * @returns an human-readable duration string like "3d 1h 10m 45s" (or "3d1h10m45s" if `compact` is `true`)
     */
    exports.formatDuration = (value, compact) => {
      compact = compact || false;
      var duration = "";
      var time = safeTime(typeof value === "object" ? value : exports.decodeTime(value));
      if (time.d > 0) duration += time.d + "d ";
      if (time.h > 0) duration += time.h + "h ";
      if (time.m > 0) duration += time.m + "m ";
      if (time.s > 0) duration += time.s + "s"
      duration = duration.trim()
      return compact ? duration.replace(" ", "") : duration;
    }
    
    exports.getCurrentTimeMillis = () => {
      var time = new Date();
      return (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()) * 1000;
    }
    });
    Modules.addCached("buzz",function(){/**
     * Buzz the passed `pattern` out on the internal vibration motor.
     *
     * A pattern is a sequence of `.`, `,`, `-`, `:`, `;` and `=` where
     * - `.` is one short and weak vibration
     * - `,` is one medium and weak vibration
     * - `-` is one long and weak vibration
     * - `:` is one short and strong vibration
     * - `;` is one medium and strong vibration
     * - `=` is one long and strong vibration
     *
     * You can use the `buzz_menu` module to display a menu where some common patterns can be chosen.
     *
     * @param {string} pattern A string like `.-.`, `..=`, `:.:`, `..`, etc.
     * @returns a Promise
     */
    exports.pattern = pattern => new Promise(resolve => {
      function doBuzz() {
        if (pattern == "") resolve();
        var c = pattern[0];
        pattern = pattern.substr(1);
        const BUZZ_WEAK = 0.25, BUZZ_STRONG = 1;
        const SHORT_MS = 100, MEDIUM_MS = 200, LONG_MS = 500;    
        if (c == ".") Bangle.buzz(SHORT_MS, BUZZ_WEAK).then(() => setTimeout(doBuzz, 100));
        else if (c == ",") Bangle.buzz(MEDIUM_MS, BUZZ_WEAK).then(() => setTimeout(doBuzz, 100));
        else if (c == "-") Bangle.buzz(LONG_MS, BUZZ_WEAK).then(() => setTimeout(doBuzz, 100));
        else if (c == ":") Bangle.buzz(SHORT_MS, BUZZ_STRONG).then(() => setTimeout(doBuzz, 100));
        else if (c == ";") Bangle.buzz(MEDIUM_MS, BUZZ_STRONG).then(() => setTimeout(doBuzz, 100));
        else if (c == "=") Bangle.buzz(LONG_MS, BUZZ_STRONG).then(() => setTimeout(doBuzz, 100));
        else setTimeout(doBuzz, 100);
      }
      doBuzz();
    });
    });
    // Chances are boot0.js got run already and scheduled *another*
    // 'load(sched.js)' - so let's remove it first!
    if (Bangle.SCHED) {
      clearInterval(Bangle.SCHED);
      delete Bangle.SCHED;
    }
    
    function showAlarm(alarm) {
      const settings = require("sched").getSettings();
    
      function buzz() {
        const pattern = alarm.vibrate || (alarm.timer ? settings.defaultTimerPattern : settings.defaultAlarmPattern);
        require("buzz").pattern(pattern).then(() => {
              if (!alarm.timer) {
                alarm.last = new Date().getDate();
              }
              if (alarm.ot !== undefined) {
                alarm.t = alarm.ot;
                delete alarm.ot;
              }
              if (!alarm.rp) {
                alarm.on = false;
              }
                // The updated alarm is still a member of 'alarms'
                // so writing to array writes changes back directly
                require("sched").setAlarms(alarms);
                load();
        });
      }
    
      if ((require("Storage").readJSON("setting.json", 1) || {}).quiet > 1)
        return;
    
      buzz();
    }
    
    let alarms = require("sched").getAlarms();
    let active = require("sched").getActiveAlarms(alarms);
    if (active.length) {
      // if there's an alarm, show it
      showAlarm(active[0]);
    } else {
      // otherwise just go back to default app
      setTimeout(load, 100);
    }
    