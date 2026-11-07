/*
  Curated starter collection. Each click asks the Internet Archive for a snapshot
  close to the listed year. Add entries using the same object format.
*/
const ARCHIVE_SITES = [
  {
    "title": "GeoCities",
    "year": "1999",
    "description": "A classic home for personal pages, fan sites and tiny internet neighborhoods.",
    "url": "https://geocities.com/"
  },
  {
    "title": "Angelfire",
    "year": "2001",
    "description": "Personal homepages, visitor counters and handmade web graphics.",
    "url": "https://www.angelfire.com/"
  },
  {
    "title": "Tripod",
    "year": "2001",
    "description": "Another old-school home for personal websites and hobby pages.",
    "url": "https://www.tripod.com/"
  },
  {
    "title": "Yahoo!",
    "year": "2000",
    "description": "A portal-era snapshot from when the web was organized into directories.",
    "url": "https://www.yahoo.com/"
  },
  {
    "title": "AltaVista",
    "year": "2001",
    "description": "An early search engine from before search became what it is today.",
    "url": "https://www.altavista.com/"
  },
  {
    "title": "Ask Jeeves",
    "year": "2001",
    "description": "The question-and-answer search site with its famous butler mascot.",
    "url": "https://www.ask.com/"
  },
  {
    "title": "Lycos",
    "year": "2000",
    "description": "A classic search and web portal from the early web.",
    "url": "https://www.lycos.com/"
  },
  {
    "title": "Excite",
    "year": "2000",
    "description": "A portal packed with search, news and internet-era features.",
    "url": "https://www.excite.com/"
  },
  {
    "title": "Netscape",
    "year": "1998",
    "description": "A look back at one of the browsers that helped popularize the web.",
    "url": "https://home.netscape.com/"
  },
  {
    "title": "AOL",
    "year": "2001",
    "description": "The front door to the internet for a generation of dial-up users.",
    "url": "https://www.aol.com/"
  },
  {
    "title": "MSN",
    "year": "2001",
    "description": "Microsoft's early web portal with news, entertainment and more.",
    "url": "https://www.msn.com/"
  },
  {
    "title": "Google",
    "year": "2001",
    "description": "The famously minimal search homepage in its early years.",
    "url": "https://www.google.com/"
  },
  {
    "title": "Apple",
    "year": "2001",
    "description": "Apple's website from the colorful early-2000s era.",
    "url": "https://www.apple.com/"
  },
  {
    "title": "Microsoft",
    "year": "2001",
    "description": "A snapshot of Microsoft's early-2000s web presence.",
    "url": "https://www.microsoft.com/"
  },
  {
    "title": "Amazon",
    "year": "2000",
    "description": "The online bookstore look before Amazon became everything else.",
    "url": "https://www.amazon.com/"
  },
  {
    "title": "eBay",
    "year": "2000",
    "description": "The early auction-site experience, full of listings and simple layouts.",
    "url": "https://www.ebay.com/"
  },
  {
    "title": "YouTube",
    "year": "2006",
    "description": "The video site's early design, from its first years online.",
    "url": "https://www.youtube.com/"
  },
  {
    "title": "Myspace",
    "year": "2006",
    "description": "Profile culture, custom pages and the social web before the feed era.",
    "url": "https://myspace.com/"
  },
  {
    "title": "Xanga",
    "year": "2005",
    "description": "A blogging and profile community remembered for personal layouts.",
    "url": "https://www.xanga.com/"
  },
  {
    "title": "LiveJournal",
    "year": "2003",
    "description": "A snapshot of the personal blogging community.",
    "url": "https://www.livejournal.com/"
  },
  {
    "title": "Blogger",
    "year": "2003",
    "description": "Early blogging, when personal sites were becoming everyday publishing.",
    "url": "https://www.blogger.com/"
  },
  {
    "title": "Tumblr",
    "year": "2011",
    "description": "A look at the early dashboard and blog aesthetic.",
    "url": "https://www.tumblr.com/"
  },
  {
    "title": "Newgrounds",
    "year": "2004",
    "description": "A home for browser games, animation and independent creators.",
    "url": "https://www.newgrounds.com/"
  },
  {
    "title": "Miniclip",
    "year": "2005",
    "description": "The classic browser-game portal from the Flash era.",
    "url": "https://www.miniclip.com/"
  },
  {
    "title": "Addicting Games",
    "year": "2005",
    "description": "A collection of the simple web games people played between classes.",
    "url": "https://www.addictinggames.com/"
  },
  {
    "title": "Coolmath Games",
    "year": "2005",
    "description": "The familiar school-computer game destination.",
    "url": "https://www.coolmathgames.com/"
  },
  {
    "title": "Homestar Runner",
    "year": "2004",
    "description": "A landmark web cartoon with its own strange little universe.",
    "url": "https://www.homestarrunner.com/"
  },
  {
    "title": "Albino Blacksheep",
    "year": "2004",
    "description": "A classic destination for Flash animations and internet oddities.",
    "url": "https://www.albinoblacksheep.com/"
  },
  {
    "title": "eBaum's World",
    "year": "2004",
    "description": "A snapshot of the viral-video and meme-sharing web era.",
    "url": "https://www.ebaumsworld.com/"
  },
  {
    "title": "Neopets",
    "year": "2003",
    "description": "Virtual pets, games and a colorful online world.",
    "url": "https://www.neopets.com/"
  },
  {
    "title": "RuneScape",
    "year": "2005",
    "description": "The old-school game website from the early MMORPG era.",
    "url": "https://www.runescape.com/"
  },
  {
    "title": "Habbo",
    "year": "2005",
    "description": "A virtual hotel and social world with a distinct pixel-art look.",
    "url": "https://www.habbo.com/"
  },
  {
    "title": "Gaia Online",
    "year": "2006",
    "description": "An avatar community with forums, profiles and virtual items.",
    "url": "https://www.gaiaonline.com/"
  },
  {
    "title": "Club Penguin",
    "year": "2008",
    "description": "A nostalgic look at the penguin-filled virtual world.",
    "url": "https://www.clubpenguin.com/"
  },
  {
    "title": "LEGO",
    "year": "2001",
    "description": "LEGO's early web design and playful product pages.",
    "url": "https://www.lego.com/"
  },
  {
    "title": "Nintendo",
    "year": "2001",
    "description": "Nintendo's early-2000s website and game announcements.",
    "url": "https://www.nintendo.com/"
  },
  {
    "title": "SEGA",
    "year": "2001",
    "description": "A look back at SEGA's web presence around the Dreamcast era.",
    "url": "https://www.sega.com/"
  },
  {
    "title": "Pokémon",
    "year": "2000",
    "description": "The official Pokémon site during the early online fandom years.",
    "url": "https://www.pokemon.com/"
  },
  {
    "title": "Cartoon Network",
    "year": "2002",
    "description": "A portal into classic Cartoon Network games and shows.",
    "url": "https://www.cartoonnetwork.com/"
  },
  {
    "title": "Nickelodeon",
    "year": "2002",
    "description": "The old Nickelodeon web experience, with games and show pages.",
    "url": "https://www.nick.com/"
  },
  {
    "title": "PBS Kids",
    "year": "2003",
    "description": "A colorful archive-era look at educational games and characters.",
    "url": "https://pbskids.org/"
  },
  {
    "title": "NASA",
    "year": "2000",
    "description": "An early-2000s look at NASA's public website.",
    "url": "https://www.nasa.gov/"
  },
  {
    "title": "Space Jam",
    "year": "1996",
    "description": "The original Space Jam promotional website, a famous web time capsule.",
    "url": "https://www.spacejam.com/1996/"
  },
  {
    "title": "Star Wars",
    "year": "2002",
    "description": "The official Star Wars site during the prequel-era web.",
    "url": "https://www.starwars.com/"
  },
  {
    "title": "Disney",
    "year": "2001",
    "description": "A snapshot of Disney's early web experience.",
    "url": "https://disney.com/"
  },
  {
    "title": "MTV",
    "year": "2001",
    "description": "The music television site from the early broadband era.",
    "url": "https://www.mtv.com/"
  },
  {
    "title": "VH1",
    "year": "2001",
    "description": "A look at VH1's early web pages and music coverage.",
    "url": "https://www.vh1.com/"
  },
  {
    "title": "DeviantArt",
    "year": "2004",
    "description": "An early view of the online art community.",
    "url": "https://www.deviantart.com/"
  },
  {
    "title": "Flickr",
    "year": "2005",
    "description": "Photo sharing before every social app became a camera.",
    "url": "https://www.flickr.com/"
  },
  {
    "title": "Photobucket",
    "year": "2006",
    "description": "The image-hosting site behind countless old forum signatures.",
    "url": "https://photobucket.com/"
  },
  {
    "title": "Slashdot",
    "year": "2001",
    "description": "A classic technology-news community and comment culture.",
    "url": "https://slashdot.org/"
  },
  {
    "title": "The Internet Archive",
    "year": "2001",
    "description": "The archive behind this whole little time-travel project.",
    "url": "https://archive.org/"
  },
  {
    "title": "Wikipedia",
    "year": "2003",
    "description": "The early encyclopedia as it grew into a huge public resource.",
    "url": "https://www.wikipedia.org/"
  },
  {
    "title": "Craigslist",
    "year": "2001",
    "description": "A famously plain classifieds site from the early web.",
    "url": "https://www.craigslist.org/"
  },
  {
    "title": "MapQuest",
    "year": "2001",
    "description": "Before phone navigation, people printed directions from here.",
    "url": "https://www.mapquest.com/"
  },
  {
    "title": "Weather.com",
    "year": "2001",
    "description": "A look at the old-school weather portal.",
    "url": "https://weather.com/"
  },
  {
    "title": "CNN",
    "year": "2001",
    "description": "A snapshot of online news in the early 2000s.",
    "url": "https://www.cnn.com/"
  },
  {
    "title": "BBC News",
    "year": "2001",
    "description": "The BBC's early web news layout.",
    "url": "https://www.bbc.com/news"
  },
  {
    "title": "The Onion",
    "year": "2001",
    "description": "Satirical headlines from the early online publication era.",
    "url": "https://www.theonion.com/"
  },
  {
    "title": "Macromedia",
    "year": "2004",
    "description": "A reminder of the company behind tools that shaped the Flash era.",
    "url": "https://www.macromedia.com/"
  },
  {
    "title": "Winamp",
    "year": "2001",
    "description": "The website for the legendary desktop media player.",
    "url": "https://www.winamp.com/"
  },
  {
    "title": "RealPlayer",
    "year": "2001",
    "description": "A glimpse of the early streaming-media web.",
    "url": "https://www.real.com/"
  },
  {
    "title": "Internet Movie Database",
    "year": "2001",
    "description": "The old IMDb layout from the early movie-database days.",
    "url": "https://www.imdb.com/"
  },
  {
    "title": "Rotten Tomatoes",
    "year": "2001",
    "description": "Early movie reviews and the rise of the Tomatometer.",
    "url": "https://www.rottentomatoes.com/"
  },
  {
    "title": "Ask.com",
    "year": "2005",
    "description": "A later look at the search site after its Jeeves-era identity.",
    "url": "https://www.ask.com/"
  },
  {
    "title": "Twitch",
    "year": "2012",
    "description": "The early days of livestreaming after the Justin.tv era.",
    "url": "https://www.twitch.tv/"
  },
  {
    "title": "Reddit",
    "year": "2008",
    "description": "A snapshot of Reddit before its modern redesigns.",
    "url": "https://www.reddit.com/"
  },
  {
    "title": "Facebook",
    "year": "2006",
    "description": "A look at the early social network's public homepage.",
    "url": "https://www.facebook.com/"
  },
  {
    "title": "Twitter",
    "year": "2007",
    "description": "The early microblogging site before it became a global timeline.",
    "url": "https://twitter.com/"
  },
    {
    "title": "Internet Explorer",
    "year": "1998",
    "description": "Microsoft's iconic browser from the early days of mainstream internet browsing.",
    "url": "https://www.microsoft.com/"
  },
  {
    "title": "Opera",
    "year": "2000",
    "description": "An early look at the alternative web browser.",
    "url": "https://www.opera.com/"
  },
  {
    "title": "Mozilla",
    "year": "2002",
    "description": "The early Mozilla project that helped shape modern web browsers.",
    "url": "https://www.mozilla.org/"
  },
  {
    "title": "Firefox",
    "year": "2004",
    "description": "The original Firefox era and the browser that challenged Internet Explorer.",
    "url": "https://www.mozilla.org/"
  },
  {
    "title": "Wikipedia",
    "year": "2001",
    "description": "The beginning of the community-built online encyclopedia.",
    "url": "https://www.wikipedia.org/"
  },
  {
    "title": "Encyclopedia Britannica",
    "year": "2000",
    "description": "The traditional encyclopedia adapting to the internet.",
    "url": "https://www.britannica.com/"
  },
  {
    "title": "Dictionary.com",
    "year": "2000",
    "description": "An early online dictionary and reference website.",
    "url": "https://www.dictionary.com/"
  },
  {
    "title": "Urban Dictionary",
    "year": "2004",
    "description": "The internet's collection of slang, jokes and unusual definitions.",
    "url": "https://www.urbandictionary.com/"
  },
  {
    "title": "WebMD",
    "year": "2001",
    "description": "An early version of the popular online health information website.",
    "url": "https://www.webmd.com/"
  },
  {
    "title": "CNET",
    "year": "2001",
    "description": "Technology news, software downloads and computer reviews.",
    "url": "https://www.cnet.com/"
  },
  {
    "title": "ZDNet",
    "year": "2001",
    "description": "A technology news destination from the early internet era.",
    "url": "https://www.zdnet.com/"
  },
  {
    "title": "TechCrunch",
    "year": "2006",
    "description": "Early coverage of startups, technology and internet companies.",
    "url": "https://techcrunch.com/"
  },
  {
    "title": "Wired",
    "year": "1997",
    "description": "The digital version of the magazine covering technology and internet culture.",
    "url": "https://www.wired.com/"
  },
  {
    "title": "PCWorld",
    "year": "2001",
    "description": "Computer hardware, software and technology news.",
    "url": "https://www.pcworld.com/"
  },
  {
    "title": "Tom's Hardware",
    "year": "2001",
    "description": "A classic destination for PC building and hardware enthusiasts.",
    "url": "https://www.tomshardware.com/"
  },
  {
    "title": "Neowin",
    "year": "2003",
    "description": "A community focused on Windows, software and technology news.",
    "url": "https://www.neowin.net/"
  },
  {
    "title": "The Register",
    "year": "2001",
    "description": "Technology news with its own distinctive style.",
    "url": "https://www.theregister.com/"
  },
  {
    "title": "Fark",
    "year": "2003",
    "description": "A community-driven news and humor website.",
    "url": "https://www.fark.com/"
  },
  {
    "title": "Digg",
    "year": "2006",
    "description": "The social news website where users submitted and voted on stories.",
    "url": "https://digg.com/"
  },
  {
    "title": "StumbleUpon",
    "year": "2007",
    "description": "Discovering random websites through a button that sent you somewhere new.",
    "url": "https://www.stumbleupon.com/"
  },
  {
    "title": "Delicious",
    "year": "2006",
    "description": "A popular social bookmarking service for saving websites.",
    "url": "https://del.icio.us/"
  },
  {
    "title": "Friendster",
    "year": "2004",
    "description": "One of the early social networks that helped introduce online profiles.",
    "url": "https://www.friendster.com/"
  },
  {
    "title": "Orkut",
    "year": "2007",
    "description": "Google's old social network with communities and personal profiles.",
    "url": "https://www.orkut.com/"
  },
  {
    "title": "Bebo",
    "year": "2007",
    "description": "A social networking website with customizable profiles.",
    "url": "https://www.bebo.com/"
  },
  {
    "title": "Hi5",
    "year": "2007",
    "description": "An early social network centered around friends and profile pages.",
    "url": "https://www.hi5.com/"
  },
  {
    "title": "Tagged",
    "year": "2008",
    "description": "A social discovery website from the era of profile-based networking.",
    "url": "https://www.tagged.com/"
  },
  {
    "title": "Formspring",
    "year": "2010",
    "description": "An anonymous question-and-answer social networking site.",
    "url": "https://www.formspring.me/"
  },
  {
    "title": "Ask.fm",
    "year": "2013",
    "description": "The question-and-answer social network popular during the early 2010s.",
    "url": "https://ask.fm/"
  },
  {
    "title": "Pinterest",
    "year": "2012",
    "description": "The early days of collecting images and ideas on digital boards.",
    "url": "https://www.pinterest.com/"
  },
  {
    "title": "Instagram",
    "year": "2012",
    "description": "The early photo-sharing website before it became a massive social platform.",
    "url": "https://www.instagram.com/"
  },
  {
    "title": "Vine",
    "year": "2014",
    "description": "The looping six-second video platform that defined a generation of internet humor.",
    "url": "https://vine.co/"
  },
  {
    "title": "Pinterest",
    "year": "2015",
    "description": "A mid-2010s snapshot of the image-sharing platform.",
    "url": "https://www.pinterest.com/"
  },
  {
    "title": "Foursquare",
    "year": "2010",
    "description": "Location check-ins, badges and exploring places with friends.",
    "url": "https://foursquare.com/"
  },
  {
    "title": "Yik Yak",
    "year": "2015",
    "description": "An anonymous local social network popular on college campuses.",
    "url": "https://www.yikyak.com/"
  },
  {
    "title": "Google+",
    "year": "2012",
    "description": "Google's social networking experiment with circles and communities.",
    "url": "https://plus.google.com/"
  },
  {
    "title": "Google",
    "year": "1998",
    "description": "An early look at the search engine that changed how people explored the web.",
    "url": "https://www.google.com/"
  },
  {
    "title": "Google Images",
    "year": "2002",
    "description": "The early image search experience.",
    "url": "https://images.google.com/"
  },
  {
    "title": "Google Video",
    "year": "2006",
    "description": "Google's original video-sharing and search platform.",
    "url": "https://video.google.com/"
  },
  {
    "title": "Google Maps",
    "year": "2005",
    "description": "The first years of online interactive maps.",
    "url": "https://maps.google.com/"
  },
  {
    "title": "Google Earth",
    "year": "2006",
    "description": "Explore the world through the early version of Google Earth.",
    "url": "https://earth.google.com/"
  },
  {
    "title": "Google Reader",
    "year": "2007",
    "description": "The beloved RSS reader that collected updates from websites.",
    "url": "https://www.google.com/reader/"
  },
  {
    "title": "Google Answers",
    "year": "2004",
    "description": "A question-and-answer service where users paid researchers for answers.",
    "url": "https://answers.google.com/"
  },
  {
    "title": "Google Labs",
    "year": "2005",
    "description": "A collection of experimental projects and unfinished Google ideas.",
    "url": "https://labs.google/"
  },
  {
    "title": "Gmail",
    "year": "2004",
    "description": "The early days of Google's email service.",
    "url": "https://mail.google.com/"
  },
  {
    "title": "Hotmail",
    "year": "2000",
    "description": "One of the first widely used free webmail services.",
    "url": "https://www.hotmail.com/"
  },
  {
    "title": "Yahoo Mail",
    "year": "2001",
    "description": "The classic webmail experience from the early 2000s.",
    "url": "https://mail.yahoo.com/"
  },
  {
    "title": "AIM",
    "year": "2004",
    "description": "The online home of AOL Instant Messenger and its famous buddy lists.",
    "url": "https://www.aim.com/"
  },
  {
    "title": "ICQ",
    "year": "2000",
    "description": "One of the earliest instant messaging platforms.",
    "url": "https://www.icq.com/"
  },
  {
    "title": "MSN Messenger",
    "year": "2005",
    "description": "The home of contact lists, custom statuses and instant messaging.",
    "url": "https://messenger.msn.com/"
  },
  {
    "title": "Yahoo Messenger",
    "year": "2004",
    "description": "A classic instant messaging service from the early web.",
    "url": "https://messenger.yahoo.com/"
  },
  {
    "title": "Skype",
    "year": "2005",
    "description": "The early website for the internet calling and messaging service.",
    "url": "https://www.skype.com/"
  },
  {
    "title": "TeamSpeak",
    "year": "2004",
    "description": "Voice communication software popular with online gaming communities.",
    "url": "https://www.teamspeak.com/"
  },
  {
    "title": "Ventrilo",
    "year": "2005",
    "description": "A classic voice communication program used by gaming groups.",
    "url": "https://www.ventrilo.com/"
  },
  {
    "title": "Xfire",
    "year": "2007",
    "description": "A gaming social network that tracked what games your friends were playing.",
    "url": "https://www.xfire.com/"
  },
  {
    "title": "Steam",
    "year": "2004",
    "description": "The early digital storefront that changed PC game distribution.",
    "url": "https://store.steampowered.com/"
  },
  {
    "title": "GameFAQs",
    "year": "2001",
    "description": "Walkthroughs, guides and community discussions for video games.",
    "url": "https://gamefaqs.gamespot.com/"
  },
  {
    "title": "GameSpot",
    "year": "2001",
    "description": "Classic video game reviews, previews and gaming news.",
    "url": "https://www.gamespot.com/"
  },
  {
    "title": "IGN",
    "year": "2001",
    "description": "A look at the gaming and entertainment website in its early years.",
    "url": "https://www.ign.com/"
  },
  {
    "title": "Kongregate",
    "year": "2008",
    "description": "A huge collection of browser games and community-created experiences.",
    "url": "https://www.kongregate.com/"
  },
  {
    "title": "Armor Games",
    "year": "2007",
    "description": "A major destination for Flash games and online gaming.",
    "url": "https://armorgames.com/"
  },
  {
    "title": "Jay Is Games",
    "year": "2007",
    "description": "A website dedicated to browser games, puzzles and indie discoveries.",
    "url": "https://jayisgames.com/"
  },
  {
    "title": "Kizi",
    "year": "2013",
    "description": "A colorful browser-game website popular during the 2010s.",
    "url": "https://kizi.com/"
  },
  {
    "title": "Poptropica",
    "year": "2008",
    "description": "An adventure game website built around islands and exploration.",
    "url": "https://www.poptropica.com/"
  },
  {
    "title": "AdventureQuest",
    "year": "2004",
    "description": "A browser-based fantasy RPG with a long-running online world.",
    "url": "https://www.battleon.com/"
  },
  {
    "title": "Moshi Monsters",
    "year": "2010",
    "description": "A colorful virtual pet game with puzzles and online activities.",
    "url": "https://www.moshimonsters.com/"
  },
  {
    "title": "Whyville",
    "year": "2004",
    "description": "An educational virtual world with avatars and social activities.",
    "url": "https://www.whyville.net/"
  },
  {
    "title": "Second Life",
    "year": "2006",
    "description": "A virtual world where users created spaces, avatars and communities.",
    "url": "https://secondlife.com/"
  },
  {
    "title": "Roblox",
    "year": "2007",
    "description": "An early version of the user-created gaming platform.",
    "url": "https://www.roblox.com/"
  },
  {
    "title": "Minecraft",
    "year": "2011",
    "description": "The early official website for the block-building phenomenon.",
    "url": "https://www.minecraft.net/"
  },
  {
    "title": "World of Warcraft",
    "year": "2005",
    "description": "The official website during the early days of the MMORPG.",
    "url": "https://worldofwarcraft.blizzard.com/"
  },
  {
    "title": "Blizzard Entertainment",
    "year": "2001",
    "description": "The gaming company behind Warcraft, Diablo and StarCraft.",
    "url": "https://www.blizzard.com/"
  },
  {
    "title": "Xbox",
    "year": "2002",
    "description": "Microsoft's original Xbox-era website and gaming information.",
    "url": "https://www.xbox.com/"
  },
  {
    "title": "PlayStation",
    "year": "2001",
    "description": "The early PlayStation website during the PS2 era.",
    "url": "https://www.playstation.com/"
  },
  {
    "title": "GameCube",
    "year": "2002",
    "description": "Nintendo's website during the GameCube generation.",
    "url": "https://www.nintendo.com/"
  },
  {
    "title": "Atari",
    "year": "2001",
    "description": "A look back at the classic gaming company's online presence.",
    "url": "https://www.atari.com/"
  },
  {
    "title": "ModDB",
    "year": "2005",
    "description": "A community archive of video game modifications and projects.",
    "url": "https://www.moddb.com/"
  },
  {
    "title": "Nexus Mods",
    "year": "2007",
    "description": "The early modding community and its collection of game modifications.",
    "url": "https://www.nexusmods.com/"
  },
  {
    "title": "GameBanana",
    "year": "2007",
    "description": "A community for game mods, skins and custom content.",
    "url": "https://gamebanana.com/"
  },
  {
    "title": "Facepunch",
    "year": "2008",
    "description": "A gaming and modding community known for its forums.",
    "url": "https://facepunch.com/"
  },
  {
    "title": "4chan",
    "year": "2005",
    "description": "An early look at the anonymous imageboard culture of the web.",
    "url": "https://www.4chan.org/"
  },
  {
    "title": "Something Awful",
    "year": "2001",
    "description": "An influential internet forum and humor community.",
    "url": "https://www.somethingawful.com/"
  },
  {
    "title": "Bodybuilding.com Forums",
    "year": "2005",
    "description": "A snapshot of the large forum communities of the 2000s.",
    "url": "https://forum.bodybuilding.com/"
  },
  {
    "title": "NeoGAF",
    "year": "2006",
    "description": "An influential video game discussion forum.",
    "url": "https://www.neogaf.com/"
  },
  {
    "title": "Overclock.net",
    "year": "2006",
    "description": "A PC hardware community dedicated to computers and overclocking.",
    "url": "https://www.overclock.net/"
  },
  {
    "title": "HardForum",
    "year": "2005",
    "description": "A computer hardware discussion community.",
    "url": "https://hardforum.com/"
  },
  {
    "title": "4chan Archive",
    "year": "2010",
    "description": "A snapshot of imageboard culture and anonymous internet discussions.",
    "url": "https://www.4chan.org/"
  },
  {
    "title": "DeviantArt",
    "year": "2007",
    "description": "The online art community during the height of custom profile pages.",
    "url": "https://www.deviantart.com/"
  },
  {
    "title": "Newgrounds",
    "year": "2010",
    "description": "The Flash animation and independent game community.",
    "url": "https://www.newgrounds.com/"
  },
  {
    "title": "Flashkit",
    "year": "2003",
    "description": "A resource website for Flash developers and animators.",
    "url": "https://www.flashkit.com/"
  },
  {
    "title": "K10K",
    "year": "2001",
    "description": "A digital design community known for experimental web graphics.",
    "url": "https://www.k10k.net/"
  },
  {
    "title": "CSS Zen Garden",
    "year": "2004",
    "description": "A demonstration of creative website designs using CSS.",
    "url": "https://www.csszengarden.com/"
  },
  {
    "title": "A List Apart",
    "year": "2001",
    "description": "Articles about web design, development and internet standards.",
    "url": "https://alistapart.com/"
  },
  {
    "title": "Smashing Magazine",
    "year": "2007",
    "description": "Web design inspiration, tutorials and development articles.",
    "url": "https://www.smashingmagazine.com/"
  },
  {
    "title": "Deja.com",
    "year": "2000",
    "description": "An early search engine for Usenet discussions and newsgroups.",
    "url": "https://www.deja.com/"
  },
  {
    "title": "Internet Underground Music Archive",
    "year": "1998",
    "description": "An early independent music community that helped artists share their work online.",
    "url": "https://www.iuma.com/"
  },
  {
    "title": "MP3.com",
    "year": "2000",
    "description": "A major early destination for digital music and independent artists.",
    "url": "https://www.mp3.com/"
  },
  {
    "title": "Last.fm",
    "year": "2005",
    "description": "Music tracking, recommendations and the beginnings of social music discovery.",
    "url": "https://www.last.fm/"
  },
  {
    "title": "Pandora",
    "year": "2006",
    "description": "The early internet radio service built around music recommendations.",
    "url": "https://www.pandora.com/"
  },
  {
    "title": "SoundCloud",
    "year": "2010",
    "description": "An early look at the platform that became a home for independent music.",
    "url": "https://soundcloud.com/"
  },
  {
    "title": "MySpace Music",
    "year": "2008",
    "description": "The era when bands used MySpace profiles to share music.",
    "url": "https://myspace.com/"
  },
  {
    "title": "PureVolume",
    "year": "2007",
    "description": "A music community where independent bands shared songs and profiles.",
    "url": "https://www.purevolume.com/"
  },
  {
    "title": "Bandcamp",
    "year": "2010",
    "description": "Independent music pages and direct artist-to-listener releases.",
    "url": "https://bandcamp.com/"
  },
  {
    "title": "Pitchfork",
    "year": "2001",
    "description": "An influential independent music publication.",
    "url": "https://pitchfork.com/"
  },
  {
    "title": "AllMusic",
    "year": "2001",
    "description": "A huge database of albums, artists and music reviews.",
    "url": "https://www.allmusic.com/"
  },
  {
    "title": "Genius",
    "year": "2014",
    "description": "The early days of the music lyrics and annotation community.",
    "url": "https://genius.com/"
  },
  {
    "title": "MTV News",
    "year": "2005",
    "description": "Music, celebrity and entertainment reporting from the 2000s.",
    "url": "https://www.mtv.com/news"
  },
  {
    "title": "VH1 Classic",
    "year": "2005",
    "description": "A look at the music television network's older online presence.",
    "url": "https://www.vh1.com/"
  },
  {
    "title": "Yahoo Music",
    "year": "2006",
    "description": "Music videos, artist pages and music news from Yahoo.",
    "url": "https://music.yahoo.com/"
  },
  {
    "title": "Napster",
    "year": "2001",
    "description": "The famous music-sharing service that changed digital music.",
    "url": "https://www.napster.com/"
  },
  {
    "title": "WinMX",
    "year": "2004",
    "description": "A peer-to-peer file-sharing program popular in the early 2000s.",
    "url": "https://www.winmx.com/"
  },
  {
    "title": "LimeWire",
    "year": "2006",
    "description": "The website for the famous file-sharing program.",
    "url": "https://www.limewire.com/"
  },
  {
    "title": "Kazaa",
    "year": "2003",
    "description": "An early peer-to-peer file-sharing service.",
    "url": "https://www.kazaa.com/"
  },
  {
    "title": "BearShare",
    "year": "2005",
    "description": "A file-sharing program from the peer-to-peer era.",
    "url": "https://www.bearshare.com/"
  },
  {
    "title": "Shareaza",
    "year": "2005",
    "description": "A file-sharing client from the early 2000s.",
    "url": "https://shareaza.sourceforge.net/"
  },
  {
    "title": "WinRAR",
    "year": "2004",
    "description": "The classic archive utility's website.",
    "url": "https://www.win-rar.com/"
  },
  {
    "title": "Download.com",
    "year": "2003",
    "description": "A popular destination for downloading PC software.",
    "url": "https://download.cnet.com/"
  },
  {
    "title": "Softpedia",
    "year": "2005",
    "description": "A large software download and technology information website.",
    "url": "https://www.softpedia.com/"
  },
  {
    "title": "FileHippo",
    "year": "2007",
    "description": "A popular software download website.",
    "url": "https://filehippo.com/"
  },
  {
    "title": "SourceForge",
    "year": "2001",
    "description": "An early home for open-source software projects.",
    "url": "https://sourceforge.net/"
  },
  {
    "title": "GitHub",
    "year": "2010",
    "description": "The early days of the platform that changed collaborative software development.",
    "url": "https://github.com/"
  },
  {
    "title": "CodeProject",
    "year": "2003",
    "description": "A developer community sharing programming tutorials and projects.",
    "url": "https://www.codeproject.com/"
  },
  {
    "title": "Pastebin",
    "year": "2008",
    "description": "A simple place to share text and code snippets online.",
    "url": "https://pastebin.com/"
  },
  {
    "title": "W3Schools",
    "year": "2003",
    "description": "A classic resource for learning HTML, CSS and web development.",
    "url": "https://www.w3schools.com/"
  },
  {
    "title": "Stack Overflow",
    "year": "2010",
    "description": "The early programming question-and-answer community.",
    "url": "https://stackoverflow.com/"
  },
  {
    "title": "Codecademy",
    "year": "2012",
    "description": "An interactive website for learning programming.",
    "url": "https://www.codecademy.com/"
  },
  {
    "title": "Khan Academy",
    "year": "2010",
    "description": "The early online learning platform with free educational lessons.",
    "url": "https://www.khanacademy.org/"
  },
  {
    "title": "MIT OpenCourseWare",
    "year": "2005",
    "description": "Free educational course materials from MIT.",
    "url": "https://ocw.mit.edu/"
  },
  {
    "title": "Instructables",
    "year": "2007",
    "description": "A community sharing step-by-step creative projects.",
    "url": "https://www.instructables.com/"
  },
  {
    "title": "HowStuffWorks",
    "year": "2001",
    "description": "An educational website explaining how everyday things work.",
    "url": "https://www.howstuffworks.com/"
  },
  {
    "title": "eHow",
    "year": "2004",
    "description": "A collection of online guides and how-to articles.",
    "url": "https://www.ehow.com/"
  },
  {
    "title": "About.com",
    "year": "2001",
    "description": "A huge collection of topic-specific guides and information.",
    "url": "https://www.about.com/"
  },
  {
    "title": "Answers.com",
    "year": "2005",
    "description": "A question-and-answer website covering almost every subject.",
    "url": "https://www.answers.com/"
  },
  {
    "title": "Ask.com",
    "year": "2001",
    "description": "A snapshot of the search engine during its Ask Jeeves era.",
    "url": "https://www.ask.com/"
  },
  {
    "title": "Dogpile",
    "year": "2001",
    "description": "A search engine that combined results from multiple search providers.",
    "url": "https://www.dogpile.com/"
  },
  {
    "title": "MetaCrawler",
    "year": "2000",
    "description": "An early metasearch engine that gathered results from other search engines.",
    "url": "https://www.metacrawler.com/"
  },
  {
    "title": "WebCrawler",
    "year": "2000",
    "description": "One of the earliest search engines to index the full text of websites.",
    "url": "https://www.webcrawler.com/"
  },
  {
    "title": "HotBot",
    "year": "2000",
    "description": "A popular search engine from the early days of the web.",
    "url": "https://www.hotbot.com/"
  },
  {
    "title": "Dmoz",
    "year": "2005",
    "description": "The Open Directory Project, a human-edited directory of websites.",
    "url": "https://dmoz.org/"
  },
  {
    "title": "Yellow Pages",
    "year": "2001",
    "description": "The classic telephone directory making its way onto the web.",
    "url": "https://www.yellowpages.com/"
  },
  {
    "title": "Whitepages",
    "year": "2001",
    "description": "An online version of the traditional directory service.",
    "url": "https://www.whitepages.com/"
  },
  {
    "title": "Monster",
    "year": "2001",
    "description": "One of the early major online job-search websites.",
    "url": "https://www.monster.com/"
  },
  {
    "title": "CareerBuilder",
    "year": "2001",
    "description": "An early internet job-search and career website.",
    "url": "https://www.careerbuilder.com/"
  },
  {
    "title": "LinkedIn",
    "year": "2004",
    "description": "The early professional networking website.",
    "url": "https://www.linkedin.com/"
  },
  {
    "title": "Indeed",
    "year": "2007",
    "description": "A job-search engine from the late 2000s.",
    "url": "https://www.indeed.com/"
  },
  {
    "title": "PayPal",
    "year": "2001",
    "description": "The early online payment service.",
    "url": "https://www.paypal.com/"
  },
  {
    "title": "Napster",
    "year": "2002",
    "description": "The redesigned music service after its original peer-to-peer era.",
    "url": "https://www.napster.com/"
  },
  {
    "title": "Etsy",
    "year": "2007",
    "description": "The early marketplace for handmade goods and independent sellers.",
    "url": "https://www.etsy.com/"
  },
  {
    "title": "Newegg",
    "year": "2005",
    "description": "A classic online computer hardware and electronics store.",
    "url": "https://www.newegg.com/"
  },
  {
    "title": "Best Buy",
    "year": "2001",
    "description": "The electronics retailer's early online shopping experience.",
    "url": "https://www.bestbuy.com/"
  },
  {
    "title": "Walmart",
    "year": "2001",
    "description": "An early version of Walmart's online shopping website.",
    "url": "https://www.walmart.com/"
  },
  {
    "title": "Target",
    "year": "2001",
    "description": "The early online storefront for the retail chain.",
    "url": "https://www.target.com/"
  },
  {
    "title": "Toys R Us",
    "year": "2001",
    "description": "The online toy store during its classic retail years.",
    "url": "https://www.toysrus.com/"
  },
  {
    "title": "GameStop",
    "year": "2005",
    "description": "The gaming retailer's early online store.",
    "url": "https://www.gamestop.com/"
  },
  {
    "title": "IKEA",
    "year": "2001",
    "description": "The furniture retailer's early online catalog.",
    "url": "https://www.ikea.com/"
  },
  {
    "title": "Zappos",
    "year": "2005",
    "description": "The early online shoe and clothing retailer.",
    "url": "https://www.zappos.com/"
  },
  {
    "title": "Craigslist",
    "year": "1999",
    "description": "The early classifieds website with its famously simple design.",
    "url": "https://www.craigslist.org/"
  },
  {
    "title": "Gumtree",
    "year": "2005",
    "description": "A popular local classifieds website.",
    "url": "https://www.gumtree.com/"
  },
  {
    "title": "Autotrader",
    "year": "2001",
    "description": "The online version of the popular vehicle marketplace.",
    "url": "https://www.autotrader.com/"
  },
  {
    "title": "Cars.com",
    "year": "2001",
    "description": "An early version of the online car-shopping website.",
    "url": "https://www.cars.com/"
  },
  {
    "title": "IMDb",
    "year": "2005",
    "description": "A mid-2000s look at the internet movie database.",
    "url": "https://www.imdb.com/"
  },
  {
    "title": "TV.com",
    "year": "2007",
    "description": "A television database and community from the 2000s.",
    "url": "https://www.tv.com/"
  },
  {
    "title": "Rotten Tomatoes",
    "year": "2005",
    "description": "The movie review site during the rise of online film ratings.",
    "url": "https://www.rottentomatoes.com/"
  },
  {
    "title": "Metacritic",
    "year": "2004",
    "description": "The early version of the website that collected reviews and scores.",
    "url": "https://www.metacritic.com/"
  },
  {
    "title": "Box Office Mojo",
    "year": "2005",
    "description": "Movie box office numbers and film industry statistics.",
    "url": "https://www.boxofficemojo.com/"
  },
  {
    "title": "Fandango",
    "year": "2001",
    "description": "The early online movie ticket booking experience.",
    "url": "https://www.fandango.com/"
  },
  {
    "title": "IGN Movies",
    "year": "2005",
    "description": "Film and entertainment coverage from the gaming website.",
    "url": "https://www.ign.com/"
  },
  {
    "title": "Hulu",
    "year": "2008",
    "description": "The early days of online television streaming.",
    "url": "https://www.hulu.com/"
  },
  {
    "title": "Netflix",
    "year": "2001",
    "description": "The original DVD rental era before streaming became its main business.",
    "url": "https://www.netflix.com/"
  },
  {
    "title": "Redbox",
    "year": "2008",
    "description": "The online presence of the DVD rental kiosk service.",
    "url": "https://www.redbox.com/"
  },
  {
    "title": "Dailymotion",
    "year": "2006",
    "description": "An early video-sharing platform from the mid-2000s.",
    "url": "https://www.dailymotion.com/"
  },
  {
    "title": "Metacafe",
    "year": "2007",
    "description": "A video-sharing website popular before modern short-form video.",
    "url": "https://www.metacafe.com/"
  },
  {
    "title": "Vimeo",
    "year": "2008",
    "description": "An early version of the video-sharing site known for creative content.",
    "url": "https://vimeo.com/"
  },
  {
    "title": "Justin.tv",
    "year": "2008",
    "description": "The original livestreaming platform that eventually led to Twitch.",
    "url": "https://www.justin.tv/"
  },
  {
    "title": "Ustream",
    "year": "2008",
    "description": "An early live video broadcasting platform.",
    "url": "https://www.ustream.tv/"
  },
  {
    "title": "Blip.tv",
    "year": "2009",
    "description": "An independent online video platform for web series and creators.",
    "url": "https://blip.tv/"
  },
  {
    "title": "Funny or Die",
    "year": "2009",
    "description": "A comedy video website built around user submissions and original sketches.",
    "url": "https://www.funnyordie.com/"
  },
  {
    "title": "CollegeHumor",
    "year": "2007",
    "description": "The comedy website known for sketches, jokes and internet videos.",
    "url": "https://www.collegehumor.com/"
  },
  {
    "title": "IFC",
    "year": "2005",
    "description": "The independent film and comedy network's online presence.",
    "url": "https://www.ifc.com/"
  },
  {
    "title": "The Daily Show",
    "year": "2005",
    "description": "The comedy news program's early online presence.",
    "url": "https://www.cc.com/shows/the-daily-show"
  },
  {
    "title": "4Kids",
    "year": "2005",
    "description": "The television distributor's website during the era of Saturday morning cartoons.",
    "url": "https://www.4kids.tv/"
  },
  {
    "title": "Adult Swim",
    "year": "2004",
    "description": "The early website for the late-night animation network.",
    "url": "https://www.adultswim.com/"
  },
  {
    "title": "PBS",
    "year": "2001",
    "description": "The public broadcasting website from the early 2000s.",
    "url": "https://www.pbs.org/"
  },
  {
    "title": "Discovery Channel",
    "year": "2001",
    "description": "The television network's early online presence.",
    "url": "https://www.discovery.com/"
  },
  {
    "title": "History Channel",
    "year": "2001",
    "description": "The early website for the History television network.",
    "url": "https://www.history.com/"
  },
  {
    "title": "Comedy Central",
    "year": "2001",
    "description": "A look back at the comedy network's early web design.",
    "url": "https://www.cc.com/"
  },
  {
    "title": "Fox Kids",
    "year": "2001",
    "description": "The children's television network's old online presence.",
    "url": "https://www.fox.com/"
  },
  {
    "title": "Warner Bros",
    "year": "2001",
    "description": "The movie studio's early promotional websites and entertainment pages.",
    "url": "https://www.warnerbros.com/"
  },
  {
    "title": "Universal Pictures",
    "year": "2001",
    "description": "A look at the film studio's early internet presence.",
    "url": "https://www.universalpictures.com/"
  },
  {
    "title": "DreamWorks",
    "year": "2001",
    "description": "The animation and film studio's early website.",
    "url": "https://www.dreamworks.com/"
  },
  {
    "title": "Pixar",
    "year": "2001",
    "description": "The original era of Pixar's colorful website.",
    "url": "https://www.pixar.com/"
  },
  {
    "title": "Harry Potter",
    "year": "2005",
    "description": "The official Harry Potter website during the original movie era.",
    "url": "https://www.harrypotter.com/"
  },
  {
    "title": "Lord of the Rings",
    "year": "2002",
    "description": "The official movie website during the original trilogy releases.",
    "url": "https://www.lordoftherings.com/"
  },
  {
    "title": "The Simpsons",
    "year": "2001",
    "description": "The animated show's early official website.",
    "url": "https://www.thesimpsons.com/"
  },
  {
    "title": "Sonic the Hedgehog",
    "year": "2001",
    "description": "A look at SEGA's online Sonic presence during the early 2000s.",
    "url": "https://www.sonicthehedgehog.com/"
  },
  {
    "title": "Neopets",
    "year": "2005",
    "description": "An earlier look at the virtual pet world and its original website design.",
    "url": "https://www.neopets.com/"
  },
  {
    "title": "Webkinz",
    "year": "2007",
    "description": "The online world connected to the popular stuffed animal toys.",
    "url": "https://www.webkinz.com/"
  },
  {
    "title": "Build-A-Bear",
    "year": "2005",
    "description": "The online presence of the customizable stuffed animal brand.",
    "url": "https://www.buildabear.com/"
  },
  {
    "title": "American Girl",
    "year": "2005",
    "description": "The classic toy brand's early website and online activities.",
    "url": "https://www.americangirl.com/"
  },
  {
    "title": "Barbie",
    "year": "2001",
    "description": "The early Barbie website with games and character pages.",
    "url": "https://www.barbie.com/"
  },
  {
    "title": "Hot Wheels",
    "year": "2001",
    "description": "The toy car brand's early online world.",
    "url": "https://www.hotwheels.com/"
  },
  {
    "title": "Crayola",
    "year": "2001",
    "description": "A colorful look at the art and coloring brand's early website.",
    "url": "https://www.crayola.com/"
  },
  {
    "title": "Nick Jr.",
    "year": "2005",
    "description": "The old Nick Jr. website with games and preschool characters.",
    "url": "https://www.nickjr.com/"
  },
  {
    "title": "PBS Kids",
    "year": "2005",
    "description": "A second look at the classic educational games and character pages.",
    "url": "https://pbskids.org/"
  },
  {
    "title": "Sesame Street",
    "year": "2001",
    "description": "The early online home of the famous children's television show.",
    "url": "https://www.sesamestreet.org/"
  },
  {
    "title": "Club Nokia",
    "year": "2005",
    "description": "A look at Nokia's mobile entertainment and community services.",
    "url": "https://www.nokia.com/"
  },
  {
    "title": "Nokia",
    "year": "2001",
    "description": "The mobile phone giant's website during its early-2000s popularity.",
    "url": "https://www.nokia.com/"
  },
  {
    "title": "BlackBerry",
    "year": "2007",
    "description": "The early smartphone era before modern touchscreen devices took over.",
    "url": "https://www.blackberry.com/"
  },
  {
    "title": "Motorola",
    "year": "2005",
    "description": "The company's website during the iconic RAZR phone era.",
    "url": "https://www.motorola.com/"
  },
  {
    "title": "Sony Ericsson",
    "year": "2007",
    "description": "The mobile phone brand's colorful online presence.",
    "url": "https://www.sony.com/"
  },
  {
    "title": "HTC",
    "year": "2010",
    "description": "An early look at the smartphone manufacturer during the Android boom.",
    "url": "https://www.htc.com/"
  },
  {
    "title": "Samsung",
    "year": "2005",
    "description": "The electronics company's website during the early mobile era.",
    "url": "https://www.samsung.com/"
  },
  {
    "title": "Sony",
    "year": "2001",
    "description": "The electronics and entertainment company's early web presence.",
    "url": "https://www.sony.com/"
  },
  {
    "title": "Toshiba",
    "year": "2001",
    "description": "The computer and electronics manufacturer's early website.",
    "url": "https://www.toshiba.com/"
  },
  {
    "title": "Dell",
    "year": "2001",
    "description": "The computer company's early online shopping and product pages.",
    "url": "https://www.dell.com/"
  },
  {
    "title": "HP",
    "year": "2001",
    "description": "Hewlett-Packard's website during the early personal computer era.",
    "url": "https://www.hp.com/"
  },
  {
    "title": "IBM",
    "year": "2001",
    "description": "The technology company's early-2000s website.",
    "url": "https://www.ibm.com/"
  },
  {
    "title": "Intel",
    "year": "2001",
    "description": "The processor manufacturer's website during the Pentium era.",
    "url": "https://www.intel.com/"
  },
  {
    "title": "AMD",
    "year": "2001",
    "description": "The processor manufacturer's early online presence.",
    "url": "https://www.amd.com/"
  },
  {
    "title": "NVIDIA",
    "year": "2001",
    "description": "A look at NVIDIA's early graphics card and gaming technology website.",
    "url": "https://www.nvidia.com/"
  },
  {
    "title": "ATI Technologies",
    "year": "2004",
    "description": "The old ATI graphics card website before its acquisition by AMD.",
    "url": "https://www.amd.com/"
  },
  {
    "title": "Adobe",
    "year": "2001",
    "description": "The software company's website during the early Photoshop and Flash era.",
    "url": "https://www.adobe.com/"
  },
  {
    "title": "Macromedia Flash",
    "year": "2002",
    "description": "A look at the software that powered a huge part of the early interactive web.",
    "url": "https://www.adobe.com/"
  },
  {
    "title": "Corel",
    "year": "2001",
    "description": "The graphics and productivity software company's early website.",
    "url": "https://www.corel.com/"
  },
  {
    "title": "WinZip",
    "year": "2001",
    "description": "The classic file compression software's website.",
    "url": "https://www.winzip.com/"
  },
  {
    "title": "PowerQuest",
    "year": "2002",
    "description": "A look back at the company behind classic computer utilities.",
    "url": "https://www.symantec.com/"
  },
  {
    "title": "Norton",
    "year": "2001",
    "description": "The antivirus and computer security company's early website.",
    "url": "https://www.norton.com/"
  },
  {
    "title": "McAfee",
    "year": "2001",
    "description": "The classic computer security software website.",
    "url": "https://www.mcafee.com/"
  },
  {
    "title": "AVG",
    "year": "2005",
    "description": "An early look at the popular antivirus software website.",
    "url": "https://www.avg.com/"
  },
  {
    "title": "ZoneAlarm",
    "year": "2004",
    "description": "The personal firewall software website from the early internet security era.",
    "url": "https://www.zonealarm.com/"
  },
  {
    "title": "ESET",
    "year": "2005",
    "description": "The antivirus software company's early online presence.",
    "url": "https://www.eset.com/"
  },
  {
    "title": "TrueCrypt",
    "year": "2012",
    "description": "The website for the famous open-source disk encryption software.",
    "url": "https://www.truecrypt.org/"
  },
  {
    "title": "Wikipedia Commons",
    "year": "2005",
    "description": "An early look at the free media collection.",
    "url": "https://commons.wikimedia.org/"
  },
  {
    "title": "Wikimedia",
    "year": "2005",
    "description": "The organization behind Wikipedia and other free knowledge projects.",
    "url": "https://wikimediafoundation.org/"
  },
  {
    "title": "Internet Archive",
    "year": "2010",
    "description": "A later look at the organization preserving old websites and digital media.",
    "url": "https://archive.org/"
  },
  {
    "title": "Wayback Machine",
    "year": "2005",
    "description": "The website that lets you travel through archived versions of the internet.",
    "url": "https://web.archive.org/"
  },
  {
    "title": "Geocities Japan",
    "year": "2004",
    "description": "A look at the Japanese GeoCities community and its personal webpages.",
    "url": "https://geocities.yahoo.co.jp/"
  },
  {
    "title": "Angelfire",
    "year": "1998",
    "description": "An earlier look at the personal homepage hosting service.",
    "url": "https://www.angelfire.com/"
  },
  {
    "title": "Tripod",
    "year": "1998",
    "description": "The early personal website builder and hosting community.",
    "url": "https://www.tripod.com/"
  },
  {
    "title": "FortuneCity",
    "year": "2000",
    "description": "A personal homepage hosting community from the early web.",
    "url": "https://www.fortunecity.com/"
  },
  {
    "title": "Bravenet",
    "year": "2001",
    "description": "Free website tools, guestbooks, counters and widgets.",
    "url": "https://www.bravenet.com/"
  },
  {
    "title": "Freewebs",
    "year": "2005",
    "description": "A free website builder used for personal sites and small communities.",
    "url": "https://www.webs.com/"
  },
  {
    "title": "Webs",
    "year": "2010",
    "description": "The evolution of the old Freewebs website builder.",
    "url": "https://www.webs.com/"
  },
  {
    "title": "Wix",
    "year": "2008",
    "description": "The early years of the drag-and-drop website builder.",
    "url": "https://www.wix.com/"
  },
  {
    "title": "Weebly",
    "year": "2009",
    "description": "An early version of the simple website creation platform.",
    "url": "https://www.weebly.com/"
  },
  {
    "title": "WordPress",
    "year": "2005",
    "description": "The early blogging platform that grew into a major website system.",
    "url": "https://wordpress.org/"
  },
  {
    "title": "Joomla",
    "year": "2006",
    "description": "An early look at the open-source content management system.",
    "url": "https://www.joomla.org/"
  },
  {
    "title": "Drupal",
    "year": "2005",
    "description": "The early website for the open-source content management platform.",
    "url": "https://www.drupal.org/"
  },
  {
    "title": "BBS Corner",
    "year": "1998",
    "description": "A look back at bulletin board systems and dial-up online communities.",
    "url": "https://www.telnetbbsguide.com/"
  },
  {
    "title": "MUD Connector",
    "year": "2001",
    "description": "A directory of multiplayer text-based online worlds.",
    "url": "https://www.mudconnect.com/"
  },
  {
    "title": "The WELL",
    "year": "2001",
    "description": "One of the earliest online communities and discussion systems.",
    "url": "https://www.well.com/"
  },
  {
    "title": "Slashdot",
    "year": "2005",
    "description": "An early technology community built around user-submitted stories.",
    "url": "https://slashdot.org/"
  },
  {
    "title": "Flickr",
    "year": "2007",
    "description": "A look at the photo-sharing community during its peak popularity.",
    "url": "https://www.flickr.com/"
  },
  {
    "title": "Photobucket",
    "year": "2008",
    "description": "The image hosting service behind old forum signatures and profile layouts.",
    "url": "https://photobucket.com/"
  },
  {
    "title": "TinyPic",
    "year": "2009",
    "description": "A classic image and video hosting service.",
    "url": "https://tinypic.com/"
  },
  {
    "title": "ImageShack",
    "year": "2005",
    "description": "An early image hosting website used across forums and blogs.",
    "url": "https://imageshack.com/"
  },
  {
    "title": "Imgur",
    "year": "2010",
    "description": "The early days of the image-sharing platform that became a meme hub.",
    "url": "https://imgur.com/"
  },
  {
    "title": "Giphy",
    "year": "2015",
    "description": "The early GIF search engine and animated image community.",
    "url": "https://giphy.com/"
  },
  {
    "title": "Tenor",
    "year": "2015",
    "description": "A GIF search service from the rise of reaction images.",
    "url": "https://tenor.com/"
  },
  {
    "title": "Know Your Meme",
    "year": "2009",
    "description": "A database documenting internet memes and online culture.",
    "url": "https://knowyourmeme.com/"
  },
  {
    "title": "Meme Generator",
    "year": "2012",
    "description": "A website for creating and sharing classic internet memes.",
    "url": "https://imgflip.com/"
  },
  {
    "title": "9GAG",
    "year": "2011",
    "description": "A popular humor and meme-sharing website from the early 2010s.",
    "url": "https://9gag.com/"
  },
  {
    "title": "Cheezburger",
    "year": "2009",
    "description": "The home of classic image macros and internet cat memes.",
    "url": "https://cheezburger.com/"
  },
  {
    "title": "Fail Blog",
    "year": "2009",
    "description": "A collection of funny internet fails and user-submitted images.",
    "url": "https://failblog.cheezburger.com/"
  },
  {
    "title": "I Can Has Cheezburger",
    "year": "2008",
    "description": "The famous lolcat website that helped define early meme culture.",
    "url": "https://icanhas.cheezburger.com/"
  },
  {
    "title": "YTMND",
    "year": "2006",
    "description": "A strange corner of the internet filled with looping images and sounds.",
    "url": "https://ytmnd.com/"
  },
  {
    "title": "Erowid",
    "year": "2005",
    "description": "An online information library and community archive.",
    "url": "https://www.erowid.org/"
  },
  {
    "title": "Snopes",
    "year": "2001",
    "description": "An early look at the website investigating internet rumors and urban legends.",
    "url": "https://www.snopes.com/"
  },
  {
    "title": "Urban Legends",
    "year": "2001",
    "description": "A look at how people shared strange stories and rumors online.",
    "url": "https://www.snopes.com/"
  },
  {
    "title": "NASA Image of the Day",
    "year": "2005",
    "description": "A collection of space photography and scientific discoveries.",
    "url": "https://apod.nasa.gov/"
  },
  {
    "title": "Space.com",
    "year": "2001",
    "description": "Space exploration news and astronomy from the early 2000s.",
    "url": "https://www.space.com/"
  },
  {
    "title": "Weather Underground",
    "year": "2001",
    "description": "A classic weather website with maps and local weather information.",
    "url": "https://www.wunderground.com/"
  },
  {
    "title": "AccuWeather",
    "year": "2001",
    "description": "The weather service's early internet presence.",
    "url": "https://www.accuweather.com/"
  },
  {
    "title": "National Geographic",
    "year": "2001",
    "description": "The magazine's early online photography and exploration pages.",
    "url": "https://www.nationalgeographic.com/"
  },
  {
    "title": "Smithsonian",
    "year": "2001",
    "description": "The museum organization's early online collections and educational pages.",
    "url": "https://www.si.edu/"
  },
  {
    "title": "Encyclopedia.com",
    "year": "2001",
    "description": "An online reference library from the early internet era.",
    "url": "https://www.encyclopedia.com/"
  },
  {
    "title": "Britannica Kids",
    "year": "2005",
    "description": "An educational version of the encyclopedia for younger readers.",
    "url": "https://kids.britannica.com/"
  },
  {
    "title": "PBS",
    "year": "2010",
    "description": "A later snapshot of the public broadcasting website.",
    "url": "https://www.pbs.org/"
  },
  {
    "title": "CNN",
    "year": "2010",
    "description": "A look at online news during the beginning of the 2010s.",
    "url": "https://www.cnn.com/"
  },
  {
    "title": "BBC",
    "year": "2010",
    "description": "The BBC's online news and entertainment website.",
    "url": "https://www.bbc.com/"
  },
  {
    "title": "Reuters",
    "year": "2005",
    "description": "The international news agency's early online presence.",
    "url": "https://www.reuters.com/"
  },
  {
    "title": "Fox News",
    "year": "2005",
    "description": "The news network's website during the mid-2000s.",
    "url": "https://www.foxnews.com/"
  },
  {
    "title": "MSNBC",
    "year": "2005",
    "description": "An early look at the news network's online presence.",
    "url": "https://www.nbcnews.com/"
  },
  {
    "title": "The New York Times",
    "year": "2001",
    "description": "The newspaper's early online news experience.",
    "url": "https://www.nytimes.com/"
  },
  {
    "title": "The Guardian",
    "year": "2001",
    "description": "A look at the British newspaper's early web design.",
    "url": "https://www.theguardian.com/"
  },
  {
    "title": "The Washington Post",
    "year": "2001",
    "description": "The newspaper's early online reporting and homepage.",
    "url": "https://www.washingtonpost.com/"
  },
  {
    "title": "USA Today",
    "year": "2001",
    "description": "The newspaper's early digital news experience.",
    "url": "https://www.usatoday.com/"
  },
  {
    "title": "The Daily Telegraph",
    "year": "2001",
    "description": "An early look at the British newspaper's online presence.",
    "url": "https://www.telegraph.co.uk/"
  },
  {
    "title": "Al Jazeera",
    "year": "2005",
    "description": "The news organization's early international website.",
    "url": "https://www.aljazeera.com/"
  },
  {
    "title": "The Drudge Report",
    "year": "2001",
    "description": "A famously simple news aggregation website.",
    "url": "https://www.drudgereport.com/"
  },
  {
    "title": "The Huffington Post",
    "year": "2008",
    "description": "The early political and news blogging platform.",
    "url": "https://www.huffpost.com/"
  },
  {
    "title": "BuzzFeed",
    "year": "2012",
    "description": "The early days of viral quizzes, lists and internet entertainment.",
    "url": "https://www.buzzfeed.com/"
  },
  {
    "title": "Mashable",
    "year": "2008",
    "description": "Technology, social media and internet culture from the late 2000s.",
    "url": "https://mashable.com/"
  },
  {
    "title": "Gawker",
    "year": "2008",
    "description": "A look at the influential internet media and gossip publication.",
    "url": "https://www.gawker.com/"
  },
  {
    "title": "Engadget",
    "year": "2005",
    "description": "Technology news and gadget coverage from the mid-2000s.",
    "url": "https://www.engadget.com/"
  },
  {
    "title": "Ars Technica",
    "year": "2001",
    "description": "Technology news and detailed computer articles.",
    "url": "https://arstechnica.com/"
  },
  {
    "title": "Lifehacker",
    "year": "2006",
    "description": "Computer tips, productivity tricks and everyday internet advice.",
    "url": "https://lifehacker.com/"
  },
  {
    "title": "Boing Boing",
    "year": "2001",
    "description": "A blog covering technology, culture and unusual internet discoveries.",
    "url": "https://boingboing.net/"
  },
  {
    "title": "Mental Floss",
    "year": "2005",
    "description": "Interesting facts, trivia and educational entertainment.",
    "url": "https://www.mentalfloss.com/"
  },
  {
    "title": "Cracked",
    "year": "2007",
    "description": "The comedy and entertainment website during its online article era.",
    "url": "https://www.cracked.com/"
  },
  {
    "title": "The A.V. Club",
    "year": "2005",
    "description": "Entertainment reviews, music, movies and television coverage.",
    "url": "https://www.avclub.com/"
  },
  {
    "title": "Rotten Tomatoes",
    "year": "2010",
    "description": "A later snapshot of the movie review aggregation website.",
    "url": "https://www.rottentomatoes.com/"
  },
  {
    "title": "IMDb",
    "year": "2010",
    "description": "The movie and television database during the early 2010s.",
    "url": "https://www.imdb.com/"
  },
  {
    "title": "Twitch",
    "year": "2014",
    "description": "The early gaming livestreaming community.",
    "url": "https://www.twitch.tv/"
  },
  {
    "title": "Reddit",
    "year": "2012",
    "description": "A look at Reddit before its modern redesigns.",
    "url": "https://www.reddit.com/"
  },
  {
    "title": "Twitter",
    "year": "2010",
    "description": "A snapshot of the early timeline and original Twitter experience.",
    "url": "https://twitter.com/"
  },
  {
    "title": "Facebook",
    "year": "2010",
    "description": "The social network during the early timeline era.",
    "url": "https://www.facebook.com/"
  },
  {
    "title": "YouTube",
    "year": "2010",
    "description": "The classic video website during the early creator era.",
    "url": "https://www.youtube.com/"
  },
  {
    "title": "Tumblr",
    "year": "2014",
    "description": "A look at the dashboard and blog culture of the mid-2010s.",
    "url": "https://www.tumblr.com/"
  },
  {
    "title": "Myspace",
    "year": "2010",
    "description": "A later snapshot of the social network after its peak popularity.",
    "url": "https://myspace.com/"
  },
  {
    "title": "Vine",
    "year": "2016",
    "description": "The short-form video platform near the end of its original run.",
    "url": "https://vine.co/"
  },
  {
    "title": "Ask.fm",
    "year": "2015",
    "description": "A snapshot of the anonymous question-sharing social network.",
    "url": "https://ask.fm/"
  },
  {
    "title": "Club Penguin",
    "year": "2016",
    "description": "A later look at the original virtual world before its shutdown.",
    "url": "https://www.clubpenguin.com/"
  },
  {
    "title": "Minecraft",
    "year": "2017",
    "description": "The official Minecraft website during the game's established community era.",
    "url": "https://www.minecraft.net/"
  },
  {
    "title": "Steam",
    "year": "2017",
    "description": "The digital PC game storefront during the late 2010s.",
    "url": "https://store.steampowered.com/"
  },
  {
    "title": "Discord",
    "year": "2016",
    "description": "The early website for the gaming-focused communication platform.",
    "url": "https://discord.com/"
  },
  {
    "title": "Telegram",
    "year": "2015",
    "description": "The early website for the messaging application.",
    "url": "https://telegram.org/"
  },
  {
    "title": "WhatsApp",
    "year": "2013",
    "description": "The early online presence of the mobile messaging service.",
    "url": "https://www.whatsapp.com/"
  },
  {
    "title": "Snapchat",
    "year": "2014",
    "description": "The early website for the disappearing photo messaging app.",
    "url": "https://www.snapchat.com/"
  },
  {
    "title": "TikTok",
    "year": "2017",
    "description": "An early look at the short-form video platform's predecessor era.",
    "url": "https://www.tiktok.com/"
  },
  {
    "title": "Reddit",
    "year": "2017",
    "description": "A late-2010s snapshot of the classic Reddit interface.",
    "url": "https://www.reddit.com/"
  },
  {
    "title": "Wikipedia",
    "year": "2017",
    "description": "A late-2010s look at the online encyclopedia.",
    "url": "https://www.wikipedia.org/"
  },
  {
    "title": "Amazon",
    "year": "2017",
    "description": "The online shopping giant during the rise of modern e-commerce.",
    "url": "https://www.amazon.com/"
  },
  {
    "title": "eBay",
    "year": "2017",
    "description": "A late-2010s look at the classic online auction marketplace.",
    "url": "https://www.ebay.com/"
  },
  {
    "title": "Yahoo!",
    "year": "2017",
    "description": "The portal website during its later years before the Verizon acquisition.",
    "url": "https://www.yahoo.com/"
  },
  {
    "title": "MSN",
    "year": "2017",
    "description": "Microsoft's portal during the late 2010s.",
    "url": "https://www.msn.com/"
  },
  {
    "title": "Apple",
    "year": "2017",
    "description": "The Apple website during the iPhone X era.",
    "url": "https://www.apple.com/"
  },
  {
    "title": "Microsoft",
    "year": "2017",
    "description": "The Microsoft website during the Windows 10 era.",
    "url": "https://www.microsoft.com/"
  },
  {
    "title": "PlayStation",
    "year": "2017",
    "description": "The PlayStation website during the PS4 generation.",
    "url": "https://www.playstation.com/"
  },
  {
    "title": "Xbox",
    "year": "2017",
    "description": "The Xbox website during the Xbox One generation.",
    "url": "https://www.xbox.com/"
  },
  {
    "title": "Nintendo",
    "year": "2017",
    "description": "Nintendo's website around the launch of the Nintendo Switch.",
    "url": "https://www.nintendo.com/"
  },
  {
    "title": "Spotify",
    "year": "2015",
    "description": "The music streaming platform during its expansion into playlists and discovery.",
    "url": "https://www.spotify.com/"
  },
  {
    "title": "Netflix",
    "year": "2017",
    "description": "The streaming service during its original content expansion.",
    "url": "https://www.netflix.com/"
  },
  {
    "title": "Hulu",
    "year": "2017",
    "description": "A late-2010s snapshot of the streaming television service.",
    "url": "https://www.hulu.com/"
  },
  {
    "title": "SoundCloud",
    "year": "2017",
    "description": "The independent music and creator community during its popular era.",
    "url": "https://soundcloud.com/"
  },
  {
    "title": "Bandcamp",
    "year": "2017",
    "description": "A later snapshot of the independent music marketplace.",
    "url": "https://bandcamp.com/"
  },
  {
    "title": "Patreon",
    "year": "2016",
    "description": "The early creator-support platform.",
    "url": "https://www.patreon.com/"
  },
  {
    "title": "Kickstarter",
    "year": "2012",
    "description": "The early crowdfunding website for creative projects.",
    "url": "https://www.kickstarter.com/"
  },
  {
    "title": "Indiegogo",
    "year": "2012",
    "description": "A crowdfunding website for independent projects and inventions.",
    "url": "https://www.indiegogo.com/"
  },
  {
    "title": "Product Hunt",
    "year": "2015",
    "description": "A community for discovering new technology products and startups.",
    "url": "https://www.producthunt.com/"
  },
  {
    "title": "Medium",
    "year": "2014",
    "description": "The early publishing platform for essays and online writing.",
    "url": "https://medium.com/"
  },
  {
    "title": "Quora",
    "year": "2012",
    "description": "An early version of the community question-and-answer platform.",
    "url": "https://www.quora.com/"
  },
  {
    "title": "Stack Exchange",
    "year": "2012",
    "description": "A network of question-and-answer communities.",
    "url": "https://stackexchange.com/"
  },
  {
    "title": "Imgur",
    "year": "2017",
    "description": "The image-sharing platform during the height of internet meme culture.",
    "url": "https://imgur.com/"
  },
  {
    "title": "Wikipedia",
    "year": "2017",
    "description": "The encyclopedia's late-2010s appearance and layout.",
    "url": "https://www.wikipedia.org/"
  },
  {
    "title": "Craigslist",
    "year": "2017",
    "description": "A late-2010s snapshot of the famously minimal classifieds website.",
    "url": "https://www.craigslist.org/"
  },
  {
    "title": "Archive Team",
    "year": "2015",
    "description": "A community focused on preserving websites and digital history.",
    "url": "https://www.archiveteam.org/"
  },
  {
    "title": "OldWeb Today",
    "year": "2017",
    "description": "A project dedicated to experiencing old websites and browsers.",
    "url": "https://oldweb.today/"
  }
];