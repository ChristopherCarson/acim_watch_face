// MIT License - Christopher Carson 2022

const miracleArray = ["Nothing I see in this room [on this street, from this window, in this place] means anything.",
    "I have given everything I see in this room [on this street, from this window, in this place] all the meaning that it has for me.",
    "I do not understand anything I see in this room [on this street, from this window, in this place].",
    "These thoughts do not mean anything. They are like the things I see in this room [on this street, from this window, in this place].",
    "I am never upset for the reason I think.",
    "I am upset because I see something that is not there.",
    "I see only the past.",
    "My mind is preoccupied with past thoughts.",
    "I see nothing as it is now.",
    "My thoughts do not mean anything.",
    "My meaningless thoughts are showing me a meaningless world.",
    "I am upset because I see a meaningless world.",
    "A meaningless world engenders fear.",
    "God did not create a meaningless world.",
    "My thoughts are images that I have made.",
    "I have no neutral thoughts.",
    "I see no neutral things.",
    "I am not alone in experiencing the effects of my seeing.",
    "I am not alone in experiencing the effects of my thoughts.",
    "I am determined to see.",
    "I am determined to see things differently.",
    "What I see is a form of vengeance.",
    "I can escape from the world I see by giving up attack thoughts.",
    "I do not perceive my own best interests.",
    "I do not know what anything is for.",
    "My attack thoughts are attacking my invulnerability.",
    "Above all else I want to see.",
    "Above all else I want to see things differently.",
    "God is in everything I see.",
    "God is in everything I see because God is in my mind.",
    "I am not the victim of the world I see.",
    "I have invented the world I see.",
    "There is another way of looking at the world.",
    "I could see peace instead of this.",
    "My mind is part of God's. I am very holy.",
    "My holiness envelops everything I see.",
    "My holiness blesses the world.",
    "There is nothing my holiness cannot do.",
    "My holiness is my salvation.",
    "I am blessed as a Son of God.",
    "God goes with me wherever I go.",
    "God is my strength. Vision is His gift.",
    "God is my Source. I cannot see apart from Him.",
    "God is the light in which I see.",
    "God is the Mind with which I think.",
    "God is the Love in which I forgive.",
    "God is the strength in which I trust.",
    "There is nothing to fear.",
    "God's Voice speaks to me all through the day.",
    "I am sustained by the Love of God.",
    "The review for today covers the following ideas:\n(1) Nothing I see means anything.\n(2) I have given what I see all the meaning it has for me.\n(3) I do not understand anything I see.\n(4) These thoughts do not mean anything.\n(5) I am never upset for the reason I think.",
    "Today's review covers these ideas:\n(6) I am upset because I see what is not there.\n(7) I see only the past.\n(8) My mind is preoccupied with past thoughts.\n(9) I see nothing as it is now.\n(10) My thoughts do not mean anything.",
    "Today we will review the following:\n(11) My meaningless thoughts are showing me a meaningless world.\n(12) I am upset because I see a meaningless world.\n(13) A meaningless world engenders fear.\n(14) God did not create a meaningless world.\n(15) My thoughts are images that I have made.",
    "These are the review ideas for today:\n(16) I have no neutral thoughts.\n(17) I see no neutral things.\n(18) I am not alone in experiencing the effects of my seeing.\n(19) I am not alone in experiencing the effects of my thoughts.\n(20) I am determined to see.",
    "Today's review includes the following:\n(21) I am determined to see things differently.\n(22) What I see is a form of vengeance.\n(23) I can escape from this world by giving up attack thoughts.\n(24) I do not perceive my own best interests.\n(25) I do not know what anything is for.",
    "Our review for today covers the following:\n(26) My attack thoughts are attacking my invulnerability.\n(27) Above all else I want to see.\n(28) Above all else I want to see differently.\n(29) God is in everything I see.\n(30) God is in everything I see because God is in my mind.",
    "Today let us review these ideas:\n(31) I am not the victim of the world I see.\n(32) I have invented the world I see.\n(33) There is another way of looking at the world.\n(34) I could see peace instead of this.\n(35) My mind is part of God's. I am very holy.",
    "These ideas are for review today:\n(36) My holiness envelops everything I see.\n(37) My holiness blesses the world.\n(38) There is nothing my holiness cannot do.\n(39) My holiness is my salvation.\n(40) I am blessed as a Son of God.",
    "The following ideas are for review today:\n(41) God goes with me wherever I go.\n(42) God is my strength. Vision is His gift.\n(43) God is my Source. I cannot see apart from Him.\n(44) God is the light in which I see.\n(45) God is the Mind with which I think.",
    "These ideas are for today's review:\n(46) God is the Love in which I forgive.\n(47) God is the strength in which I trust.\n(48) There is nothing to fear.\n(49) God's Voice speaks to me all through the day.\n(50) I am sustained by the Love of God.",
    "I am the light of the world.",
    "Forgiveness is my function as the light of the world.",
    "The light of the world brings peace to every mind through my forgiveness.",
    "Let me not forget my function.",
    "My only function is the one God gave me.",
    "My happiness and my function are one.",
    "Love created me like itself.",
    "Love holds no grievances.",
    "My grievances hide the light of the world in me.",
    "My salvation comes from me.",
    "Only God's plan for salvation will work.",
    "Holding grievances is an attack on God's plan for salvation.",
    "I will there be light.",
    "There is no will but God's.",
    "The light has come.",
    "I am under no laws but God's.",
    "I am entitled to miracles.",
    "Let miracles replace all grievances.",
    "Let me recognize the problem so it can be solved.",
    "Let me recognize my problems have been solved.",
    "Our ideas for review today are:\n(61) I am the light of the world.\n(62) Forgiveness is my function as the light of the world.",
    "We will review these ideas today:\n(63) The light of the world brings peace to every mind through my forgiveness.\n(64) Let me not forget my function.",
    "Today let us review these ideas:\n(65) My only function is the one God gave me.\n(66) My happiness and my function are one.",
    "These are the ideas for today's review:\n(67) Love created me like itself.\n(68) Love holds no grievances.",
    "Today's review will cover these ideas:\n(69) My grievances hide the light of the world in me.\n(70) My salvation comes from me.",
    "These ideas are for review today:\n(71) Only God's plan for salvation will work.\n(72) Holding grievances is an attack on God's plan for salvation.",
    "Our review today will cover these ideas:\n(73) I will there be light.\n(74) There is no will but God's.",
    "Today we will review these ideas:\n(75) The light has come.\n(76) I am under no laws but God's.",
    "These are our review ideas for today:\n(77) I am entitled to miracles.\n(78) Let miracles replace all grievances.",
    "For this review we will use these ideas:\n(79) Let me recognize the problem so it can be solved.\n(80) Let me recognize my problems have been solved.",
    "Miracles are seen in light.",
    "Miracles are seen in light, and light and strength are one.",
    "Light and joy and peace abide in me.",
    "I am as God created me.",
    "I am one Self, united with my Creator.",
    "Salvation comes from my one Self.",
    "I am spirit.",
    "I will accept my part in God's plan for salvation.",
    "Salvation is my only function here.",
    "My part is essential to God's plan for salvation.",
    "God's Will for me is perfect happiness.",
    "I share God's Will for happiness for me.",
    "God, being Love, is also happiness.",
    "I seek but what belongs to me in truth.",
    "God's peace and joy are mine.",
    "Let me be still and listen to the truth.",
    "Truth will correct all errors in my mind.",
    "To give and to receive are one in truth.",
    "I rest in God.",
    "I am as God created me.",
    "For morning and evening review:\n(91) Miracles are seen in light.\n(92) Miracles are seen in light, and light and strength are one.",
    "For morning and evening review:\n(93) Light and joy and peace abide in me.\n(94) I am as God created me.",
    "For morning and evening review:\n(95) I am one Self, united with my Creator.\n(96) Salvation comes from my one Self.",
    "For morning and evening review:\n(97) I am spirit.\n(98) I will accept my part in God's plan for salvation.",
    "For morning and evening review:\n(99) Salvation is my only function here.\n(100) My part is essential to God's plan for salvation.",
    "For morning and evening review:\n(101) God's Will for me is perfect happiness.\n(102) I share God's Will for happiness for me.",
    "For morning and evening review:\n(103) God, being Love, is also happiness.\n(104) I seek but what belongs to me in truth.",
    "For morning and evening review:\n(105) God's peace and joy are mine.\n(106) Let me be still and listen to the truth.",
    "For morning and evening review:\n(107) Truth will correct all errors in my mind.\n(108) To give and to receive are one in truth.",
    "For morning and evening review:\n(109) I rest in God.\n(110) I am as God created me.",
    "Forgiveness is the key to happiness.",
    "Forgiveness offers everything I want.",
    "I thank my Father for His gifts to me.",
    "Let me remember I am one with God.",
    "In quiet I receive God's Word today.",
    "All that I give is given to myself.",
    "There is no love but God's.",
    "The world I see holds nothing that I want.",
    "Beyond this world there is a world I want.",
    "It is impossible to see two worlds.",
    "No one can fail who seeks to reach the truth.",
    "I loose the world from all I thought it was.",
    "I will not value what is valueless.",
    "Let me perceive forgiveness as it is.",
    "If I defend myself I am attacked.",
    "Sickness is a defense against the truth.",
    "When I am healed I am not healed alone.",
    "Heaven is the decision I must make.",
    "I will accept Atonement for myself.",
    "Only salvation can be said to cure.",
    "My mind holds only what I think with God.\n(121) Forgiveness is the key to happiness.\n(122) Forgiveness offers everything I want.",
    "My mind holds only what I think with God.\n(123) I thank my Father for His gifts to me.\n(124) Let me remember I am one with God.",
    "My mind holds only what I think with God.\n(125) In quiet I receive God's Word today.\n(126) All that I give is given to myself.",
    "My mind holds only what I think with God.\n(127) There is no love but God's.\n(128) The world I see holds nothing that I want.",
    "My mind holds only what I think with God.\n(129) Beyond this world there is a world I want.\n(130) It is impossible to see two worlds.",
    "My mind holds only what I think with God.\n(131) No one can fail who seeks to reach the truth.\n(132) I loose the world from all I thought it was.",
    "My mind holds only what I think with God.\n(133) I will not value what is valueless.\n(134) Let me perceive forgiveness as it is.",
    "My mind holds only what I think with God.\n(135) If I defend myself I am attacked.\n(136) Sickness is a defense against the truth.",
    "My mind holds only what I think with God.\n(137) When I am healed I am not healed alone.\n(138) Heaven is the decision I must make.",
    "My mind holds only what I think with God.\n(139) I will accept Atonement for myself.\n(140) Only salvation can be said to cure.",
    "All things are echoes of the Voice for God.",
    "The power of decision is my own.",
    "In my defenselessness my safety lies.",
    "I am among the ministers of God.",
    "I will step back and let Him lead the way.",
    "I walk with God in perfect holiness.",
    "Into His Presence would I enter now.",
    "Today I learn to give as I receive.",
    "I give the miracles I have received.",
    "I am at home. Fear is the stranger here.",
    "Give me your blessing, holy Son of God.",
    "I am as God created me.",
    "There is no death. The Son of God is free.",
    "Now are we one with Him Who is our Source.",
    "Let not my mind deny the Thought of God.",
    "I am entrusted with the gifts of God.",
    "There is one life, and that I share with God.",
    "Your grace is given me. I claim it now.",
    "By grace I live. By grace I am released.",
    "There is no cruelty in God and none in me.",
    "God is but Love, and therefore so am I.\n(151) All things are echoes of the Voice for God.\n(152) The power of decision is my own.",
    "God is but Love, and therefore so am I.\n(153) In my defenselessness my safety lies.\n(154) I am among the ministers of God.",
    "God is but Love, and therefore so am I.\n(155) I will step back and let Him lead the way.\n(156) I walk with God in perfect holiness.",
    "God is but Love, and therefore so am I.\n(157) Into His Presence would I enter now.\n(158) Today I learn to give as I receive.",
    "God is but Love, and therefore so am I.\n(159) I give the miracles I have received.\n(160) I am at home. Fear is the stranger here.",
    "God is but Love, and therefore so am I.\n(161) Give me your blessing, holy Son of God.\n(162) I am as God created me.",
    "God is but Love, and therefore so am I.\n(163) There is no death. The Son of God is free.\n(164) Now are we one with Him Who is our Source.",
    "God is but Love, and therefore so am I.\n(165) Let not my mind deny the Thought of God.\n(166) I am entrusted with the gifts of God.",
    "God is but Love, and therefore so am I.\n(167) There is one life, and that I share with God.\n(168) Your grace is given me. I claim it now.",
    "God is but Love, and therefore so am I.\n(169) By grace I live. By grace I am released.\n(170) There is no cruelty in God and none in me.",
    "I trust my brothers, who are one with me.",
    "I will be still an instant and go home.",
    "I call upon God's Name and on my own.",
    "The Name of God is my inheritance.",
    "I want the peace of God.",
    "Salvation of the world depends on me.",
    "I bless the world because I bless myself.",
    "The peace of God is shining in me now.",
    "I feel the Love of God within me now.",
    "I choose the joy of God instead of pain.",
    "I am the holy Son of God Himself.",
    "I have a function God would have me fill.",
    "All things are lessons God would have me learn.",
    "I place the future in the Hands of God.",
    "Love is the way I walk in gratitude.",
    "It can be but myself I crucify.",
    "It can be but my gratitude I earn.",
    "Only my condemnation injures me.",
    "I am not a body. I am free.",
    "There is no peace except the peace of God.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(181) I trust my brothers, who are one with me.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(182) I will be still an instant and go home.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(183) I call upon God's Name and on my own.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(184) The Name of God is my inheritance.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(185) I want the peace of God.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(186) Salvation of the world depends on me.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(187) I bless the world because I bless myself.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(188) The peace of God is shining in me now.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(189) I feel the Love of God within me now.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(190) I choose the joy of God instead of pain.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(191) I am the holy Son of God Himself.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(192) I have a function God would have me fill.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(193) All things are lessons God would have me learn.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(194) I place the future in the Hands of God.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(195) Love is the way I walk in gratitude.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(196) It can be but myself I crucify.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(197) It can be but my gratitude I earn.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(198) Only my condemnation injures me.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(199) I am not a body. I am free.",
    "I am not a body. I am free.\nFor I am still as God created me.\n(200) There is no peace except the peace of God.",
    "Peace to my mind. Let all my thoughts be still.",
    "God is with me. I live and move in Him.",
    "God is my life. I have no life but His.",
    "God is my Father, and He loves His Son.",
    "God is my Father, and His Son loves Him.",
    "My home awaits me. I will hasten there.",
    "This is my holy instant of release.",
    "God has condemned me not. No more do I.",
    "Love, which created me, is what I am.",
    "Now will I seek and find the peace of God.",
    "Father, I will but to remember You.",
    "Be in my mind, my Father, through the day.",
    "I give my life to God to guide today.",
    "Father, today I am Your Son again.",
    "God in His mercy wills that I be saved.",
    "I rule my mind, which I alone must rule.",
    "Now would I be as God created me.",
    "On my decision all salvation rests.",
    "The glory of my Father is my own.",
    "Fear is not justified in any form.",
    "This holy instant is salvation come.",
    "This day is God's. It is my gift to Him.",
    "Today I will judge nothing that occurs.",
    "I am in danger nowhere in the world.",
    "Your peace is with me, Father. I am safe.",
    "To love my Father is to love His Son.",
    "Without forgiveness I will still be blind.",
    "Whatever suffers is not part of me.",
    "Forgiveness ends all suffering and loss.",
    "Let me not see myself as limited.",
    "I am in need of nothing but the truth.",
    "The Son of God is my Identity.",
    "My Self is ruler of the universe.",
    "Let every voice but God's be still in me.",
    "This day I choose to spend in perfect peace.",
    "God is the only goal I have today.",
    "Let me remember what my purpose is.",
    "Let me remember that my goal is God.",
    "Let me remember that there is no sin.",
    "Let me remember God created me.",
    "God is my refuge and security.",
    "Let me perceive no differences today.",
    "My holy vision sees all things as pure.",
    "I am surrounded by the Love of God.",
    "Creation's gentleness is all I see.",
    "My holy Self abides in you, God's Son.",
    "My heart is beating in the peace of God.",
    "Let all things be exactly as they are.",
    "My sight goes forth to look upon Christ's face.",
    "I will not use the body's eyes today.",
    "Christ's is the vision I will use today.",
    "How can illusions satisfy God's Son?",
    "The stillness of the peace of God is mine.",
    "Today belongs to love. Let me not fear.",
    "God's healing Voice protects all things today.",
    "The Word of God is given me to speak.",
    "Let me not bind Your Son with laws I made.",
    "If I am bound, my Father is not free.",
    "Creation's freedom promises my own.",
    "What limits can I lay upon God's Son?",
    "I can be hurt by nothing but my thoughts.",
    "I will not be afraid of love today.",
    "My true Identity abides in You.",
    "I can elect to change all thoughts that hurt.",
    "My holiness shines bright and clear today.",
    "The hush of Heaven holds my heart today.",
    "You are my goal, my Father. Only You.",
    "Let me forget my brother's past today.",
    "The past is over. It can touch me not.",
    "My present happiness is all I see.",
    "This is a day of stillness and of peace.",
    "A happy outcome to all things is sure.",
    "All fear is past and only love is here.",
    "My body is a wholly neutral thing.",
    "The Holy Spirit looks through me today.",
    "The Holy Spirit speaks through me today.",
    "Forgiveness is the only gift I give.",
    "I love You, Father, and I love Your Son.",
    "Eternal holiness abides in me.",
    "Only an instant does this world endure.",
    "And God Himself shall wipe away all tears.",
    "Where darkness was I look upon the light.",
    "The holy Christ is born in me today.",
    "Let not my world obscure the sight of Christ.",
    "There is a peace that Christ bestows on us.",
    "The gift of Christ is all I seek today.",
    "Conflicting wishes cannot be my will.",
    "This instant is the only time there is.",
    "I will not fear to look within today.",
    "In fearlessness and love I spend today.",
    "I judge all things as I would have them be.",
    "I see all things as I would have them be.",
    "Now let a new perception come to me.",
    "I seek a future different from the past.",
    "All gifts my brothers give belong to me.",
    "All gifts I give my brothers are my own.",
    "I follow in the way appointed me.",
    "In me salvation's means and end are one.",
    "I came for the salvation of the world.",
    "My Father gives all power unto me.",
    "Father, my freedom is in You alone.",
    "I can give up but what was never real.",
    "I gladly make the 'sacrifice' of fear.",
    "I merely follow, for I would not lead.",
    "All things I think I see reflect ideas.",
    "I am forever an Effect of God.",
    "I need but call and You will answer me.",
    "I choose the second place to gain the first.",
    "I have already chosen what You will.",
    "I will not hurt myself again today.",
    "There is no conflict, for my will is Yours.",
    "Fear binds the world. Forgiveness sets it free.",
    "Forgiveness ends the dream of conflict here.",
    "Today I claim the gifts forgiveness gives.",
    "I choose to see my brother's sinlessness.",
    "Forgiveness lets me know that minds are joined.",
    "My sinlessness protects me from all harm.",
    "I am affected only by my thoughts.",
    "I will receive whatever I request.",
    "I can be free of suffering today.",
    "I can attack but my own sinlessness,\nAnd it is only that which keeps me safe",
    "I let forgiveness rest upon all things,\nFor thus forgiveness will be given me.",
    "I am not asked to make a sacrifice\nTo find the mercy and the peace of God.",
    "Today I learn the law of love; that what\nI give my brother is my gift to me.",
    "I offer only miracles today,\nFor I would have them be returned to me.",
    "Today the peace of God envelops me,\nAnd I forget all things except His Love.",
    "Anger must come from judgment. Judgment is\nThe weapon I would use against myself,",
    "I have no cause for anger or for fear,\nFor You surround me. And in every need\nThat I perceive, Your grace suffices me.",
    "Today I let Christ's vision look upon\nAll things for me and judge them not, but give\nEach one a miracle of love instead.",
    "Miracles mirror God's eternal Love.\nTo offer them is to remember Him,\nAnd through His memory to save the world.",
    "My sinless brother is my guide to peace.\nMy sinful brother is my guide to pain.\nAnd which I choose to see I will behold.",
    "Judgment and love are opposites. From one\nCome all the sorrows of the world. But from\nThe other comes the peace of God Himself.",
    "My eyes, my tongue, my hands, my feet today\nHave but one purpose; to be given Christ\nTo use to bless the world with miracles.",
    "We stand together, Christ and I, in peace\nAnd certainty of purpose. And in Him\nIs His Creator, as He is in me.",
    "There is no end to all the peace and joy,\nAnd all the miracles that I will give,\nWhen I accept God's Word. Why not today?",
    "Sickness is but another name for sin.\nHealing is but another name for God.\nThe miracle is thus a call to Him.",
    "Truth answers every call we make to God,\nResponding first with miracles, and then\nReturning unto us to be itself.",
    "No call to God can be unheard nor left\nUnanswered. And of this I can be sure;\nHis answer is the one I really want.",
    "God's answer is some form of peace. All pain\nIs healed; all misery replaced with joy.\nAll prison doors are opened. And all sin is understood as merely a mistake.",
    "Peace be to me, the holy Son of God.\nPeace to my brother, who is one with me.\nLet all the world be blessed with peace through us.",
    "This holy instant would I give to you.\nBe You in charge. For I would follow You,\nCertain that Your direction gives me peace",
    "This holy instant would I give to you.\nBe You in charge. For I would follow You,\nCertain that Your direction gives me peace",
    "This holy instant would I give to you.\nBe You in charge. For I would follow You,\nCertain that Your direction gives me peace",
    "This holy instant would I give to you.\nBe You in charge. For I would follow You,\nCertain that Your direction gives me peace",
    "This holy instant would I give to you.\nBe You in charge. For I would follow You,\nCertain that Your direction gives me peace"];

const locale = require("locale");

let showClock = true;

var W = g.getWidth();
var H = g.getHeight();
var scale = W / 240;

const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes;
    return strTime;
};

function drawClock() {
    var now = Date();
    d = now.toString().split(' ');
    g.reset();
    g.clearRect(0, 24, W - 1, H - 1);
    g.setColor(g.theme.fg);
    g.setFontAlign(0, -1);
    g.setFontVector(80 * scale);
    g.drawString(formatAMPM(now), 4 + W / 2, H / 2 + 24 - 80 * scale);
    g.setFontVector(36 * scale);
    g.setColor(g.theme.fg2);
    d[1] = locale.month(now, 3);
    d[0] = locale.dow(now, 3);
    var dt = d[0] + " " + d[1] + " " + d[2];
    g.drawString(dt, W / 2, H / 2 + 24);
    g.flip();
}

const formatTextWrap = (text, maxLineLength) => {
    const words = text.replace(/[\r\n]+/g, ' \n').split(' ');
    //const words = text.split(' ');
    let lineLength = 0;

    // use functional reduce, instead of for loop 
    return words.reduce((result, word) => {
        if (word.includes('\n')) {
            lineLength = word.length - 2;
            return result ? result + ` ${word}` : `${word}`; // add space only when needed
        }
        else if (lineLength + word.length >= maxLineLength) {
            lineLength = word.length;
            return result + `\n${word}`; // don't add spaces upfront
        } else {
            lineLength += word.length + (result ? 1 : 0);
            return result ? result + ` ${word}` : `${word}`; // add space only when needed
        }
    }, '');
};

let scroll = 0;
let pause = 20;
let textWrapped = '';
let count;

const drawLesson = () => {

    g.setFont12x20();

    g.setColor(0, 0, 0);
    g.fillRect(0, 0, 176, 176);

    g.setColor(1, 1, 1);

    g.drawString(textWrapped, 5, 5 + scroll, false);

    pause = pause - 1;
    if (pause < 0 && count > 7) {
        scroll = scroll - 1;
    }

    if (scroll < -(count + 2) * 20) {
        scroll = 0;
        pause = 60;
    }

};

g.clear();

let clockInterval;
let drawInterval;

function clock() {
    if (clockInterval) {
        clearInterval(clockInterval);
    }
    if (drawInterval) {
        clearInterval(drawInterval);
    }
    if (showClock) {
        g.reset();
        g.setColor(0, 0, 0);
        g.fillRect(0, 0, 176, 176);
        drawClock();
        clockInterval = setInterval(drawClock, 60000);
        Bangle.loadWidgets();
        Bangle.drawWidgets();
    } else {
        g.reset();
        scroll = 0;
        pause = 20;
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);

        textWrapped = formatTextWrap(miracleArray[day - 1], 17);
        count = (textWrapped.match(/\n/g) || []).length;

        drawInterval = setInterval(drawLesson, 10);
    }

}

Bangle.on('touch', () => {
    showClock = !showClock;
    clock();
});

clock();

Bangle.setUI("clock");

