var db = require('monk')('localhost/bumble');
var posts = db.get('posts');

var stateposts = [{"title":"bud help, culver city area?"}
{"title":"Diego Rivera Learning Complex &amp; EduCare Carshow event! - South LA Upcoming Auto Event!"}
{"title":"The vaccination debate isn't new. For example, in this archival clip from SciFri in 2008, infectious disease specialist Paul Offit talks to a caller about whether or not vaccines can harm children. | Science Fridays"}
{"title":"Embarrassing. Uber driver cruising Weho and honking incessantly with \"Please Tip Your Uber Driver\" plastered all over car gets cited by Sheriffs."}
{"title":"New measure addresses the proliferation of homeless sidewalk encampments citywide"}
{"title":"Huge Water Main Rupture @ Wilshire&amp;Westmoreland"}
{"title":"New year will bring a high-tech hospital to South L.A."}
{"title":"The struggle of living in the SoCal desert right now"}
{"title":"Planning a wood-burning fire in LosAngeles November through February?"}
{"title":"Planning a wood-burning fire in Los Angeles November through February?"}
{"title":"Need witness for hit and run accident at Fairfax and Beverly (approximately 8:30AM; Sunday November 9)"}
{"title":"Hollywood looking oddly peaceful and clean."}
{"title":"Love this time of year in LA, the sunsets get better and better... Yeah, another silly sunset pic, I still like it."}
{"title":"Anyone in LA know buildings that have roof access?"}
{"title":"Los Angeles Has 32 Home Teams in the N.F.L., but None to Watch in Person"}
{"title":"A rainbow. In LA."}
{"title":"Does anyone know where this photo was taken?"}
{"title":"Help me give away my desktop PC to a child that needs it"}
{"title":"Is it going to ever rain again?"}
{"title":"Any Graffiti Artists in East LA?"}
{"title":"Took a panoramic pic of LA with my iPhone, turned out a bit better than expected"}
{"title":"First Drive-in Theater in Los Angeles, 1935."}
{"title":"Early drive-in restaurant, Hollywood, 1935 by John Gutmann."}
{"title":"Hiking tomorrow 11.10.14 at Griffith Park."}
{"title":"Ganesha Hills Circuit 3 (Underground Cycling Race) - Forward Set"}
{"title":"Weather was perfect for hiking this weekend. Here's a panoramic from my sunset hike up Parker Mesa."}
{"title":"Recent transplant, need help/info on selling a legal and registered firearm."}
{"title":"10-year-old with Heart Disease Throws Surprise Pizza Party for LAFD Firefighters"}
{"title":"I've walked 16 miles from LAX to Westwood, and took some silly pictures along the way. [warning: shitty smartphone quality. you've been warmed]"}
{"title":"Saw \"Nightcrawler\" last night..."}
{"title":"Aussie coming to LA in Feb; little advice needed!"}
{"title":"TIL and went WTF that Beverly Hills uses 286 gallons per person per day in September. Meanwhile, the East LA used just 48 gallons per person per day, the lowest in the southland. But the worst is wealthy Orange County suburb Cowan Heights, at 569 gallons of water per person per day!"}
{"title":"/r/losangeles discussion thread 11/10/14 - 11/16/14"}
{"title":"Sunset from East LA college a few days ago"}
{"title":"Are there AYCE Korean BBQ places in West Hollywood that are somewhat cheap?"}
{"title":"Let's talk about Tujunga"}
{"title":"There's a nutjob firing his gun on Ventura Blvd. What do you do? Apparently for some, it's pull out your cellphone and start taking a video."}
{"title":"Where is the best place to look for houses to rent?"}
{"title":"Husband's bike stolen in Chatsworth [x-post /r/sfv]"}
{"title":"Great site with LA travel and dining recommendations!"}
{"title":"Good place to get medical card?"}
{"title":"Why are there so many creepy, crazy, strung out, hostile, thieving, whackos in the South Bay?"}
{"title":"Man arrested in Hollywood Shotgun Murder"}
{"title":"Los Angeles wormhole"}
{"title":"Man Man Arrested in Connection With Hollywood Shotgun Murder"}
{"title":"Why aren't there more crackdowns on bad driving in the SGV?"}
{"title":"Arrest Made in Hollywood Shotgun Killing"}
{"title":"I want to do some photography of the tallest points in LA, where can I go?"}
{"title":"Stuck at LAX"}
{"title":"Anyone know what's going on Hollywood? Helicopters flying in circles in my neighborhood.."}
{"title":"tremor?"}
{"title":"Earthquake!"}
{"title":"LA Helicopter Noise Initiative website allows you to watch the movement of helicopters throughout Los Angeles County and file complaints about helicopter noise."}
{"title":"Tonight, on the 210 bus south from hollywood to south bay, the bus driver stopped at a donut shop and offered everyone on the bus a donut and made us 10 minutes late. I ain't even mad"}
{"title":"Best DMV for behind-the-wheel test"}
{"title":"Took this at Redondo Beach. Feels very LA"}
{"title":"L.A. River"}
{"title":"This is the burger I got from Umami Burger on 3rd earlier today"}
{"title":"Great time at Wondercon"}
{"title":"Teaching questions!"}
{"title":"Good Samaritan Saves Man Found Face-Down In Motel Pool"}
{"title":"Man Fatally Shot By Anaheim Police Was Arrested Day Earlier"}
{"title":"Clothing is a great part and taste of fashion to clearly demonstrate your own unique style. Busy Phillips Jacket has been ever ready to make a style statement by adding the ingredients of charm."}
{"title":"Los Angeles daily discussion thread 04/06/15"}
{"title":"Suspect arrested after gunfire hits bus in Echo Park area"}
{"title":"Happy Mothers Day"}
{"title":"Los Angeles Transit Lines (ex-Los Angeles Railway) W Line car no. 1544 at North Figueroa Street and Meridian on February 15, 1948."}
{"title":"[LOST DOG] Three year old Corgi named Einstein"}
{"title":"Help save my kitty's life! She needs surgery to remove tumor pressing on her spine"}
{"title":"Los Angeles area sports teams"}
{"title":"Happening today at JPL: Public Event Will Celebrate NASA Mission to Dwarf Planet Ceres"}
{"title":"Recommendations on what to do with my younger siblings (10, 11)"}
{"title":"How phantom flushing wastes water (automatic flush toilets use 50% more water) and how to fix it"}
{"title":"Best place to donate clothes?"}
{"title":"LA Times: Seven years after South L.A. ban on new fast-food restaurants, obesity increases in the area"}
{"title":"Moving to LA in 2 weeks"}
{"title":"What's average \"middle class\" salary in Los Angeles?"}
{"title":"Is this legal?"}
{"title":"Lost garage door opener on the corner of nebraska and purdue ave, and lost my apt keys on the corner of hyde park and florence...I know, rough day"}
{"title":"Benz flees hit and run/road rage incident only to cause fatal crash in Beverly Hills, 3 others injured"}
{"title":"Didn't attend my schools prom today, what is there to do for an 18 year old in la?"}
{"title":"Long convoy of bikers on the 405 about two hours ago (vids)..."}
{"title":"LA nonprofit for youth film &amp; video education"}
{"title":"Something I think the state needs to start providing to it's residents for free... paper plates and plastic utensils!"}
{"title":"Where to find weed in LA?"}
{"title":"Best place to park for cheap/free near the Staples Center?"}
{"title":"Where to find weed in LA?"}
{"title":"Looking for abandoned buildings to explore"}
{"title":"If I love the atmosphere at Cafe Santorini in Pasadena, what other restaurants would you recommend with a similar atmosphere?"}
{"title":"Can anyone suggest any beach side spots in LA area where you can set up a bonfire?"}
{"title":"Hey LA, I've got one more night left in town."}
{"title":"Question to LAPD: Can I submit dashcam video of people running red lights, using the freeway shoulder in traffic...etc? Will you prosecute them? Do I need to capture their face (with a rear dashcam) to prosecute?"}
{"title":"[FOUND DOG!]"}
{"title":"Free ticket to see 2001 in 70mm at Dome 5pm Sunday"}
{"title":"Woman dies after road rage/hit and run crash in Beverly Hills. Apparently she was not the driver."}
{"title":"Deliver Position for Saucey"}
{"title":"French satire magazine's raison d'etre: mocking, challenging"}
{"title":"Program for mentally ill inmates at Twin Towers to be expanded under L.A. County budget proposal"}
{"title":"LAUSD board approval of new spending on healthcare prompts revolt"}
{"title":"LAprotip: Picking up someone at LAX? Have them flag you down with a brightly colored article of clothing"}
{"title":"Los Angeles daily discussion thread 04/15/15"}
{"title":"This sex offender(Evil Elmo) is now at the Santa Monica Promenade. Beware!"}
{"title":"How Every Parking Sign Should Be"}
{"title":"A visualization of 46 highway interchanges in Los Angeles County"}
{"title":"A visualization of 46 highway interchanges in Los Angeles County"}
{"title":"Hollywood, did you pay your taxes?"}
{"title":"STOLEN: White 1994 Honda Civic Coupe"}
{"title":"Sunset Strip 1979 (x-post r/OldSchoolCool)"}
{"title":"Something fishy is happening with the 105... The cops are emptying people off the on-ramps near my office and the freeway looks completely cleared out."}
{"title":"PSG-Barcelona Match today"}
{"title":"Recognize that crack? Burglar caught with his pants down."}
{"title":"Psychotic Man Break in Attempt in North Hollywood, CA. Caught on Camera / Almost shot!"}
{"title":"[MY EVENT] Headliners for LaLaFest announced (DM me for free tickets)"}
{"title":"Tax Day Relief: Food And Drink Deals On April 15: LAist"}
{"title":"Anti-Vaxers, Lawmakers Agree: Take Unvaccinated Kids Out Of School"}
{"title":"\"more water was used to grow almonds in 2013 than was used by all homes and businesses in San Francisco and Los Angeles put together\""}
{"title":"Break in Attempt in North Hollywood"}
{"title":"[MY EVENT] Headliners for LaLaFest announced (DM me for comped tickets)"}
{"title":"LA Derby Dolls' Has a New Home in Los Angeles!! There's a Great Article Showing the Volunteer Work and Someone Took a Cool Slow Mo Video Too"}
{"title":"Can a landlord require my family to get renter's insurance from a specific insurer?"}
{"title":"Looking for cheap Disneyland tickets. Anyone know how to go about it?"}
{"title":"Snapchat's stealthy real estate moves are worrying small business owners in Venice"}
{"title":"Photogenic bookstores and libraries around LA?"}
{"title":"Slow speed pursuit just ended peacefully. CHP executed a perfect PIT manuever."}
{"title":"Basement Lion Is What Makes LA Great"}
{"title":"Runaway truck DTLA financial district"}
{"title":"[Meet-up] Poker tomorrow - last call. We Ho"}
{"title":"Hi /r/LA. I know you guys have seen a lot of these already, but I made a fantasy metro map. [OC]"}
{"title":"Protesters arrested after blocking Blue Line tracks in downtown Los Angeles. So I am very well against police brutality but am I the only one here that thinks blocking traffic and people from getting home/work is an asshole move?"}
{"title":"\"Parents are rallying against an LAUSD proposal that would require vaccinations.\""}
{"title":"Researcher looking for Giant whitefly in SoCA."}
{"title":"War on Drugs Tickets - Pappy &amp; Harriet's"}
{"title":"Reminder -- 101 N / Sepulveda off ramp closed Thursday after 9am"}
{"title":"[My Thing] Hey LA, we're on a roadtrip across the country and will be in your city for the next few days. Let me know if there's anything we can help you with"}
{"title":"Can someone help me find photos of East LA / Crenshaw from the 1980s?"}
{"title":"Lost white/yellow chihuahua mix in West Adams / Pico Union"}
{"title":"Bike Parking in Downtown LA (Financial District)"}
{"title":"Acoustics in Microsoft Theater?"}
{"title":"Working Class Kitchen is the best burger spot in Long Beach you have never heard of."}
{"title":"Take an Awesome Flyover Tour of the Purple Line in Bev Hills and Century City"}
{"title":"The Tragedy and the Man That Made L.A. TV"}
{"title":"What California wants more than water or better schools: NFL stadiums!"}
{"title":"LA's transportation agency gets into housing with new development policy"}
{"title":"Are there any good craigslist alternatives? xpost"}
{"title":"Finale of the Special Olympics LA Opening Ceremonies!"}
{"title":"PSA to LAX travelers (avoid this guy)"}
{"title":"NPR goes on a 'Tour De Tacos' with Los Angeles' Eastside Bike Club"}
{"title":"LAPD: Arrest Made In Deadly Hollywood Shooting Possibly Motivated By Money Dispute"}
{"title":"LADWP wants to raise water and power rates. Make sure you take the survey and tell them you do not support it."}
{"title":"I've come to a decision."}
{"title":"Free Tickets to Blondie @ The Greek"}
{"title":"I bet Spring is gonna be beautiful after the predicted monsoon hits during Winter."}
{"title":"Verizon westside reception?"}
{"title":"LAX douche traveler"}
{"title":"Last Day At The Griffith Park Tea House Before It Is Set To Be Demolished...."}
{"title":"Hundreds protest Iran nuclear deal in Westwood"}
{"title":"Los Angeles Running Group"}
{"title":"Any teachers here can use a 3D printer?"}
{"title":"Taking a shot here...blonde lady, Tujunga Denny's...."}
{"title":"Suge Knight charged with murder; could face life in prison"}
{"title":"T-Mobile service outage ?"}
{"title":"Helicopters?"}
{"title":"Came across these old photos tonight...Wish it would snow again. 02/26/2011 in Tujunga, Los Angeles County."}
{"title":"Solving L.A.'s Water Problems By Turning It Into A Giant Sponge"}
{"title":"Twc outage"}
{"title":"How Fairfax became the coolest street in Los Angeles"}
{"title":"Real life vs. GTA 5, great pictures! [X-post from /r/PS4]"}
{"title":"American Cinematheque: Director Richard Linklater in person at the Aero Theatre in Santa Monica for a double feature of BOYHOOD (2014) and DAZED AND CONFUSED (1993). Friday, February 6."}
{"title":"So what was with the fireworks last night in Downtown?"}
{"title":"So, Now We Know What\u2019s Going On at Yamashiro Hollywood"}
{"title":"Military retailer is Leimert Park's unwelcome neighbor"}
{"title":"Vandals Shoot Out Windows Of 21 Vehicles, Businesses In Long Beach"}
{"title":"White kitten...? [xpost /r/lalist]"}
{"title":"/r/losangeles discusses: Best places to drink."}
{"title":"8% of Norwegians eat tacos every friday? Come on LA, we can take 'em!"}
{"title":"View of the Capitol Records building and Hollywood sign"}
{"title":"Grammy Foundation concert Thursday to star Cyndi Lauper, Melissa Etheridge, Willie Nelson, Robin Thicke, Aloe Blacc - westsidetoday.com"}
{"title":"Helicopters and sirens in West Adams"}
{"title":"Capitol Records, Hollywood sign and Hollywood Tower in one view"}
{"title":"Gas Buddy Notification?"}
{"title":"Best \"boozy\" Sunday brunch spots?"}
{"title":"Los Angeles has lost another young and talented musician. RIP Zane Musa"}
{"title":"Ridiculous or not? New Big Blue Bus bus stop prototypes pop up - Santa Monica Mirror"}
{"title":"Coin Counting in LA"}
{"title":"DA will not file murder charges for former Power Ranger actor"}
{"title":"Sunday was a beautiful day at Lake Hollywood"}
{"title":"All 58 counties have an exhibit at the State Capitol. Only LA County's has a misspelling. \"EDERLY\""}
{"title":"The story behind Hollywood's yellow location signs"}
{"title":"Six of nine closed miles of PCH finally reopen after December mudslides - Santa Monica Mirror"}
{"title":"Rick Orlov, veteran City Hall reporter, dies at 66"}
{"title":"Are all LA cyclists self-entitled assholes? [semi-rant, Discussion about cycling etiquette/rules]"}
{"title":"Extra Life LA Guild is having their 2015 Kick-Off Party! (x-post /r/extralife)"}
{"title":"[Meet-up]$20 Texas Hold'em home poker game this Sunday 2/8 at 4:30pm"}
{"title":"LA gas prices back on the rise"}
{"title":"Korean Laker Girl Sujan Pang: Defying expectations"}
{"title":"Garcetti's Mayoral Mansion Uses Five Times as Much Water as Typical L.A. Home"}
{"title":"How should I have reported these hoses wasting lots of clean water?"}
{"title":"USC fans tag UCLA Bruin Bear statue over a week before game"}
{"title":"Lyft and Uber in Los Angeles"}
{"title":"Best old style candy shop in LA?"}
{"title":"Worst L.A. commutes"}
{"title":"Credit on monthly rent? What's the scam?"}
{"title":"Who washed their car today?"}
{"title":"Newly widowed father sings Beatles classic 'Blackbird' to newborn son shortly before his death"}
{"title":"A father sings Blackbird to his 24 week old son who died shortly after the mother died in childbirth"}
{"title":"Cardinal sin."}
{"title":"Chart of LA Metro stations depicting population and number of jobs within 1/2 mile"}
{"title":"Embracing Dry Land: Water-Smart Urban Design and Drought in the American West. Optimistic read on how the current drought is upending the established thinking on water usage for the better"}
{"title":"Calling all skaters in Los Angeles"}
{"title":"America's Only Thai Town Celebrates 15 Years in Los Angeles (xpost from r/asianamerican)"}
{"title":"How do I navigate the new(ish) LAtimes website?"}
{"title":"Anyone else hate the new redesign for LATimes?"}
{"title":"Anyone here a member of the Los Angeles Athletic Club?"}
{"title":"Los Angeles Weekend Guide (11/14-11/16): 5 Things To Do Around Town [HausAngeles Blog]"}
{"title":"Los Angeles Open House Guide for Sunday, November 16 [HausAngeles Blog]"}
{"title":"Visiting LA in January/February to scout for my move there, need some tips"}
{"title":"Need help finding bars in Hollywood for grad school friends"}
{"title":"Nat'l Pickle Day in Los Angeles"}
{"title":"Presley carpenter"}
{"title":"American Cinematheque: Dick Miller series coming to the Egyptian Theatre in Hollywood in December. Dick Miller, Ernest Dickerson and Roger Corman in person with screenings of GREMLINS (in 70mm), A BUCKET OF BLOOD and more!"}
{"title":"Latinos seek their own official districts in LA"}
{"title":"anyone else notice the new homeless encampment on Silver Lake BLVD under Sunset Blvd?"}
{"title":"San Fernando Valley's Discovery Cube L.A. opens in once-vacant museum"}
{"title":"A Humble Plea -- Please let me be your +1 tonight at the Roxy! : Foofighters (x-post from /r/foofighters)"}
{"title":"\"The World of Raymond Chandler\" talk, book signing &amp; downtown walking tour"}
{"title":"American Cinematheque: The Art Deco Society of Los Angeles presents 'Streamline Superheroes: Art Deco in Comics and Film' along with FLASH GORDON: ROCKET SHIP (1936), November 22 at the Egyptian Theatre in Hollywood."}
{"title":"LAUSD says teen can consent to sex with teacher, wins lawsuit"}
{"title":"Ultimate 300 from Time Warner is bunk"}
{"title":"Apple Reportedly Eyeing Los Angeles' Historic Broadway Trade Center for Retail and Corporate Campus"}
{"title":"Report: Water Usage At Mayoral Mansion 5 Times As High As Average LA Resident"}
{"title":"East L.A. Beef Birria Taco Spot (Open Weekends Only)"}
{"title":"How do you actually pull to the side of the road if your car breaks down on the freeway?"}
{"title":"Need a favor if you are going to the Cary Elwes Book Signing on Monday Nov 17th at 7pm at Book Soup"}
{"title":"Tonight (and every Monday): Free bowling at Lucky Strike Hollywood for service industry workers. [My event]"}
{"title":"Holy cow Mexicans are spewing babies out of their crotches faster than they can name them in this city!"}
{"title":"Totally Awesome Things To Do In LA - 1/26-2/1"}
{"title":"LA Art Show \u201915: Recap"}
{"title":"Best Places For Proposing in October"}
{"title":"Have you seen this mysterious sign around LA?"}
{"title":"Anybody ever bought flowers from the people selling them at the intersections?"}
{"title":"Long Beach to Bid for Downtown Bike Share Program"}
{"title":"Nearly half of all Los Angeles County homicides go unsolved"}
{"title":"Valentines day ideas?"}
{"title":"Going Clear - Busting open Scientology"}
{"title":"Other than LADWP, what other electric company can we have as utility?"}
{"title":"[SERIOUS] Random green flashing lighting?! SOmething strange just happened, Olympic and La Cienega..."}
{"title":"Yesterday on W. Pico Blvd and Vermont Ave I saw a man shit in public."}
{"title":"New Union Station Bus Platform to Begin Construction in April [x-post r/Transit]"}
{"title":"A push scooter in LA?"}
{"title":"[Car Cam] Jerky Honda Fit Driver. Was I wrong?"}
{"title":"As a southerner in LA, I cannot express how significant this is to me, and I don't expect many to understand"}
{"title":"I'm looking for someone to play my music."}
{"title":"Man Fatally Shot Inside Palmdale McDonald\u2019s Identified As Popular Gangsta Rapper"}
{"title":"Lincoln heights police chase: Suspect shot, Killed"}
{"title":"Man Dies After Shooting at Police, SWAT Officers Throughout Hourslong Pursuit."}
{"title":"Four L.A. school board members likely to face reelection challenges"}
{"title":"More than 1,400 people will be buried in a mass grave in December. Know anyone?"}
{"title":"Time is running out for L.A.'s unclaimed dead"}
{"title":"RIP Arnett Hartsfeild , LAFD Eternal Rookie."}
{"title":"18 year old looking to relocate to LA...how can I make this work?"}
{"title":"Looking for locations for wedding photo shoot in or near DTLA."}
{"title":"L.A.'s Filipino Food Scene Comes Alive at Rice &amp; Shine"}
{"title":"I was sitting next to Giovanni Ribisi at a Hawaiian BBQ place in Pasadena yesterday."}
{"title":"Random Pic I took of Downtown from USC"}
{"title":"Bikes on the Exposition Line?"}
{"title":"2 tix to KCRW presents Riot LA comedy show \"The Indoor Kids\" featuring Kumail Ninjani"}
{"title":"Tunnels?"}
{"title":"Where can I rent a 3D printer?"}
{"title":"[meet-up] [TODAY!] Board games and Harry potter and the Sorcerer's Stone. Next sunday: Disney's Song of the South (unedited)."}
{"title":"Thieves Steal As Much As $50,000 In Equipment From Drone Business"}
{"title":"Charles Manson, 80, gets license to marry 25 year old fan."}
{"title":"Am I crazy to think this seems dangerous to leave unattended?"}
{"title":"Kaiser Permanente joins forces with Target Corp. on in-store clinics in Southern California"}
{"title":"Hollywood Blvd \"Drunk Girl\" apologizes says she was also tricked and all the guys in the video were nothing but gentleman!"}
{"title":"Tensions rise after alleged sexual assault at Pershing Square"}
{"title":"How Los Angeles Neighborhoods Got Their Names"}
{"title":"Anyone recognize this tattooed jerk beating up a guy at the Hollywood Roosevelt on Halloween?"}
{"title":"Los Angeles from above"}
{"title":"Update on the San Pedro, Vincent Thomas bridge."}
{"title":"Naples Long Beach Xmas Boat Parade - questions..."}
{"title":"List of businesses offering take-home Thanksgiving Turkey dinners."}
{"title":"Digital Media &amp; SEO meet-up and trivia night at The Phoenix in Beverly Hills"}
{"title":"Is now a good time to buy property in LA?"}
{"title":"Our Newest Affiliate! Party Bus Saudi Arabia! Call To Book Today!! (866) 319-LIMO"}
{"title":"A collection of LA postcards printed between 1930 and 1945"}
{"title":"Los Angeles Confronts a Spike in Homelessness Amid Prosperity"}
{"title":"California Announces Restrictions on Water Use by Farmers"}
{"title":"Can confirm"}
{"title":"Proposed tax credit for quake retrofits runs into trouble in Sacramento"}
{"title":"LA Dating: How far is too far?"}
{"title":"Santa Monica Coffee Bean &amp; Tea Leaf attack suspect photo released"}
{"title":"Are there any IMAX theatres left in Southern California that ARENT 3D?"}
{"title":"When you search \"LA Pride\" in Google you get a special result."}
{"title":"I just got a ticket to E3 and im not sure where to stay and how much it costs for 5 days in LA. All help appreciated :)"}
{"title":"How jazz icon Ornette Coleman influenced music in Los Angeles."}
{"title":"Does anyone know where this spot is located?"}
{"title":"Police Activity on the 110 S"}
{"title":"Anyone going to San Diego this weekend?"}
{"title":"Los Angeles Confronts a Spike in Homelessness Amid Prosperity"}
{"title":"Recent bay area transplant looking for the Berkeley bowl of LA"}
{"title":"Lee, Larry &amp; Max, three chill old dudes."}
{"title":"Long Beach used to be known as the \"Sinking City\" because oil drilling caused parts of the city to sink by more than 25 feet"}
{"title":"Anyone else getting this?"}
{"title":"The Cinerama Dome - Would be so much fun if they blew away!"}
{"title":"Anyone know of any retro/grungy looking motel within like, a 10 mile radius of downtown?"}
{"title":"Anyone know of any retro/grungy looking motel within like, a 10 mile radius of downtown?"}
{"title":"E3 2015 Parties and Events Guide [My site]"}
{"title":"When Commander Riker is putting his crib on the market, you know the housing market is overheating."}
{"title":"Free ticket to a San Cisco and MOTHXR right now at the El Rey theatre!!"}
{"title":"Irvine Police a Seek 'Socially Awkward and Timid' Burglar."}
{"title":"Irvine Police Seek 'Socially Awkward and Timid' Burglar."}
{"title":"Sheriff\u2019s investigators arrested an Adelanto father early Friday on suspicion of involuntary manslaughter after he accidentally shot and killed his 7-year-old son, officials said."}
{"title":"OC Deputies' Snitch Scam Playbook Revealed"}
{"title":"BYO weed bars"}
{"title":"South Pasadena / El Sereno [LA] border"}
{"title":"The Borders between La Habra and Whittier"}
{"title":"How expensive was to live in Los Feliz during the 1940s?"}
{"title":"DTLA to Irvine/lake forest commute advice"}
{"title":"Affordable prime rib?"}
{"title":"Where are the best \"bottomless mimosas\" brunches in LA?"}
{"title":"Los Angeles daily discussion thread 7/30/15"}
{"title":"Young Boy Fatally Shot While Playing In Front Yard Of Highland Home"}
{"title":"What would a daily commute from the valley (Burbank/Noho) look like?"}
{"title":"What would a daily commute from the valley (Burbank/Noho) to Pasadena look like?"}
{"title":"someone throwing milk jug off the balcony onto highway traffic"}
{"title":"Powerful LA City Council Wants to Halt Plan to Let Uber and Lyft Make Pick-Ups at LAX"}
{"title":"Major route changes for Big Blue Bus starting August 23rd"}
{"title":"Taxi Cab Driver Charged with Raping Customer in OC"}
{"title":"In LA are there any places like two bro's, Vanessa's dumpling, etc., for super cheap food that's awesome?"}
{"title":"An Ad posted in Compton (x-post from /r/WTF)"}
{"title":"Anyone go to a Crossfit/Training Gym around Sherman Oaks/Studio City?"}
{"title":"What things do you love about LA?"}
{"title":"Couple Taking a Break at the Waterfall in Solstice Canyon"}
{"title":"Best taxi service in LA"}
{"title":"Purge Breakout extra ticket for Sunday 10/26/2014 8:30 pm"}
{"title":"Idea's on what to do after shooting range in DTLA for a date?"}
{"title":"Find affordable housing in Los Angeles"}
{"title":"Anybody know where to buy goat meat?"}
{"title":"Cal State Northridge bans pledge activity at fraternities, sororities"}
{"title":"Will I get towed for this?"}
{"title":"Can a restaurant owner block a sidewalk in LA?"}
{"title":"detfrankwrench's uploaded images"}
{"title":"Do any dispensaries sell prerolled blunts?"}
{"title":"I Love LA"}
{"title":"If you were making an LA themed care package, what would you put in it?"}
{"title":"Let's find this guy. Please."}
{"title":"Closest place to go to from LA to see fireflies?"}
{"title":"Feeling lonely &amp; out of place in LA."}
{"title":"Truck Camping"}
{"title":"Tennis players out there, are you a member or have you played as a guest at The Mulholland Tennis Club?"}
{"title":"Los Angeles daily discussion thread 10/27/14"}
{"title":"Gritty Santa Ana River is streaming back toward restoration"}
{"title":"Investigation: Did Sheriff Lee Baca's fury push deputies to break the law?"}
{"title":"What are your favorite things to do in Burbank?"}
{"title":"Anyone know an art gallery owner I might reach out to?"}
{"title":"Do you recognize these thieves? They stole my friends phone while she was working at Universal Studios yesterday. They were stupid enough to take selfies that backed up to the cloud."}
{"title":"Yesterday's sunset in Silverlake. Of all days to decide to go on a run. Winning."}
{"title":"What are some stores in the South Bay (preferably around torrance/redondo, willing to drive though) that sell things like records, music posters, pipes, clothing, incense etc.?"}
{"title":"North Korea takes over Hollywood"}
{"title":"HP Gentrification article"}
{"title":"Mulled Wine?"}
{"title":"Does anyone know a cheap Animal Hospital in Los Angeles?"}
{"title":"Curious about Gentrification."}
{"title":"The Red Hot Chili Peppers' Bridge Is Not Where You Think It Is: An Investigation"}
{"title":"Who has volunteered to help decorate a Rose Parade float?"}
{"title":"That sunset though."}
{"title":"The sunset tonight from Palms"}
{"title":"Tonights sunset from my window"}
{"title":"Palm trees signify home"}
{"title":"Winter Solstice Sunset [Venice, CA just now]"}
{"title":"Found small white dog in Hollywood"}
{"title":"Life in Los Angeles (pic)."}
{"title":"Is visiting Griffith Observatory possible in a 7-hour layover?"}
{"title":"They'll fix it in a flash"}
{"title":"Missing dog from Watts area $1500 REWARD - My friend is heartbroken. Have you seen Papi?"}
{"title":"LA male looking for new friends, blind dates, what have you..."}
{"title":"Missing dog from South La / Watts area. His owner is heartbroken. Please help us find Papi"}
{"title":"I found Waldo @ LAX"}
{"title":"Buying QuickFix Synthetic Urine?"}
{"title":"Saw this awesome piece at an Art Show last night..."}
{"title":"My father with dementia missing in Los Angeles Area, last seen Ferndell and Los Feliz."}
{"title":"Missing cat- Bagley and Exposition (pic in comments)"}
{"title":"The 20 Best Songs Ever Written About L.A."}
{"title":"Two Men Arrested In Connection With The Murder Of CSUN Student"}
{"title":"Los Angeles daily discussion thread 10/19/14"}
{"title":"2 Arrested in CSUN students' death"}
{"title":"Woman Has To Be Rescued After Getting Stuck In Ex\u2019s Chimney In Thousand Oaks"}
{"title":"Man steals LAFD ambulance sent to help him, ending in a crash."}
{"title":"Hey r\\LosAngeles its my moms birthday on tues but my father is working so she'll be home alone. What or were is someplace fun I can take her?"}
{"title":"Purple glow in the sky"}
{"title":"So, anyone in the Hollywood area got any work I can do for them to fund my horror's night ticket?"}
{"title":"Los Angeles and Its Booming Creative Class Lures New Yorkers"}
{"title":"Researching Looking for Giant Whitefly Locations in Southern CA. If you own Hibiscus you probably have it!"}
{"title":"Hi! I'm fairly new to LA and I'm taking my gf on a date to Laguna Beach. I need some help :O)"}
{"title":"Award winning No1 lovespell caster with powerfullspells+27733947689"}
{"title":"Where is everyone watching the fight tonight?"}
{"title":"MISSING LMU STUDENT - PLEASE HELP IF YOU KNOW ANYTHING ABOUT HIS WHEREABOUTS"}
{"title":"Forest Lawn Drive Construction"}
{"title":"Werner Hertzog on LA"}
{"title":"Manny Vs Mayweather reddit viewing?"}
{"title":"another jaded Los Angeles doll (gif)"}
{"title":"West Side bars showing the Mayweather/Pacquiao?"}
{"title":"Long Beach lost ID"}
{"title":"Ladies and gentlemen, I present you Studio City on wheels."}
{"title":"Any Angelenos with a pool that is too cold when the weather is too hot?"}
{"title":"We're honeymooning in Los Angeles"}
{"title":"Man could get 20 years in prison for smuggling butterflies through LAX"}
{"title":"Coachella at the Rose Bowl? A music and arts festival is on the horizon"}
{"title":"My friend's church is hosting a Comfort Women Speak Out tomorrow in LA!"}
{"title":"Visiting through Wednesday"}
{"title":"[Meet-up] Visiting through Wednesday"}
{"title":"Be A Sexy Bride!!! Call Us To Help, SoCal!!"}
{"title":"Big thanks to /u/risp_ftw for his Dodgers tickets idea! Enjoying our $25 seats."}
{"title":"Anybody know where I can find a ghee pot (Ghilodi)?"}
{"title":"any place to watch the fight right now in los angeles that isnt at capacity?"}
{"title":"Best taco food truck?"}
{"title":"Los Angeles Metro Fantasy Map"}
{"title":"Good food near LAX?"}
{"title":"Hi guys. Looking to make more friends in LA!"}
{"title":"Los Angeles and Its Booming Creative Class Lures New Yorkers"}
{"title":"From Mammoths to Jefferson: How the Los Angeles Street System Ended Up So Weird"}
{"title":"Best 18+ clubs in LA?"}
{"title":"Question - seemingly large explosion in Long Beach at about 12:50 am"}
{"title":"To piggyback off the other homeowner post. I'm looking to buy my first studio or 1 bedroom apt in LA as an investment to rent out. Any tips?"}
{"title":"Car2Go suspending operation in South Bay"}
{"title":"Moving My Young Family to LA. Help."}
{"title":"Cal State L.A. receives $5 million grant from NASA"}
{"title":"LAPD 'crosswalk stings' that ticket pedestrians 'defies common sense', official says"}
{"title":"Los Angeles-area DUI checkpoints planned for Cinco de Mayo"}
{"title":"Visiting LA for 4 days, Hire Car or Uber"}
{"title":"Second straight LAFD recruit class is all male after women exit"}
{"title":"A Southern Californian of record sets The New York Times and its readership straight: Los Angeles is not Williamsburg West."}
{"title":"Chef At Santa Monica Restaurant That Served Whale Meat Sentenced"}
{"title":"So we had another frakquake in Baldwin hills over the weekend. Is anyone else worried fraking will trigger the big one??"}
{"title":"Where can an 18 year old meet people his age in LA?"}
{"title":"Curious... Howw much does an average bartender make at a mediocre bar in Hollywood area...?"}
{"title":"Walking in residential areas at night"}
{"title":"Cinco De Mayo Events!"}
{"title":"Used cars."}
{"title":"Missing tween girl and boyfriend found, were not on bus going to beach"}
{"title":"Not a Game Nation Without Proper Representation"}
{"title":"LA based graphic design startup. Seeking feedback"}
{"title":"Has anyone done an internship or the agent training program at UTA (United Talent Agency)?"}
{"title":"Anyone else bummed out about 100.3 The Sound ditching music for talk in the morning?"}
{"title":"Are Downtown Real Estate prices in a bubble? Or do you think the value is here to stay?"}
{"title":"Red Light Ticket in Culver City"}
{"title":"Help a Nigga Out!"}
{"title":"LA's newer cell towers will keep working after earthquakes"}
{"title":"Shooting in Isla Vista: Megathread"}
{"title":"Best app for people living in LA--Uber of massages!"}
{"title":"Palms candlelight vigil against violence - May 13th 2015 at Woodbine Park"}
{"title":"Where can I find a juicy lucy burger?"}
{"title":"LA's newer cell towers will keep working after earthquakes"}
{"title":"Los Angeles daily discussion thread 12/29/14"}
{"title":"New Years Megathread"}
{"title":"Consumer advocate focuses his energies on revamping Prop. 13"}
{"title":"Essential things to do for visitors"}
{"title":"Web buzz: Tripnary matches travelers to destinations"}
{"title":"Drove to work on streets this morning and the speed limit was higher than the temperature."}
{"title":"[REQUEST] desperately seeking a westside rentals login"}
{"title":"The Hidden Oil Wells Of Los Angeles"}
{"title":"American Cinematheque: Begin 2015 with laughter! A Marx Brothers double feature, HORSE FEATHERS (1932) / ANIMAL CRACKERS (1930), January 1 at the Aero Theatre in Santa Monica."}
{"title":"El Sereno Street Art"}
{"title":"Generous policy rewards city workers who take long injury leaves"}
{"title":"American Cinematheque: A cinematic offer you can't refuse! THE GODFATHER and THE GODFATHER PART II - January 2 at the Egyptian Theatre in Hollywood."}
{"title":"Totally Awesome Things to Do in LA - 12/29-1/4"}
{"title":"LAPD Lifts Hold On Ezell Ford\u2019s Autopsy Report"}
{"title":"Our Hometown El Sereno"}
{"title":"Ezell Ford: Autopsy shows gunshot in back at close range"}
{"title":"It's Going To Be Close To Freezing On New Year's Eve In Los Angeles"}
{"title":"Ezell Ford's Autopsy Released"}
{"title":"Hollywood Blvd &amp; Orange, 1952."}
{"title":"9 Very Practical Things to Consider Before Moving to Los Angeles (Any more suggestions?)"}
{"title":"Building an identity: Immigration and architecture in Southern California"}
{"title":"Reforming Watts"}
{"title":"Los Angeles Sucked and Ruled in 2014"}
{"title":"Los Angeles police shooting: Autopsy shows Ezell Ford shot in back"}
{"title":"The old Spanish and Mexican Ranchos of Los Angeles County, made in 1930"}
{"title":"What's your favorite view in/of/around Los Angeles?"}
{"title":"Camping in December? Thinking about Big Sur, might be too cold? Where's good tent camping?"}
{"title":"Were there ever any antelopes in Antelope Valley? If not, why the name? If so, where'd they go?"}
{"title":"An illegal car race was stopped after authorities arrested several people who attempted to take over the 105 Freeway in South LA -- people were arrested on charges of suspicion of possessing stolen firearms and stolen vehicles as well as narcotics violations and driving under the influence."}
{"title":"Grand Park poised to become LA's New Year's Eve destination"}
{"title":"Anyone familiar with Cottage Laws?"}
{"title":"Ezell Ford Was Shot by Officers 3 Times, Including Once in Back: Autopsy Report"}
{"title":"Dear highway patrol: easy money to be made on the I-15"}
{"title":"Woman to Ride in Rose Parade Nearly 60 Years After Being Denied Honor Because of Her Race"}
{"title":"Where can I take a basic computer engineering or electro indices class cheaply in Los Angeles?"}
{"title":"Locals, what's your favorite touristy thing to do?"}
{"title":"Yes, LAFD is aware of a large \"shooting star\" visible across Southern California"}
{"title":"Three Former San Franciscans Explain Why They Moved to LA"}
{"title":"What's up with the 101 south this morning"}
{"title":"Rear ended inside LAX"}
{"title":"Supreme Court turns to USC professor, alum and students\u2019 work in key decision"}
{"title":"California Adds Income-Based Caps for Clean Vehicle Rebates on EVs and Plug-In Hybrids"}
{"title":"This steering wheel tray may get you killed but would come in handy for those who use the parking lot that is our freeway system..."}
{"title":"Possibly moving to South LA. Questions!"}
{"title":"California cities show the biggest water savings yet in the drought at a 29% reduction"}
{"title":"Workshop on two tree monitoring projects."}
{"title":"Park suggestions"}
{"title":"Griffith Park Now Has an Illicit Teahouse With Amazing Views"}
{"title":"LA"}
{"title":"Comedy Show Tonight! Great Line Up- even Greater Cause!"}
{"title":"Yarn Bombing L.A. attached #BlackLivesMatter to the front metal fence of the Craft and Folk Art Museum on Wilshire"}
{"title":"Recommendations for a good car mechanic that you trust in West Hollywood area?"}
{"title":"How to go from funny at a bar to actual stand-up comedian in LA (Time Out LA)"}
{"title":"Prop. 47's effect on jail time, drug rehabilitation is mixed so far"}
{"title":"Stitches - Brick In Yo Face PARODY by Lil Pose"}
{"title":"Metro TAP cards now accepted for fares on Santa Monica Big Blue Bus lines"}
{"title":"The LA Department of City Planning's Mobility Plan 2035 outlines plans to improve getting around Los Angeles over the next 20 years. We're finally moving away from catering only to the needs of drivers."}
{"title":"Was in the post office today, 3 Mexican families came in and it was overrun like a clown car."}
{"title":"The plastic bags are now way thicker and use much, much more plastic and we have to pay for them. Anyone think the plastic bag ban was just a scam to get the consumers to pay for the bags instead of the grocery stores?"}
{"title":"Anyone know what is going on at the corner of Ocean Park and Lincoln in Santa Monica?"}
{"title":"Free Haus Dogs All Day Today at Dog Haus in Thousand Oaks to Celebrate Opening of New Store. FYI They Close at 10pm."}
{"title":"Dim-Sum and Oscars"}
{"title":"Under 21 renting a car?"}
{"title":"Areas you absolutely should not go to in LA"}
{"title":"Final word on red light camera citations in Culver City?"}
{"title":"Anyone know what they're building on Genesee and Melrose?"}
{"title":"Greetings from /r/SanDiego. If you guys still want to be known as \"The Meat\", we're happy to oblige."}
{"title":"Will I be safe during my visit?"}
{"title":"Events This Weekend"}
{"title":"Shipping lines and dockworkers reach deal; port shutdown averted"}
{"title":"My friend SICK KID painted a wall on La Brea today. (My Blog)"}
{"title":"Chinatown Today"}
{"title":"Was in the post office today, three Mexican families came in and it was overrun like a clown car."}
{"title":"anybody know where to find some churro ice cream?"}
{"title":"The city of LA wants to build a deep well injection site. Please help me and countless other to stop this [More info in comments]"}
{"title":"LAPD detectives catcht some silly kids robbing poeple with an air pistol."}
{"title":"The Little Con that Could"}
{"title":"L.A.'s subway system will finally get a westward extension, but not as far as originally promised"}
{"title":"Over a dozen hikers missing in Eaton Canyon"}
{"title":"Is This a Meaningful Fling?"}
{"title":"Anybody know why they are not allowing christmas tree burning at dockweiler?"}
{"title":"Good action figure/collector's store?"}
{"title":"Could anyone help me out with a $40 paypal debit master card or net spend card in the San Fernando Valley, I can send you the money via paypal. I just need it to get money off my paypal as my bank account is in the negative over $400."}
{"title":"Christmas Tree Sparks Van Nuys Apartment Fire (yes, on January 18)"}
{"title":"What are some good bars with Dancing in Studio City?"}
{"title":"Enjoying the sunset."}
{"title":"Roadwork revealed the long buried Yellow Car tracks in front of my house at Virgil/Clinton."}
{"title":"On Gangs in Los Angeles - A Ross Kemp Documentary [45:01]"}
{"title":"Trying to find a club that plays rock/metal"}
{"title":"NOWandBECAUSE-Happy New Year SONG(Original MUSIC)"}
{"title":"Inspired minded and alike"}
{"title":"LAFD Photos: Cat Resuscitated Following Van Nuys Fire Sparked by Christmas Tree (January 18!)"}
{"title":"\"...three teenagers have been ordered to stand trial for the beating death of a University of Southern California graduate student from China. Investigators say the assailants admitted to targeting the victim to rob him, deciding that 'because he was Chinese he must have money.'\""}
{"title":"Your tax dollars at work (Harbor Gateway Transit Center on Sunday afternoon)"}
{"title":"The Essential Novels of Lost Angeles"}
{"title":"Make Cycling Nicer In LA With Sombra, The World's First Bicycle Tail-light Diffuser [Indiegogo Campaign]"}
{"title":"Martin Luther King Jr. at UCLA 4/27/1965"}
{"title":"Hello people of LA, a friend of mine started a donation of Blankets to the homeless 4 years ago and it's been doing pretty good. Thought I'd ask reddit for support and love and civility. Please check this out"}
{"title":"Los Angeles daily discussion thread 01/19/15"}
{"title":"Smog made Los Angeles City Hall a shadowy presence in 1953."}
{"title":"Is there an apocalypse that I should be aware of going on Los Angeles ???!!"}
{"title":"Downtown's 4th annual 'Freq.Fest' next weekend! 3 nights of music made with obsolete video game and computer hardware. 1/30 - 2/1 (Chiptune and more)"}
{"title":"Three teens to stand trial in USC student&amp;apos;s killing"}
{"title":"Dogers may not be shown on local stations for 2015 season."}
{"title":"In the Gay Wing of L.A. Men's Central Jail, It's Not Shanks and Muggings But Hand-Sewn Gowns and Tears"}
{"title":"Volunteer opportunities for Thanksgiving Day?"}
{"title":"Uber Free ride for new members."}
{"title":"Where can I get a whole goose to cook?"}
{"title":"LAPD Bicycle Cops Perform Jaywalking Sting At Pershing Square"}
{"title":"L.A. Parents: I'm sick of meetup groups (TOO many emails) and I like personal recommendations over newspaper listings, etc. So, I created r/LosAngelesParents...for Los Angeles Parents. Dig?"}
{"title":"Tienes que ver las impresionantes fotos de Miss Bum Bum la competencia de Kim Kardashian"}
{"title":"I came across \"Los Angeles Playing Itself\" on Netflix. I thought you guys might enjoy it!"}
{"title":"Anyone work in sales/operations in a local (for-profit) station (radio or tv) that I can interview for my college project?"}
{"title":"Commuting to Playa del Rey?"}
{"title":"While everyone else in the country is complaining about the cold, we get to relax outside in sunny Grand Park!"}
{"title":"Apparently it's winter now...I think"}
{"title":"Remember those dumbasses that tried LAPD's patience with flying drones over their station? Well now FAA is going to regulate all flying thing. this is why we can't have nice things"}
{"title":"Where to find Macedonian Kebapi"}
{"title":"Salad vending machines are coming to L.A."}
{"title":"Looking for a good english school for a Japanese friend(28F)."}
{"title":"Running Up Mount F.U."}
{"title":"Tonight's Pink Pacific Sky"}
{"title":"Los Angeles daily discussion thread 11/19/14"}
{"title":"To Live and Coffee in LA - The Serious and Funny about Conan going to Intelligentsia"}
{"title":"5 Ways the Los Angeles Episode of Sonic Highways Kinda Blew It"}
{"title":"Seals sparring just off your magnificent coastline"}
{"title":"Long term parking for the airport (Doesn't need to be close)"}
{"title":"Los Angeles daily discussion thread. 12/16/14"}
{"title":"Earthquake could imperil L.A.'s water supply"}
{"title":"A while back, I posted a picture of Downtown LA from the 14th floor of the emergency stairwell of Webb Tower and someone suggested I go back when there was snow in the mountains. So I did. Downtown at sunset on December 14th, other pictures in comments. (x-post /r/USC)"}
{"title":"Mayor Garcetti to announce all LAPD will wear on-body cameras"}
{"title":"Los Angeles when it rains..."}
{"title":"Surrounded by Art: The Murals of City Terrace (2014). Students from the City Terrace Public Library filmed and edited this short documentary about the murals that decorate their East Los Angeles neighborhood. [Xpost from r/documentaries]"}
{"title":"Phone screen broke (Galaxy S4). Need a place to fix it today. Any recomendations (westside/southbay)."}
{"title":"Can anyone recommend an old-timey barber shop? Looking for a cut and a shave (west-side) thanks!"}
{"title":"NASA analysis shows it will take 11 trillion gallons to replenish California drought losses."}
{"title":"TIL that Dr. Seuss lived in San Diego and would incorporate Southern California landscape in his drawings"}
{"title":"LA Kings Slava Voynov punched, choked, kicked wife during argument, according to testimony"}
{"title":"The View From My Office On This Rainy Day"}
{"title":"LAPD Horse Mounted Unit Writes Ticket To Homeless Man With Open Container At Pershing Square - [My Channel]"}
{"title":"LA Express Park is thus far a success in downtown LA, Chinatown, Little Tokyo"}
{"title":"my GF took this pic last week in Angeles Crest Forest .Hopefully there's still this weekend."}
{"title":"What to buy for Mom?"}
{"title":"L.A. Tecmo Super Bowl Tournament 2015"}
{"title":"[Meet-up] comedy show/live jazz- meet-up!"}
{"title":"Drive-in liquor store, Los Angeles, California 1949."}
{"title":"Could someone out there do me a favor and measure the PH of Los Angeles tap water and post it here?"}
{"title":"Take a look at the Blue Line's station upgrades including track updates to improve service"}
{"title":"Metrolink chief Michael P. DePallo quits after two years (note: Metrolink and NOT Metro)"}
{"title":"Why is a Tiltrotor circling over LA's Westside??"}
{"title":"Alleged Alhambra drunken driver who hurt 13 people had prior DUI violations, revoked license"}
{"title":"Creating a Network of Complete Streets in the San Gabriel Valley"}
{"title":"Whoa! Anyone see that Tiltrotor Osprey flying over West LA???"}
{"title":"Inbetween LA and Mammoth (395)"}
{"title":"Relocation advice from New England"}
{"title":"10 L.A. Restaurants That Are More Fun Than Staying Home on Christmas Day"}
{"title":"Flooding near my office in Torrance"}
{"title":"Looking for great used book stores"}
{"title":"Moving from ATL-&gt; LA in a month. Any info on waiting tables in the area?"}
{"title":"Hey guys, fellow SF redditor visiting for X-mas break"}
{"title":"Even Google gets it"}
{"title":"Picture I took of the helicopter medevac from Mt. Hollywood this morning"}
{"title":"I was having a really shitty day. Then I saw this video. I fucking love you SoCal :')"}
{"title":"Picture I took of our city yesterday"}
{"title":"Getting a sense of a utility bill"}
{"title":"Mark Hoppus is a guest DJ at Taking Back Tuesday"}
{"title":"Mechanic in the USC area"}
{"title":"Why isn't LA offering the homeless people jobs such as cleaning up all the dog shit?"}
{"title":"Where to get boiled bologna in Los Angeles?"}
{"title":"Monthly parking in downtown Santa Monica"}
{"title":"LA public transportation"}
{"title":"Thanks for showing me the Magic Castle!"}
{"title":"Helpful Honda strikes again: Today, they loaded my groceries in Santa Clarita..... (x post: /r/pics, /r/Honda)"}
{"title":"SAGAwards 2015 Complete List of Winners http://bit.ly/..."}
{"title":"Jobs and self-support"}
{"title":"The Midcentury Diners of Los Angeles Look as Dashing as Ever"}
{"title":"California Gang Territories (fun map, no idea how accurate it is)"}
{"title":"LA Confidential....A little bit of street photography."}
{"title":"Why A Black Man's Murder Often Goes Unpunished In Los Angeles. Author of \"Ghettosides,\" Jill Leovy follows LAPD Det. John Skaggs and chronicles the failures of our justice system."}
{"title":"U.S. judges see 'epidemic' of prosecutorial misconduct in state"}
{"title":"What happened at Figueroa and 32nd this afternoon?"}
{"title":"Are you currently being extorted by the LADWP? (serious)"}
{"title":"At Least One Dead After Bus Crashes Into Pedestrians in Redondo Beach Intersection"}
{"title":"What are some fun things to do with visitors that aren't the usual?"}
{"title":"How To Rent Filming Locations in Los Angeles"}
{"title":"Thursday Free in LA (alone)... Suggestions? Anyone want to meet up?"}
{"title":"Pros and Cons: Doing The Tonight Show in Los Angeles"}
{"title":"At 1 AM, the air in Los Angeles is literally worse than Beijing"}
{"title":"Sixth Annual Linda and Tony Rubin Lecture: \"Just Following Orders? How Ordinary People Become Perpetrators\" at Stephen Wise Temple, 15500 Stephen S. Wise Drive, Los Angeles, CA 90077 7pm 02/18/2015. Repost from /r/Holokauston [(Genuine) Holocaust Subreddit]"}
{"title":"Could Los Angeles rethink its transportation system in a way that would allow closure of freeways?"}
{"title":"/r/losangeles discusses: Best places for visitors/tourists to see/do/go."}
{"title":"The Broad is opening in September, but you can see it next week"}
{"title":"KTLA shows what it's really like in Hollywood."}
{"title":"Re-Zoning Los Angeles: Can we legalize a walkable City?"}
{"title":"L.A. Councilman Joe Buscaino weighing congressional run"}
{"title":"After CBS2 Investigation, LA Will Refund Drivers For More Than $1M In Erroneous Parking Tickets (call 866-561-9742 with your license plate number to find out if you\u2019re getting money back.)"}
{"title":"Thinking about moving to LA or just outside. Need some advice on neighborhoods and sub areas!"}
{"title":"LAPD Officer Deon Joseph Discusses The Current State Of Skid Row - [my channel]"}
{"title":"Hotel Barbizon Sign on 6th St this morning"}
{"title":"California Wants to Shut Down Foie Gras Again"}
{"title":"Former Marlborough School teacher accused of sexually abusing a student"}
{"title":"Know your graffiti"}
{"title":"Can I drive my bicycle on sidewalks?"}
{"title":"New Expo stations: Lots of palm trees"}
{"title":"I've had an almost 2 year obsession with photographing discarded shopping carts around Los Angeles. [x-post from r/pics]"}
{"title":"Anyone going to or have been to The Renaissance Pleasure Faire in Irwindale April 4 - May 17? Post by Jilleen."}
{"title":"Texas-style breakfast tacos in LA or OC?"}
{"title":"Documentary on Skid Row - Great viewing for anyone living in Los Angeles."}
{"title":"Airelle\u2122 Skincare to appear at the Los Angeles Wedding Salon Bridal Show on March 24"}
{"title":"Telehealth Research Study @ Northwestern University"}
{"title":"Echo Park Reminder: Lock your car door at night. Even if you park your car on the driveway."}
{"title":"Anyone registered for the LA Marathon not planning to run?"}
{"title":"Council Approves Seeking Funds for $10-15M Ped Bridge To Griffith Park"}
{"title":"UCI student Council to BAN US Flag, WTF (Its a STATE FUNDED school!) x/post from /r/orangecounty"}
{"title":"Blackheart Burlesque Auditions"}
{"title":"Audit Documents Cheating and Nepotism at L.A. County Fire Department"}
{"title":"New \"The Walking Dead\" spinoff will set the apocalypse in Los Angeles. Predictions?"}
{"title":"Highs will be in the low 90's come this weekend."}
{"title":"Final sale at the Silver Lake Ralphs"}
{"title":"Did everybody just get that Amber Alert on their phones?"}
{"title":"I'm all for finding lost kids, but blasting Amber alerts to every phone in SoCal cannot be the best way to do it."}
{"title":"Amber Alert Issued for 1 year old boy. 2006 Nissan Altima, Gray, California license plate #5UCF010"}
{"title":"I know you're just trying to get home..."}
{"title":"A ride along with man who paints over graffiti in Los Angeles for the past 20 years."}
{"title":"Totally Awesome Things To Do In LA - 3/9-3/15"}
{"title":"A Survey about Apartment Dwellers in Los Angeles"}
{"title":"How Airbnb Is A Blessing And A Curse For L.A. Renters: LAist"}
{"title":"Enjoy A Night Of Inspiration And Hope With Joel- and Victoria Osteen On March 13th At the Staples Center! Get Your Tickets And Book Your Limo Today! (866) 319-LIMO"}
{"title":"BYE LA,part 1 of 4 page comic about a road trip"}
{"title":"Looking to move at a place in Baldwin Hills, what kind of area is it for crime, gangs, parking, etc.?"}
{"title":"Village at Westfield Topanga Announces new stores and a Sept opening"}
{"title":"Big Boy To Debut On Real 92.3 Los Angeles On March 9"}
{"title":"AEG abandoning plans for NFL stadium downtown"}
{"title":"Catholics practicing lent, what's your go to place for Lunch on Fridays?"}
{"title":"LAUSD to consider layoff warning notices for 609 employees"}
{"title":"Americana Shopping Center Bans Sale of Armenian Genocide T-Shirts"}
{"title":"AEG Gives Up On Farmers Field"}
{"title":"LA life! Mid Wilshire district."}
{"title":"RE Folks. Is there any truth with a cyclical price increase in the summer months?"}
{"title":"Boy, 1, Sought in Amber Alert Found Safe in Tijuana by U.S. Marshals"}
{"title":"Missing 1-year-old from the amber alert earlier today found in Mexico!"}
{"title":"Man Who Sent Nude Photos Of Pasadena Teacher Gets 6 Months In Jail"}
{"title":"Good swim beaches/lakes LA area?"}
{"title":"Taking off from LAX"}
{"title":"Having an ESA in a no dogs apartment? Is it a dick move?"}
{"title":"I was forced to buy a new TAP card today because my light blue card \"expired\""}
{"title":"What is this weird giant plot of land between Griffith park, LA Zoo, and Forest Lawn?"}
{"title":"Downtown L.A. bus FIGHT!!!"}
{"title":"Man Surrenders In Fatal Hit-And-Run Of 4-Year-Old Glendale Girl | CBS LA"}
{"title":"High Speed Fiber Internet Service Los Angeles, CA - Fastmetrics"}
{"title":"Metro to assign letters for rail and busway lines"}
{"title":"Los Angeles artist Jennifer Main - new website, new works! (DTLA artwalk next Thursday)"}
{"title":"Looking to explore LA's abandoned underground..."}
{"title":"Mini Van nearly split in half in accident on Hawthorne Blvd. (News link in comments)"}
{"title":"Petition: LACES feeder school needs new leadership. Lemon principal needs to be removed immediately! Please sign and pass it on."}
{"title":"Recs/ideas for long weekend trips FROM LA for a solo traveler?"}
{"title":"L.A. Finally Shamed Into Doing Something About Decrepit Sidewalks"}
{"title":"Reseda Boulevard Getting Its Great Street Improvements including new parking protected bike lanes :)"}
{"title":"Metro Takes Another Step Forward in Effort to Build and Preserve Affordable Housing at Transit Hubs"}
{"title":"Woman Killed In Front Of Her Son (and a police officer) After Laughing At Stranger, Cop Says"}
{"title":"If you own a business or are part of an organization in LA and would like a bike corral, LADOT wants to install one for you!"}
{"title":"Bill Maher interviews NASA's Senior Water Scientist, Jay Famiglietti, about the California drought (\"Real Time,\" March 27, 2015) - skip to 34:00"}
{"title":"Eagle Rock Yacht Club - Adult Dodgeball without sans jerks."}
{"title":"Best Hookah in LA?"}
{"title":"Stolen Lt Tan/Beige Mini Poodle, Bearbear -- $1200 Reward, No Questions Asked"}
{"title":"Dodgeball, Drinking and the Common Good // The Eagle Rock Yacht Club"}
{"title":"Love my aunt, but felt like I had to draw it in crayon for her about how she should not be so mad that high rises are being built nearby and people should not be forced to move further out of the city, and this naturally happens in a big city."}
{"title":"Weekly What To Do: Fast &amp; Furious WonderCon Weekend"}
{"title":"Angelinos: What are some typical, local LA products?"}
{"title":"The hell with Jennifer Lopez, I miss Selena. Here she is at the Santa Monica Pier."}
{"title":"Manhattan Beach vs. Redondo Beach (to live)"}
{"title":"Occupy demonstrators could get $2.45 million in a settlement with the LAPD due to \"shock and awe\" eviction from City Hall"}
{"title":"PNC bank in LA?"}
{"title":"Drought pushes skiers, resorts to seek alternative fun"}
{"title":"How does parking enforcement define \"the body of a vehicle?\" Got a parking ticket in my OWN DRIVEWAY."}
{"title":"Anyone know a shop I could buy a vintage road map from?"}
{"title":"Metro Proposes Simplified Naming Convention for Rail Lines. Proposed plan would replace color names with letters, a la the NYC Subway."}
{"title":"Principal at LAUSD feeder school to LACES, Mid City Magnet School- is a TYRANT. Parents complain to district, nothing happens except retaliation from entire staff and admin at school. Meanwhile, principal has numerous connections in LAUSD resulting in her sticking around and keeping her job...W T F"}
{"title":"EVERY NIGHT ON THE NEWS! WHAT THE HELL IS GOING ON?"}
{"title":"Friends want to go eat at a restaurant but they are all picky as hell. Anyone have recommendations that meet their guidelines?"}
{"title":"h\u1ecdc sinh nh\u1ea3y hiphop ch\u1ea5t(hiphop dance students)"}
{"title":"Los Angeles weekend discussion thread 04/03/15 - 04/05/15"}
{"title":"Lease just ended and landlord just notified me they are raising rent 8% in September - any thoughts?"}
{"title":"What's the cost of living in LA ?"}
{"title":"Polyphagous Shot Hole Borer (PSHB) Beetle"}
{"title":"What is happening at the Roxy today?"}
{"title":"Anyone know of a decent place to get a smog check in sgv?"}
{"title":"I see this way too often."}
{"title":"My friend works on a talk show and is looking for a deserving woman who needs a makeover. Know anyone?"}
{"title":"HomeLA getting creative with 'Frogtown' on the LA River (360\u00b0 dance performance)"}
{"title":"FYI: Sunset Blvd between Doheny and San Vicente Closed ~1pm"}
{"title":"Brew at the LA Zoo! ... I've never been to the zoo but this looks like a great excuse to go!"}
{"title":"Midnight Rambler | Magnus Walker In L.A. (x-post /r/soundporn)"}
{"title":"Metro's dreary, dangerous Rosa Parks Station in Willowbrook to get a major makeover"}
{"title":"Heads up: Had my catalytic converter stolen, insurance says it's been happening alot."}
{"title":"1975: Institute of Oral Love at 7722 Santa Monica Blvd"}
{"title":"Retired LAPD Detective Arrested For Allegedly Robbing Five Banks"}
{"title":"Coin Pusher Arcade Game"}
{"title":"In honor of National Hot Dog day, LA history podcast episode on the hot dog history of LA [my podcast]"}
{"title":"Fact and Fiction In True Detective\u2019s High Speed Rail Plotlines"}
{"title":"Searching for a unique Los Angeles story/person/location"}
{"title":"Crowds Close Section of Sunset Blvd due to Future concert at The Roxy"}
{"title":"Negatives of gentrification"}
{"title":"LAPD officer sentenced to 36 months for assault of woman who died in custody"}
{"title":"Avengers at the arclight dome May 1st after show."}
{"title":"Today is Free Comic Book Day! Support your local comicbook store!"}
{"title":"Los Angeles and Its Booming Creative Class Lures New Yorkers"}
{"title":"Coffee this morning"}
{"title":"where can I watch the Mayweather fight in the valley?"}
{"title":"Best place to not watch the fight?"}
{"title":"does anybody know any of the family members who picketed the shell stations on crenshaw and rodeo and 3rd and western ?"}
{"title":"Just a couple of hours north of our fair city"}
{"title":"Women"}
{"title":"Driver who abandoned car in North Fire pays more than $1000 to towing company"}
{"title":"What's with these unnecessarily loud and powerful fireworks? 4th of July passed already and people are trying to sleep"}
{"title":"Struck by lightning, Echo Park"}
{"title":"Lightning storm ignites Echo Park fires"}
{"title":"Billionaire's Beach just got a lot less exclusive"}
{"title":"Echo Park lightning reaction (7/19/2015)"}
{"title":"Pic I took of the U.S. Bank today in the thunderstorm"}
{"title":"Why the deaths of Latinos at the hands of police haven't drawn as much attention"}
{"title":"Plan to Restore LA River (Video)"}
{"title":"Where can I find some good steaks?"}
{"title":"Bernie Meetup in Burbank, Come Join Us July 29th!"}
{"title":"Just switched from ATT U-Verse to Time Warner Cable (100mbps). Did I make a mistake?"}
{"title":"https://d2t1047w253zzm.cloudfront.net/blog/2015/06/LA-Spring-15.png"}
{"title":"The Cheapest And Most Expensive LA Neighborhoods To Rent"}
{"title":"Retired L.A. Superior Court Judge Arrested After Allegedly Shooting at LAPD Officers"}
{"title":"ALDI'S discount grocery chain to open 45 stores in SoCal"}
{"title":"Ratings issues?"}
{"title":"Petting Zoos in LA?"}
{"title":"Anyone ever thrown / organized a block party? Insurance questions..."}
{"title":"A day in la with my nephew! Help!"}
{"title":"Never eat airline food!!"}
{"title":"Anyone know where to find these in the Valley? I've looked at 3 locations in SFV so far and haven't seen them."}
{"title":"Solo 4 day trip ideas?"}
{"title":"Forecast for a strong El Ni\u00f1o event brings hope for drought relief in California."}
{"title":"What happened to u/AtomicClown?"}
{"title":"Parking on the Sunset Strip is a humbling experience, even when you find a spot"}
{"title":"Theaters that play NEW RELEASES in 35mm?"}
{"title":"Students build new home for paralyzed Army veteran"}
{"title":"Looking for snorkeling spots around LA area. Catalina seems too time consuming to me."}
{"title":"Does anyone know of a good private investigator specializing in missing people?"}
{"title":"Back in time 1985! Golden State Pops Orchestra playing music from Rambo, Back To The Future, The Goonies and more tonight in Redondo Beach. Discount codes for 30-40% off tickets in comments!"}
{"title":"Don't Drive Yourself! You Deserve Better! Call Us For A Ride To LAX!!"}
{"title":"Let's grab a beer before the Grand Park Meetup"}
{"title":"Renting vs Buying a Home in Los Angeles: the breakeven numbers"}
{"title":"Called 3-1-1 to report graffiti/tagging and it was removed within an hour. Super-impressed with LA's graffiti-removal team!"}
{"title":"Looking for an apartment"}
{"title":"Los Angeles Unified School District Lowers Standards to Let 22,000 Failing Students Graduate, Some As Old As 22."}
{"title":"Tickets at Whiskyagogo"}
{"title":"Videos: Police Eat Edibles And Mock Amputee In Pot Shop Raid, Lawyer Says"}
{"title":"Please support a safer Santa Monica Airport."}
{"title":"Fork it over... Who's got the Westside Rentals Password"}
{"title":"What's going on between Santa Monica and Melrose on San Vicente?"}
{"title":"Ezell Ford\u2019s Shooting Death Shines Light on LAPD Brutality"}
{"title":"Bicycle-friendly roads near Santa Monica/Venice beach?"}
{"title":"Southern Pacific railroad as it enters Santa Monica. The railroad ignited a bustling tourism industry along the Pacific Coast 1880s."}
{"title":"Los Angeles Uber driver accused of sexual assault"}
{"title":"Hot Dog on a Stick buy one get one free in honor of Katy Perry"}
{"title":"Clifton's Cafeteria Turns On Its New Neon Sign After Years Of Renovations"}
{"title":"Groundhog Day shows 6 more weeks of near-perfect LA weather [TimeOut.com]"}
{"title":"2 donors save rental store Vidiots from closing"}
{"title":"Some Motorists Wait Months For DMV Appointments After Immigrants Law Goes Into Effect: The Department of Motor Vehicles is so overwhelmed with requests for new driver\u2019s licenses and vehicle registrations that it can take up to three months to get an appointment or a half-day wait in the lobby."}
{"title":"Clifton\u2019s Cafeteria is Coming Back to Life at Long Last!"}
{"title":"Should I accept a job offer in LA?"}
{"title":"I &lt;3 L.A."}
{"title":"Helicopters over Korea town. Why are they up there?"}
{"title":"Vet treatment for a stray found by my GF"}
{"title":"President Obama\u2019s Proposed FY15-16 Budget: $330M for L.A. Subways"}
{"title":"Totally Awesome Things To Do In LA - 2/2-2/8"}
{"title":"Anyone been to a Making Shapes party or the venue Lot 613?"}
{"title":"Desert Daze Lineup announced."}
{"title":"Do you want a place to play video games in LA?"}
{"title":"Question about the LA Zoo"}
{"title":"More than 60 people witnessed fatal L.A. street race; driver identified | Los Angeles Times"}
{"title":"Fundraiser for Metrolink Engineer Glenn Steele"}
{"title":"California Labor Law question"}
{"title":"LAX passes O'Hare; is now second-busiest airport in the country"}
{"title":"L.A. County's cowboy country braces for bullet train"}
{"title":"What is the law on apartment repainting?"}
{"title":"iPhone shot of a LA sunset"}
{"title":"VIDEO: RUN. HIDE. FIGHT - Surviving an Active Shooter Incident..."}
{"title":"Watch out - Virgin America Craigslist Scam"}
{"title":"LAMP 2 Year Anniversary at V Lounge - 1.16"}
{"title":"Why I got LA's most famous cougar tattooed on my arm"}
{"title":"Photographers interpret the geographical diversity of Southern California at Lancaster Museum of Art exhibtion"}
{"title":"Steven Gerrard has signed for the Los Angeles Galaxy."}
{"title":"Story about Lolipop Records in Echo Park and the Local Garage Rock Scene..."}
{"title":"Anyone Been to Just Massage in El Segundo?"}
{"title":"War at the hollywood sign between wealthy residents &amp; tourists"}
{"title":"Mountains north of Pacific Palisades from Sunset Blvd near its Pacific coast terminus, February 1952 by Charles Cushman."}
{"title":"Brides to-be, tell us your engagement story for a chance to win a prize! [x-post from /r/venturacounty]"}
{"title":"What cell phone carriers get the best speeds in LA?"}
{"title":"Looks like Foie Gras might be back on the menu. Does anyone know of any LA restaurants that might be serving soon?"}
{"title":"Senior Recreation Director / Facility Manager at Pershing square blocks rest area effectively shutting out any citizen who wants to sit down and relax - [my channel]"}
{"title":"[Meetup] 1st Inaugural Monthly WeHo low stakes Poker Game - Thr. Jan 22nd"}
{"title":"Mercedes auto shop parks dozens of cars on residential streets for weeks at a time. What can I do?"}
{"title":"9 cases of measles confirmed in California"}
{"title":"What's this?"}
{"title":"Maggiano's Meal for Two Deal is the Perfect L.A. Dinner Date Option."}
{"title":"Foodies: Foie Gras is now LEGAL in California"}
{"title":"f"}
{"title":"Knock Knock Eagle Rock [Trailer]"}
{"title":"Golden Road Brewery threatens to move out of LA over minimum wage increase."}
{"title":"Beautiful day today. Where can my lady and I have an outdoor dinner..."}
{"title":"Who here thinks Chromebooks will succeed where iPads failed at the LAUSD?"}
{"title":"Best Gay Night Club in LA"}
{"title":"Dear God Waze you can't be serious!"}
{"title":"East L.A. Interchange (I-5, I-10, SR-60, US 101) Closures for Swarm Maintenance this SUNDAY"}
{"title":"Foie gras can go back on California menus, judge rules"}
{"title":"Today marks the two-year anniversary of Huell Howser's death. RIP Huell, you truly were California's Gold."}
{"title":"Downtown view from Greystone Mansion in Beverly Hills"}
{"title":"Is there a Greek restaurant in L.A. where I can order Kokoretsi?"}
{"title":"5 Arrested in \"Hero\" Security Guard's Shooting Death: Five people, including four teenagers, have been arrested in connection with the New Year's Eve event shooting death of a security guard described as a hero for his actions during a violent night at a Southern California roller rink."}
{"title":"Weekly What To Do: I'll Kill You Valdez"}
{"title":"Why do I have to curb my dog in Griffith Park but a horse can shit all over the place?"}
{"title":"visiting LA soon, need advice!"}
{"title":"New LAPD Tasers will trigger body cameras before every shot | Engadget"}
{"title":"VIP Coachella Weekend 2 Ticket FOR SALE!!"}
{"title":"Ralph's answer to Swedish Fish"}
{"title":"Tip for parking at the Trader Joe's on Hollywood and Vine during rush hour"}
{"title":"Wife of ex-Clippers' owner Donald Sterling wins $2.6-million judgment"}
{"title":"Emotion erupts at second 710 Freeway public hearing"}
{"title":"Chi Spacca or Mastro's for Steak?"}
{"title":"Put Your Kid In A Real Plane! Sunday, April 19th \u2013 11am to 1pm at the Santa Monica Airport Observation Deck - 3233 Donald Douglas Loop South, Santa Monica, CA 90405."}
{"title":"The 2015 Long Beach Grand Prix Is Missing One Key Thing This Year: ME!"}
{"title":"Bomb threat near the Beverly Center"}
{"title":"I lost my memory card in Westwood."}
{"title":"Does the LAPD or LASD investigate missing persons?"}
{"title":"Staples Center to Torance"}
{"title":"Where are some good nights spots to drive to?"}
{"title":"Screaming and helicopters in weho"}
{"title":"Helicopter and police cars in PDR, what's up?"}
{"title":"LA Street Ball. Aussie coming over and wanna play some. Near Venice"}
{"title":"Up close and personal with the Brown's ring"}
{"title":"If I wanted to help my friend find her lost dad, what steps should I take? (Info inside)"}
{"title":"LAPD Will Not be Charged Over Shooting of Unarmed Man (Corvette driver)"}
{"title":"Wait, an asshole leads the cops on a dangerous high speed chase through the city, smashing into cars, and the city pays the asshole's family $5 million when he gets shot?"}
{"title":"Got a pic of last night's sunset"}
{"title":"Getty and city of L.A. launch website mapping historic places, HistoricPlacesLA.org"}
{"title":"Dealing with slow drivers*"}
{"title":"I'm going to a concert tomorrow at 9 at the Fonda. How early should I get there to make sure I'm at the front of the crowd?"}
{"title":"Rooftops for photography"}
{"title":"The other post is wrong. The Metrolink crash in Oxnard had ZERO casualties. 28 people were injured, 4 of the critically, including the engineer."}
{"title":"The Metrolink crash in Oxnard had ZERO casualties. 28 people were injured, 4 of them critically, including the engineer."}
{"title":"Any advice on finding Artist live/work lofts in DTLA?"}
{"title":"The UFC is coming to LA Live this weekend and hosting some free events open to the public"}
{"title":"Saw the aftermath of the torrance refinery explosion, took a picture."}
{"title":"I, too, got a photo of LA after the rain. From City Hall."}
{"title":"DTLA graffiti"}
{"title":"Favorite neighborhood in Santa Monica ?"}
{"title":"Do you know someone who struggles with body image or food issues? Everyone knows somebody."}
{"title":"Local team needs $436 TOTAL to play Little League."}
{"title":"Cheap hotel near LAX?"}
{"title":"This Rainbow over Disney inspired a little photoshopping yesterday."}
{"title":"Report: Cheating at L.A. County Fire Department went beyond hiring"}
{"title":"Bring your dancing shoes for: Joe Hertler &amp; the Rainbow Seekers Live 2/24/15 7:00pm @ THE MINT LA"}
{"title":"Glendale Installs Scramble Intersection"}
{"title":"A beautiful day here at Cal Poly Pomona!"}
{"title":"4 hour Layover at LAX - What to do?"}
{"title":"Should LA freeways get ice-skating lanes?"}
{"title":"Shaolin Monks Martial Arts Demonstation at The Chinese New Year Celebration in Chinatown Los Angeles"}
{"title":"Considering moving to LA very soon but have no job yet, what are some good places to look for film jobs in LA besides Craigslist?"}
{"title":"Nordstrom to relocate Westside Pavilion store to Westfield Century City"}
{"title":"Pet Kangaroos And Wolves At The Coolest Rescue You've Never Heard Of"}
{"title":"Calling All Silver Pass Holders"}
{"title":"[MY APP] Metro's mobile app is too slow. Mine is fast, and plays a bell when your bus/train is about to arrive."}
{"title":"Exploring Los Angeles with Keadle"}
{"title":"Found some cool mini-graffiti on Abbot-Kinney a few days ago. They were about 6 inches high with matching shadows."}
{"title":"Chef Picks: The Most Under-the-Radar Eating Experiences in Los Angeles"}
{"title":"I need to find an apartment on the west side for no more than 1500/mo."}
{"title":"Leaving work yesterday and I just had to get a picture. Thanks rain!"}
{"title":"What are your techniques to score a reservation at a booked restaurant??"}
{"title":"Video: Surfing Spots around Huntington Beach"}
{"title":"Southland faces possible record-setting heat, heightened wildfire risk this weekend"}
{"title":"Totally Awesome Things To Do in LA - 8/17-8/23"}
{"title":"LA Downtowner did a video for a couple of buddies that just opened their tap room. Mumford Brewing in DTLA x-post r/LABeer"}
{"title":"LAUSD Schedule has kids in classrooms in the hottest month of the year. Please sign Petition to help change this lunacy."}
{"title":"Is There Anywhere I Could Legally Graffiti?"}
{"title":"Looking for sandy desert locations for photoshoot."}
{"title":"Lost Husky in the San Gabriel area"}
{"title":"Good mechanic in Hwood/SilverLake/Santa Monica/West LA?"}
{"title":"Photos - Inside the Reborn Clifton's Cafeteria in Downtown"}
{"title":"Free criminal record expungement clinic in Compton this Saturday, August 22 [xpost: /r/Compton]"}
{"title":"Los Angeles Police Brutality: How Much Has LAPD Changed From Its Image In 'Straight Outta Compton'?"}
{"title":"Lyft rides 50% off today"}
{"title":"Domestic Violence in Apartment Complex"}
{"title":"Do I need to buy a portable ac?"}
{"title":"Looking for help to find DIY music/art spaces/collectives in LA"}
{"title":"LOST DOG IN SYLMAR: Pomeranian, Light Brown with Gray in fur, Answers to Copper"}
{"title":"The r/losangeles Howl at the moon takeover again, V. 3.0!First two drinks are $1 and $3.75 drinks after that."}
{"title":"Plane Strawberry Moon behind LA City Hall"}
{"title":"Strategically placed above the 405 in culver city"}
{"title":"Palms graffiti"}
{"title":"TIL that while the Museum of Contemporary Art was being built in 1980s Los Angeles, they had an interim museum in a warehouse they called the \"Temporary Contemporary.\""}
{"title":"Lagunitas w/ a view of U2!"}
{"title":"What do you do around 10-11pm when you suddenly get bored?"}
{"title":"Sufjam Stevens @ the Dorothy Chandler"}
{"title":"Help me pick destinations for a scavenger hunt in the Culver City/Venice/Westchester area."}
{"title":"Best Soccer Bars?"}
{"title":"What drought? Some Southland cities increase water use"}
{"title":"Why don't we use supertankers to move water to Los Angeles?"}
{"title":"Police Activity in Alleyway Off Sunset Between Gardner and Sierra Bonita"}
{"title":"World on Course for Warmest Year Since Records Began - 2014"}
{"title":"OccupyLA and Richard Eastman at Pershing Square Protesting Ferguson Outcome"}
{"title":"Last night when i was roaming in dtla...."}
{"title":"I went to the observatory today. I am surprised more people don't go up there after it rains. The clouds looked beautiful."}
{"title":"I went to the observatory today. I am surprised more people don't go up there after it rains. The clouds looked beautiful."}
{"title":"LA Times Hero Complex Free Screening of the Hobbit in New York"}
{"title":"Off the bluffs of PV"}
{"title":"Photos: Griffith Park's Mountain Lion Is Looking Majestic Once Again After Being Sickly"}
{"title":"Gourmet Taco Spot Project Taco Opens in LA"}
{"title":"Anyone used these appliance guys before? Are they legit?"}
{"title":"Soulful performance by LA's lovely \"Irene Diaz\" tonight (dec 4) @ Holy Grounds Coffee &amp; Tea in Alhambra (she goes on @ 7:15)"}
{"title":"Best yoga studio or class in San Fernando Valley?? Craving a challenging class to improve outside of my gym membership! All suggestions welcome."}
{"title":"Shot some during / post-rain photos"}
{"title":"Did any snow fall in Angeles National Forest?"}
{"title":"December Los Angeles Film Industry Events"}
{"title":"Free Parking! Looking for Someone with a RV/Camper/Trailer"}
{"title":"[For Sale]MLS Championship Tickets- LA Galaxy vs. NE Revolution"}
{"title":"Other than Craigslist, what sites/methods do you guys use when looking for good apartments in Los Angeles?"}
{"title":"Police just released this, there's a vicious attacker and he has already struck 4 times in Koreatown, LA."}
{"title":"Secret Foo Fighters show this saturday????"}
{"title":"Pasadena uses racial slur on parking ticket paperwork."}
{"title":"TIL that more than 30 countries have their second largest population in Los Angeles"}
{"title":"Where Working Women Are Most Common"}
{"title":"Los Angeles limo service"}
{"title":"Los Angeles police just bought Tasers that activate body cameras if used"}
{"title":"If you are from the San Gabriel Valley communities of El Monte or South El Monte or thereabouts worth checking out this oral history project!"}
{"title":"Los Angeles daily discussion thread 01/07/15"}
{"title":"Long term car rental"}
{"title":"Bar Lubitsch - West Hollywood - Los Angeles, CA"}
{"title":"\u2018Good Samaritan\u2019 Fatally Stabbed in Koreatown After Intervening in Dispute"}
{"title":"Maps that takes rush hour traffic into account?"}
{"title":"\\#hitraffic &gt; \\#latraffic. stay salty my friends."}
{"title":"Los Angeles daily discussion thread 04/01/15"}
{"title":"What are some of the larger Honda automotive dealerships in Los Angeles?"}
{"title":"Heading to Santa Monica and possibly Venice beach tomorrow, need some suggestions!"}
{"title":"L.A. Votes to Move Santa Monica \u201cCloser\u201d"}
{"title":"North Hollywood's Laurel Plaza Being Redeveloped w/Apartments, Office Space, Retail"}
{"title":"North Hollywood's Laurel Plaza Being Redeveloped w/Apartments, Office Space, Retail"}
{"title":"North Hollywood's Laurel Plaza Being Redeveloped w/Apartments, Offices, Retail [My Website]"}
{"title":"Sears at Boyle heights, is it closing down?"}
{"title":"Major protests going on in DTLA today"}
{"title":"A Beautiful Day for Reception"}
{"title":"Refueling Disneyland\u2019s nuclear submarines"}
{"title":"Competent mechanic for inspection in Eagle Rock?"}
{"title":"Never taken an uber. Am i able to be dropped off at LAX, using an uber? Coming from Mar Vista. Also I'll just pay someone if they want to take me at 12:30ish. Thanks!"}
{"title":"Live Young, SoCal! We Are SoCal's Best Source For Anti-Aging!"}
{"title":"Weekly What To Do: Kanto Happening"}
{"title":"Blue Bus announces new regional service from Santa Monica Airport!"}
{"title":"New LA Study Says You Would've Been Late Even Without the Traffic"}
{"title":"My slo mo video of William Pope.L: Trinket exhibit at MOCA"}
{"title":"El Cid short film festival tonight, if you like Batman, dick jokes &amp; sketch comedy? Check out the premiere of our Funny Or Die sketch \"Gay Batman Forever.\" (The final insult, part 3 of 3)"}
{"title":"Best Dollar Book stores in LA for kids?"}
{"title":"Yelp review inside joke?"}
{"title":"Best Boba Tea Houses"}
{"title":"Gov. Brown orders first ever statewide mandatory water restrictions."}
{"title":"They got me!"}
{"title":"Emergency \"Where should I live\" post."}
{"title":"California Imposes First-Ever Water Restrictions to Deal With Drought"}
{"title":"Los Angeles To Siphon Water From Minorities' Bodies [Satire]"}
{"title":"The Pizza And Drug-Loving Man Who Put Up Flyers Looking For Friends"}
{"title":"Are they screening THE ROOM anywhere anymore?"}
{"title":"My Catalina ferry yielded to a pod of dolphins"}
{"title":"Every kid's dream bus."}
{"title":"California Withholding Tax Refunds Due in 2015 Until 2016 - Anyone have reliable information on this?"}
{"title":"You can view the Top 500 Delinquent Taxpayers (Personal &amp; Corporate) in California via the Franchise Tax Board Website | ftb.ca.gov"}
{"title":"Bobcat in Griffith Park [photo]"}
{"title":"[My Comedy Show] Riff Cypher mixes stand up and hip hop sound drops! Only 5 bucks! 7pm tonight!"}
{"title":"The Wilshire Grand is Financing a Pedestrian Friendly Makeover of 7th St. In DTLA."}
{"title":"LAPD Officer Arrested at US-Mexico Border With Person in Trunk"}
{"title":"My girlfriend's birthday is in a month. What are some nice restaurants where I could make a reservation?"}
{"title":"LAPD Chief To Testify In Racial Discrimination Lawsuit Filed By Latino Officers"}
{"title":"How long do people stay in Los Angeles before they relocate (and where do they go)?"}
{"title":"Only in LA: Lost dog with custom dye job."}
{"title":"Search Continues For 4 Venice High School Students In Alleged Sexual Assaults: Authorities continued to search Monday for four Venice High School students accused of committing alleged sexual assault with two minors."}
{"title":"Universal's expansion plan will close the Barham Blvd. exit. Sign the petition to keep it open!"}
{"title":"USOC names Boston as its representative for 2024 Olympic bid | Fourth-Place Medal"}
{"title":"looking for some 420 near west hollywood"}
{"title":"Hendrick's Gin Emporium of the Unusual gin tasting event [Nov 19-20]"}
{"title":"Expansion of light rail will transform LA's way of doing business, tech culture and appeal"}
{"title":"[My Film] Our film premiere this Thursday in Hollywood. Red carpet, open bar, Q&amp;A."}
{"title":"HBO Tv looking for next intern in Los Angeles"}
{"title":"17 year old son visiting for the first time. What are some good teen-friendly activities?"}
{"title":"hollywood"}
{"title":"When will the EXPO LINE be finished and begin operating fully?"}
{"title":"Nightcrawler is a great addition to Los Angeles film library"}
{"title":"People keep partially blocking our driveway, what to do?"}
{"title":"LA Voters, confused on ballot measures? Check out these short, decently unbiased videos!"}
{"title":"California state senator sentenced to 90 days in prison serves about an hour"}
{"title":"California ERections 2014"}
{"title":"Can you identify this guy for me?"}
{"title":"Violent crime up 9 percent from last year"}
{"title":"Baby Hippo born at the LA Zoo."}
{"title":"Any good places for Bratwurst on the East Side?"}
{"title":"Which romantic restaurant should I take my wife? (west LA)"}
{"title":"Opinions on snow on Big Bear and Snow Summit last year?"}
{"title":"LA Weekly Sips &amp; Sweets is almost here."}
{"title":"Restaurants in Burbank..."}
{"title":"Of Course There's An App For Getting Medical Marijuana Delivered To Your Doorstep In L.A."}
{"title":"Any LA metalheads wanna come out to a show at The Complex in Glendale tonight?"}
{"title":"Residents of upscale Los Angeles neighborhoods pissed at Waze. They're fighting back in the most passive-aggressive way possible."}
{"title":"Strange(r) happenings at Venice Beach remember this?"}
{"title":"Yep. I'm back home."}
{"title":"Rotten-egg smell to tap water"}
{"title":"Time Warner Cable down for anyone else?"}
{"title":"L.A. panel rejects choice of Live Nation to run Greek Theatre"}
{"title":"How long to get from Santa Monica to Pomona in the morning?"}
{"title":"Lines rolling into Manhattan Beach"}
{"title":"Full Day in LA Anniversary itinerary, help?"}
{"title":"How to Uber from LAX"}
{"title":"Northeast blizzard causes nearly 100 flight cancellations at LAX"}
{"title":"Audio walk: How gambling built the Sunset Strip [My Company]"}
{"title":"Humans of Los Angeles"}
{"title":"Anyone want to go to Honolulu this weekend?"}
{"title":"Wildlife Waystation in the SFV will be reopening."}
{"title":"What do you guys consider to be \"middle class\" in LA metro?"}
{"title":"Los Angeles daily discussion thread 01/27/15"}
{"title":"My favorite things to do on the weekends in Los Angeles"}
{"title":"Wildlife Waystation in SFV will be reopening to the public."}
{"title":"(X-post TIL) You can do your California Taxes for free"}
{"title":"When you guys set-up your electricity with LADWP, did you guys give your SSN or did you opt out?"}
{"title":"Artist Ed Ruscha hid a fake rock in the desert outside L.A. in the 1970s."}
{"title":"Coachella 2015: Localchella brings Interpol, Kimbra and more to L.A. area between festival weekends"}
{"title":"Just Dropped Off A VIP Customer At The Airport :) What An Awesome Shot From Our Driver!!"}
{"title":"Neighbors dog has been crying..."}
{"title":"What LA would look like if all the world's polar ice melted [1210x907]"}
{"title":"Villaraigosa says he won\u2019t run for Boxer\u2019s Senate seat: Former Los Angeles Mayor Antonio Villaraigosa, long viewed as a likely candidate for Sen. Barbara Boxer\u2019s U.S. Senate seat, announced Tuesday that he won\u2019t run, leaving Kamala Harris as the only major candidate so far."}
{"title":"Best crab cakes in LA = ?"}
{"title":"Los Angeles Residents Divided Over Proposed $15 Minimum Wage"}
{"title":"Video of Cars Running the Red at Venice and Robertson"}
{"title":"Yo car chase on channel 2, started with one car, carjacked another."}
{"title":"Car shopping in LA"}
{"title":"Where do I wakeboard?"}
{"title":"One one willing to make 10$ and breakfast @rosmead?"}
{"title":"Logo for LA's Failed 2024 Olympics Bid"}
{"title":"\u201cI\u2019m done\u201d \u2013 Long-time Echo Park shoe store owner moves on after rents rise"}
{"title":"Los Angeles daily discussion thread 06/11/15"}
{"title":"Prime Century City land is put up for sale - likely to be developed as condo towers"}
{"title":"High-speed rail brings fears of gutted communities, noise"}
{"title":"I'm quitting my job to build this app and I hear LA is great for music. tkt.ninja - Free tickets to awesome concerts."}
{"title":"Does anyone know a good place to buy an economic car stereo?"}
{"title":"LA Toll road fees are an unjust tax - continuation of the war against the middle class and class warfare"}
{"title":"Melrose Ave. still a good place for teens?"}
{"title":"Get a Krusty Burger at universal studios Hollywood!"}
{"title":"QUESTION : What holds the title for the most active and dangerous on-off ramp in Los Angeles?"}
{"title":"Going to the Forum Friday for the first time. Where should I eat and hang out before the concert?"}
{"title":"Tree Identification Spring St. DTLA"}
{"title":"LA's New Simple, Readable Parking Signs Going Up in Downtown"}
{"title":"Are there any charming little towns surrounding the LA area that would be nice to live in?"}
{"title":"2015 Eat | See | Hear Outdoor Movie Schedule"}
{"title":"Renting small space for party"}
{"title":"Is \"FasTrak\" an American country? They are the company that makes the tracking chips for the pay toll lanes in LA. (lexus lanes)"}
{"title":"Free Nutella anyone? In Sherman Oaks."}
{"title":"Is \"FasTrak\" an American company? They are the company that makes the tracking chips for the pay toll lanes in LA. (lexus lanes)"}
{"title":"[SERIOUS] CLIMBERS NEEEDED - Stray Cat Stuck in Tree!!"}
{"title":"Hey Film r/LA people! Come shoot something cool in my studio for free!"}
{"title":"Racist sexist LAFD's latest recruits are primarily white and overwhelmingly male"}
{"title":"L E U P P on Instagram: \u201cJustice\u201d"}
{"title":"What are your favorite buildings in Los Angeles?"}
{"title":"Hollywood Actor goes to Iraq to fight ISIS."}
{"title":"Why do YOU not go to the meetups?"}
{"title":"This Sunday in Chatsworth, the West End Art Walk is back with art, music, food, and a beer garden! It runs from 10am to 5pm"}
{"title":"TIL that back in the early 1900's, bird poo once caused short circuits on power lines every few days, inconveniencing consumers and threatening to damage expensive equipment."}
{"title":"Music &amp; Comedy Festival to support our Veterans living with Post-Traumatic Stress"}
{"title":"Vice News covers the growing sea lion die-off off the coast of CA."}
{"title":"Bike theft"}
{"title":"Moving to LA, looking for an apartment and advice"}
{"title":"Baseball game this weekend?"}
{"title":"Looking for some new people to hang out with"}
{"title":"Rap Song About Dating in LA"}
{"title":"We just made an app to help strengthen community in Los Angeles."}
{"title":"LAPD motorcycle officer struck by vehicle. (Vernon Ave. and Denker ave.)"}
{"title":"Does anyone have a Westside Rentals account I can pay to share or does anyone want to split one?"}
{"title":"Man in Custody in Connection With Killings of His Wife, Infant Son in South L.A. Area, Authorities Say"}
{"title":"who are the acts i have to see at make music pasadena 2015? any protips from past goers?"}
{"title":"Secret Kickstarter Campaign for WHYS LA: Help my fianc\u00e9 follow her dreams Shhhhh."}
{"title":"Hi /r/LosAngeles! For National Donut Day I present to you: LEGO Mosaics of Randy's Donuts and four other LA landmarks!"}
{"title":"Classic 1980s KLSX commercial featuring Kurt Rambis and Lyle Alzado (x-post r/ObscureMedia)"}
{"title":"Report: FBI flying mysterious surveillance planes over Seattle, other US cities (LA included)"}
{"title":"Remember that scary kidnapping attempt in Palos Verdes last week?"}
{"title":"The progress at the Petersen Auto museum"}
{"title":"LA Times makes no mention of dangerous number of tar balls on Venice beach"}
{"title":"How to find an apartment in LA area?"}
{"title":"That kidnapping attempt in Palos Verdes? Fake."}
{"title":"Frank Lloyd Wright's Hollyhock House To Reopen"}
{"title":"Suge Knight Reviews Tam's Burgers in Compton on Yelp (x-post r/hiphopheads)"}
{"title":"Sunset time!"}
{"title":"Interesting clouds after the storm in the valley!"}
{"title":"How does everyone feel about DUI checkpoints being posted here?"}
{"title":"Anyone wanna join a Saturday Soccer Team?"}
{"title":"Megan Ellison Saves Santa Monica's Vidiots From Closure"}
{"title":"Lost dog in Glendale"}
{"title":"Why Does LA Have a Mall Based on the Babylon Set From the 1916 Film Intolerance?"}
{"title":"Poll: LA County Voters In Favor Of Raising Minimum Wage To $15.25"}
{"title":"What are you tired of seeing other LA drivers do?"}
{"title":"There's Actually a Legitimate Reason Why L.A.'s Skyline Is So Ugly"}
{"title":"Transit users: Citymapper app is now available in LA"}
{"title":"\"Fake-out? Vidiots might stay open\""}
{"title":"Sigourney Weaver eats a hotdog outside the Tail &amp; Pup in Los Angeles, date unknown [2400x1694]"}
{"title":"Atomic Cafe in Little Tokyo was a hangout for punks and weirdos...and the yakuza"}
{"title":"10 &amp; 110 freeway from the air"}
{"title":"Los Angeles T-Shirt Design Limited Edition"}
{"title":"How Los Angeles is Ghettoizing Affordable Housing and Creating Gentrification"}
{"title":"What is the BEST weekend spot within a couple hours drive of LA?"}
{"title":"The Six Possible Plans For a Los Angeles NFL Stadium"}
{"title":"What's the cheapest ISP in Korea town?"}
{"title":"McDonald's to offer free food to customers who 'Pay with Lovin'"}
{"title":"Downtown as seen from the 110 freeway"}
{"title":"Anthony Samaniego captures an ethereal Los Angeles"}
{"title":"Our building is famous for having lots of graffiti. I've seen some crazy stuff, but I think this takes the cake."}
{"title":"Rare Items From Disneyland's Early Years to be Auctioned Off"}
{"title":"Why Los Angeles is the Favorite City of Film Location Scouts"}
{"title":"In a homeless district, growing numbers raise tensions"}
{"title":"Los Angeles daily discussion thread 06/01/15"}
{"title":"I have horrible neighbors who play loud ranchera music for 7-8 hours nearly every Sunday and they won't stop"}
{"title":"The Age of Every Building in Los Angeles, Mapped"}
{"title":"Aftermath of the SUV that got stuck underneath freeway overpass in Boyle Heights (NSFW)"}
{"title":"SUV Crushed Under SoCal Freeway Ramp, Driver Killed"}
{"title":"Super beautiful video reminds me of why I LOVE Los Angeles all over again."}
{"title":"I just saw someone jump off the 9000 building in West Hollywood on Sunset."}
{"title":"Looks like Lyft is just throwing random numbers now. So what is it actually? (3 image album)"}
{"title":"Venue Tradeshow Los Angeles"}
{"title":"New 6th Street Viaduct is a bridge to a different future"}
{"title":"Metro partnering with Zipcar to bring rentals at ten Metro/BRT Stations"}
{"title":"40,000 Enjoy Pasadena\u2019s First CicLAvia"}
{"title":"L.A. Mission selling low-income apartment building; residents must move"}
{"title":"Neighborhood Councils Propose New Silver Lake \u2013 Los Feliz DASH Route"}
{"title":"Griffith Park is Ramping Up Their Water Conservation Measures"}
{"title":"Totally Awesome Things To Do In LA - 6/1-6/7"}
{"title":"Highland Park possible kidnap victim sought by LAPD"}
{"title":"Why haven't the Chargers moved to Los Angeles?"}
{"title":"No more non-digital TV for TWC?"}
{"title":"Exploring the abandoned Los Angeles Subway *new pics* [OC]"}
{"title":"Exploring the abandoned Los Angeles Subway *new pics* [OC]"}
{"title":"Yo LA! My band is in town for atlanta for a week recording. But we got time off now. What do we do?!"}
{"title":"Pasadena's Cheese Burger week 2015 is upon us. Lots of deals and special burgers at Pasadena Restaurants."}
{"title":"St. Louis Rams Fans React To Riverfront Stadium Proposal | Alt title: NFL stadium tactic has St. Louis opening their wallets."}
{"title":"[event 1/17] \"Charles Bukowski's Los Angeles\" bus tour"}
{"title":"What off-beat newspapers, magazines, and blogs are there representing Los Angeles?"}
{"title":"Looking to adopt puppy...help!!"}
{"title":"How to Merge"}
{"title":"How many of you moved to LA in hopes of \"making it big\"?"}
{"title":"Out-of-towner has questions regarding LAX and stuff"}
{"title":"Does anybody on here know here the Nuclear Escape Tunnels are located in La County?"}
{"title":"Rainbow in Sunken City, San Pedro after today's rainfall"}
{"title":"What to do for a 20 yr old into indie and hip hop on a wed/thurs"}
{"title":"WHAT THE FUCK IS ALL THE NOISE COMING FROM THE LAX?"}
{"title":"Forrest Service looking for people to count bald eagles"}
{"title":"[Request] My dad has cancer &amp; he needs a car to get to radiation appointments"}
{"title":"Pssst! Anybody know where I can score some Cholula bread?"}
{"title":"Hello LA, I'm coming for a visit in a few weeks. Please check out my tourist-heavy schedule and let me know what you think."}
{"title":"SixFlagsMagicMountain! Tickets? Flash?"}
{"title":"Los Angeles Daily Discussion Thread 1/12/15"}
{"title":"Audreys Hot Dog Stand, Los Angeles, 1961 by William Claxton."}
{"title":"LA Zoo Lights (Nov 28 - Jan 4)"}
{"title":"/r/LosAngeles, what's a good local LA delicacy that can be mailed to family/friends in another city/state?"}
{"title":"Hey Guys - Free Uber in LA this week/weekend!"}
{"title":"Street Saxophonist \"Captain Kirk\" Serenades Pershing Square DTLA"}
{"title":"Man attacked in Griffith Park was a transient, attacked by another transient."}
{"title":"Hello Kitty turned 40 years old this weekend. L.A. artists celebrate her influence with a new exhibition at the Japanese American National Museum"}
{"title":"Thanksgiving in L.A."}
{"title":"Hello Kitty turned 40 years old this weekend. A new art exhibition celebrates her influence."}
{"title":"Affordable dentist for someone with no insurance? Preferably in the valley"}
{"title":"How Sriracha is Made [x-post /r/Mechanical_Gifs]"}
{"title":"Lucky Boy in Pasadena (Breakfast Burrito)"}
{"title":"Los Angeles daily random discussion thread 11/05/14"}
{"title":"Five Reasons Why I'm Excited It's November"}
{"title":"Los Angeles: here's your election results!"}
{"title":"Why do L.A. neighbors immediately resort to threats and calling the police instead of communicating like respectable adults?"}
{"title":"What's Killing Us, LA? Here's the 2011 Mortality Report."}
{"title":"Has anyone visited the Grammy Museum? Is it cool? Worth going?"}
{"title":"Best pho in Los Angeles?"}
{"title":"anyone going to the Bad Religion show at The Mayan this Sunday? My band 'BABY BABY' from ATL is opening for them! hopefully you can make it out early!"}
{"title":"Every proposition was decided by which side spent more on advertising. Was this a coincidence or were the propositions naturally favored/opposed?"}
{"title":"Free flu shots and yoga class this Sat 11/8"}
{"title":"USC vs UCLA Dental Clinic for cheap dental care"}
{"title":"Where can I find bacon-wrapped tofu hot dogs?"}
{"title":"Anyone been to Game Night at Grand Central Market?"}
{"title":"A short documentary on oil in Los Angeles during the 20th century"}
{"title":"That sunset though!"}
{"title":"Time lapse of tonight's sunset from Palisades Park in Santa Monica"}
{"title":"Pomona after the recent rainfall"}
{"title":"Are there any self help/low self esteem-type support groups in LA?"}
{"title":"Anyone know where to look for local metalcore shows in LA?"}
{"title":"Looking for 3+ bedroom house/apartment for rent near Palisades Charter High School."}
{"title":"Need short term foster care for puppy"}
{"title":"The skies over Fry's"}
{"title":"My father (new to LA) got a parking citation because he thought meters here didn't accept nickels and dimes, and left his car to get change."}
{"title":"Snow in L.A.: Not the SoCal I signed up for"}
{"title":"The Red Hot Chili Peppers' Bridge Is Not Where You Think It Is: An Investigation"}
{"title":"Please link today's and yesterday's sunset pictures!"}
{"title":"If you're passing through the Lancaster area and have a few bucks to spare, there's an exotic cat preserve in Rosamond with half a dozen species on display."}
{"title":"Hero Sheriff Prevents Suicide"}
{"title":"I'm glad I wasn't the only one to appreciate the pretty colors this evening"}
{"title":"The Creation of LA's 'Most Recognizable and Beloved' Building"}
{"title":"Cool time lapse of Los Angeles traffic at night"}
{"title":"Los Angeles daily discussion thread 12/22/14"}
{"title":"With the darkest day of the year now behind us, I thought it would be interesting to plot LA's sunrise and sunset times throughout the year"}
{"title":"L.A. Times: LA has long been told to clean up its act"}
{"title":"Hit and Run advice"}
{"title":"More drinking and driving during holidays means DUI checkpoints. Find out how to avoid incriminating yourself this holiday season by visiting the Los Angeles DUI Center."}
{"title":"Jumping on the sunset bandwagon, here's mine from Van Nuys Airport"}
{"title":"Man Checking on a Car Doing Donuts Outside His Home Is Murdered, LAPD Says"}
{"title":"Oh no!"}
{"title":"A few questions regarding metro and housing"}
{"title":"LAFD: Did You Receive a Mylar Balloon for Valentine's Day?"}
{"title":"[Meet-up] Anyone (esp. on the Westside) interested in getting into board games?"}
{"title":"How Tsem Tulku Ruined My Future"}
{"title":"Pehrspace at risk of shutting down. Needs Help w/ Monies."}
{"title":"Any good and quick Animal Crematory around?"}
{"title":"Anyone else having crazy allergies right now?"}
{"title":"Anyone on the 110 in the last hour near DTLA?"}
{"title":"Was it just me or were the cops particularly aggressive tonight?"}
{"title":"Hollywood's Biggest Stars Fight to Keep Mega Mansions Video"}
{"title":"Anyone know what the construction is on Venice Blvd between Sepulveda &amp; Overland?"}
{"title":"What can I do in LA, (20,m) by myself?"}
{"title":"The new battle of Los Angeles: Stop trying to make \u201cthe next Brooklyn\u201d happen"}
{"title":"[Meet-up]$20 Texas Hold'em home poker game on Sunday 5/24 at 4:30pm, new players welcome :)"}
{"title":"Rental Car or Mass Transit/Uber?"}
{"title":"Los Angeles daily discussion thread 05/05/15"}
{"title":"Hollywood: Car crashed into storefront at Sunset and Gardner"}
{"title":"Can I file a noise complaint for construction beginning earlier than scheduled?"}
{"title":"L.A. sues Wells Fargo for sticking customers with bogus fees and opening unauthorized accounts"}
{"title":"Palmdale gas station gives lottery \"winner\" $75 instead of $75,000. Winner is actually undercover investigator."}
{"title":"[WANTED] Drummer for an indie pop band"}
{"title":"Sprint Coverage these days"}
{"title":"Update on Gigi (The stray Jindo)"}
{"title":"First Gay Kiss on Kiss Cam at Dodgers Stadium! @28 seconds"}
{"title":"Short term housing options..please help!"}
{"title":"Entrepreneur's of LA - Seeking Business Developer"}
{"title":"Cop Faces Insurance Fraud Charges Thanks to Ice Bucket Challenge"}
{"title":"An Ode To Los Angeles"}
{"title":"At LA Museum, A Powerful And Provocative Look At 'Islamic Art Now' : NPR"}
{"title":"Restaurant suggestions for Mother's Day"}
{"title":"Looking for plus one to booze and bacon festival"}
{"title":"Los Angeles Might Finally Do Something About e a dumbest Jaywalking Tickets"}
{"title":"Making A Case For The Skid Row Neighborhood Council Hosted By General Jeff"}
{"title":"Metro releases budget for 2015-16 fiscal year; no fare hikes or service cuts planned"}
{"title":"Someone really misses their dog."}
{"title":"regarding all the LA/NYC \"next brooklyn\" nonsense"}
{"title":"Ok LA-ers. I've never been to court and it's my first time. Why are there so many fees added onto a $50 ticket that morphs into a $200+ ticket?"}
{"title":"Santa Clarita Rallies To Dump HSR Tracks Onto Someone Else"}
{"title":"I love it when I see these flock of Canadian Geese flies over my Encino neighborhood every sunset."}
{"title":"Tarzana Red Light Camera, do I have to pay for the ticket?"}
{"title":"Power is out"}
{"title":"Hello, does anyone have advice for a 16 year old on how to get a job?"}
{"title":"Want to watch The Interview on Thursday, and laugh in the face of danger? There are places showing it in LA!"}
{"title":"Ride SF&lt;-&gt;LA, 2/16-2/18"}
{"title":"Web Design Los Angeles California Web Design Los Angeles"}
{"title":"[HELP!] Planning to travel day after Christmas."}
{"title":"LAPD Launches Investigation Over Michael Brown Parody Song"}
{"title":"Things to do on Christmas day"}
{"title":"Lakers stun league-leading Golden State Warriors 115-105 without Kobe"}
{"title":"Dog saved and found on Bohlig road after being attacked by coyote. Help me find his owners!"}
{"title":"Any of you expats not going \"home\" for the holidays, what are you doing instead ?"}
{"title":"Tunnels under City Hall and other government buildings."}
{"title":"Here's a Google Map of Where You Can See 'The Interview' On Christmas Day in Los Angeles [MY BLOG]"}
{"title":"Roger Goodell tells teams no NFL in Los Angeles in 2015"}
{"title":"A Christmas Eve Miracle"}
{"title":"Los Angeles daily discussion thread 12/24/14"}
{"title":"The Best Cities for Electric Vehicles in the United States"}
{"title":"Help me find monsters in Los Angeles"}
{"title":"Soundtrack for your holiday: VULFPECK - Christmas in L.A."}
{"title":"Weekly What To Do: Jews, Time to Own The Streets [My site]"}
{"title":"San Pedro Tannenbaum (xpost r/TheSouthBay)"}
{"title":"What to do in LA?"}
{"title":"Staying home in LA for the holidays"}
{"title":"Westlake, you're doing the most"}
{"title":"Downtown Los Angeles after our recent rain"}
{"title":"Goose Island Bourbon County stout sighting..."}
{"title":"I'm stuck at work on Christmas Eve but at least I got a visitor!"}
{"title":"Any bars open on Christmas Day?"}
{"title":"For the love of humanity, please don't let this tiny hapa spend X-Mas alone."}
{"title":"Sidewalks.."}
{"title":"Brick and mortar holiday shoppers, what store is the absolute worst shopping experience for you?"}
{"title":"CALL TO ACTION: Come and march in the fight against police brutality and injustice this Saturday."}
{"title":"Convicted rapist found hiding under mattress in Palmdale after cutting off GPS monitor"}
{"title":"My friends and I had these taken at the Sears Portrait Studio in Santa Monica... My apologies in advance!"}
{"title":"My friends and I had these holiday photos taken at the Sears Portrait Studio in Santa Monica... My apologies in advance!"}
{"title":"Helpppp! Last minute gift ideas?"}
{"title":"Christmas Eve sunset in Los Angeles"}
{"title":"Save me from the sad on Christmas Eve or Christmas Day."}
{"title":"would anyone know of a good spot to take good pictures?"}
{"title":"You May Be Entitled to Unclaimed Money From the State of California http://www.mollaeilaw.com/blog/2015/2/24/you-may-be-entitled-to-unclaimed-money-from-the-state-of-california [My Blog]"}
{"title":"It's there any beach I can realistically bring my dog to around L.A.?"}
{"title":"Gimme a good place to eat in San Pedro."}
{"title":"Metro from Santa Monica to Staples?"}
{"title":"Starving Sea Lions Washing Ashore by the Hundreds in California"}
{"title":"South High School Lip Dub 2015 - Uptown Funk"}
{"title":"[OC] Can you beat Flea or Gordon Ramsay in the L.A. Marathon? Or a Metro bus?"}
{"title":"What tips do you have for dealing with LA traffic?"}
{"title":"[Meet-up] Moving to L.A.-Seeking like minded individuals."}
{"title":"Does anyone know where I can find people selling Mag 250. This is for IPTV services in Los Angeles"}
{"title":"Where is the best places to look into for frugal gardening?"}
{"title":"Recent pics from Antelope Valley Poppy Reserve (March 7)"}
{"title":"Afterhours Spots?"}
{"title":"9 Venice HS Students Arrested For Alleged Sexual Assault"}
{"title":"Keep your sunset pictures, this is the view from my office. They're picking up some helicopters that belong to this guy named Barry."}
{"title":"A photo at the Greystone Mansion in Beverly Hills"}
{"title":"Real bummer to hear of the passing of Joe McDonnell. A true LA radio legend."}
{"title":"Any good places around LA to go and feed ducks?"}
{"title":"Police Get Into Shootout With Domestic Violence Suspect In South LA Following Chase"}
{"title":"Lost puppy westwood near veteran park"}
{"title":"Police Shootout With Suspect In South LA Following Chase"}
{"title":"Don't ever take your kids to Skyzone. My leg landed in between 2 trampolines and snapped in half. I had to get a surgery for a metal rod in it. On crutches for 4 months. Fuck the Skyzone in Van nuys"}
{"title":"14 boys accused of sex crimes at Venice High; police find photos of sex acts"}
{"title":"Beyond Wonderland Socal camping"}
{"title":"Looking for an apartment in the South Eastern SFV, any tips, hints, or inside information?"}
{"title":"Screw your sunset AND your office. Here's the sunset from my office."}
{"title":"Looking for any one in the Staging/Lighting/Grip/Production type business - I need a piece of truss!"}
{"title":"Why are there lights pointed in the sky all over tonight?"}
{"title":"What the hell are those lights surrounding the west side?"}
{"title":"Start of the weekend at Santa Monica pier"}
{"title":"Where are the pics of the marathon lights?"}
{"title":"New Yorkers of LA, did you experience a culture shock when you came here? What was it like?"}
{"title":"First Look at the 33-Story Grand Central Market Tower"}
{"title":"LA marathon mile marker spotlights"}
{"title":"Currently from my backyard: LA Marathon course marked by spotlights"}
{"title":"LA marathon mile marker spotlights for 30th anniversary"}
{"title":"Florida Gov. Rick Scott to visit Los Angeles, wants port cargo business [ x-post /r/Longshoremen ]"}
{"title":"Just another day in paradise..."}
{"title":"Lights Tonight"}
{"title":"Marathon spotlight markers from Mt. Hollywood"}
{"title":"The story behind the LAX airport code..."}
{"title":"im looking for love anyone interested to get to know me here is my number...9739100573"}
{"title":"Anyone heard that loud boom?"}
{"title":"travelling to LA next week"}
{"title":"What can you do in Los Angeles!!"}
{"title":"Bill and Camille Cosby arriving for the Emmy Awards in Los Angeles on September 12, 1965."}
{"title":"[help_us_la_redditors_youre_our_only_hope_reddit] huh"}
{"title":"[rddo] huh"}
{"title":"Best place to find month to month, furnished housing?"}
{"title":"Dog Rescued by LAFD from Rain Swollen Los Angeles River Gets a New Home"}
{"title":"HELP finding Abducted Toy Poodle in Studio City Area"}
{"title":"This is The City | A podcast about the Politics, Art and Culture of Los Angeles"}
{"title":"What are some good hiking spots in LA for someone with limited mobility / knee issues?"}
{"title":"The visibility in today's early morning fog was certifiably ZERO. Stay safe commuters!"}
{"title":"Verizon has sold all California, Florida, and Texas residential business to Frontier effective 2016 (x-post from /r/Dallas)"}
{"title":"Big party at the old Capitol Records pressing plant in NELA tomorrow night featuring Mars and The Massacre, Intergalactix, Seasons, The Most Best and more great bands"}
{"title":"/r/losangeles discusses: Best spots for nightlife."}
{"title":"Meeting Cows?"}
{"title":"Westside tenant triumphs over landlord in landmark eviction court case - westsidetoday.com"}
{"title":"Anyone here play Dungeons and Dragons, or interested in learning? Join my campaign!"}
{"title":"Hey LA, What's your favorite coffee creamer?"}
{"title":"Investigation Palihouse: Santa Monica neighbors up in arms - Santa Monica Mirror"}
{"title":"Found Ring in Downtown LA (Figueroa + 9th)"}
{"title":"A Look at Charles Cohen's Plans for the MTA Lot in West Hollywood"}
{"title":"Here's a Lyft code to get credit for your first ride."}
{"title":"ELEVATED Clothing an up and coming Los Angeles Streetwear/Action Sports brand. [My Blog]"}
{"title":"Couple robbed and woman sexually assaulted at Manhattan Beach shortly after midnight Sunday"}
{"title":"How hard is it to find a job in Los Angeles?"}
{"title":"Timelapse of Saturday's Bloodmoon setting behind Downtown Los Angeles."}
{"title":"/r/LosAngeles, there was a post a few months back with a hiking trail in Griffith Park... can you help me find it again?"}
{"title":"Honest question: why are Californians being asked to reduce their residential water usage?"}
{"title":"Hey there /r/LA ill be heading over to visit soon! Looking for ideas!"}
{"title":"It's opening day in LA! Come join us over at /r/dodgers for the festivities."}
{"title":"WonderCon moving to Los Angeles in 2016. Projected total economic impact is over $32 million dollars over a 3-day period."}
{"title":"Trash &amp; Illegal Dumping in Toy District"}
{"title":"Goole Doc to aid in found/lost/injured animals. Details in comments"}
{"title":"Everything There is to Know About LA's Parking Sign Revolution"}
{"title":"Totally Awesome Things To Do In LA - 4/6-4/12"}
{"title":"Photos: Expo Line (to Santa Monica) clearance testing begins!"}
{"title":"Spring Is on Hold: Rain &amp; Snow Are Coming!"}
{"title":"Cooked for a group of Asian Females and forgot to put a main ingredient in one of the dishes."}
{"title":"Do people in LA not know which side to walk on?"}
{"title":"Why did fighter jets just fly low and fast over Burbank?"}
{"title":"Western Bells playing a 18+ free show at the mint tonight."}
{"title":"What would be the first steps to moving to LA without a job?"}
{"title":"Op-Ed from Almond grower: \"Why almond growers aren't the water enemy\""}
{"title":"How Do You Like Los Angeles' New Parking Signs?"}
{"title":"Next Monday: Sprinkles Will Hand Out Free Cupcakes On Its 10th Birthday"}
{"title":"Petersen Automotive Museum at Miracle Mile Gets its New Skin"}
{"title":"Mapping 28 Projects on the Way in DTLA's Booming South Park"}
{"title":"Driving to AZ on the 9th do you want to split it?"}
{"title":"affordable living suggestions?"}
{"title":"Man Allegedly Tried To Run Over 2 San Bernardino Police Officers With SUV"}
{"title":"Suspect Rams Into Patrol Car, Injuring La Palma Police Officer Before Waging 30-Mile Chase"}
{"title":"DMV car registration question"}
{"title":"Beneath California Crops, Groundwater Crisis Grows"}
{"title":"This is Goose and he needs a new home!"}
{"title":"Does anyone know of any cool EDM shows or raves in the city in the next couple months?"}
{"title":"Just moved to Valley Village, looking for new friends"}
{"title":"Cool spots near the beach to work (SM/Venice)"}
{"title":"Best Price for gold in LA?"}
{"title":"First time in DTLA"}
{"title":"Saw this on the street by Runyon"}
{"title":"Warmest water in the OC area?"}
{"title":"Upcoming Sunset Boulevard Development Gets New Renderings"}
{"title":"Out for a walk I spotted an ominous indicator of our worsening drought."}
{"title":"This Was L.A. Baseball in the 1880s | LA as Subject | SoCal Focus"}
{"title":"Is there a pizza joint on the west side that knows what \"well done\" means?"}
{"title":"Why I hate election season"}
{"title":"Man guilty of murder in attack on Chinese students"}
{"title":"Fun things to do in LA 10/28- 11/1"}
{"title":"How do political campaigns/candidates get my email? Is there a way to opt-out of them all?"}
{"title":"Good place to read up on the propositions for the upcoming election?"}
{"title":"Sunset from a few days ago. [OC]"}
{"title":"Anyone know where the noodle bar from Blade Runner is in LA?"}
{"title":"Time Warner increasing their internet speeds in LA"}
{"title":"I saw a helicopter today. Why? What was going on?"}
{"title":"Anyone in the valley seeing TWC internet upgrades reflect the advertised speeds? My download speed sure doesn't."}
{"title":"Advice sought from Loyola Law students, grads, and local folk/redditors in the proximate Los Angeles area"}
{"title":"L.A. area has many freeways that stayed on the drawing board"}
{"title":"Halloween horror house in Altadena"}
{"title":"Empress Pavilion Rises From the Ashes in Chinatown"}
{"title":"Anyone going to see Pond at The Echo on Halloween"}
{"title":"Bros. Vs Hipsters, The Battle for Hermosa Beach, California. [x-post r/Frat]"}
{"title":"Los Angeles daily discussion thread 10/29/2014"}
{"title":"If you see sprinkler run off just from inefficient lawn irrigation OR a broken sprinkler head (on a lawn that's not yours), what could you do?"}
{"title":"Which one of you needs directions to the car wash???"}
{"title":"Trip to RISE of the Jack O'Lanterns at Descanso Gardens [My Blog]"}
{"title":"Quest Nutrition job fair today at their headquarters in El Segundo! 5pm-7pm"}
{"title":"These drought signs are all over my neighborhood"}
{"title":"Ice Cream Lab Pasadena Opens Today. Free Ice Cream from 12-3 Today"}
{"title":"Gov. Jerry Brown Pushes Water Bond During SoCal Visit"}
{"title":"L.A. City Council seeks study, delays vote on possible minimum wage hike"}
{"title":"\"This Catchy WeHo PSA Is Full Of Drag Queens, Go-Go Boys And Hair Whipping\" - from LAist"}
{"title":"Cheapest place to buy Pumpkins??"}
{"title":"LA Curbed 2014 Top Five LA Neighborhoods For Trick-Or-Treating."}
{"title":"Los Angeles daily discussion thread. 01/14/15"}
{"title":"I'll be moving to LA in the next few weeks! I'm a bit nervous!"}
{"title":"Can someone please explain the appeal of DineLA?"}
{"title":"Police pursuit ending in Palos Verdes from 2012 [GIF][xpost r/TheSouthBay]"}
{"title":"Los Feliz Sunset"}
{"title":"Elliott Smith Wall + Dinosaur Coffee"}
{"title":"11 New Street Art Murals in Los Angeles"}
{"title":"Starchitect Thom Mayne is Tearing Down Ray Bradbury's Cheviot Hills House Right Now"}
{"title":"The original Taco Bell may be destroyed"}
{"title":"MRW my out of friends want to go a club and I show them the line"}
{"title":"Skylight Books will use a $5,000 grant from author James Patterson to improve its children\u2019s section as the area\u2019s demographics have changed"}
{"title":"WiFi Coming to Downtown Metro Stations in June"}
{"title":"Gender-Neutral Single-Stall Restrooms Now Required in West Hollywood"}
{"title":"So happy this turned out good."}
{"title":"Palos Verdes Estates home-invasion robbers caught on video"}
{"title":"Clerk stabbed and killed during robbery at a doughnut shop at Broadway and Florence Avenue"}
{"title":"The new owners of Norms have applied for a demolition permit to tear down the iconic La Cienega location"}
{"title":"Where should you be living in LA?"}
{"title":"Fantasy-style map of California (OC)"}
{"title":"3 spots left for Tecmo Super Bowl Tournament this Saturday @ 12pm! DM to get in"}
{"title":"Residents express concerns over high-speed rail through Angeles National Forest"}
{"title":"New Mandate Requires LAPD Officers to Record All Stops"}
{"title":"Are there any pics you can think of that make Los Angeles look \"Grand\"? That make you feel small?"}
{"title":"Tried to capture Venice Beach in the style of Wes Anderson"}
{"title":"Anywhere in town that would do color HiRes car window decals?"}
{"title":"A former Echo Park shoe store is being turned into a barcade"}
{"title":"This year\u2019s Dodgers Opening Day to be a game changer for tailgaters and locals"}
{"title":"I'm a college student and I'm on spring break. What is there to do in or near Los Angeles during the day?"}
{"title":"How to Dress like the French in Los Angeles"}
{"title":"Missing Cal student found dead on freeway on-ramp."}
{"title":"UC Berkeley student Eloi Vasquez found dead near USC campus"}
{"title":"lyrically the best rapper crew out of LA of all time."}
{"title":"My daily view at work."}
{"title":"Why is it okay to hate Armenians?"}
{"title":"Best dispensary deals in town?"}
{"title":"Van Halen check-in line is a fustercluck"}
{"title":"Do you like \"Mexican\" Coke?"}
{"title":"Runners of Los Angeles! Here's an amazing 5k for y'all to do!!"}
{"title":"LAUSD teacher convicted of stabbing his wife to death"}
{"title":"Slide Show: A Look Back at the Sportsmen's Lodge Before it is Torn Down for a New Gym"}
{"title":"Huge news: 30 new fly species discovered in Los Angeles."}
{"title":"[West Hollywood] Any idea where to find adult swimming lessons on a grad student's budget??"}
{"title":"Did anyone see that Blackhawk flying down the coast near LA today? 30 Mar"}
{"title":"LA Makes World's Top 10 Worst Cities For Rush Hour Traffic"}
{"title":"First Time Surfer"}
{"title":"College student from the east coast looking forward to come to the west coast for this summer. (Internship/Part Time Job Opportunities)"}
{"title":"Advice on apartmentary moving"}
{"title":"Video of 110 freeway in 1939"}
{"title":"Chilling at the Bigfoot lodge on loz feliz!"}
{"title":"Caught on camera: Woman beaten with skateboard in Venice, CA"}
{"title":"As Laker fans, we should be VERY concerned. Deadspin spells out the doom, and its not good at all."}
{"title":"Bubble Soccer Adventure League. Oh and Human Foosball with Sumo Suits."}
{"title":"As if the 405 doesn't cause enough issues, Hawthorne exit closed for this craziness"}
{"title":"Thinking moving to LA"}
{"title":"Jian Gomeshi (Noted Canadian radio host and subject of 8 sexual abuse accusations) is in LA"}
{"title":"Garcetti: Build 100K new homes in Los Angeles by 2021"}
{"title":"Breaking: Yamashiro's Seven-Acre Hollywood Spread For Sale"}
{"title":"Off-duty LAPD officer arrested for lewd acts."}
{"title":"Is that Jennifer Love Hewitt? What happened to her?"}
{"title":"Our neighborhood is all apartments and condo's with no off street parking..."}
{"title":"This is kinda fun: A map with LA's Vampire, Zombie, and Ghost Danger Zones"}
{"title":"Visiting next week: Startups, Coworking &amp; Interstellar"}
{"title":"Looks like LA is the 2nd best place to trick-or-treat"}
{"title":"Los Angeles daily discussion thread 10/30/14"}
{"title":"Can we just start eating dogs? I heard they taste pretty good"}
{"title":"Evergreen Cemetery: Snapshots of a Forever Changing Boyle Heights | Graveyards of LA | Departures Columns"}
{"title":"Aviation groups give more than $500,000 to save Santa Monica airport"}
{"title":"[Event] CodeDay LA - High school and college hackathon happening on November 8th"}
{"title":"Redditors picks - 10 of the spookiest LA buildings: Who owns them? What's the real estate story behind them?"}
{"title":"Crenshaw and W 182nd in Torrance has an ARCO selling gas at $4.89/gallon today. Can someone explain this price?"}
{"title":"Santa Barbara's Nikka Fish Grill Opening in Pasadena in November"}
{"title":"How exactly would I go fishing at Pyramid Lake? First-timer here."}
{"title":"WTF? They're permanently closing the Barham southbound ramp onto the 101?"}
{"title":"American Cinematheque: The Roger Ebert documentary LIFE ITSELF screens tonight (Oct. 30) at the Aero Theatre in Santa Monica with Chaz Ebert and Director Steve James in person."}
{"title":"West Hollywood Halloween - Parking for Residents"}
{"title":"Satan's Family Arcade at Cinefamily this Halloween"}
{"title":"Mark Ridley-Thomas pushes planned $8-million Culver City arts center"}
{"title":"I giggled. Do you think the metro project underway will help noticeably?"}
{"title":"Would anybody in central L.A. be willing to let me use their address to apply for jobs?"}
{"title":"Ticket Giveaway to the Nottingham Festival Happening Right Now"}
{"title":"Evidence - \"Chase The Clouds Away\" (Uplifting music video filmed in Venice Beach back when it was cool)"}
{"title":"The Affordable Care Act Is Under Attack in California with Prop 46"}
{"title":"Shopping in LA? Which Mall?"}
{"title":"How To Be a Santa This Christmas?"}
{"title":"Eric Garcetti's Mayoral Mansion Uses Five Times as Much Water as Typical L.A. Home"}
{"title":"The Weekend and Weekday List - 11/13-11/19"}
{"title":"Visiting from NY - anyone wanna grab a beer this evening?"}
{"title":"American Cinematheque: 100 Years of Norman Lloyd, Nov. 21 - 23 at the Aero Theatre in Santa Monica. Norman Lloyd in person, 35mm prints of SABOTEUR, A WALK IN THE SUN (Restored) and LIMELIGHT"}
{"title":"Used furniture available in North Hollywood, CA"}
{"title":"Huge science day at UCLA this Sunday: Exploring Your Universe\u2013talks, activities, shows and more!"}
{"title":"Where can one purchase yacon root in LA?"}
{"title":"Enter a Standup Comedy Competition at Westside Comedy Club."}
{"title":"INVESTIGATORS SEEK PUBLIC\u2019S ASSISTANCE IN MISSING CALIFORNIA CASE"}
{"title":"California DMV Expands Office Hours To Accommodate Licenses For Undocumented Immigrants"}
{"title":"In an alarming court case from last November, lawyers representing the Los Angeles Unified School District successfully argued that a 14-year-old girl involved with her 28-year-old teacher consented to having sex."}
{"title":"9 Things Drivers Need to Stop Saying in the Bikes vs. Cars Debate"}
{"title":"Missing Female USC student since 11/13 - please help us locate her"}
{"title":"Can tomorrow come any sooner?"}
{"title":"\"A Club Called Rhonda Is LA's Pansexual Party Palace\" Tomorrow Party People!"}
{"title":"Tonite KCET is airing its vintage footage of Charles Bukowski from the 1970s reading poems, being cranky, and driving around Los Angeles yelling at traffic."}
{"title":"LAPD officer pleads not guilty to faking military forms for paid leave"}
{"title":"Struckout (Long Beach punk/post-hardcore) - You Are Not Good At This (free stream/download)"}
{"title":"Looking for some way to give back on Thanksgiving?"}
{"title":"If you're in Burbank thinking of getting a divorce, you have another option!"}
{"title":"Man Sets Himself On Fire In Van Nuys Starbucks"}
{"title":"For all of you whiners who complained about last week's 80 degree weather and how it would last until summer...I TOLD YOU IT WOULDN'T!"}
{"title":"Did a man take mom to the bank when she was already Dead?"}
{"title":"Made this video after a trip down to LA with my buddy. Hope you guys enjoy. [My Blog]"}
{"title":"See what kind of destruction Los Angeles would suffer during a nuclear attack using Alex Wellerstein's NukeMap..."}
{"title":"That Time An Artist Installed an I-5 Sign Over The 110 and It Stayed Up There for 8 Years"}
{"title":"Aging water mains could be a $1-billion headache for DWP"}
{"title":"Rare Vintage Footage Of Los Angeles Landmarks Circa 1950? If you have any information of the video please comment"}
{"title":"One Dead in Fatal Shooting In Hollywood | NBCLA"}
{"title":"Man sets himself on fire at a Starbucks in Van Nuys"}
{"title":"This weekend G &amp; G are putting on a multimedia Art Folk concert with trippy analog projected visuals. Its pretty out there stuff."}
{"title":"Ahh, Van Nuys."}
{"title":"My short trip"}
{"title":"Nice people.. :)"}
{"title":"Days off = canyon run"}
{"title":"Where can I get knockoff glasses online? Hopefully polarized"}
{"title":"LADOT launches new app that lets you pay for bus fares with your smartphone"}
{"title":"How does one get a job at one of those cool places where there's a ping pong table, massages and organic food caffeteria? Like at Google or a hip start up company?"}
{"title":"How One Fed-Up Dude Fixed a Caltrans Highway Sign"}
{"title":"Los Angeles Must Aspire to One Day Have a Bubonic-Plague-Filled Subway Like New York"}
{"title":"Looking for a restaurant with a high probability of a celebrity spotting"}
{"title":"This is spot-on."}
{"title":"This is currently on display in the LACMA museum bathroom"}
{"title":"Any good ideas for an office outing?"}
{"title":"Ankrom, an artist and sign painter, decided to make the Interstate 5 North shield himself. He also decided that he would take it upon himself to install it above the 110 freeway."}
{"title":"Is there a bus that goes to Vanguard University in Costa Mesa?"}
{"title":"A new MMJ delivery service has cropped up in the greater LA area. It real-time GPS tracking to deliver meds right to someone's door."}
{"title":"A new MMJ delivery service has cropped up in the greater LA area. It has real-time GPS tracking to deliver meds right to someone's door."}
{"title":"LASD employee sues for retaliation after refusing to falsify documents"}
{"title":"Los Angeles Is Officially The Densest Area In The Country"}
{"title":"That Time An Artist Installed an I-5 Sign Over The 110 and It Stayed Up There for 8 Years"}
{"title":"An Oral History of the Upright Citizens Brigade And How It Popularized Improv"}
{"title":"Premiere of \"Flying the Feathered Edge\" this Friday Feb 20th, 7pm"}
{"title":"General view, Los Angeles, 1899."}
{"title":"West Side Rentals / Room finder"}
{"title":"Ideas for finding/renting a loft in the arts/fabric district downtown for an event."}
{"title":"Downtown LA or Manhattan/Hermosa?"}
{"title":"Who was Tuan Nguyen? Friends unravel mystery of homeless man killed in LA accident"}
{"title":"How commute times across LA stack up"}
{"title":"South LA residents push to transform railway to 8-mile greenbelt"}
{"title":"South LA residents push to transform former railway to 8-mile greenbelt"}
{"title":"La Pipette Red Licorice Pipes in Los Angeles?"}
{"title":"L.A. tech economy is underrated, venture capitalist Peter Thiel says"}
{"title":"TWC finally rolls out the 300/20 Mbps plan in North Hollywood."}
{"title":"Alice in WeHoLand - a public safety announcement"}
{"title":"Popular Eagle Rock Brewery faces yet another hearing to continue operation"}
{"title":"Kyle Kinane, Kate Berlant, Joe Wengert, and more all for FREE tonight in Downtown LA"}
{"title":"What the hell just happened on the 101E in the valley?"}
{"title":"Need help hosting a concert in LA"}
{"title":"Relocating to LA soon...suggestions on neighborhood?"}
{"title":"The Westside Comedy Theater was named one of LA's Best Comedy Clubs by CNN Travel!"}
{"title":"Man charged with killing woman he allegedly challenged to street race"}
{"title":"Turf Terminators - Post Feedback"}
{"title":"These freeway pay lanes are the biggest waste of space ever"}
{"title":"Skatepark area's dangerous?"}
{"title":"/r/LosAngeles, I need your help... what do you know about the Mosaic Church in Hollywood? Tell me about the good, the bad, and the ugly."}
{"title":"/r/LosAngeles, I need your help... what do you know about our local Mosaic Church in Hollywood?"}
{"title":"Bro's vs. Hipsters: A Mockumentary about the Battle for Hermosa Beach, CA"}
{"title":"Crossing Work For Gold Line Extension Completed - CBS Los Angeles"}
{"title":"The LAFD hiring process favors one particular type of applicant: sons of L.A. County firefighters."}
{"title":"L.A. offers $50,000 reward in fatal Highland Park hit-and-run"}
{"title":"Do kids go trick-or-treating in neighborhoods anymore?"}
{"title":"Drove up to Mt Baldy (just do it)for the first time yesterday and saw a helicopter lifting a guy out of a canyon. Rip"}
{"title":"[QUESTION] Transportation Options - LAX, Pasadena, Diamond Bar, Downtown"}
{"title":"Is anyone on the SFV missing a cockatoo?"}
{"title":"Transgender Rights Rally at the DTLA city hall today!"}
{"title":"Shot/Directed/Edited a music video for an indy band on location in Venice Beach. Hopefully the locals can tell me if I captured the vibe pretty well."}
{"title":"Manson jail cell preserved at the LA Hall of Justice."}
{"title":"When 'Ghetto Vons' in West LA was torn down, a Vons Pavilions was going to replace it. Just found out that isn't happening anymore."}
{"title":"[DISCUSSION]Seeking Orange County Intellectuals"}
{"title":"Anyone know where to go about to volunteer to help children?"}
{"title":"L.A.'s Best Happy Hours With Tacos"}
{"title":"L.A. in major decline? Los Angeles goes 23rd straight year with negative job growth, the largest decline in the nation. Los Angeles and Detroit the only two cities in America with consistent severe job out-migration."}
{"title":"Nice restaurants to take a date sort of near the Griffith Observatory?"}
{"title":"Griffith observatory &amp; Hollywood sign during sunset"}
{"title":"LA Clubbers should bookmark this one..."}
{"title":"/r/losangeles discusses: Best places for recreational activities"}
{"title":"Staples to acquire Office Depot for $6.3 billion"}
{"title":"Preschools in affluent areas like the Westside, southern Orange County and the South Bay tend to have lower vaccination rates."}
{"title":"Why cocaine addicts keep making bad decisions"}
{"title":"The fog rolling in made my street look very ominous"}
{"title":"LA City moves closer to lowing business taxes"}
{"title":"Where can I see a really badass magic show this weekend?"}
{"title":"Missing a Corgi mix? Dog rescued from LA river on friday hasn't been claimed, up for adoption tomorrow"}
{"title":"Female burglar, 36, found naked in shower of home she had just ransacked - Santa Monica Mirror"}
{"title":"Cal State LA cancels \"sex toys\" event..."}
{"title":"Local Venice Residents Sue LA City, County Over \u2018Lawless\u2019 Boardwalk"}
{"title":"First all-female mosque opens in Los Angeles"}
{"title":"Tupac Shakur exhibit at Grammy Museum showcases his ambitions"}
{"title":"Took this photo of Seventh and Santa Fe in the Arts District this morning. It came out looking like a painting."}
{"title":"Do any of you know of an amazing community/organization/nonprofit where I can volunteer my time?"}
{"title":"If you could do just ONE thing to fix LA traffic, what would it be and why?"}
{"title":"Preventing Car Accidents with Proper Tire Care"}
{"title":"If you have or know a kid between the ages of 18-25 and you think they are on the wrong path, the California Conservation Corps might be a good option to help them..."}
{"title":"Santa Monica-Malibu students guzzle more alcohol, more often, than other California students - Santa Monica Mirror"}
{"title":"Beyonce and Jay Z are moving to L.A.!"}
{"title":"Anyone know any finance analysts looking for a job?"}
{"title":"L.A.'s Broadway poised for a major revival, anchored by development of former May Co. building"}
{"title":"Best place to sell of donate new or excellent condition clothes, hair products, and makeup?"}
{"title":"Kinder Surprise Eggs sold in Los Angeles?"}
{"title":"DMV Issues 57,000 \"AB 60\" Driver Licenses In First Month. 415,000 total tests taken."}
{"title":"7th &amp; Broadway before the three-way traffic signal was introduced in 1922."}
{"title":"Proud Provider of Transportation to the GRAMMYs Tonight :)"}
{"title":"\u2018Post Apocalyptic\u2019 Streets of LA Piled with Tons of Garbage"}
{"title":"Lost drone in Hollyglen, Hawthorne"}
{"title":"Did anyone else just see a large comet / shooting star?"}
{"title":"Thinking of taking V-date to Unique's \"Fake Prom\" event. Has anyone done this? Fun?"}
{"title":"The Mural is done!!"}
{"title":"Missing 15 year old Makaela Colllins. Contact Culver city police."}
{"title":"I've been away from LA for a while and just saw the burned down apartment building off the 110 this morning."}
{"title":"I love this city"}
{"title":"Mid-Wilshire, February 8, 2015"}
{"title":"Question for people who went to The Fit Expo L.A."}
{"title":"In your in a high speed chase that will be on KCAL 9. What's your strategy for getting away? (No bikes)"}
{"title":"High speed chase going through West Adams residential streets (off blvd) right now. Anyone else hearing this?"}
{"title":"[DTLA] Looked outside my window and can no longer see the surrounding buildings through the rolling fog"}
{"title":"Some shots of tonight's beautiful, surreal skyline view with low-hanging clouds..."}
{"title":"30 miles east"}
{"title":"My car was broken into between 12:00PM-4:30PM on 3/5/15 at the Solair parking structure on Wilshire and Western. Already reported to the police, but was wondering what else I could do... Please help!"}
{"title":"Los Angeles weekend discussion thread 03/06/15 - 03/08/15"}
{"title":"Love spicy ethnic food.. Can anyone recommend a good spicy ethic restaurants on the Westside? Besides Indian."}
{"title":"Police: Man Uses Fake $100 To Buy Girl Scout Cookies"}
{"title":"uberSex leaked: official launch video (now beta in Los Angeles)"}
{"title":"public service announcement for Silver Lake commuters!"}
{"title":"vacationing in santa monica with access to a bike. what do you do/see?"}
{"title":"on the subject of special snowflakes who ask questions about moving to LA:"}
{"title":"What's up with that photographer on the Ballona Creek Trail near MDR?"}
{"title":"VIDEO: Unlocked Vehicles Rev Up Crime In Santa Monica: Car Burglaries, Thefts Up 25% - Santa Monica Mirror"}
{"title":"Draft environmental document released for SR-710 North Study"}
{"title":"A Guide To The Best Restaurants In The Newly-Christened Sawtelle Japantown"}
{"title":"If you like T shirts with humour and for great price"}
{"title":"10 Essential L.A. Restaurants Where You Can Dine for Less Than $10"}
{"title":"Man who can't hold it pisses in the middle of the street effectively blocking DTLA transit bus - [my channel]"}
{"title":"Job Postings in the LA Area!"}
{"title":"Never forget. Winter 2015 (Fryman)"}
{"title":"How real are the real estate shows Selling LA and Million Dollar Listing Los Angeles? [my blog]"}
{"title":"Never Forget. Winter 2015. (Fryman)"}
{"title":"Day Spa Advice"}
{"title":"Meet the Murderous, Inbred Mountain Lion Family of the Santa Monica Mountains"}
{"title":"LOS ANGELES, YOU'RE INVITED: This Monday! XBox's Ori and the Blind Forest Launch Hosted by The Indoor Kids at Meltdown Comics"}
{"title":"I think LA might have some of the most beautiful sunsets in the world. No joke."}
{"title":"Reimagining the Arroyo Seco as an Alternative Transportation Corridor"}
{"title":"Month to month rent?"}
{"title":"Mickey Cohen ran 'rug joints' - high-stakes illegal casinos - hidden in plain sight in mid-century Los Angeles"}
{"title":"The Craft Beer Guide to Los Angeles"}
{"title":"Daily News: retailer Kitson Stores sues their LAX franchisee over \"exploiting travelers with 'hugely' inflated water prices.\""}
{"title":"In U.C.L.A. Debate Over Jewish Student, Echoes on Campus of Old Biases - NYTimes.com"}
{"title":"There are two types of people in this world"}
{"title":"TIL South Coast Plaza is the 4 largest mall in the United States."}
{"title":"Maybe not the very best in the city, but a fantastic list of overachieving and aggressively priced meals"}
{"title":"L.A. officials say DWP lost $88 million due to botched billings, sue firm"}
{"title":"LAPD Alert: Critical Missing 11 Yr-Old Autusitic Girl - last seen near Victory/Laurel Cyn, Hispanic, Curly Hair, pony tail, Glasses"}
{"title":"Charities or some place that helps with LADWP bill?"}
{"title":"Hi I created a free site to compete with Westside Rentals. AMA!"}
{"title":"Hi I started a totally free service to compete with Westside Rentals. AMA!"}
{"title":"To those going to Austin for SxSw"}
{"title":"Clouds over downtown last Monday, 3/2/15"}
{"title":"Anybody seeing Umphrey's tonight at Wiltern at 9:45?"}
{"title":"Is there a site that lists the rate of migration from other states (esp. Texas) to Southern California over the last 5-10 years?"}
{"title":"Has anyone had to get a Fix-It ticket dismissed? I'm finding it difficult to find straight answers as to what I need to do."}
{"title":"Signal Hill Cop Who Pointed Gun At Motorist In Violent Road Rage Incident Arrested"}
{"title":"Los Angeles Is Replacing Nearly All Its 100 Grass Soccer Fields With Artificial Turf"}
{"title":"Anybody know of a good structural engineer?"}
{"title":"15+ Undercover Police Cars and Armored Vehicle in a convoy on 101N?"}
{"title":"\"How Los Angeles is becoming a third-world city\""}
{"title":"Disney seeks continued tax exemption from Anaheim, California"}
{"title":"Decent and cheap place to get an auto detailing?"}
{"title":"The Hollywood Sign's neighbors are painting curbs red and putting up phony signs and are now suing the City to limit trail usage"}
{"title":"Freeway fire consumes portions of nearby church in Glassell Park"}
{"title":"The Hidden History of Los Angeles [My Website]"}
{"title":"Neat Map Shows How Noisy Your Neighborhood Is: LAist"}
{"title":"Sharing this video my friend made after Access Paratransit refused to allow him in a car with his guide dog"}
{"title":"Looking for a new place? Free WSR login."}
{"title":"Hollywood Right 'Friends Of Abe' To Hear Trump"}
{"title":"Mountaintop View of Burbank - Cities Skylines/RL Side-by-Side Comparison (x-post from /r/CitiesSkylines)"}
{"title":"Westsiderentals.com"}
{"title":"Free outdoor screening of The Breakfast Club at Angeles National Golf Course Friday, July 10, 2015"}
{"title":"Alamo Drafthouse - WE ARE GOING TO LA!"}
{"title":"helicopters near hollywood / la brea"}
{"title":"Lawmakers warned about threat over vaccine bill"}
{"title":"My photo from Leo Carrillo State Park is the NASA Astronomy Picture of the Day! It's a personal favorite of mine, hope you guys like it, too!"}
{"title":"1 of 3 Charged in Red Shoes Murder Pleads Not Guilty - A 24-year-old man pleaded not guilty Monday to the gang-related murder of a 19-year-old mentally disabled man who was gunned down near a South Los Angeles car wash, apparently over his red shoes."}
{"title":"Any love for Burger Lounge?"}
{"title":"Where in Los Angeles can you buy sushi grade tuna steaks?"}
{"title":"Dope 3D Pacman street art in the Arts District"}
{"title":"How often does a person die in the 405 freeway?"}
{"title":"Need some information about LA Palm Trees"}
{"title":"UCLA report: LA County gets a C+ on the environment"}
{"title":"14-Story Tower for Homeless Individuals Proposed for Skid Row"}
{"title":"California Shifts Water Use in Face of Drought [2:56]"}
{"title":"Los Angeles weekend discussion thread 04/10/15 - 04/12/15"}
{"title":"This LA speakeasy serves insane alcoholic boba tea drinks"}
{"title":"Sweepstakes for Wango Tango Suite (5 people) plus M&amp;G's with Bieber + Nick Jonas. Low as $10"}
{"title":"[Meet-up] Learn how to mix from a celebrity mixologist!"}
{"title":"\"Joyride for the Cops\": Mother of Man Beaten Following Horse Pursuit Slams Deputies The San Bernardino County sheriff ordered an immediate internal investigation after the pursuit in the high desert northeast of Los Angeles (it's almost LA)"}
{"title":"Sidewalk Repair Experiment with Instagram #seeclickfix #mysidewalk"}
{"title":"Coachella starts today - here are some videos from 2008 of Huell Howser's visit to Coachella"}
{"title":"UCLA Dental for extracting impacted wisdom teeth?"}
{"title":"Sample Sale Survival Guide- Part 1"}
{"title":"BBC - Earth - Alien flies buzzing American city of Los Angeles"}
{"title":"Is a warm water blob fueling the drought? Now I've heard everything!"}
{"title":"Police search skid row for newborn baby after woman found bleeding"}
{"title":"[Meet-up] West Hollywood low-stakes Poker Night Round 2. Thr. 4/16 @7:30"}
{"title":"I made this fun but accurate quiz to help match your personality (and economic realities) with the right home for you in Southern California. Try it out and let me know your thoughts."}
{"title":"Video Shows Star Wars Imperial Forces Invading Los Angeles"}
{"title":"GTA in South LA. Suspect is armed in a green taxi."}
{"title":"Dog wearing sunglasses in a jeep on Pico. Never change, LA. (apologies for my reflection)"}
{"title":"Why We Love California Beaches"}
{"title":"Is anyone watching this?!"}
{"title":"Why L.A. Urban Planners Should Work with Artists"}
{"title":"There's a Skid Row History Museum opening this weekend in Downtown L.A."}
{"title":"Another PD shooting is just moments away"}
{"title":"Parking reform group recommends Los Angeles slash many fines"}
{"title":"4/28 pun contest at Genghis Cohen! $50 prize! Contestants get in for FREE! [My Event]"}
{"title":"Anyone know which Chipotle locations of Los Angeles are offering the new delivery service?"}
{"title":"Eli5: In light of the recent killings in Palms, what does it mean when some pissant gang like the West Side Locos \"controls a territory\"?"}
{"title":"Made this Vine about Santa Monica"}
{"title":"Helicopters hovering over Inglewood/Ladera Heights past 1.5hrs?"}
{"title":"Jeni's Splendid Ice Cream voluntarily recalls all their ice cream because of listeria scare, store on Hillhurst might close temporarily"}
{"title":"[x-post from /r/movies] exclusive premiere of Maggie for redditors only with Q&amp;A by Arnold Schwarzenegger."}
{"title":"The view off Wilshire right now."}
{"title":"Tagger Sought After Marking LAPD Horse at Venice Beach"}
{"title":"Will the Fight Over the 710 Gap in L.A. Be a Battle to the Death (of Freeways)?"}
{"title":"Skid Row Fight With Knockdown And LAPD - [my channel]"}
{"title":"From behind the drum line at the Centennial March"}
{"title":"Anyone want to go see We Are Scientists with me (21/f) tomorrow?"}
{"title":"Selfie taken on top of the St. Vincent Thomas Bridge in San Pedro [OC] [instagram.com/4thandspring]"}
{"title":"Shots fired outside Inglewood bank during armored-truck holdup"}
{"title":"Pet owners beware! Women posing as cops lied to a man and stole his dog."}
{"title":"to sidecar and lyft drivers"}
{"title":"Curb painters at it again! They came to my parents' house and painted without an okay and are now asking for $20..."}
{"title":"For those of you with faith in the L.A.Times, I would like to know why"}
{"title":"How To Drive in Los Angeles Vol 4"}
{"title":"Pasadena memorial of Armenian Genocide drops one waterdrop every 21 seconds, dropping 1.5 million \"tears\" each year, one for each person killed."}
{"title":"Incredible scene today as thousands took to Sunset Blvd to raise awareness of the Armenian Genocide"}
{"title":"Another Puma crosses the road... or actually the 101. P-32 now in Simi Hills."}
{"title":"Anyone know what's going on in the Northridge area? There's 4 choppers hovering over one area, which is enough to garner my attention."}
{"title":"View of The Armenian March from a High Rise"}
{"title":"TIL Metro Will Write You An Excuse Letter If They Make You Late"}
{"title":"DTLA: Any New York sports bars?"}
{"title":"Funny Or Die is putting on a live comedy/music show this Sunday at The Regent with an all surprise lineup. RSVP is free and open to public for the next 200 signups at this link!"}
{"title":"LAPD in standoff with alleged gunman in Van Nuys; 15900 block of Sherman Way"}
{"title":"Several photos I took today at the big Centennial demonstration by Armenians and those in solidarity"}
{"title":"LAPD Animal Cruelty officer impersonators take dog from Echo Park man"}
{"title":"Horrific Hit-and-Run Car vs. Bike In East LA - police seek info on white, mid-\u201880s Toyota pickup with extended cab, metal rack, black side graphics"}
{"title":"City of West Hollywood Dial A Ride and nightlife shuttles win state recognition"}
{"title":"West Hollywood wins state recognition for its Dial A Ride and nightlife shuttles"}
{"title":"Hey LA, is there anything I can help you out with this weekend? [my project]"}
{"title":"SWAT team responds to a man waving and firing a gun off Sherman Way in Van Nuys. Try to stay avoid that area, everyone! Stay safe!"}
{"title":"There's a police/SWAT stand off happening right now in Van Nuys, some guy is waving around and shooting a gun. Try to avoid Sherman Way if you can! Stay safe!"}
{"title":"Van Nuys Shooter is In Custody!"}
{"title":"Looking for a Sportbike Rider named \"Friday\" (x-post from /r/motorcycles,/r/motola)"}
{"title":"file locations for dates"}
{"title":"150,000 marching in centennial commemoration of the genocide of Armenians"}
{"title":"Angel City Brewery's 3rd Annual Heritage Music and Arts Festival"}
{"title":"Fire in DTLA"}
{"title":"Zankou Chicken closes every April 24 to commemorate the Armenian Genocide"}
{"title":"Marijuana Butane Lab and Grow Op blows up on hills of Los Feliz"}
{"title":"Get 10% off the 4/30 Aces of Taste Event with Coupon Code: Dudeletseat"}
{"title":"Repainting my car."}
{"title":"Are you a biker named \"Friday?\""}
{"title":"April 24- Estimated 130,000 people gathered in Hollywood for the recognition of the Armenian Genocide. Possibly 2nd largest gathering ever in LA."}
{"title":"Blood Moon Eclipse Saturday April 4, 2015 458am"}
{"title":"Luckily I could see the blood moon from my balcony."}
{"title":"Sunrise over Downtown Los Angeles"}
{"title":"ID this dog/owner? Gave false ID after dog attacked 3 horses &amp; their riders - Trabuco Canyon"}
{"title":"Executive Coaching Los Angeles"}
{"title":"Anyone have a studio or is a producer in LA?"}
{"title":"Gardena abduction: Police believe suspect is a child predator"}
{"title":"Teachers in Los Angeles interested in collaborating?"}
{"title":"Airbnb cuts ties with vacation-rental firms in Los Angeles, Globe Homes and Condos, AE Hospitality, possibly others"}
{"title":"Airbnb cuts ties with LA vacation-rental firms Globe Homes and Condos, AE Hospitality, possibly others"}
{"title":"Overlooking the shimmering water and LA coastline from Malibu on a Full Moon night (last night)"}
{"title":"10 neighborhoods account for nearly a third of street-sweeping citations in LA"}
{"title":"Los Angeles daily discussion thread 12/30/14"}
{"title":"The most ticketed Los Angeles neighborhoods for street sweeping violations"}
{"title":"Organizers promise bigger New Year's Eve celebration at Grand Park"}
{"title":"Let's chase our passions LA!"}
{"title":"Stupid Human Tricks: Man drinking in a tree falls onto a spiked fence impaling himself in Hollywood."}
{"title":"Pasadena working group to present City Council with objections to 710 tunnel"}
{"title":"Although we have to deal with the Topless Maid vans, at least we have McDonalds with Nintendo 64s"}
{"title":"Gizmodo article on the Port of Los Angeles and its evolution."}
{"title":"Night time photography near Disney Concert Hall"}
{"title":"Possible to sneak/climb into Disneyland?"}
{"title":"Photo Exhibit Captures the Sunset Strip's Golden Age of Billboards"}
{"title":"Motorcycle Crash - Overland &amp; Washington, Culver City : MotoLA"}
{"title":"18 Texts Only People From L.A. Would Send"}
{"title":"Anaheim\u2019s New Transit Hub Isn\u2019t a Failure Yet"}
{"title":"Hiking / Natural Plant question"}
{"title":"Los Angeles Based Student Discount App"}
{"title":"CicLAvia \u2013 The Valley: Tips For Fun, Families, Getting There, and More"}
{"title":"Glendale Extending Its L.A. River Linear Park"}
{"title":"Downtown L.A. Spring Street Parklet Re-Opens Repaired and Improved"}
{"title":"Cars hitting N Figueroa\u2019s pedestrians and bicyclists, but Councilman Cedillo refuses to implement Figueroa4All, despite the fact that he promised to before election"}
{"title":"Obesity Rose Most in Areas of L.A. Where Fast Food Openings Were Banned"}
{"title":"Any ideas as to what is going on at Veteran and Wilshire?"}
{"title":"Study: Airbnb is bad for Los Angeles. It keeps rent high by encouraging landlords to (illegally) lease residences tourists, changing the character of neighborhoods and more."}
{"title":"what sky writing over burbank/ glendale did i just miss?"}
{"title":"Study: Airbnb is bad for Los Angeles. It keeps rents high by encouraging landlords to (illegally) lease residences to tourists, changing the character of neighborhoods and more."}
{"title":"Would you like to water your trees/garden while you wash your clothes or shower?"}
{"title":"Police have Wilshire and Veteran blocked off [video]"}
{"title":"Frank McCourt hints that NFL still in play for Dodger Stadium"}
{"title":"Hit and Run on Elderly Woman near USC. Let's help catch this scumbag."}
{"title":"Wow - South LA Banned Fast Food and Obesity Rates Rose"}
{"title":"Wow - South LA Banned New Fast Food Eateries and Obesity Rates Rose"}
{"title":"Cool Google Project Lets You Explore Los Angeles' Street Art: LAist"}
{"title":"[UPDATE] Mysterious Arco station in Torrance drops pump prices $1.40 a gallon after article"}
{"title":"Beta testers needed for new commuter app Trip2GOLA"}
{"title":"Fighting Debt: Our Family Punches Back At Poverty In Los Angeles. We have now payed off over 25K!"}
{"title":"Need a quick 75 Bucks? **NOT A SNAM**"}
{"title":"L.A. County fire employees will face discipline in cheating scandal"}
{"title":"Fired LAPD cop charged with murder fled to Texas, FBI says"}
{"title":"Dance Communities in LA?"}
{"title":"TO LIVE AND DIE And Drive IN L.A."}
{"title":"FYI! French Bulldog mauled at Hollywood \"Pooch Hotel\" :("}
{"title":"Rookie LAPD officer fled to El Paso after fatal shooting"}
{"title":"Sex themed hotel rooms?"}
{"title":"[Norms diner one step closer to LA Landmark status](http://www.lamag.com/askchris/city-nudges-norms-closer-to-landmark-status/)"}
{"title":"Good camping spots?"}
{"title":"Video: San Diego Police Officer Kills Friendly Service Dog: LAist"}
{"title":"California's $1-billion emergency drought relief is tiny drop in bucket"}
{"title":"Remembering the Watts Rebellion, Operation Chaos and the Infectious Logic of National Security"}
{"title":"51 Years Ago Today - Baldwin Hills Dam Collapse (VIDEO)"}
{"title":"The Best Los Angeles Films"}
{"title":"[MY EVENT] FREE Stand Up in Burbank Tonight!"}
{"title":"Super cheap records?"}
{"title":"Southern California Toy Drives: It's Not Too Late!"}
{"title":"Controversial Millennium Hollywood Project Killed"}
{"title":"Do the riots in Baltimore remind anyone of the Rodney King riots?"}
{"title":"Why Not Let Us Help You Plan A Party To Remember, L.A.?"}
{"title":"Anyone know any beaches in Oxnard where you can camp overnight?"}
{"title":"HEADS UP - Protesters in Los Angeles this May 2nd @La Cienega and route is yet to be determined. Stay at home for less headaches. I'll be watching Mayweather vs Pacquiao."}
{"title":"Interested in joining a Los Angeles area citizen science project?"}
{"title":"Going to be near the convention center, where to eat, what to do?"}
{"title":"Figured I'd try the \"why are there helicopters in my area\" number in the sidebar for fun. Was told that there was a man with a gun in my area. Promptly freaked the fuck out."}
{"title":"Time Warner Cable and DNS Probe Finished No Internet"}
{"title":"May Day (May 1st) March DTLA. Plan Accordingly."}
{"title":"Avengers Sunday!"}
{"title":"Different but interesting music. On tour through LA in JUNE."}
{"title":"buying weed in la as a tourist"}
{"title":"Ralph's by USC is sold out of Natty Ice."}
{"title":"Good morning, LA peeking up through the clouds"}
{"title":"Los Angeles weekend discussion thread 05/01/15 - 05/03/15"}
{"title":"Rain Soaked Seattle has highest water rates"}
{"title":"[My Blog] Pork Yeah! Eat Chego's Chubby Pork Belly Bowl"}
{"title":"Why Cats are Good for Us - Reveiw"}
{"title":"DWP, IBEW trusts paid for steak dinners, trips to Hawaii, Las Vegas, audits find"}
{"title":"10 Native Plants To Up Your Los Angeles Home's Sustainability"}
{"title":"[WANTED] Looking for songwriter/ guitarist for an indie pop band :)"}
{"title":"The problem with good guys vs. bad guys policing"}
{"title":"Looking for a few soccer players for the upcoming Santa Monica Adult Soccer League season!"}
{"title":"Hi guys, need a little insight into ethnic enclaves and segregation in LA"}
{"title":"Did I see a pterodactyl in Mt. Washington?"}
{"title":"Moving to LA. Got a new job in Seal Beach. Where should I live?"}
{"title":"LA Whip"}
{"title":"Driving to Venice Beach tonight"}
{"title":"Spring is in the air \u2013 Los Angeles Gardens"}
{"title":"Plan in the works to allow cars and parking all over a good area of Griffith Park"}
{"title":"Giving away a sofa bed and loveseat. Pick up only"}
{"title":"S.W.A.T team deployed haha"}
{"title":"KCRW listeners...?"}
{"title":"21st birthday dinner"}
{"title":"I will see a need to conserve water when the government forces Golf Courses to conserve water by not having acres of green fields for the rich, how about you?"}
{"title":"Police Investigating Fatal Car-To-Car Shooting In Del Rey"}
{"title":"Two WWE wrestlers give directions from West Hollywood to Downtown."}
{"title":"Which intersections do you think would make great roundabouts?"}
{"title":"Eyebrow Threading?"}
{"title":"City Attorney: We're Prepared to Take Action Against Many Illegal Billboards"}
{"title":"Visiting LA. Tips?"}
{"title":"Art Museums that are Open after 9PM?"}
{"title":"TWC internet in Culver City Slow as Fuck today?"}
{"title":"Anyone know a good tattoo place?"}
{"title":"Electrical Engineering student looking to move to LA once I'm out of school, looking for advice about job hunting and where to live."}
{"title":"I'm the DTLA guy. AMA! (about downtown)"}
{"title":"\"Crippling Drought in the Golden State: California Soul\""}
{"title":"From 1994: The Four Scariest Things About California"}
{"title":"Los Angeles weekend discussion thread 03/24/15"}
{"title":"Totally Awesome Things To Do In LA - 3/23-3/29"}
{"title":"Welcome to YouTube Space Los Angeles"}
{"title":"Lisa May did a podcast with Alison Rosen."}
{"title":"Route options presented for high speed rail through Burbank and the San Gabriel Mountains"}
{"title":"TTDILA: Weekly What To Do: Christmas Starts Now and... Hannukah (My Site)"}
{"title":"Rich Poker Playboy Arrested At LAX For Allegedly Trying To Make A Bomb: LAist"}
{"title":"Anyone know where this is in LA? Looking to take some pics while visiting."}
{"title":"Any good places to watch a Shakespeare play in December?"}
{"title":"From an enviornmental perspective, what would finally prompt you to move?"}
{"title":"KROQ Almost Acoustic Christmas is NOT sold out!! Go check Ticketmaster and keep clicking search until you find some! I just bought 2 tickets right now! Search results kept giving me the same tickets over and over so there's only a couple left!"}
{"title":"Welcome to driving in LA."}
{"title":"A look at Metro Rapid Bus service changes beginning Dec. 14 in San Fernando Valley"}
{"title":"LAX\u2019s planned people-mover will connect with Metro\u2019s under-construction Crenshaw light rail line"}
{"title":"TAP is coming in March to the Big Blue Bus! (... finally?)"}
{"title":"It's Official! Beach Nation in West Hollywood is Serving Beer and Wine."}
{"title":"Anybody have extra Chris D'elia tickets for this weekend, for sale?"}
{"title":"Bikes Vs Cars: The False Dichotomy (as explained by an Angeleno)"}
{"title":"Destroying Los Angeles Never Gets Old"}
{"title":"WHATEVER Comedy Show at Center for the Arts Eagle Rock - Brendon Small, Kate Berlant and more! $5 [my show]"}
{"title":"Totally Awesome Things to Do in LA - 12/10-12/14"}
{"title":"Was at a DTLA Tech Meetup last night and met the GM from Isodore Electronics Recycling: One Company. Two Social Missions. For every 50,000 pounds of waste it collects, the company hires another employee: a former inmate seeking steady work as an alternative to crime."}
{"title":"Broken water pipe at S. Formosa and 3rd. Water bubbling up through the road."}
{"title":"FBI sweep targets Boyle Heights. - Discuss"}
{"title":"MUSHA Izakaya - Santa Monica- Los Angeles, CA"}
{"title":"Public Transportation to Work"}
{"title":"Sam Pepper Warning: Downtown, Staples Center."}
{"title":"CSULA Student Burned From The Inside Out due to reaction from antiobiotics"}
{"title":"American Cinematheque: No joke! The entire Christopher Nolan BATMAN trilogy screens December 13 at the Egyptian Theatre in Hollywood. 1 ticket, 3 great movies!"}
{"title":"Metro Gold Line Foothill Extension Pasadena to Arcadia First Person View"}
{"title":"Los Angeles awaits earthquake that could be the 'Big One' - Telegraph"}
{"title":"Looking for a moving company willing to move one item."}
{"title":"LA's average gas prices dip below $3 for first time since 2010"}
{"title":"Los Angeles' Best New Bars In 2014: LAist"}
{"title":"Donation Drive Launched to Replace Holiday Gifts for Seniors Destroyed in Downtown Blaze"}
{"title":"K-Town restaurant recommendations?"}
{"title":"Flash flood warning! It's finally raining!"}
{"title":"Can anyone get tickets to Magic Castle? - Dad's 60th birthday,he LOVES magic, and has always wanted to go"}
{"title":"Do any of you happen to have a connection at the Magic Castle? Dad's 65th birthday, he's always wanted to go, and LOVES magic."}
{"title":"All you can eat sushi restaurants"}
{"title":"Best place to bring a date for tea?"}
{"title":"Which City Has The Most Boring, Predictable Weather? Los Angeles and San Diego are #3 and #2"}
{"title":"Lost Dog! Please help! Let him out to pee about an hour ago and was nowhere to be found. If you see him please pm me."}
{"title":"CSULA student &amp; mother is in intensive care after having an allergic reaction to her friend's antibiotics that has caused her body to burn from the inside out. (Warning: GRAPHIC Images)"}
{"title":"DOG FOUND: Running in traffic around Washington and Hoover. 7:45pm"}
{"title":"25 arrested in sweeping indictment of L.A. gang tied to Mexican Mafia"}
{"title":"California braces for fiercest storm in 5 years"}
{"title":"Any idea what went down in/near Torrance at 11:40-11:50 a.m.?"}
{"title":"Good places to eat in Malibu?"}
{"title":"Any coffee shops with strong Wi-Fi open late? (Basically, the Bourgeois Pig but with usable Wi-Fi. Hell, I'll take being in a strong 4G area.)"}
{"title":"Polling shows only 1/3 of Boston residents agree with hosting the Olympics, and now the group in charge of the bid, Boston 2024, supports the idea of having the residents vote on the proposal. LA might still have a chance!"}
{"title":"How to get tickets to Echoplex shows?"}
{"title":"LA\u2019s Too Crowded To Permit Right-On-Red Turns"}
{"title":"Friends of the Los Angeles River invites you to participate in our annual Los Angeles River CleanUp!"}
{"title":"Anyone know where I could watch Jimmy Kimmel tonight? or have an AT&amp;T U-verse or FIOS sign in?"}
{"title":"Magic The Gathering?"}
{"title":"George Seprovitz Professor Method"}
{"title":"I love LA craigslist"}
{"title":"Anyone have tickets to the Mexico v Ecuador game this Saturday?"}
{"title":"Man Shot In His Car In Playa Vista, Dies After Driving Over A Mile"}
{"title":"Elon Musk's Hyperloop firm leases space in Downtown LA Arts District"}
{"title":"If you look at the Google image you'll see the car that has the Me Gusta Meme on it's trunk hahah"}
{"title":"I host \"570 Raw\" Saturday nights on AM 570. This week we are debuting a new segment in which callers battle each other with their best \"clean\" trash talk. Would anyone be interested in participating?"}
{"title":"$15.40 may not be a high enough toll to keep congestion down on the 110 to Long Beach"}
{"title":"More About the Griffith Park Free Parking Expansion Pilot"}
{"title":"(X-post /r/NASCAR) Irwindale Raceway Likely to be Demolished for an Outlet Mall"}
{"title":"Ford Mustang and was presented at a special event in Los Angeles."}
{"title":"I'm the REAL Dee Tee El Lay guy. AMA! (About Anything)"}
{"title":"Selling 4 tickets to Newsies The Musical."}
{"title":"Stay Filthy, Cali: You're So Classy - new water conservation PSA"}
{"title":"Traffic circle near Long Beach on U.S. 101, 1939"}
{"title":"FOUND CAT grey/black spotted near runyon canyon with harness"}
{"title":"Scavanger Hunt Across DTLA to Win $1000 - April 4th"}
{"title":"Windy as hell."}
{"title":"Is it Legal to have a dog on a leash in an L.A street?"}
{"title":"Found Dog!"}
{"title":"Hungry? We're Driving Clients To The Farm of Beverly Hills In LA LIVE Tonight! If You're Feeling A Bit Fun, Call &amp; Get Some Grub!!!"}
{"title":"Anyone know what's going on over by Sunset/San Vicente?"}
{"title":"Girlfirend and i are visiting LA from thr DFW!"}
{"title":"Anyone see Kendrick Lamar shooting a music video on their street just now?"}
{"title":"Good off the grid Mexican restraunt?"}
{"title":"Future of Santa Monica Airport Up For Debate"}
{"title":"cop in San Jose killed while responding to armed, suicidal man"}
{"title":"Interesting vacation spots within a 3 hour drive?"}
{"title":"What was going on in the Valley Tuesday night? Lots of sirens and helicopters from about 10-11:30 PM, North Hollywood Van Nuys area. Anyone know?"}
{"title":"This guy got so upset with LA's freeway signage that he designed, built and installed his own sign. They didn't notice it for years."}
{"title":"No more locked doors! Echo Park Lake"}
{"title":"Activists demand charges in Ezell Ford, Omar Abrego shootings"}
{"title":"Visit Richard Nixon\u2019s Birthplace/Yorba Linda"}
{"title":"Bridge at Echo Park Lake"}
{"title":"Exploring Los Angeles Architecture"}
{"title":"Los Angeles Transit Lines (ex-Los Angeles Railway) W Line car no. 1544 at North Figueroa Street and Meridian, February 1948."}
{"title":"I have a ticket to american nightmare at the el ray tonight at 8pm and i cant go anyone want it for $25"}
{"title":"Flying Back to LA After the Holidays"}
{"title":"Looking for advice on where to live!"}
{"title":"Cheap/free things to do and volunteer opportunities?"}
{"title":"Bachelor Party in LA."}
{"title":"Adult swim lessons in LA"}
{"title":"Is this a possible walk to the back of the hollywood sign?"}
{"title":"Downtown Los Angeles as seen from Baldwin Hills today"}
{"title":"Neighborhoods and Jobs"}
{"title":"Free one-to-one photography training"}
{"title":"The /r/LosAngeles Collaborative Playlist Hasn't Been Touched In A Year!"}
{"title":"Any tips for a small-town girl moving to Los Angeles for college?"}
{"title":"LA's best kept secrets"}
{"title":"Here Are The Metro Trains That Could Get Wi-Fi And Cell Service in Spring 2015"}
{"title":"Long Beach Transit To Take TAP Cards As Of February 2015"}
{"title":"[Event] Where There's Smoke forensic science seminar - 1/18, Cal State LA"}
{"title":"San Fernando Valley Prioritizes Freeways, Then Bemoans Lack of Transit"}
{"title":"Southern California hospitals face federal cuts due to penalties"}
{"title":"Where to buy space heater?"}
{"title":"TIL the first Wrigley Field was in Los Angeles and was built over a year before the one in Chicago. It played host to the Angels PCL from 1925\u20131957 and hosted their debut season as an MLB team in 1961."}
{"title":"Dinah's on Sepulveda at Centinela. [x-post r/LApics]"}
{"title":"Beachwood Canyon trail to Hollywood sign to reopen Monday"}
{"title":"Where can I buy a cake like this?"}
{"title":"Asian strip clubs?"}
{"title":"Anyone know a car photographer or someone who would like to photograph a car?"}
{"title":"any tips or websites to good home rental sites?"}
{"title":"Im in west hollywood for the next 8 days looking for someone to help me out with some weed!"}
{"title":"LAPD Officer Tudor completed the Los Angeles marathon in full uniform and gear in 5 hours and 58 minutes."}
{"title":"TIL that in the California desert General Patton practiced the tank maneuvers that were used in North Africa in WWII"}
{"title":"Join LAFD at Saint Patrick's Day Festivities in Pershing Square"}
{"title":"LAPD officer accused of trying to smuggle Mexican citizen across border"}
{"title":"Wilshire Grand emerging into the skyline"}
{"title":"Any good backwoods campgrounds away from civilization within driving distance of LA? The non-casual campgrounds."}
{"title":"Los Sardines: The Cramification of Southern California housing. Some of the most cramped living in single family homes is occurring in the Southland. | Dr. HB"}
{"title":"I did it! I fought a Santa Monica parking ticket and won. This is my prize."}
{"title":"Our VIP's Are Enjoying Our Sedan Service To Nobu Malibu Tonight For Some Sushi &amp; Sake. It's Your Turn! Arigato!"}
{"title":"The average internet speed in LA is 48.12 down, 10.17 up (mbps). What's yours?"}
{"title":"Visiting LA for few days solo, where should I stay?"}
{"title":"A few lesser-traveled LA spots from this week"}
{"title":"South Bay Stretch of Western Avenue Could Get a More People-Friendly Makeover for Bikes and Pedestrians"}
{"title":"2 Hikers, Dog Safely Rescued After Getting Lost In Angeles National Forest"}
{"title":"Nearly $5-a-gallon gas a mainstay at mysterious, often desolate Arco station in Torrance"}
{"title":"Is it a requirement for LAPD officers to cruise in pairs? I've never seen a solo officer driving and all times I've been pulled over (3) the annoying 2nd cop shone a light in my passenger window the whole duration of the stop lol"}
{"title":"Cool L.A. Adventures"}
{"title":"West LA apartment hunting"}
{"title":"Anyone else's allergies going absolutely crazy?"}
{"title":"Rookie LAPD cop is wanted suspect after fatal shooting in Pomona"}
{"title":"Sunset after the Marathon."}
{"title":"Mann, I need help finding a studio for rent!"}
{"title":"Car turnover at 101 freeway. That's the only picture I saved before the fire truck blocked our view. I guess you'll see this in the news tomorrow"}
{"title":"The L.A. Derby Dolls are Back for 2015 at a New Home Track in El Sereno"}
{"title":"This Morning's Amazing Sunrise From My Little Nook Off LaBrea. No Filters, None Of That BS, Just Our Incredible Sky."}
{"title":"(finance) Meetups and getting around in SF/LA region."}
{"title":"Los Angeles daily discussion thread 03/17/15"}
{"title":"If you're working in Century City, where is the best place to live for commuting, lifestyle and bang for buck?"}
{"title":"OFF-ROADING / CAMPING"}
{"title":"The most used light rail in the nation turns 25 in July; a history of the Blue Line"}
{"title":"In 1976, pot-head pranksters made \u2018Hollyweed\u2019 out of the iconic Hollywood sign"}
{"title":"Friend has a 3hr layover at LAX - where should I take her for a quick lunch?"}
{"title":"Los Angeles weekend discussion thread 02/27/15 - 03/01/15"}
{"title":"My pet rock Belrock and his girlfriend Gemma share a romantic sunset at the top of Mount Wilson"}
{"title":"PCH in the morning"}
{"title":"Lost Cat"}
{"title":"Help find this thief!"}
{"title":"Working at LAX (basically). Where to live?"}
{"title":"Looking for an apartment, but westside rentals no longer offers to tour apartments. Do any other companies do this in the LA area?"}
{"title":"This might be a long shot, but does anyone know where I can find a Capybara?"}
{"title":"Paid gig for a simple Interior Photography job"}
{"title":"Anyone know anything about the dead body found on the PCH just north of the 10 earlier this morning?!"}
{"title":"Visiting Compton, what to expect? Is it really that bad?"}
{"title":"[OC] Weekends are the deadliest time for Latinos in L.A. County"}
{"title":"Elton John performs at Dodger Stadium in a sequined Dodger uniform and with his piano covered in blue astroturf, October 1975 [x-post /r/baseball]"}
{"title":"Sea Turtles in the San Gabriel River"}
{"title":"Pickup Truck Driver Released From Jail, Not Charged at This Time in Oxnard Metrolink Crash"}
{"title":"Robben Ford And Grant Geissman Perform Jazz and Blues At The Midnight Mission On Skid Row - [my channel]"}
{"title":"Leonard Nimoy, Spock of \u2018Star Trek,\u2019 Dies at 83"}
{"title":"Chatsworth street race leaves 2 pedestrians dead, 1 hurt"}
{"title":"Student Reporter interviews Asian American candidates competing for city council districts 4 and 10."}
{"title":"What Should Downtown L.A. and Pasadena Do to Get Ready for Bike Share?"}
{"title":"Hundreds of illicit carcinogenic oil wastewater pits found in Kern County - unlined near crops and groundwater"}
{"title":"Lyft Los Angeles just got 3,000 driver applications in 24-hours"}
{"title":"Any of you guys/gals into foosball?"}
{"title":"Anyone Paying Respects to Leonard Nimoy tonight at Griffith Observatory?"}
{"title":"Congested Los Feliz Intersection Remains a Neighborhood Burden | NeonTommy"}
{"title":"Weekend Planner: 20 Things To Do In Los Angeles"}
{"title":"STOLEN CAR-Blue Corolla '98 Please help?"}
{"title":"My fiance will kill me if he sees this."}
{"title":"Billionaire Bollore Looks at Car-Sharing Los Angeles Unit | Bloomberg"}
{"title":"L.A Metro bus drivers get lonely too"}
{"title":"Guelaguetza Deemed One Of America's Classics By James Beard Foundation"}
{"title":"I love LA when it's cold and gloomy."}
{"title":"Why is it that whenever the FBI catches an international cyber terrorist group like Goatse it's always some bureau out on the east coast and not in Los Angeles? Why do these groups then get hired to work for the state of California?"}
{"title":"L.A. Metro bus driver needs somebody too"}
{"title":"B-Real Wins License to Open a Dr. GreenThumb Dispensary"}
{"title":"What happened to all the Hollywood-area dispensaries? Went by four places today, all were closed down."}
{"title":"NFL in L.A.: AEG warns Kroenke's Inglewood stadium plan is vulnerable to terrorism (x-post /r/nfl)"}
{"title":"New to the Westside. What's the best ISP for speed and value around Mar Vista/MDR? I'm lost..."}
{"title":"FCPX tutor in east LA?"}
{"title":"DTLA + Rainbow = :D"}
{"title":"Charles Babinski of Go Get Em Tiger and G&amp;B Coffee wins 1st place at 2015 US Barista Championship"}
{"title":"Metrolink train crash, derailment near Los Angeles leaves multiple casualties"}
{"title":"Los Angeles DUI Attorney | DUI Lawyers in Los Angeles CA | 818-781-1570"}
{"title":"I met someone that lives in Downtown but he kept calling it \"DEE TEE ELLE AYE\". Is this pronunciation a thing now?"}
{"title":"Los Angeles daily discussion thread 02/24/2015"}
{"title":"A Day In: Los Angeles - Where would you go in one day? [2:35]"}
{"title":"finding people to meet up with in santa monica"}
{"title":"Things to do in LA County"}
{"title":"Man Attacked With Pizza Slicer Inside VONS Supermarket In Glendora - CBS Los Angeles"}
{"title":"60th Anniversary of Ferrari being celebrated in Beverly Hills"}
{"title":"LA Speedo Tours are now a thing:"}
{"title":"Two Justin Productions Present: Halloween Butt Massacre"}
{"title":"LA redditors what events are happening this month for Halloween?"}
{"title":"Be careful when taking those sunset photos..."}
{"title":"Report: Some Officers who Claimed to Be on Patrol Were Actually Back at the Station"}
{"title":"Halloween horror nights tonight!"}
{"title":"Help us live our dreams! $50 for a personalized feat of strength (physical or emotional)"}
{"title":"Abandoned mall in Hawthorne, CA (urban exploration blog IG: @4thandspring)"}
{"title":"COME &amp; KNOCK ON OUR DOOR: A Tribute to John Ritter. Meltdown Gallery in Los Angeles, Oct. 17th"}
{"title":"LA is the 6th Most Expensive City in the U.S. to Live in"}
{"title":"Driver, 16, in fiery crash that killed 5, bought car for $1000 with no drivers license, often told to slow down"}
{"title":"Request from Sweden, 3D printed candy"}
{"title":"NFL possibly coming to LA soon - Opinions?"}
{"title":"LAX: Possible Ebola Patient On United Flight From JFK"}
{"title":"Just got kicked off of the bus. What are my rights? What can I do? Anyone who has worked for metro can you give me some advice??"}
{"title":"helicopter over Westchester?"}
{"title":"Elderly L.A. woman vanishes, is found alone in Maine four years later | LA Times"}
{"title":"A question about local Halloween events"}
{"title":"Hey anyone hungry tonight by LACC. We are doing a little pop up until 9pm."}
{"title":"Car owner warns of a Silver Lake tire slasher"}
{"title":"L.A. gets $36 million in Promise Zone anti-poverty grants"}
{"title":"Cat walking down my sidewalk...what's the deal?!?!?!?"}
{"title":"Lock in Your Lease Now, Because L.A. Rents Will Continue to Rise"}
{"title":"To the tall, mustached white dude wearing a rice hat while hiking yesterday"}
{"title":"Long shot question - does anyone here have an eccentric relative that taped everything off the TV and might have tapes from 1999?"}
{"title":"I took a picture of the sunset on the 110 last night and thought you guys might like it"}
{"title":"Shooting in n. hollywood."}
{"title":"What's in your Explore LA bucket list?"}
{"title":"Does this mean anything at all? Or nothing at all? (Carls Jr on 5th/Western)"}
{"title":"Looking to speak to someone who works at Beats Headphones for AMA (x-post /r/culvercity)"}
{"title":"Camping recommendations within two hours of LA?"}
{"title":"Did any of you get this tonight?"}
{"title":"Should I drive 15 minutes to jog in santa monica?"}
{"title":"La Tuna Canyon fire road leads to views of city, peaks, even the ocean"}
{"title":"LAPD shows a different side, protesters disrupt freeways, and struggling bookstores"}
{"title":"Hit-and-runs involving bicyclists surged 42% from 2002 to 2012 in L.A. County"}
{"title":"Anyone know where this church is? It's the cover of an album called Dylan's Gospel, recorded in L.A. and originally released in 1969."}
{"title":"Anyone know where this church is? It's the cover of an album called Dylan's Gospel, recorded in L.A. and originally released in 1969."}
{"title":"The Legalities of Protesting on the Freeway [Serious Q's and Discussion]"}
{"title":"Where to take boyfriend for New Year's?"}
{"title":"Koreatown's cool old buildings point to L.A.'s future"}
{"title":"Kinkisharyo Agreement Reached, Metro Rail Cars To Be Built in Palmdale"}
{"title":"New transit possibilities for Van Nuys and San Fernando Blvd"}
{"title":"Obese guy looking for a gym in the 90064 off pico / sawtelle"}
{"title":"[Meet-up]Last minute, tonight at 6pm: Movie drink-along: Spaceballs and Planes, Trains, and Automobiles"}
{"title":"Southern California to see biggest storm since February, forecasters say"}
{"title":"Best burger in Los angeles"}
{"title":"Actor-Model Hit By Car, Beaten On Thanksgiving While Trying To Deliver Meal To Friend"}
{"title":"My buddies and I were at The Victorian last night and some drunk dude got sucker punched. KO at 1:05"}
{"title":"PLEASE HELP: Missing friend in Hollywood, gone since 11/23"}
{"title":"Map of LA's urban oil wells."}
{"title":"going to staple center tonight. Coming from inland empire. Where can I park and catch the metro to staples. parking is expensive."}
{"title":"Most Expensive Home in US is a Los Angeles Listing Asking $195M [My Blog]"}
{"title":"What is on your bucket list that you need help with?"}
{"title":"Showerthought: Between the Kings, the Lakers, the Clippers, and concerts and events that go on in Staples, I'm impressed the schedulers are able to organize all these events."}
{"title":"Just seen ten fire trucks and seven ambulances pass by in hollywood, what the hell is going on?"}
{"title":"Looking for a wingman tonight."}
{"title":"Moving to LA in about a week and a half"}
{"title":"Spotted in the Big Lots parking lot on Sepulveda and National...anyone know the backstory? I am an artist making something for her loved ones based on these photos."}
{"title":"This Sunday no cars from 9-4 on Lankershim from The NoHo Red Line Station to the Universal Red Line Station and from there on Ventura all the way to Coldwater Canyon, closures start at 8am for CivLAvia"}
{"title":"Marion \"Suge\" Knight collapses in court room after $25 million for bail is set."}
{"title":"What is going on at the Beverly Center? Stand still traffic and NPR said there was a protest?"}
{"title":"Ban on fast-food eateries in South L.A. hasn't cut obesity, study says"}
{"title":"Fugitive ex-LAPD officer 'armed and dangerous'; $25,000 reward offered"}
{"title":"Residents of New Sunset and Gordon Luxury Apartments Must Move Out. May be Torn Town."}
{"title":"Ghost towns near LA?"}
{"title":"KVVU BLACKMAILING BY STEALIN MY DOG AND TAKING IT TO L.A"}
{"title":"L.A. to benefit from a new storm drain retrofit that allows rainwater to percolate into the ground rather than running off into the ocean. Shallow ditches near the sidewalk, called bioswales, act to filter the water before it re-enters the aquifer, and the sidewalks themselves are permeable."}
{"title":"Water Quality Test in my Apartment"}
{"title":"Tourist visiting LA for the first time"}
{"title":"Los Angeles renaissance: Why the rise of street vending reveals a city transformed"}
{"title":"Poor man's guide to LA?"}
{"title":"In DWP overbilling, customers file 2 class-action lawsuits | LA Daily News"}
{"title":"West LA-loud ambient noise outside?"}
{"title":"Saw a super bright UFO/meteor/shooting star over the 101 about an hour ago. Any idea on what it could be?"}
{"title":"The 25 Douchiest Bars in Los Angeles"}
{"title":"So am I the only one who just heard two massive booms?"}
{"title":"Lets have a love thread for the Taco Stand at Alcazar and Soto."}
{"title":"LAPD captain wants woman to stay in prison for role in brother's killing"}
{"title":"Where Is The best dessert I can find in LA?"}
{"title":"Survey Results for what r/LosAngeles thinks of Compton/Santa Monica/Beverly Hills"}
{"title":"KTLA won a Golden Mike (local journalism) last night with this piece. Westchester Resident accuse neighbor of feeding rats (xpost r/videos)"}
{"title":"13-Year-Old Arrested For Allegedly Stabbing Student To Death In East LA"}
{"title":"No surprise: Chargers Deny LA Stadium Deal"}
{"title":"No surprise: Chargers deny LA stadium deal"}
{"title":"So dry out right now"}
{"title":"LA Cookie Con is happening right now in Pasadena"}
{"title":"When did this happen? (Samsung Banner Gone From Wilshire Building"}
{"title":"So I want to go to school in LA"}
{"title":"Looking for someone to meet up and play chess in the Culver City area"}
{"title":"Did anyone here run the Griffith Park 1/2 Marathon today?"}
{"title":"Ok LA I've got the burrito list, and the burger list right here. how about we start a diner list?"}
{"title":"The Corpse of PennySaver came through my work today..."}
{"title":"Pizza!!! Reddit Global Meetup"}
{"title":"Where to rent a car for less than 40 dollars in LA if you're underage?"}
{"title":"Global reddit unofficial afterparty"}
{"title":"anyone have an extra desk at their office I can use to get work done for about a week?"}
{"title":"Come Experience Los Angeles With Us!!"}
{"title":"Package pickup in El Monte area?"}
{"title":"Any lady film makers and artists who would like to submit your work to this upcoming gallery event??"}
{"title":"This (suspected) d-bag stole a dark green Townie bike from our apt complex in North Hollywood last Wednesday 6/11/15"}
{"title":"Power out in Culver City?"}
{"title":"Landlord raised my rent 25%. I know it's illegal. How do I proceed?"}
{"title":"Working Angelinos be aware of the traffic delays for tomorrow's gay pride parade!"}
{"title":"Has anyone filed a Small Claims in LA Courts?"}
{"title":"El Monte man sentenced to 50 years in gang member&amp;#x2019;s slaying"}
{"title":"Anyone know the story behind this rundown mansion in Koreatown?"}
{"title":"Good Waxing Places?"}
{"title":"Where can I find a cool public koi pond in west LA?"}
{"title":"Los Angeles Raises Minimum Wage to $15 per hour."}
{"title":"PCH from Topanga tonight"}
{"title":"Los Angeles raises minimum wage to $15 per hour"}
{"title":"My souvenir from the Global Reddit Meetup Day"}
{"title":"living near gardena blvd in gardena?"}
{"title":"Anyone know where I can buy egg n spoon chocolate? Preferably in south bay"}
{"title":"California has a free, online, state-run program that will do your taxes for you, and Intuit has tried to gut it for years."}
{"title":"California DMV overlooking identity theft?"}
{"title":"$50 \"Water Tasting\" at DTLA restaurant"}
{"title":"California offers a free website for doing taxes online. Make sure your friends and family paying for HR Block or TurboTax have the opportunity to switch this year!"}
{"title":"Will be in LA with Family. Need suggestions of places to visit."}
{"title":"Everything's Jake/Jake Vintage - Vintage Suits"}
{"title":"L.A. area dog lovers, Corgis specifically, join us Saturday in Huntington Beach for Corgi Beach Day!"}
{"title":"Los Angeles DUI Attorney | DUI Lawyers in Los Angeles CA | 818-781-1570"}
{"title":"Photo Essay: Sikhs of Los Angeles"}
{"title":"LAPD might as well change their name to LSPD."}
{"title":"Los Angeles sommelier wants bottled water treated like wine."}
{"title":"I give this city a lot of shit, but videos like this remind me why I always rep my 213."}
{"title":"Need a jump!"}
{"title":"3 Masked Suspects In Custody After Allegedly Firing At LAPD Officers In South LA"}
{"title":"Feds raid alleged Chinese 'birth tourism' operations in California: Raids targeting alleged 'birth tourism' businesses shine spotlight on lucrative industry, court records say"}
{"title":"Why is it so impossible to get in touch with the Dept of Social Services?"}
{"title":"Two dogs just dumped in Baldwin Park..."}
{"title":"Looking for help in identifying two suspects that have been robbing some homes in my neighborhood (Montecito Heights)"}
{"title":"Time-lapse I shot of the storm rolling into NoHo this weekend."}
{"title":"KABC 7.1 over the air not 720p ?"}
{"title":"California will likely pass a law that eradicates \u2018personal belief\u2019 exemptions for vaccines"}
{"title":"Does anyone remember Randy's Hamburgers? They were around in the 90's and their peppery fries were amazing."}
{"title":"Honda and Toyota SUV owners"}
{"title":"Any good party's or drunken parades going on St Patrick's Day weekend?"}
{"title":"Oh shit! Burger Records is coming to L.A.!"}
{"title":"Hi I'm Alan Miller co-founder of Filter Magazine and now Travel with Purpose, I'm doing an AMA right now! We have your favorite bands guide to Los Angeles!"}
{"title":"Skid Row resident Chuck witnesses and reacts to slaying of \"Africa\" a mentally ill homeless man living on 6th and San Pedro - my channel"}
{"title":"The sky in Marina Del Rey last night was creepy"}
{"title":"Here's what you don't know about bike laws (QUIZ) | KPCC"}
{"title":"Ambassador Michael Oren heckled at University of California"}
{"title":"Dead Dog on 405 South"}
{"title":"Man killed by LAPD on skid row was convicted bank robber"}
{"title":"[MY EVENT] It's Past My Bedtime with Topher Harless and Allen Strickland Williams"}
{"title":"UCSC Students Block Major Highway Over Tuition Hikes"}
{"title":"Moving to L.A. for an internship this summer. Need apartment suggestions."}
{"title":"USDOT announces local hire initiative!"}
{"title":"Hermosa Beach to decide if it's an 'oil town'"}
{"title":"Eyes over DTLA"}
{"title":"Anyone know what is happening in Encino, near the Balboa and Ventura intersection?"}
{"title":"Kati Caliber - Outta My Head [Rock] rockin' out, havin' fun"}
{"title":"What's so great about LA?"}
{"title":"Train engineer dies of injuries suffered in Metrolink crash with truck"}
{"title":"[My Band] Guerrilla filmmaking in Eagle Rock, Highland Park and Atwater Village"}
{"title":"Sawtelle Gets Official \u2018Japantown\u2019 Designation"}
{"title":"L.A. County acts to curb child sex trafficking in some motels"}
{"title":"There's a synthesizer band playing The Mint LA March 23rd."}
{"title":"There's an LA synthesizer band playing The Mint in a few weeks. [My Event]"}
{"title":"Six burger joints that serve turkey burgers in LA"}
{"title":"Enrollment Of Non-Residents To Be Capped At Some UC Campuses"}
{"title":"L.A. County Firefighters rescue dog trapped between walls in West Hollywood"}
{"title":"My band is driving up from San Diego to play this FREE show with Weatherbox and friends in Fullerton. Come hang out with us?"}
{"title":"Best street vendors for vinyl records?"}
{"title":"21+ event at GlowZone LA on Sept. 4th!"}
{"title":"Anyone know any video game stores that break street dates?"}
{"title":"Movie theatres in LA where they don't allow snacks"}
{"title":"is this for real? - L.A. Mayor \"Caitlyn Jenner Should Carry Olympic Torch\""}
{"title":"Fire code and portable classrooms."}
{"title":"Rarely used roads?"}
{"title":"Just moved to LA, first time ever seeing skywriters!"}
{"title":"Los Angeles: Verve Coffee To Open West Hollywood Outpost"}
{"title":"Drone operator taken into custody after close call with LAPD helicopter in Hollywood"}
{"title":"LADWP urges customers to conserve power during heat wave"}
{"title":"Anyone know a good and cheapish moving company in the 909 area code?"}
{"title":"Help my friend go abroad for a good cause"}
{"title":"How can I tell if an \"All Access Pass\" includes Red Carpet?"}
{"title":"After iPad initiative failure, school supe says LA can\u2019t buy computers for all"}
{"title":"My band is looking for a drummer, and another keyboard/synth player"}
{"title":"I've lived in LA my entire life, and I've come to terms with how high the rent is, but I want to know what the rest of /r/LosAngeles is paying for rent"}
{"title":"What LA would look like if all the world's ice sheets melted"}
{"title":"The Great Red Car Conspiracy"}
{"title":"Dr. Dre\u2019s Secret (Sequined) History"}
{"title":"Los Angeles daily discussion thread 02/23/2015"}
{"title":"View of the intersection of Cahuenga Blvd. and Yucca St. The Halifax Hotel is seen on the northwest corner and the Capitol Records Building in the background, 1956."}
{"title":"Normal girls with BIG asses"}
{"title":"[Serious] Help Finding a Thread Posted"}
{"title":"Where to sell vintage artworks (X-posted in AskLosAngeles)"}
{"title":"Let's hang out tonight!"}
{"title":"RIP Scott Mason- Longtime KROQ Host &amp; Chief Engineer, helped revolutionize L.A. music play and digital broadcast"}
{"title":"Who here is a multi-generation Angeleno?"}
{"title":"Ten joints for Gryffindor!"}
{"title":"Ten joints for Gryffindor!"}
{"title":"Friend lost a new Nintendo 3DS in Santa Clarita."}
{"title":"Andersen's Restaurant - Los Angeles, 1954."}
{"title":"Feed the Puppet and help a local arts group! #feedthepuppet #puppetstriptease #hohoho"}
{"title":"Feed the Puppet telethon... live and webcast in Los Angeles next week. #onesockpuppettorulethemall"}
{"title":"AerialMatrix @ LaDroneExpo"}
{"title":"Resident here since birth, but I've never been to the snow. That changed today, and never left LA county!"}
{"title":"Drones over Los Angeles Sports Arena for DroneExpoLA"}
{"title":"strangest thing happened to me (more like to the car that crashed)"}
{"title":"Power outage in redondo beach/Torrance?"}
{"title":"Power usage?"}
{"title":"Subway Sucker Punch"}
{"title":"The sky is clear, and the Geminid meteor shower is happening RIGHT NOW. I just went outside and watched it for a while. It's pretty cool."}
{"title":"M\u00f3n \u0103n BBQ v\u00e0 ca kh\u00fac nh\u1ea1c hay cua Hariwon"}
{"title":"Super Mario World Los Angeles Metro Map [OC]"}
{"title":"Los Angeles' first Chinatown in 1892. It was in its heyday from 1890 to 1910, but an explosion of gambling houses, opium dens, and gang warfare led the government to condemn the land and it is now Union Station. [3540x2375]"}
{"title":"Los Angeles' first Chinatown in 1892. It was in its heyday from 1890 to 1910, but an explosion of gambling houses, opium dens, and gang warfare led the government to condemn the land and it is now Union Station."}
{"title":"Ringo Starr is moving to LA"}
{"title":"NFL acknowledges intent of multiple teams to move to Los Angeles"}
{"title":"Biker Meet-Up for a toy drive at the North Hollywood Sears"}
{"title":"Let's Collaborate On The Greatest \"Songs About Los Angeles\" Spotify Playlist Of All Time spotify:user:placeholder13:playlist:10qCMZ8wE4XPEoSIEhButu"}
{"title":"Let's Collaborate On The Greatest \"Songs About Los Angeles\" Spotify Playlist Of All Time"}
{"title":"Free Things to do in Los Angeles"}
{"title":"What it's like to land a commercial aircraft in the storms we've been experiencing"}
{"title":"I understand the whole drought issue but I Mean were moving to mars anyway right? Why not give this a go?"}
{"title":"Judge kills plan for towers near Capitol Records in Hollywood"}
{"title":"Rent Control Board says our rent should be less than what we're paying now. Do we get to pay less now?"}
{"title":"Where Everyone Is Taking Photos In Los Angeles"}
{"title":"How Much Will It Cost to Live in DTLA's Whole Foods Building? (Answer: $1,998-$4,110)"}
{"title":"Anyone need a ride out of LA? (East)"}
{"title":"Want to buy a home in LA, millennial? LOL"}
{"title":"15 year old girl chased in police pursuit, proceeds to rampage in Los Angeles park"}
{"title":"Free concert tonight @ The Luckman Fine Arts Complex! 7PM"}
{"title":"X-post from /r/jokes"}
{"title":"Big Parade LA is this weekend. An annual 2 (or 3) day guided walk of old neighborhoods."}
{"title":"From the Desert to the Sea to all of Southern California, a good evening."}
{"title":"Free Comic Book Day 2015 Los Angeles Guide (My site)"}
{"title":"Suggestions for tonight"}
{"title":"Tourist looking for trees in central LA."}
{"title":"Street Hookers in LA"}
{"title":"[Serious] Found a dog walking around the Westwood area - no chip, vet says he's been out for at least a day."}
{"title":"NYG owner Mara: \" I think there's going to be 1-2 teams playing in Los Angeles next year\" | LA scenarios coming into focus at NFL Annual Meeting"}
{"title":"Best nighttime overlook in LA?"}
{"title":"Parking in LA will bankrupt me"}
{"title":"CA Tinseltown Kickball starts tomorrow night in West Hollywood!"}
{"title":"Looking for someone that can teach Zulu fighting techniques"}
{"title":"[REPOST - Two more people needed, study is now paid] [WANTED] Participants for virtual reality study"}
{"title":"Roundup of all the new development under construction south of Hollywood Blvd [My Website]"}
{"title":"Waitress, Mother of Two, Run Down in Dine-and-Dash - Four people were arrested after a waitress and mother of two children was run down in an Orange County, California, restaurant parking lot when she confronted a group of customers that left without paying their $45 bill."}
{"title":"Is the Venice Beach drum circle still going on?"}
{"title":"The California drought is so bad that people are basically skiing on dirt in Tahoe"}
{"title":"Learn More About Our Phone Sex Service"}
{"title":"Homeless Hero Finds Baby"}
{"title":"Snuff Phone Sex"}
{"title":"LAPD Bomb Squad truck kills pedestrian."}
{"title":"The UCLA Hiking Club has to be rescued from SG Mntns."}
{"title":"Los Angeles daily discussion thread 02/09/15"}
{"title":"[My Blog] Setting Priorities: How to Keep First Things First"}
{"title":"LA Art Walk this week."}
{"title":"Temporary Tow Away Signs, Palms area."}
{"title":"So what are y'all up to for Valentine dates?"}
{"title":"Black Surfers in Southern California reclaiming the sport's cultural history; a little of L.A.'s past and present for Black History Month"}
{"title":"Secret Hollywood Set ETC! ETC! and Valentino Kahn 2/6/14 - Tropixx"}
{"title":"Authorities identify Calabasas Woman, 69, killed in PCH crash involving Bruce Jenner - Santa Monica Mirror"}
{"title":"Hazy Venice Sunrise this Morning"}
{"title":"Where do you live in LA and why do you love/hate it?"}
{"title":"Remembering The Trails, a Route 66 roadhouse in Duarte"}
{"title":"Snow hiking near LA"}
{"title":"Does Southern California Edison actually approve Solar NetMeter applications?"}
{"title":"Video emerges of Santa Monica High brawl with visiting Beverly High students - Santa Monica Mirror"}
{"title":"Does anyone here drive a Hyundai Tucson Fuel Cell?"}
{"title":"Where should I live? Will be working in El Segundo."}
{"title":"University of California, Los Angeles"}
{"title":"Frank Lloyd Wright's Hollyhock House at Barnsdall Art Park to reopen to the public this Fri, Feb 13"}
{"title":"Valentines Gift Ideas"}
{"title":"Best places to go camping/fishing for the weekend?"}
{"title":"Best arcades?"}
{"title":"Down Town"}
{"title":"Downtown LA apartment hunt, how did you find your place?"}
{"title":"[league of legends] anyone have any lcs tickets available for Saturday and/or Sunday"}
{"title":"Leaving LA, making bucket list"}
{"title":"4-year-old girl killed in Glendale hit-and-run"}
{"title":"Atkinson | Ackermann FREE Art show @ Somatic Gallery, Long Beach 08/22/2015"}
{"title":"Best Phone Carrier /Good Discount"}
{"title":"Santa Monica green company just raised $100 million at a $1.7 billion valuation"}
{"title":"I went to Sandstone Peak to catch the meteor shower and took this picture of the Milky Way"}
{"title":"Lost dog in Highland Park"}
{"title":"Central and 7th - tons of police"}
{"title":"NEED HELP FINDING GOOD SAMARITAN"}
{"title":"What are your favorite spots to eat in L.A.?"}
{"title":"Lost dog in Highland Park"}
{"title":"What's Culver City like?"}
{"title":"What a beautiful day for hike in Los Angeles"}
{"title":"I love the view of downtown from the Baldwin Hills Scenic Overlook"}
{"title":"\"Crips and Bloods: Made in America\" provides a detailed look about how LA city gov't created the ghettos of south-central LA, provoked the Watts rebellion, and created a warzone-like environment in which Crips and Bloods rose to power"}
{"title":"LAFD Paramedics Stress Hot Weather Safety"}
{"title":"LAFC and the Next Wave of MLS Designated Players"}
{"title":"Twilight Concert Series Improvement"}
{"title":"The Problem with Los Angeles' 'Shade Balls'"}
{"title":"Airlines Are Fighting for the 1% at LAX"}
{"title":"Volvo transmission in need of servicing, looking for shop recommendations"}
{"title":"What are some of your favorite ethnic food spots?"}
{"title":"SOUNDS LIKE FUN Presents: A Night Swim Listening Event for \"EVERYBODY'S BIG BROTHER,\" a new album by Chuck Inglish."}
{"title":"FREE Art Show- Atkinson | Ackermann \"Common Ground\" @ Somatic Gallery in Long Beach 08/22/2015"}
{"title":"Cool drone video of Los Angeles by Ian Wood"}
{"title":"Fire in Glendora hills"}
{"title":"This is how much you pay at Arclight Hollywood for parking!"}
{"title":"Totally Awesome Things to Do in LA - 12/22-12/28"}
{"title":"The skies at the Palmdale WalMart parking lot"}
{"title":"I usually just pick a lane and pray"}
{"title":"Here\u2019s How Much Safer Transit Is Compared to Driving"}
{"title":"Man killed in broad daylight this AM in Hollywood; 3 suspects sought (Brown F-150; N. Carolina plates)"}
{"title":"Mindful American: Episode 1- Los Angeles"}
{"title":"Formal attire restaurants?"}
{"title":"Earth Day is Every Day in the Ballona Wetlands"}
{"title":"Shake Shack Is Coming To LA"}
{"title":"Waze Has No Concept Of The Hell That Is LA Traffic"}
{"title":"Repost from r/videos : Charlie LeDuff on our water crisis."}
{"title":"Los Angeles Maritime Lawyer | 1-800-752-1503 | Jones Act Attorney Los An..."}
{"title":"John discusses the opening of the Skid Row Museum on Broadway - [my channel]"}
{"title":"Worst Ad Placement Ever"}
{"title":"Could a Water Pipeline from Alaska Save California from Drought?"}
{"title":"Roadtrip USA: My trip to LA [My Blog]"}
{"title":"Venice Beach neighborhood council seeks topless sunbathing for women"}
{"title":"Attention all hikers: Get out there soon while the wildflowers are in full bloom."}
{"title":"Beverly Hills Approves New Water Restrictions, Fines"}
{"title":"If you're in Palms and are wondering about the helicopters, it was another shooting / homicide."}
{"title":"More shit going down in Palms."}
{"title":"Where to find, \"Route 66\" soda's in Los Angeles?"}
{"title":"Unions want to raise costs for road work"}
{"title":"WeHo Looks to Light Sync to Fight Car Congestion"}
{"title":"Transgender People Could Get Sued For Using The 'Wrong' Bathroom Under Proposed Law"}
{"title":"Waze and the City of LA Partnering to Exchange Information."}
{"title":"Woman Discovers Her Brain Tumor Was Actually Her EMBRYONIC TWIN"}
{"title":"Mental Delusion Leads to Standoff in Silver Lake; No Crime Committed: LAPD"}
{"title":"LA's Mountain Lion Is A Solitary Cat With A Knack For Travel : NPR"}
{"title":"Please help us find out: who is ... CHASNOV ?"}
{"title":"Got a job in Santa Fe Springs.. where should I move to?"}
{"title":"Are there arcades near little tokyo?"}
{"title":"As you gear up for Episode 2 of Game of Thrones today, check out our band's ROCK version of \"The Rains of Castamere\". We are an LA band and also big fans of the show. We hope you enjoy it! Stay tuned until the end for a surprise. Cheers!"}
{"title":"Where can I watch the Spurs game tonight without any trouble?"}
{"title":"Jerk offs in a black Honda Civic harassed and kidnapped a sea lion from Dockweiler Beach this morning"}
{"title":"Looking for interesting bars/activities/destinations near Hollywood for bachelor party"}
{"title":"I'm looking to move out to LA in the next year or so."}
{"title":"A Transit-Themed World's Fair May Be Coming to Los Angeles"}
{"title":"Even Gordon Ramsay loves In-N-Out"}
{"title":"Heavy smoke spreading from fast-growing fire near Los Angeles"}
{"title":"What to do on 4/20?"}
{"title":"x-post from /r/technology Thieves breaking into key-fab enabled cars using power amplifier. [Mostly Toyota and Lexus vehicles]"}
{"title":"People watching on the redline"}
{"title":"It's getting ridiculous."}
{"title":"Does someone have connections at a woman's shelter (donating, not at risk)?"}
{"title":"Found Dog (Highland Park Area)"}
{"title":"Best tattoo artists in LA that can cover scars?"}
{"title":"Good pie wanted."}
{"title":"Disabled parking in LA"}
{"title":"Today reminded me of a sign I saw in Silverlake."}
{"title":"Let's help the LAPD find this thug that sucker punched a woman in Mid-Town."}
{"title":"Los Angeles schools won't be giving students their own devices"}
{"title":"Asian Americans in LA and college admissions"}
{"title":"A stretch of the ever-beautiful PCH in Malibu"}
{"title":"Am I going to be robbed...?"}
{"title":"West LA CC offering a fantastic sea kayaking night for $35, but is having trouble finding participants"}
{"title":"Anyone else hearing loud rumbling around 1:30AM?"}
{"title":"\u2018Sweet\u2019 Dog Recovering From Brutal Attack Near South L.A. Home; Required 1,000 Stitches | KTLA 5"}
{"title":"Free Floating Custom Glass Screen"}
{"title":"Los Angeles daily discussion thread - 10/13/14"}
{"title":"Ice Cube Celebrates the Eames (xpost r/architecture)"}
{"title":"Spookiest building in LA?"}
{"title":"Driving towards a foggy downtown on Wilshire this morning"}
{"title":"Finally some actual Fall weather!"}
{"title":"Saw there was a crash in Rancho cucamonga on the news and noticed something."}
{"title":"Car Stolen, please be on the lookout for this car / man."}
{"title":"The new renderings for the BLOC (formerly Macy's Plaza) in DTLA are looking GOOD."}
{"title":"Find harmony at the fare machine. How to reload an LA Metro TAP card, as explained in song."}
{"title":"Why did 11 unmarked police cruisers and SUVs just pass me on the 134?"}
{"title":"Know of any good Indian restaurants that you sit down on the floor on pillows?"}
{"title":"Metro Bus hit by gunfire on MLK at Vermont."}
{"title":"Going to Spago in a few weeks, how much should I expect to pay?"}
{"title":"LAPD military reservist fakes military leave. Is charged..."}
{"title":"Photographer Documents the Cast-off Sofas and Mattresses of LA"}
{"title":"Who is the most creative person you know in this city?"}
{"title":"Rule Change Lets Los Angeles Dream of Spires"}
{"title":"Support California Farm Workers by Marching on City Hall Tomorrow (8/22) at 9AM! (details and info on cyberactivism in comments)"}
{"title":"Free White Denim Tickets"}
{"title":"Banks @ The Wiltern tonight"}
{"title":"What do you pay for car insurance?"}
{"title":"L.A. regulation change on skyscrapers creates new design freedom"}
{"title":"Breaking a lease/rent agreement. (Apartment)"}
{"title":"View of Los Angeles from the Getty Center shot earlier today - one of my favorite places in LA!"}
{"title":"This saturday my bf is going to livestream &amp; play video games for 24 hours to raise money for Childrens Hospital LA through ExtraLife.org. Donate $10 and you can choose a game!"}
{"title":"View of Los Angeles from the Getty Center shot earlier today - one of my favorite places in LA!"}
{"title":"Custom Frameless Fireplace Glass Door"}
{"title":"Pink's celebrates 75 years with 75-cent chili hot dogs on Nov. 7 and Nov. 13"}
{"title":"Where is a good place to buy a karaoke machine? (don't upvote)"}
{"title":"Where can I buy those karaoke machines that connect to the TV??"}
{"title":"Meet Janae and Craig two random souls from LA"}
{"title":"Characters brawl on Hollywood Blvd - again."}
{"title":"Moving to LA and need some help."}
{"title":"Los Angeles daily discussion thread - 10/22/14"}
{"title":"Family of Four Mountain Lions Caught on Tape in Hills Above Glendora"}
{"title":"[My Music Project] Hi, I was born here in LA, and working on a music project. It's a mix of Psychedelic, Blues, and Hip-Hop. My EP has 500 streams so far. It's free, have a listen? The Golden Age - CEO Guillotine"}
{"title":"Hardwell Tickets for 11/08"}
{"title":"Free drinks tonight at Wokcano Santa Monica for Tech in Motion LA's Fall Tech Mixer!!"}
{"title":"Two Bit Circus is building the 'Carnival of the Future' in LA. Here's a video tour of their high tech workshop."}
{"title":"Has anyone here actually been attacked by a stingray?"}
{"title":"Alhambra teacher that enforced California ed. code 48907 placed on administrative leave"}
{"title":"Apparently, our marine layer has her own twitter account."}
{"title":"Relaxation Day in Bonoboville by Dr. Susan Block [Live][Sexuality][Documentary]"}
{"title":"Sunset/maltman homeless dudes feet?"}
{"title":"Who were the most powerful women (actresses no included) in Hollywood during the golden age?"}
{"title":"'Straight Outta Compton' Not Playing In Home City Due To Lack Of Theater"}
{"title":"Contesting a ticket: Share your stories"}
{"title":"New Year's Eve at The V Lounge"}
{"title":"How To Get Rid Of That Pesky Christmas Tree Now That It Has Served Its Purpose: LAist"}
{"title":"Okay, LA, I need clothes -- where are the best Columbus Day Weekend sales this weekend?"}
{"title":"Venice scumbag crimes essentially linked to LA City cloudy homeless laws..."}
{"title":"Looking for someone who has narcolepsy with cataplexy in Los Angeles"}
{"title":"This dude has had his Smart Car \"stopped\" here for at least 45 minutes. Blocking rush hour downtown traffic."}
{"title":"LAPD falsifies records with \"ghost cars\" to lie to the city/tax payers about staffing and neighborhood police coverage..."}
{"title":"[WANTED] Uncle Acid Ticket for 10/11"}
{"title":"Need to find a decent tailor."}
{"title":"LA is the Third Best US City For Public Transit Commuting"}
{"title":"Are there any places within 2-ish hours driving distance from LA where you can see the autumn leaves changing colors like on the east coast?"}
{"title":"Dear Damanda..."}
{"title":"So, ugh... What's your address again?"}
{"title":"Landlord (or manager or someone) entered my apartment without notice. Is there anything I can do?"}
{"title":"19 year old visiting alone for monday night. What is there to do here?"}
{"title":"So, two things..how long until we get it together and legalize"}
{"title":"Santa Monica Airport - Stop the financial impropriety by out of control City Hall"}
{"title":"Here's my first edit from the CicLAvia footage this weekend! Main hub to East LA. \u2022 /r/BikeLA"}
{"title":"My building in DTLA shakes. Anyone know why?"}
{"title":"PSA- Megabus has finally released seats for Thanksgiving travel- BUT, right now, it's still only about 30-50 bucks cheaper to fly instead (to the Bay Area)"}
{"title":"Los Angeles woman freed after spending 17 years in prison for murder she didn't commit | NY Daily News"}
{"title":"PSA- Megabus has finally released seats for Thanksgiving travel- but right now it's still only $30-50 bucks more to fly instead (San Francisco/Oakland)"}
{"title":"Remember the Reddit Howl at the Moon takeover? WE have 150+ signups and it was amazing. We're making it a monthly thing and we want to know when you can go! Vote please!"}
{"title":"$50,000 Reward Offered in Fatal Shooting of Transgender Woman | NBC Los Angeles"}
{"title":"Just A Reminder: JPL Open House This Weekend"}
{"title":"Can Uber drop people off at LAX these days?"}
{"title":"[My events] Local author to hold book readings in South Bay and Long Beach"}
{"title":"Man Who Fatally Stabbed Woman On Hollywood Walk Of Fame Gets 12 Years"}
{"title":"New modern sleek-looking cabins are coming to California state parks"}
{"title":"L.A. Forum Question"}
{"title":"The Music Center has a player piano activated by user motion on display this weekend at Swan Lake."}
{"title":"Uncle Acid and The Deadbeats, Sold out show tonight. I have a ticket available."}
{"title":"[Meet-Up] Tuesday 10/14/2014 at 10PM or '24' Fans &amp; Workaholics Fans at the Hollywood Improv on Melrose with Adam Devine, Mary Lynn Rajskub and Comedy Central's Jeff Ross!"}
{"title":"Dear LA Tourism Board: We need to talk about intellectual property"}
{"title":"If you live in LA and like comedy, this looks pretty dope..."}
{"title":"The 2003 documentary \"Los Angeles Plays Itself,\" about LA's portrayal in the movies, will be released on DVD this week. Here's an interview with the director."}
{"title":"Dead LA man who had 1,200 guns, underwater car identified; believed to be \u2018part alien\u2019 secret government worker"}
{"title":"Interesting LA Times opinion piece: How to make Los Angeles more affordable and more livable"}
{"title":"Rough Roads Cost L.A. Car-Owners $1000/Year"}
{"title":"Very cool: WIRED's Best &amp; Worst Foods for California\u2019s Drought"}
{"title":"In desperate need of fast Internet :("}
{"title":"Anyone here that rides motorcycles interested in a little trade?"}
{"title":"Thoughts on South Bay area?"}
{"title":"Whats going on at Hill between 6th and 7th?"}
{"title":"Doing research on Little Tokyo in the 70's. Saw some cool pictures. Thought I'd share."}
{"title":"McDonalds on Century and Prarie is taking forever with my food, anyone know whats going on?"}
{"title":"UFC 190 + low-stakes poker cash game next Saturday 8/1 @ 6pm"}
{"title":"Construction around 4th and Kingsley?"}
{"title":"Moved to California about a year ago some questions!"}
{"title":"Shots fired in Studio City?"}
{"title":"Evacuation from shopping area at Ventura Blvd and Laurel canyon due to man with gun."}
{"title":"When apartment hunting, do they tell you if you DON'T get the place you applied for?"}
{"title":"Active shooting in Los Angeles"}
{"title":"Scuba diving shore-dive recommendations near LA"}
{"title":"Gunman opens fire in Studio City, is fatally shot by LAPD officers"}
{"title":"Man on a mission: Carl Schafer works to get California to enforce its own arts education law"}
{"title":"'He Could've Shot Me': Witness Describes Studio City Gunman"}
{"title":"Anyone going to TV on the Radio at the Annenberg Space for Photography tomorrow (7/25)?"}
{"title":"Places to see Pacquiao v Mayweather"}
{"title":"[x-post from /r/Albuquerque] The Unidentified Albuquerque Jane Doe; Can you offer any new information about this cold case? Possible LosAngeles connection."}
{"title":"18 Beautiful Places You Probably Didn't Know Were In Los Angeles"}
{"title":"Los Angeles weekend discussion thread 04/24/15 - 04/26/15"}
{"title":"In-N-Out is headed to El Segundo (Sepulveda &amp; Mariposa)"}
{"title":"SNL's \"The Californians\" is back for an encore (and Betty White hooking up with Bradley Cooper)!"}
{"title":"Electric car at Ye Alpine Tavern, Mount Lowe Railway, Mount Lowe, California, 1913, see comments for full description."}
{"title":"Only a few more weeks of winter!"}
{"title":"Best places to eat on 101 + 1"}
{"title":"Westboro Baptist Church coming to the LA area Sunday Feb 22nd"}
{"title":"Someone recommend a good brunch place for a moderate sized group in Santa Monica around 12pm?"}
{"title":"[Housing]Looking for 1Bedroom 1Bathroom in Silverlake"}
{"title":"California DMV Expanding to Accommodate llegal Aliens"}
{"title":"Does anyone miss Big Boy on the radio?"}
{"title":"Los Angeles has Cancer [X-post from /r/urbanplanning]"}
{"title":"Hey /r/LosAngeles. I thought that it would be interesting to see what source of traffic information (Waze, Google Maps, etc.) you guys use for during your commute! Take this strawpoll and let's see!"}
{"title":"Hey, /r/LosAngeles, it's poll time: What source of traffic information do you use for commuting? (Google Maps, Waze, etc.) Poll link in description."}
{"title":"Adventures For Today\u2026 Taking Care of VIP's At Sony Pictures In Culver City &amp; Fox Studios on Pico! When Needed On Set, We'll Get You There! (866) 319-LIMO"}
{"title":"Anyone have an extra ticket to ASC awards?"}
{"title":"Registering an out of state vehicle."}
{"title":"Southern California Linux Expo is next weekend (Feb 19-22) at Hilton Los Angeles. Great opportunity to meet with people who work on linux."}
{"title":"DWP Overcharges Customers With \"Secret\" Formula"}
{"title":"[Serious] Angelenos, I'm thinking of maybe changing phone carriers and I'd like to hear your experience with T-Mobile."}
{"title":"My friend and I are moving to LA next year for the hell of it, where should we look for cheap apartments?"}
{"title":"Anyone see the red moon tonight??"}
{"title":"2 dead at HARD Summer"}
{"title":"Anyone wanting to play Flag Football?"}
{"title":"Man Shot During Fight In Westwood Village"}
{"title":"This is my first time hearing about this. Anyone know if it's real?"}
{"title":"Planned US ivory rules not fazing Chinatown shops: San Francisco and Los Angeles make up two of America's top three hubs for ivory sales. Most dealers in the state rely on intentional mislabeling to cover up the illegal sale of recently poached African elephants, ivory experts say."}
{"title":"The namesake of the Garnsey neighborhood of Los Angeles? (Burbank and Whitsett on Google Maps)"}
{"title":"Best Employment Sites?"}
{"title":"Self-Driving Cars Would Make LA the Greatest City"}
{"title":"How to figure out public transit"}
{"title":"Los Angeles daily discussion thread 8/3/15"}
{"title":"LA wouldn't be the same without this hardworking immigrant"}
{"title":"Los Angeles daily discussion thread 7/6/15"}
{"title":"I'm looking for all the pool parties/ night swimming events in LA"}
{"title":"How would you spend 5 days in LA?"}
{"title":"Totally Awesome Things To Do In LA - 7/6-7/12"}
{"title":"Favorite Foods From Los Angeles Restaurants"}
{"title":"Lost One Plus One Phone"}
{"title":"Southland - a Rye &amp; Mezcal cocktail inspired by Los Angeles [my video]"}
{"title":"Insider Perspectives on LA: Griego, Smith &amp; Rosenfeld Opine"}
{"title":"Want to grab a drink tomorrow?"}
{"title":"4th of July as seen from above Downtown LA. Explosions everywhere!"}
{"title":"Sunday afternoon at Echo Park"}
{"title":"Los Angeles County Has One Of The Highest Voter Voter Registration Rates in the State"}
{"title":"Swan Chicks?"}
{"title":"Exploring the Eerie Abandoned Old L.A. Zoo"}
{"title":"[HIRING] Desktop Support/Help Desk Specialist - Level ONE. Mid-Wilshire area. Law firm experience strongly preferred."}
{"title":"Dusk at Joshua Tree National Park"}
{"title":"The Skid Robot Project by Skid Robot - A kickstarter about Skid Row."}
{"title":"KROQ Fires Lisa May and Doc on the Rock"}
{"title":"Charlie Brown Farms Recommendation?"}
{"title":"More than 80% of LA County Residents are Registered to Vote"}
{"title":"Well if no one else is going to say anything than I will. What the F* is up with Jared Leto's crotch?"}
{"title":"Kaaboo Del Mar Music Festival! September 18-20th"}
{"title":"Everything in L.A. is changing, including our street gangs. A Q&amp;A with Sam Quinones."}
{"title":"Average LA gas prices above $3 for first time since Dec. :("}
{"title":"There is a bench ad for a website that helps people who haven't gone to college find jobs."}
{"title":"Power Outage - Wilshire &amp; Centinela"}
{"title":"Is Koreatown the future of LA?"}
{"title":"Tonight's sunset should be amazing."}
{"title":"Spring Street"}
{"title":"The New Great Migration: What's Pushing the Bay Area to Los Angeles?"}
{"title":"Totally Awesome Things to do in LA - 2/23-3/1"}
{"title":"LA rent prices by neighborhood last month"}
{"title":"Mayor Garcetti Is Actually Refunding Those Bogus Parking Tickets: LAist"}
{"title":"Zocalo Public Square profiles of LA transit commuters :)"}
{"title":"EMDR on the eastside?"}
{"title":"You can thank the rain for this one"}
{"title":"Need help getting 3 lcd monitors and a mounting system from LA to Ohio"}
{"title":"Any brewery employees out there?"}
{"title":"Ron Finley: Guerilla Gardener. Ron grows a nourishing food culture in South Central L.A.\u2019s food desert by planting the seeds and tools for healthy eating. Very inspiring."}
{"title":"Thanks for the rainbow!"}
{"title":"It doesn't even rain for 24 hours straight and it's a mess already."}
{"title":"Okie dokie"}
{"title":"UberPool in LA"}
{"title":"High-Speed Pursuit on KTLA 5! Already hit one pedestrian."}
{"title":"Street Artist Madsteez Mural Unveiling @ Los Angeles' Mondrian"}
{"title":"Thinking of moving to LA and opening a single screen theater"}
{"title":"Chinese kindergarten class in LA, circa 1920"}
{"title":"Downtown LA after the rain."}
{"title":"suspect leads cops on a high speed chase through palmdale, ends chase by hotboxing his truck"}
{"title":"suspect leads cops on a high speed chase through palmdale, decides to hotbox his truck before surrendering"}
{"title":"SoCal men sentenced to prison in terrorism plot"}
{"title":"Anywhere to sell gently used books in LA?"}
{"title":"Los Angeles Conservancy's Last Remaining Seats: \"How to Succeed in Business...\" opening night screening"}
{"title":"Drug charges dropped for 14 people in SoCal, other cases in jeopardy, thanks to corrupt FBI agent who stole $100,000 in seized money for plastic surgery, Las Vegas trips, and cars."}
{"title":"Husband [38M] wants to quit the UK to live in Los Angeles and wants me [39F] to go. I don't really, but he refuses to see my POV, arguments ensue. Where do we go from here? [Long post/serious advice]. [x-post from /r/relationship_advice]"}
{"title":"Anyone have Paul F Tompkins tickets to part with?"}
{"title":"best chimichangas in Los Angeles ?"}
{"title":"South LA gunman murders teen with special needs in front of mother at a carwash after the teen refused to give up his red shoes and denied being part of a gang associated with that color."}
{"title":"What's can I watch the Champions League finals? ( I'm in Boyle Heights )"}
{"title":"One Tacolandia ticket for today."}
{"title":"Next Week: Pasadena Gold Line will run altered off-peak service due to maintenance (Mon-Thurs, 8 AM-2:30 PM)"}
{"title":"Going to LA for E3, on a budget, really need some helpful advice or just some help."}
{"title":"Blue Bottle Coffee Coming to Bradbury Building in Downtown LA"}
{"title":"LAPD finds officers were justified in fatal shooting of mentally ill man, sources say"}
{"title":"Ocean Front Walk druggy psycho who purposely drove his car into pedestrians murdering one and hurting 17 others is convicted..."}
{"title":"LA Bar Advice (Starting the \"Passport Program\")"}
{"title":"A map of Magic Mountain from 1988 (x-post r/rollercoasters)"}
{"title":"Kid friendly hikes"}
{"title":"Call to Action: Take 2 Minutes to Support Hyperion Bridge Sidewalks at City Council June 9"}
{"title":"LA bucket list-need suggestions"}
{"title":"Patience with City Hall on Homeless issue wearing thin."}
{"title":"RIP BB King"}
{"title":"Beautiful Los Angeles at Night"}
{"title":"So I got on the bus this morning and a guy had a potted plant with him."}
{"title":"50 LA tech startups to watch in 2015"}
{"title":"Vacationing in 9 days in Venice Beach, looking for some more ideas of what to do."}
{"title":"Looking up the palm tree-lined residential area of Normandie and Franklin Avenue with the Griffith Park Observatory in the far background, 1939."}
{"title":"PSA: Just turn your headlights on"}
{"title":"Los Angeles weekend discussion thread 05/15/15 - 05/17/15"}
{"title":"New HOV lanes on I-5 in the San Fernando Valley finally complete from Buena Vista to the 14"}
{"title":"Am I legally obligated to pay a parking ticket of this nature?"}
{"title":"Indiana, other states take aim at slow drivers in the left lane"}
{"title":"We need this here: \"More States Fine Drivers Who Dawdle in the Left Lane\" (xpost from r/news)"}
{"title":"The border between LA and Beverly Hills"}
{"title":"US Judge Rules Against Family Over Nazi-Seized Masterpiece."}
{"title":"Stolen vehicle - Red Toyota Tacoma (8H06203) with no tailgate"}
{"title":"Is there a site other than Google (and surprisingly not here) that has live music listings around the area?"}
{"title":"Waiting for mean girls to start"}
{"title":"Quick PSA, for those going to the Global Meetup this Saturday, consider taking the metro rail. The red/purple line stops right near the center of the park."}
{"title":"Weekly What To Do: So Much Film Blargh! at the Global reddit Meet-Up Day"}
{"title":"Free ticket to Nosaj Thing, Clark tonight @ The El Rey Theatre"}
{"title":"Custom Wristband Printing in (West) Los Angeles"}
{"title":"36 hours in LA, what to do?"}
{"title":"Looking for nature in all the wrong places."}
{"title":"4th of july. What should a Nowegian family do?"}
{"title":"Graduating Senior"}
{"title":"Both Albertson's in Palms are being converted to Haggen's at the end of April, as part of a massive turn-over from SoCal up to the Pacific Northwest."}
{"title":"Los Angeles Public Library wins top award for cultural institutions"}
{"title":"[REQUEST] Pitch Perfect 2 Premiere"}
{"title":"Question re: California motorcycle driving test"}
{"title":"Venice Neighborhood Council recommends city of LA allow topless sunbathing"}
{"title":"The Try Guys Try Magic Mike Stripping"}
{"title":"Amazon Destinations handpicks hotels, launches in LA, NY, Seattle"}
{"title":"Correctable violation. Designated inspection installation agent? What do I do?"}
{"title":"Palms Shootings Town Hall @ 7pm Mon 4/27 at 3376 Motor Ave -- Hosted by Palms NC w/ LAPD"}
{"title":"L.A. must do list."}
{"title":"Hypocrisy."}
{"title":"Anyone know which feed for the police scanner for Baldwin Village area?"}
{"title":"Searching for a used car"}
{"title":"Authorities Arrest Middle School Cyberbully For Sending Death Th - Los Angeles News"}
{"title":"Best Screenprinting (palms) westside?"}
{"title":"Authorities Arrest Middle School Cyberbully For Sending Death Threats - Los Angeles News"}
{"title":"Poachers targeting baby sharks along Southern California coast"}
{"title":"Anyone else's time warner Internet go out just now?"}
{"title":"Need help pranking my friends"}
{"title":"Massage therapist charged with sexually battering clients at parlor"}
{"title":"$5,000 Reward Offered in Search for Sea Lion Pup Abducted From Dockweiler State Beach"}
{"title":"117 houses and retail to be built in Frogtown, along LA River"}
{"title":"Is it worth visiting LA with no access to a car?"}
{"title":"Los Angeles daily discussion thread 04/23/15"}
{"title":"X-post from r/Motorcycles. Please report any info on this rider who ran another bike off the road at ACH then fled the scene?"}
{"title":"Community - Bringing People Together"}
{"title":"Nightcrawler on Netflix"}
{"title":"Los Angeles daily discussion thread 06/16/15"}
{"title":"Qdoba BOGO Coupon 6-16 and 6-17 - Friend Required :("}
{"title":"It's getting hot out - amazing ice cream spot in Culver City, Atticus Creamery &amp; Pies [My Blog]"}
{"title":"California Court Rules for City in Affordable Housing Fight."}
{"title":"L.A. On The Verge"}
{"title":"Santa Ana Mayor Named in Pot Shop Raid Lawsuit. It alleges the city solicited $25,000 payments and gifts from marijuana dispensaries which would guarantee businesses would be granted a license in a lottery system. It also claims police were used to shut down operations that did not pay up."}
{"title":"Could Innovation Change Pompous SoCal Water Wasters into Water Producers?"}
{"title":"Friendly kitten in need of a loving home"}
{"title":"Dog vaccinations in LA"}
{"title":"Reasons Why Everyone in San Francisco Hates LA"}
{"title":"Good Hip Hop Love Songs Don't Always Come From Los Angeles... Check this kid out"}
{"title":"Los Angeles weekend discussion thread 06/05/15 - 06/07/15"}
{"title":"Why does everyone hate on the valley?"}
{"title":"Random Photos From My iPhone In Los Angeles"}
{"title":"Eviction laws in LA?"}
{"title":"Boston PD in LA????"}
{"title":"Where To Get Free Donuts On National Donut Day!"}
{"title":"Apartment help!"}
{"title":"This is the Mayor of Bluffside Drive, and He's Not Pleased That You Are Going (x-post /r/aww)"}
{"title":"Photos from the Halloween Party!"}
{"title":"Why do Los Angeles drivers run so many red lights?"}
{"title":"Uber driver threatened to kill me &amp; my friends on Halloween...resulted in $43 ride that lasted 0:56 minutes"}
{"title":"Looking to buy Hello Kitty convention passes."}
{"title":"Recommendations for a water damage/mold/tenants rights lawyer?"}
{"title":"Bougie people in LA"}
{"title":"Long shot: any pain patients here?"}
{"title":"LA after the rain"}
{"title":"LA after the rain"}
{"title":"Mayor Eric Garcetti is considering an initiative designed to give pedestrians a leg up on motorists"}
{"title":"Mayor Garcetti considering initiative to install more diagonal crosswalks"}
{"title":"Please consider voting for Bobby Shriver. Here is his stance on animal welfare and positive shelter reform."}
{"title":"What would be the best service to transport a stationary bike from Van Nuys to Hollywood?"}
{"title":"Arrests in Halloween accident that killed 3 teen girls"}
{"title":"Arrest made in killing of North Hollywood tattoo artist"}
{"title":"LA County boosts arts budget by $54 million | In June of 2014, the County Board of Supervisors announced this \u201csupplemental budget\u201d was the result of several hundred million dollars that was left over from 2013"}
{"title":"Traditional Mexican Breakfast at Loter\u00eda Grill - Loteria Grill"}
{"title":"Post from r/assistance, homeless with 70 y/o mom as of today. Need some advice."}
{"title":"Beware of staged car crash scams."}
{"title":"Male calico kitten available"}
{"title":"Submerged in the Valley"}
{"title":"LA Times' endorsements for this Tuesday's elections."}
{"title":"Find your polling location for this Tuesday's election."}
{"title":"Can't be the only one"}
{"title":"Save Halloween Harvest Festival at Pierce Farm Center"}
{"title":"Missing girl by Northridge"}
{"title":"Apartments / Rentals with exposed brick?"}
{"title":"LA after the rain at night"}
{"title":"Here Comes the Rain Again (and Finally)"}
{"title":"Fish Market Chinatown LA - YouTube"}
{"title":"The Hello Kitty Cafe is Coming to California in 2015"}
{"title":"Gathering for French Charlie Hebdo Attack"}
{"title":"Lost Dog on 1/7/15 near Riverside Dr. &amp; Fletcher Dr."}
{"title":"Caught on Video: 'Vicious' Robber Attacks Lone Women in Koreatown Apartment Elevators"}
{"title":"The Future of L.A. Theater's 99-Seat Plan Could Be Decided This Month"}
{"title":"Visiting February 1st, 2015 and I need some advice"}
{"title":"Power outage in Silverlake?"}
{"title":"Catalina Excursion"}
{"title":"Catalina Excursion: Catalina\u2019s population is quite small, and the island remains virtually untouched...."}
{"title":"Senator Barbara Boxer to retire in 2016."}
{"title":"LCT Limousine Show 2015 In Las Vegas"}
{"title":"these nearby moments are the real reason to live here"}
{"title":"MUST READ ON THIS FINAL UPDATE: Class Action Lawsuit Against Los Angeles Parking Violations Bureau"}
{"title":"TIL: The LA Parking Violations Bureau is actually run by Xerox. Jeff Galfer has spent 4 years trying to get a Class Action lawsuit started for us and has given up due to the threats from Xerox has made and the roadblocks run by judges with conflict of interests."}
{"title":"TIL: The LA Parking Violations Bureau is actually run by Xerox. Jeff Galfer has spent 4 years trying to get a Class Action lawsuit started for us and has given up due to the threats from Xerox and the roadblocks run by judges with conflict of interests."}
{"title":"Uber / Lyft / Sidecare drivers, what's it like in LA?"}
{"title":"Frugal LA??"}
{"title":"General Dogon And Other Skid Row Residents Speak At LA Police Commission Public Comment Period Last Week - [my channel]"}
{"title":"Where to Get Your Corned Beef and Cabbage Fix in L.A."}
{"title":"VIDEO: Four Cars Totaled In Huge Early Morning Alley Fire In Santa Monica"}
{"title":"Metro studies new Arts District station which could open by 2024"}
{"title":"Los Angeles Willing to Pay Its Highest Price Ever for Water"}
{"title":"Calif. Water Officials To Vote On New Conservation Measures"}
{"title":"Texas Redditor here. I'm going to LA next week and I have some questions."}
{"title":"Walking around Beverly Hills why do all the woman who are 40+ look like this?"}
{"title":"Some neat maps showing how big LA is vs. other cities in the US &amp; around the world"}
{"title":"Someone snuck these fake books onto the shelf of a West Hollywood bookstore in the self help section today."}
{"title":"Are you a U.S. Military Veteran with deployment experience? We need your help!"}
{"title":"Los Angeles is the Most Unaffordable Large City in America for Buying a Home."}
{"title":"Can we stop screwing around and accept that animal agriculture is the problem? Link inside, USGS says CA animal agriculture uses over 125,000,000 gallons of water a day."}
{"title":"Should LA Save a Beautiful Symbol of a Terrible LAPD?"}
{"title":"[Top 25 douchiest bars in LA.](http://www.complex.com/pop-culture/2012/02/the-25-douchiest-bars-in-la/)"}
{"title":"Is anyone on Time Warner internet in Sherman Oaks?"}
{"title":"Free Bowling Tonight and Every Monday Night at Lucky Strike Hollywood for Service Industry Workers."}
{"title":"Any Recommendations for dineLA?"}
{"title":"Tonight: Discussion Forum on \"Bringing Back Broadway\" by project director Jessica Wethington McLean at the LA Central Library - No RSVP Required"}
{"title":"LACMA just got a half billion dollar donation of art, including works by a lot of impressionists, Monet, etc. Check out some of the paintings here."}
{"title":"The mayor apparently reads /r/LosAngeles... pretty sure this Aragorn meme was posted here originally."}
{"title":"American Cinematheque: Actor Ralph Fiennes in person! THE GRAND BUDAPEST HOTEL (2014) screens at the Aero Theatre in Santa Monica on November 9."}
{"title":"Left turns in LA suck! I thought I'd keep it local with redditmade"}
{"title":"Smog Woes - need help"}
{"title":"Massive Hollywood project sits atop quake fault, California says"}
{"title":"Here is the Map of the Hollywood Fault to Terrify You"}
{"title":"Co-Ed Softball Team on Westside Needs Female Players!"}
{"title":"Small Black dog Found- Chandler and Whitsett"}
{"title":"My grandpa's memorial fundraiser"}
{"title":"Crenshaw&amp;PCH Blocked off in Torrance?"}
{"title":"People of Los Angeles! A screening of the Trailer Park Boys new movie Swearnet will happen in December! Tickets will go on sale November 18th, and all attendees will receive a month access to Swearnet for free! Let's fucking do this!"}
{"title":"Free Screening @ 6:00AM El Capitan Theater for Big Hero 6"}
{"title":"Just your typical LA rush hour"}
{"title":"Globally Acclaimed Street Artists Sheryo &amp; The Yok painting in DTLA (Art in Times Square &amp; around the world)"}
{"title":"Mystery garden on Argyle"}
{"title":"Does anyone want to go to the Black Keys show tonight at the Forum?"}
{"title":"Just another day on Broadway"}
{"title":"Australian here, coming to visit your city in September, what are some places I should visit, and what do you love about your city the most?"}
{"title":"Three potential designs revealed for LA Convention Center Expansion"}
{"title":"Stacked some images of the new Wilshire Grand Tower"}
{"title":"Los Angeles daily discussion thread 05/20/15"}
{"title":"[my podcast] this week Historic Core BID Executive Director Blair Besten talks about her work, and living downtown. Also DLANC wants community input on street vending at an upcoming hearing"}
{"title":"(How to) Save water/lower your water bill"}
{"title":"Seeing 3LAU tonight at Exchange LA , thinking of taking uber to the show"}
{"title":"I Need The Service Of A God Fearing Nanny/Babysitter (CL)"}
{"title":"Los Angeles daily discussion thread 05/21/15"}
{"title":"Wingmen of LA, what are some cool first date ideas around west Hollywood?"}
{"title":"Vacationing in LA"}
{"title":"Dodger AND Doyer Dog go INTL on r/food. We made it fam! [X-Post]"}
{"title":"\"You can now choose to ride uberX with a Spanish-speaking driver in Los Angeles\""}
{"title":"os Angeles: A Uber Driver Gets a Tip of a Bag of Marijuana and Cigar! What Happen Next?"}
{"title":"Need some help pronto - I may have been fucked over when I sold my last car"}
{"title":"CBS2 Investigation: DWP Union Boss Responds To Recent City Audit"}
{"title":"11 Wild and Epic Moments at L.A.'s Olympic Auditorium"}
{"title":"Favorite study spots?"}
{"title":"I took a photo of DTLA with my drone"}
{"title":"The monster Mad Men filming map of Los Angeles"}
{"title":"Tiki-Ti bar to reopen Friday: Indefinitely closed didn't last long :)"}
{"title":"[Meet-up]$20 Texas Hold'em home poker game this Sunday 5/24 at 4:30pm, new players welcome :)"}
{"title":"[Meet-up]Wii / N64 / PS1 / SNES videogame party this Friday at 7pm"}
{"title":"Ex-OC Sheriff Michael Carona Leaves Prison, Returns Home"}
{"title":"Do you have an earthquake kit? What's in it?"}
{"title":"[Hiring] - 6 chapters of notes for $40"}
{"title":"Not gonna lie. As a stoned Californian watching this preview in 3d, it was pretty terrifying."}
{"title":"Tonight: Pitch Perfect 2!"}
{"title":"Free Notary Services Anywhere?"}
{"title":"Los Angeles daily discussion thread 05/11/15"}
{"title":"Tickets to KROQ Weenie Roast Saturday May 16th"}
{"title":"Worst of LA with Daniel Graves (of Aesthetic Perfection) (Worst bars of L.A)"}
{"title":"Wal-Mart Bottled Water Comes From Sacramento Municipal Supply"}
{"title":"I was just hanging out in my favorite Highland Park bar looking for a wi-fi signal while drinking a local microbrew &amp; stroking my lumberjack beard when suddenly..."}
{"title":"Los Angeles Criminal Defense Attorney | (818) 781-1570 | Criminal Defens..."}
{"title":"Plane just made a hard landing at LAX"}
{"title":"Where can I milk a cow or goat in Los Angeles?"}
{"title":"Pulling Back The Curtains...Of My Shower"}
{"title":"Totally Awesome Things To Do In LA - 5/11-5/17"}
{"title":"RIP artist Chris Burden. In the 1970s, he bought commercial air time on late night TV broadcasts to show absurd performances, which included himself crawling through glass."}
{"title":"Mormon Temple in West L.A. lets its landmark lawn turn brown."}
{"title":"Los Angeles DUI Attorney | (818) 781-1570"}
{"title":"What's up with KCRW this morning?"}
{"title":"Commute to UCLA? Ride bicycles with a group! Multiple starting locations for rides to UCLA this week!"}
{"title":"PC Gaming Cafes?"}
{"title":"What's going on in Beverly hills. A nearly endless stream of fire trucks and ambulances are rushing north on Robertson."}
{"title":"\"Pico &amp; Sepulveda\" (Felix Figueroa, c.1940)"}
{"title":"10,000 gallons of water flood West Hollywood after main pipe breaks"}
{"title":"Was cruising around dtla when I stumbled across this gem."}
{"title":"West Side Auto Mechanic for German car..."}
{"title":"[Meet-up] Local Social Media Freelancers and Beer"}
{"title":"Dark Chocolate Covered Red Velvet Donut (From DK's, Santa Monica)"}
{"title":"THE RISE: Building Downtown Los Angeles; an AWA+D panel event with Frances Anderton"}
{"title":"Photos: Whoa, There's A Metro Train In Westwood"}
{"title":"RIP Chris Burden: The Artist Who Made Public Art Truly Exciting"}
{"title":"Any LA billiards players?"}
{"title":"His Holiness grazing on Hollywood Blvd today."}
{"title":"Hit and Run PSA Appears on Pasadena Billboard"}
{"title":"Tried to go sailing in Marina Del Rey, wound up at the top of a 40' mast"}
{"title":"Remodeling of Bob Hope Airport continues to stall..."}
{"title":"SoCal Maternity Hotels allegedly used by wealthy Chinese women raided by FBI"}
{"title":"I didn't realize DTLA was so undeveloped in the 80's (from National Lampoon's Vacation, 1983)"}
{"title":"Happy 15th Birthday Staples Center: Here is a list of some of the biggest events to be held at the arena"}
{"title":"New app to let the Angelenos chat and private message each other"}
{"title":"LAteria: A Chicano Loteria Game Celebrating Los Angeles"}
{"title":"Went to a store in East L.A today."}
{"title":"Jurors see video of USC slaying suspect boasting of killing two USC students to cellmate"}
{"title":"[Event] Ramen Yokocho Fest at Pomona Fairplex | THIS Sat-Sun, Oct. 18-19"}
{"title":"Where's a good place to sell high-end items (purses, shoes, etc.)?"}
{"title":"Any one else on TWC have no internet?"}
{"title":"LAPD board recommends firing detective over racially charged comments -- talking about killing an off-duty LAPD officer: \u201cI said, \u2018No. I regret he was alone in the truck at the time,\u201d\u2018 the man said he replied. \u201cI could have killed a whole truckload of them and I would have been happy doing so.\u201d"}
{"title":"U-Verse vs Time Warner Cable"}
{"title":"Custom Content Management Los Angeles"}
{"title":"Houston KPRC 2's Anthony Yanez heading to KNBC LA"}
{"title":"Come and Knock on our Door - Threes Company group artshow at Meltdown tonight!"}
{"title":"########1111111111########### GOVING AWAY TICKETS ON THE RADIO @KXLU889 TODAY TUNE IN FROM@now until 9AM!!!"}
{"title":"Los Angeles weekend discussion thread 10/17/14 - 10/19/14"}
{"title":"Los Angeles Weekend Guide (10/17-10/19): 5 Things To Do Around Town [HausAngeles Blog]"}
{"title":"Los Angeles Open House Guide for Sunday, October 19 [HausAngeles Blog]"}
{"title":"Secret trails near Downtown LA require a smartphone to find them"}
{"title":"At least two people hurt when car strikes Winnetka apartment"}
{"title":"An economist explains why the 405 isn't any faster with more lanes"}
{"title":"Best Los Angeles SF Giants Bars?"}
{"title":"Low Flying plane over Diamond Bar?"}
{"title":"Padmapper and broker fees?"}
{"title":"L.A. gas prices hit three-year low"}
{"title":"A Better Blue Line: last week of work during Long Beach Loop closure"}
{"title":"Sorbet from Sweet Rose Creamery"}
{"title":"Found Pit Bull in Hollywood"}
{"title":"LA drought"}
{"title":"Where can I find a cozy cafe/ bookshop?"}
{"title":"American Cinematheque: The Art Deco Society of L.A. presents 'Dying For Deco' along with a screening of DRACULA'S DAUGHTER (1936) tomorrow at the Egyptian Theatre in Hollywood. 35mm print!"}
{"title":"L.A. lawmakers move to sync elections with federal, state contests"}
{"title":"WHATEVER comedy show at Center for the Arts Eagle Rock Tonight-9pm-$5-Jackie Kashian and more!"}
{"title":"MTA Music Video- Click It and Go"}
{"title":"Possibly Moving to LA?"}
{"title":"\"Yozmit\" Performance Art Piece At Pershing Square"}
{"title":"Was anyone at the 7th at Fig food court at lunch today around 12:20?"}
{"title":"Found LA Comes to LA Great Streets: Free Cultural Walking Tours all over city this Sunday Oct 19"}
{"title":"[My Event] I'm Billy the Fridge and this is my first time headlining in Los Angeles"}
{"title":"Police: Woman Found Dead On Downtown L.A. Bus Bench"}
{"title":"Bonfire pits in the LA area?"}
{"title":"Goldie Wilson's Hover Conversion just opened in Hill Valley"}
{"title":"Does anyone know what those black glass buildings on Jefferson Blvd in Playa Vista are?"}
{"title":"Travelling to Los Angeles in 2015 - Just need a few questions to ask."}
{"title":"Hi, LA (Tarzana). I'm from the east coast, and I just saw someone I know on /r/gw. Hi."}
{"title":"Going through old files I found a picture of Dodger Stadium under construction. [x-post r/dodgers]"}
{"title":"Jack Frost has been visiting Encino for a coupla days. I took pictures of his work."}
{"title":"A friend of mine lost her dog in Highland Park, he ran off on new years eve. It's a Shih Tzu, and now someone found it and gave it away. She found him but they deny they have the dog."}
{"title":"Take a ride on the model train at California Plaza in DTLA."}
{"title":"Anyone in Hollywood-area running the LA Marathon?"}
{"title":"Best brunch in LA for this morning!?"}
{"title":"Pok Pok spot opened in our Chinatown? Huge news"}
{"title":"I have 2 tix for Anti-Flag at the Troubador tonight. I also have pneumonia. Who wants them? Free."}
{"title":"Beachwood Canyon Entrance to Hollywood Sign Trail (FINALLY!) Set to Reopen [MY BLOG]"}
{"title":"Anyone have a bike they don't want? (Trying to keep a resolution)"}
{"title":"Los Angeles Ligia Dennis, thought she had won $1,000 on the lottery but ticket was actually $1.3million"}
{"title":"When this cartoonist got locked up in L.A. County Jail, she drew what she saw with a golf pencil"}
{"title":"Yesterday a friend took me out flying. I got this picture of moonrise over Mt. Baldy."}
{"title":"The Secret World Of Self-Pay Jail"}
{"title":"Climbed the Warner Bros theatre in Huntington Park 4 years ago with a buddy of mine. Cops came by in a chopper to arrest me later for trespassing. Great view though."}
{"title":"Why does KROQ not move fwd with modern music?"}
{"title":"Noticed this abandoned on ramp on Flower/23rd. What's the story behind it?"}
{"title":"Hi everyone, I'm fulfilling my dream to move to LA to become an actress when I graduate high school this May - where should I live and can you help me find a job thanks ;)"}
{"title":"Moving To LA in a couple weeks...tell me everything!"}
{"title":"Pot Growing Operation Leads to Explosion at Los Feliz Home"}
{"title":"Something that's been bothering me about Bosch."}
{"title":"Actress in the making"}
{"title":"Donating My Desktop"}
{"title":"Catalina Is Sinking And Could Trigger A Tsunami in LA, LB and OC"}
{"title":"Anyone Know Whats Up With The Police Helicopter in NoHo?"}
{"title":"The California residency requirement for medical marijuana is a myth"}
{"title":"City of Angels Fun Ride"}
{"title":"Struggling student a victim of high fines ($197) for jaywalking in Los Angeles. How can we stop this?"}
{"title":"Looking for a drummer who likes Grindcore/Doom metal"}
{"title":"The 11 people who are always at Intelligentsia in Silver Lake"}
{"title":"Anyone see a rising smoke cloud on Slauson near Huntington Park? Anyone know what it's from?"}
{"title":"What's going on in Downtown LA right now?"}
{"title":"Big fire south of downtown?"}
{"title":"Accident on the 710"}
{"title":"Video: DTLA at night by drone"}
{"title":"Beautiful Sunday afternoon in Pasadena"}
{"title":"Beautiful Sunday afternoon in Pasadena"}
{"title":"Just ordered my veggie burger \"Animal Style\". Irony?"}
{"title":"Body Parts Of Dismembered Infant Found By 9 Year Old Playing In Back Yard."}
{"title":"If \"protests\" start happening in LA how many of you small business owners will be prepared for looters?"}
{"title":"The Beautiful Stone Canyon Reservoir"}
{"title":"Drone Footage of Fire on 710 (from City Terrace looking South)"}
{"title":"VIP beer?"}
{"title":"Any advice getting from LAX to the desert?"}
{"title":"Composers moving to Los Angeles from east coast, looking to *buy* and not rent. Where should we look?"}
{"title":"Who has a Siberian Husky puppy and would like to make a quick buck?"}
{"title":"LA Dodgers vs SF Giants - Panorama"}
{"title":"Are there any good mechanics in the Burbank area that can inspect a used car?"}
{"title":"Lost/stolen watch!"}
{"title":"My First Mother's Day in LA"}
{"title":"Stuck at LAX until 3:30. HELP!"}
{"title":"Los Angeles and Its Booming Creative Class Lures New Yorkers"}
{"title":"Cheap movie theatres in L.A.?"}
{"title":"Can anybody recommend a good gardener in the mid-city area?"}
{"title":"UPDATE: Sick Kitten in LA"}
{"title":"Places to sell used furniture and home goods in LA?"}
{"title":"The New York Times Thinks Los Angeles Is Cool Again!"}
{"title":"Buying a house in Los Angeles?"}
{"title":"45' sailboat with broken keel almost hit the Venice Pier - anyone else see that?"}
{"title":"20 years old, planning a cheap week-long trip to LA. Advice?"}
{"title":"Found set of keys on CSUN lanyard"}
{"title":"Hi, does anyone know of a good wood shop class?"}
{"title":"Cinco de Mayo in Los Angeles"}
{"title":"Where's a good place to go for a drive?"}
{"title":"Made a flyer for a show my band is playing next month in DTLA:)"}
{"title":"Who is Doing Work Around Water?"}
{"title":"Yo that moon was fucking huge"}
{"title":"[Serious] Does anyone know Martin Starr?"}
{"title":"Anyone remember drinking this? New York seltzer is back! Just ordered a case!"}
{"title":"Heated discussion: Silverlake residents might not know that stairs are actually public streets."}
{"title":"Hostage situation across the street from Tommy's on Rampart Is over"}
{"title":"gunshot in palms?"}
{"title":"Books set in LA"}
{"title":"National pole dancing championship heading to Redondo Beach"}
{"title":"[MY EVENT] FREE One Year Anniversary of Cash Lair Comedy Night FREE Comedy Show in Burbank 9PM"}
{"title":"Recommendations for male facial"}
{"title":"come party today from 3-9 at the mystery box."}
{"title":"Public library open on Sunday?"}
{"title":"The art project filling MacArthur Park Lake with thousands of painted spheres"}
{"title":"Drive-By Shooting, Highland Park, 10AM this morning"}
{"title":"I already miss LA."}
{"title":"[Recommendation] Hey, can you guys recommend a reliable and cost effective car mechanic near Koreatown or DTLA?"}
{"title":"Los Angeles is switching to LED street lights, reducing light polution in the same time. Soon you will be able to see some constellations in the sky. Before and after pix."}
{"title":"HELP - Girlfiend missing, Delta confirms landed at LAX"}
{"title":"Looking for a last minute Valentines date? Metro will be having speed dating ON the Red Line Friday."}
{"title":"Los Angeles renters rights"}
{"title":"There was a shooting in Hollywood tonight"}
{"title":"[My EVENT}Free Comedy Show in Burbank TONIGHT - Corner Bar 9PM"}
{"title":"Who serves the best brunch in LA?"}
{"title":"Lost Dog near Olympic and La Brea!"}
{"title":"Early Tournament of Roses entries in Pasadena [x r/weirdwheels]"}
{"title":"Any import toy stores in Little Tokyo?"}
{"title":"Question for the experts: What are your favorite LA bars for classic cocktails?"}
{"title":"Moving to LA with nothing, tips?"}
{"title":"Best place in LA to sell CD's?"}
{"title":"Can you park a commercial vehicle on private property?"}
{"title":"How high is the cost of living in LA ?"}
{"title":"2yr old newspaper, locked but still on display at the Farmers Market, Feb 8 2015 (x-post /r/mildlyinteresting)"}
{"title":"Under 18 Comedy Club?"}
{"title":"SOS - lost ID and Pride is 2 days away (no passport)...help!"}
{"title":"Limo service in Los Angeles"}
{"title":"L.A. Police Commission faults officers in Ezell Ford shooting"}
{"title":"Is any near Torrance?"}
{"title":"To Represent Koreatown, Far East Movement Revisit the L.A. Riots"}
{"title":"Girl Sexually Assaulted on Red Line at H&amp;H only one person did something."}
{"title":"Coffee in SFV"}
{"title":"Hidden Gems in /LosAngeles?"}
{"title":"Weezer is playing an impromptu concert today at Venice beach next the basketball courts"}
{"title":"Can anyone recommend a menswear place where I could get a custom suit for under $450?"}
{"title":"Visiting LA for work next week. Advice on how to stay busy?"}
{"title":"Dear Los Angeles Weathermen and Women"}
{"title":"Angel City Brewery is giving away dinner for you and your friends if you tell them your craziest holiday story"}
{"title":"Los Angeles Weekend Guide (11/7-11/9): 5 Things To Do Around Town [HausAngeles Blog]"}
{"title":"Will there be a meet up for the Auto Show?"}
{"title":"Los Angeles Open House Guide for Sunday, November 9 [HausAngeles Blog]"}
{"title":"\"I used to sit on the roof of the apartment where Jim Morrison used to write his early lyrics\" - Henry Rollins"}
{"title":"Los Angeles weekend discussion thread 11/07/14 - 11/09/14"}
{"title":"It is all an illusion."}
{"title":"LA's best cookie store opens Monday"}
{"title":"Long wait is over: groundbreaking ceremony today for subway extension under Wilshire Boulevard"}
{"title":"Ken block filming location? Spy cam inside."}
{"title":"Bob Baker Performs Bill Robinson's \"Keep A Song In Your Soul\" | Puppetry"}
{"title":"[LAT] How the new Wilshire Grand skyscraper is being built to be seismically stable"}
{"title":"Looking for a creative space/studio in Los Angeles"}
{"title":"To all the people whining about the recent temps."}
{"title":"When the hottest punk club in Cathedral City is in your mom\u2019s living room"}
{"title":"Freight train hit and killed a pedestrian at Soledad Canyon and Ruether. The investigation will affect metro commutes on the Antelope Valley line."}
{"title":"\"Lala\" is promoting at Pershing Square"}
{"title":"What's on fire?"}
{"title":"After 53 Years, LA Gets to Work on its Subway to the Sea"}
{"title":"Celebrating Halloween In West Hollywood"}
{"title":"Used/New Tires"}
{"title":"This just happened in Santa Monica"}
{"title":"$195 million Beverly Hills estate with 27-Car Garage, 23 Bathrooms, 400 crate per-year Vineyard, is Most Expensive Listing in US"}
{"title":"Need help for a friend's birthday, anyone have a recommendation for a Sushi place?"}
{"title":"Donor Gives Los Angeles Museum Art Worth $500 Million"}
{"title":"L.A. Garment Workers Are Robbed of Millions by Employers, Feds Say"}
{"title":"Gunshots."}
{"title":"[my event] Camping and Comedy less than 2 hours from LA...this Saturday, B)i(G FIRE"}
{"title":"A lot of people forget this is also LA County."}
{"title":"Graffiti Is Blooming in Los Angeles. Could That Mean Something?"}
{"title":"Extremely catchy California shuffle song- you won't get it out of your head!"}
{"title":"Can anyone recommend a bodyguard?"}
{"title":"Looking for open minded people to come to a nudist resort with me this summer."}
{"title":"When Your Children Leave For the Other Parent's Home: Leaving Can Feel Left"}
{"title":"Werner Herzog on Los Angeles"}
{"title":"Ambiance of the City: The Sounds of Koreatown"}
{"title":"Necessities for a new resident"}
{"title":"Knee Cartilage Restoration Procedures in Beverly Hills &amp; LA"}
{"title":"Robert Durst was registered in hotel under false name, source says"}
{"title":"What was the top radio station during the 1970s?"}
{"title":"Update suddenly homeless in LA"}
{"title":"Where the subway trains nest at.."}
{"title":"Survey on Californian English (NorCal vs SoCal)"}
{"title":"LA Marathon 2015 Highlights"}
{"title":"Best nachos?"}
{"title":"Where is the best place to poop in LA?"}
{"title":"100 year old eucalyptus tree &amp; 100 yr old affordable housing being destroyed in hollywood"}
{"title":"All this talk about water shortage in Cali has me asking why do we not have desalination plants?I"}
{"title":"More Than 30 Hospitalized During Sweltering Los Angeles Marathon"}
{"title":"Los Angeles was not built upon Hollywood or citrus groves or oil. It was built upon mud and sand and gravel."}
{"title":"Sunset at the Santa Monica Pier today."}
{"title":"[Australian] Industrial action is at near record lows but business will still blame unions | Business"}
{"title":"Los Angeles daily discussion thread 03/16/15"}
{"title":"New Podcast Episode: Preserving Historic Low-Income Residential Buildings in Skid Row"}
{"title":"Mayor Garcetti's presents at SXSW"}
{"title":"Cheap camera equipment suggestions!?"}
{"title":"Totally Awesome Things To Do In LA - 3/16-3/22"}
{"title":"Only dirty boys need apply"}
{"title":"Results to the Survey of California English"}
{"title":"Los Angeles Mesothelioma Lawyer Call Today!!! (469) 629-MESO"}
{"title":"Police Investigating Why 2 LAPD Officers May Have Been Targeted in South L.A. Shooting"}
{"title":"Looking for roommate (Santa Monica)"}
{"title":"Above LA this morning: the aliens have arrived!"}
{"title":"The 17 best trick-or-treat spots in LA"}
{"title":"The New Beverly is already changing for the worse. Manager Julia Marchese forced out."}
{"title":"New Event! Power Beauty Power Up Beauty and Networking Night October 21st"}
{"title":"So I made A Massive A-Z List of Stuff to Do in Los Angeles (Includes Over 100 Free Ideas) | MY BLOG"}
{"title":"Parking, local opposition add to housing costs, study finds"}
{"title":"My collection of bad driving seen from my dash cam! We certainly drive... differently out here."}
{"title":"Hilarious Craigslist Ads Tell you a lot about LA"}
{"title":"Looking for a homeless gent! (Crosspost from /r/pasadena"}
{"title":"just tested my internet speed, was 15/1"}
{"title":"just tested my internet speed, was 15/1"}
{"title":"Trader Joe's in Glendale reopens after move"}
{"title":"Visiting LA 10/16(night) - 10/19(night)"}
{"title":"Catchy tune helps you get to LA parties"}
{"title":"Is LA accidentally prepped and ready for Ebola, thanks to Bush?"}
{"title":"R/LosAngeles has too many resident trolls and perpetual downvoters. Culture change is needed"}
{"title":"University Senior, just got a job offer I love in LA for next summer."}
{"title":"looking to relocate to LA, affordable areas to rent?"}
{"title":"I knew there was a catch to this."}
{"title":"Breakfast burrito at Lucky Boys (X-post r/FoodLosAngeles)"}
{"title":"Event, 11/15: Dragon Ball 30th Anniversary World Martial Arts Tournament Power Up and Cosplay Contest"}
{"title":"Anyone else see a pair of planes circling Burbank spraying chemicals into the sky? Olive &amp; Hollywood Way around 4:45pm today."}
{"title":"I stumbled into a great bar last month, but was too drunk to remember what it was called or where it was (near Hollywood). Please help!"}
{"title":"'Humble Housewife' Surprised at Apparent State Assembly Win -- Lopez had no campaign committee and reported no contributions or expenditures to the Secretary of State. Lopez said she used her own money and small \u2014 $25 to $30 \u2013 donations from friends and family members."}
{"title":"MISSING CAT!!! WEST HOLLYWOOD"}
{"title":"Looking for something to do?"}
{"title":"Men hold down woman, cut Rolex off her wrist in brazen daytime attack."}
{"title":"Man Dies After Being Shot \u2018Numerous Times\u2019 in Hollywood During Robbery Last Night (Hollywood/Cahuenga)"}
{"title":"bianchi super pista with green chrisking bottom bracket with omnium crank size 59 stolen in Pasadena area 626/323 be on the lookout"}
{"title":"Meet our mayor: Eric Garcetti talks LA future as the hub of entertainment + tech"}
{"title":"Flying low and slow through downtown en route to San Fran (x-post from /r/militaryporn)"}
{"title":"Bianchi super pista stolen in Pasadena 1/4/15... Lime green ChrisKing bracket, omnium crank, phillwood on the back... Please help 323/626 redditors"}
{"title":"Los Angeles daily discussion thread 01/05/14"}
{"title":"Artesia Station This Morning"}
{"title":"Where can I check my court date?"}
{"title":"Uber driver terrorized passenger with two hour hell ride across Los Angeles...and all the company did was refund her money"}
{"title":"Moving to Inglewood. A little concerned about safety, any advice?"}
{"title":"Anybody know of any adult baseball leagues in the area? Preferably as close to the Santa Clarita area as possible"}
{"title":"Anyone know how Universal Studio's \"Buy 1 day get 2015 for free\" work?"}
{"title":"LA Gas Prices over the past 15 years"}
{"title":"Pasadena Cheeseburger Week: 40 burgers in five days"}
{"title":"That makes two of us."}
{"title":"Beverly Hills High School Evacuated Following Bomb Threat"}
{"title":"Is there no movie-prop museum?"}
{"title":"Inglewood is Los Angeles's 2014 Neighborhood of the Year"}
{"title":"Various edits to the Hollywood sign over the years: Save the Pood?"}
{"title":"Stuck in paradise. A portrait my niece made of life on the boardwalk of venice beach."}
{"title":"\u201cWe\u2019re building an NFL stadium in Los Angeles no matter what.\u201d"}
{"title":"Here Are the 5 Biggest L.A. Douches of the Year"}
{"title":"Come watch me wrestle former WWE Superstar Gangrel in a Mousetrap Deathmatch this Saturday!"}
{"title":"Hollywood Prepping For Big Population Boom Over Next 5 Years"}
{"title":"Rams owner planning L.A. stadium"}
{"title":"Totally Awesome Things to do in LA - 1/5-1/11"}
{"title":"Expensive Housing Driving All the Poor People Out of California"}
{"title":"I have a friend who is an a mentally abusive relationship and has no way out"}
{"title":"Meteor captured in a long exposure near Mulholland Drive."}
{"title":"(X-Post /r/mildlyinfuriating) Crossing eight lanes of traffic? Seems legit"}
{"title":"How to check if I have a fastrak violation and how to pay without an account?"}
{"title":"Pez Cantina Brings Upscale Coastal Mexican Food to DTLA"}
{"title":"The Earth done quaketh!"}
{"title":"Westwood on the way to work this am."}
{"title":"MISSING: SHMUEL EISEN FROM LA"}
{"title":"A walk on Hollywood Blvd"}
{"title":"Free Admission to So Cal Museums on Sat, Jan 31. LACMA, MOCA, California Science Center, etc."}
{"title":"Congrats, LA County! Your streets are objectively...average!"}
{"title":"Any interest in joining a small poker game that will happen once a month in West Hollywood?"}
{"title":"Gov. Brown sworn in for record 4th term"}
{"title":"Anyone have experience with the custom furniture shops on Western?"}
{"title":"Construction Begins On California\u2019s High-Speed Rail System"}
{"title":"Can anyone back me up and tell me if they remember gas going below $2 back in 2009"}
{"title":"TIL: You can completely ignore and trash ANY red light camera ticket received within the COUNTY of los angeles (88 cities including BevHills and Weho) and NOTHING bad will happen. No failure to appear, no hit to your credit, no points on your license, no towing, NOTHING."}
{"title":"Anyone know how long it takes to ride your bike from the beach to east LA?"}
{"title":"four 23 y/o guys in the west coast for vacation for the week, any advice?"}
{"title":"In LA for Special Olympics"}
{"title":"Weekly What To Do: More Than 24 Hours of Things To Do"}
{"title":"Uber Says It's Not Ignoring L.A.'s Inner City"}
{"title":"Would anyone be willing to do a tattoo on me?"}
{"title":"TIL It is not illegal in California to cut through parking lot to avoid a red light, if it is done safely"}
{"title":"Finding a secluded hiking trail"}
{"title":"conversion therapy"}
{"title":"This is not shopped. Spotted in Sunland."}
{"title":"Why are gas prices getting ridiculously high??"}
{"title":"Let's Keep DTLA's Pershing Square Weird"}
{"title":"Anyvody willin to gove my girlfriend and i a lift from LAX to Anaheim?"}
{"title":"Make Quick Money in Los Angeles"}
{"title":"I quite get the average american coldness, but what is the excuse for Californians?"}
{"title":"Los Angeles Chiropractor - Los Angeles Chiropractic Treatment Clinic"}
{"title":"Are you or someone you know deserving of a makeover?"}
{"title":"Aye /r/LosAngeles! Doobie here again. Saturday we had some epic rain so I hiked up 8mi from my house and to Earnest Debbs Park laggoon and slipped downhill in the mud all for you wonderful people. Enjoy the pics!"}
{"title":"20 year old moving to LA"}
{"title":"Get the 311 live for your LA neighborhood - local police scanner, fire departments, quakes and traffic jams on Twitter"}
{"title":"Superstar BDSM Theater"}
{"title":"Wilshire and Fairfax street construction crew break productivity record!"}
{"title":"Cans of Skyline Chili?"}
{"title":"TWC is fuckin up my world."}
{"title":"Los Angeles Expected to Raise Minimum Wage to $15 an Hour"}
{"title":"25 deaf and hearing impaired actors perform Matthew Sweet's musical, using sign language, this week in L.A."}
{"title":"Are You Ready For Some Football LA"}
{"title":"Law-Breaking Drivers Disrespecting New Wilshire Boulevard Bus-Only Lanes"}
{"title":"L.A. City Council Approves Minimum Wage Increase 14-1"}
{"title":"Los Angeles Raises Minimum Wage to $15 an Hour: \"The nation\u2019s second-largest city voted on Tuesday to increase its minimum wage to $15 an hour by 2020\""}
{"title":"LA Chargers Helmet | Charles Sollars Concepts"}
{"title":"NYTimes: Los Angeles Raises Minimum Wage to $15 an Hour"}
{"title":"Can LA Make \u201cGreat Streets\u201d If the Mayor Won\u2019t Stand Up for Good Design? #HyperionBridge"}
{"title":"\"Universal Gentrification\" (Comedy Short) [1:33]"}
{"title":"Congrats LA minimum wage workers! You just got a raise - LA county votes to raise it to $15 per hour"}
{"title":"Remember the \"Send Pizza\" girl with cancer at Children's Hospital LA?"}
{"title":"Where's the safest, nicest, closest place(s) to live near Los Angeles?"}
{"title":"5 Must-Try New Happy Hours in Los Angeles."}
{"title":"Cutting down Three big trees at Echo Park Lake today"}
{"title":"Los Angeles hikes hourly minimum wage to $15 by 2020."}
{"title":"My sights are set!"}
{"title":"T-mobile or sprint!"}
{"title":"Just moved here and looking for a new coffee shop"}
{"title":"Working in West Hollywood, what is the deal with permit parking?"}
{"title":"Metro unveils new Kinkisharyo pilot rail car, will be used on new Expo and Gold Line Extensions"}
{"title":"Missing CSUN Student Found Dead in Indio"}
{"title":"Looking for Star Wars cosplayers. Located in SFV."}
{"title":"Hello, r/LosAngeles! I'm a property manager operating in the heart of Koreatown that manages HOA's as well as residential (apartment) and commercial properties. I'll be your whipping boy for tonight. Throw all your complaints, concerns, and questions at me!"}
{"title":"10 Spooky Hikes Perfect For October In Southern California: LAist"}
{"title":"Need your help finding Wesley Tracy - He's been missing since Sept. 12"}
{"title":"Please help! Lost cat - Koreatown"}
{"title":"Looking for some local music forums"}
{"title":"Please help! Lost cat (Koreatown)"}
{"title":"Gunshots in k-town."}
{"title":"Ballona Creek - where does its water come from?"}
{"title":"Originally posted in r/pics, had to share..."}
{"title":"Triple-Shooting Reported at San Pedro In-N-Out"}
{"title":"A fortune for iPads, but not enough for math books"}
{"title":"Culver City folks: Pacific Culver's closed for Arclighting til summer. What theaters (besides AMC Century City) are good alternatives?"}
{"title":"The Dog Haus App: A Tale of Hope"}
{"title":"The true story of L.A.\u2019s freeways, and a judge who changed everything."}
{"title":"[HELP] - I need a few shots of a Phoropter. Any optometrists out there mind if I swing by their place for about 10 min this week?"}
{"title":"Department of Health, Education and Welfare disseminated a brochure of smog cartoons (early 70's)"}
{"title":"\u2026 And Ending Today's Adventures With Our Clients Beautiful Wedding At Duke's Malibu. Take The Plunge! We'll Say YES!!"}
{"title":"Rehearsal dinner locations near Santa Fe Springs"}
{"title":"Any good hiking trails you can recommend?"}
{"title":"E-Waste \u00e2\u0080\u0093 Circuit Board Recycling los angeles"}
{"title":"Who's up RIGHT NOW?"}
{"title":"V. Stiviano, Shelly Sterling tussle in court for house, $1 million"}
{"title":"Woman brutally beaten with skateboard in Venice"}
{"title":"Interest in starting a molecular gastronomy business in LA."}
{"title":"Free Album download"}
{"title":"Found a new sushi drive-through on the westside!"}
{"title":"Actress Taraji P. Henson Apologizes For Claiming Glendale Police Racially Profiled Her Son"}
{"title":"What building was Schoolboy Q at during this video(with the balcony)?"}
{"title":"Not a single vegetarian option on Uber Fresh the past week. What gives?"}
{"title":"Caught On Camera: Woman Brutally Attacked With Skateboard In Venice Beach Skate Park."}
{"title":"Anyone notice the commotion in Marina Del Rey at 3AM? (r/Uberdrivers expost)"}
{"title":"5 Injured After Metro Train Crash Involving Two Vehicles - Exposition Boulevard and Vermont"}
{"title":"So what is the deal with the transnational gangs in Los Angeles County?"}
{"title":"Gospel choir?"}
{"title":"What LA would look like if Ocean levels rose 60 meters"}
{"title":"People who made the NYC--&gt;LA move.... was it worth it?"}
{"title":"Anyone have Blue Shield for dental that could recommend a dentist? ..."}
{"title":"What was that sound? In Echo Park."}
{"title":"I am visiting LA for the first time for 15 days. I am looking for the best place to stay. You have any suggestions?"}
{"title":"Metro could expand subway service to the downtown L.A. Arts District"}
{"title":"Los Angeles daily discussion thread 03/19/15"}
{"title":"You're An Amazing Young Man Reese! Glad You Enjoyed The Limo Ride To Your Last Chemo Treatment! All Our Best Always!"}
{"title":"L.A. Mayor Garcetti and LAPD's Chief Beck taking calls and tweets Thursday on KNX 1070 from 10-11 a.m."}
{"title":"Joe Biden visiting LA this weekend; Here's the list of road closures for today thru Sunday"}
{"title":"Joe Biden visiting LA this weekend: here's a list of street closures for today thru Saturday"}
{"title":"So has anyone successfully received a refund from being ticketed on a relaxed parking enforcement day?"}
{"title":"Spotted this Dodge 'cuda srt-8 on the road in the valley."}
{"title":"Drone footage of last night's ILWU community march in San Pedro"}
{"title":"Visiting in February"}
{"title":"\"House Keys, Not Handcuffs\" LACAN advocating for homeless rights at Pershing Square - [my channel]"}
{"title":"Any Hollywood club promoters on here to get us on a list tonight?"}
{"title":"Low budget art galleries"}
{"title":"Best Jons In Los Angeles? [x-post /r/asklosangeles"}
{"title":"Handy SF Event list for 2015. Can someone make one of these for LA? Thanks in advance ;-)"}
{"title":"Los Angeles Poker Tournament to benefit Veterans and The Battle Buddy Foundation - GREAT PRIZES!"}
{"title":"Any good soccer fields for pick up games in the Hollywood/Los Feliz area?"}
{"title":"Looking for a dog trainer who severe behavioral issues..."}
{"title":"Top 10 Burgers in Los Angeles"}
{"title":"Xander Jeanneret and Bonnie Gordon to Appear at the Nottingham Festival"}
{"title":"What's the Best Music Venue in L.A.?"}
{"title":"any gold/silver level ice hockey players looking for a monday night 4x4 league in el segundo?"}
{"title":"New residential tower planned for Vermont/Virgil. And we're one tiny step closer to joining the DTLA and Wilshire/K-town skylines."}
{"title":"New shops and restaurants announced so far for the Yards at Sante Fe in the Arts District, including Wittmore, Voyager, BOL, GROW market, Cafe Gratitude, Malin + Goetz and Van Leeuwen Ice Cream."}
{"title":"Scenes from the Purple Line Extension Groundbreaking Ceremony"}
{"title":"For JPL scientists, the thrill is in the comet chase"}
{"title":"Where do the geeks go?"}
{"title":"Duke's Malibu - Malibu - Los Angeles, CA"}
{"title":"Los Angeles gets its Aerial Interactive Tour. 22 panoramic images taken above L.A. to show you the beauty of the city"}
{"title":"Observe"}
{"title":"Remembering Los Angeles' Unclaimed Dead: LAist"}
{"title":"55 laptop computers stolen from UCLA research library"}
{"title":"Tips for Black People Not to Get Shot by the LAPD"}
{"title":"Public universities in California launch loan program for illegal immigrants."}
{"title":"Monday Nov. 10 5pm Avoid Broadway downtown, shut down due to suspicious package"}
{"title":"Los Angeles Athletic Club"}
{"title":"Are you a part of a union in LA? I have a question and am looking to do a reddit-survey"}
{"title":"Anyone else hear those helicopters flying around El Sereno?"}
{"title":"New residential tower planned for Wilshire/Virgil. And we're one tiny step closer to joining the DTLA and Wilshire/K-town skylines."}
{"title":"Victory Girls\u2019 Gas Station, Los Angeles, California, May 1942."}
{"title":"Gas prices at Fairfax/Olympic..."}
{"title":"My friends' house was burnt down in Mount Washington, and we're trying to raise money to help them."}
{"title":"Man Says Delta Airlines Lost His Service Dog At LAX"}
{"title":"Man Says Delta Airlines Lost His Dog At LAX"}
{"title":"City of LA giving out free rain barrels to residents"}
{"title":"Four Suspects Wanted for Attacking 69-year-old Victim for Rolex"}
{"title":"Shawn Sleeps Naked"}
{"title":"Got the idea from a previous post. Cheapest is in Commerce and Highest is in Santa Monica."}
{"title":"[Event] Scale-13x - Southern California Linux Expo"}
{"title":"Culver City High football players raped girl, recorded it"}
{"title":"D.A.'s sex trafficking unit shows success in putting pimps away"}
{"title":"L.A. City Council might change cat limit"}
{"title":"Ramen Manichi opens in Little Tokyo: black tonkotsu, gyoza, salaryman lunch"}
{"title":"Did they ever announce what they found when they unearthed the Old LA Times Building?"}
{"title":"Guide for Los Angeles?"}
{"title":"Well, LA, I'm think I'm going to do a shitload of cocaine today. My dealer delivers so let's get this fucking party started!"}
{"title":"Introducing LA's Newest Job Platform: Workpop. We just had a short video made outlining our product, take a look and give us some feedback!"}
{"title":"Los Angeles subway will get WiFi, cellular phone service"}
{"title":"Any grassroots charities based in Los Angeles that more people should know about?"}
{"title":"Totally Awesome Things To Do in LA - 1/20-1/25"}
{"title":"Five Disneyland Employees Diagnosed With Measles"}
{"title":"Irwindale cop who sexually molested girls sentenced to prison -- the third case against a former Irwindale police officer in just over a year"}
{"title":"Help With a Disagreement on Parking Sign Interpretation"}
{"title":"Looking for fun? Come out and play some co-ed dodgeball at locations all over LA!"}
{"title":"Century Later, the \u2018Chinatown\u2019 Water Feud Ebbs"}
{"title":"Several Disneyland workers diagnosed with measles"}
{"title":"Will Comic-Con leave San Diego? Other cities are making pitches"}
{"title":"Why does it seem Power106 only have 5 songs on their playlist?"}
{"title":"Los Angeles daily discussion thread 01/21/15"}
{"title":"Gelateria Uli DTLA"}
{"title":"[Lost cat] Orange tabby in USC area"}
{"title":"So during the big one, would all our Art Deco buildings be lost?"}
{"title":"Worst drought in 1200 years drains America's biggest reservoir."}
{"title":"Chicago sports fans in the house?"}
{"title":"Los Angeles daily discussion thread 05/12/15"}
{"title":"The biggest problem when moving in Los Angeles"}
{"title":"Self-driving cars are getting into accidents in California."}
{"title":"Biggest Lie in LA?"}
{"title":"This is weird. I got 3 bills from SC Edison in the last 4 days - anyone else?"}
{"title":"LA's homelessness problem is getting worse"}
{"title":"How dirty is the LA River?"}
{"title":"How to test 911 call?"}
{"title":"Where is this?"}
{"title":"Anyone know of any \"liberal\" smog check places that will pass my car with a little \"encouragement\"?"}
{"title":"Need to rent a van/big SUV in late May. Cheap. Reliable. Recommendations?"}
{"title":"Get Free Grilled Cheese Truck and Lobsta Truck All Month Long at Select Events Throughout L.A. First Event is Today in Torrance at 11:30am [MY BLOG]"}
{"title":"I've been had"}
{"title":"Move LA Interviews New Metro CEO Phillip Washington"}
{"title":"A passport that shrinks our bar tab? Pinch us, we're dreaming. [TimeOut LA]"}
{"title":"Ear picking in LA?"}
{"title":"LA Derby Dolls Season Opener this Saturday @ NEW LOCATION!"}
{"title":"RVSP for 2nd Los Angeles for Bernie meeting at Sunday May 17th at 2PM"}
{"title":"The Broke New Yorker's Guide To Moving To California"}
{"title":"Mom Is Outraged By UCSD's Naked Final: LAist"}
{"title":"[Our App] Business Insider featured us (Burner) in their list of \"25 Hot Los Angeles Startups You Need to Watch.\" We're in great company and proud Angelenos."}
{"title":"Ready for Bike to Work Day? Find a pitstop near you with this handy dandy map"}
{"title":"Outdoor Vegetarian Brunch in Downtown Los Angeles"}
{"title":"There might be snow this week! What's the closest hiking trail that will have snow?"}
{"title":"Pok Pok Phat Thai Chinatown Waiting For Final Approval From Health Department"}
{"title":"Has anyone been to Club Joi? 4.5/5 stars on Yelp!"}
{"title":"So no Reddit New Year's party this year?"}
{"title":"Long shot here for new years"}
{"title":"Pub Science at Golden Road Brewing on June 9th"}
{"title":"Patio. Margaritas. Parmesan fries. Where can I find all these things in one place?"}
{"title":"Hey /r/LosAngeles, where's a good place to donate clothes other than Goodwill?"}
{"title":"The roads on Wilshire Blvd"}
{"title":"In preparation for tomorrow's Pasadena CicLAvia, here is my write up about Pasadena and it's golden tail."}
{"title":"The 10 east before National exit"}
{"title":"HYPERLAPSE NoHo to DTLA"}
{"title":"10 west near doentown"}
{"title":"Final Hours Before Demolition Of The Hollywood Park Race Track"}
{"title":"Anyone see that spontaneous firework show that just happened near the greek church?"}
{"title":"What's up with the fireworks?"}
{"title":"What were those strange noises in Korea Town?"}
{"title":"hollywood: something that sounds like far away thunder outside? what is that?"}
{"title":"he top 5 phrases feared by Angelenos"}
{"title":"Burbank Blvd at the North Hollywood/Burbank transition. What are they constructing in the middle of the street?"}
{"title":"Utah is winning the war on chronic homelessness with \"Housing First\" program"}
{"title":"Ubers from LAX?"}
{"title":"Anyone else in dtla just get a power outage for a second?"}
{"title":"The Bluffs, Palos Verdes."}
{"title":"Prosecutors: Uber background checks missed 25 drivers' criminal records. One of them was in prison for 26 years for murder."}
{"title":"Good place for Plane watching at lax or Bob Hope?"}
{"title":"Bikes in LA?"}
{"title":"LA Taco Festival Heads to Grand Park"}
{"title":"How much is an \"open container in public\" citation?"}
{"title":"Has anyone else noticed the increased level of scientology activity in Los Angeles?"}
{"title":"Biggie Smalls murder investigator Russell Poole suddenly dies while talking with detectives"}
{"title":"LA 'black ball' reservoir rollout potential 'disaster' in the making, say experts"}
{"title":"When you discover the most quaint suburb area perfect for biking at night!"}
{"title":"Towing Company Was \"Holding Vehicles\" for \"Ransom,\" City Attorney Says"}
{"title":"[Serious] How do I develop/grow my network in LA?"}
{"title":"Help me find vendors for a small, last-minute celebration"}
{"title":"A sprawling view of our great city..."}
{"title":"EZ Transit Pass stickers to go away September 1"}
{"title":"Wedding band broke up."}
{"title":"ironic gifts for filthy hipsters"}
{"title":"A Dream of Mine"}
{"title":"Topless party in West L.A. tonight, march and rally Sunday in Venice"}
{"title":"Guy on CL inviting the ladies to his party (the dartboard will have real darts!) \"if you interested in being cultured\""}
{"title":"California\u2019s Farmer Bros. coffee company moving HQ to North Texas"}
{"title":"Revo -fuckin -lution 2.0"}
{"title":"Fire near China town, close to Main st. &amp; Vignes."}
{"title":"Los Angeles Federal Criminal Defense Attorney tips"}
{"title":"ACLU SoCal issues statement on LAPD\u2019s policy on body worn video cameras"}
{"title":"27-story highrise proposed on 8th Street in Koreatown."}
{"title":"Do you commute to a workplace in Orange County? If so, use this quick search to see if you can ditch your car and get in on a vanpool to save some money."}
{"title":"Culver City to south Burbank commute?"}
{"title":"Big Blue Bus Readies Expo 2 Connections, Service Expansion, Fare Increase"}
{"title":"Santa Monica Big Blue Bus' Revised Expo Line plan includes additional lines, more frequent service, on-demand late night/weekend Service, possible $0.25 fare increase to pay for it"}
{"title":"Does anyone in this sub do T-shirt silk screens?"}
{"title":"Driver's licenses open door to safer rides for those in U.S. illegally, benefits everyone"}
{"title":"Driver's licenses open door to safer cars for undocumented immigrants"}
{"title":"Totally Awesome Things To Do In LA - 4/27-5/3"}
{"title":"anyone here using T-Mobile care to share their experiences on their internet connectivity, streaming, dropped calls? Thinking of switching from Verizon but not sure if it's a bad move. Thank you."}
{"title":"phone advice please help!"}
{"title":"Los Angeles DUI Attorney | (818) 781-1570 | DUI Lawyer Los Angeles Calif..."}
{"title":"Best Karaoke in town?"}
{"title":"High School Student Reporter: As Baltimore burns, Korean Americans in LA Remember the 1992 Riots"}
{"title":"(informal!) LA-area telephone code map"}
{"title":"Divided Police Commission approves rules for LAPD body cameras - most footage won't be made public"}
{"title":"100th Anniversary of the Armenian Genocide Commemorated by Los Angeles Board of Supervisors"}
{"title":"Parking in Santa Monica?"}
{"title":"Presentation tonight on new volunteerism model"}
{"title":"2 Helicopters sitting over Sylmar for 30 mins now"}
{"title":"John Peterson, the disabled man who polishes every star on the walk of fame, has retired"}
{"title":"Animal trailer hauling sheep overturns on 210 Freeway in Sylmar"}
{"title":"L.A. Weekly article about gangs in Palms. Great."}
{"title":"[LIVE CHAT] What do you love about LA?"}
{"title":"/u/Modna Logs Time Warner Cable speed tests every 30 minutes for the last 20 days (x/post /r/dataisbeautful)"}
{"title":"Al Pacino will be doing Q&amp;A's at The Cinefamily for four nights next week! Member tickets for sale now, general tickets available tomorrow."}
{"title":"Disabled Parking Placards Easy To Get For $200-300"}
{"title":"Hector Morejon, Unarmed Teen Shot, Killed By Police, Cried For His Mother: 'Mommy, Mommy, Please Come'"}
{"title":"What's the best ISP in West LA?"}
{"title":"What's the best ISP in West LA?"}
{"title":"Bobcat Caught on Tape - 2400 Block of Lyric Ave"}
{"title":"Yes, you can have a drought resistant lawn that doesn't look like a weed patch."}
{"title":"Map: Recent Food Poisoning Outbreaks In L.A. Restaurants"}
{"title":"Going down Alameda"}
{"title":"Are we having any protests for Baltimore this weekend? The movement is spreading."}
{"title":"How to Eat for Less than $6 a Day in Los Angeles"}
{"title":"\u201cMotor Voter Act\u201d Passes Committee Test - California is moving closer to automatically registering residents to vote when getting a driver\u2019s license. The proposal is being pushed by California\u2019s top elections official, Secretary of State Alex Padilla."}
{"title":"L.A.'s Love/Hate Relationship With Waze Continues"}
{"title":"Former MOCA curator Alma Ruiz talks about her 30 years at the museum, including working with 4 directors, and the very early days of the institution"}
{"title":"Where's the Freddie Grey Los Angeles protest"}
{"title":"X post/ simply bridal"}
{"title":"Video: Police Want To Question These Two Possible Witnesses About Luxury Condo Inferno"}
{"title":"Woman killed in post office parking lot by ninety-one year old SUV driver"}
{"title":"is it possible to live in LA on $30k a year?"}
{"title":"Friend's car got stolen in Santa Monica"}
{"title":"Sign at 3rd and Beaudry, Downtown L.A."}
{"title":"STOLEN DOG: PLEASE HELP!"}
{"title":"Please tell me it's not just me. Pinks hot dogs and Dodger dogs are insanely overrated right?"}
{"title":"LA residents complain about 'Waze Craze'"}
{"title":"Best pizza in Burbank?"}
{"title":"Have you noticed that these aren't EVERYWHERE anymore?"}
{"title":"Uh, guys, I think water is falling from the sky again."}
{"title":"Condoms In Porn Law Upheld By Appeals Court"}
{"title":"Cougar P-22 Has Left Crawl Space Under Los Angeles Home"}
{"title":"The Proposed Runyon Canyon Zipline Should Be Built By the Hollywood Sign Instead"}
{"title":"Affordable lunch spots near the Warner Brothers Lot?"}
{"title":"Restoring L.A. History One Bar at a Time"}
{"title":"Surf Lessons?"}
{"title":"Kraft Hockeyville - Pickwick Ice (Burbank) needs your votes! This facility is used by thousands in the East valley."}
{"title":"Locally organized Pasadena SR-710 Alternatives Work Group offers rail/bike/ped alternatives to Metro's 710 tunnel proposal"}
{"title":"Metro Proposes New Letter Designations for Rail and BRT Lines"}
{"title":"Locally organized Pasadena SR-710 Alternatives Work Group offers rail/BRT/bike alternatives to Metro's 710 tunnel proposal"}
{"title":"[Meet-up]$20 Texas Hold'em home poker game this Sunday at 4:30pm, new players welcome :)"}
{"title":"Man Accused of Raping 15-Year-Old Mar Vista Teen Who Disappeared Weeks Ago"}
{"title":"Here's the full report of the Metro study on the Orange Line upgrade and SFV-SGV transit."}
{"title":"Any good auto mechanic shops in LA?"}
{"title":"USC GRAD STUDENT HOUSING"}
{"title":"Seeking a pocket compass in Los angeles"}
{"title":"Red Not Chili Peppers At The House of Blues!"}
{"title":"Notebook on Cities and Culture\u2019s Guide to Los Angeles"}
{"title":"Please help! Stolen red Nishiki bike! :("}
{"title":"A student documentary about LAs car culture"}
{"title":"The Hottest New Burgers in Los Angeles 2015"}
{"title":"Protesters Take to the Streets of Downtown L.A., Decrying Fatal Use of Force by Police"}
{"title":"State of the City 2015"}
{"title":"The Ghost Town of Los Angeles - Manchester Square next to LAX"}
{"title":"Landlord is asking for a HUGE extra deposit."}
{"title":"$1 Cocktails and Happy Hour Specials for Tax Day in Los Angeles (2015)"}
{"title":"Protesters block Blue line and cause major traffic"}
{"title":"P-22, Paparazzi Victim: \"What quickly became apparent was that NBC was running the show. It was as if the entire operation was intended to create compelling television rather than to maximize the welfare of the animal.\""}
{"title":"Our very own Upstairs bar at Ace hotel is nominated for the best rooftop bar in the country. If you have a second, check out the link and give us a shout!"}
{"title":"Help please. I'm looking to rent a a garage or a yard around the Pasadena area."}
{"title":"Uber and Lyft to be Allowed at LAX per Garcetti"}
{"title":"Trying to find work in Los Angeles"}
{"title":"Griffith Park\u2019s Famous Resident P22"}
{"title":"Everyone is invited, Sunday, April 19th \u2013 11am to 1pm at the Santa Monica Airport Observation Deck - 3233 Donald Douglas Loop South, Santa Monica, CA 90405."}
{"title":"I keep getting phone calls from a 619 number that are just a recording of a woman speaking Spanish. Anyone know what's up with that?"}
{"title":"Garcetti to Consider Capping Parking Tickets at 23 Bucks"}
{"title":"Any Sheriffs here? re: Proof of insurance ticket"}
{"title":"You know you've been in L.A. for a long time when you start hearing songs in K-EARTH that used to be played on KROQ."}
{"title":"Moving back to the Valley! Any tips on good apartments?"}
{"title":"Metro debuts new transit etiquette videos"}
{"title":"Anyone in Silverlake lose their lizard? Right around London street."}
{"title":"The Seinfeld Apartment (In LA!)"}
{"title":"Orange Line Pedestrian Underpass. Opens Feb 2016. (F**king Finally!)"}
{"title":"Dtla artwalk parking question"}
{"title":"What did I just see flying in formation over the West Side?"}
{"title":"So, what are the other twelve guys doing? Corner of Flower and 5th."}
{"title":"anyone need/want an entry spot in this weekends marathon?"}
{"title":"Did anyone just see a massive effing Osprey fly over Venice?"}
{"title":"Thanks for nothing, DWP! \"Billing fiasco could cost customers $200 million\""}
{"title":"Thick cut bacon similar to Peter Luger Steakhouse?"}
{"title":"Ospreys over Venice - I guess practicing for the President's visit later this week"}
{"title":"Ospreys over Venice - always fun when the president is in LA"}
{"title":"Ospreys over Venice - always fun when the President is in town"}
{"title":"Need a place to stay for 4 months ASAP!"}
{"title":"This happened right 'behind' my apartment in Studio City!"}
{"title":"Help me find a home for my foster boy, Spike! (LA area) would love to find him a loving furever home before I have to take him back to the SPCALA. Any experienced cat owners out there that want a sweet, 4 month old handsome tabby boy?"}
{"title":"My band ShoplifterS is playing this Sunday night, at Alex's Bar, in Long Beach! Come say hi?"}
{"title":"Has anyone tried any of the Valet parking apps like Uber Valet or Luxe Valet?"}
{"title":"Pedestrian in critical condition after being struck by car in Glendale"}
{"title":"Gunman in Park La Brea Home Invasion Sought"}
{"title":"Girl Walks Around L.A. With No Pants"}
{"title":"The view from my kitchen in Hollywood."}
{"title":"Anyone know where I can buy Sparklers?"}
{"title":"neverboredLA - I made a web &amp; iphone app so you don't ever have to be bored! (unless you choose to; also this is pro bono; all the help you can offer is appreciated)"}
{"title":"DO NOT eat at Subway on 5353 Wilshire Blvd (Mid-Wilshire/Miracle Mile)"}
{"title":"Road hazard alert for bikers - Glendora Mt. Road"}
{"title":"15 years in L.A. and it still blows my mind that such beautiful solitude is just 15 minutes from Downtown."}
{"title":"Are there affordable places to rent for a 21 y/o?"}
{"title":"Hello Los Angeles! My soon to be wife and I are coming to visit you for our honeymoon in August, what should we do?"}
{"title":"Anybody selling 2 Rebelution tickets for 3/13 @ the Hollywood Palladium?"}
{"title":"The 20 Best Tribute Bands in Los Angeles"}
{"title":"CRSSD Fest is selling out, please reddit, help me distrubute 7 more tickets so I can go for free !!"}
{"title":"[Meet-up] Brunch at The Magic Castle (x-post from r/orangecounty)"}
{"title":"SFV dwellers: Which area do you think is better to live in- NoHo by the Arts District or Sherman Oaks? Why?"}
{"title":"Watching Paint Dry | ep. 21 | Tom Explores Los Angeles"}
{"title":"PSA: Obama's coming to town Thursday."}
{"title":"Oh Hai! Amazing Photos Capture LA's Newest Baby Mountain Lions."}
{"title":"MV-22B Osprey VIP's from Marine Corps HMX-1 at Santa Monica Airport today"}
{"title":"Lunch at Mexicano LA!"}
{"title":"How to get more into the music scene in Los Angeles?"}
{"title":"What legal recourse do I have to kill birds?"}
{"title":"Photo Party in LA Tonight!"}
{"title":"Accidentally Entered r/LosAngeles Incorrectly, Was Not Disappointed"}
{"title":"It was quite an undertaking but we just rescued this cute little guy from a storm drain. (x-post from /r/aww)"}
{"title":"Brand new to LA. Are there any good taco spots along the 10 in the Culver/USC area that serve good queso, and you don't have to get a waiter...?"}
{"title":"Is it just me or does it seem like LAPD/CHP has been out in full force ticketing drivers lately?"}
{"title":"Looking For a candy doctor in LA"}
{"title":"Anyone have an extra ticket to Paul F. Tompkins show at the Palace Theater on Saturday, 5/6?"}
{"title":"Your hair stylist has on average 372 hours of training. Your real estate agent? Just 70..."}
{"title":"What Will Really Happen When San Andreas Unleashes the Big One? -- A major earthquake will cause plenty of destruction along the West Coast, but it won\u2019t look like it does in the movies"}
{"title":"Who has classpass?"}
{"title":"http://graphics.latimes.com/homeless-los-angeles-2015/"}
{"title":"My friends' dog ran away in the valley near lankershim and sherman way about a week ago, please let us know if you have any leads. Thank you!!"}
{"title":"Vintage O'Keefe &amp; Merritt Stove/Oven For Sale in LA. $3500"}
{"title":"Weekly What To Do: Which Taste Better Cats or Bread? [My Site]"}
{"title":"JON DALY + COLTON DUNN + KATE BERLANT at Cool Shit/Weird Shit 6/8 at UCB FRANKLIN"}
{"title":"Can micro-apartments really benefit Los Angeles?"}
{"title":"California Senate approves health care for undocumented immigrants: A proposal to expand health care to Californians in the country illegally cleared the California Senate on Tuesday, passing on a 28-11 vote and heading to the Assembly."}
{"title":"I have an extra ticket to Tacolandia"}
{"title":"McDonald's Futuristic Self-Serve Kiosks Debut In DTLA"}
{"title":"Woman Hit On Highland and Santa Monica"}
{"title":"This guy is a scam artist. He advertises jersey and shoe sales on FB but took my money and ran"}
{"title":"Friend visiting from the UK in the spring, must-see places to take her?"}
{"title":"Waiters No More: Unemployed Actors Now Drive Ubers"}
{"title":"How Uber is changing nightlife in Los Angeles"}
{"title":"Paradise Cove gets Coastal Commission warning over beach access"}
{"title":"Anniversary"}
{"title":"Downtown from Griffith Park last night. Finally, some clear skies..."}
{"title":"Help finding this asian vendor place?"}
{"title":"Los Angeles daily discussion thread 04/14/15"}
{"title":"Does anyone have info on how much California agriculture contributes in state taxes vs. everyday citizens?"}
{"title":"Fixed.com Launches in LA today to fight Parking tickets"}
{"title":"Traffic experts of LA, what do you think?"}
{"title":"Please help me plan out some things to do while I'm in LA for a month!"}
{"title":"Man with Highest IQ in America lives in Los Angeles, California, Interview on Everything Under the LA Sun: Rick G. Rosner: Giga Society, Member; Mega Society, Member &amp; ex-Editor (1991-97); and Writer (Part Three)"}
{"title":"Best camping area for noobs within a 5 hour drive of SoCal, and a great view of the night sky?"}
{"title":"Bicyclist Struck By Two Cars In Beverly Hills in Hit and Run :((("}
{"title":"Metro is Getting Serious About Bringing Light Rail to the SF Valley"}
{"title":"LAT: Create state tax credits to fund seismic retrofits"}
{"title":"[REQUEST] Anywhere in LA where indoor type plants plants are growing wild and free for the taking?"}
{"title":"Distraught Milwaukee man shot dead after running over 2-year-old, police say"}
{"title":"LA Times festival of Books this weekend. Stop by and say hello. I'll draw for you."}
{"title":"My car popped this notification like 40 minutes ago, anyone see anything? I can't find any news about it."}
{"title":"Volunteer to help Los Angeles-area high schools teach computer science"}
{"title":"What's the best way to get discounted tickets to Disneyland?"}
{"title":"Taking 5 grad students out for sunset easy hike +\"farm to table\" dinner"}
{"title":"Is anyone here helping to clean up the tar in Long Beach, or know someone who is?"}
{"title":"Spearmint Rhino King &amp; Queen on DrSuzy.Tv tonight! Come to the show!"}
{"title":"Racquetball game in Van Nuys or Westwood"}
{"title":"Potential hurricane/tropical storm could hit LA next week"}
{"title":"Failed Shoemaker Canyon Road, which blasted a few tunnels into the mountains. Nothing at all to do with Nukes! lol [Video]"}
{"title":"Experience the wildness of Venice Beach!"}
{"title":"EARTHQUAKE"}
{"title":"Earthquake!"}
{"title":"Earthquake"}
{"title":"Earthquake??"}
{"title":"Quake!"}
{"title":"Earthquake?"}
{"title":"Turns out that was an earthquake. M3.4 - 3km NNE of Gardena, California"}
{"title":"Cops looking for 16 year old girl who ran away after being overwhelmed with SAT"}
{"title":"Los Angeles Weekend Guide (10/10-10/12): 5 Things To Do Around Town [HausAngeles Blog]"}
{"title":"Cat found in Canyon/lower Palisades"}
{"title":"Los Angeles weekend discussion thread 10/10/14 - 10/12/14"}
{"title":"Amazing Shots of a Growing LA in the \u201920s and \u201930s"}
{"title":"The Blood Moon (repost r/funny)"}
{"title":"Garcetti: It's 'highly likely' NFL team will come to L.A."}
{"title":"Lobsterfest this Sat in West Hollywood"}
{"title":"Obamageddon Hits Los Angeles: TheWrap's Guide to Today's Street Closures"}
{"title":"[OFFER] Ride Share heading to Las Vegas tonight. 10/9/14 x-post LAlist"}
{"title":"great opportunity for meth users!"}
{"title":"Wife's birthday is coming up. Want to take her to an amazing sushi dinner. Where should we go?"}
{"title":"Malibu beach side bar w/ wifi"}
{"title":"One of the most fun and coolest segment of this past weekend's CicLAvia... the 2nd St. tunnel featuring the LED shopping cart DJ!"}
{"title":"Moving Company in Los Angeles"}
{"title":"Thanks Obama"}
{"title":"/r/losangeles Los Angeles game night meet up! tomorrow! Friday, October 10, 2014 7 PM"}
{"title":"I always knew I'd find happiness in Los Angeles"}
{"title":"Join In Honor Of Conor 5K Run/Walk on Oct. 26 to support awareness of hit and runs and road safety"}
{"title":"did you guys just hear that really loud noise?"}
{"title":"great opportunity for pokemon users!"}
{"title":"The 911 call made moments after the fatal shooting of Bell Gardens Mayor Daniel Crespo. Crespo\u2019s 19-year-old son told a dispatcher his mother had shot his father and insisted it was not his mother\u2019s fault (xpost from r/911Calls)"}
{"title":"Local NIGHT hikes close to LA (more specifically Burbank)?"}
{"title":"Obama stopped by Cross Campus LA and was offered a job at a startup called Sensay"}
{"title":"Where can i safely and cheaply sleep/car camp for one night on short notice?"}
{"title":"dead traffic on 22 east by city drive!!"}
{"title":"IndieCade 2014, Who's going?"}
{"title":"Disabled people are forced to sit behind a wall at The Shrine Expo Hall. WTF. ($50 + $20 parking)"}
{"title":"What parties are the ones to check out? Any of them?"}
{"title":"Are they doing anything like Art In The Streets again?"}
{"title":"Famous LA Graffiti artist TRIGZ shot dead in North Hollywood"}
{"title":"What are the most common (and useful) surface streets?"}
{"title":"Biking Trip Ideas?"}
{"title":"Best place to park around DTLA for a whole day tomorrow on friday? and able to get the car back at like 11pm? Going to be all around dtla, the library, la live, little tokyo."}
{"title":"Moving To Another Country - 2 Awesome Kitties Need A Home - X Post in r/cats"}
{"title":"Knuckleheads shoots self after accidently shooting his stupid best friend..."}
{"title":"Knucklehead shoot himself after accidently killing his stupid best friend..."}
{"title":"SF prefers 60F to 80F. Literally brain damage."}
{"title":"Android application development in Los Angeles"}
{"title":"Up To 20% Off Sitewide @ Macy\u2019s"}
{"title":"California Voter Guide - See how your political beliefs match local candidates and ballot measures"}
{"title":"The Good and Bad of the San Gabriel Mountains National Monument"}
{"title":"This map shows all crimes reported last month throughout LA (and there are A LOT of them in my neighborhood alone)!"}
{"title":"Obama declares California forest a national monument"}
{"title":"My friend's daughter is missing. Please keep a look out in your area and contact the number on the flier for any information or sighting. Her fathers are heartbroken. Thank you mods for working with me as well."}
{"title":"Bronson Canyizzle"}
{"title":"Anyone know of a vet or animal hospital that performs a Perineal Urethrostomy and is somewhat reasonably priced?"}
{"title":"PC Repair in LA"}
{"title":"Los Angeles Rent Control Question on rent increase"}
{"title":"What is the \"Hobby Lobby\" of Los Angeles?"}
{"title":"Westside/LA movers suggestion? not much stuff to move"}
{"title":"Dr. Susan Block's Journal | Full Moon Over Bonoboville &amp; Mooning Therapy 24/7"}
{"title":"The best kind of tip."}
{"title":"Visitng LA for a couple hours before flying back home -- What is a must-do/visit?"}
{"title":"$5,000 REWARD for information leading to the return of lost Amazon, \"Webber.\" NO QUESTIONS ASKED!"}
{"title":"$5,000 REWARD for information leading to return of lost Amazon, \"Webber.\" NO QUESTIONS ASKED!"}
{"title":"Anyone have (or know of) roof access to a building in Koreatown or mid Wlishire?"}
{"title":"petting cats"}
{"title":"Driver seen on video slamming man's head into ground in road-rage fight"}
{"title":"I need a pool! It's too damn hot!"}
{"title":"Giant tree falls over by Runyon Canyon on Franklin Ave."}
{"title":"Porn regulators call for use of \"imitation ejaculate\""}
{"title":"EARTHQUAAAKE"}
{"title":"What are the children in green t-shirts asking for money near UCLA, Westwood?"}
{"title":"My dog went missing in Reseda near the Wilbur/Sherman Way cross roads. Can you keep an eye out?"}
{"title":"Freestylin' Dodgers Fans"}
{"title":"GTA V In Real Life"}
{"title":"Anyone have their neon green mountain bike stolen recently in Mar Vista or Culver City area recently? I may have spotted it"}
{"title":"Los Angeles daily discussion thread 06/08/15"}
{"title":"Anyone take uber/lyft to and from union station?"}
{"title":"Thinking of moving to an apartment next to Skid Row, thoughts?"}
{"title":"The skunks who just wanted to hang out at Dodger Stadium"}
{"title":"UPDATE: Thank you! SB-277, the bill to end vaccine personal belief exemptions, passed the state Senate with your help! But now, 7 key LA members of the state assembly will be voting in committee TOMORROW, and they're still undecided..."}
{"title":"60% of the car is on red?"}
{"title":"Totally Awesome Things To Do In LA - 6/8-6/14"}
{"title":"What do you think of the new picture for /r/losangeles?"}
{"title":"Help! Found a kitten in my backyard, may be blind"}
{"title":"Can reddit help find this artist? (Micheltorena Steps - More info in comments)"}
{"title":"Carson approves $1.7B stadium for Chargers and Raiders"}
{"title":"Carson City Council approves $1.7-billion NFL stadium"}
{"title":"Anyone else have their TWC cable stop working since this afternoon?"}
{"title":"Shake Shack is Coming to L.A. in 2016"}
{"title":"Some Landlords In L.A. Want Tenants To Pay Water Bill In Exchange For Reduced Rent | CBS Local"}
{"title":"Video Appears to Shows Federal Officer Grabbing, Kicking Woman\u2019s Cellphone in South Gate"}
{"title":"Help my son is missing, Chatsworth [x-post /r/SFV]"}
{"title":"Beverly Hills, Likely Subject to 36% Water-Use Cut Mandate, May Fine Water Wasters $1,000"}
{"title":"Raw tuna in sushi linked to Salmonella outbreak in California"}
{"title":"San Bernardino County to Pay $650,000 to Man Seen Being Beaten by Deputies"}
{"title":"Californians can now pay cash for health insurance at 7-Eleven"}
{"title":"Can we create a bot that moves any post I don't like to a new \"posts I don't like\" sub?"}
{"title":"LA city and county swap traffic info for Waze drivers' data"}
{"title":"[Meet-Up] Wanna go to a Calvin Harris Concert in Vegas for free?"}
{"title":"Anil Kapoor will fly to Los Angeles next week for Family Guy"}
{"title":"The City Council in Carson, California voted 3-0 tonight to approve a planned $1.7 billion stadium that would house both the NFL's Raiders and Chargers. Council members decided to bypass a public vote on the stadium project."}
{"title":"I came across a great and really large album (143 images) of photos from around southern California"}
{"title":"Water Rationing for Earth Day"}
{"title":"Developer Geoff Palmer calls his critics \"poverty advocates\", boasts about receiving \"Hero Award\" in new article"}
{"title":"Do any of you guys have HD photographs of LA with palm trees in frame?"}
{"title":"Free LAVA Sunday Salon 4/26: The Go Go Dancer &amp; Charles Bukowski"}
{"title":"Los Angeles daily discussion thread 04/22/15"}
{"title":"Yesterday's \"weather\" in Los Angeles."}
{"title":"Wanna trade crazy homeless guy stories?"}
{"title":"The Hardest-Working Mariachis in Hollywood: A Tribute to Mariachi Plaza in Boyle Heights"}
{"title":"Even cars wait at bus stops in LA"}
{"title":"Koreatown or NoHo?"}
{"title":"Where can I watch this near Los Angeles tonight?"}
{"title":"ISS over Los Angeles Thursday night"}
{"title":"TIL 30% of low-wage workers in LA are paid (illegally) below the minimum wage"}
{"title":"Notoriously Shitty Police Department Demands Raises"}
{"title":"LA Times: Coachella missed connections... Tales of lost love in the desert"}
{"title":"Women will soon possibly be able to sunbathe topless in Venice Beach. Watch all the pervs come out of the woodwork"}
{"title":"L.A. Bans Selling Stuff At Beaches And Parks"}
{"title":"Anyone know what's going on at the Newton Area Police Station? Channels 4, 5, 7, 9, 34, and 52 trucks are all surrounding the building."}
{"title":"Car chase going on right now in Atwater"}
{"title":"Apple Maps Van in Sherman Oaks."}
{"title":"Moving to LA soon..."}
{"title":"Nervous about moving to USC area"}
{"title":"Homeless Camps Will Be Easier To Dismantle After Closed-Door Vote"}
{"title":"Has anyone eaten at the Grand Central Market?"}
{"title":"A good vegetarian restaurant near USC?"}
{"title":"How Your Date of Birth May Affect Your Mood &amp; Behavior"}
{"title":"YSK You Can Charge Your Phone On The Blue/Expo Line. Now With Impunity."}
{"title":"Does anyone know of any private transportation services to Snow Summit/Big Bear or Mountain High from LA?"}
{"title":"A police officer watches traffic on Hollywood Boulevard after holiday lights were turned on, in this photo looking east from McCadden Place, November 28, 1952."}
{"title":"A minimum 2 hours commitment [r/tumblr]"}
{"title":"i am trying to get out of my lease. uninhabitable conditions, cockroaches, no heat, broken oven. need advice."}
{"title":"Don't want to babysit in downtown LA, save me"}
{"title":"Power Outage? 12/27/14"}
{"title":"Southwest Airlines 427 crash lands at LAX. Mark Rufallo presumed dead."}
{"title":"Safe &amp; heap parking in San Pedro"}
{"title":"Today I did a trip with some friends to go from snow to sand in the same day! Mt. Baldy to Santa Monica!"}
{"title":"Rediscovering Los Angeles with Jagger \u2022 Curves and Chaos"}
{"title":"Santa Monica Pier"}
{"title":"TIL this is the original California Republic flag"}
{"title":"Found a rooftop hatch, climbed up, discovered a new view.."}
{"title":"The Mystery Of The Brentwood Umbrella Trees: LAist"}
{"title":"Lancaster man arrested for posing as cop to kidnap and sexually assault teenager charged with attacking another girl knowing he was infected with HIV"}
{"title":"Weekly What To Do: Memorial Day Weekend Rocking Theme Parks"}
{"title":"Snoop Dogg, Pharrell Williams, and Stevie Wonder star in a new 4-minute commercial for medical marijuana, Los Angeles, and the Sony Xperia\u2122 Z3 Premium Smartphone"}
{"title":"More Than 30 Salmonella Cases In California Possibly Linked To S - Los Angeles News"}
{"title":"What does stella rosa wine taste like?"}
{"title":"Los Angeles weekend discussion thread 05/22/15 - 05/24/15"}
{"title":"Chinese developer unveils plans for luxury condo tower in downtown L.A."}
{"title":"Crews are finally repairing the windows that were damaged during that Da Vinci fire downtown back in December"}
{"title":"Restaurant for bachelor party"}
{"title":"New Handheld Devices Make It Easier For Glendale PD To Write Traffic Tickets"}
{"title":"Vintage photos of Soldaderas, women of the Mexican Revolution"}
{"title":"Patriot's Player Julian Edelman seen working out on LA Beaches [My Blog]"}
{"title":"The people of Tijuana need your help."}
{"title":"Restaurant Owner to Yelp Reviewer: You are a \"Lying Filthy Cunt Pig\""}
{"title":"City of LA: Los Angeles Logo I Designed"}
{"title":"LAFD Station 9 Through the Eyes of Australian Television [x-post from r/LAFD]"}
{"title":"L.A. Firefighter Caught on Camera Beating Woman for Feeding Stray Cats."}
{"title":"Are there any volunteer opportunities for the Santa Barbara oil spill?"}
{"title":"Another drone shot, this time of 6th St. bridge."}
{"title":"What To Expect Before Visiting Los Angeles!"}
{"title":"How many fire hydrants are in Los Angeles?"}
{"title":"37-Story Condo Tower Planned For Twelfth and Grand in Booming South Park"}
{"title":"The border between LA and Beverly Hills."}
{"title":"LAFD Question: How is Your Pacific Palisades History?"}
{"title":"Any idea where this train tunnel is located?"}
{"title":"Sleepover at the Animal Shelter"}
{"title":"Los Angeles Confronts a Spike in Homelessness Amid Prosperity"}
{"title":"I live in Los Feliz. This is how I feel now that all the hipsters have migrated to Coachella for the weekend. TJ's parking lot just got better."}
{"title":"Does anyone know how the new \"bus lanes\" on Wilshire work?"}
{"title":"Serious question: Are you afraid of the LAPD officers as much as I am?"}
{"title":"Multi-Fandom Convention - Labor Day Weekend 2015"}
{"title":"Report: Converting Metro Orange Line to rail could cost $1.7 billion"}
{"title":"MY TEACHER STUDENT RELATIONSHIP LOVE STORY"}
{"title":"The TRUTH about EASTER &amp; JESUS CHRIST &amp; YEEZUS"}
{"title":"E-Waste recycling 4/11-4/12 @ Rosemead high school"}
{"title":"Any top-notch tailors in LA? Used to go to Eddie's Tailor Shop Downtown."}
{"title":"So you're proud of your carbon footprint?"}
{"title":"Star Wars: Invasion Los Angeles"}
{"title":"Group Sets Fire to Car With Driver Inside"}
{"title":"anyone want to attend a flower making workshop The LINE Hotel in la at 2pm (in about an hour)? you can go for free, will call and have your name put on reservation. first person to reply gets two tickets."}
{"title":"UCLA or Cedars-Sinai?"}
{"title":"I know it's April but here's a song I wrote about a Christmas in Los Angeles. It's called: \"Christmas In Los Angeles\""}
{"title":"Halal Guys Just Confirmed Its Second Southern California Location in Long Beach"}
{"title":"Is the LA Times a good paper to read?"}
{"title":"lynda access doesn't seem to work"}
{"title":"Meet-up at Spring St Bar"}
{"title":"Jobs, Employment in Los Angeles."}
{"title":"Hollywood Bowl fireworks tonight (7/3) - Want to join me?"}
{"title":"Fireworks Tonight? (7/3)"}
{"title":"4th of july late events?"}
{"title":"HELP! on vacation in ca and I left my purse in a restaurant off of PCH"}
{"title":"Saw this van while driving around downtown"}
{"title":"[6:15 PM 7/3] Police pursuit, black Isuzu SUV in mid-city area"}
{"title":"Looking to spend 4th of July at the beach - but not sure which one! Help!"}
{"title":"HUNDREDS PROTEST CALIFORNIA VACCINE BILL IN SANTA MONICA"}
{"title":"Booze at Redondo Beach?"}
{"title":"What's Your Favorite Jazz Club in LA?"}
{"title":"Car scene in LA"}
{"title":"Complete guide to Southland fireworks July 4"}
{"title":"AAA offers free 'Tipsy Tow' for drivers who had too much"}
{"title":"[Photo] Lovely skyline over the Verdugo Hills tonight."}
{"title":"My friend is missing. Please help if you have details"}
{"title":"Hey I have extra tickets to the OC block party at Angels for the 4th! PM me if you want to go"}
{"title":"My friend is missing. Please help if you have any details"}
{"title":"LAPD civilian oversight SHOCKINGLY doesn't look into bad cops. Their list of projects will make you \u0ca0_\u0ca0"}
{"title":"In Koreatown. Who could I call if I keep hearing my neighbor beating his small dog?"}
{"title":"How L.A. Kitchen does it all, from fighting food waste to training workers and feeding seniors"}
{"title":"[NSFW] Video: Worried man calls for a mental health unit to be dispatched to help his brother; deputies are sent instead, lie about aggression, and kill him"}
{"title":"TIL that you only have 20 days to register your car with the state. If you register on day 22, it will cost you $550 to register two older cars. FML"}
{"title":"Skydiving around the LA Area?"}
{"title":"Open interviews in Pomona today for a temp valet job"}
{"title":"Hollywood Bowl getting a new caterer starting in 2016"}
{"title":"any redditors witness this?"}
{"title":"God I hate this freeway"}
{"title":"Mayor Garcetti Signs \"Vision Zero\" Executive Directive to End Traffic Deaths in LA by 2025"}
{"title":"what is your favorite buildings in downtown Los Angeles."}
{"title":"Is it raining for anyone else?"}
{"title":"It's raining!"}
{"title":"Where are done good places to take photographs in LA?"}
{"title":"LA's Olympic bid says LAFC's stadium would be used as an \"aquatic center.\""}
{"title":"Rain in Hollywood!"}
{"title":"Huge fuckin' boom in Torrance/Gardena"}
{"title":"Dozens of Customers Report Feeling Sick After Eating at SoCal Chipotle"}
{"title":"I found some SoCal tourists' SD Card in Chicago. Help me get it home."}
{"title":"Voter Registration"}
{"title":"Patton Oswalt &amp; Greg Sestero (The Room) hosting Cinefamily screenings of \"Dude Bro Party Massacre III\" Kegger &amp; BBQ on Labor Day."}
{"title":"A Review Of The Trump National Wine &amp; Craft Beer Festival; This Is One Of The Top Singles Events In L.A.!"}
{"title":"When will home prices fall again?"}
{"title":"Who to call about a caged dog."}
{"title":"I love Los Angeles"}
{"title":"Todd McNair vs. the NCAA is happening as we speak. \"Malicious\" e-mails that \"tend to show ill will or hatred\" towards USC may be revealed after a decade."}
{"title":"I need to get rid of my slightly broken fridge - what's my best option?"}
{"title":"THIS FRIDAY! r/LosAngeles Does HALLOWEEN Dark &amp; Dirty: Games, Prizes, Dudes Playing Dudes Disguised as Other Dudes."}
{"title":"In LA and want to learn how to be a CTO? This General Assembly class is for you. Click the link to learn more."}
{"title":"Saturday Halloween?"}
{"title":"Pursuit of orange cart ends at S Ogden St &amp; Colgate Ave; at least 8 patrol cars, 3 fire trucks on scene"}
{"title":"Misadventures in echo park"}
{"title":"Copenhagen Pastry almost ready to open in Pasadena"}
{"title":"Damn you Need Kashkari"}
{"title":"4GB Mac Ram, 2GB Desktop Ram, Red iPad Mini Smart Cover, T-Mobile ZTE V768"}
{"title":"American cancels LAX flight after WiFi with terror group name pops up"}
{"title":"Five Shot, One Killed in Watts Shootings: Five people were shot Sunday night, including a woman who died, in what police said could be two related shootings at the Imperial Courts public housing project in Watts, police said."}
{"title":"Sandwiches Around The World Without Leaving Los Angeles"}
{"title":"[Meet-up] THIS FRIDAY! Join us for r/LosAngeles's HALLOWEEN party! 10/31/2014"}
{"title":"L.A.'s minimum wage plan to advance without time-off mandate"}
{"title":"Today is my birthday, what is some free stuff around west Los Angeles I can get?"}
{"title":"Safe but affordable place to live in LA? Early 20s couple."}
{"title":"LA County Fair - Season Pass $20 - Expires May 25"}
{"title":"\"Los Angeles isn't a real city, it's a just a large collection of suburbs connected by freeways\". Agree or disagree?"}
{"title":"Gas line leak prompts evacuations in Hollywood"}
{"title":"Learn to Program Bootcamp - Where's A Good Area In LA to be Based out of?"}
{"title":"Thoughts on a Programming Bootcamp in LA"}
{"title":"It's back: It rains in LA, internet outage ensues"}
{"title":"FOUND TURTLE (los feliz stairs)"}
{"title":"Went on a Saturday Canyon Run Through Angeles Crest and Ran Some Snow"}
{"title":"Hitchhiking Redditor needs your help! Or maybe just a good tip on where to camp!"}
{"title":"It's back: It rains in LA, Time Warner internet outage ensues"}
{"title":"I hope someone in marketing was fired for this blunder."}
{"title":"Amgen Tour of California Bicycle race from Downtown to Pasadena is tomorrow. any suggestions/recommendations for watching?"}
{"title":"Mountain biking options? (3-days off in Studio City)"}
{"title":"[OUR EVENT] Stay Awhile, and Listen: A storytelling open mic"}
{"title":"Drunk Driver at 6:30 PM in Burbank"}
{"title":"Venting because my neighbor's pit mix attacked our 9 month border collie mix."}
{"title":"Does any U.S. city have something worse than Skid Row?"}
{"title":"http://www.reddit.com/r/palmdale/comments/36866d/xpost_rantelopevalley_anyone_down_to_see_ex/"}
{"title":"hmm... I Love SM - Walgreens Shirt..."}
{"title":"LA after storm 5-15-15"}
{"title":"LA after storm 5-15-15"}
{"title":"EPIK HIGH feat. Dumbfoundead concert at The Wiltern on May 29. They're my favorite hip hop group of all time, I'm so hyped!"}
{"title":"Power outage in Inglewood?"}
{"title":"You Smell -Hollywood Kick Ass BLOG"}
{"title":"Lost Parrot (again)"}
{"title":"ARE YOU FUCKING KIDDING ME, WATCH ANTHONY BOURDIANS LAYOVER ON LOS ANGELES AND THEY GO TO JUMBOS CLOWN ROOM"}
{"title":"Strange sounds in the sky over the last week???"}
{"title":"Los Angeles daily discussion thread 7/2/15"}
{"title":"4th of July day ideas (not fireworks)"}
{"title":"Parking Enforcement - 4th of July Weekend"}
{"title":"5 Reasons to Keep Your Divorce Out of Social Media"}
{"title":"Photographer assaulted by Inglewood Police."}
{"title":"Tattoo shop.."}
{"title":"Cheap housing for 5 days"}
{"title":"So my car got (illegally...?) towed from a valid spot last night/this morning (2 AM Wednesday). Questions for other locals."}
{"title":"The currently developing El Ni\u00f1o has the potential to become the strongest on record and could deliver some heavy rain events to California."}
{"title":"Los Angeles daily discussion thread 7/15/15"}
{"title":"Photo essay about Galco's Soda Pop Stop [My Blog]"}
{"title":"Video released shows police killing unarmed man in LA suburb"}
{"title":"I wrote this, and would love /r/LosAngeles' thoughts! \"One Year In Los Angeles: A New Yorker's Photo Essay\""}
{"title":"Help Save the Southwest Museum and Enjoy Rare Sodas This Weekend!"}
{"title":"Galaxy acquires Mexico team star Giovani Dos Santos after long pursuit. Great news for LA sports!"}
{"title":"Girl Hanging Off Apartment Balcony Rescued by LAPD"}
{"title":"New renderings of the planned observation deck on top of the US Bank Tower in DTLA"}
{"title":"A Different LA View"}
{"title":"Where's the best weekend Farmers Market for actual deals on veggies/fruits?"}
{"title":"Need a westside rentals account"}
{"title":"Los Angeles daily discussion thread 06/10/15"}
{"title":"Do you like ads? .... Wonderful site www.adsense-ads1.blogspot.com"}
{"title":"R.I.P. Vincent Bugliosi. Prosecutor who took down Charlie Manson"}
{"title":"Even L.A.'s process for reviewing police shootings stinks!"}
{"title":"Rainy days lead to awesome evening skies."}
{"title":"Free kitten!"}
{"title":"A Handy List of Fun &amp; Free L.A. Event Series Every Angeleno Can Check Out For Summer 2015 [MY BLOG]"}
{"title":"How I feel today..."}
{"title":"\"Who were the Monte Boys?\": Civil War-era San Gabriel Valley, vigilantism, and race"}
{"title":"50 Stunning Photographs of Los Angeles from Instagram."}
{"title":"Who Do We Blame for the Next Death on the Glendale-Hyperion Bridge?"}
{"title":"People have been saying we're having \"earthquake weather\", is this a real thing?"}
{"title":"Microsoft's Steve Ballmer has owned the Clippers for over a YEAR, let's do the right thing and make their logo Clippy the Microsoft Word Paperclip!"}
{"title":"If you want to see a hilarious and fascinating time capsule of LA in 1967-69, check out DRAGNET. It's free on Hulu (or Netflix w/o ads)."}
{"title":"Seagoat: LIVE @ Molly Malone's, June 12 (8pm, doors open at 7:30) [My Event/Band]"}
{"title":"SEAACA, a high kill shelter in Downey is due to euthanize this dog and many very soon. Please consider adopting this sweet little guy"}
{"title":"The growth of the Shanghai Metro from 1993-2015. Now the worlds longest metro. The first modern rail line in LA, the Blue Line, opened in in 1990."}
{"title":"After 60 years of performing, the original Disneyland Band is going to be replaced in July by a more \"high-energy\" production."}
{"title":"[Meet-up]Wii / N64 / PS1 / SNES videogame party this Friday at 6pm"}
{"title":"[Meet-up]$20 Texas Hold'em home poker game this Sunday 6/14 at 2pm, new players welcome :)"}
{"title":"Another moving to LA post (from Philly to DTLA) details inside"}
{"title":"Looking for car/drift events?"}
{"title":"Affordable, honest plumber? [x-post /asklosangeles]"}
{"title":"\"Now I know how the Sioux Nation felt when the Union Pacific Railroad destroyed their homes\" -Acton resident re: High speed rail"}
{"title":"Bumper stickers can be amusing at times..."}
{"title":"House Passes Amendment Nullifying California High Speed Rail Grant Agreement"}
{"title":"Weho Apartments 1-2 bedroom under 2k... is it possible?"}
{"title":"I did the math on how much of California's water almond farmers are using."}
{"title":"Relocating to California looking for work at a restaurant."}
{"title":"I'm hoping they do a Documentary on the construction of the Wilshire Grand Tower. It's a pretty historic construction project that will change the City's appearance forever."}
{"title":"Deep sea fishing? (Marina del Rey / long beach)"}
{"title":"New York Times article from 1984 regarding the LA housing bubble. Sounds eerily like the present day."}
{"title":"Sweet! Los Angeles is closer to legalizing beekeeping"}
{"title":"In-N-Out Burger. Is it a culture thing?"}
{"title":"Wet weather may be headed to the Southland this winter, as experts say early signs of El Nino are promising."}
{"title":"Video of Skateboarders at Hollenbeck Park assaulting my neighbor have gone viral on Facebook (Details in the Comments)"}
{"title":"Los Angeles County Pursuit 5/18/15"}
{"title":"More LAPD cops to ditch cars and walk the beat in Eastside areas"}
{"title":"Story about the fight for legalization of street vending on Los Angeles sidewalks."}
{"title":"What the heck is happening on the 210 near Arcadia?"}
{"title":"what is happening in hollywood"}
{"title":"My coworker was assaulted outside her office in Sherman Oaks and her dog was stolen. Please spread the word."}
{"title":"Frank G. Bonelli Regional Park in San Dimas"}
{"title":"Please keep a look out for Tayla Thompson. She is missing."}
{"title":"Planning to park near Dodger Stadium? Better have the right permit before you park on these Echo Park streets [updated]"}
{"title":"What happened on Alvarado/Wilshire Westlake area?"}
{"title":"southwest airlines baggage handlers used security clearance to smuggle pot thru Oakland airport"}
{"title":"Aerials of West Los Angeles and a famed landmark"}
{"title":"Anyone know where I can donate barely used Lego sets in LA?"}
{"title":"Looking for AA Program"}
{"title":"Earthquake?"}
{"title":"Valentino Rockstud Shoes &amp; Bags Sale|Valentino Outlet Store"}
{"title":"This is the best buttered bread and it can only be found in one bakery in Chinatown, LA"}
{"title":"Please, no: With Boston Out, Attention Shifts to Los Angeles for 2024 Olympics - WSJ"}
{"title":"Scam.."}
{"title":"I didn't go Kayaking, but I still think you guys will enjoy these from tonight."}
{"title":"View looking north on Highland near Sunset Boulevard. In the distance is the tower of the Hollywood First National Bank Building on the Northeast corner of Hollywood Blvd at Highland, ca., 1940."}
{"title":"L.A. Gangs\u2019 Hashtag Bet: Kill 100 People in 100 Days"}
{"title":"How to find commuter patterns in Los Angeles?"}
{"title":"Los Angeles daily discussion thread 7/28/15"}
{"title":"Shelby American is building 50 total units in aluminum and fiberglass body built from original blueprints and measurements and both will debut at California events in August 2015."}
{"title":"Gift Wallet - Get free gift card, awsome reward and make money"}
{"title":"#100days100nights: Gang threats of violence on social media draw fear"}
{"title":"Security and Driveway Gates Los Angeles"}
{"title":"Where to live if I love walking?"}
{"title":"Anyone in the area Mountain Bike and need a riding partner?"}
{"title":"LA Times Q&amp;A with LA's top water engineer"}
{"title":"Walking in L.A.: Times analysis finds the county's 817 most dangerous intersections."}
{"title":"Crips on my block wont let me film or take pictures"}
{"title":"Historic downtown LA drawing. Where is this? Artist help?"}
{"title":"How we did it: L.A. pedestrian accidents analysis | Los Angeles Times"}
{"title":"Need help with speeding ticket on the PCH"}
{"title":"Lost my wallet in WeHo last night"}
{"title":"I bought 2 tickets for L7 at the Fonda, I can't go, I'm selling them at face value, just trying to make sure they don't go to waste"}
{"title":"Westside rentals login? Will buy Guisados as a thank you!"}
{"title":"A police war on black men? (Fear of a BBC)"}
{"title":"LA bike lanes"}
{"title":"Only in Los Angeles..."}
{"title":"2bdr Rent Control vs 1bdr non-Rent Control"}
{"title":"Best way to get to Ktown from LAX, and vice-versa?"}
{"title":"A police war on black men? (Fear of a BBC)"}
{"title":"Bar 107 isn't closing, for now."}
{"title":"Art Laboe's Killer Oldies Return To L.A.'s Airwaves Again"}
{"title":"Bar 107 Refuses To Stop The Party (Until The Law Says So)"}
{"title":"Bar 107 decides they aren't leaving DTLA without a fight!"}
{"title":"Coulter: Media Ignores Beheading Outbreak in Mexico to Help Dems"}
{"title":"http://www.nytimes.com/1990/10/06/us/cincinnati-jury-acquits-museum-in-mapplethorpe-obscenity-case.html"}
{"title":"Getty Museum and LACMA to combine for two-venue Mapplethorpe show."}
{"title":"Restaurant in the NoHo area?"}
{"title":"Is location or quality of apartment more important when finding a rental?"}
{"title":"Southern California just had its first 'reverse' spring in nearly 100 years"}
{"title":"A friend of a friend, Feras Morad, was shot to death this weekend with no prior warning after falling from a window. The police did not contact his family regarding their dead child- they found out on Facebook."}
{"title":"BMW drives into motorcyclist on La Cienega and leaves him sprawled in the road after cell phone etiquette discussion"}
{"title":"Bar 107 Decides to Stay and Fight Eviction, Will #OccupyBar107"}
{"title":"Hollywood park demolition ... implosion"}
{"title":"Cute cat needs a loving home"}
{"title":"Huge Horde of Cops Traveling down Sepulveda in the SFV.... Any idea what is going on?"}
{"title":"Beautiful afternoon on Venice Beach"}
{"title":"Las Virgenes water district hires firm to patrol violations 24/7"}
{"title":"Man with weapon shot, wounded by L.A. County sheriff's sergeant. Near Lake Balboa."}
{"title":"20 Things to do in LA this Summer! #SummerInLA"}
{"title":"Hollywood Park goes Boom!"}
{"title":"Arrest Made In Massive Downtown Los Angeles Apartment Fire"}
{"title":"The girl who was injured yesterday at LAX, is the daughter of a flight attendant. Here is her go fund me"}
{"title":"LAPD is #1 in 2015. Woohoo! I think they are gonna win the title!"}
{"title":"An honest water commercial for Californians."}
{"title":"Scumbag alert"}
{"title":"Major Lazer album release party"}
{"title":"buying leather gloves in los angeles?"}
{"title":"10 extravagant luxury concierge services in Los Angeles"}
{"title":"What is the best app for using the bus/metro in Los Angeles?"}
{"title":"Kitson calls out Mayor Garcetti"}
{"title":"Cut the Cord: How we Saved Over $1,300.00"}
{"title":"Murder in Sylmar. Lots of helicopters and police in the area"}
{"title":"Alligator found in Van Nuys. Anyone missing pets for the last 40 years asked to call hotline"}
{"title":"traffic Traffic TRAFFIC"}
{"title":"Don't forget: DineLA Restaurant Week starts Jan 19th - Feb 1st!"}
{"title":"Just saw 9 police units scream down Devonshire Street in Northridge. Anyone know what's going on?"}
{"title":"[Meetup] week from today. 1/22 - 1st WeHo Poker night - low stakes"}
{"title":"StarTalk LIVE! with Bill Nye at The Palace Theatre on Thursday Jan 22."}
{"title":"STD Testing. Somewhere with Fast results?"}
{"title":"L.A. City Council embraces Mayor Eric Garcetti's quake retrofit plan"}
{"title":"Has anyone been to Aubrey Plaza's Pistol Shrimp game?"}
{"title":"Body cameras for L.A. police: Not everybody trusts the new tech"}
{"title":"Big drop in number of California students who are suspended, expelled"}
{"title":"[Update] Judge: 'Overwhelming evidence' against 3 accused of killing USC student"}
{"title":"Any story analyst jobs available?"}
{"title":"Rose City Pizza in Rosemead has a killer piece of Ninja Turtle art"}
{"title":"Narcotics officer injured in hit-and-run; manhunt underway"}
{"title":"What's the highest view available for free? (Or close to free?)"}
{"title":"Drug addicts nodding off after using heroin outside of DTLA library - [my channel]"}
{"title":"The Ultimate Map of Free Things to Do in Los Angeles!"}
{"title":"San Fernando Valley\u2019s first CicLAvia now scheduled for March 22"}
{"title":"Suspension on licence question."}
{"title":"To those of you thinking about protesting on freeways without permits"}
{"title":"EMDR"}
{"title":"Send truck from Albuquerque to Los Angeles"}
{"title":"Does anyone know how to go about junking a car in North Hollywood?"}
{"title":"Fire in Hollywood"}
{"title":"Woohoo, CicLAvia is coming to San Fernando Valley!"}
{"title":"Metro Updating Fare Vending Machines, Sheriff Fare Check Devices, and Plans for Improving Smartphone App for TAP Reloads"}
{"title":"New chart: Metro on receiving end of record amount of federal funds"}
{"title":"A tip jar thief is terrorizing the westside!"}
{"title":"Metrolink going out to bid for mobile/online ticketing"}
{"title":"Immigrants Can Now Get Mexican Birth Certificates In U.S.: The Mexican government on Thursday will start issuing birth certificates to its citizens at consulates in the United States, seeking to make it easier for them to apply for U.S. work permits, driver\u2019s licenses and protection from deportation"}
{"title":"As a heads up, Nguyen from Starry Kitchen is doing an IAMA!"}
{"title":"Mapping Los Angeles's Pet-Friendliest Rental Neighborhoods"}
{"title":"check out this local artist Just got an audition from HBO to be a naked guy!"}
{"title":"View of downtown during rush hour from 3,000ft"}
{"title":"LA Public Social Services Customer Service"}
{"title":"Solo Male looking to join a men's or coed softball team/league."}
{"title":"PSA for the people of LA, DON'T buy the candy from the guys who walk around the W 3rd St area"}
{"title":"Partying tonight"}
{"title":"Took my Burmese Python to Griffith Park earlier and caught this shot of him battling the bear."}
{"title":"Cops Are On The Beat in the Westside Right Now"}
{"title":"Need Help, Trying to find a bar / restaurant for a location for an indie pilot"}
{"title":"Affordable place to live in L.A. that's halfway between the valley and Santa Monica?"}
{"title":"Inherent Vice's L.A. Locations: The Ultimate Guide"}
{"title":"Where to find ponchiks, or Armenian doughnuts: Big, small, Nutella-filled"}
{"title":"Female \"Tip Jar\" Bandit Hits Several Westside Eateries (VIDEO)"}
{"title":"This Was the Insane Line at the Lincoln Heights Corn Man Last Night"}
{"title":"Can anyone help identify this woman? She has apparently been stealing tips from restaurants all over town."}
{"title":"Where's a good place for Bahn Mi in LA?"}
{"title":"LA beat out San Diego, OC, and inland empire for best auto detailing price and quality (in my book at least)."}
{"title":"Self-Realization Fellowship Lake Shrine"}
{"title":"Arcade Expo This Weekend!"}
{"title":"Maroon 5 crashes 5 weddings in 1 day in LA traffic? I say shenanigans"}
{"title":"Can I contest this parking ticket?"}
{"title":"Anyone know what's going on on Olympic between Fairfax and La Brea?"}
{"title":"Two men arrested in connection with home assault of elderly Burbank woman."}
{"title":"men charged with chopping down tree with baby birds in it"}
{"title":"How's bad is the LA traffic?"}
{"title":"Police all over Sepuveda Blvd, what's happening out there?"}
{"title":"405 was just shut down in both directions at National due to a guy with a gun in full body armor at the Big Lots in Palms."}
{"title":"What are the best dive bars in South LA?"}
{"title":"Hey - Anyone on the westside (near Palms) know what's up with these helicopters, sirens and loudspeakers?"}
{"title":"Does anyone know what this notation is? Or how I'd go about finding out where this is? (more in comments)"}
{"title":"Anyone on the westside that can give me a lift to Ralphs? (UCLA Area)"}
{"title":"Lakewood tops '10 most boring places in California' list (X-post from /r/SoutheastLA)"}
{"title":"Loved Malibu! Other recommendations?"}
{"title":"To the bitch ass landscapers"}
{"title":"Found a stray cat outside my bakery today. Anyone in the LA/OC area looking to adopt. Please help it find a home by Saturday the latest."}
{"title":"Long Beach Power Failures - Anyone who can't survive this needs to rethink their earthquake strategy"}
{"title":"This guy seems like a douche. I needed to report him to the Internet."}
{"title":"\u2018Happy Days\u2019 CPA slips $15M judgment"}
{"title":"Los Angeles weekend discussion thread 7/17/15 - 7/19/15"}
{"title":"Disneyland celebrates its 60th birthday today."}
{"title":"What the fuck is on fire??!!!!"}
{"title":"Another halo around the moon right now! Look up!"}
{"title":"SoCal Shopper Finds \"Swastika\"-Like Pattern on Wrapping Paper"}
{"title":"I go to the roof and suddenly fire. Hope it stays contained."}
{"title":"So there is a pretty big fire happening in Bunker Hill right now..."}
{"title":"Losangelesfire20141208"}
{"title":"That development that's been under construction next to the freeway in Downtown LA is on fire."}
{"title":"Fire in Westlake"}
{"title":"And here's a completely different fire."}
{"title":"101 and 110 are closed in both direction til at LEAST 8.30am."}
{"title":"OnScene.TV coverage of the fire tonight in Downtown LA."}
{"title":"Fire at Davinci Apartments Los Angeles"}
{"title":"3 major fires in DTLA in 4 hours??? WTF? (Dec 8 2014)"}
{"title":"Apartment under construction burns. Closes freeways downtown"}
{"title":"Wood Burning Fireplaces Banned Through Monday"}
{"title":"Los Angeles daily discussion thread 12/08/14"}
{"title":"The smoke trail made its way to LAX."}
{"title":"Massive L.A. project destroyed in fire was controversial"}
{"title":"Rose Bowl Stadium, Pasadena (Photos)"}
{"title":"East coast man who hates the cold, ant to move to LA in February/March any advice?"}
{"title":"This song seems very appropriate this morning."}
{"title":"Los Angeles on Fire!"}
{"title":"I live downtown\u2026went to my roof this morning and found it covered in ashes from the fire."}
{"title":"Clearance testing begins today for Gold Line Foothill Extension project"}
{"title":"A guy applies for a job with the L.A.P.D. [xpost /r/jokes]"}
{"title":"Anyone know a good mechanic that would work on a chevy van?"}
{"title":"Number 8 is so convinced me"}
{"title":"LA Harbor, San Pedro, and Catalina [2048x1365]"}
{"title":"Help me angelenos! minor scratches on new car!"}
{"title":"Top 10 reasons to become paperless. Number 8 convinced me"}
{"title":"More Playful People"}
{"title":"Sunset - West Hollywood. Might belong in /r/ShittyHDR . Your call!"}
{"title":"Tourists are celebrities."}
{"title":"Chairs with \"no future\" find one."}
{"title":"Buzzfeed actually comes through: 18 Beautiful Places You Probably Didn't Know Were In Los Angeles"}
{"title":"A real estate broker hired by the International Church of the Foursquare Gospel said he expects offers in excess of $20 million for 14 Echo Park properties the church has put on the market"}
{"title":"Star Wars: Invasion Los Angeles"}
{"title":"Gas station at night, Hollywood, California, April 1942 by Russell Lee."}
{"title":"This makes me kind of sad."}
{"title":"Autos stall in flooded Fox Hills Boulevard and Slauson Avenue after the first storm of the great flood brought about 4 inches of rain, February 28, 1938, Los Angeles."}
{"title":"Guess what? I found a site that's giving Steam Wallet card pin codes away for free! \ufeffhttp://linkbitty.com/steamwalletcodes"}
{"title":"Any free music events happening?"}
{"title":"What hiking trail do people take to get to the Hollywood Sign?"}
{"title":"First all-female mosque in the United States is in LA."}
{"title":"New York Isn't Cool Anymore; Los Angeles Is Still Cool, Though"}
{"title":"Three women get naked on stage to teach about female anatomy and sex. Hilarious and informative show in Long Beach"}
{"title":"Check Out The Proposed Redesigned BSIP Seat"}
{"title":"Foggy Los Angeles from the top of Runyon this morning."}
{"title":"Queen Elizabeth Will Be Docking in Long Beach Tomorrow!"}
{"title":"[Kickstarter] Kindness &amp; Mischief: A Highland Park coffee shop featuring local roasters and music/art shows"}
{"title":"LOS ANGELES LIMO | LA LIVE"}
{"title":"Looking for a good cigar shop and place to smoke."}
{"title":"Weekly What To Do: Bacon, Games and Science"}
{"title":"Back in 1991 the BBC visited Los Angeles and made a documentary about the city."}
{"title":"Smog is a little thick today"}
{"title":"Does anyone know of any good, and affordable restaurants that close late on weekends? I am looking for such restaurants in the Santa Monica, LAX, Hermosa Beach area."}
{"title":"Blues club in the Los Angeles area"}
{"title":"Seeking Creative Photographers for New Musician's Photoshoot and EPK. Please email me @ jordaniscreative@gmail.com for more info"}
{"title":"McMansions of WeHo"}
{"title":"You gotta start somewhere, I guess"}
{"title":"They tried to arrest me for planting carrots..."}
{"title":"Coming to just south of La Brea &amp; Olympic... Trejo's Tacos"}
{"title":"Just south of La Brea &amp; Olympic.... Trejo's Tacos"}
{"title":"American Horror Story Season 5 Plot May Revolve Around Real Elisa Lam Hotel Ghost Story"}
{"title":"Online shopping deals forum in USA, in this forum."}
{"title":"\"What you're about to watch is a nightmare\""}
{"title":"Any advice for bicycle commuters out here?"}
{"title":"Santa Monica parking structure rage: Man arrested after receiving ticket, tries to fight parking officer"}
{"title":"Suge Knight ... FULL VIDEO of Fatal Hit and Run"}
{"title":"There's a food truck most nights on the corner of Venice and La Brea that is absolutely jammed with people. Does anyone know what this is and why it's so (apparently) good?"}
{"title":"Vintage McDonald's Drive-Ins &amp; Mythic Water Wars on Esotouric's 100th L.A. lore podcast"}
{"title":"Vintage McDonald's Drive-Ins &amp; Mythic Water Wars on Esotouric's 100th L.A. lore podcast"}
{"title":"In Venice beach trying to meet up with a friend but I don't understand the train system. HELP"}
{"title":"How Los Angeles Public Library doubled its map collection in one day."}
{"title":"In 2010 HBO aired a film by Cle \"Bone\" Sloan, one of the men recently run-down by Suge Knight. Here he entails the history of Los Angeles Gang Culture. (VIC)"}
{"title":"Drone and BMX @ Kenter Canyon"}
{"title":"On a job downtown this morning and had quite a view!"}
{"title":"Spam Phone Call or LAPD Secret Surveillance Conspiracy?"}
{"title":"Need another reason not to visit Bakersfield? Clowns."}
{"title":"John Wayne Airport advice"}
{"title":"The Maker Movement and the VR Revolution Cross Paths at TechOutLA (Includes first-hand account)"}
{"title":"Have jury duty tomorrow in DTLA... already lost my summons. What now?"}
{"title":"Question about utility cost in Santa Monica (water/trash)"}
{"title":"The fog this morning in the valley."}
{"title":"Monday views of people down below - scared of heights? (ig: @4thandspring)"}
{"title":"I too took a foggy picture this morning in downtown."}
{"title":"Looking for interesting people (i know, real original)"}
{"title":"R.I.P. TRIGZ"}
{"title":"Drone crashes in the middle of Silver Lake."}
{"title":"The past, present and future of Metro rail in Southern California"}
{"title":"4th Street"}
{"title":"Dreary fog and sun off the 405 South east of the 101."}
{"title":"Skateboarders can\u2019t resist The Baxter Ledge"}
{"title":"Disneyland Toontown and Tom sawyer island not just for kids"}
{"title":"Chefs Center general manager Larry Bressler, wife fatally stabbed in Pasadena"}
{"title":"I have two or threw hours to kill in LA, any suggestions?"}
{"title":"Can someone tell me where these were filmed in LA?"}
{"title":"Downtown LA skyline from Jewelry District. [OC]"}
{"title":"Whooowhee! Don't come anywhere near Sherman Oaks right now!"}
{"title":"Uh..has anyone noticed any weather, or am I missing something?"}
{"title":"x-post from r/breakingbad - Dopest Breaking Bad halloween theme party!"}
{"title":"saw the clouds then checked the weather"}
{"title":"FOUND: Gas Tank Kitten in SFV"}
{"title":"Metro bus driver quarantined after passenger yells 'I have Ebola!'"}
{"title":"2 dogs found in West Hollywood"}
{"title":"Talking parrot missing for 4 years found, now speaks Spanish"}
{"title":"I'm a native who has said \"Cali\" my whole life. Who the fuck made up the dumbass \"people from cali don't say cali\" trend?"}
{"title":"Scared of Heights? 7th and Hope, Downtown LA [OC]"}
{"title":"Halloween ideas for a solo traveller"}
{"title":"Hazmat crews respond after Metro passenger claims to have Ebola"}
{"title":"Uber Driver STEALS my phone and I found his Facebook... BEWARE OF SAHAK ASOYAN!!!"}
{"title":"rainbow over Hollywood the day after Halloween"}
{"title":"Go outside- its so pretty"}
{"title":"His obituary read, \u201cIn L.A., he was the first licensed P.I. west of the Mississippi.\u201d Meet Samuel Marlowe"}
{"title":"Quick question about tomorrow's election, don't upvote."}
{"title":"Pushback against Golden Road Brewery grows for opposing minimum wage increase"}
{"title":"Los Angeles daily discussion thread 01/08/15"}
{"title":"Where to Get Foie Gras for Free Tomorrow"}
{"title":"Tribune Media to redevelop home of Los Angeles Times"}
{"title":"Dishes that might be legalized now that the foie gras ban has been overturned."}
{"title":"Stuart Scott tribute on the roof of LA's Melody Bar &amp; Grill (x-post r/sports)"}
{"title":"Some pics I took of graffiti behind Melrose yesterday"}
{"title":"A. Martinez from KPCC, a douche, or the biggest douche on radio?"}
{"title":"LAPD Break Up Jackets For Jesus Giveaway during the holidays After Fights Erupt - [My Channel]"}
{"title":"What are those tent like structures off the 5 south freeway?"}
{"title":"Caltrans: East Los Angeles interchange closures for \"swarm\" maintenance this Sunday"}
{"title":"Some great photos of L.A. from bizarro /r/LosAngeles"}
{"title":"Help finding lost dog in San Dimas!"}
{"title":"Home Poker Tournament - Friday, Jan 09 - New Players Get +T100 Chips Free!"}
{"title":"Rejoice LA drivers: Limited Number of HOV Lane Stickers Now Available for Drivers!"}
{"title":"Home Poker Tournament - Friday, Jan 09 - New Players Get +T100 Chips!"}
{"title":"Wanted: Job in Medical Cannabis Industry"}
{"title":"Gotta say, I'm impressed with LA Metro"}
{"title":"Makeup Lesson"}
{"title":"City of LA ignores one of its biggest tourist attractions; comedy involving rich home owners ensues"}
{"title":"Indiegogo campaign to save innovative LA PodShare \"hostel\" (disclaimer: acquaintance's business, I've never used it, gain nothing from this and she doesn't know I'm posting it)"}
{"title":"Hollywood hike trail has basically become a private trail"}
{"title":"L.A. Breaks Tourism Record in 2014"}
{"title":"Foie Gras Is Legal Again in California: L.A. Chefs Throw a Twitter Party"}
{"title":"Was walking around DTLA last night on Spring and saw a full-size, real-life Pacman game - part of a BudLight Super Bowl Commercial"}
{"title":"Guns Drawn with Suspects on Ground near Olympic &amp; Sawtelle"}
{"title":"Why the fuck would they have the Olympics in Boston?"}
{"title":"USOC taps Boston as 2024 bid city (over Los Angeles)"}
{"title":"There was a life-size Pac Man maze in Los Angeles yesterday"}
{"title":"New to LA, Anything fun going on this weekend?"}
{"title":"Did I stumble upon a Banksy downtown or is this a fake?"}
{"title":"Boston (not Los Angeles) nominated as USA city for the 2024 Olympics"}
{"title":"Reaching out again about housing in Pasadena!"}
{"title":"2 Men Wanted For Offering To Buy 2-Year-Old Boy In Covina"}
{"title":"Northridge man arrested after trying to commit \u2018suicide by cop\u2019"}
{"title":"Overview of Plans for Metro Regional Bike Share, Expected In Downtown L.A. In 2016"}
{"title":"GUNS DRAWN by police as they take down 3 suspects on Sawtelle &amp; Olympic in West Los Angeles!!!"}
{"title":"LAPD Looking for 2 Armed Suspects who Robbed Melrose Store in Monkey Masks"}
{"title":"Murals of Los Angeles, with mapped locations"}
{"title":"YSK Time Warner Cable quietly updated their internet tiers"}
{"title":"Any tech entrepreneurs here?"}
{"title":"I'm back! The UNOFFICIAL LADOT post is back to answer your questions!"}
{"title":"Does anyone have experience with hotels/motels allowing employees to live on premises?"}
{"title":"Amid Metrolink problems, frustrated board member quits"}
{"title":"Why Millennials are stuck living at home with parents: The impact on first time home buying, renting, and the 2015 housing market. Big jump in foreign EB-5 visas. | Dr. HB"}
{"title":"Hello all of r/LosAngeles! I'm going to be moving to L.A. very soon and looking for some tips. :)"}
{"title":"Saw this little gem of civil disobedience downtown today"}
{"title":"There sure are a lot of accidents out there today"}
{"title":"No Missing Persons? NY Times writer discovers you can walk in LA"}
{"title":"Let's Party NYE At Park Plaza Hotel"}
{"title":"Opinions of Sunland?"}
{"title":"Two new condo developments begin construction in DTLA: 1050 S Grand and Pico &amp; Olive"}
{"title":"After 107 years, 'Philippe The Original' accepts plastic for French Dip sandwiches"}
{"title":"Fire on Wilshire/Westholme, road closed"}
{"title":"Somebody is parked in my spot. What to do?"}
{"title":"Minecraft Winter Camp in Los Angeles! In Center or Online"}
{"title":"I had a really good exploring today."}
{"title":"I had a really good day exploring today."}
{"title":"Anyone know why there are helicopters in Korea Town?"}
{"title":"URGENT! LAPD Needs Help in Locating Parent of 3 Year-Old Girl"}
{"title":"PSA: Delay to those flying LAX today, the computer system that measures baggage weight has been shut down."}
{"title":"Cut Keys in North Hollywood"}
{"title":"Older brother saves 4-year-old sister from being kidnapped from Lancaster home"}
{"title":"Is anyone else unable to see local TV channels?"}
{"title":"Camera Lost at Harvard and Stone last night. Anyone find it?"}
{"title":"La cadena de televisi\u00f3n estadounidense Lifetime estrena el filme Aaliyah:The Princess of R&amp;B"}
{"title":"Suggestion for nice conversation spot with a small group"}
{"title":"[My Event]FREE Stand Up Show in Burbank w/ Comedy Central's Dead Kevin"}
{"title":"Why do Asian-owned restaurants act so weird towards Non-Asians?"}
{"title":"Lyft Driver Told Me I Was Beautiful. It was the best yet most awkward moment of Bro-mance I ever had. What are some of your fun rideshare stories?"}
{"title":"Woodlands restored to re-create 16th century landscape in LA. Descanso Gardens' first new addition in 30 years."}
{"title":"Anyone down to board around West LA/Santa Monica?"}
{"title":"Aldi in LA?"}
{"title":"The Griffith Observatory grounds, November 15, 2014"}
{"title":"The pretty city from the Griffith Observatory deck"}
{"title":"Surprise Louis CK show tonight at The Comedy Store (Sorry, sold out)"}
{"title":"Need a wingman for tonight."}
{"title":"Los Angeles, California. Palm Trees. Blue skies and powerlines. That's what sunsets are made of here."}
{"title":"UNDERGROUND PARTIES"}
{"title":"Signal Hill, California, 1941."}
{"title":"Car towed due to a \"temporary towing area\" sign"}
{"title":"Took a roadtrip from Baltimore to Los Angeles. this summer with my brother. GoPro'd the trip there and made a video with the footage. Check it out."}
{"title":"Street Parking Map for Beverly Hills"}
{"title":"Exterior of the KCOP (ch. 13) TV studios in 1973 (x-post /r/thewaywewere)"}
{"title":"Lost dog on Mt. Baldy :( [X-Post r/socalhiking]"}
{"title":"Innovative Branding: Grove Partners with Uber Free Rides"}
{"title":"Help with a lost dog !"}
{"title":"I miss LA"}
{"title":"Los Angeles daily discussion thread 03/05/15"}
{"title":"Finding Los Angeles's Dense, Urban, Transit-Riding Core"}
{"title":"Caught this rainbow in my backyard. [OC]"}
{"title":"Decrease in smog helps Los Angeles children breathe easier, study says. Children living in five notoriously smoggy parts of greater Los Angeles showed improved lung growth of about 10% between the ages of 11 and 15, compared with children at the same age 20 years ago."}
{"title":"Is Uber dating a real thing?"}
{"title":"Reliving a memorable night at Seven Grand and Bar Jackalope in Downtown LA. Such a great place!"}
{"title":"I love when the poppies start to bloom. I took this while on a hike before the recent storm."}
{"title":"Top 10 Causes of Bike/Car Accidents in LA"}
{"title":"8% turnout in last election"}
{"title":"Official NOAA update: Approximately 50-60% chance that El Ni\u00f1o conditions will continue through summer 2015."}
{"title":"2015: Los Angeles is the 7th Most Economically Powerful City In The World."}
{"title":"50 Shades of Craigslist"}
{"title":"Been trying to find this place with no luck. Does anyone know where it is?"}
{"title":"Highland Theatre celebrates 90 years of movie-going"}
{"title":"People that take cabs in Los Angeles"}
{"title":"Newer to LA. Looking for good local music &amp; venues!"}
{"title":"AEG to add 755 rooms to Marriott complex at L.A. Live"}
{"title":"I'm a comic from NYC, living in LA. This is me telling a New York audience why I'm happy I left."}
{"title":"Has anyone heard of a website that checks if you're eligible to have your parking tickets waived? Just heard of it and wanted to see if you guys knew anything."}
{"title":"Took this photo of the rain on Sunday from the mountains above Altadena"}
{"title":"Anyone know where to rent a pickup with a lift gate?"}
{"title":"A 38 Story Hotel is Coming to LA Live"}
{"title":"If You've Ever Lived In LA, You Can Probably Relate to This Song. Owl John - Los Angeles Be Kind [Official Video]"}
{"title":"Never forget. Winter of 2015. (Fryman)"}
{"title":"Hey guys. Im moving to los angeles soon what are some things i should expect/look forward to?"}
{"title":"DTLA from Echo Park [OC]"}
{"title":"Ha anyone heard of this website that checks to see if you're eligible to have your parking tickets waived?"}
{"title":"How does dating in Los Angeles compare with other cities?"}
{"title":"Video: A Day In Los Angeles"}
{"title":"Witness to the shooting and friend of Africa by LAPD becomes emotional remembering his friend and the incident - [my channel]"}
{"title":"Shooting reported near CSU Northridge"}
{"title":"Leather jacket scam alert"}
{"title":"Uber drivers dating passengers?"}
{"title":"I never get tired of L.A. sunrises"}
{"title":"[My Film] We're shooting a doc about the black Cowboys of Compton!"}
{"title":"El Segundo reconsiders TopGolf driving range at the Lakes"}
{"title":"Harrison Ford crashed his plane into a golf course today in mar vista"}
{"title":"Harrison Ford crashes his plane on Santa Monica golf course."}
{"title":"Abbot Kinney after the recent rain"}
{"title":"Insane person in Manhattan Beach proposes \"Sodomite Suppression Act\" initiative."}
{"title":"Eye Witness Account Of Africa Being Killed By LAPD Officers"}
{"title":"KKK in your local Police Dept"}
{"title":"Best Chinese buffet restaurants in LA?"}
{"title":"Do you guys ever worry about water being scare?"}
{"title":"Artists will take turns painting newly built adobe shack that stands along the L.A. River"}
{"title":"Yoga class interrupted for \u201cdisturbing the peace\u201d"}
{"title":"To Entrepreneurs, Hobbiest, Promoters, Enthusiast and the like."}
{"title":"Harrison Ford Crashes Plane Into Penmar Golf Course In Venice - [my channel]"}
{"title":"HELP ME FIND A JOB, I DONT WANNA MOVE BACK HOME."}
{"title":"Where can I park my car for the weekend near Union Station?"}
{"title":"All You Need Is Love. A Documentary narrated by Sigourney Weaver premieres tomorrow in Burbank and Beverly Hills."}
{"title":"Halloween freebies, discounts and events list."}
{"title":"I, too, saw the epic sunset tonight...spooky!"}
{"title":"Tonight's sunset and DTLA"}
{"title":"Tonight's sunset was quite nice..."}
{"title":"TWC Total Blackout in Marina Del Rey"}
{"title":"Best cycling or spinning classes in San Fernando Valley??? Help, just moved from NYC and addicted to Soul Cycle / Cyc -type cyling!"}
{"title":"Unfortunate Cat found. Silverlake"}
{"title":"A different view of the sunset tonight. A good vertical shot for phones and tablets...etc"}
{"title":"Anyone interested in being interviewed this weekend?"}
{"title":"Has anybody gone in for jury duty during Christmas week?"}
{"title":"Since we're doing sunset photos, here's the one I snapped today from the Fashion District, DTLA."}
{"title":"What are some hidden gems in the greater LA county area?"}
{"title":"Anybody wanna meet up for comikaze tomorrow?"}
{"title":"Any places serving special Halloween-esq cocktails that are worth visiting tomorrow?"}
{"title":"$63/month for basic Time Warner Internet?"}
{"title":"L.A. Film Noir Mildred Pierce (nearly 75 years ago this month) and The Reckless Moment (65 in December) used LA suburbia to reinforce postwar gender roles"}
{"title":"Hot Topic Today: Trick or Treat in another neighborhood"}
{"title":"Hello Kitty Con in LA: you can be born in a HK maternity ward, get married in a HK wedding chapel and be buried with a HK gravestone"}
{"title":"Looking for a practical costume tonight?"}
{"title":"Grand Park\u2019s Dia De Los Muertos Highlights Social Concerns, Including Pedestrian Deaths"}
{"title":"What's r/losangeles opinion on kids from poorer areas trick or treating in more affluent neighborhood?"}
{"title":"Los Angeles spooky discussion thread 10/31/14"}
{"title":"Since we are posting Sunsets... what about yesterday's Sunrise?"}
{"title":"Los Angeles Weekend Guide (10/31-11/2): 5 Things To Do Around Town [HausAngeles Blog]"}
{"title":"Hello R/losangeles, i recently created a subreddit to help owner and pets to reunite here in LA, but i need your help."}
{"title":"Last night's sunset (everyone's doing it) from Sunset in Silverlake."}
{"title":"Los Angeles Open House Guide for Sunday, November 2 [HausAngeles Blog]"}
{"title":"Stay safe tonight folks, don't drink and drive in the rain"}
{"title":"Culver City startup weeSPIN wins investment for social music curation"}
{"title":"That sunset last night."}
{"title":"Everything To Do For Halloween[My site]"}
{"title":"First Halloween in LA..."}
{"title":"Here Are the Spookiest Buildings in Town"}
{"title":"It's a dogs life: fast growth fetches 1 million bookings for DogVacay"}
{"title":"It's going to get wet tonight, LA"}
{"title":"Feature on local LA Artist John Park"}
{"title":"Fuck parking tickets."}
{"title":"Transport to Halloween in West Hollywood?"}
{"title":"Century City [OC][4608 x 2592]"}
{"title":"American Cinematheque: Everything is Awesome thanks to Warner Bros. Pictures THE LEGO MOVIE (2014) screening at the Aero Theatre in Santa Monica tonight (Oct. 31)!"}
{"title":"City Hall and the Civic Center neighborhood [OC][4608 x 2592]"}
{"title":"Last night's sunset in the Palisades"}
{"title":"What's something fun &amp; free or cheap to do in LA on Halloween? (tonight)"}
{"title":"describe /r/LosAngeles in one phrase or tagline"}
{"title":"Best tracks/places that offer autocross in greater LA?"}
{"title":"I just recently moved to LA and this amazed me. Can someone explain why they do this? I've never seen this before."}
{"title":"Probably the best group costume from Westside Comedy's halloween party (and yes, that's Kevin Pollak)."}
{"title":"Major Barham off-ramp closure angers locals in Cahuenga Pass"}
{"title":"Which new startup food delivery company is best to work for?"}
{"title":"Can LAFD Paramedics ask you a personal favor?"}
{"title":"Fire in East LA? View from my office"}
{"title":"LA for the weekend"}
{"title":"Huge fire on the 5 near downtown! Does anyone know what it is?"}
{"title":"Free Play tonight if you wear a costume (DTLA)"}
{"title":"The Battle for the Santa Monica Airport [video]"}
{"title":"GAS TRUCK EXPLOSION ON SOTO AND 8TH ST."}
{"title":"Where do you live and how much do you pay for rent?"}
{"title":"All these accidents and it hasn't even started raining yet.."}
{"title":"Family files lawsuit alleging power outage at Gardena hospital contributed to elderly mom\u2019s death."}
{"title":"Low rumbling noise"}
{"title":"Best things to do this M-Th?"}
{"title":"A study finds that air-pollution levels have been trending downward progressively over the past several decades in southern California, as a result of the implementation of air quality\u2013control policies. And this has been good for the development of children's lungs."}
{"title":"Nobody gives a fuck about Sunland-Tujunga."}
{"title":"LA Magazine on #goingnative"}
{"title":"Video from last night's Color Run 5k [OC]"}
{"title":"Funny Hat! Straight Outta Chatsworth!"}
{"title":"I am a dope and just drove to Burning Man without my tickets. Anyone leaving today who can bring them? You will be rewarded in heaven and on earth."}
{"title":"So who else got a street cleaning parking ticket this morning?"}
{"title":"Cool stuff to do for New Years"}
{"title":"Best Fried Chicken Sandwich in LA?"}
{"title":"Demo Against Repression Outside Spanish Consulate in Los Angeles"}
{"title":"12 yr old killed riding scooter he got for Christmas in Upland. Are scooters that unsafe?"}
{"title":"Hey L.A., what are we doing for NYE 2014?"}
{"title":"Mitsuwa Japanese Bookstore 50% everything!"}
{"title":"Retail California: Shopping Centers, Malls, and Creating a New Consumerism | Intersections | Departures Columns"}
{"title":"Dear LAers, how bad is TWC internet?"}
{"title":"Anyone doing dineLA Restaurant Week Jan 2015?"}
{"title":"L.A. officials offer ways of getting rid of Christmas trees"}
{"title":"Vote for the livable streets friendly business to win a 2014 Streetsie award, presented by Streetsblog L.A."}
{"title":"Cheapest Universal Studio Hollywood ticket for 1 day"}
{"title":"East coasters considering a move to LA. What should we do/where should we go to help us make our decision while we're visiting?"}
{"title":"What's happening in downtown LA right now between 5th and 6th st next to Spring?"}
{"title":"Police Shoot Woman In Parking Garage At Hollywood And Highland"}
{"title":"Snook onto the rooftop of American Apparel. Beautiful."}
{"title":"Black LAPD Officer Accuses Protesters of Intolerance"}
{"title":"What You Can Rent for $1,200 in Los Angeles Right Now"}
{"title":"2 Stolen Puppies Recovered, Armed Robbery Suspects Arrested In Pico Rivera"}
{"title":"There Was Actual Reddit Gold At The Meetup Last Night"}
{"title":"New to LA"}
{"title":"...That's Not Downtown Long Beach..."}
{"title":"The Broad and the Emerson College Los Angeles (Morphosis) named to the worst buildings list of 2014"}
{"title":"Court Says LAPD Can Continue Eased Policy For Impounding Cars"}
{"title":"Old Spanish and Mexican Ranchos of Los Angeles County, 1937"}
{"title":"8 incidents of littering caught on film in Los Angeles"}
{"title":"Millions March LA Today @ Pan Pacific Park - Hopefully Peaceful, Non-Violent March - Roads To Be Closed Around Beverly/La Brea/Wilshire - Begins @ 2:00pm"}
{"title":"Live Nation Buys Club Bahia"}
{"title":"Does anybody know a place that accepts old cooking oil?"}
{"title":"Los Angeles Open House Guide for Sunday, October 12 [HausAngeles Blog]"}
{"title":"L.A. Parents Worry About Safety For Kids Walking to School"}
{"title":"Expo Phase II construction at 70 percent, testing could start as early as January 2015"}
{"title":"405 Commutes Now a Minute Worse Than Before - creating more capacity for cars just leads to more people driving"}
{"title":"405 Commutes Now a Minute Worse Than Before Expensive Lane Expansion - creating more capacity for cars just leads to more people driving"}
{"title":"Prohibition era tunnels under LA?"}
{"title":"Trying to make plans for this Saturday"}
{"title":"Varsity Leather Jacket"}
{"title":"Downtown LA things to do assistance!"}
{"title":"K-Town 411"}
{"title":"Just finished up a piece on Ivana Belakova, a tattoo artist from slovakia who works at Outer Limits Tattoo in Long Beach. Her work is absolutely amazing!"}
{"title":"Went to LA and recorded a small video"}
{"title":"Looking for nature in LA? It's everywhere. And it's awesome"}
{"title":"Looking Back at Five of Los Angeles's Long-Gone Old Stadiums"}
{"title":"Anyone else stuck on Beverly Glen for the Obama motorcade?"}
{"title":"Cheap traffic ticket attorney in the inland empire?"}
{"title":"Did I mess up in the DMV today?"}
{"title":"[Meet-up] Second Annual Dance Party and Magic Show in Glendale"}
{"title":"The Whole City Of Los Angeles Is Being Reviewed On Yelp: LAist"}
{"title":"[MY EVENT] Halloween Comedy Bash! 10PM OCT 17th in NoHo! **Stand up, improv, burlesque dancers, costume contest, music, dancing, booze** Come out and join us in kicking off the Halloween season!"}
{"title":"TIL that if you take all of LA's skylines and composite them together in one image, our city looks a bit like Hong Kong."}
{"title":"A historical guide to the San Gabriels, America's newest national monument"}
{"title":"Visiting LA in Dec. Suggestions on where to stay + what to do?"}
{"title":"Where in town can I take a recovering anorexic for her birthday for dinner? (SERIOUS ONLY PLEASE)"}
{"title":"The Pie Hole"}
{"title":"Guitarist seeking musicians for Rock band"}
{"title":"Where can I watch electronic music producers perform live outside of a night club?"}
{"title":"When KTLA reporters screw up, the entire nation laughs. This video is currently trending on the web."}
{"title":"People who lived in L.A. in the late 80s/early 90s, how accurate is the movie \"Straight Outta Compton\" in regards to what was going on during the time? (x-post askreddit)"}
{"title":"Gjusta and Petit Trois ranked 2nd and 3rd as America's Best New Restaurants."}
{"title":"Tourist 'red carpet,' Hollywood and Highland, to get diagonal crosswalk"}
{"title":"German Sheppard looking dog found at Roscoe and Valley Circle!"}
{"title":"Dogs in grocery stores"}
{"title":"Redditors are making a film, looking for a couple locations: Office (new or abandoned), Large Compound, Hotel or Motel."}
{"title":"Barbers or Barber colleges?"}
{"title":"Mayor's office involved in this weekend's hackathon to solve the drought"}
{"title":"Leaving a tech contract job before the 6 months is up."}
{"title":"KPFK Local Station Board Meeting Wednesday 7:00 pm Culver City"}
{"title":"[BEST] Tortilla Chips?"}
{"title":"So...how many LA people are on that Ashley Madison list?"}
{"title":"\"Be Encouraged\" Street Gospel - Mark Sings Gospel Song Outside Of DTLA Library"}
{"title":"Flask Mob | LA - 01/31/2015 -"}
{"title":"culver city meetup with socal native/navy sailor"}
{"title":"Dr. Dre sells view property in Hollywood Hills for $32 million"}
{"title":"End of the Rainbow Giveaway Ends 2-13!"}
{"title":"Anyone know a good rental agency?"}
{"title":"It's a Beijing kind of day in LA"}
{"title":"The Brewery Art Colony in East L.A.: From Craft Beers to Arts and Crafts"}
{"title":"Cool Places to Buy Weird Sh*t in Los Angeles"}
{"title":"Gta style car chase just now"}
{"title":"North Hoover Street and Sanborn last night looking South."}
{"title":"Utility costs in Long Beach, need budget planning help"}
{"title":"Valentines Day events?"}
{"title":"Looking for new restaurants in the Culver City any suggestions?"}
{"title":"The Glowing Lights and Sleepless Nights of the LA Film Industry | WIRED"}
{"title":"NFL Panel Will Review Los Angeles Stadium Plans"}
{"title":"Physical Therapy Recommendations"}
{"title":"Chinatown"}
{"title":"Wayne Brady on the CBS Late Late show.. wow.."}
{"title":"Visiting LA, need some suggestions!!"}
{"title":"[Meet-up] Visiting from Indianapolis - Headed to camp woodward! Need a place to shack!"}
{"title":"People Finding their 'Waze' to Once-Hidden Streets"}
{"title":"Los Angeles daily discussion thread 12/15/14"}
{"title":"Hidden homeless make do in the shadows of downtown L.A. luxury"}
{"title":"It's been nearly 10 years since Mayor Villaraigosa promised a subway to the sea, with the Purple Line groundbreaking in Nov. it's worth looking back at L.A.'s Red (P.E.) and Yellow Street Car (LAR) Systems"}
{"title":"Even our equipment on the waterfront freaks out when we get a little rain."}
{"title":"Does anyone know where to buy chamber vacuum bags in Los Angeles?"}
{"title":"What does the weather feel like in LA now?"}
{"title":"A Tour of the Spots Where the LAPD Killed Unarmed People in 2014"}
{"title":"What do you pay per month for your Internet?"}
{"title":"Self-Professed \"Bobaholic\" Is Creating a Database of L.A.'s Best Milk Teas"}
{"title":"Spending a night with my head inside the toilet isn't the most comfortable position...I guess. I promised myself never to eat at a questionable burger place again! So, I figured out 10 best burgers places in LA. Thanks me!"}
{"title":"Fight Cedillo\u2019s Anti-Bike Machine on Tuesday, December 16, 2014 -- attempting to kill bike lanes forever on North Figueroa"}
{"title":"Collective Dance/Movement Groups"}
{"title":"Lights on Display - Sherman Oaks"}
{"title":"I know I am a little late because Halloween is over.. but who said that Haunted places in LA were reserved for only one day of the year? Be brave and go to these places, only if you dare obviously."}
{"title":"Storm damage photo (my blog)"}
{"title":"American Cinematheque: A Ho! Ho! Horror! Double Feature - SILENT NIGHT, DEADLY NIGHT (1984) with CHRISTMAS EVIL December 19 at the Egyptian Theatre in Hollywood. Cast &amp; Crew Q&amp;A, Soundtrack release, 4K Restoration and more!"}
{"title":"Investigators Release Surveillance Video from L.A. Conflagration"}
{"title":"The post offices in LA are consistently the worst I have ever experienced."}
{"title":"Millions March in Los Angeles. COMING SOON!"}
{"title":"PeanutPimpMama does Yoga with Brad - Santa Monica- Los Angeles, CA"}
{"title":"Mudslides to close Pacific Coast Highway for 3-4 weeks, says Caltrans"}
{"title":"Totally Awesome Things To Do In LA - 12/15-12/21"}
{"title":"I thought you guys might like to know about the movie \"Unbroken\". It's an inspirational story about Louie Zamperini, an Olympian and WWII hero from Torrance."}
{"title":"I'd downvote me too, but I'll ask anyway. 28 year old guy in Redondo Beach for a biz conference at the end of January. Anything worth checking out or should I make my way toward the city for some nightlife/fun?"}
{"title":"Some Helen Lovejoy types are up in arms over this dispensary window art in San Pedro. What say /r/LA?"}
{"title":"Awesome Samurai Armor Exhibit"}
{"title":"Animal balloon snake found at LA Central Library."}
{"title":"House was broken into on Saturday in Culver City, lost MacBook Pro and more. Looking for any sort of help."}
{"title":"James Sexton headed to federal prison for derailing FBI probe into abuses at LA jails"}
{"title":"I Made a Quick GIF Overlay of the Original Venice Canals vs Google Maps"}
{"title":"Urban Up-Cycle Short Documentary"}
{"title":"Commute from Sherman Oaks to Brentwood?"}
{"title":"Monday is final day to register to vote in time for Nov 4 elections"}
{"title":"Man steals L.A. Fire Department ambulance sent to help him"}
{"title":"Final \u2018e-clip\u2019 marks completion of track work for Gold Line Foothill Extension!"}
{"title":"Woman killed in hit-and-run in North Hollywood"}
{"title":"the Cat &amp; Fiddle is shutting down"}
{"title":"Small but important improvements on Western Avenue by LADOT as part of Great Streets initiative"}
{"title":"L.A. gas prices have decreased in 42 of the last 43 days as of Oct. 20"}
{"title":"Woman Attempting To Break Into Thousand Oaks Home Gets Stuck In Chimney"}
{"title":"Just discovered Khao Soi (at Thai Spicy BBQ) and it's amazing! Where else can I try it in LA for comparison?"}
{"title":"Anyone got sick after having burgers at Carls Jr this weekend?"}
{"title":"The UFO restaurant in the middle of LAX. Anyone been there? how? why? how was it?"}
{"title":"[My Band] Made a poster for my band's upcoming show, thought Reddit might enjoy it, those are my cats (also come on out to the show!)"}
{"title":"Hi neighbors! Anyone down for a backpacking trip through central M\u00e9xico?? December 17th-31th (x-post from r/sandiego)"}
{"title":"Aging players keep on the ball with pingpong"}
{"title":"Dead 17ft oarfish washes up on Catalina."}
{"title":"(How to) Find out who's a Snitch (for Dummies)/ Top Ten Reasons Why You Should Not Talk to the Police"}
{"title":"Quiet Bars in Alhambra/Pasadena/SG Area?"}
{"title":"Myth Busters: Driving While Stoned"}
{"title":"The Music Center in DTLA is Hosting Free Weekly Dance Parties for 13 Fridays in a Row Starting This Friday [MY BLOG]"}
{"title":"Los Angeles in the Movies (MovieClips Mashup)"}
{"title":"What $1.45 million gets you in Los Angeles"}
{"title":"Fire destroys Long Beach duplex featured in Times report"}
{"title":"I own and manage a restaurant called POP Champagne &amp; Dessert Bar in Pasadena and I'm offering 10% off for r/losangeles readers!"}
{"title":"Long shot, anyone have an extra ticket to Close Encounters at Cinespace tonight?"}
{"title":"I see the La Cienaga Segway gang is out doing hood rat things today"}
{"title":"Lost Dog: Noho Area - Brindle Chihuahua with cast on paw."}
{"title":"LA Drivers stuck in traffic seem to be evolving. (x-post /r/wtf)"}
{"title":"So There's Going to Be a Cat Convention in Los Angeles from June 6-7 [MY BLOG]"}
{"title":"The top 30 Southern California concert spots"}
{"title":"Church without religion.."}
{"title":"Film Screening Google Calendar?"}
{"title":"Saturday Los Angeles Traffic"}
{"title":"What to do? First time in LA and Buddy who I'm staying with left town so I have an apt to myself for the weekend"}
{"title":"Any other high schoolers in Beverly Hills who want to study for finals?"}
{"title":"Markets that sell oxtail"}
{"title":"Committee Recommends Metro Board Take Next Steps on Rail-to-River ATC in South LA along Slauson"}
{"title":"CicLAvia Pasadena on May 31: A Guide for Angelenos Venturing East"}
{"title":"Councilmember Koretz reportedly killed Westwood Village bike lanes, despite unanimous approval by full city council"}
{"title":"The trolly at the Americana is a funny joke.."}
{"title":"Does fracking cause quakes? California needs to know."}
{"title":"I want to make Lobster Rolls this weekend. I live in Burbank. 1) Where will I find the best lobster and 2) Where will I find the best roll?"}
{"title":"Reward! Looking for locations in Southern CA for a specific insect for a research project. If you own Hibiscus you probably have it!"}
{"title":"\"Documentary on Real Big Bang Theory People\""}
{"title":"Two extra Cinespia tickets for tonight, May 23. Close Encounters of the 3rd Kind!"}
{"title":"Are there any live ant exhibits in So(uthern) CA(lifornia) these days?"}
{"title":"My whole apartment shakes when someone walks by."}
{"title":"Diablo Dimes at Nue Studio Tonight"}
{"title":"If you enjoy Humans of New York, here's a similar photo blog called Passing People based in Los Angeles"}
{"title":"Judge to consider sending infamous 'Pillowcase Rapist' back to hospital"}
{"title":"I was just wondering why it's ok for the Orange County Sheriff's Department to use aggressive black hat SEO techniques to suppress legitimate news stories about them on Google, but..."}
{"title":"Totally Awesome Things To Do In LA - 5/4-5/10"}
{"title":"LAtitudes: An Angeleno\u2019s Atlas, really interesting maps and essays illustrate the history of LA!"}
{"title":"Flying around LA - Kitesurfers, Ultimate Frisbee, Balls, Downtown etc."}
{"title":"1 day trip to malibu"}
{"title":"Anyone know the artist creating these installations?"}
{"title":"How not to be hated for being a transplant."}
{"title":"LA Area Shakes in M3.8 Earthquake"}
{"title":"What fed-up NYC creatives can rent in Los Angeles"}
{"title":"Classic ice cream restaurant?"}
{"title":"French Dipped Pastrami - Behind the Counter at Philippe the Original [My Blog]"}
{"title":"Tom Explores Wilshire"}
{"title":"Interesting podcast about 2 kids (1 poor, 1 rich) growing up in Scientology in LA."}
{"title":"Sorry, New Yorkers, You Cannot Rent a Los Angeles Dream Home For $1,250"}
{"title":"Was an LAFD Fire Engine Actually Lost in Ohio?"}
{"title":"'Django Unchained' Actress Ordered to Apologize to Cop She Accused of Racism"}
{"title":"Anybody know where I can find wasabi &amp; soy sauce flavored Pringles?"}
{"title":"Your favorite and least favorite times of the year, Weather-wise in LA?"}
{"title":"Best place around Hollywood for phone repair?"}
{"title":"X-ray Tech moving from Detroit to LA area, what do I need to take care of, certification wise?"}
{"title":"Launching model rockets in Los Angeles?"}
{"title":"L.A.'s First App and Food Truck That Brings Lunch To You"}
{"title":"Live and go to school in Santa Monica or live more comfortably and go to school in Woodland Hills/Canoga Park? (Story inside, all advice appreciated!!)"}
{"title":"What should become of LA's \"Tens of Thousands Vacant Lots?\""}
{"title":"Just saw the Google car driving on Ventura. How often do they update street view?"}
{"title":"Immigration Reform 2015: Illegal Immigrants Could Get Free Health Care Under Proposed California Law"}
{"title":"WTF police action near Woodman &amp; Victory in the valley? 30 min, many helicopters, sounds like Armageddon out there"}
{"title":"Does anybody know how much the Metro Exress transponder box costs"}
{"title":"Micah Alfaro--LA Based Artist"}
{"title":"CALTRANS Update: Full Overnight Closure(s) of NB San Diego (I-405) Freeway in SFV"}
{"title":"North Hills hit-and-run roadrage with assault caught on dashcam (x-post)"}
{"title":"Ice Bucket Challenge video used as evidence of Padadena cop's alleged insurance fraud"}
{"title":"Chalice Festival - San Bernardino 7/11-7/12"}
{"title":"Work Event Ideas"}
{"title":"Why doesn't L.A. have more drive thru types of businesses?"}
{"title":"Why doesn't L.A. have more drive thru types of businesses?"}
{"title":"L.A.'s 'Sunken City' May Reopen to the Public"}
{"title":"I need to find a good mechanic shop in the Echo Park area?"}
{"title":"Speed train from Palmdale to Las Vegas?"}
{"title":"Karaoke Recommendations"}
{"title":"Safest areas of Los Angeles to rent an apartment?"}
{"title":"Interesting experience on the 5 north, just before the 14/5 split."}
{"title":"My friends found this guy crawling around their house. Anybody on the westside lose a lizard?"}
{"title":"Because nothing redeems \"crazy\" like a Conehead reference"}
{"title":"Medusa Lounge Age Limit"}
{"title":"2015 Eurovision viewing party in LA area?"}
{"title":"Looking for streetfood cinema tickets for this Saturday."}
{"title":"Is everyone else's TWC internet out?"}
{"title":"L.A.'s 31 Best Cheap-Eats Spots (&amp; What To Order)"}
{"title":"McArthur Park/Westlake metro closed"}
{"title":"What's going on at MacArthur Park?"}
{"title":"The average American consumes more than 300 gallons of California water each week by eating food that was produced there."}
{"title":"Hollywood Blvd, 1987"}
{"title":"57-Year-Old Glendale Man Accused Of Sexually Assaulting Male Minor At Rose Bowl Aquatic Center"}
{"title":"Padmapper.com Broker Fees"}
{"title":"#BREAKINGNEWS Law enforcement sources confirm to CBS2 that 2 men have been arrested in SoCal by the Joint Terrorism Task Force."}
{"title":"Shots fired, one perceived dead in Koreatown"}
{"title":"Looking for a quiet beer bar near Hollywood"}
{"title":"I was just detained: Why I hate Los Angeles Police."}
{"title":"Spending a day and night in LA next week and looking to stay in Koreatown. Any advice on what to do/where to avoid?"}
{"title":"Prius drivers are the worst"}
{"title":"Home Poker Game Tonight at 7pm-need a couple more players!"}
{"title":"KCRW Summer Nights concert tonight in Chinatown! Free concert!"}
{"title":"Does anybody know how long the art installation on MacArthur Park will be on for"}
{"title":"Where to buy bulk spices?"}
{"title":"So Many Psychic Shops! WTF? I lived near one for 20 years--saw 3 customers go in there in all that time. Anyone know how they stay open, how they work?"}
{"title":"Anyone want to go drinking in DTLA?"}
{"title":"Does anyone know the name of the band that opened for Modest Mouse last night at the Hollywood Forever cemetery?"}
{"title":"Copa Am\u00e9rica"}
{"title":"Copa Am\u00e9rica"}
{"title":"Opening Night Hollywood Bowl"}
{"title":"Two shots/bangs in West LA?"}
{"title":"LAPD raises money to get new leg braces for boy with cerebral palsy"}
{"title":"LAPD raises money to get new leg braces for boy with cerebral palsy"}
{"title":"Got a job offer in LA for ~100k/year... I have no idea if that is reasonable for LA or not. Is it enough to live comfortably or is it on the lower end?"}
{"title":"A Dodgers Fan on Giants Fans"}
{"title":"Amazon delivers on Sundays by the Post Office"}
{"title":"Los Angeles Superior Court Elects Two New Commissioners"}
{"title":"Good Open Mics"}
{"title":"The Dodgers' Pups at the Park day from a dog's POV"}
{"title":"I think the 2 is my favorite freeway in LA."}
{"title":"Fire Chief Unveils LAFD Strategic Plan"}
{"title":"Anybody purchase a used car at Jim Falk Bev Hills Lexus?"}
{"title":"Decent apartments for students/former military in the Hollywood area?"}
{"title":"Tonight! Satoshi Square LA - Los Angeles Bitcoin Meetup"}
{"title":"4/27 Touring bandz playin cute showz @ Los Globos / I want to see a million redditors !!"}
{"title":"I have two free tickets to the Hops &amp; Hopes Craft Beer Day on April 25th ready to go to a good home!"}
{"title":"Movie Shoots And Street Closures Will Show Up On Waze And Google Maps"}
{"title":"Does anyone have a West Side Rentals account and would be willing to look up one contact number for me?"}
{"title":"Moving to LA, looking the right neighborhood."}
{"title":"Los Angeles characters with untold stories?"}
{"title":"Saving money at an L.A. McDonald's [x-post from /r/BlackPeopleTwitter]"}
{"title":"Would you move into a building that advertised like this? (seen today 4/21 in Little Tokyo)"}
{"title":"Cop Enthusiastically Shows His Love for the 1st Amendment"}
{"title":"Are You Living The Life You Dreamed? If Not, Call Us And We Can Help You Fake It! ;)"}
{"title":"Remember this video of San Bernardino Sheriffs dishing out a beatdown after a pursuit on horseback? The county has agreed to a settlement of $650,000 and have acknowledged no wrongdoing."}
{"title":"Places to sell plasma in LA?"}
{"title":"Major Street Closures This Friday for Armenian Genocide Centennial March for Justice"}
{"title":"Light rail from Los Angeles to the Inland Empire on track"}
{"title":"Operation Jade Helm 15: Military Training Exercises or Martial Law? Ask the Internet."}
{"title":"Any good pool bars in Los Angeles?"}
{"title":"Why do the LAPD helicopters circle my neighborhood?"}
{"title":"3 Secret L.A. Shortcuts You Need to Know About (Because Google Maps Doesn't)"}
{"title":"Best places to play soccer in Glendale?"}
{"title":"Let's face it. Sacramento is using the drought as a means to drum up fees. It has no real interest in saving water."}
{"title":"SMPD arrest man for plugging in his electric car while black."}
{"title":"Chris Burden dies: Artist's light sculpture at LACMA is symbol of L.A."}
{"title":"Westside Rentals?"}
{"title":"Anyone know of any REAL cheap rental car places?"}
{"title":"The Ansel Adams of Los Angeles"}
{"title":"Help me to help my 70yo. disabled neighbor to cut the cord (x-post with r/cordcutters)"}
{"title":"LAPD: Mission Station Evacuated After Woman Walks In With Grenade."}
{"title":"Are there any Westwood motels/apts that offer reasonably priced short-term housing (2 months)???"}
{"title":"In Combating Drought, L.A. Should Follow Israel\u2019s Lead"}
{"title":"I've never been to LA before and am looking for some travel advice."}
{"title":"Lifeguard attack in Venice: video shows lifeguard dumped a bucket of water the people before the attack"}
{"title":"Used Fridge in LA"}
{"title":"UPDATED: 8-Car Pile-Up Triggers 110 SigAlert"}
{"title":"Internet Provider,Los Angeles recommendations?"}
{"title":"This is the website for Sattdown Jamaican Grill in Studio City."}
{"title":"He was the video artist for Transmission LA- MOCA. Ben Jones' work is cross b/t a cartoonish acid trip &amp; 90's, Macintosh-assisted, pop art."}
{"title":"City Council panel calls for Airbnb regulation plans before negotiating tax collection"}
{"title":"Do any of you use Project Fi?"}
{"title":"If you were to have a Ferris Bueller's Day Off in LA, what things would you do for the day?"}
{"title":"Man dies after leaping over bridge overpass onto 5 Freeway"}
{"title":"Tempers Flare As Huntington Park Appoints Undocumented Immigrants To City Commissions"}
{"title":"The most LA show possible takes place entirely in a car."}
{"title":"Property management company has been refunding my rent secretly and is now attempting to evict me"}
{"title":"A few of the many moments that made us smile this past week at the Special Olympics World Games! [Video]"}
{"title":"i made a tourism poster for LA featuring a conversation i casually overheard last night at a taco truck that really should be our new city motto."}
{"title":"Any East Side bars w/ \"Daily Show\" finale viewing party?"}
{"title":"Should LA increase the development of green buildings?"}
{"title":"SuicideGirls Blackheart Burlesque is coming back to LA!"}
{"title":"Video Shows Lifeguard Pouring Bucket of Water on Woman Before Fight... this is from last week."}
{"title":"Anaheim Ducks games"}
{"title":"My buddy in Echo Park just sent this to me"}
{"title":"TIL there was a bombing at the LA times building that killed 21 people in 1910"}
{"title":"My friends are awful flakes. I might need new ones. (North Hollywood)"}
{"title":"They really meant it when they said Silverlake is turning into a white neighborhood."}
{"title":"Is this normal?"}
{"title":"Please name this famous Angeleno for me. (Tip of my tongue type thing.)"}
{"title":"Los Angeles Has The Pickiest Eaters In America"}
{"title":"Body Found in Parking Garage Near USC Triggers Alert"}
{"title":"Anyone know a good restaurant that has cheese stuffed meatballs?"}
{"title":"From out of state, looking for a way to partake in some edibles. What is the easiest (if any) way to find a dealer on short notice?"}
{"title":"Where is a good place to buy exotic and unusual fruit?"}
{"title":"Star Wars: Invasion Los Angeles"}
{"title":"Does anyone know what goes down in 1830 Echo Park Ave?"}
{"title":"Been hearing this helicopter for over an hour...SWAT team standoff in Silverlake"}
{"title":"Anyone know where I might be able to purchase a Joshua Tree?"}
{"title":"Silver Lake Standoff Prompts Evacuations"}
{"title":"Anybody hear a large amount of gun shots around Lincoln Heights ?"}
{"title":"Won't you like to get gifts every time you're bored? Use my referral code: 754a997 to get 20 bonus coins."}
{"title":"About to be Homeless Tomorrow and No Idea What I Do From Here"}
{"title":"Anyonr know of any bars showing Game of Thrones?"}
{"title":"Report pop-up is annoying as fuck."}
{"title":"Where's the best place to watch the Clippers game tomorrow?"}
{"title":"Why are there so many Tommy's knockoffs?"}
{"title":"I accidentally dated a sociopathic prostitute/gay porn star...WTF! (THE REAL CODY CACHET)"}
{"title":"Room w/bathroom for rent for the summer. June - Sept."}
{"title":"Going to Hollywood next month, whats a cheap cheap hotel? And tourist ideas?"}
{"title":"Going to school in Northridge... Need advice on apartments!"}
{"title":"LAPD subreddit?"}
{"title":"Slide Show: Meet the New Tallest Building in Los Angeles - Los Angeles Magazine"}
{"title":"Is my apartment an illegal rent unit?"}
{"title":"Off the top of your head, what % of la county residents do you think own the property they live in?"}
{"title":"The Expression Lounge, an idea to hopefully bring the gift to play music for everyone."}
{"title":"Vegas Trip - Rent a Car and Fly back - What's the best way to do it?"}
{"title":"Craigslist ad found in Los Angeles."}
{"title":"Union Station can be scary... just saying."}
{"title":"Oaxacan grilled cheese from The Carvery Kitchen"}
{"title":"Tattoo artists"}
{"title":"Is there a store where one can purchase Bernie Sanders swag in L.A.?"}
{"title":"When are the best and worst times to go to the DMV"}
{"title":"Are there any updates on the stopped Target construction in Hollywood?"}
{"title":"End Times Catastrophic Flooding"}
{"title":"If you like beer...(or fun? or friends?) [My Brewery Tour]"}
{"title":"Judge: Sale of Los Angeles convent appears to be invalid (Katy Perry)"}
{"title":"Send me to the most pretentious, high-concept, overpriced, bullshit restaurant in Orange or Los Angeles counties and I'll review it this weekend."}
{"title":"CA DMV Parking Placard Crackdown: Whopping 6 Arrests"}
{"title":"California offers $75,000 bounty to catch drone pilots who slowed wildfire efforts"}
{"title":"The 1st Swimmer to Cross the Finish Line in the Special Olympics Open Water Swim Finals ... [video]"}
{"title":"Discover Your Passion for Blacksmithing!"}
{"title":"In LAX for 12hrs - Any suggestions?"}
{"title":"Lyft app now doesn't work by default at LAX if you need a pick up. (x-post r/anarcho_capitalism)"}
{"title":"Weekly What To Do: KPop, Bacon and Summer Fun"}
{"title":"Looking for a place to stay for three months"}
{"title":"There's a storm a brewin' Ma, get off the dang roof."}
{"title":"Commuting Santa Monica to Pasadena"}
{"title":"\"Fear The Walking Dead\" set in.....El Sereno."}
{"title":"Amber Rose Is Hosting A 'SlutWalk' in Downtown L.A.: LAist"}
{"title":"SAG-AFTRA members: what's your experience with the union been like and has it been worth the $3000 initiation fee?"}
{"title":"Dentist recommendations?"}
{"title":"First weekly MMV! (Monday Morning View)"}
{"title":"10 Best L.A. Restaurants for Gluten-Free Brunch"}
{"title":"NYTimes - Old Homes in Los Angeles Are Being Bulldozed Into History"}
{"title":"Free Indie Video Game Night, Saturday at Giant Robot!"}
{"title":"GO LOOK AT THE MOON RIGHT NOW"}
{"title":"Smaller husky found. Please help find the owner (Los Angeles)"}
{"title":"Albertsons Washington Blvd. (Costco) Closing! Alcohol 10 &amp; 25% Off!"}
{"title":"Found Dog - Husky in Culver City"}
{"title":"Not-so-professional Film makers/lovers"}
{"title":"Canabis cup socal tomorrow anyone planning on going"}
{"title":"White/Extremely Fast streak across sky?"}
{"title":"TIL that in California, you have to know someone is under 18 to get charged w/sex with a minor, therefore South Hills HS teachers not charged with a felony"}
{"title":"tour operators in erode"}
{"title":"Is a trip to the Griffith Observatory for Valentines Day a good idea?"}
{"title":"wishing wells near Griffith Observatory?"}
{"title":"Family vacation in LA this week. Looking for things to do that's low cost and fun for a toddler."}
{"title":"Los Santos"}
{"title":"Nothing like down town LA at night."}
{"title":"Looking for a poem/prose piece describing LA can you guys help?"}
{"title":"Pliny the Younger?"}
{"title":"My friend and owner of Cha Cha Chili may host Super Smash Bros. Nights, anyone interested? XPOST Alhambra"}
{"title":"Los Angeles gives hosts, neighbors mixed signals on short-term rentals (AirBnB, etc) (LA Times)"}
{"title":"Seeking LASIK recommendations."}
{"title":"Candlelight Vigil Held For Transgender Woman, Boyfriend Arrested"}
{"title":"Where did 92.3 go???"}
{"title":"Looking for a great restaurant/cafe to have a birthday dinner near BH, WeHo"}
{"title":"I just finished this acrylic painting inspired by this weeks rare rain storm. I sketched this scene originally from the dog park on 2nd street in between Spring and Main."}
{"title":"Dealing with a ticket - need advice"}
{"title":"CSULB was just evacuated?"}
{"title":"Art Gallery?"}
{"title":"7 Places Where Grown-Ups Can Play Video Games In Los Angeles"}
{"title":"Looking to get from San Francisco to LA without leaving the surface of the earth."}
{"title":"Moved here about 6 months ago and looking for vehicle registration info."}
{"title":"Assembly Speaker Wants 'Better Communication' About Immigrants Accused of Serious Crimes: The leader of the California State Assembly says that there needs to be \"better communication\" between federal and state officials over undocumented immigrants who have been accused of serious crimes."}
{"title":"See MacArthur Park Lake Filling Up With Giant, Colorful Balls"}
{"title":"LA Power Outtage"}
{"title":"So my wife tells me to look behind us while we're driving on the 60"}
{"title":"Only in LA would a student require a personal assistant"}
{"title":"Santa Monica DMV Driving Test"}
{"title":"Los Angeles photographer starting new project: Nobody Walks in L.A."}
{"title":"River Rock in Studio City Serves Disappointment"}
{"title":"Los Angeles photographer begins new project: Nobody Walks in LA"}
{"title":"Garcetti signs Vision Zero directive to end L.A. traffic deaths by 2025"}
{"title":"Best Strip Club in LA?"}
{"title":"How to tour L.A's programmatic buildings in a day"}
{"title":"What's Coming and What's Needed with LA Metrorail"}
{"title":"Fear the Walking Dead- L.A. turn for zombie apocalypse"}
{"title":"Is the area around Warren High dangerous/ghetto?"}
{"title":"Planning to go to the DMV tomorrow to renew and change my name on an expired license. Where to go?"}
{"title":"My Newest Collection of Bad Drivers From Around the City"}
{"title":"Free bees!"}
{"title":"L.A.'s shade balls go viral \u2014 but the Internet has mixed opinions"}
{"title":"Short-Term Rentals Are Taking 11 Units Off the LA Rental Market Every Day"}
{"title":"Reservoir covered with 96 million plastic balls to fight evaporation!"}
{"title":"\"The Don\" Limo Advice (*VIDEO*)"}
{"title":"We missed a prime opportunity for an /r/LA meetup!"}
{"title":"Looking for a Nursing Home to Donate To"}
{"title":"What happened to Dublin's Irish Pub in DTLA?"}
{"title":"Oh LA, why you gotta be so LA"}
{"title":"Lower middle class first time homebuyers: do you exist?"}
{"title":"Journey Opening Night at the Hollywood Bowl - in 3D"}
{"title":"Tried using transit to get to LA River Ride yesterday and it did not go well. Here's my complaint to LA Metro. Have other bikers been passed by buses bcause the rack is full?"}
{"title":"KKK \"White America\" Fliers Distributed in Latino Neighborhood"}
{"title":"I found OP in WeHo. Looking fly!"}
{"title":"Landlord is demanding that rent is paid on the 1st. I get paid on Friday."}
{"title":"This is an unfiltered and untouched iPhone 4s photo I snapped of the sunset last night. No need to enhance..."}
{"title":"Breakfast Places in Santa Monica overlooking the ocean"}
{"title":"Rent Increase Question"}
{"title":"Using a moving company versus doing it yourself"}
{"title":"Business Sales Instructor"}
{"title":"Yet another sunset photo from last night"}
{"title":"Looking for old pictures of Hazeltine/War Memorial Park. Probably a long shot."}
{"title":"Comedy Benefit Show - 7/1"}
{"title":"An Accurate Re-Enactment of Utilizing Waze in Los Angeles"}
{"title":"Castle KBBQ closed?"}
{"title":"California passes vaccination bill that eliminates almost all exemptions"}
{"title":"Why I'm leaving London for LA (Cory Doctorow of Boing Boing)"}
{"title":"Advice for a student seeking a sublet?"}
{"title":"What upcoming LA city projects/development are you most excited about?"}
{"title":"What is the Best EDM Club in Los Angeles/ Hollywood?"}
{"title":"Any bars in LA that play metal?"}
{"title":"I'm desperate for an upholstery man"}
{"title":"Everybody shut the fuck up. There's a train on the Westside."}
{"title":"Best Summer Playlist For The Beach"}
{"title":"How busy is Griffith Park observatory on 4th of july?"}
{"title":"Man attempts to run over girlfriend, crashes into Los Angeles restaurant"}
{"title":"La Brea Renaissance Continues with New Retail, Closing of Silk Trading Co"}
{"title":"Yesterday we were chillin in the Hills' of Woodland."}
{"title":"Hollywood Bowl bringing in a bottle of Scotch?"}
{"title":"Lords of Dogtown"}
{"title":"Need dentist asap! no insurance or credit and my mouth is killing me. More info inside."}
{"title":"\"Massive Anti-Police Message Spray-Painted Above 101 Freeway\" Anyone know what it says? Is it \"all cops are bastards?\""}
{"title":"36 Hours in Koreatown, Los Angeles"}
{"title":"Sunni Squirts a Second Time"}
{"title":"I search for LA Made products and would love some help! [My Website]"}
{"title":"Looking to buy wedding decorations in DTLA."}
{"title":"4th of July PSA for Pet Owners"}
{"title":"Columnist rips into food at LA County Bar Association dinner"}
{"title":"Location for a group photo for 400"}
{"title":"Thursday night bars?"}
{"title":"\u201cSpecial license to kill\u201d \u2014 a 1909 editorial cartoon about dangerous LA drivers"}
{"title":"[My Blog] A Year of Los Angeles Portraits"}
{"title":"Virtual Fly-Through of LA Convention Center 2020"}
{"title":"I need a big favor.."}
{"title":"Places like Aldi in LA?"}
{"title":"That slightly less blatant self-promotion game"}
{"title":"Anyone know where I can find \"Not Your Father's Root Beer\" in LA or surrounding areas?"}
{"title":"Satellite view of massive chemtrails over Los Angeles : Happy Fourth of July..."}
{"title":"Happy fourth : irrefutable proof of chemtrails from new satellite images over LA"}
{"title":"What's this really famous historical building I'm thinking of. W or M and big lit sign."}
{"title":"[Sherman Oaks] Help me catch a bike thief!"}
{"title":"Thinking about moving to Portland Oregon? This website may help answer some of your questions :)"}
{"title":"North Reddit this evening"}
{"title":"Magic Mike XXL"}
{"title":"Hate crimes are falling in California"}
{"title":"Whittier Narrows Parks: A Story of Water, Power and Displacement | East of East | Departures Columns"}
{"title":"Realistic Coyote Body"}
{"title":"Elysian Park Be Revelead"}
{"title":"Elysian Park Be Revealed"}
{"title":"I need a favor.."}
{"title":"Has anyone rented from Miller and Desatnik? Did you get your deposit back?"}
{"title":"Best Methods to Get your lost love back +91 9855543303"}
{"title":"Anime Expo 2015 Food, Where To Go [My site]"}
{"title":"West Los Angeles Property Management"}
{"title":"Does anyone know how to get to this spot up in Palos Verdes?"}
{"title":"Los Angeles weekend discussion thread 12/19/14 - 12/21/14"}
{"title":"Surfers regain access to Malibu; Paradise Cove; pier to be unlocked"}
{"title":"LA to San Fran in 35 Minutes? Hyperloop CEO Says Speed Tube Could Become Reality"}
{"title":"I'm looking for one of those streets where all the residents go crazy with Christmas lights.."}
{"title":"Airport officials approve plan to bring rail to LAX"}
{"title":"A definitive list of the best LA street art murals of 2014"}
{"title":"Help me pick a new ISP please?"}
{"title":"LA River's flood role is 'paramount'"}
{"title":"Can you help me find a restaurant in Hollywood area?"}
{"title":"[Contest] We're a local ad agency and we're having a unique twitter/holiday contest. Happy Holidays!"}
{"title":"Artists Creates a Rainbow Bridge Made of Yarn in Santa Monica [MY BLOG]"}
{"title":"Map from a Californian point of view in 1947"}
{"title":"Ex-LAPD detective held without bail on bank robbery charges"}
{"title":"Good places to eat dinner around the Hollywood Bowl?"}
{"title":"[Meet-up] Spent the last 60 days on a roadtrip across the country and back hanging out with a bunch of redditors. We're having a meetup Wednesday 8pm in Northridge 21+"}
{"title":"anybody want to go on a helicopter tour next week?"}
{"title":"Tree falls near Pasadena museum, injuring 3 kids"}
{"title":"Saw an LAPD officer post on my FB that someone is driving down Topanga in the Valley shooting out windows of businesses. Anyone heard anything about this?"}
{"title":"Map of the United States as the Californians saw it in 1947."}
{"title":"Sunset Strip at Magic Hour"}
{"title":"Opinions on Gun Legislation In Los Angeles/ CA"}
{"title":"Heavy police response on the 101"}
{"title":"Anyone know what's going on in the woodlan hills/Calabasas area? 7/28 7:10pm"}
{"title":"So today they removed the Griffith Park Teahouse...anyone have any information on where it is now, and where it is going?"}
{"title":"Venice Beach (Los Angeles) electric sidewalk car carrying about twenty sitting passengers, including the driver. Sitting stationary on the sidewalk in front of a barbershop, ca., 1920."}
{"title":"Is this out in San Bernadino County?"}
{"title":"Lots of cool, free holiday stuff going down in the Harbor Area this weekend: 20 tons of snow in Wilmas and free outdoor screenings of The Grinch in Pedro."}
{"title":"Does anyone know who/what was filming at Union Station today?"}
{"title":"American Cinematheque: \"Never feed them after midnight!\" Actor Dick Miller with director Ernest Dickerson and Visual Effects maestro Rick Baker in person for a GREMLINS 1&amp;2 + DEMON KNIGHT triple feature at the Egyptian Theatre in Hollywood."}
{"title":"Lets have a Sriracha drinking contest!"}
{"title":"#Icantbreathe march tomorrow at noon, Hollywood and Vine. Please wear black."}
{"title":"Is this 9% sales tax pissing anyone else off?"}
{"title":"Ted Rall-LAPD-LATimes Battle: New Tape Proves Cops Lied"}
{"title":"Late Night Restaurants - LA Eater"}
{"title":"Nice hiking trails near Glendale or Griffith that aren't too steep or long ?"}
{"title":"The Age of the Arts District: A look at the five craft beer breweries set to open in LA's new hot spot neighborhood."}
{"title":"Public Rooftop in Downtown?"}
{"title":"Any Hollywood bars having debate viewing parties this Thu?"}
{"title":"Thinking about moving down there, step 1 is find a helpdesk gig (Experienced)"}
{"title":"I beat the system!"}
{"title":"Group Transport Black Car Service Lalimosedan com"}
{"title":"Shallow beaches in LA? Kind of a weird question. I mean, a beach where you can walk out fairly far before you have to start treading water. LA/OC/SD/Ventura"}
{"title":"How do Limo / Car Services stay in business in LA?"}
{"title":"Got a $100 MRCA citation for rolling through a stop sign. What will happen if I just ignore it?"}
{"title":"Los Angeles daily discussion thread 8/26/15"}
{"title":"LA Driving vs Chicago Suburb Driving [MY BLOG]"}
{"title":"Video Marketing Services: Orange County CA"}
{"title":"Exclusive: Gehry Partners Reveals Designs for Sunset Boulevard Development"}
{"title":"Looking for the Greater Los Angeles area PC Gamers for Focus Groups"}
{"title":"[My Blog] Full review and photos at the Go Topless Day Pride Parade"}
{"title":"Los Angeles plans to make money on its $4.6 billion Olympics \u2014 here's how"}
{"title":"Hey friends, I'm moving to LA next year. What banks have the most branches out there?"}
{"title":"LPT: Replace the filter for your HVAC unit every 3-6 months depending on usage. A clogged/dirty filter will cause numerous problems."}
{"title":"The MLS just featured my rec league soccer team in a video about soccer in LA!"}
{"title":"Thirteen Thousand Become Homeless Every Month In LA County &amp;ndash; Your News Wire"}
{"title":"What is a good up and coming location to buy a house or apartment in the Los Angeles area?"}
{"title":"My Apt forbids dogs but my upstairs neighbor (who is also property manager) just adopted a baby husky."}
{"title":"Manhattan Beach Sunset [2544 x 1696]"}
{"title":"http://www.myfoxla.com/story/29883148/tv-reporter-cameraman-fatally-shot-on-air-during-morning-news-show"}
{"title":"License Plate Scanner Car"}
{"title":"TV reporter, cameraman fatally shot on air during morning news show"}
{"title":"LAPD officers will begin wearing body cameras next Monday"}
{"title":"An first look at LA's 218-page bid for the 2024 Olympic Games [My Blog]"}
{"title":"CicLAvia Works"}
{"title":"Mobile SMOG check station - are voluntary.."}
{"title":"Reminder..Routine smog checkpoints are voluntary."}
{"title":"Missing special needs adult"}
{"title":"1928 Map of Hollywood Showing Principal Streets and Places of Interest, History and the Movies."}
{"title":"Naked man appears at Studio City laundromat"}
{"title":"Griffith Night Hike"}
{"title":"The Making of the L.A. Metro 'M'"}
{"title":"Explosion in DTLA"}
{"title":"How to guard L.A. from an Olympics disaster"}
{"title":"Wondering if anyone knows of a cool jazz club/bar..."}
{"title":"Hit&amp;Run - Who is this? Near Bev Center"}
{"title":"How high is fluoride content in LA's water supply vs in other cities? This article claims that fluoride level is not the same everywhere"}
{"title":"What drought? Some L.A. County supervisors have their cars washed 2, 3 times a week"}
{"title":"Customs seizes $8 million worth of cocaine at ports"}
{"title":"Store suggestions"}
{"title":"Long-stalled 28-story DTLA condo tower at 9th &amp; Flower once again going through approval process"}
{"title":"here is the complete CA state .pdf concerning e-cigarettes"}
{"title":"I just want to say fuck Ticketmaster ticketed shows in LA."}
{"title":"I just want to say fuck Ticketmaster ticketed shows in LA."}
{"title":"Dutch Crunch Bread"}
{"title":"This sums up Hollywood pretty well for me"}
{"title":"How to make your own bacon-wrapped hot dog cart"}
{"title":"[My Site] Roundtown will help you not waste your life"}
{"title":"Recommended short (1hr total) hike for a date?"}
{"title":"Any graffiti artists able to paint a surfboard?"}
{"title":"Westwood [OC][4608 x 2592]"}
{"title":"What are you doing for the Super Bowl?"}
{"title":"Convicted drug dealer charged in murder of Fox exec Gavin Smith"}
{"title":"Jailed drug dealer charged in connection with the murder of Fox executive Gavin Smith"}
{"title":"Magic Castle tickets"}
{"title":"A sunset at Echo Park Lake (Happy Daylight Saving Day!)"}
{"title":"Today, LAFD &amp; Red Cross want you to Turn &amp; Test"}
{"title":"Scientology and real estate in LA and beyond..."}
{"title":"Scientology :o"}
{"title":"Anyone have experience with Rubmaps and Massage Parlors?"}
{"title":"The LAPD uses its helicopters to stop crime before they start."}
{"title":"I guess this finally proves the Arclight is NOT owned by Scientlogists"}
{"title":"Free coffee bean in El Seguno right now"}
{"title":"They are giving away drinks at Coffee Bean, in El Segundo."}
{"title":"How LA Created Skid Row"}
{"title":"[MY EVENT]FREE Comedy Show tonight at 9pm in Burbank w/ Headliner Greg Edwards (aka Sparky Sweets, pHd from Thug Notes)"}
{"title":"Where are the best places to camp in California?"}
{"title":"LA! Where's our most beautiful post-rain view?"}
{"title":"How many of us used a Thomas guide before getting I Google maps"}
{"title":"Brian Humphrey is talking on KCAL 9 about the fire downtown right now!"}
{"title":"So how long are we letting the yellow mellow?"}
{"title":"LA's latest health trend is as crazy as you think it is"}
{"title":"Help! Bar near Fairfax/Beverly"}
{"title":"Is this the Rapture?"}
{"title":"Is this real life?"}
{"title":"Any one hear gunshots? Any one Rioting? Worried about Rodney King event happening again."}
{"title":"Back from a trip to the museum of tolerance. set the mood for the ride home"}
{"title":"Best Los Santos (GTA V) gallery I've seen yet"}
{"title":"617 people killed by law enforcement in L.A. County since 2000"}
{"title":"Best Los Santos gallery I've seen yet (x-post /r/gaming)"}
{"title":"Town halls set to discuss sheriff oversight panel"}
{"title":"Todays post rain adventure"}
{"title":"What and where are these neon stepping lights (art installation)?"}
{"title":"Want to party under the Space Shuttle? This weekend you can! Yuri's Night 2015 LA"}
{"title":"Los Angeles daily discussion thread 04/08/15"}
{"title":"LA's meat-free market is booming, and not just in specialty stores anymore"}
{"title":"LA County to Commemorate Armenian Genocide Centennial With Public Art Exhibit"}
{"title":"LA's Fox 11 anchor Araksya Karapetyan. Sexy little Armo spinner."}
{"title":"617 people killed by law enforcement in L.A. County since 2000"}
{"title":"A Weekend Guide To The Desert (Beyond Coachella And Palm Springs)"}
{"title":"MakerSquare to open L.A. campus to train software engineers"}
{"title":"So blustery right now."}
{"title":"Arrests made in shooting death of disabled teen in South Los Angeles"}
{"title":"San Pedro's AltaSea to help SpaceX with ocean landings for rockets"}
{"title":"Got two free round-trip Metrolink passes. Any recommendations on what to do with them?"}
{"title":"L.A. paid Wells Fargo for nonexistent check printing"}
{"title":"Best staffing agencies in Los Angeles?"}
{"title":"L.A. per-person miles driven has been going down since 2002, similar to U.S. and Calif trends"}
{"title":"Police Training Footage of the North Hollywood Shootout 1997 [x/post from r/gunfights]"}
{"title":"Documentary about the weird and wonderful world of LARP is showing at AMC Citywalk on July 6th if ticket reservation target is met. Film features a Hodor cameo, a Battlestar Galactica LARP and more."}
{"title":"California\u2019s Black License Plates, Used From 1963 to 1969, Are Back in Production"}
{"title":"Beach camping in Mexico recommendations?"}
{"title":"Favorite LA dispensary?"}
{"title":"Los Angeles artists, what art opportunities e-newsletters are you subscribed to?"}
{"title":"This morning's chase in the Inland Empire and SGV"}
{"title":"Longtime Journalist, Former KNX1070 Sportscaster Joe McDonnell Dies"}
{"title":"Officials To Resume Audit of DWP Trusts; City Launches \u2018Online Checkbook\u2019"}
{"title":"Naked Man, 55, Arrested In Lewd Act On Arcadia Church Grounds"}
{"title":"Obama in LA 3/12/15 - Epitome of Pimp Travel"}
{"title":"Learn to Jaggercize!"}
{"title":"[Meet-up]$20 Texas Hold'em home poker game this Sunday 2/8 at 4:30pm"}
{"title":"SoCal hosted the Westminster dog show for pigeons"}
{"title":"Valentine's Day in LA 2015 Guide [TTDILA]"}
{"title":"The Hidden History of Los Angeles podcast - Absolutely fascinating, and well-produced..."}
{"title":"Los Angeles daily discussion thread 04/09/15"}
{"title":"LA Red Light Camera Citations - what's the current word on these?"}
{"title":"Where do I meet people?"}
{"title":"Today (April 9th) from around 7pm to 10pm I will be adding large amounts of paint to my 'Color Los Angles' mural at 211 3rd st. Los Angeles (The Little Tokyo Art Complex) for Second Thursday Art Walk."}
{"title":"$1000 if you can help me get a job in my field"}
{"title":"Decline of Spring Street Park frustrates downtown neighbors"}
{"title":"HELP! Looking for a hip / fun restaurant on the west side"}
{"title":"In L.A., thirsting for a decent bar culture: LA Times article on the sad state of our bar scene. Only Utah and the Bible Belt rank worse than California."}
{"title":"Comparing transportation in our region: 1985 and 2015"}
{"title":"10 Best Chinese Restaurants in L.A."}
{"title":"So... there's a turkey platter museum in Los Angeles"}
{"title":"10 Free Things You Can Get in L.A. If You Know Where to Look and How to Ask [MY BLOG]"}
{"title":"Top 10 film noir and movie-glamour hotspots in Los Angeles, according to The Guardian"}
{"title":"The Law That Killed the L.A. River | Laws That Shaped LA | Departures Columns"}
{"title":"The Kardashian Girls Filmed Inside a Calabasas Home While the Stunned Owners Were in Asia"}
{"title":"Looking for artist, creative types, makeup artist, models, actors! We will be in town February 9-23"}
{"title":"American Cinematheque: Screenwriter Scott Alexander in person for an ED WOOD (1994) / MAN ON THE MOON (1999) double feature. PULL THE STRING! Dec. 5 at the Aero Theatre in Santa Monica."}
{"title":"Looking for pioneers to come join us over on /r/LACounty!"}
{"title":"ELI5: Why some people park with their bumpers hanging off onto the street."}
{"title":"I'm Dreaming of a Blue Christmas..."}
{"title":"State's gasoline use is on the rise | UT San Diego"}
{"title":"#iamdtla"}
{"title":"NIMBYs trying to block large mixed-use Los Feliz development"}
{"title":"South LA CicLAvia Preview"}
{"title":"Outrages utility bill"}
{"title":"First Person: Angeleno creates and places 'ghost bikes' to honor fallen cyclists"}
{"title":"My last couple days in the greatest city!"}
{"title":"It's hot as shit"}
{"title":"[My Podcast] So my friend and I started this Podcast called \"Fresh2LA\", about moving to LA and being new in the city."}
{"title":"[Redondo] Man with dragon under the crescent Moon"}
{"title":"Drones hindered firefighting efforts in California"}
{"title":"Looking for Natalia Lafourcade tix"}
{"title":"need to get a couch from little Tokyo by noon, anyone with a truck wanna make some money?"}
{"title":"Lighting strike and explosion from yesterday's storm"}
{"title":"Amber Alert"}
{"title":"Ungentrified LA"}
{"title":"$20 Texas Hold'em home poker game this Saturday 7/25 at 5pm"}
{"title":"Tap to Go mobile card - never worry about tap to go card balance again"}
{"title":"LAPD Use Desperate Females Begging For Rides to Entrap Uber Drivers"}
{"title":"From r/weather : yesterday's rain was courtesy of an old hurricane, and beat the July record"}
{"title":"Any infant friendly activities near lax that are fun for adults?"}
{"title":"Driver who abandoned car in North Fire pays more than $1000 to towing company"}
{"title":"Amazing sight off Southern California coast. Dying hurricane Dolores on approach to landfall"}
{"title":"Your participation is valuable"}
{"title":"Weird Uber driver"}
{"title":"A Man found drowned in Demi Moore's swimming pool,very intersting nwes inside about moore. Read moRe.."}
{"title":"The 10 Best Burger Joints in Los Angeles"}
{"title":"Keeping the Korean love for hiking alive \u2014 in Southern California"}
{"title":"Saw you on the 605 N today, fellow ENT."}
{"title":"Mid City Street buckled. City/Street Services doing nothing about it. Major hazard. What can we do?"}
{"title":"Valley Village gangs are getting rougher and tougher..."}
{"title":"Free tickets to Third Eye Blind in Irvine tonight"}
{"title":"Where to watch or find lowriders?"}
{"title":"Palm trees on fire; Meanwhile in Ventura County..."}
{"title":"Anyone here use DSLEXtreme.com? I'm looking for broadband alternatives"}
{"title":"What in the fuck is this weather?"}
{"title":"PSA: flash flood warning for San Gabriel valley mountains"}
{"title":"The guy sitting at Fathers Office at a 4 top on Sunday at 6pm. Discuss."}
{"title":"Dreamy Video Shows Breathtaking And Gorgeous Los Angeles"}
{"title":"Get free CPR training in a flash at 4 Metro Rail Stations this Wednesday"}
{"title":"4 stretches of freeways tally most big rig crashes per mile annually"}
{"title":"Deputies change stories on jail visitor's beating, court records show"}
{"title":"Los Angeles daily discussion thread 06/02/15"}
{"title":"Experience with tinting front windows?"}
{"title":"Abducted Dog Poster - LA, Noho, Burbank, Studio City"}
{"title":"Phoenician here, just found out my wife has been having an affair, coming to LA to escape for the weekend. A call for friends."}
{"title":"Two nights in a row, Waze has attempted to send me onto the 405 through closed on-ramps. WTF, Waze?"}
{"title":"California's Almonds Suck as Much Water Annually as Los Angeles Uses in Three Years"}
{"title":"\"THRU TRAFFIC\" exits on the freeway: worth it or not?"}
{"title":"I need this"}
{"title":"Innovative parking signs could curb Los Angeles confusion - westsidetoday.com"}
{"title":"More toll lanes (lexus lanes) which are further war on the middle class and owned and made by foreign interests"}
{"title":"L.A. agrees to spend $1.3 billion to fix sidewalks in ADA case"}
{"title":"Die Hard Simpsons Fan? Go Dine at Krusty Burger"}
{"title":"Good Career Counselor in LA?"}
{"title":"Free access to Lynda.com and other learning sites for L.A. county library card holders"}
{"title":"LA Times' Guide to LA Craft Beer"}
{"title":"An article that discusses Boyle Heights and the changes it's gone through since the metro gold line expansion."}
{"title":"In 1900, Los Angeles had a bike highway \u2014 and the US was a world leader in bike lanes"}
{"title":"Looking west from 5th and Hill streets. Ornate 5-bulb streetlights appear as far as the eye can see. The trees of Pershing Square are visible on the left, and the State Normal School, on the present site of the L.A. Public Library, Central Branch shows prominently in the background, 1905."}
{"title":"Potentially moving"}
{"title":"anyone else have Friday off?"}
{"title":"Weekly What To Do: 4th of July Fun and of course Anime"}
{"title":"2-4 hour hike with rewarding view, peak, or waterfall/gorge?"}
{"title":"Anyone ever fight GC Services at traffic court?"}
{"title":"Pic of the sunset from the hills"}
{"title":"Used Car Lots in Los Angeles?"}
{"title":"A-MAN, Inc. STEM International Science Discovery &amp; Learning Center"}
{"title":"[Meet-up] Comedy Nerds?"}
{"title":"What's your plan for 4th of July weekend?"}
{"title":"Cat Put Through LAX X-Ray Machine, Shitstorm Ensues"}
{"title":"Does anyone recognize the woman in this picture? Found in a frame bought at a Goodwill in Pasadena ~3 years ago. Likely someone's mother or grandmother."}
{"title":"Super Shuttle scam at LAX today."}
{"title":"Fastest/easiest way to complete online drivers ed for learners permit?"}
{"title":"Found Dog"}
{"title":"Metro proposes 15-minute service network, funded by cutting nonperforming lines and Disneyland bus (p 6)"}
{"title":"Best vegetarian meal you've had in LA?"}
{"title":"It's 11:15 PM and the neighbor still has screaming kids playing in the front yard"}
{"title":"How is placing flyers on cars not considered littering?"}
{"title":"Runyon Canyon is a beautiful hike at sunset - check it out sometime!"}
{"title":"Take it easy on the freeway, Los Angelenos"}
{"title":"California Skiing Advice"}
{"title":"Guilford Glazer dies at 93; developed Del Amo Fashion Center"}
{"title":"Long Exposure shot of [LA | DTLA], decent.exposure"}
{"title":"I want to move to LA or Barstow, CA and need help with planning."}
{"title":"We could be getting up to a foot of fresh snow in the mountains this week!"}
{"title":"Los Angeles officially on tactical alert after man opens fire on LAPD officer."}
{"title":"We could be getting up to a foot of fresh snow in the mountains this week!"}
{"title":"We could be getting up to a foot of fresh snow in the mountains this week!"}
{"title":"LAPD declares tactical alert citywide after 2 suspects fire at patrol car"}
{"title":"The equation for making and hanging out with friends in LA?"}
{"title":"Are there any good LA photography spots that not many people know about?"}
{"title":"LA"}
{"title":"The End of Gangs: Cleaning Up Los Angeles, California"}
{"title":"Los Angeles daily discussion thread - 10/14/14"}
{"title":"Raffi at Pepperdine 10/26 - concert for kids [my blog]"}
{"title":"Q&amp;A with Smile On U Founder, BB Maboby Bahadarakhann of SmileOnU.org"}
{"title":"Angelinos without A/C, how did you deal with the heat?"}
{"title":"L.A. watchmaker Cameron Weiss thinks his time has come."}
{"title":"Ex-LA Councilman Richard Alarcon sentenced to 120 days in jail for voter fraud, perjury"}
{"title":"The Downtown LA skyline in 1951, 1979 and 2014"}
{"title":"How are you guys planning to vote in the midterms?"}
{"title":"Who is your car guy?"}
{"title":"Unlimited MOBILE Broadband for the LA Area | Any suggestion?"}
{"title":"Not Stopping at a stop sign [Los Feliz]"}
{"title":"Looking for recommendations on a living will and trust lawyer in the LA area."}
{"title":"Eagle Rock Brewery needs your support at another public hearing!"}
{"title":"TIL that in Brazil there is a subculture that builds lowrider bikes, and dress exactly like Los Angeles area \"cholos\""}
{"title":"Another bomb in a truck in Van Nuys right now"}
{"title":"Anyone been to the LA Haunted Hayride? How is it? What to expect?"}
{"title":"Jury Duty Downtown &amp; no possible way to get there"}
{"title":"Favorite LA-based Food Instagram Accounts?"}
{"title":"Do people swim in December in Los Angeles?!"}
{"title":"P-Diddy Arrested At UCLA For Alleged Attack With Kettlebell"}
{"title":"Sean 'Diddy' Combs arrested for assault at UCLA"}
{"title":"Have there been any updates on the recent shooting of the unarmed man in Los Feliz?"}
{"title":"Need insight on LAX for trip planning purposes"}
{"title":"Any good study spots in or around DTLA?"}
{"title":"LAPD: Unarmed man shot in Los Feliz pointed hands at officers, moved \"aggressively\"..."}
{"title":"Beach and cookout/BBQ?"}
{"title":"Amazon Fresh frustration"}
{"title":"Son of man shot by LAPD says father wouldn't have provoked officers"}
{"title":"P. Diddy arrested at UCLA"}
{"title":"July 3rd \"The Forced of July\" Irreverent Sketch Comedy, Music and more"}
{"title":"Azusa Police Fatally Shot Man After Receiving Report of Attempted Break-In, Bizarre Behavior"}
{"title":"MAN SHOT BY LAPD IN LOS FELIZ ID'D; COPS SAY HE WAS \"AGGRESSIVE\""}
{"title":"Seeking sublet or private room in or near downtown LA through end of July"}
{"title":"Have a girl visiting me this weekend and next week. She's visited me before, but looking for fresh ideas for things we could do in LA."}
{"title":"Anyone else see those two black twins who dress the same and walk in a synchronized fashion all over LA?"}
{"title":"Eagle Rock, 1900"}
{"title":"Visiting your fine city at the end of June"}
{"title":"STAPLES Center \"Sports-ageddon\" Conversion - L.A. KINGS to LAKERS to CLIPPERS"}
{"title":"Massive heat wave today in LA and Long Beach. Anybody else experience it?"}
{"title":"Current Gas Prices in Hawaii are Lower Than in Los Angeles!"}
{"title":"Documentary explores women in Santa Monica aviation"}
{"title":"Commuting to Highland Park and Culver City - what's the best neighborhood?"}
{"title":"ector Morejon, Unarmed Teen Shot, Killed By LBPD, Cried For His Mother: 'Mommy, Mommy, Please Come'"}
{"title":"Currently head of digital marketing for a software company, looking for something new. Willing to give anyone who finds me a job my first month's paycheck."}
{"title":"Clever Gangsters - Big Shot A.K.A This Is Not The God Father @ South Coast Repertory in Costa Mesa - Review"}
{"title":"Anonymous activist gets pot holes fixed by drawing penises around them. Could it work in L.A.?"}
{"title":"Lost Dog in the Larchmont Area- link to flyer."}
{"title":"No Obvious Signs of Trauma Found on Body Tentatively ID\u2019d As Erica Alonso"}
{"title":"What's the best/most honest new/used car dealership in LA?"}
{"title":"Another parking ticket question."}
{"title":"best los angeles seo company"}
{"title":"View of Broadway looking north from Sixth Street, Los Angeles, 1905."}
{"title":"Must do things in Pomona/Claremont?"}
{"title":"How I feel about Inglewood stealing the Chargers"}
{"title":"Anyone know a good place with cheap happy hour in the Valley?"}
{"title":"Let us crowdsource the different on-demand jobs that exist in LA!"}
{"title":"Just heard tons of sirens in Korea Town.. Who knows what's going on??"}
{"title":"Need a place to stay.."}
{"title":"Anyone know where I can get some Dragon fruit in LA."}
{"title":"Fireworks at lax"}
{"title":"Steve-O in Police Custody After Climbing Crane in Hollywood"}
{"title":"Steve-O Climbs 100 Foot Crane, Gets Himself Arrested"}
{"title":"Anyone know what happened at Point Dume / Westward Beach today around 5pm?"}
{"title":"L.A. Crawls With Up To 3 Million Feral Cats"}
{"title":"Steve-o is in custody after climbing up a crane in Hollywood with an inflatable whale and some camera drones, to protest SeaWorld. Or something."}
{"title":"Does anyone know where I can get a good bunk bed?"}
{"title":"Atiqullah Nabizada News | Atiqullah Nabizada Los Angeles"}
{"title":"$1200-$1300 apartments?"}
{"title":"TIFU Forgot sunscreen while biking... #ciclavia"}
{"title":"Sanders rally help"}
{"title":"Looking for a female support group for friend who was sexually assaulted"}
{"title":"The police department tweeted that at least two unmarked cars were hit by gunfire."}
{"title":"Vacationing In LA in 3 weeks, What are some of the best places to go visit, eat and see while I am out there?"}
{"title":"Landing job in LA from out of state?"}
{"title":"American Cinematheque: Jennifer Aniston will pay a visit to the Egyptian Theatre in Hollywood tonight (Nov. 19) for an advanced screening of CAKE."}
{"title":"Thanksgiving is right around the corner. For those of us who can, let's spread the love."}
{"title":"Please help recover this iPhone (pics in comments)"}
{"title":"If you could live in any neighborhood in LA county, where would it be?"}
{"title":"Video: When Angelenos Flush Their Toilets, Where Does the Waste Go? [My Show]"}
{"title":"[My Blog] FORWARD SET: U-Lock Mob's D\u00eda de Los Muertos Bike Messenger Alleycat Race Recap"}
{"title":"New local subreddit for alcohol problems"}
{"title":"Anyone else see this billboard at the corner of La Cienega &amp; Olympic and scratch their head?"}
{"title":"HELP! I need a favor! (J. Paul Getty Museum)"}
{"title":"Today is the saddest day of my life"}
{"title":"Visiting Malibu from Denver this weekend. Any must try restaurants in Malibu or within an hour+ of Malibu?"}
{"title":"DKLA"}
{"title":"E-TEAM Billboards - What is this?"}
{"title":"r/Los Angeles thoughts on Craigslist?"}
{"title":"Home Cleaning Service Help"}
{"title":"In 1938, L.A. woman went to jail for wearing slacks in courtroom"}
{"title":"Los Angeles weekend discussion thread 10/24/14 - 10/26/14"}
{"title":"Good morning Los Angeles, from atop Kaiser Permanente LAMC"}
{"title":"I want to bring some SF-area beer to my LA friends"}
{"title":"Crash blocking 2 lanes in both directions of 101 in Encino"}
{"title":"Los Angeles Weekend Guide (10/24-10/26): 5 Things To Do Around Town [HausAngeles Blog]"}
{"title":"I have 2x tickets to Placebo tonight at Club Nokia. Unfortunately I cannot go. Anyone?"}
{"title":"Areas of Los Angeles similar to Big Bear?"}
{"title":"Los Angeles Open House Guide for Sunday, October 26 [HausAngeles Blog]"}
{"title":"7 hot LA tech companies hiring right now"}
{"title":"One day we should all post pictures of our morning views"}
{"title":"Friend got Robbed by an Uber Driver Last Night [text NSFW]"}
{"title":"Had the pleasure of visiting L.A. a few weeks ago and made a video of my adventures. Thought I'd share!"}
{"title":"Did you know we have a wolf sanctuary outside of LA? There is a benefit concert with 8 psych-rock and Americana bands playing (including my band) and a chance to meet the wolves."}
{"title":"Did you know we have a wolf sanctuary outside of LA? Tomorrow, there is a benefit concert with 8 psych-rock and Americana bands playing (including my band) and a chance to meet the wolves."}
{"title":"Rule Change Lets Los Angeles Dream of Spires"}
{"title":"Kind of cool for your unique guests - 10 weirdest places to stay in LA"}
{"title":"Family reacts to 7 year old run over by Ice Cream truck and killed."}
{"title":"Halloween Info on Santa Monica parade?"}
{"title":"Ever been atop City Hall? You should check out the observation desk, 27 stories up overlooking Los Angeles in all directions."}
{"title":"Xpost from /r/Bicycling stolen bike in Glendale"}
{"title":"Halloween + Oktoberfest = TREATOBERFEST @ Angel City Brewery Tomorrow! [Our Event]"}
{"title":"Where can I find FRESH apple cider in this damn city?"}
{"title":"Where can I find FRESH apple cider in this damn city?"}
{"title":"On the Westside, the 10 West is jammed in the mornings and then it's the 10 East in the evenings. How much of this auto-traffic do you think will dissipate once the Expo Line is open to the public in 2015?"}
{"title":"Getting affordable housing in Los Angeles"}
{"title":"Doctor accused of issuing thousands of illegal drug prescriptions"}
{"title":"Patsaouras Transit Plaza closed at Union Station due to medical situation. (This Ebola scare is getting out of hand!)"}
{"title":"Ebola scare? Man on DTLA bus taken to hospital"}
{"title":"LADOT Pilots \u201cPedestrian First\u201d Timing on Broadway"}
{"title":"Woman stabbed to death in front of her children over parking space"}
{"title":"Suspicious Package Shuts Down Ventura Boulevard Stretch."}
{"title":"Frizzi 2 Fulci Coming To Austin and Los Angeles."}
{"title":"Where can I find graffiti/mural artists in LA?"}
{"title":"Hollywood Armed Gunman"}
{"title":"Life in El Sereno."}
{"title":"Free, live amateur boxing in LA or the Valley?"}
{"title":"Bison gores man working on California's Catalina Island"}
{"title":"What Can Beijing Learn From Los Angeles' Pollution Problem?"}
{"title":"One of my favorite places in LA"}
{"title":"Incident at 26th and San Vicente?"}
{"title":"Redesign of the city flag"}
{"title":"Custom jewelers in greater LA metro?"}
{"title":"CHP and Caltrans Have a Message for You..."}
{"title":"LA bars showing the debate tonight?"}
{"title":"Vir Nocturna - \u00dcber [My Music]"}
{"title":"Purple App - On-Demand Gas Delivery"}
{"title":"It's raining!! In Covina anyway"}
{"title":"13 Weirdest Things in LA? I think we can do better."}
{"title":"Burgers in LA. This should settle it once and for all."}
{"title":"Moped repair shop?"}
{"title":"Player needed for 3 on 3 basketball tourn this weekend."}
{"title":"3 helicopters and police cars circling Collin Powell academy in Compton - any idea what that is?"}
{"title":"Lost Samsung S5"}
{"title":"[Event] [Entertainment] The PLEASURE COMPOUND in West Los Angeles! Dr. Suzy's Bonoboville. (VIP EXCLUSIVE NIGHTLIFE RADIO TALK SHOW) After Hours Events: Every Saturday Night!"}
{"title":"Does anyone know what's happening at 7th between Bixel and Garland?"}
{"title":"I recently decided to give thai bbq ribs a try and now I cannot get enough of it. What is your favorite thai bbq in LA County?"}
{"title":"Parking at Downtown Palace Theater?"}
{"title":"Anyone trying to go rock hunting/gold panning around here?"}
{"title":"Hilarious Missed Connection Posting (SF Valley)"}
{"title":"AMA Request: A person who always takes the aisle seat on the bus/train and leaves the window seat unoccupied/covered in their belongings."}
{"title":"Help finding a fun baby shower venue / party"}
{"title":"UCB Sunset Asscat lineup"}
{"title":"Downtown from above"}
{"title":"Where to celebrate 21st birthday?"}
{"title":"Saw a post about the flag of LA and I wondered what it would look like if I made some \"slight\" adjustments to it..."}
{"title":"Last Friday's \"Spamalot\" at The Hollywood Bowl was good, but maybe you had to be there"}
{"title":"Does anyone know the story behind this buried car in the Santa Monica mountains?"}
{"title":"Los Angeles weekend discussion thread 6/19/15 - 6/21/15"}
{"title":"Thanks Obama. Olympic Blvd is now a parking lot."}
{"title":"Help! Need last minute small party venue ideas for tomorrow!"}
{"title":"Support our Charleston Family by eating Free Soul Food this weekend &lt;3"}
{"title":"Did Jamie XX at the EchoPlex seriously just sell out in like, five seconds?"}
{"title":"Let's support our friends in Charleston by eating a whole bunch of soul food."}
{"title":"[My Event] Show some love for Charleston by eating some Soul Food this weekend!"}
{"title":"MAD designs hilltop village for 8600 Wilshire"}
{"title":"Mad Men fans: Great Ad Placement in West Hollywood"}
{"title":"Extra ticket for Butch Walker tonight 6/19 up for grabs!"}
{"title":"Where can I buy zines in Los Angeles?"}
{"title":"Inside Out today?"}
{"title":"Amos And Jonny Discuss Life On Skid Row And Possible Ways Out"}
{"title":"LAFD failed to inspect hundreds of hazardous sites, state says"}
{"title":"We made our first short film."}
{"title":"15 ton load of marijuana seized at Otay Mesa."}
{"title":"My view from work. Gorgeous."}
{"title":"Doesn't happen often in Los Angeles, but I do cherish these times."}
{"title":"Donors help east Hollywood youth baseball team regain field access | Los Angeles Times"}
{"title":"Other Scenic Drives"}
{"title":"Best wing place in LA?"}
{"title":"This is what happens when the port gets shut down. Photo taken at Sunset Beach"}
{"title":"Jupiter, Venus and moon above LA (x-post r/space)"}
{"title":"My girlfriend and I are visiting LA for the first time."}
{"title":"Golden Box, A Retro Disco Primed Just For Hollywood\u2019s Dance Revolution"}
{"title":"Driver wanted in Chatsworth street racing deaths booked on murder"}
{"title":"Moving to LA in a few weeks with friends, what should I know/do? Bit nervous"}
{"title":"Surfing is the new golf for entrepreneurs in LA"}
{"title":"Echo Park last night"}
{"title":"Did anyone else hear a loud sound?"}
{"title":"Hail just fell from the sky in North Hollywood, Los Angeles, California."}
{"title":"Boardgame clubs or open gaming meetups?"}
{"title":"New YMCA in Koreatown"}
{"title":"Taken yesterday evening! I love LA!!!"}
{"title":"Clouds rolling in over LA"}
{"title":"Best men's haircut in South Bay/Westside?"}
{"title":"I turned 18 two months ago and havn't done anything about it. What places in LA do I have to visit?"}
{"title":"LAPD officers shoot a crazed homeless man on Skid Row (Video NSFW)"}
{"title":"Help a first timer with Public Transportation."}
{"title":"It's hailing in Venice Beach."}
{"title":"This Juice tho. Dinos Chicken"}
{"title":"Not that I'm planning on abusing the system, just curious: how does ticket auditing work on LA metro?"}
{"title":"Does looking up red light ticket on Photonotice, count as being\"served\" in Culver City?"}
{"title":"This just happened in DTLA (video)"}
{"title":"Deadly LAPD shooting of homeless man is caught on video"}
{"title":"thank you"}
{"title":"This seems legit"}
{"title":"Have you seen enough clouds yet? I have not. (Timelapse)"}
{"title":"Graphic Video: LAPD Officers Shoot Man Five Times in Broad Daylight"}
{"title":"Considering moving to Los Angeles, can you guys tell me any positives and negatives?"}
{"title":"What am I supposed to think about those guys that dig through my recycling?"}
{"title":"Homeless Man shot by LAPD *warning Death*"}
{"title":"Hey r/LosAngeles, I am Bus Operator for LACMTA. Ask me stuff."}
{"title":"I walked up hill both ways in the rain to snag this crazy photo of downtown from tonight for you guys!"}
{"title":"Waterspouts at sunset tonight in Redondo Beach!"}
{"title":"\"Jesus Loves You\" : LAPD Officer Stands Over Unarmed Homeless Man Shot to Death"}
{"title":"Had to stop and take some shots of downtown while driving down from Angeles National Forest"}
{"title":"Does anybody here go to \"A club Called a RHONDA \" or \"Spotlight\" events ?"}
{"title":"Homicides hard to solve in this South Los Angeles ZIP code deemed war zones"}
{"title":"Bars in LA for Game of Thrones?"}
{"title":"Places to ride my bike with my dog running alongside me."}
{"title":"Bars in LA showing Wrestlemania?"}
{"title":"Hey r/LosAngeles - what spots would you take someone out-of-town to really make them love LA?"}
{"title":"Bars showing The Walking Dead season finale tonight?"}
{"title":"GF and I want to buy a bunch of new clothes, looking for guidance on the best malls or outlets."}
{"title":"Police Seek 4 Suspects Accused Of Assaulting, Robbing 87-Year-Old Pasadena Man"}
{"title":"Los Angeles Unified School District data shows that LA students getting virtual no arts education"}
{"title":"Soho House opening a second members-only Los Angeles location, this time in Downtown LA."}
{"title":"Someone please befriend this man. Found in Silver Lake."}
{"title":"\"No Overnight Guests\" a legitimate rule to enforce when renting?"}
{"title":"A raw uncut walk along Santa Monica Beach"}
{"title":"Time Warner 300MB/20MB Silverlake/Echopark?"}
{"title":"California students take a stand to topple teacher tenure; New York up next | PBS News Hour"}
{"title":"Re-launched my website on hidden gems in LA. Would love tips! :) [My Website]"}
{"title":"[MY EVENT] Free Comedy in Burbank - 9pm - the corner bar"}
{"title":"Freeways after some drizzle - rain hasn't even started yet."}
{"title":"Looks like the stereotype about LA drivers in the rain is true"}
{"title":"Te Extra\u00f1o - Aventura Feat Xtreme Lyrics"}
{"title":"My view on LA rain"}
{"title":"All this protesting and rioting has me nervous so I went out and got a new Beretta."}
{"title":"Conan Travels - \"Shopping Spree on Rodeo Road\" - 6/2/09"}
{"title":"5 great places to eat in South L.A."}
{"title":"The clouds themselves descended on Culver City"}
{"title":"The problem with rain in LA..."}
{"title":"BMW Driver Killed in Hit-and-Run on 405 Fwy in Carson While Checking Disabled Car"}
{"title":"Tom Hanks had died"}
{"title":"Don't litter - especially in parks and on trails"}
{"title":"Clara Berta Featured in Huffington Post Los Angeles article about Art"}
{"title":"lost dog santa monica blvd and wilcox ave (hollywood)"}
{"title":"As a college student in the valley...."}
{"title":"Mariachi Plaza development plan worries L.A. musicians"}
{"title":"LA Galaxy make it to the MLS Cup final once again!"}
{"title":"What is all that steam being produced off the Verdugo exit in Burbank?"}
{"title":"Rainy weather soundtrack"}
{"title":"Looking To See If Any Redditors Were Present For The Hollywood Christmas Parade And If They Had Any Pictures Of Me!"}
{"title":"World's worst freeway entrance."}
{"title":"The Five Stages of Being Trapped in the HOV Lane"}
{"title":"Nude Beaches?"}
{"title":"Los Angeles weekend discussion thread 03/13/15 - 03/15/15"}
{"title":"Wilshire Boulevard Collector &amp; Author Eric Lynxwiler Shares His Collection"}
{"title":"Cold Case: Arrest made in 2002 rape, murder of 15-year-old girl in Montebello"}
{"title":"Found these crazy balls in Topanga Canyon yesterday?"}
{"title":"Anxiously waiting to hear \"it's time for dodger baseball\" for the 2015 season."}
{"title":"Compton Has a Posse of Black Cowboys That Are in Danger of Vanishing"}
{"title":"Two LA zip codes, 90002 and 90003 (East Congress and Watts) see some of the highest levels of house flipping in the US. More than a quarter of all home purchases in both areas are flips."}
{"title":"Any trails in/around L.A. safe enough for hiking AT NIGHT?"}
{"title":"Obama on the 10 West in West LA 3/12/15"}
{"title":"Living near the new transit lines is going to be freaking expensive"}
{"title":"hey i was just wondering I'm thinking about going to college in california for next year I'm from nyc so will it hard to make friends and adapt? thanks for feedback"}
{"title":"AMA Request: AtomiCClown"}
{"title":"Would moving to LA for college/music be realistic?"}
{"title":"Trip suggestions for ~$1,000"}
{"title":"Ex-MTA chief Art Leahy is new head of Metrolink, has his work cut out for him"}
{"title":"[My Event] Like airplanes? An aviation nonprofit I volunteer with has a historic, restored Ford Tri-Motor flying into Camarillo Airport March 19-22 as one of our outreach events. Viewing is free, picture-taking is encouraged, flights for a fee (raises money for our scholarship program - info inside)"}
{"title":"Car chase in Silver Lake from my roof last night"}
{"title":"11 'welcome to LA' things that will make you laugh"}
{"title":"CRSSD Fest in San Diego - Discount Tickets in Comments!"}
{"title":"Taste test of which Los Feliz Grocery Store Has The Best Rotisserie Chicken"}
{"title":"In case you didn't know, The Westside Mobility plan is working on adding light-rail to Lincoln Blvd amongst many other improvements to mobility on the west side."}
{"title":"Thank You Comics in Eagle Rock is closing"}
{"title":"I took a photo of a bird near Redondo Pier"}
{"title":"anyone know what happened in el sereno last night?"}
{"title":"Hank's Bar in downtown is closing"}
{"title":"Friday the 13th Tattoo specials..?"}
{"title":"Best bars in the SFV?"}
{"title":"Looking for LA-based female friends"}
{"title":"Lost an iPhone 5 on NYE at an event? Someone's selling your 'found' phone."}
{"title":"So, I just discovered there's a yelp for the 405 freeway"}
{"title":"West LA Vocal Coach Recommendations?"}
{"title":"Lost Dog in Diamond Bar"}
{"title":"Do you know this thief?"}
{"title":"Has anyone gone to the great horror campout at griffith park? Im thinking of going this year, but I want to know if its worth it."}
{"title":"One Starry Night returns to Pasadena Playhouse!"}
{"title":"Farewell from Griffith Observatory"}
{"title":"Americana anyone?"}
{"title":"What are the best middle and high school summer programs in math?"}
{"title":"\"Hyperloop\" train (LA-SF in 30 minutes) to be built in Central California next year"}
{"title":"Echo Park thieves steal newly installed bike racks"}
{"title":"Gas prices soar in California as supply shrinks"}
{"title":"Just had a power outage in lawndale. I saw a bright blue light when it turned back on..."}
{"title":"Friday 5:45pm: Motorcycle stopping all lanes on the 134-E (west of 5)"}
{"title":"I can't afford a doctor but I think there's something seriously wrong with me what can I do?"}
{"title":"Where to get dog meat in L.A.?"}
{"title":"Friday Night Sex Thread"}
{"title":"Where can I see a good MMA/Boxing Match? Amateur is fine."}
{"title":"My tribute to Leonard Nimoy. Instant trash by security"}
{"title":"Best Cheapest Furniture Delivery Places?"}
{"title":"New grad RN job market"}
{"title":"West Side Rental log in?"}
{"title":"If any of you flirty assistants are looking for a job, this one is available"}
{"title":"I &lt;3 LA"}
{"title":"Need a good auto body shop in LA proper or surrounding"}
{"title":"Moving to LA Housing Advise and Living Tips"}
{"title":"Super clutch, but need 2-3 LOW END THEORY FEST TICKETS right now?"}
{"title":"Help finding an exterminator in the area"}
{"title":"Where to make some quick cash this weekend?"}
{"title":"U.S. Bank Tower (Minecraft)"}
{"title":"Under 21 (20) and bored out of my mind, what is there to do?"}
{"title":"Maternity clothes in Burbank/NoHo/Glendale?"}
{"title":"Traffic commute help"}
{"title":"New Grad RN job market in LA"}
{"title":"Possibly moving to Lawndale for 6 months or longer... how is the area for families with kids?"}
{"title":"Pictures of Buildings in Los Angeles"}
{"title":"Fire in Montebello!"}
{"title":"So what's on fire?"}
{"title":"Carbon (Billionaire's) Beach"}
{"title":"LA DUDE"}
{"title":"Defunct free Westside Rentals competitors"}
{"title":"Go to a game at Mater Dei?"}
{"title":"Montebello fire, A Little closer. Not too close."}
{"title":"Fire north of SFV?"}
{"title":"The anti-Trump: Tom Bradley, a quiet giant who bridged divides"}
{"title":"Milwaukee man charged with sexually assaulting 5-year-old"}
{"title":"Well Silver Lake, I'm convinced"}
{"title":"LA Hello Kitty"}
{"title":"San Pedro to The San Gabriels. Complete with photobomb by the Montebello fire."}
{"title":"DTLA - in front of John Ferraro building"}
{"title":"Here's Los Angeles's Plan For Winning the 2024 Olympics"}
{"title":"Cheapest Sim Card?"}
{"title":"Euphemistic racist language out of control on R/LosAngeles."}
{"title":"How long before we see video of motorists beating protestors on one of the major roadways in LA?"}
{"title":"[My Blog] The Great California Political Shakeout"}
{"title":"Pictures from Tuesday Nights's downtown protest"}
{"title":"Weekly What To Do: Happy Thanksgiving, Except You Andrew"}
{"title":"I took a photo of Downtown LA from City Hall"}
{"title":"There is currently an accident on every major LA Freeway"}
{"title":"Los Angeles Toys for Tots Info 2014"}
{"title":"Third day of Ferguson protests starts relatively quietly in L.A."}
{"title":"Street cleaning tomorrow?"}
{"title":"Protestors have started throwing rocks. Be safe out there tonight."}
{"title":"LAPD to flood streets to look for impaired drivers during Thanksgiving"}
{"title":"Don't get arrested for protesting in LA tonight, you'll be stuck in jail til Monday."}
{"title":"San Fernando Valley Blackout Black Friday Visibility Rally"}
{"title":"A guide for staying safe if you're caught or participating in the protests"}
{"title":"This is used to be our public transportation system before 1950"}
{"title":"Parking Enforcement Tire Mark - Los Angeles"}
{"title":"A Look At Santa Monica\u2019s Planned Expo Terminus Transit Center"}
{"title":"Ferguson Protests near Union Station - 11/26/14"}
{"title":"Where are the protests tonight?"}
{"title":"Traffic ticket still not in system, and its been two weeks"}
{"title":"Best large Mexican supermarkets in LA and/or OC?"}
{"title":"Custom Atwater Village Shirts just went on sale from Atwater Moto!! http://atwatermoto.bigcartel.com"}
{"title":"Just heard crazy sirens heading south (I live just west of DTLA) - anyone else?"}
{"title":"Sing it cheech! [xpost r/funny] but it really belongs here"}
{"title":"LAPD roughing up Ferguson protesters"}
{"title":"The LAPD Should Be Ashamed Of Themselves"}
{"title":"KTLA (Channel 5) is running a Twilight Zone Marathon from 9am to 6pm Tomorrow (Thanksgiving)."}
{"title":"Send this guy an email and thank him for being an upstanding public servant."}
{"title":"Looks like this picture was taken from the roof of the building on the NWish corner of 3rd and S Beaudry, anyone know if roof access is reasonably attainable there? Love this angle."}
{"title":"Does The Laugh Factory really support this type of dialogue?"}
{"title":"I got a LED display for my bicycle wheel that shows anything I want. Here are the images I have so far, need 8 more ideas. What should I flash all around LA?"}
{"title":"The difference between Bel Air and South-LA"}
{"title":"(xpost from assistance)"}
{"title":"LAPD: Total Of 323 Arrested During 3 Days Of Protests"}
{"title":"14 Reasons We Are Especially Grateful To Live In L.A."}
{"title":"Art meets kitsch: Self-described snob displays mom\u2019s vast collection of turkey platters"}
{"title":"Ramen Week Returns To L.A. With Half-Off Ramen At Different Shops"}
{"title":"Possibly being forced to move to LA"}
{"title":"My Photographer friend took this photo."}
{"title":"Los Angeles school district demands multi-million dollar refund from Apple"}
{"title":"I just found these items taped under the coffee table of my temp housing in Playa. I'm now very curious about the backstory (x-post from /r/pics)"}
{"title":"Car Camping Pass and 2 Wristbands - Coachella Weekend 2"}
{"title":"Anyone know anything about the DWP program that pays for lawn removal?"}
{"title":"A few months ago Time Warner Cable finished upgrading in Los Angeles, how are your internet speeds now?"}
{"title":"Photo album, Hiking, Chantry Flats--&gt;Stutervant Falls &amp; beyond..."}
{"title":"Another Earthquake??"}
{"title":"Hey LA! Take a moment to check out Hopegrown. It can make all the difference..."}
{"title":"Los Angeles Just Had A Magnitude 3.2 Earthquake"}
{"title":"Is Azusa safe?"}
{"title":"Are there any high-rise buildings in downtown LA that offer tours to the top?"}
{"title":"Six Flags - What ticket for x2 and Goliath?"}
{"title":"Hey LosAngeles! College student needs your help!"}
{"title":"Apparently it's Sparkletts policy to dump unused water down the sidewalk."}
{"title":"I have a friend looking for a job...Need your Help /r Los Angeles!"}
{"title":"Video: single-door versus all-door boarding on Metro Rapid bus"}
{"title":"Cartoonist Blames \u2018libertarian negligence\u2019 for Potholes in L.A."}
{"title":"What's the best gym membership to get if you live in los feliz?"}
{"title":"Anyone recognize her?"}
{"title":"Star student killed by California police 'was going to change the world': sister"}
{"title":"California Considers Health Coverage for Immigrant Kids: The State Senate has approved legislation that would make it the first state in the nation to extend health coverage to children who are in the country illegally and seek federal authorization to sell private insurance to illegal immigrants."}
{"title":"California Senate votes to restrict e-cigarettes as tobacco products"}
{"title":"Architect Tom Wiscombe really lets loose with this space ship of a building in Los Angeles"}
{"title":"Problems with a landlord in Long Beach"}
{"title":"From personal experience, how much take home pay is needed to live in LA?"}
{"title":"Bono Left a Massive Tip at Canter's Deli, Is Still Weird as Hell"}
{"title":"Good hiking around LA?"}
{"title":"Aren't landlords required to give 24 hours notice before coming into a unit? Is it different in Culver City?"}
{"title":"Los Angeles weekend discussion thread 02/20/15 - 02/22/15"}
{"title":"Asshole left his/her dog in the car at LAX"}
{"title":"Unobservant Motorists Face Up To $500 Fine In New Santa Monica Tow Zone - Santa Monica Mirror"}
{"title":"Metro Trains Mostly On-Time, Only 80% of Bus Lines On-Time"}
{"title":"Potential Ban Looms On Exotic Animals Near Santa Monica Pier Entrance - Santa Monica Mirror"}
{"title":"Metro trains mostly on-time, but only 80% of bus routes are, finds KPCC. It depends on the route and is at worst during school months"}
{"title":"redditors, what are great sites to find a temporary job abroad?"}
{"title":"FREE - Beverly Hills Health &amp; Wellness Expo returns this Sunday before the Oscars"}
{"title":"Recommendations for where to pick up a replacement spare tire near Sun Valley, Burbank, or NoHo?"}
{"title":"My sister is doing putting on a trippy analog projection show along with Folk Art band G&amp;G this Saturday."}
{"title":"Anyone wonder why???"}
{"title":"Another \"moving to LA\" post"}
{"title":"Want to win $50? Submit designs now for Yo! Venice! print masthead"}
{"title":"After watching the Carson presser today, why was this guy the only thing I kept thinking about"}
{"title":"View of the Angels Flight, looking west on Third Street toward the corner of Hill Street, ca. 1910"}
{"title":"1 in 5 riders face unwanted sexual behavior on L.A. Metro, survey says. To report unwanted sexual behavior on LA County transit, call 911 or 888-950-SAFE (7233)"}
{"title":"The Supreme leader is somewhere in Los Angeles. Can you guess where? (Xpost)"}
{"title":"Here's a bunch of stuff going down in the South Bay this weekend"}
{"title":"Cruising for a new bed frame"}
{"title":"San Diego Chargers, Oakland Raiders have joint stadium plan near Los Angeles"}
{"title":"Bar where I can watch the Oscars?"}
{"title":"Homeless man's garden of hope blooms on L.A. median"}
{"title":"Black Hipsters and Artists"}
{"title":"Any fun ideas for date night tonight with my girl?"}
{"title":"The Trouble with Oxy"}
{"title":"Wonder Women Tech \u00bb Free 3 Day Conference for Women In Tech"}
{"title":"TAP is live on the Big Blue Bus!"}
{"title":"Question on LA renter's rights. Fleas have infested the grass of my apartment complex and now have infested my apartment."}
{"title":"Found a Gift Card"}
{"title":"Black cube/loud music between 2nd/3rd and Beaudry downtown LA"}
{"title":"3 different water mains broke last night: Hollywood, Hollywood Hills and Silver Lake"}
{"title":"Any good things to do for a first date?"}
{"title":"I'm \"drone guy\" from the LA meetup last month and I just finished my drone reel featuring footage of our fair city in perspectives you may not have seen before."}
{"title":"Los Angeles least affordable city for young workers"}
{"title":"LA Food- Latest happenings in the Los Angeles Restaurant Scene"}
{"title":"LA History Podcast [my podcast]"}
{"title":"No city I've lived in so far proves the Location, Location, Location rule as LA does"}
{"title":"Cinespia 7/18 - Grindhouse!"}
{"title":"An L.A. Times article submitted by George Vreeland Hill."}
{"title":"2nd AD accused of peeping on women on dozens of film sets in CA, LA, GA, HI, NV"}
{"title":"Bodyshop recommendations?"}
{"title":"Sunset at Hammond"}
{"title":"Howlin Ray's. The best spicy fried chicken in LA"}
{"title":"It's that time again -- Dine LA Deals"}
{"title":"LAPD Cracks Down On Distracted Drivers At 5 Valley Intersections"}
{"title":"Bomb squad checking out suspicious package on Sunset Blvd"}
{"title":"Can't wait to see that new movie \"Buffalo\" with the guy from Entourage /s"}
{"title":"The new Women's Center For Creative Work in Frogtown, LA will be shared office &amp; work-space for women in the creative fields"}
{"title":"What's up with lots of bands/artists only playing DJ sets in town, not full shows?"}
{"title":"5 Things: My Obsessions this Week in LA"}
{"title":"LAPD SWAT incident Santa Monica Blvd. East of LaBrea"}
{"title":"Exploring L.A.\u2019s Cuisine de Biere | CraftBeer.com"}
{"title":"drinking tap water can build immunity - or give chronic diarhhea."}
{"title":"Los Angeles daily discussion thread. 11/27/14"}
{"title":"Anyone know of any coffee shops open today?"}
{"title":"LAPD chief orders L.A.'s Ferguson protesters released in time for Thanksgiving dinner"}
{"title":"Photos from the Los Angeles protest from last night"}
{"title":"I'm a Canadian who was stabbed in Koreatown. I need help hiring an immigration attorney."}
{"title":"How can I find out where protests are planned for this holiday weekend so I don't get trapped?"}
{"title":"Driving to SF tomorrow morning, looking for carpoolers/gas money"}
{"title":"The Edison for New Years?"}
{"title":"The top 10 debuts at the 2014 Los Angeles auto show"}
{"title":"Friend and I have nothing to do for Thanksgiving today. What are some decent places we could go to enjoy ourselves in LA on Thanksgiving."}
{"title":"Cats judge LA's Best Burgers"}
{"title":"After hearing the Ferguson protesters are being released in time for thanksgiving, and people are now protesting that."}
{"title":"\u201cHomelessness &amp; Mental Illness\u201d Summit in Van Nuys this December"}
{"title":"The best part about Thanksgiving in Los Angeles"}
{"title":"Los Angeles crime scenes in 1953 (contains graphic images)"}
{"title":"Vaccination bill [abolishing personal exemption] approved by California Senate"}
{"title":"So There's a LEGOs Convention Happening This Weekend in Pasadena [MY BLOG]"}
{"title":"This is the cutest pic I have ever seen of Josh Hamilton getting drugs out of a baby's diaper. (x-post from r/mlb)"}
{"title":"Possibly stupid tourist question regarding the LA river culverts."}
{"title":"what are these strange things that appear on my car"}
{"title":"If you travel in Beverly Hills - Please read this!! Cops on Motorcycles baiting drivers at intersections"}
{"title":"WHATEVER comedy night at Center for the Arts Eagle Rock with Maria Bamford, Ian Karmel and more! [my show]"}
{"title":"Affordable LA Barber's?"}
{"title":"Yelp reviews removes from Racist Silverlake Yoga (need to resubmit with stealth reviews)"}
{"title":"All-door boarding test begins Monday on 720 Rapid Bus"}
{"title":"New Resident here looking for help getting CA DL and registering car"}
{"title":"New to LA and wondering about drive times"}
{"title":"2015\u2019s Most Diverse Cities in America: LA is #1, Long Beach is #2, Anaheim and San Diego tie for #3, and Sacramento is #5"}
{"title":"East Los Angeles has the greatest concentration of Hispanics in the US: 97%"}
{"title":"This Is the Most Stereotypically Los Angeles Thing That Has Ever Happened (celebrity's new age religion's kombucha bust)"}
{"title":"Rain in Los Angeles"}
{"title":"2015\u2019s Cities with the Most &amp; Least Diversified Economies: 8 of the top 10 are Southern California cities"}
{"title":"ITS HAPPENING. RAIN. RAIN EVERYWHERE."}
{"title":"Makes sense."}
{"title":"Man found guilty of throwing his 4-year-old daughter off Rancho Palos Verdes cliff in 2000"}
{"title":"This handy site can give you all the important info about your area in LA"}
{"title":"It feels so cozy - and all the plants are getting watered"}
{"title":"Please take this kitten. 6 months of cat food included."}
{"title":"That Menacing Illegal Kombucha Ring Run By a Venice Cult Was Finally Busted"}
{"title":"Interview with Hadrian Belove of Cinefamily"}
{"title":"Where can I buy a good strawberry cream pie in west Los Angeles?"}
{"title":"Where photos are taken in Los Angeles by tourists (red) and by locals (blue)"}
{"title":"Where to sell my perfectly fine fridge/freezer?"}
{"title":"Weekly What To Do: Reality Gets Messy"}
{"title":"Maps of LA Show Where Tourists Take Photos (red) and Local Take Photos (blue)"}
{"title":"Hey, LA! Doobie here. Got another shot from Lincoln Heights, this time of a refreshed downtown before the next big rain starts."}
{"title":"Move over, Hawaii: California has the highest U.S. gas prices"}
{"title":"THUNDERSTORM!!!!"}
{"title":"Just before it started raining like crazy this evening, this is what the view looked like from Malibu"}
{"title":"What is this thing falling from the sky? Never seen this before"}
{"title":"It was just a little rain, get your shit together Los Angeles!"}
{"title":"Panoramic View of LA from Malibu in between storms today"}
{"title":"Power is out in Elysian Park"}
{"title":"Need help planning a week long trip to SoCal."}
{"title":"Accused Grim Sleeper Lonnie Franklin Jr. Is the Ringmaster of His Own Murder Trial"}
{"title":"Is anyone else watching this naked pursuit in Redondo Beach?"}
{"title":"LAPD detective alleges he was banned from speaking Spanish in squad room"}
{"title":"On their way to history, Clippers instead add to inglorious past"}
{"title":"My weekend trip to Mammoth from LA (photo album inside)"}
{"title":"Get your survival kits ready! Spotted this ill omen in Marina Del Rey."}
{"title":"Last Night's Sunset Over Glendale and Burbank"}
{"title":"What is the closest thing to hooters in Pasadena?"}
{"title":"Sunset from SFV"}
{"title":"Some weather coming?"}
{"title":"In Los Angeles, Voting Is Getting the Silicon Valley Treatment"}
{"title":"Hey guys, have a cool product here in Santa Monica... Would love your feedback"}
{"title":"Power outage in westwood?"}
{"title":"Just outside of LA lies the beauty of.. Palmdale? Who knew!?"}
{"title":"Petition to Mayor Garcetti: Help Save Angels Flight!"}
{"title":"Anybody had trouble with UCLA doctors/clinics overbilling you?"}
{"title":"Has anyone ever had any bad experiences in the Los Feliz area, or more specifically, in Griffith park?"}
{"title":"Best solution for high speed internet and phone services for small business in LA?"}
{"title":"Looking for intermediate volleyball players in South Bay for womens/coed doubles, trips, or quads"}
{"title":"[Photo] Meanwhile on the 101..."}
{"title":"Shower Buckets...Save"}
{"title":"12 Must Try On-Demand Services in Los Angeles This Summer"}
{"title":"Free Nicotine Patches"}
{"title":"Friend was at a motorcycle accident yesterday afternoon and was with the victim in his last moments"}
{"title":"Looking to film a webseries episode in an independent drugstore in LA. Does anyone know of any?"}
{"title":"Federal judge orders release of video showing Gardena police fatally shooting unarmed man in 2013"}
{"title":"Has anyone attended a Concert On The Green at Warner Park in Woodland Hills?"}
{"title":"So This Saturday in Venice You Can Get FREE Bagels Flown In From NYC (Murray's Bagels)"}
{"title":"FOUND DOG - KOREATOWN AREA, PLEASE HELP!!!"}
{"title":"There's a Twilight Zone themed Art Show opening this weekend in L.A."}
{"title":"Weekly What To Do: Back to the Future Meets Korra and other TV Stars"}
{"title":"LA cops need not disclose license plate reader data, says appeals court"}
{"title":"Beautiful Fox-Girl Dog Needs A Home"}
{"title":"I love LA."}
{"title":"Dear Young Americans: L.A. Is a Terrible Place to Start Your Careers"}
{"title":"Election day is one week away! These school board races will determine what choice and opportunities are available to hundreds of thousands of LA families."}
{"title":"DTLA, good places to walk around at night/after dinner?"}
{"title":"Got a rolling stop ticket today. Is it worth trying to contest it and hope the police officer doesn't show up to court?"}
{"title":"El Segundo Police Help Rescue Elderly 80 year old Woman Run Over, Trapped Under Car in Store Parking Lot"}
{"title":"[MY YT CHANNEL] The Biggest Problem with Moving in Los Angeles"}
{"title":"Racial distribution throughout Los Angeles"}
{"title":"Help from people who have been to the Hollywood Bowl before?"}
{"title":"Breaking a Lease in city of LA over safety concerns?"}
{"title":"Amateur Explorer seeks Urban Adventurer for LA Bizarro rundown"}
{"title":"Rehearsal schedule at the Bowl this week?"}
{"title":"Affordable apartments near Venice/Culver City?"}
{"title":"What dish best represents Los Angeles? (Xpost from lafoodies)"}
{"title":"CNN: Female prison employees 'can be owned' by an inmate"}
{"title":"LA County Beach Bus starts running this week"}
{"title":"I have a lot of toys to donate! Where should I donate them?"}
{"title":"Musicians: Rehearsal Spaces in LA"}
{"title":"California Medicinal Marijuana Questions"}
{"title":"LADWP will soon start the draining process of the Silver Lake Reservoir."}
{"title":"Should I move to Los Angelas?"}
{"title":"Sheats-Goldstein House"}
{"title":"Happy New Year"}
{"title":"Anyone know of any good Tennis leagues in town?"}
{"title":"Motor4Toys this Sunday in Woodland Hills, CA"}
{"title":"Ciclavia is back this Sunday. Anyone else going?"}
{"title":"Bruce\u2019s Beach is more than just a pretty park. It\u2019s a monument to progress, tolerance, and determination."}
{"title":"Hike To LA\u2019s Abandoned Dawn Mine"}
{"title":"Anyone know where this is in Malibu specifically?"}
{"title":"What is the craziest thing you've ever witnessed in LA?"}
{"title":"Anyone know of a hardware solder technician or advanced phone repair in LA?"}
{"title":"Electric Sunset off El Madador Beach"}
{"title":"The Upperclassmen Improv Comedy Christmas Show, Sunday the 14th in Long Beach!"}
{"title":"Anyone want to go to LA Weekly's Sip and Savor event?"}
{"title":"Pet Stores/Pet Rescues in LA"}
{"title":"Anyone know where this is in Malibu?"}
{"title":"The Chuck E. Cheese's in Westlake has valet parking."}
{"title":"Adopting a dog in LA"}
{"title":"Inside Men's Central Jail in Los Angeles"}
{"title":"Looking down from the top of a skyscraper in Korea Town. [OC]"}
{"title":"Looking for something to do tonight? Come here!"}
{"title":"California drought the worst in 1,200 years, new study says | San Jose Mercury News"}
{"title":"A New 'Rock 'N' Roll Flea Market' Launches Downtown This Weekend"}
{"title":"Inherent Vice will start at the Cinerama Dome in 70mm starting December 11. (click \"see other locations for the Hollywood Arclight)."}
{"title":"Los Angeles politician Richard Alarcon showed up this afternoon to begin his jail sentence for voter fraud, but was sent home right away due to overcrowding. Instead, he has been placed under house arrest for 51 days."}
{"title":"Rail Connection to LAX Will Open By 2024 With Six Stops"}
{"title":"Avoid Hollywood/Highland area. Officer involved shooting."}
{"title":"Only 12 to 20 More Of These Storms And the Drought is Over!"}
{"title":"Where is a cool place for my company to shoot photos of a record player in LA/Hollywood/Burbank area?"}
{"title":"Suspect with weapon shot by police on hollywood and highland"}
{"title":"[Free Workout Event, Santa Monica] Beatactive Ignite - In Partnership with Charity Miles, This Bar Saves Lives, and Jaybird Sport"}
{"title":"Tonight starting between 7 and 8 PM me and my friends are having a small party and I'd like to extend an invitation to 5 redditors on here w/ one guest."}
{"title":"Photographer wanted"}
{"title":"How not to behave"}
{"title":"My friend is quitting his job to build this app, and I'm going to join him. Any interest in Chicago? Free tickets to awesome concerts - tkt.ninja"}
{"title":"LA's plan for free citywide internet moves forward"}
{"title":"My friend and I are quitting our jobs to build this app. Any interest in LA? Free tickets to awesome concerts - tkt.ninja"}
{"title":"NEED HELP finding photo in LA of a recent popular street art bu Mr. Brainwash ( hand tire sculpture 0"}
{"title":"Metro staff recommends DTLA bikeshare vendor"}
{"title":"These Aerial Photos Of Los Angeles Are The Best We've Seen"}
{"title":"Need help: finding other photos and videos of the new Mr. Brainwash art piece that was up in Silver Lake this month"}
{"title":"\"HOLLYWOOD: Apparent LAPD involved shooting. Sycamore near Lexington. Gonna be a mess for awhile over there.\" via @LAScanner"}
{"title":"Cinerama Theater in the process of turning into Pacman for Pixels premiere."}
{"title":"Can I put old/broken furniture on the street?"}
{"title":"Help Finding Thai Restaurant"}
{"title":"Furniture rental in LA?"}
{"title":"Has anyone been using Jukely in LA?"}
{"title":"Guerrilla fashion show in LA metro, watch the passengers' reactions!"}
{"title":"Day drink with us in DTLA before Saturday's meetup"}
{"title":"(HOUSING) LOOKING FOR STUDIO IN DOWNTOWN LOS ANGELES"}
{"title":"I'm interested in becoming an Uber/Lyft/Sidecar driver in LA and have a lot of questions and would really appreciate advice"}
{"title":"|LIVE NOW| WildRok blowing glass at Original Glass in Downtown Los Angeles http://mrk.tv/1S5xyXw"}
{"title":"Need Help In L.A. (please upvote)"}
{"title":"naked guy walks through the street in DTLA at night"}
{"title":"LA Unified removes attorney who argued middle schooler can consent to sex with teacher"}
{"title":"A New Yorker's perspective on LA at night - Photo Album"}
{"title":"I think I picked the wrong time of year to sell my A/C on craigslist..."}
{"title":"On a lamp post in WeHo"}
{"title":"[MY SITE] A New York photographer's view of LA at night."}
{"title":"Oops! If you're a fugitive, don't let your girlfriend post your picture on Facebook."}
{"title":"Los Angeles may become largest GMO-free area in the US"}
{"title":"Does anyone know anywhere selling GTAV for PS4 this weekend?"}
{"title":"Anyone else see four medical helicopters over Hollywood and then a little later hear the emergency broadcast tones over the radio?"}
{"title":"Metropolis II Hot Wheels Kinetic Exhibit at LACMA"}
{"title":"The Retro Charm Of Burbank's Magnolia Boulevard: A Shopping Guide"}
{"title":"L.A.'s Soho House Turns 5: Membership Rejections, Success Secrets Revealed in Oral History"}
{"title":"Going to LAX at 3pm. Need something for 5 hr flight"}
{"title":"Map: Here's The Route For Pasadena's First-Ever CicLAvia: LAist"}
{"title":"Children's clothing"}
{"title":"Anyone know the cheapest place to \"pass\" smog?"}
{"title":"Anyone ever see the street art of WRDSMTH around LA? I tracked down the artist for an exclusive interview!"}
{"title":"Late night restaurants?"}
{"title":"Hollywood settles police brutality case for $240,000 - \"Paul Gozaloff says he was only trying to check on a pal he thought had been stopped by police. Yet within minutes, he was brutally beaten and falsely arrested by five Hollywood cops, he claims in a federal lawsuit.\""}
{"title":"What's the cheapest smog test you've found in L.A.? And where?"}
{"title":"The Best Places to Get Free Coffee in LA"}
{"title":"\u201cThe Expo Line Systems Integration Testing is planned to begin in April 2015 and will likely continue through March 2016\u201d"}
{"title":"Fresh &amp; Easy CEO Buys $6MM Beachfront Home After Closing 50 Locations"}
{"title":"Sunrise this morning 3/27/15 (Sorry for the vertical video. Only way to record and not have it knocked down by wind.)"}
{"title":"Any movie theaters to watch a pay-per-view?"}
{"title":"Hey LA, any of you using a portable air conditioner? Does it work?"}
{"title":"The Hero of Color City West LA Benefit Screening at Laemmle Royal on Sat. morning, 10 am - Free with Crayon Box donation"}
{"title":"Why does the soto street gold line station always smell like vomit?"}
{"title":"Do you have to get a new license/registration when moving to permit parking district?"}
{"title":"(quick question) Does anyone know the name of the museum that is currently under construction, across the street from the MOCA?"}
{"title":"Half-Finished La Brea Mixed User Gets Redesign"}
{"title":"In blow to water conservation, court rejects San Juan Capistrano's tiered rates; says unconstitutional per Prop 218"}
{"title":"Shake Shack to Open First Location in Los Angeles in 2016"}
{"title":"L.A. actors send union strong message against enacting pay hike: Actors' Equity members fear $9 hourly minimum wage would force small theaters to limit productions or close"}
{"title":"Los Angeles daily discussion thread 04/21/15"}
{"title":"South LA Could Be Renamed SOLA in an \"image makeover\"."}
{"title":"Masochistic drivers. I feel you, man."}
{"title":"Thinking about moving from Boston -&gt; LA. What should I know?"}
{"title":"Props to the good folks at KFI for providing a such a great public service for free."}
{"title":"Caltrans made a surprisingly good PSA reminding us all to \"Be Work Zone Alert\" and you should watch it."}
{"title":"Anyone use Waze and have had to do crazy left turns???"}
{"title":"Shake Shack is coming to Los Angeles next year"}
{"title":"Moving to LA to go to school in the Fall Semester"}
{"title":"Carson City Council To Vote On Proposed NFL Stadium Project"}
{"title":"William Shatner wants $30B to solve California drought with Seattle pipeline"}
{"title":"U.S. Marshal grabs a South Gate woman\u2019s cellphone and then slamming it to the ground (video)"}
{"title":"Great Read: These People Volunteered To Be There For The Worst Moments In Someone's Life | LA Times"}
{"title":"In Los Angeles, 61 percent of the population rents and the remaining 39 percent are homeowners. And in the past year the Los Angeles real estate market has seen an 7.1 percent increase in value, with a median sales price of $545,000, according to Zillow."}
{"title":"My girlfriend and I are planning a trip to USA (west coast), we are young and from Chile, what kind of prices we should expect in hostels, food, transportation?"}
{"title":"We live in a city where thousands of people are incredibly wealthy philanthropists, thousands more are rich donors, and of thousands more who can give name recognition to any kind of charitable cause. So why do so few seem to donate to their city, when much of LA is still such a craphole?"}
{"title":"Get roundtrip fare to Catalina for free ON your birthday"}
{"title":"Catholic church tries to clean up saint's image"}
{"title":"Report: Small L.A. County cities seize large amounts in civil forfeitures"}
{"title":"Hi reddit. What are some good trade schools for a 19 year old who wants a good career?"}
{"title":"Metro staff report: making the Orange Line faster"}
{"title":"Drought shaming: California 'water vigilantes' call out their neighbors"}
{"title":"This makes LA look like we're full of assholes \ud83d\ude22"}
{"title":"Can we create a bot that moves posts to a new 'moving to LA' sub?"}
{"title":"Dodger hat &amp; LA skyline photo (x-post /r/dodgers)"}
{"title":"Free $25 worth of food - Delivered via Uber Fresh in Los Angeles with code \"FREEFRESH\""}
{"title":"Free food - Delivered via Uber Fresh in Los Angeles with code FREEFRESH"}
{"title":"Brazil comes to DTLA"}
{"title":"Can anyone recommend any beaches around Malibu that you can chill at after 9pm?"}
{"title":"MONTAJE GTA 5 PC - DUTY VS POLICE"}
{"title":"Looking for a programming mentor! (x-post)"}
{"title":"my mom found this on a buy/sell group. is this legal? or can something be done here."}
{"title":"/r/LA, can you help me choose a neighborhood to stay in for vacation?"}
{"title":"Los Angeles condensed: Grand Theft Auto 5: Los Santos map."}
{"title":"XSiteTV Los Angeles - Original Programming from local talent."}
{"title":"Indie iTV Station Needs New Live Broadcast Setup"}
{"title":"Apparently, the person that runs this twitter account REALLY hates Larchmont."}
{"title":"How much for a decent sized one bedroom is a nice area, with a pool and balcony?"}
{"title":"Hey r/losangeles, My latest album was completely inspired by LA! I'd love to know if I captured the city's sound well."}
{"title":"Studio City's New Peanut Butter Bar Makes After-School Snacks For Adults"}
{"title":"National hot sauce day party at The Parlor on melrose 1/22 5-8pm"}
{"title":"Student accuses Culver City football players of repeated sexual assault"}
{"title":"[Meet-up] Design &amp; build wearable tech in Santa Monica! (Tuesdays from 6:30 - 8:30 PM)"}
{"title":"Where are your favorite places for pickup basketball / soccer?"}
{"title":"Pantsless, down and out in Hollywood \u2014 any homeless outreach groups in LA?"}
{"title":"California drought could end with storms known as atmospheric rivers"}
{"title":"Quick 1 minute survey of your thoughts on places in LA"}
{"title":"Happy Tuesday morning! Hope you all have awesome four day weeks"}
{"title":"Fact: LA has the best Chinese food in the country"}
{"title":"Live in an Apartment, Condo, Duplex, or multi family home in Los Angeles County and have a landlord that wont fix things or is not following building code? Here is where you go, the Los Angeles Housing + Community Investment Department (HCIDLA)"}
{"title":"Los Angeles daily discussion thread 01/20/15"}
{"title":"*Advisory* LAFD crews assembled at Coroner's Office + Freeway Overpasses..."}
{"title":"Cool Places to film?"}
{"title":"Proper barber suggestions needed!"}
{"title":"Lawsuit-Happy Group Gearing Up to Fight the Academy Museum (why does LA have so many NIMBYS?)"}
{"title":"L.A.'s Only All-Gay Mariachi Band"}
{"title":"The Definitive Guide to Los Angeles Art Walks"}
{"title":"Anyone know a good place to have a yard sale or to sell my clothes? A good flea? A share even? Thanks. Central LA, East LA are best but open."}
{"title":"Fuck New Beverly Cinema"}
{"title":"Huge Redevelopment Planned For Hollywood's Famous Crossroads of the World"}
{"title":"Hollywood reunited after 50 years? STEM Academy students envision green space built atop 101 Freeway near Silverlake"}
{"title":"How long does it take to drive from Highland and Franklin to the Fig and Olive restaurant?"}
{"title":"Jeff Kinney, Dav Pilkey, Lincoln Peirce &amp; Stephan Pastis \"Drawn Together\" event on 6/20 to benefit public school libraries"}
{"title":"Golden State Pops Orchestra playing music from Back to The Future, Cocoon, Rambo and more! June 11th in Redondo Beach."}
{"title":"Unexplained Oil Balls (\"Tar Patties\") Wash Ashore In Southern California. 7 miles of coastline closed."}
{"title":"Penthouse Pet of the Year 2015 Layla Sin, FE Floods the Media, EcoSex Coming - Dr. Susan Block Show"}
{"title":"Suspect Sought In Multiple Groping Incidents On UCLA Campus"}
{"title":"Separating fact from fiction in \"San Andreas\" and how you can prepare for more realistic earthquake scenarios"}
{"title":"Boneless spare ribs"}
{"title":"Four Blocks Of Protected Bike Lanes Coming To DTLA 7th Street"}
{"title":"Koreatown has the drug hookup-with ethics !"}
{"title":"Bar 107 is closing. Last call is this Sunday."}
{"title":"Song For Lisa - Dan Gschwind Ft Lisa Amaro"}
{"title":"Not doing anything tonight? Come dance, it'll be fun!"}
{"title":"13 Year Old Minecraft Player Confesses to Swatting Police Say."}
{"title":"I have a livenation $15 cash voucher that I won't use any takers?"}
{"title":"7-mile stretch of South Bay beaches reopens after tar balls wash ashore."}
{"title":"Here in town and have a couple hours to kill tonight - any suggestions?"}
{"title":"Last meal in DTLA?"}
{"title":"How to live cheaply in L.A.?"}
{"title":"TIL that Sunset Blvd through Echo Park and Silverlake owes its route to an ostrich farm in Griffith Park."}
{"title":"1,200 Guns, 2 Tons of Ammo Found at Upscale Pacific Palisades Home"}
{"title":"Smart Folks Water Their Yards With Washing Machine Runoff, and the DWP Doesn't Like It"}
{"title":"Since prostitution went online, LE has been conducting stings all across the country. Here's what's wrong with prostitution stings..."}
{"title":"Tacos, tacos, getcho tacos here"}
{"title":"Need Help finding the right Work space"}
{"title":"If El Ni\u00f1o really happens, what would the winter be like?"}
{"title":"Free Tanner Goods Live 45 Record Giveaway on Saturday feat. Foxygen at Pickathon '14"}
{"title":"Mother Still Desperate For Answers In Death Of O.C. Woman Whose Body Was Found In April"}
{"title":"L.A. FM/AM Talk Shows... what happened to them?"}
{"title":"San Fernando man dies after beating, carjacking outside home"}
{"title":"A gang of cops surround a man in a wheelchair and shoot him with tasers and bean bags."}
{"title":"Hollywood manager convicted in $110,000 talent scam | LA Times"}
{"title":"10 Reasons Why Now Is the Best Time to Live in Los Angeles | CityWatchLA"}
{"title":"The City of Los Angeles has re-vamped their website..."}
{"title":"DO YOU HAVE TO SUE TO GET THE CITY OF L.A. TO DESIGN WITH PEDESTRIANS IN MIND?"}
{"title":"Radicalized - A revolutionary documentary about Los Angeles activists after OccupyLA premiers at the Regent July 22 (trailer, link in comments)"}
{"title":"Before, During &amp; After - Los Angeles and the 2008 Housing Crash (Infographic)"}
{"title":"Placita Olivera visit does it have parking? and is it free?"}
{"title":"Placita Olivera visit does it have parking? and is it free?"}
{"title":"Placita Olivera parking?"}
{"title":"L.A. County supervisors set to vote on minimum wage increase"}
{"title":"Permit parking - how does it work with a motorcycle? (x-post r/motola)"}
{"title":"New California Water Reductions Don't Apply to Farmers"}
{"title":"Fund Love - Not Hate ! #pizza4Equality"}
{"title":"Just moved back to LA after 3 years out of state and am looking to make some friends."}
{"title":"(Downtown LA) Roommates car got stolen from the apartment garage yesterday! Please Help!"}
{"title":"I had no idea this was a big enough problem to deserve a sign"}
{"title":"Moving to LA soon."}
{"title":"Downtown LA from the Glendale Peak in Griffith Park"}
{"title":"New(ish) to LA and have never lived thru a drought before - how will it affect our daily lives here in LA as things intensify in the coming years?"}
{"title":"The incredible shrinking megacity: How Los Angeles engineered a housing crisis"}
{"title":"Scaffolding on The May Co. Building (1908). GOOGLE rumored to be a future tenant."}
{"title":"Scaffolding up at the May Co. Building (1908). APPLE rumored to be a future tenant."}
{"title":"The spring lineup has arrived ;)"}
{"title":"A gif of L.A. traffic (x-post r/funny)"}
{"title":"Haven't been paying electric bill..."}
{"title":"A gif of L.A. traffic (x-post r/funny)"}
{"title":"What happened to Echo Park?"}
{"title":"LA has some new street signs. This is the story behind it all."}
{"title":"#TamirRice\u2019s mother is living in a shelter. Fund started 2 help support family - Please Help!"}
{"title":"Drunk Mail Man in NELA"}
{"title":"Question for all Los Angelians with incomes between 70k-80k?"}
{"title":"What do you guys think about EDC coming back to Los Angeles? Do you support it? Heard any new about it?"}
{"title":"Did anyone else just hear an explosion in Echo Park?"}
{"title":"Won't you like to get gifts every time you're bored? Use my referral code: 9653015 to get 20 bonus coins."}
{"title":"Missing 15 year old girl"}
{"title":"Twin 36-story Towers Break Ground Next to Staples Center [My Website]"}
{"title":"Councilman Gil Cedillo gives selfish people illegally driving in Lincoln Park a parking lot"}
{"title":"Rex Arms, Mobilgas, Los Angeles, 1954."}
{"title":"For Goodness\u2019 Sake, Stop Widening the 405"}
{"title":"Any scuba divers out there?"}
{"title":"Meet the Same-Sex Couple Who Made Dodger Stadium Swoon"}
{"title":"Hi Im In highschool and I made this video about skid row, there's more to come to please check it out"}
{"title":"Anyone else's dog acting strange?"}
{"title":"Took my drone to MacArthur Park"}
{"title":"Residents Complain of Smelly Water"}
{"title":"Missing Juveniles Last Seen Near Venice Middle School Found Safe"}
{"title":"Man shot, killed in Venice \"confrontation\" with LAPD officers"}
{"title":"Is there somewhere in Hollywood where I can buy an LA Galaxy Jersey?"}
{"title":"Los Angeles daily discussion thread 05/06/15"}
{"title":"An obsession with Tupac Shakur's murder killed one LA Times reporters' career"}
{"title":"Has anyone had a bad experience at Anaheim Mitsubishi?"}
{"title":"Los Angeles Drug Lawyers | (818) 781-1570 | Drug Lawyers Los Angeles CA"}
{"title":"Drought kills 12 million trees in California's national forests"}
{"title":"So will water stop being complimentary at restaurants soon?"}
{"title":"Prepping for The Big One, how much food/water should I buy?"}
{"title":"Will traffic NIMBYs ruin Waze?"}
{"title":"Panorama Asking for Chase Street Bike Lanes Removal"}
{"title":"Highland Park\u2019s gang injunctions up for debate"}
{"title":"This seems odd."}
{"title":"FYF Lineup Announced"}
{"title":"The State Water Resources Control Board approved new restrictions Tuesday that include a mandatory target for each local water agency to reduce consumption."}
{"title":"Laguna - Rescued California sea lions burned when trespasser dumps chlorine in sanctuary pool"}
{"title":"Has anyone else had ridiculous problems with the DMV?"}
{"title":"Phone scam from 202 area code"}
{"title":"I made a Spotify Playlist for FYF 2015! Check it out!"}
{"title":"What do you wish you'd known?"}
{"title":"Fatal Shooting in Front of Busy Venice Beach Bar"}
{"title":"Roger Goodell nixes L.A. team in 2015"}
{"title":"Guy flies his drone over the most expensive houses in Beverly Park, California (x-post r/veryexpensive)"}
{"title":"Catalina: so which one of you was this?"}
{"title":"Working in Burbank - where should I live?"}
{"title":"Missing puppy in West Hollywood. $5000 reward. Help bring her home. Spread the word."}
{"title":"Possibly last day at this post :("}
{"title":"Spending a day and a half in LA. What should I do?!"}
{"title":"Woman Seeks To Open A Coffeehouse Where You Can Play With Adoptable Dogs"}
{"title":"North Santa Monica Beach in the 1880s, shortly after the Southern Pacific railroad reached the town."}
{"title":"Wheel alignment shops"}
{"title":"Holiday Model Trains?"}
{"title":"Legendary karaoke bar Dimples closing its doors"}
{"title":"LAFD: When the wrong gift might mean no gift... can you help?"}
{"title":"Metro Line 344 to Palos Verdes = best line."}
{"title":"Toronto stories in Los Angeles"}
{"title":"NFL executive: No teams moving to Los Angeles for 2015 season"}
{"title":"Wu Tang's Donuts and Sandwiches ain't nothin ta fuck wit"}
{"title":"At Griffith Park, looking southwest. [x-post from /r/wallpapers]"}
{"title":"Tip LA-BITE drivers?"}
{"title":"quick survey about your experiences interacting with the LAPD"}
{"title":"Here's your chance to support a L.A. band"}
{"title":"Places in/around LA for Phillies and Eagles fans?"}
{"title":"Espn is at it again."}
{"title":"The Grove Offers Free Holiday Uber Rides, But There's a Catch"}
{"title":"Abandon your steel coffins!"}
{"title":"Authorities still unable to determine cause of Venice storage facility fire"}
{"title":"[MY SITE] Nighttime Urban Landscape - DTLA Looking West"}
{"title":"Construction Profit Management Training Dec.2"}
{"title":"L.A. Weekly's 99 Essential Restaurants, A Love Letter to Los Angeles"}
{"title":"Good road trip or GREAT road trip?"}
{"title":"Anyone gone Skydiving nearby? Some advice on prices and locations please."}
{"title":"Medi-Cal questions: Are L.A. Care \"plan partners\" system reliable?"}
{"title":"Whittier Police Officers sue, say they were forced to meet ticket and arrest quotas."}
{"title":"LOST DOG IN SYLMAR: Pomeranian, Light Brown with Gray in fur, Answers to Copper"}
{"title":"Parents: Any recommendations for preschool in Agoura, Calabasas, Westlake area?"}
{"title":"Joe's Auto Parks is running a Bottega Louie DLTA giveaway"}
{"title":"LA Metro is Ridiculously Cheap"}
{"title":"Made an LA magnet!"}
{"title":"Looking for a roommate."}
{"title":"Los Angeles and Chicago police departments have been using 'stingrays on steroids' for over a decade."}
{"title":"Women's Short Haircut Recommendation"}
{"title":"Month to month gym?"}
{"title":"Anyone like Mumford and Sons (tickets for tonight!!)"}
{"title":"FunMetroRedLineFact: The doors between subway cars are unlocked."}
{"title":"Any place in the LA area showing WWE SummerSlam this sunday?"}
{"title":"Two tickets to Mumford and Sons tonight at 7pm at the Forum"}
{"title":"Job in Marina Del Rey, where's the best/cost efficient place to live?"}
{"title":"LADWP reaches $44 million overbilling settlement"}
{"title":"Here is the Not-a-Fantasy Los Angeles Metro Rail Map of 2024"}
{"title":"Weatherman Garth Kemp resigns from KABC-TV"}
{"title":"Anyone need a FYF weekend pass? Work won't let me off, below face value $150"}
{"title":"2/9 names new news director"}
{"title":"Los Angeles! I need your assistance! I've been looking for a cardigan that is longer in length, something kind of like this. Any ideas as to where I should look for one?"}
{"title":"CICLAVIA 2015 VENICE PAPARAZZI PICS"}
{"title":"Movers"}
{"title":"Lockers by the beach? (Santa Monica/Venice area)"}
{"title":"What are some unique Los Angeles metro stations?"}
{"title":"Places in Beverly Hills to get a lottery ticket with debit?"}
{"title":"Living Recommendations For Working in Santa Fe Springs"}
{"title":"Whittier, California Fire Department in 1904."}
{"title":"stopping by Los Angeles for 2 days next week. any good sights around Santa Monica or Manhattan beach?"}
{"title":"Heard a bunch of sirens outside..."}
{"title":"Pet of the Week: Siberian Husky mix named Tony"}
{"title":"Supervision, Training Issues Cited In LAPD Shooting Of Corvette Driver"}
{"title":"The day after rain always brings the best sunsets"}
{"title":"The clouds have lifted!"}
{"title":"Best place to get a tire fixed near UCLA"}
{"title":"[My Blog] Went to LA on a 14-city film project and found out that Catalina Island is actually underrated"}
{"title":"Wanted to barter, mechanic work on a Winnebago Rialta for a weekend trip"}
{"title":"I'm really trying to savor all this good weather we've been having."}
{"title":"10 Best L.A. Art Galleries For Partying"}
{"title":"San diegan planning to visit Disney for Christmas!"}
{"title":"Hey Los Angeles go outside and check out the halo around the moon"}
{"title":"Hey /r/LosAngeles, Is it common for apartments in LA to have the living room treated as a bedroom?"}
{"title":"Car alarm going off all night"}
{"title":"Fun birthday things to do in Catalina?"}
{"title":"Los Angeles daily discussion thread 12/5/14"}
{"title":"Los Angeles weekend discussion thread 12/5/14"}
{"title":"Best place to watch MLS cup final on Sunday?"}
{"title":"Lost dog in Los Angeles: West LA / Westwood area!!!"}
{"title":"Los Angeles Weekend Guide (12/5-12/7): 5 Things To Do Around Town [HausAngeles Blog]"}
{"title":"Los Angeles Open House Guide for Sunday, December 7 [HausAngeles Blog]"}
{"title":"5 pairs of Vans for $45 at a Wharehouse Sales Yesterday! Here is the list for other Southern Ca events."}
{"title":"Camp Pendleton Marines To Conduct Training In Downtown LA"}
{"title":"\"Escape Room\" - A game experience where you solve clues in order to break out of a room"}
{"title":"Like art in downtown LA? Join the kickstarter to fund a massive (legal) mural at Santa Fe &amp; 7th!"}
{"title":"Could the porn industry actually be a model for HIV prevention?"}
{"title":"Date ideas in Pasadena"}
{"title":"Enjoy ridiculously amazing ice cream? Want more of it in the LA area? Support this new small business kickstarter!"}
{"title":"A look inside the secret LA restaurant, Secret Beef. You have to be invited and have the Chef's permission to eat there."}
{"title":"/r/LA, how would YOU fix the Metro?"}
{"title":"Photographer and suggestions for LA proposal? I am not local"}
{"title":"Bidding wars in Atwater Village, this is crazy. $3,200 for a 700sqft 2+1"}
{"title":"Hit and run -San Fernando valley -Pacoima"}
{"title":"Moving to LA guide"}
{"title":"Bears gotta pay rent too"}
{"title":"UCLA student gets rekt by star linebacker"}
{"title":"How do you get in the top 1% viewed profile on LinkedIn with more than 5000 valuable contacts?"}
{"title":"Marvel Cinematic Universe Trivia at King Harbor Brewing @ 3pm Saturday May 2nd"}
{"title":"Anyone here commute to LA from OC via the Metrolink?"}
{"title":"Los Angeles Looks Really Amazing When You're Hanging Out of a Helicopter - LaforetAIR Los Angeles from Vincent Laforet"}
{"title":"Anyone else have their catalytic converter stolen from their car recently?"}
{"title":"(XPost) Silver Alert Missing Adult Betty Toepfer - Riverside, CA"}
{"title":"More details on proposed Metro tax increase (p. 4)"}
{"title":"I Would Like to Meet My Echo Park Neighbors. Can you help?"}
{"title":"Passenger rail route from Las Vegas to Los Angeles gaining momentum"}
{"title":"Viewing the Mayweather/Pacquiao fight"}
{"title":"Silver Lake's \"Bates Motel\" was painted white, and will open to the public this Sunday as a revived art piece, before it gets bulldozed at the end of the year"}
{"title":"Video: Police Tase And Arrest Man Over His Big Beach Umbrella"}
{"title":"Don't Call Bruce Belinda: Jenners In Transition"}
{"title":"What are the coolest overlooked things to do in Los Angeles?"}
{"title":"Happy Earth Day from Skid Row"}
{"title":"How to care for a dog in LA"}
{"title":"Tips 'n tricks for an Echo Park -&gt; Venice commute?"}
{"title":"Anyone going to see age of ultron at the arclight cinema April 30?"}
{"title":"Formerly Homeless.. Need to replace Drivers License."}
{"title":"Weekly What To Do: Snack, Art and Kung-Fu Murders"}
{"title":"Any of you LA homeowners had to deal with river rock foundation?"}
{"title":"This sign can't be seen from the street. It can only be seen if you're looking outside the windows of cedars Sinai hospital. It is On the rooftop of a restaurant across the street."}
{"title":"Anyone else just get a \"flash flood warning\" on their phone?"}
{"title":"South L.A. residents protest noise, odors from drilling site near USC"}
{"title":"There is no God. DTLA's Bar 107 is closing."}
{"title":"DT timelapse stabalized (xpost from /r/ImageStabilization)"}
{"title":"Free Events all Weekend at Griffith Observatoy to Celebrate the Hubble Telescope's 25th Anniversary"}
{"title":"Platinum Consulting Rental Service: L.A. renters beware"}
{"title":"Improv classes for under $300 in Los Angeles?"}
{"title":"I'd totally watch this version of the movie. (seen on Los Feliz and Commonwealth)"}
{"title":"Douchebag vandals tag an LAPD horse with a paint pen in Venice."}
{"title":"Protest walk for Armenian genocide"}
{"title":"Muse @ The Mayan"}
{"title":"Palms shooting update. You can't even make this stuff up."}
{"title":"ATTENTION: Sunset, La Brea, Wilshire street closures tomorrow, due to Armenian Genocide March. Sunset and Western closed 6:30am-3:30pm"}
{"title":"LOS ANGELES POET SOCIETY POETRY EXPLOSION!"}
{"title":"Mary Jane went missing on 4/20 (dog)"}
{"title":"My company is hiring"}
{"title":"HELP! LOST CHIHUAHUA In the Van Nuys/ Lake Balboa area!"}
{"title":"Any girls been a Topless Maid?"}
{"title":"Waze partnership with LA may help locate and catch vehicles involved in hit and run collisions"}
{"title":"Does my turn-signal have a question mark behind it???"}
{"title":"anyone know where this is? always wondered"}
{"title":"Chargers and Raiders overhaul design for potential L.A. stadium"}
{"title":"Where I can find a downloadable PDF file that contains all of the Metro Bus Schedules in one place?"}
{"title":"Looking for an Awesome Poster Shop in the Hollywood Area"}
{"title":"Come join us at my friend's coffee shop grand opening! Stumptown Coldbrew, pool table room, and great music. Grounded on Melrose, 6715 Melrose Hollywood Friday 5/7 6pm-2am"}
{"title":"Explore LA! Adventures on two-wheels: NoHo to Griffith Park | LADOT Bike Blog"}
{"title":"Who calls Silverlake the East Side and where you're from"}
{"title":"I have an extra ticket from LAX to London. What's the best thing that I can do with it?"}
{"title":"Need help identifying this building/sculpture"}
{"title":"Lost an orange cat \u2013 Near La Cienega and Centinela, Ladera Heights area"}
{"title":"LAPD Officer, Girlfriend Indicted In Federal Court For Trying To Smuggle Mexican Citizen Into U.S. - A Los Angeles police officer and his girlfriend were indicted Wednesday by a federal grand jury on charges of attempting to smuggling a Mexican citizen into the United States."}
{"title":"Gov. Brown To Delta Tunnel Critics: \u2018Shut Up, Because You Don\u2019t Know What The Hell You\u2019re Talking About\u2019"}
{"title":"Does anyone know a vet that let's you pay in instalments for big operations or low cost vets?"}
{"title":"Cloth mending on the Eastside/Silverlake?"}
{"title":"Lost an orange cat \u2013 Near La Cienega and Centinela, Ladera Heights area"}
{"title":"Weekly What To Do: So A Robot and A Communist Are Getting Married"}
{"title":"Lost Dog, San Gabriel"}
{"title":"Los Angeles is hiring an advisor for ridesharing and robotic cars."}
{"title":"Power outage by echo park."}
{"title":"EP 4. AWKWARD DATING IN LA: GUY'S PERSPECTIVE"}
{"title":"[my podcast] This is the city. This week: The challenges of street vending from a downtown business owners perspective, and artist Daisuke Okamoto resident at The Hive Gallery and Studios talks about his work and inspiration"}
{"title":"L.A. Rents Are So High the School District Is Building Apartments for Teachers"}
{"title":"Anybody else catch the community meeting in Venice tonight? (Trainwreck.)"}
{"title":"Went to an outdoor paint and wine class. Surely it won't rain, right? This is Los Angeles."}
{"title":"Lets Go Boys!!"}
{"title":"Shout out to Tom, creator of Tom Explores Los Angeles!"}
{"title":"WE HAVE RAIN!!!"}
{"title":"Valley Carpenter Bee (male), photographed in LA [via /r/whatsthisbug]"}
{"title":"Nicest LA skyline location to pop the question?"}
{"title":"Maybe this winter is a late bloomer?"}
{"title":"DC Comics bids farewell to NYC, moves to Burbank."}
{"title":"The \u2018Masonic Fraternal Police Department\u2019 is not a real police department, police say"}
{"title":"Long Beach Is Getting Its Own 'CicLAvia': LAist"}
{"title":"Holy shit... Just heard thunder that came from LA/OC area."}
{"title":"How Los Angeles' Gardena became one of the nation's first Asian American transnational suburbs"}
{"title":"4 suspects sought in assault, robbery of elderly Pasadena man"}
{"title":"Lost dog in mt. Baldy"}
{"title":"Don't know this person, but would like to point out their amazing B&amp;W photography of Downtown"}
{"title":"Pics of yeaterday's crash: Car vs. Train. Train wins."}
{"title":"Real estate market in greater LA? What are upcomming area to keep eye on? Any undervalued or soon to be undervalued areas?"}
{"title":"Good real estate bets in greater LA? Closer to hollywood or west hollywood the better."}
{"title":"Downtown"}
{"title":"Travels in Manhattan Beach and Los Angeles - food, wine, and BEACH"}
{"title":"A Guide to Scientology's Most Ostentatious Real Estate"}
{"title":"Off-duty LAPD officer shot at in Santa Clarita"}
{"title":"Oil in LA"}
{"title":"With accidents aplenty on PCH, Malibu greenlights safety improvements"}
{"title":"Drivers who abandoned car in North 15 Freeway Fire pays more than $1000 to towing company"}
{"title":"places to learn french with young people?"}
{"title":"Tell Me What I Need to Know About the Jewelry District - Looking for a Platinum Band"}
{"title":"View from Barnsdall Art Park today."}
{"title":"Anyone have a ticket to Saturday's Cinespia (Charlie and the Chocolate Factory) they'd be willing to sell?"}
{"title":"Santa Monica, Worst postal service ever"}
{"title":"The cheesecake and meatballs at Rao's Hollywood are a must try."}
{"title":"Beautiful sky before the rain."}
{"title":"Found this in Studio City"}
{"title":"shots at topanga/roscoe, 10:20pm Sun"}
{"title":"Section of 10 freeway collapses with heavy rain"}
{"title":"Where are some good places to drink in Santa Monica?"}
{"title":"New Yorker moving to LA -- What vehicle should I get?"}
{"title":"My friend's Grandpa-in-law missing somewhere in LA. Longshot, I know.. but just getting this out there."}
{"title":"Renter here. Neighbor in non-smoking complex keeps lighting up, hallway smells and outdoor patio smoke creeps into my apartment. Apartment manager won't do anything. What are my options besides moving?"}
{"title":"It 7:30 AM and already 2 transformers have blown up in Hollywood. It's going to be a long hot day."}
{"title":"Whoever decided to shut down Grand..."}
{"title":"What drought? Some L.A. County supervisors have their cars washed 2, 3 times a week"}
{"title":"Are there businesses in LA that will let me make international phone calls?"}
{"title":"Concert on Broadway in DTLA?"}
{"title":"My orange juice cap looks like the LA Forum"}
{"title":"Officers Crash Dance Party"}
{"title":"Best Club and Bar Scene in DT LA for Large Groups?"}
{"title":"One of the longest running fantasy football leagues is in LA, going on its 38th year"}
{"title":"Recommended sushi joints?"}
{"title":"Who's ready for some softball?"}
{"title":"I know it's early, but have any of those big Halloween stores popped up yet?"}
{"title":"Mountain lion snatches pet poodle from Burbank backyard"}
{"title":"Point Vicente is pretty breathtaking."}
{"title":"The street art in LA keeps me entertained on my commute; here's my favorite, NYCHOS (2015) on La Cienega"}
{"title":"LAdvertising"}
{"title":"Apparently 'Drown Proofing' Infants Is Now A Thing?!"}
{"title":"Frogtown finally getting its first restaurants"}
{"title":"[My Event] Archer Trivia Night, July 15th in Long Beach &amp; Pasadena"}
{"title":"with showers at beaches being shut off, a person with a water truck could make some money."}
{"title":"Would you guys recommend the OC fair? Is it worth going to?"}
{"title":"Anyone here going to the Special Olympics? [Serious]"}
{"title":"Darius Rucker is comign to Irvine Meadows Amp on 8/1. Here's your chance to meet him!"}
{"title":"Latino Protesters Will Await Donald Trump with Pinatas in his Image at the Luxe Hotel"}
{"title":"Weird question but do you know anyone that I can borrow a bench from?"}
{"title":"$98 Parking ticket in Los Angeles"}
{"title":"I can't be the only one that has seen the chickengame.com car parked by the Los Feliz starbucks. After wondering what it is for the better part of a year, I finally visited the site that is crudely written on the side of the car windows. This is where it takes you."}
{"title":"The Comeback of Clifton\u2019s"}
{"title":"Top 5 Tacos to Eat in Los Angeles"}
{"title":"Azusa Fire ?"}
{"title":"Photos of a segregated class of Mexican American students poses for a group picture in the 1960s L.A. - Chicano Art &amp; Activism"}
{"title":"Photos of a segregated class of Mexican-American students posing for a class picture in 1960's LA - A story of Chicano Art &amp; Activism"}
{"title":"Any info on the good talent agencies for kids?"}
{"title":"Any gaming cafes on the westside?"}
{"title":"Fire near oilfields?"}
{"title":"Large and growing wildfire in the san gabriels (150+ acres 0% containment)"}
{"title":"New streetscape spurs downtown turnaround in Lancaster CA"}
{"title":"What are some incredible spots for music?"}
{"title":"Finding a \"Third Place\" in Los Angeles."}
{"title":"Trying to update car registration, says I have three tickets I have never seen before"}
{"title":"Who wants to go to Lissie tomorrow night?"}
{"title":"My wife and I started going on weekly dates where we only spend $20. Have any LA date ideas?"}
{"title":"Single guy looking spending 3 days in LA. Looking for nightclubs, social spots"}
{"title":"Audio Analysts: LAPD Tape on Ted Rall \"Almost Certainly Spliced\" [exclusive]"}
{"title":"L.A. County deputy handcuffs public defender, and turns into a federal case"}
{"title":"How come there are no pickles in San Bernardino!?"}
{"title":"Can you tell me where some good pick basketball games Saturday mornings in La Canada?"}
{"title":"Regular Show - The Movie @ Downtown Independent"}
{"title":"Is there room for one more fire shot? cabin fire from west hollywood..."}
{"title":"NEW CLOTHING BRAND HELP OUT PLS"}
{"title":"ELI5 how covering a reservoir in the summer with BLACK balls will help."}
{"title":"Pantages Theater 2013"}
{"title":"Free pizza &amp; soda delivered from Postmates until 10:30pm tonight"}
{"title":"Good spot for a lunch date in or around N Hollywood?"}
{"title":"2 wildfires in Simi Valley today"}
{"title":"Anyone been to Pandora Summer Crush? How is it?"}
{"title":"Paul Goldberg of Paul's TV \"The King of Big Screen\" died today."}
{"title":"Digging deep into Art Deco Long Beach lore."}
{"title":"SURPRISE! Kershaw will start on opening day."}
{"title":"Hey LA, don't be a shithead today"}
{"title":"I live in the west side, and after 1 year, am paying $50 a month for TWC. Do i have any other choices?"}
{"title":"Woman is shot while parking her car in E. Hollywood"}
{"title":"Team Banned From Finals After Supporting Breast Cancer Awareness On Jerseys"}
{"title":"Los Angeles daily discussion thread 03/03/15"}
{"title":"Need Bakery that delivers!!"}
{"title":"Sellin lobsters baby ... on the streets of Los Angeles (I could listen to this guy talk all day)"}
{"title":"L.A. man first person sentenced to prison under revenge porn law"}
{"title":"Alegr\u00eda Gourmet Food Truck Hits DTLA with Organic Menu"}
{"title":"Pasadena Tattoo Removal Clinic in Los Angeles Moves to New Location due to high demand- Health News - redOrbit"}
{"title":"Made this little clip of me biking through the city. Enjoy!"}
{"title":"What are some of your favorite thrift shops in the LA area?"}
{"title":"[editorial] Atwater Council Votes Cars Over Kids"}
{"title":"Whats on fire in the valley?"}
{"title":"Some Employment Statistics Every First-time Los Angeles Applicant Should Know"}
{"title":"Charles and the future Mrs. Manson"}
{"title":"L.A. May Legalize Its Strongest Drug: Street-Vended, Bacon-Wrapped Hot Dogs"}
{"title":"Neighborhood advice: Getting closer to SaMo without living the West Side life."}
{"title":"Bank Robbery on Rodeo."}
{"title":"Video: Valley chase suspect flees on skateboard, stopped by pickup truck driver"}
{"title":"CalTrans awards $106M towards Phase 2 of the Expo Line using funds raised through Prop1B"}
{"title":"Dr. Geek (long time Hollywood/Venice street Entertainer) has passed away"}
{"title":"Giveaway to Yuletide Cinema. Enter by 12-10!"}
{"title":"Need some help/advice"}
{"title":"Is the new UCB theater on Sunset also BYOB?"}
{"title":"15 Criminally Underrated Burgers In Los Angeles"}
{"title":"Alright people, we are 30 days out from NYE. Anyone know of awesome events to attend?"}
{"title":"Started a new youtube channel dedicated to artists, skaters, bikers and citizens of LA. This is my first video of my friends painting a wall in North Hollywood."}
{"title":"trying to hire 2 folks for IT support jobs... entry level and senior level."}
{"title":"Any vocal concert performances in the Los Angeles county tomorrow?"}
{"title":"Street Scene of Los Angeles in 1942."}
{"title":"Los Angeles running groups?"}
{"title":"New UX, faster publishing times, &amp; renewed focus on hyper-local: LATimes.com in review"}
{"title":"Seeking West LA/Brentwood area options to give one day left-over delicious chef-catered food to someone in need. (Broke UCLA students?)"}
{"title":"More than 100 UCLA patients may have been infected by \"superbug\" bacteria: Contaminated medical instruments are to blame for infecting seven patients - including two who died - with an antibiotic-resistant and potentially deadly \"superbug\" at UCLA Medical Center, hospital officials said."}
{"title":"The Big Lie: 5.6% Unemployment (Los Angeles related...more in comments) | Gallup.com"}
{"title":"1950's Westwood Blvd."}
{"title":"How the actual fuck do people afford decent sized houses in the LA/Santa Monica area?"}
{"title":"The Oakland Raiders and San Diego Chargers are planning a shared stadium in the Los Angeles area if both teams fail to get new stadium deals in their current hometowns."}
{"title":"Santa Monica Blue Bus finally adds TAP!"}
{"title":"DWP truck hits, kills 17-year-old cyclist in San Fernando Valley"}
{"title":"Here's a raw non-produced look at what it's like living in Los Angeles"}
{"title":"Thousands say they were sexually harassed riding L.A. Metro"}
{"title":"Come join LAUSD teachers Downtown Feb 26"}
{"title":"#stoptheknot - Hipsters beware LOL"}
{"title":"Hipster on Hipster Violence"}
{"title":"LAPD pulls over a school bus in Hollywood!"}
{"title":"Westboro Baptist Church to Protest Beverly Hills High School on Monday, February 23."}
{"title":"An animated rendering of the proposed Chargers/Raiders stadium in Carson"}
{"title":"Whats going on the 405? Theres like 5 helicopters around the Santa Monica area?"}
{"title":"HELP! Is anyone going to Air + Style this weekend in Pasadena??"}
{"title":"What Will Los Angeles Look Like in the Post-Immigrant Era?"}
{"title":"I moved to LA last July and started a rock/blues band. Our first acoustic performance is this Saturday 2/21 at 6PM Pacific Time. Stream it live on a pa-what-you-want basis. All money earned will be donated to LAFD."}
{"title":"Is there room in Carson California for a football stadium?"}
{"title":"WeHo Asks Metro to Call Off Pacific Design Center Megaproject"}
{"title":"LA - Cost of Childcare?"}
{"title":"I didn't know CivLAvia was that kind of party..."}
{"title":"Visited the Nazi Compound between Brentwood/Palisades! Very fun hike!"}
{"title":"\"Dance Workshop for Kids\" in South Central needs funding. I'll buy you a beer if you help support."}
{"title":"I met a Disney Princess in CICLAVIA today."}
{"title":"Moved to LA three months ago and this was the second time \"black tie\", \"vip\", and \"extra ticket\" were used in the same sentence with less than two hours notice... reasons to own a tux."}
{"title":"B-29 flying over Balboa Park today"}
{"title":"Rams' Owner Kroenke designs 2-team NFL stadium in Inglewood"}
{"title":"Upright citizens brigade"}
{"title":"Anyone else tired of all the drought fear mongering? I'll believe it when the rich people can't golf cause the grass is dead"}
{"title":"Notorious San Fernando Valley bike-riding hot prowl burglar is making friends on Quora"}
{"title":"How are 2 hour neighborhod parking enforced since they don't have meters/timers? What do they use?"}
{"title":"Hoping to move to the LA area, have a few questions first."}
{"title":"Leased solar panels can complicate \u2014 or kill \u2014 a home sale"}
{"title":"Fieldwork Quantwork is looking for Men and Women 21-49 years of age, to participate in a 10-day, online market research study. Qualified individuals will receive an incentive of $150 (Prepaid Visa Card) after they have completed the study."}
{"title":"L.A. DIY Venue The Smell Turns 17"}
{"title":"Seen on Sunset/Fountain"}
{"title":"Luise Rainer, back to back Oscar winner, has died at 104"}
{"title":"Strip Club recommendations?"}
{"title":"Saw a faint rainbow over downtown LA"}
{"title":"Metro court house traffic fines more expensive?"}
{"title":"Remember folks: even with plastic trees and leds, turn off your Christmas lights when you're out or asleep. Two fires this week in LA from decorations."}
{"title":"I guess it's okay to park someone in if you're the parking enforcement..."}
{"title":"Any tennis players interested in hitting with me? I'm 3.0 skill level and usually play around Hollywood area. Games or just hitting is cool with me."}
{"title":"Some folks have already begun chalking their Rose Parade spots. I hope it rains hard tonight"}
{"title":"What are the best bars to go to on New Year's Eve?"}
{"title":"New year's eve celebration recommendations?"}
{"title":"Anyone else just feel that in Torrance?"}
{"title":"Earthquake?"}
{"title":"Minor earthquake at 3:26:17 PM (PST) on Tuesday, December 30, 2014. The magnitude 3.9 event occurred 17 km (10 miles) S of Pt. Fermin, San Pedro, CA. The hypocentral depth is 3 km ( 2 miles)."}
{"title":"How do I go to LAX from the GreyHound station?"}
{"title":"Street Fighter 2 arcade anywhere?"}
{"title":"Wi-fi and cellular service to come to Los Angeles subway as early as this summer"}
{"title":"M3.9 near LA"}
{"title":"Smog testing prices?"}
{"title":"A man in California left a suicide note on his page. People are trying to find him. Anyone in L.A. know this person?"}
{"title":"Got rear-ended today. Cop asked for my ID?"}
{"title":"No."}
{"title":"Tupac Documentary on BBC"}
{"title":"NEW YEARS EVE OPEN BAR!!!"}
{"title":"Huge flash near Glendale?"}
{"title":"LiveLeak.com - How Homeless people Live on a rainy day, Skid Row"}
{"title":"PSA: Go Metro to 2015 New Year's Celebrations! Free rides 9 PM - 2 AM!"}
{"title":"Bank robbery in Torrance? FBI and Torrance PD try to catch 3 suspects."}
{"title":"Soooo, can anyone recommend a reasonable garage door repair service in The Valley?"}
{"title":"Mission Inn Riverside. A great day trip from LA."}
{"title":"If you are going to Grand Park for NYE stop by the quad at the Dorothy Chandler to see my installation."}
{"title":"Monterey Park is doing a New Years Eve party and night market. Who knew?"}
{"title":"Why California's Beaches are Open to Everyone | Laws That Shaped LA | Departures Columns"}
{"title":"Steve Aoki, Mayor Garcetti announce concert in downtown L.A."}
{"title":"28-story tower coming to 9th/Figueroa in DTLA [My Website]"}
{"title":"Date in Park La Brea"}
{"title":"The Uber LAX Guide + MAJOR UBER NEWS"}
{"title":"So I filmed this music video at the old LA Zoo in Griffith Park...if you enjoying getting weird you might like it."}
{"title":"Free tix to Ice House Comedy Club in Pasadena tonight"}
{"title":"PSA: Water Thieves stealing from hydrants (posing as CALTRANS - just called CALTRANS and they never heard of guys."}
{"title":"How Will You Save the Drop? [Video]"}
{"title":"10s of thousands will march in LA for the Armenian Genocide Centennial - please join us neighbors!"}
{"title":"Just heard a bang followed by power going out in Santa Monica"}
{"title":"Anything cool happening today?"}
{"title":"Things You Might Not Have Known About The Northridge Earthquake"}
{"title":"World\u2019s First Taco Bell Building May Face Demolition"}
{"title":"Crisis With LAUSD\u2019s Computer System Could End Up Costing District Millions In State Funding"}
{"title":"Officials To Ban Bulky Item Dumping At LA City Parks"}
{"title":"Wawanesa Car Insurance"}
{"title":"How safe is your hospital? A look at California ratings"}
{"title":"L.A. to require all taxis to use 'Uber-like' mobile apps by summer"}
{"title":"What's a good place in LA to celebrate my 18th birthday with family!"}
{"title":"anyone know where this was shot? (lykke li // bon iver // dance dance dance)"}
{"title":"View of LA this morning from Baldwin Hills, Culver City"}
{"title":"Those that know this place are my kind of people"}
{"title":"anyone been up to big bear this season??"}
{"title":"Downtown LA: Man with gun dead after confrontation with LAPD"}
{"title":"I was grabbing dinner at Silverlake Ramen and came back to my car like this. I wonder if this is linked to all of the tire slashing that's been happening around the neighborhood. Happened around 6:30."}
{"title":"How Much Do Americans Know About the World?"}
{"title":"Over 60 years ago Lakewood California created a controversial, but influential paradigm for suburbanization"}
{"title":"If you're awake, look towards the eastern and southern skies"}
{"title":"Supercar Sunday - Weekly Car Show/Meet in Woodland Hills"}
{"title":"Night view UCLA from 3,000 ft"}
{"title":"Boyle Heights Beat to host L.A. Council District 14 Candidates Forum"}
{"title":"Applying for jobs in cali."}
{"title":"Interested in living in LA/Cali"}
{"title":"Columbusing at It's Finest (View Park (One of the most affluent Black neighborhoods in America)/Los Angeles)."}
{"title":"Looking To Interview a Particular Kind of Resident"}
{"title":"2 Banning High students killed in possible street racing crash in Wilmington"}
{"title":"This album was released 33 year ago and launched one of LA's greatest bands."}
{"title":"My seats at the Dodger Stadium College Baseball Classic. USC vs UCLA"}
{"title":"Los Angeles daily discussion thread 03/09/15"}
{"title":"Whats the best way to get around LA without your own car?"}
{"title":"Things to do: April 7-10"}
{"title":"Flogging molly @ Hollywood palladium St. Patrick's day!!"}
{"title":"Is there a comprehensive list of major street closures in LA for 2015?"}
{"title":"My car died. I'm Looking to buy a new one. Preferably a Toyota. Anyone selling?"}
{"title":"How was Exide allowed to pollute for so long and endanger so many people?"}
{"title":"Can anyone recommend a good repair shop for an external hard drive ?"}
{"title":"Asare Smooth Mcgroove (Full video"}
{"title":"Looking for a apartment on CL can make a person depressed for strangers.."}
{"title":"Running is all about having a strong heart"}
{"title":"Machete Wielding Santa Monica Man Steals Cell Phone From Jack In The Box"}
{"title":"For commuters between Downtown LA and the Valley, we have two choices of freeways"}
{"title":"Interesting mural at 6th &amp; Ardmore in Koreatown. Anyone know what the bottle is supposed to contain?"}
{"title":"\"LA shows us that simply chasing density, without thought as to where that density is, will not do much to help and might actually make things worse\""}
{"title":"Jonathan Quick Punching Henrik Sedin, wants to fight Eddie Lack"}
{"title":"Skateboarder killed by dump truck on mountain road near Glendora"}
{"title":"Can anyone recommend a fierce product liability attorney in the LA area?"}
{"title":"Tear Down for $35M"}
{"title":"Anyone know of a bar/sports bar showing the Rosado/Steven's fight on PPV on April 4th?"}
{"title":"LAX Terminal 6. Gate 63. Any Redditors here?"}
{"title":"40 Story Tower Coming to Spring Street in DTLA"}
{"title":"More than 5,000 attend 19th Arc Walk for Independence in Downey"}
{"title":"Anyone want to trade my countdown ticket for your OMFG SD ticket?"}
{"title":"Belair Internet in Los Angeles"}
{"title":"LAPD to Equip Officers With Body Cameras"}
{"title":"Blues music in LA?"}
{"title":"Harbor Blvd, Fullerton CA late 1950s."}
{"title":"From the Vin Scully press box."}
{"title":"Is there a more direct way to get your street permitted for parking permits"}
{"title":"When will PCH be opened?"}
{"title":"Herpes Dating Los Angeles and HPV Support Group in Los Angeles, California."}
{"title":"What \"catastrophic event[s]\" happened in LA County in 1999?"}
{"title":"Possible bomb scare grounds Delta flight out of LAX"}
{"title":"Someone was stabbed near Hollywood and Highland again. What is going on there?"}
{"title":"Visiting LA :)"}
{"title":"Can anybody recommend a good defensive driving or advanced driving class for adults?"}
{"title":"Can someone stop by this house and end the occupant of it."}
{"title":"Watch How Metro Will Build Subway Stations Under Wilshire"}
{"title":"Aerial shot of the current backlog of ships waiting to come into LA/LB Harbor. (not my photo)"}
{"title":"Reminder: Buddytruk ONLY currently serves the Downtown, Valley, and Santa Monica areas."}
{"title":"New York and Jersey are expecting 3 feet of snow with blizzard conditions. Could you imagine 3 feet of snow in LA?"}
{"title":"Los Angeles daily discussion thread 01/26/15"}
{"title":"Candidates vying for Tom LaBonge's City Council seat try to break out of the pack"}
{"title":"Billboard companies buy influence by giving free (and often illegal) ad space to City Councilmembers"}
{"title":"MondayBunday (I am the Carl's Jr fairy)"}
{"title":"Say goodbye to Cadbury chocolate at stores."}
{"title":"Congrats To Miss Colombia For Winning Miss Universe :)"}
{"title":"Will Boyle Heights Be LA's Gentrification Hot Spot of 2015?"}
{"title":"10 Cool Facts About Los Angeles Transportation Most Angelenos Probably Don't Even Know [welikela.com]"}
{"title":"Visiting for e3 and looking for a place to stay near convention center"}
{"title":"Wanna attend a taping of BUZZR at the YouTube space?"}
{"title":"Free Show in Westwood this Week! Some big comics and cheap drinks. NO admission fee!"}
{"title":"Porn industry fearing \"Prohibition\" level restrictions on non-condom film."}
{"title":"How many of these 26 classic LA restaurants have you been to?"}
{"title":"Free Burritos at Chipotle today!"}
{"title":"Monthly Parking In Miracle Mile?"}
{"title":"'Completely avoidable': Vaccination could have prevented Disneyland measles outbreak"}
{"title":"Wish to finish my English degree online from a reputable school in Los Angeles. Any recommendations?"}
{"title":"Vidiots, Beloved L.A.-Area Video Store, Going Out of Business"}
{"title":"KKJZ jazz station set to move from Cal State Long Beach"}
{"title":"Free rides on New Years' Eve"}
{"title":"TIL Bloods and Crips work together on skid row, controlling what goes down on each block. What actually goes down, I have no idea."}
{"title":"I know EDM isn't everyone's cuppa, and it's an older video, but there's great shots of LA all over. How many landmarks can you spot?"}
{"title":"Acting as a tour guide for Australian friend. I've got everything set up beside restaurants- where should we go eat?"}
{"title":"Los Angeles Federal Criminal Defense Attorney | (877) 781-1570 | Federal..."}
{"title":"Is there a place to get a t-mobile simcard in LAX?"}
{"title":"Any friendly people in the LA area?"}
{"title":"Fire?"}
{"title":"Los Angeles is on fire."}
{"title":"Fire in Santa Clarita"}
{"title":"Santa Clarita Fire"}
{"title":"Does anyone know why there is smoke in the sky in Santa Clarita?"}
{"title":"Important verdict about a very important case"}
{"title":"Did anyone else in mid-city hear something blow up?"}
{"title":"This was the Laugh Factory marquee for the past week."}
{"title":"LAUSD will be laying off hundreds of educators under its new budget"}
{"title":"Anyone ever hear of Pacific Talent?"}
{"title":"Beating, Robbery Of Man Who\u2019s Deaf Outside Coffee Bean &amp; Tea Leaf Is Caught On Video"}
{"title":"How many actors do you know that make a living SOLELY from acting?"}
{"title":"Scooter Repair Shops"}
{"title":"Official Closing Date For Sunset Strip's House of Blues Announced - Aug 7 via Laist"}
{"title":"Moving to L.A. - would appreciate your advice!"}
{"title":"Any spot for traditional poutine in LA?"}
{"title":"Does anyone have suggestions for a place to study before 8am, weekdays, in the Westwood area with easy parking?"}
{"title":"The Slow Death of L.A.'s Jewish Delis"}
{"title":"So r/KXLU is now a thing. Come participate in LA's best commercial-free, independent radio station (I might be biased)"}
{"title":"Transportation Committee Questions LAPD\u2019s 8,000+ Annual Ped Tickets"}
{"title":"Are there any great jazz/bossa clubs?"}
{"title":"Anybody know what's going on between the Crenshaw and Arlington exits on the 10? I haven't seen that many cops on the road since OJ."}
{"title":"Lost my ID and need a replacement - how early should I go the DMV to be first in line without an appointment?"}
{"title":"Beverly Glen Blvd"}
{"title":"Where is this"}
{"title":"Hollywood\u2019s House of Blues Sets Official Closing Date"}
{"title":"The Oscar Contenders - Analyzed by 2 guys who haven't seen the Oscar contenders"}
{"title":"First California poppy bloom of the season. Spring has sprung."}
{"title":"[MY EVENT]Free Comedy Show in Burbank Tonight - The Corner Bar 9PM"}
{"title":"Where do you find things to do?"}
{"title":"I have a crazy plan to improve LAPD/Sheriffs etc..."}
{"title":"Have to go to LAX to catch a flight on Tuesday, using public transportation to get there and I nee help!"}
{"title":"Biking in L.A. before the rain. [Xpost form r/pics]"}
{"title":"I spent 3 years acting in a fake documentary with real people to show how terrible the LA film world can be. Did I do a good job?"}
{"title":"Power outage in Ktown?"}
{"title":"Is Gentrification Ruining Los Angeles, or Saving It? Pick A Side"}
{"title":"Alleged drunk driver causes 5-car crash in Van Nuys"}
{"title":"Best places to eat in LA?"}
{"title":"The Playpen! Ask for Amber"}
{"title":"Best Burgers?"}
{"title":"Here is the List of Production Companies in Los Angeles"}
{"title":"6th Street Viaduct Replacement Project breaks ground"}
{"title":"Sunday Night 9pm Possible fatal accident in Hollywood, Hollywood Blvd. closed in both directions from Western to Harvard."}
{"title":"LAUSD: The Buck Stops Where? And When?"}
{"title":"What in Culver City just got hit by lightning?"}
{"title":"A Craigslist Ad for Geoff Palmer's Visconti. Irony overwhelming."}
{"title":"THUNDERR!!"}
{"title":"How's the drizzle in your area?"}
{"title":"Another reason to appreciate Veteran's Day, even if you're stuck at the office"}
{"title":"Music in Los Angeles"}
{"title":"How much does an ER visit cost? Should I just drive to Tijuana and get checked out there?"}
{"title":"Does anyone know the artist of this mural?"}
{"title":"LA City Website Looks To Connect Job Seekers, Employers"}
{"title":"Is anyone else concerned over the exits on the 110?"}
{"title":"The Powerhouse in Hollywood is open again."}
{"title":"It's Veteran's day.."}
{"title":"Tired of being robbed by Time Warner Cable?"}
{"title":"[Meet-up] Excite Your Tastebuds with Chef Donie"}
{"title":"Report: Rams owner trying to buy old Hollywood Park site"}
{"title":"Gibson to open store at former Tower Records site in West Hollywood"}
{"title":"Does the yellow \"Weighs and Measures\" sticker mean you're owed the lowest price, even without a grocery club membership?"}
{"title":"Suggestions for Make-Out Point?"}
{"title":"Stuck in bad traffic? Good chance it's Thursday evening"}
{"title":"Hey LA, I need a small favor. Can any of you girls here marry me so I can get out of my country and live here?"}
{"title":"Los Angeles Sex Crime Attorney with some great tips"}
{"title":"City of Los Angeles compared to the world."}
{"title":"Know of Any Food Trucks That Use NFC Payments (Apple Pay)?"}
{"title":"We had an amazing view of the sunset last night down in hermosa beach."}
{"title":"Why People Keep Trying to Erase the Hollywood Sign From Google Maps?"}
{"title":"Purple Shirt Security Officer Assault Leads To Homelessness Discussion At Pershing Square"}
{"title":"Woman declared factually innocent after serving 17-year murder conviction"}
{"title":"Diplo Will Be an Uber Driver This Afternoon"}
{"title":"Discounted guest list for Exchange LA tonight with DJ Deniz Koyu"}
{"title":"Water Hackathon!! This weekend join people from all fields dedicate time to solve Los Angeles' water crisis"}
{"title":"Flying Humanoid Over Los Angeles Seen by Multiple Witnesses"}
{"title":"It's 3 pm.. Where can I get the largest Sangria pitcher in the weho/sunset strip/Beverly area for cheap?"}
{"title":"Any Los Angeles Star Trek fans?"}
{"title":"Troubling Signs of Minimum Wage Damage in Los Angeles"}
{"title":"People who falsely claim they have a \"service dog\""}
{"title":"Pickup ultimate frisbee?"}
{"title":"KPFK LSB Finance Committee 6:00 pm"}
{"title":"Hello, Los Angeles, looking for something free to do this Friday?"}
{"title":"FREE $25 credit for Food Delivery from South Bay Restaurants!"}
{"title":"[MY EVENT] Hello, Los Angeles, looking for something free to do this Friday (8/21)?"}
{"title":"Completely Free Delivery from tons of LA Restaurants"}
{"title":"Anybody Looking to Make a New Friend?"}
{"title":"Ticketed at a blank parking sign [Advice]"}
{"title":"Life in Los Angeles in 5 seconds - made by my friend [OC]"}
{"title":"anyone selling extra Dustin Kensrue ticket for tonight?"}
{"title":"California Courts May Let People Fight Traffic Tickets Without Paying Fine First"}
{"title":"Stolen Trek 520 bicycle (x-post /r/BikeLA)"}
{"title":"FUCK YOU"}
{"title":"Last year this subreddit encouraged me to make a book of aerial photographs...it's almost done!"}
{"title":"I don't know why I didn't think to ask you guys earlier."}
{"title":"Looking for a Park to Picnic/BBQ"}
{"title":"Is anyone else terrified of driving in LA because you feel like you can get a ticket at any moment?"}
{"title":"Noho Arts District Write Up On The Lalas, Erin Lamont, and Our Upcoming Show on June 12th!"}
{"title":"Car drives off cliff on I5 South near Castaic on June 7th 2015. 1 dead, 3 critical. Pics of accident."}
{"title":"Anyone going to see Digitalism at the El Rey tomorrow night?"}
{"title":"Sierra Madre is such a beautiful little town."}
{"title":"Always expected the unexpected in DTLA"}
{"title":"Latimes.com Op-Ed New York is a livable place -- who knew?"}
{"title":"Sunken City in San Pedro to be officially open to the public during the day under new proposal"}
{"title":"Los Angeles daily discussion thread 05/14/15"}
{"title":"Tanaka, ex-captain face indictment in L.A. County jail corruption scandal, sources say"}
{"title":"I did this once, and it worked great. Now I\u00b4m here because I would like to design an architecture project (for free) for someone in r/LosAngeles!"}
{"title":"Los Angeles County Sheriff's Department's Paul Tanaka, Tom Carey surrender to FBI"}
{"title":"Los Angeles minimum wage plan wins council panel's backing: $15 by 2020"}
{"title":"Anyone else going to the Vegan Beer and Food Fest at the Rose Bowl on Saturday?"}
{"title":"Los Angeles Sex Crime Attorney"}
{"title":"Reporting from LA, some water finally coming to us."}
{"title":"LADWP Minimum Charge - how is this \"fair\"?"}
{"title":"After the first rainfall, listen for the sirens."}
{"title":"RIP artist Chris Burden. In the 1970s, he bought commercial air time on late night TV broadcasts to show absurd performances, which included himself crawling through glass. [repost with fixed link]"}
{"title":"Los Angeles performance art pioneer and teacher Rachel Rosenthal has passed away."}
{"title":"710 Freeway reopens in East L.A. after armed man surrenders. Anyone else was stuck here this morning?"}
{"title":"Quiz: Questions from Arizona's civics test for high school students"}
{"title":"California measles outbreak expands to 51 cases; more likely"}
{"title":"Officer hit by his own patrol car; man faces attempted murder charge"}
{"title":"Encino... is a magical place."}
{"title":"I'm here at the Grand Opening of an all new Dollar Tree on Washington BLVD. It's my neighbor."}
{"title":"Chinatown emerging as hot restaurant destination"}
{"title":"Port of Los Angeles logs third busiest year in history in 2014, despite congestion problems"}
{"title":"Leasing an office in a commercial building, elevators constantly breaking down and causing me to lose customers/business/revenue. What can I do?"}
{"title":"Cheap Weekend Parking near Sunset and Wilcox, Hollywood"}
{"title":"75 degrees and I can still see snow from my backyard! (Mt Washington)"}
{"title":"Didn't know this building was such a paradise inside... or is Vanity Fair just good at telling stories?"}
{"title":"Beautiful Sky - Echo Park"}
{"title":"What's this red color outside right now?"}
{"title":"The sight from Norwalk."}
{"title":"We angelenos are the luckiest people on earth."}
{"title":"The Valley 1/29/15"}
{"title":"Free Tickets to USC Basketball Game Tonight"}
{"title":"Former UCLA Water Polo Player Accused Of Rape Strikes Plea Deal For 6 Months In Jail"}
{"title":"2nd Bryan Stow attacker pleads guilty to gun charge"}
{"title":"What a sunset! Santa Monica, 1/29/15"}
{"title":"Mayor faults LAPD over meeting featuring ex-Mexican Mafia member"}
{"title":"One of the best sunsets I've ever seen."}
{"title":"Sunset Echo Park"}
{"title":"Is it more expensive to get a tooth implant in LA, than in other cities?"}
{"title":"Suge Knight just killed a friend with his car during brawl in Compton."}
{"title":"What do you Hate/Love?"}
{"title":"Beverly Crest Estate Will Not Consider Offers Under $1 Billion"}
{"title":"Visiting Next Week"}
{"title":"Power outage"}
{"title":"70th Birthday Family Activity Help!"}
{"title":"SoCal Museums - Museums Free-for-All Day on January 31"}
{"title":"Name that actress..."}
{"title":"Car accident: Looking for witnesses, Santa Monica. Jan 29, 2015"}
{"title":"Kennedy Wilson Adds Retail Center (Valley Plaza) and Adjacent Multifamily Site in Los Angeles, CA to Portfolio"}
{"title":"Anyone ever go to Jimmy Kimmel mini outdoor concert?"}
{"title":"The world famous giant rubber duck\u2026.Los Angeles"}
{"title":"Since we are sharing sunset pictures today...."}
{"title":"Good Valentine's Day restaurant suggestions?"}
{"title":"Free ticket for the Mayhem/Watain show in Los Angeles (X-Post /r/metal)"}
{"title":"[Meetup] Ever wanted to play in a tabletop rpg?"}
{"title":"No power in Silver Lake"}
{"title":"Inland Empire Weekend Parking for Vegas Trip"}
{"title":"To The guy who drive the DeLorean north up the 405?"}
{"title":"10 Great Old-School Mexican Restaurants in L.A."}
{"title":"TIL there's a house in Silver Lake that holds the treasures of a man who traveled the Middle East in the 1920s searching for the Ark of the Covenant. He's rumored to be the inspiration for Indiana Jones. It's called the Holyland Exhibition..."}
{"title":"How to Survive an Active Shooter Attack on the Public made by LA County Sheriff's Department \u2022 /r/videos"}
{"title":"Lots of police activity in NoHo Arts District, any news on what's up?"}
{"title":"The search for the smallest home in Los Angeles currently for sale: 3 properties in various parts of L.A. Washington Mutual sins still relevant in 2015. | Dr. Housing Bubble"}
{"title":"Rate the last restaurant you ate at (in L.A.)"}
{"title":"Mt. Wilson Never Disappoints, Love the view up here"}
{"title":"Keys stuck in car, no money, stuck at gas station.... Need help"}
{"title":"My #1 spot in LA is the roof"}
{"title":"What the hell is going on in Ktown?"}
{"title":"Shooting in Koreatown"}
{"title":"Suge Knight arrested on suspicion of murder; held on $2 million bail after allegedly running over two men while shooting NWA biopic"}
{"title":"Los Angeles weekend discussion thread 01/30/15 - 02/01/15"}
{"title":"$27,452 per month to keep Santa Monica City Manager\u2019s chair warm while replacement sought - Santa Monica Mirror"}
{"title":"Hidden Hills Estate fit for Entertainment Royalty [Video] [My blog]"}
{"title":"A few things about the discussion threads for next week."}
{"title":"Alberstons closing, Costco taking over at Washington &amp; Glencoe - Yo! Venice!"}
{"title":"Best tour bus company in LA?"}
{"title":"Looking for something to do tomorrow? Check out Night on Broadway - Free event!"}
{"title":"Higher gasoline taxes would throttle economic growth"}
{"title":"Building has shifted in the last few hours. Likely to fall. Who do I contact?"}
{"title":"New to skateboarding, hunting for places to ride my board around the east side -- the catch: I'm really, really terrible."}
{"title":"Last night's sunset in Venice [OC]"}
{"title":"Suggestions for Silver Lake / Arts District"}
{"title":"I'll be in L.A. for Spring break during 3/15- 3/22. Anything I have to do while there?? I love pretty much everything so I'm down for whatever!"}
{"title":"03.07.2015 Twilight Zone Art Show Hollywood"}
{"title":"Sunday Nights- good place to drink and hang out ?"}
{"title":"Starbucks Customer Violently Attacked By Alleged Tip Jar Thief In Orange County: A 26-year-old man remained in custody Sunday for allegedly attacking a man after stealing a tip jar from a coffee shop."}
{"title":"use mine"}
{"title":"Best Street Art and Murals in LA/Hollywood"}
{"title":"This Man Was Body-Shamed, And Now Hundreds Of Women Are Throwing Him A Party in Los Angeles"}
{"title":"Going to LACMA and other art spots around the area. Let me know if you'd like to join me"}
{"title":"What are some little known facts or rumors about LA?"}
{"title":"LA's 10 best dim sum restaurants (from 2012 - this still a good list?)"}
{"title":"Accident on the 60"}
{"title":"Golfing in West LA?"}
{"title":"VIP Ospreys at Burbank Airport"}
{"title":"Santa Monica Airport's spotless record on ground fatalities"}
{"title":"In LA for one more full day. Show me a good time"}
{"title":"Our seats at the USC vs UCLA dodgertown classic baseball game were phenomenal."}
{"title":"Battle for R.I. minor league stadium gets ugly ~ 20yrs of research show NO significant economic impact from PRO sports franchises on local economy."}
{"title":"Anaheim Police Fatally Shoot Woman Accused Of Stabbing Another Woman At Laundromat"}
{"title":"Hi, L.A.! I am a college student and I really need your help. I am looking for a car works and won't get out of my budget"}
{"title":"[My Event] Special one-night-only screening of \"Charlie Victor Romeo: 3D\" March 24"}
{"title":"Anyone with a Russian Blue cat?"}
{"title":"Hi, L.A.! I need your help. I am a college student looking for a car that works and don't get out of my budget."}
{"title":"Why L.A.'s Fog Is Disappearing -- A new study says warming caused by urbanization"}
{"title":"The gentrification of Skid Row - a story that will decide the future of Los Angeles"}
{"title":"Looking for a spot nearest to KTown for photo shoot with my car like this... Hopefully scenic and quiet. Suggestions?"}
{"title":"Best hotdog in l@?"}
{"title":"Latino Heritage in Los Angeles: Murals"}
{"title":"With desert season getting under way I'd like to invite you to join us over at /r/SoCalOffroad"}
{"title":"Neighborhood frustration grows as mansionization continues in L.A."}
{"title":"Weekly What To Do: Robots, Comedians and Thrones"}
{"title":"Buddy Dog"}
{"title":"Lootcrate has given us 5 of their November boxes to offer during the Extra Life Marathon!"}
{"title":"Motion on Rail-to-River Bikeway Project up for Vote Thursday -- would connect Crenshaw/LAX rail line to multiple bus lines (including Silver Line), Blue Line, LA river, Huntington Park, Vernon via bike/pedestrian path anchored along Slauson Ave"}
{"title":"Times, ABC7, and Metro Parking Stories Are Wrong and Misleading"}
{"title":"99 Things to Eat in L.A. Before You Die (X-post r/FoodLosAngeles)"}
{"title":"Any recommendations for contractors for home remodeling? (X-post r/orangecounty)"}
{"title":"Parking issues to blame for low transit ridership in Los Angeles"}
{"title":"Car goes for a swim in Fresno; driver has no license, insurance"}
{"title":"Motorcycle Cop involved in traffic collision, La Brea between Pico and San Vicente shutdown both directions."}
{"title":"Map of Manson Family Locations (from Curbed LA)"}
{"title":"KIPP charter school group aims to double enrollment in Los Angeles"}
{"title":"Missing Person - Please Help!"}
{"title":"I'm giving away FREE flu shots in Highland Park this Saturday. Bring family and friends, get immunized."}
{"title":"USC postpones event with 'Django Unchained' actress Daniele Watts: Django Unchained\" actress Daniele Watts was set to discuss race, sexual expression and civil rights at USC on Wednesday, but school officials postponed the event a day after she was charged with lewd conduct."}
{"title":"Kevin DeLeon accused of voter fraud."}
{"title":"Housing in Los Angeles"}
{"title":"Torrance boy, 5, and sister struck while crossing street to school"}
{"title":"EZ Productions: A Day in the Life: \"Saturdays\""}
{"title":"LAPD often deploys fewer patrol officers than needed, review finds"}
{"title":"Amid California's drought, a bruising battle for cheap water"}
{"title":"YP raises the bar in L.A.'s budding tech-talent war with commuter bus"}
{"title":"[WANTED] Cinematographer for Local Rock Band Music Video"}
{"title":"Un-housed Man Living On Skid Row Builds A Home/Car Out Of Shopping Carts"}
{"title":"High School Student Reporter: LA Debates Street Vendor Restrictions"}
{"title":"I met her way back when she was a bartender at 3 Clubs on Vine going out for auditions, she looks so weird now! Renee Zellweger: LAist"}
{"title":"Ban on GMO plants advances at L.A. City Hall"}
{"title":"Kogi chef Roy Choi is doing an AMA right now"}
{"title":"Fixing the 710 gap would cost an estimated $5.4 billion, nearly as much as the westside subway project extending the Purple line from Koreatown to Westwood. Yeesh."}
{"title":"\u2018Django Unchained\u2019 Actress, Boyfriend Charged With Lewd Conduct After Car Sex Outside CBS Last Month"}
{"title":"Hilarious and Awesome LA Sports/ Life Blog"}
{"title":"I want to go to LA and I'm going to do all that I have to do to make my dream come true"}
{"title":"Massive Attack - 'Unfinished Symphony' A great music video shot along Pico Blvd. What are your favorite Music Videos set in LA?"}
{"title":"We need your help!"}
{"title":"Metrolink Hires Art Leahy As CEO, To Start April 2015"}
{"title":"Exciting 7th Street Improvement Project Coming to Downtown LA"}
{"title":"According to NASA, California has only 1 year of water supply left."}
{"title":"Is it legal to walk around wearing SWAT gear?"}
{"title":"Anywhere a foreigner can check for a 110 express lane violation?"}
{"title":"Sunday's sunset."}
{"title":"CS GO Gifts Free Skins for Counter Strike Global Offensive"}
{"title":"5:30AM, helicopter hanging over hollywood"}
{"title":"Los Angeles daily discussion thread 6/29/15"}
{"title":"It's Going To Be Muggy, Stormy And Wet This Week: LAist"}
{"title":"Totally Awesome Things To Do In LA - 6/29-7/5 Independence Day Edition!"}
{"title":"Last night's sunset from Griffith Observatory (Panorama)"}
{"title":"Compton as seen by myself a few nights ago (potato quality)"}
{"title":"Real Lives: Gang City (BBC Documentary)"}
{"title":"Weekly What To Do: Love, Augemented Reality and Horrors"}
{"title":"I'm going to be spending a week in LA beginning in a few days. What are some must see/do things that are both popular with tourist and things that only locals would know about?"}
{"title":"A star Brews right In our BackYard"}
{"title":"Costco to stop accepting AmEx cards in US from next April"}
{"title":"Los Angeles daily discussion thread 02/12/15"}
{"title":"Massive Anti-Police Message Spray-Painted Above 101 Freeway In Hollywood"}
{"title":"LA needs this! Texas: suspect in high speed chase crashes into van whose driver beats him and holds him for police"}
{"title":"The Gold Line gets closer to opening as train tests begin"}
{"title":"Do hotels thro away half-empty toilet paper rolls when they clean rooms after each guests?"}
{"title":"My company is looking for multiple client managers to join our team in the San Fernando Valley (Chatsworth)."}
{"title":"AltaSea celebrates a new street name and a $20 million matching donation"}
{"title":"Traffic Thursday"}
{"title":"High School Principal in Compton Suspected of Inappropriate, \u2018Uncomfortable\u2019 Searches of Students"}
{"title":"Santa Monica High School Coach Diagnosed With Measles as Outbreak Continues to Spread"}
{"title":"Fireplaces in LA"}
{"title":"Took a photo of LA from the mountains. Afterwards, noticed I got the giant cargo ships off Long Beach as well."}
{"title":"L.A. Business Council endorses proposed minimum-wage hike"}
{"title":"Do you know anyone who has a dangerous/dirty/interesting job in the area?"}
{"title":"Top Los Angeles business tax rate to drop every year through 2018"}
{"title":"Anything going on this weekend?"}
{"title":"HIT AND RUN on Sunset and La Cienaga"}
{"title":"I love Griffith Park at dusk"}
{"title":"For sale... Full grown female ball python"}
{"title":"Power 106 Latch remix"}
{"title":"Art Laboe, iconic disc jockey, silenced on L.A. airwaves"}
{"title":"In LA and bored right now."}
{"title":"What are your plans for this hot, sweltering, 90\u00b0F, super-sunny Valentine's Day?"}
{"title":"Is there a part of LA that has mostly families in their 30s that aren't snooty and not hipsters? Looking for places to drive around to see if we would ever move here."}
{"title":"NY Times report on the Labor dispute in the Ports."}
{"title":"Anyone wanna hang out?"}
{"title":"Is there a part of LA that has mostly families in their 30s that aren't snooty and not hipsters? Looking for places to drive around to see if we would ever move here."}
{"title":"You want change in your community? Let us know what your ideas are!"}
{"title":"Los Angeles Area GameStop Employees: Help!"}
{"title":"WeHo's Free \"Pickup Line\" Party Trolley is Expanding Service"}
{"title":"Vans of the rich and gridlocked"}
{"title":"Bruce Lee's Huge Bronze Statue Turns Into a Mecca in L.A.'s Chinatown"}
{"title":"I think this is a pretty accurate picture of what LA feels like right now..."}
{"title":"Los Angeles has Cancer"}
{"title":"Did dudes in LA really wear these thongs and really short shorts at pool parties in the late 80's/early 90's as seen here in an LA pool fight scene from Van Damme's Lionheart?"}
{"title":"In last night's debate, Gloria Molina said she was concerned over the newly added bike lanes in DTLA and advocated for more parking lots throughout DTLA."}
{"title":"A Surprisingly Simple Way to Reduce Traffic in Your City Overnight - I call it \u201cThe Swap\u201d"}
{"title":"Vacation within driving distance. A place to propose."}
{"title":"Any idea what to expect traffic wise this Valentine's Saturday?"}
{"title":"TIL Obama lived in LA and went to school at Oxy"}
{"title":"Volleyball in LA"}
{"title":"How loud is your neighborhood?"}
{"title":"Riding a bull"}
{"title":"Kid Friendly Indian Food"}
{"title":"148-room Proper to join ranks of boutique hotels in downtown L.A."}
{"title":"California geologist says quake fault lies beneath Hollywood project"}
{"title":"Hip-Hop Lawyer Julian Petty Keeps L.A.'s Top Rappers From Signing Shady Deals | LA Weekly"}
{"title":"Los Angeles daily discussion thread 7/8/15"}
{"title":"LAT: Surge in L.A. crime in first 6 months ends more than decade of declines"}
{"title":"Question about the 5 at Slauson"}
{"title":"Transit guru Jarrett Walker: overall likes L.A. Metro bus re-org - more frequent network - serve more people for less money"}
{"title":"Please help me with my class project by filling out this survey!"}
{"title":"Wanna go to the New Pornographers in Pioneertown?"}
{"title":"What's a good yuppie neighborhood in LA?"}
{"title":"anyone going to badbadnotgood@ echoplex tonight"}
{"title":"Free $25 Lyft Ride"}
{"title":"One ticket available for tonight's soldout Alkaline Trio at the Troubadour. $25."}
{"title":"What Old Transit Maps Can Teach Us About LA's Future"}
{"title":"Costliest commute? Palmdale, West Covina among the worst for LA suburbs"}
{"title":"Eleven days left to see the Space Shuttle Endeavor with both of its cargo bay doors will be open, displaying a 3,000-pound portable space lab and storage pod."}
{"title":"Eleven days left to see Space Shuttle Endeavor with both of its cargo bay doors open, displaying a 3,000-pound portable space lab and storage pod."}
{"title":"Wasn't sure where this belonged so I'll post here too...I was called by the CDC today about a survey..."}
{"title":"The Ultimate LA Guide to 'The Terminator'"}
{"title":"David Choe is giving away $100,000"}
{"title":"10 Products for Smuggling Alcohol Into Concerts"}
{"title":"Photos: The Male Beauty Pageants Of 1920s Venice"}
{"title":"California according to us Angelenos."}
{"title":"What is this purple glow through the cloud layer in los Angeles"}
{"title":"I would like to find Palestinian specific restaurants in Los Angeles. Inspiration and food examples inside."}
{"title":"Living on the bare minimum"}
{"title":"How do these photographers get onto the rooftops in downtown?"}
{"title":"DMV HELL"}
{"title":"Need Help in L.A."}
{"title":"Los Angeles \u2013 News"}
{"title":"The idiot hanging \"NO WAR\" signs on freeway over passes."}
{"title":"Just graduated college on other side of country, moved to LA, and I don't know anybody here. How to meet people here?"}
{"title":"Parking Ticket Question"}
{"title":"Gift ideas from LA?"}
{"title":"Help with my own Sub."}
{"title":"A Nyan Cat custom Audi S5. Only in K-Town."}
{"title":"Missing Deaf &amp; Austitic child - Glendale/Burbank"}
{"title":"[Question] why is there hate and dislike for certain neighborhoods?"}
{"title":"I'm looking for 10000 people with 10000 medium sized rocks and boulders to create a perfect point break in Playa del Rey on September 3rd. Who's in?"}
{"title":"No upvotes please, just a question"}
{"title":"4th Street Overpass"}
{"title":"See Slamdance Film 'Diamond Tongues' for free at Arclight Hollywood June 15th"}
{"title":"This Holiday Make Way for Los Angeles"}
{"title":"Downtown LA at sunset [OC](instagram.com/4thandspring)"}
{"title":"Online Food Delivery App Taps into L.A.\u2019s Koreatown"}
{"title":"Can anyone here confirm this?"}
{"title":"Best outlooks/scenic views in LA"}
{"title":"Feels a little early for helicopters to be circling hollywood. anyone know what's up?"}
{"title":"OK LA, I have a mission for today..."}
{"title":"Grand Central Market"}
{"title":"405 Freeway - Nighttime Rush Hour Hyperlapse with GoPro Hero4 Black"}
{"title":"R/Losangeles where is the best place to watch tonights (and future) UFC ppv card and next weeks Pacquiaos vs Algieri fight."}
{"title":"How to Get Away With Murder Los Angeles Casting Call for Law Students"}
{"title":"Santa Clarita kidnap suspect was previously booked for burglary; set free due to Prop 47"}
{"title":"USC's Shaw: Got in 'way too deep' with lie"}
{"title":"In Long Beach and Los Angeles port labor dispute, Mayor Eric Garcetti to meet with trucking company"}
{"title":"L.A. school district claimed girl consented to sex with teac"}
{"title":"L.A. school district claimed girl consented to sex with teacher"}
{"title":"Got tired of seeing downtown photos from Runyon. Here's an Eastside perspective from Turnbull Canyon in Whittier. (taken a year or so ago.)"}
{"title":"View from the top of Mt Hollywood today."}
{"title":"In regards to the drought and watering one's lawn"}
{"title":"7 L.A. Ramen Shops for Great Bowls of Tsukemen"}
{"title":"Citing Homeless Infusion, Lancaster Officials Move to Shutter Metrolink Station"}
{"title":"Best place to watch the Leonids?"}
{"title":"No you are in China Town"}
{"title":"why does looking for a gaming cafe post stay but looking for a basketball game does not?"}
{"title":"Did The Mayor Of Los Angeles Just Poison The Entire County's Water Supply?"}
{"title":"DOWNTOWN CITY LIGHTS - Photo of the city [MY Blog]"}
{"title":"FREE CONCERT THIS FRIDAY (08/21) | \"No Major, No Problem\""}
{"title":"Is this really gonna work?"}
{"title":"Relaxation Celebration this Saturday Night on DrSuzy.Tv with Jeanie Marie, Layla Blue, Rhea Litr\u00e9, &amp; more!"}
{"title":"\u201cRelaxation Day\u201d this Saturday 8/15 on DrSuzy.Tv &amp; \u201cTangentially Speaking\u201d turns onto The Bonobo Way \u2665"}
{"title":"Blackouts in Los Feliz?"}
{"title":"I went to Malibu and took some photos during the meteor shower as well!"}
{"title":"Great live/work duplex for sale, by LaBrea &amp; Olympic"}
{"title":"Clear the Shelters - Pet Adoption Prices Cut! I wish I could adopt a pet today."}
{"title":"Good record stores for Soul, Funk, R&amp;B, Hiphop/Rap?"}
{"title":"This Impressive Drone Video Is A Beautiful Love Letter To Los Angeles"}
{"title":"(626 SGV area) Where can I find figs/mangosteen/passionfruit/mameys?"}
{"title":"Inexpensive Piano Lessons"}
{"title":"Can Valet parking take metered parking?"}
{"title":"Panorama Shot Taken From Silver Lake"}
{"title":"Best time and day of the week to drive into LA to avoid traffic and headache in a Uhaul? Coming in from the Bay Area."}
{"title":"Talk me into/out of living in downtown LA"}
{"title":"T-Mobile coverage in LA?"}
{"title":"Can anyone explain why so many middle eastern people were at The Grove last night?"}
{"title":"There seems to be SO many Instagram/Vine/Youtube/Internet \"Celebrities\" living in LA who have audiences that require constant updates etc. Has living there changed cuz of this? As in what it's like when you're out in public?"}
{"title":"Models and Facetime and extra big-ass forks: My bullshit night out at the most ridiculous restaurant I've ever seen"}
{"title":"Closest place to chill by a river?"}
{"title":"Conquering The Untouched Cliffs Of Mexico"}
{"title":"Anybody know of parking garages with cool top level views?"}
{"title":"Does anybody know where I can find the Lay's \"Do us a Flavor\" chips?"}
{"title":"Venice Sunset"}
{"title":"Los Angeles daily discussion thread 12/1/14"}
{"title":"Do you believe it is a good thing or a shitty thing that the majority of the San Fernando Valley is part of the City of Los Angeles?"}
{"title":"Anyone know what they're building on Fairfax next to Tom Bergin's?"}
{"title":"Totally Awesome Things to Do in LA - 12/1-12/7"}
{"title":"Anyone do online traffic school? I've got a question."}
{"title":"Dude, who is writing the menu descriptions for the Burger King on Van Nuys?"}
{"title":"Well, now I know why there are so many sex offenders, hustlers, scam artists, rapists and murderers running around the South Bay."}
{"title":"[UPDATE] House Burglarized"}
{"title":"Good Rainy Day Movies?"}
{"title":"CicLAvia makes its first journey to South L.A. on December 7"}
{"title":"Best resources to find an apartment/loft in downtown L.A.??"}
{"title":"Comcast NBCUniversal Hosts Hackathon in Hollywood, Fun Virtual Reality Demos Emerge"}
{"title":"best crowdfunding link ever"}
{"title":"This barbershop is awesome. (Manly &amp; Sons, Echo Park)"}
{"title":"Photographers who like taking at LAX and want a different perspective: today flights are landing from the west, coming in over the water"}
{"title":"What is going on in LA? Anyone seeing these training exercises?"}
{"title":"Speed training/outdoor sprint workouts?"}
{"title":"Where can I find large pieces of quality hardwood?"}
{"title":"A Handy Guide to How Metro Will Spend $14 Billion Across LA"}
{"title":"Strongest Storm in Years Will Slam L.A. Tonight"}
{"title":"Are there shops that sell these kinds of socks? maybe Koreatown?"}
{"title":"Experiences with Medi-Cal?"}
{"title":"I just got an alert that rain has started to fall in Southern California."}
{"title":"Comedy Show!"}
{"title":"California Desert Town With Two Jails Approves Another | Bloomberg"}
{"title":"Paying a Parking Ticket Online in Los Angeles 2014 - High Tech Graphics!"}
{"title":"Metro Will Be Free On Christmas Eve And New Year's Eve"}
{"title":"I swear I've seen this dude in East L.A."}
{"title":"Family from Montebello missing for 6 days, wife is dead, 4 kids safe after chase and stand off between dad and SD police"}
{"title":"Cat &amp; Fiddle Announces Epic Final Blowout And Sale"}
{"title":"Wind Forecast for Los Angeles - zoom out for bigger pictures, kinda cool"}
{"title":"Yup, Patton Oswalt nailed it."}
{"title":"Storms a'comin"}
{"title":"looking to move to LA next year."}
{"title":"Drive safe this weekend, LA."}
{"title":"What the news is making me feel right now."}
{"title":"Los Angeles has been really pretty with all of these storms"}
{"title":"Engagement Photo Spots?"}
{"title":"Breaking News: Robin Williams Alive: Spotted At Los Angeles Movie Screening"}
{"title":"About to get evicted and desperate"}
{"title":"Sooo........where's the rain?"}
{"title":"Chabad of California to Pay for Misusing Federal Funds"}
{"title":"Almost Acoustic Christmas Night 1 Buddy"}
{"title":"..and so are posts about it"}
{"title":"Have a small room that I need the rugs cleaned in. Any suggestions?"}
{"title":"Yep, Time Warner Cable is down for all of Los Angeles right now..."}
{"title":"Is it a dangerous time to fly out of the city?"}
{"title":"Funeral for L.A. County's unclaimed dead remembers the forgotten"}
{"title":"Hands Up: Nothing like the sweet melodies of cop sirens and military helicopters to put you sleep."}
{"title":"the incompetency of our local government infuriates me"}
{"title":"Tickets for Overnight Parking? Are there meter maids working 24/7?"}
{"title":"Thanks LA! UNIQLO first come, first served giveaways at new locations."}
{"title":"Did anyone else just get awakened by that flash flood alert?"}
{"title":"Flash Flood Warning."}
{"title":"The rain is here!"}
{"title":"I pray the pump is working... I got about an inch left."}
{"title":"Did anyone else see two blue flashes in DTLA?"}
{"title":"Did anyone else lose power?"}
{"title":"Mother nature literally just said, \"What fucking drought?\""}
{"title":"Giant Blue Light?"}
{"title":"Major rock slide in Camarillo Springs"}
{"title":"Los Angeles Storm Mega-Thread"}
{"title":"Power outage in Silverlake"}
{"title":"Singing In The Rain - Singing In The Rain (Gene Kelly) [HD Widescreen]"}
{"title":"Check The New Airport in LA !"}
{"title":"Any Civil Engineers here?"}
{"title":"Anywhere I can do this near LA?"}
{"title":"Magic castle tickets for tomorrow"}
{"title":"Art Gallery Openings are no longer seen in LA Weekly. Someone has to know where they're currently being posted."}
{"title":"Play Los Angeles Building Puzzle"}
{"title":"'Street Outlaws' star jailed, charged with murder in Chatsworth street race that killed 2"}
{"title":"UCLA Students Apologize For Questions On Board Member's Jewish Background (VIDEO) [and see the MTV.com story below as well]"}
{"title":"With island dig halted, Lone Woman still a stinging mystery"}
{"title":"Fake Oscar winner roams Hollywood for a night."}
{"title":"Earthquake?"}
{"title":"Lots of craigslist sublets/subleases seem shady, anyone have experience with these?"}
{"title":"Temporary accomodation needed"}
{"title":"1 injured in 2nd-alarm fire at mattress manufacturing building in Florence"}
{"title":"LA Uber users: check your receipts for false surcharges at LAX"}
{"title":"Koreatown Fireworks"}
{"title":"(How to) Open a Medical Marijuana Dispensary (for Dummies)"}
{"title":"Big Dean's Oceanfront Cafe in Santa Monica"}
{"title":"With two LAPD officers standing behind me, I used a digital photo of my CA Driver's License on a Samsung Chromebook to buy tobacco at a 7-Eleven in Echo Park."}
{"title":"On the 101 off ramp when a lady goes crazy and starts ramming the car behind her and in front of her. Then this happens. She almost rolled over and dropped on the car behind (mine) but she didn't."}
{"title":"Any cool art/book/cool spots in Eagle Rock specifically?"}
{"title":"How the hell do I use Taptogo.com?"}
{"title":"Is it normal for LAPD to send ARMORED cars to stop a slow speed chase?"}
{"title":"For Drinking Water in Drought, California Looks Warily to Sea"}
{"title":"710 Extension: Get Metro to answer your questions"}
{"title":"free ticket to The Hush Sound show at the Troubador tonight"}
{"title":"LA WineFest Returns Next Month !!"}
{"title":"Highlights of Southeast LA (Downey, South Gate, Lynwood, etc)"}
{"title":"Who's dog is this?"}
{"title":"From a former LAPD officer."}
{"title":"Angel's Knoll, is it still closed? Is it for good?"}
{"title":"You've got 33 minutes left to bring your own cup to 7-11"}
{"title":"For downtown L.A.'s pedestrians, citations send a 'don't walk' signal"}
{"title":"Those bastards at netflix are contributing to my delinquency"}
{"title":"Sigh. So many accidents. So little time to get to where I need to be."}
{"title":"Any venues/clubs doing a Prom theme event?"}
{"title":"places in LA for divey/hipster(?) EDM-dancing?"}
{"title":"Alaska's Hickel Wants to Open His Water Taps for Parched Southland : Drought: The governor and Supervisor Kenneth Hahn, both of whom back the project, discuss the proposed 1,700-mile pipeline."}
{"title":"Happy Valentine's Day"}
{"title":"VA announces plan to help homeless vets in Los Angeles"}
{"title":"Car fire on north 101 this morning"}
{"title":"[Housing] 2 reddit gals looking for a roommate 3/1!"}
{"title":"Hollywood's Most Transformative Project, a Park Above the 101, Moves Forward"}
{"title":"LAX Firefly Car Rental"}
{"title":"Anyone remember an \"Art Crawl\" that happened downtown a year ago? Anyone have any information for this year?"}
{"title":"I am a comedian and 7-year Redditor, and now running Wednesdays at the Laugh Factory in Hollywood. First two sold out - with Iliza Schlesinger, Tommy Johnagin, Erik Griffin, Dane Cook, and Neal Brennan. The first 50 tickets to each show are free if you wanna come out."}
{"title":"11:30 on a Saturday seems like a good time for everybody to get into car collisions."}
{"title":"A Very LA Valentine's Day Card"}
{"title":"Finding love on the red line this Valentine's Day"}
{"title":"Just stay home"}
{"title":"Thousands turn out for 24-hour reopening of Hollyhock House"}
{"title":"Los Angeles is my Valentine"}
{"title":"Youth Orchestra Los Angeles (YOLA) wins over skeptics. Part of a new LAT series on the LA Phil"}
{"title":"Any special deals for tattoos in la today?"}
{"title":"Australian needs help for Valentines Day nightlife scene"}
{"title":"[MISSING PERSON] Santa Monica/Venice Area. Please call 911 with any information if known."}
{"title":"What can two single straight men do on this fine valentine's day?"}
{"title":"Prohibition Tunnels?"}
{"title":"Help! Is the Civic Center open for date night? on the top floor/roof? Someone on here said it is open to the public."}
{"title":"A girlfriend of mine posted this on Instagram. I love animals and don't want her life choices to force her two cats into a shelter :(. Anyone out there willing to give these guys a long-term, loving home?"}
{"title":"If you've got Valentine's Day plans, I suggest you leave early!"}
{"title":"New NFL Stadium in Inglewood? Anyone care?"}
{"title":"bye bye Ralphs [Whittier, CA, USA]"}
{"title":"What to Do in Koreatown, Los Angeles"}
{"title":"Possible vehicular manslaughter charge for Caitlyn Jenner."}
{"title":"We are sacrificing the right to walk (X-post /r/truereddit, long read, minor L.A. mention, but very relevant)"}
{"title":"Is L.A. in another real estate bubble?"}
{"title":"Robbers with Gun Target Arcadia Mall Parking Lot"}
{"title":"[CONCERT] Anyone going to Melody's Echo Chamber @ the El Rey?"}
{"title":"Has anyone here managed to sign up to drive with Sidecar anytime recently? Or are they toast now?"}
{"title":"Helicopter circling near the 105 and 710? (South Gate)"}
{"title":"Good date ideas this weekend?"}
{"title":"Panoramic I took of the Hollywood Reservoir on Tuesday"}
{"title":"Looking for a place near downtown to rent. Any recommendations on area?"}
{"title":"Chuck Cirino will be signing his new LP release of the movie soundtrack for Not Of This Earth at Dark Delicacies in Burbank [My Event]"}
{"title":"Fight choreography coaching session at Wushu Shaolin in Gardena"}
{"title":"Fun date activities in or around the Thousand Oaks area?"}
{"title":"[MY VIDEO] Race to the beach: LA public transit vs. Calabasas beach bus. All Angelenos should have equal access to beaches &amp; parks."}
{"title":"Long shot- looking for a friend"}
{"title":"So Garth Kemp, the weatherman from ABC 7 is apparently gone from the station with no warning"}
{"title":"Kanye West has replaced Frank Ocean to play FYF this weekend!"}
{"title":"Anyone want 2 free tickets to \"Roaring Nights Goes 80s\" tomorrow night at the LA Zoo?"}
{"title":"DA: Compton city officials have been illegally inflating their pay"}
{"title":"I saw this lost cat sign in Echo Park. WTF?"}
{"title":"Come support my cliche dreams!"}
{"title":"How early do you need to line up for the free Sunday ASSSSCAT shows?"}
{"title":"Just heard a loud boom on the Westside where I am looking for a 2bdrm for me and my 6cats and 3 dogs for 1300 a month and I how do I get out of the camera ticket I got, anyone want to adopt a dog? Where should I take my dad for gluten free traditional pasta? How do I get to Hollywood sign?"}
{"title":"How is the recent LAPD shooting not on the front page of r/LA today?"}
{"title":"Echo Park Asian grocery market property now on sale for $10 million"}
{"title":"Have You Been On A Limo Wine Tour Yet? (866) 319-LIMO"}
{"title":"People with beeping smoke detectors"}
{"title":"Homeless people in the alley behind my house in Venice doing heroin - who am I supposed to call?"}
{"title":"Man shot in head after flagging down LAPD officers in Los Feliz"}
{"title":"Beach with minimum distance from pavement to water."}
{"title":"Finally got around to uploading my pics from GRMUD 2015! Enjoy!"}
{"title":"British redditor who's new in town, what should I get up to in the next few weeks?"}
{"title":"Tickets to tonight's game..."}
{"title":"FBI Says Racist Groups Have Been Infiltrating Police Departments For Years"}
{"title":"UCLA vs CSU Long Beach and housing for international students"}
{"title":"Taking my dad to Hollywood Bowl tonight for Father's day....tips/tricks/dos/don'ts?"}
{"title":"Should I tip my Lyft driver in this situation?"}
{"title":"This is LA Metro's video"}
{"title":"Shia mashup with Rogue Fun Land Fool Fest - Pinocchio party at El Cid on July 19th. #ShiaLaBeouf #repurposed #supportpuppetryinLA"}
{"title":"L.A. to Nepal -- America\u2019s first responders, California Task Force Two follows disaster around the world."}
{"title":"Los Angeles is a place filled with very magical people..."}
{"title":"Old Red Car tunnels underneath LA"}
{"title":"Accident on Crystal Springs Drive in Griffith Park..."}
{"title":"What food and/or travel shows have done episodes in Los Angeles?"}
{"title":"Overheard In L.A.: Tragedy Strikes Runyon Canyon"}
{"title":"Perhaps I cut with the grain by mistake, but this was my \"filet mignon\" tonight"}
{"title":"Suddenly homeless. Have a question. Please help. (I dont want money)"}
{"title":"Radio, TV Voiceover Personality Gary Owens Dies At 80"}
{"title":"Downtown in the 1970s. Spot the changes."}
{"title":"Smoke on 101? Anyone know what's up?"}
{"title":"House fire in Sherman oaks"}
{"title":"Chicago Style Deep Dish Pizza at Masa at Echo Park"}
{"title":"I'm in LA on vacation and the person I'm staying with has to work late. What do"}
{"title":"Happy Valentine's day, Los Angeles"}
{"title":"Comparing the political landscapes of the OC and the IE (Not a homework question, I promise!*)"}
{"title":"$35 Per Person Date Night Deal at The Grove L.A."}
{"title":"Free Self-Guided Tours of Hollyhock House started at 4 pm today and run throughout the night until 4 pm on Saturday afternoon."}
{"title":"What's everyone doing on Valentine's?"}
{"title":"Ice Cube. Love him or hate him... He always reps LA. The visuals in this music video screams 'Los Angeles'"}
{"title":"My Brother is Missing! - Help Find Wesley"}
{"title":"A coalition of Angelenos and civil liberties groups continues to protest two aerial drones obtained by the Los Angeles Police Department, claiming the move is a step toward militarization of law enforcement and spying on citizens"}
{"title":"Get Out of the Car - A portrait of signs and abandoned spaces in LA set to the sounds of Los Angeles"}
{"title":"To those who have volunteered on Thanksgiving Day, what places do you personally recommend based on your experiences?"}
{"title":"Region's Largest Outdoor Ice Skating Rink Built in Woodland Hills"}
{"title":"Is this your cat?"}
{"title":"L.A. Mayor Calls for Mandatory Earthquake Retrofitting for Thousands of Buildings"}
{"title":"Los Angeles daily discussion thread 12/11/14"}
{"title":"Weather update: Lots of rain for LA again (1-2\"), the bulk of which will comes overnight and into Friday Morning. Expect windy situations as well as a little bit of snow in the high mountains."}
{"title":"Weather update: Lots of rain for LA again (1-2\"), the bulk of which will pour down overnight and into Friday Morning. Expect strong winds as well as a little bit of snow in the high mountains."}
{"title":"Best Cheap Massage Parlor?"}
{"title":"Can I afford to live (with roommate if necessary) in Manhattan Beach, Hermosa, or Redondo on 85k?"}
{"title":"UCLA Predicts Weather for the Next 85 Years, Says Drought Is No Big Deal"}
{"title":"Whites Earn Twice as Much as Latinos in L.A."}
{"title":"How \"Superman of Renters\" Daniel Bramzon Revolutionized L.A.'s Eviction-Defense Industry"}
{"title":"Hollywood Police Officers Delete Internal Affairs Records, Will Not Face Charges"}
{"title":"After Three Years, Atwater Villiage Farm Market Set to Close Next Week"}
{"title":"New club in Old Town Pasadena!"}
{"title":"Free rides for all on nights of Christmas Eve and New Year\u2019s Eve - Be Safe, ya'll"}
{"title":"Anyone know where I can get a tiny Christmas tree near DTLA?"}
{"title":"\"Comedian\" Bill Burr gives a tour of Los Angeles"}
{"title":"\"We are not homeless. We are houseless. Venice is our home.\" --Iraq vet &amp; former aspiring LAPD member who will petition to disarm police"}
{"title":"Farewell old friend"}
{"title":"Reddit, we need your help to help a local family through a tough time! Do what you do best and reach into your hearts!"}
{"title":"Workshops for rent near Hollywood?"}
{"title":"Silverlake Neighborhood Council member : \"All illegals should have to work like slaves...\""}
{"title":"I get out of work at 3pm tomorrow, I wanna go do something in LA by myself."}
{"title":"An Australian Tourist in LA Expresses Bewilderment over Police Shooting of Brendon Glenn"}
{"title":"Useful data, from L.A. County? There must be some mistake."}
{"title":"Asian Residents Have Longest Life Expectancy In LA County"}
{"title":"Anyone remove their \"parkway\" grass and try drought tolerant plants or trees? Do your neighbors hate you now?"}
{"title":"Marc Maron, Patron Saint of Highland Park, will be in r/IAmA on Wednesday May 13 at 2pm."}
{"title":"Where to meet other college students over the summer?"}
{"title":"After Plea for \u2018Mercy\u2019 From Federal Judge, Bryan Stow Attacker Sentenced to Additional Prison Time [Not long enough]"}
{"title":"Best bars to find one night stands?"}
{"title":"We are back to the original meme in LA"}
{"title":"Saturday, May 9, 2015: LAFD Annual Citywide 'Open Firehouse' Celebration"}
{"title":"[Radio news] Lisa May is joining the Heidi and Frank Show... Your thoughts?"}
{"title":"How the hell do you make friends in this city?!"}
{"title":"Hey r/LosAngeles - any craft beer fans here? We're throwing a huge craft beer and pizza pairing event - complete with puppies and a VIP bottle share including Dark Lord, Darkness, Bourbon County and more! 100% of proceeds donated to Pasadena Humane Society"}
{"title":"Gold Line power outage incident post evaluation"}
{"title":"1946 Downtown Los Angeles in Color"}
{"title":"LA Looks To Reduce Fares For DASH When Riders Pay TAP Or App"}
{"title":"LAUSD Building Housing So Teachers, Staff Can Live Near Work"}
{"title":"3 arrested for running a secret society's bizarre fake police force in Los Angeles"}
{"title":"Co-worker requested THE BEST / MOST SCENIC local hikes. Here's my top recommendations...but eager for more suggestions!"}
{"title":"$15 per cocktail, 20% Gratuity and a 3% WELNESS TAX???- Chaya Venice"}
{"title":"Author Mark Z. Danielewski (House of Leaves) Embarks on a 27-Part Series [x-post from /r/books]"}
{"title":"Glendale vs Valley Village vs ?"}
{"title":"9 Benefits of the California Drought"}
{"title":"Does anyone know of a good bohemian candlelit romantic type restaurant in LA?"}
{"title":"Expo and Blue lines not running into 7th street center"}
{"title":"Hollywood &amp; Vine Los Angeles, 1952."}
{"title":"Christmas Day activities"}
{"title":"Los Angeles daily discussion thread 12/10/14"}
{"title":"Things to do in LA 12/10 - 12/13"}
{"title":"[HOONIGAN] KEN BLOCK'S GYMKHANA SEVEN: WILD IN THE STREETS OF LOS ANGELES (I cannot believe how much of the city he had to himself)"}
{"title":"Any Pull Up Bars in Glendale?"}
{"title":"Remember our Halloween Party? A video has surfaced from the music zone - catch the feels again"}
{"title":"I'm the director of Lalafest, a stand-up festival in LA that brings 75 comedians from around the country here for a week for shows in West Hollywood, downtown, and Burbank. If we did free tickets for redditors, would anyone be down?"}
{"title":"[MY EVENT] I'm the director of Lalafest, a stand-up festival in LA that brings 75 comedians from around the country here for a week for shows in West Hollywood, downtown, and Burbank. If we did free tickets for redditors, would anyone be down? (Mods asked me to repost)"}
{"title":"What are good places for dates in LA"}
{"title":"best coffeeshops for working on the westside?"}
{"title":"List of Publicly Accessible Synthetic Turf Fields in Los Angeles"}
{"title":"LISA MAY formerly of KROQ's Kevin &amp; Bean show TALKS ABOUT being fired...listen here! #BOYCOTTkroq"}
{"title":"Gone in 30 Seconds: Motorcycle Thieves, Stunt Riders, and One Wild CHP Sting"}
{"title":"Every Taco Truck on York Boulevard in Highland Park Explained"}
{"title":"Safety first at Arcadia Mall's family lounge"}
{"title":"San Gabriel Peak this weekend, from Mt Wilson Toll Road"}
{"title":"ANYONE INTERESTED IN THEATER? Theres no good central source for news in LA theater, so my room mate and I made a channel. Please come support us and share us with friends who may be interested... and pm me if you want us to look into your production... thanks LA [My Blog]"}
{"title":"Los Angeles Scooter riders club"}
{"title":"Earthquake!"}
{"title":"Earthquake"}
{"title":"Earthquake!"}
{"title":"earthquake?"}
{"title":"A light earthquake occurred at 7:18:09 PM (PST) on Saturday, January 3, 2015. The magnitude 4.5 event occurred 11 km (7 miles) N of Castaic Lake dam, CA. The hypocentral depth is 9 km ( 6 miles)."}
{"title":"Anyone hear a big explosion heard in Sherman Oaks / Studio City?!"}
{"title":"Good guy driver - cuts in the driver who cut in front of me."}
{"title":"On patrol with Skid Row's 'angel cop'"}
{"title":"[My Blog] Michael Brown Graffiti in Korea Town"}
{"title":"Gunshots near Santa Monica + Bundy"}
{"title":"Need advice: Commute from UCLA to DTLA."}
{"title":"thanks for destroying the parklet on my block"}
{"title":"Anyone know anything about the 2 helicopters flashing lights into Van Nuys?"}
{"title":"most people don't realize there's an oil field behind in the Beverly Center"}
{"title":"Has LA's drought situation improved at all with the rain in recent months?"}
{"title":"Well, that was nice. Gas prices at $3.50 in my hood. Thanks, Torrance. How are you guys faring?"}
{"title":"LOST SHARPEI IN WEST HOLLYWOOD"}
{"title":"PLEASE HELP - Lost SHARPEI in WeHo"}
{"title":"What's going on tonight?"}
{"title":"What are the cheapest places for a traveller to stay at in LA?"}
{"title":"More clouds and some palm trees."}
{"title":"Loud boom in downtown"}
{"title":"What are some neat things I could do now that I have a car (for one day)?"}
{"title":"Islamic World Leader Inaugurates Woodland Hills Mosque"}
{"title":"Suspects Shot At, Ran Over by Truck During Alleged Robbery"}
{"title":"30 never-before-seen species of flies discovered in Los Angeles"}
{"title":"Send vaginal cleansing kits to folks you don't fancy"}
{"title":"At least 21 hurt, one critically, when Expo Line train hits car"}
{"title":"Segregation in LA?"}
{"title":"Good Thai food in around torrance"}
{"title":"This graffiti at Barham and N. Cahuenga is *really* disapproving of you."}
{"title":"Super Smash Bros Wii U Players?"}
{"title":"Video: Officer Breaks Window Of Moving Car To Wake Driver Passed Out In Middle Of Freeway: LAist"}
{"title":"Did one of you order this amazing Christmas decoration and type your address wrong? It just showed up at my doorstep with no return label."}
{"title":"Can someone ID this building? Looks like LA..?"}
{"title":"Commute from west side (Culver city/palms) to Burbank"}
{"title":"THE RAIN DANCE WORKED!"}
{"title":"Get a Free Ride to The Grove from Uber"}
{"title":"Options for securing transportation for three months? [x-post r/Frugal]"}
{"title":"Man Who Stabbed Lancaster Woman 50 Times, Her Young Daughter 60 Times Found Guilty in 4 Murders: DA\u2019s Office"}
{"title":"LA's favorite puppeteer dies. RIP Bob Baker."}
{"title":"Anyone have more info about last night's power outage in weho?"}
{"title":"Santa Monica Woman Arrested After Hoisting Skirt To Expose Herself In Ride-Aid"}
{"title":"American Cinematheque: Exclusive Los Angeles Engagement of Jean-Luc Godard's GOODBYE TO LANGUAGE 3-D at the Aero Theatre in Santa Monica, January 23 - 29, 2015."}
{"title":"Increased Price Tag Puts $1 Billion L.A. River Restoration Plan in Question | River Notes | Confluence"}
{"title":"Big Blue Bus Real-Time Arrival Info Coming to an App this Summer (xpost r/SantaMonica)"}
{"title":"Los Angeles packaging company thinks outside the box -- creating cardboard snowboard and surfboard"}
{"title":"LA is officially bidding for the Olympics"}
{"title":"3 killed, several injured as car plows into pedestrians in Redondo Beach"}
{"title":"Agreement reached in Malibu beach access dispute"}
{"title":"Want to see Team America in theaters? Laemmle Theaters seems to be considering a screening."}
{"title":"The Los Angeles coroner has a gift shop."}
{"title":"American Cinematheque: Remembering Mike Nichols with a Film retrospective, January 15 - 18, 2015 at the Aero Theatre in Santa Monica."}
{"title":"Illegal Off-Roading Overran Mojave Desert on Holiday Weekend -- 30,000 vehicles -- LAME"}
{"title":"The Sunken City of Los Angeles - Where Geology Meets Art"}
{"title":"American Cinematheque: Put the pedal to the metal in January at the Egyptian Theatre in Hollywood with a Golden Age of Car Chases film series from the 7th - 31st. THE MAN WITH THE GOLDEN GUN, DUEL, THE CAR and More!"}
{"title":"LA Considers Ways to Collect Rainwater"}
{"title":"What is that foghorn-sounding noise in Santa Monica right now? Anyone know?"}
{"title":"California Real Time Hit and Run Map"}
{"title":"Minecraft creator, Notch, bought a $70 million dollar mansion in the hills"}
{"title":"These are my favorite type of video games and now they're a real thing in LA"}
{"title":"Im in LA for a month, can anyone hit me up with some weed?"}
{"title":"Help! Metro Line clarifications for New Years Day."}
{"title":"Paradise Cove in Malibu now free for walk-on"}
{"title":"What year is it?!"}
{"title":"State needs 11 trillion gallons of rain to end drought. That's not that much, right? ...but seriously, does LA have a long-term plan?"}
{"title":"What are some cool NYE ideas that don't include alcohol or drugs?"}
{"title":"Large format printers in LA?"}
{"title":"Minecraft's Creator Buys The Most Expensive House In Beverly Hills"}
{"title":"Feds determine Da Vinci fire was arson"}
{"title":"Orange Line BRT Speed Improvements Caught In Inter-Agency Delays"}
{"title":"Best Way To Get To Big Bear?"}
{"title":"Please be on the lookout: there's a guy exposing himself in Los Feliz"}
{"title":"muito bom payday"}
{"title":"It's a Christmas miracle!"}
{"title":"Angel's Flight working again?"}
{"title":"Massive inferno in downtown LA is labeled as arson."}
{"title":"How often do you see Asian Male, White Female couples in Los Angeles?"}
{"title":"Trejos Tacos From Film Legend Danny Trejo Opening in Mid-City"}
{"title":"Anyone else waiting for traffic to clear up before heading home?"}
{"title":"I've searched the sub, still looking for a really awesome tattoo place!"}
{"title":"Free wifi In Griffith park"}
{"title":"Serial Tire Slasher terrorizing Silver Lake"}
{"title":"Spot's Photos of LA in the 70s Make the Skater and Punk Scenes Look Desolate and Frightening | VICE | United States"}
{"title":"Vin Scully lost his '88 World Series Championship ring while Christmas shopping"}
{"title":"San Gabriel Valley to get $3.3 billion for transportation if new tax measures are passed"}
{"title":"Do you know about 2-1-1 in Los Angeles?"}
{"title":"Burque natives...I've got Dion's Ranch!"}
{"title":"Researching Looking for Giant Whitefly Locations in Southern CA. If you own Hibiscus you probably have it!"}
{"title":"Help raise the minimum wage to $15! Call your City Councilmember today"}
{"title":"What's The Difference Between Minimum Wage and Living Wage in Los Angeles?"}
{"title":"Sunday is Yoga Day at Dodgers Stadium"}
{"title":"No new restrictions for L.A. DWP water users \u2014 for now"}
{"title":"LA River Restoration Proposal Clears Assembly Committee by a unanimous 15-0 vote"}
{"title":"Any good coffee shops / bakeries with pastries that aren't super sweet?"}
{"title":"Ticket Trap - No Left Turn on Los Feliz"}
{"title":"M*E Fine Wines: Zagat\u2019s #1 steakhouse in Los Angeles"}
{"title":"[Lost Cat]-Highland Park"}
{"title":"Does anyone have any experience with Adolescent Growth company?"}
{"title":"How do we get rid of the Australian mod that usurped r/southbayla?"}
{"title":"Just in case...."}
{"title":"So I have about 2 months to figure out where to move too and I am a fucking idiot and..."}
{"title":"Jury deadlocks in 5-year-old&amp;apos;s Halloween killing in 2010"}
{"title":"Anywhere to camp on the beach in Winter?"}
{"title":"27 Things I Love About Living in Atwater Village"}
{"title":"Moving from the westside to Koreatown in Feb - give me the scoop r/LosAngeles"}
{"title":"MEET YOUR NEW NEIGHBORS: Tour Playa Vista\u2019s New Tech Hub (Video)"}
{"title":"Check out all of these pics from last week's Disneyland Star Wars 10K run. Did you run it?"}
{"title":"Another Kinkisharyo light rail vehicle begins testing on the Green Line"}
{"title":"Weekly What To Do: Snow Days, Cookies, Puppies and Killers"}
{"title":"Eight So-Cal Community Colleges Now Offer 4-Year Bachelor Degrees"}
{"title":"Long Beach-The Perfect Urban Waterfront Playground"}
{"title":"Best Italian Food (or Mediterranean) Places in Southern California/LA?"}
{"title":"A little article about San Bernardino. Show them some love."}
{"title":"Anyone recently buy a condo/apartment in Downtown Los Angeles?"}
{"title":"Swarovski wanted to decorate the Hollywood sign with crystals."}
{"title":"Traveling to LA? Get my quick tips and brief facts about The city of Angels :)"}
{"title":"Updating Parking Permit WEHO"}
{"title":"WHATEVER comedy show at Center for the Arts Eagle Rock - Friday 1/23 - 8:30pm $5 [my show]"}
{"title":"Anti-Jewish Hate Violence in Los Angeles - EXCLUSIVE"}
{"title":"acoustic music venues in los angeles?"}
{"title":"Survey: Opinions of Big City Folk Needed! If you could take a minute to fill out this anonymous, 8-questions survey, your opinion will count towards the outcome of Buzztime's live polling game, OpinioNation!"}
{"title":"Spirng Time in LA: Poppies a bloomin'"}
{"title":"Los Angeles daily discussion thread 03/18/15"}
{"title":"DTLA Arts District Could Get Red/Purple Line Subway Stations in this proposal for subway extension"}
{"title":"Mapping LA's Most Dangerous Intersections For Pedestrians"}
{"title":"3 dead, Mercedes cut in half in Pacific Coast Highway crash"}
{"title":"Metro Expo 2 construction almost done and track testing to start soon. Testing began on Foothill Extension last October"}
{"title":"Consignment Shops in LA"}
{"title":"The initial study for the NoHo West Project (.pdf)"}
{"title":"Best climbing in LA?"}
{"title":"Wealthy victim's ID kept secret in alleged blackmail by L.A. porn actor"}
{"title":"Need help with community colleges?"}
{"title":"LAX expansion displaces Coast Guard's L.A. helicopter base"}
{"title":"Car Dodgers &amp; Still Into Track Bike T-Shirts Available for Pre-Order from FWDSET"}
{"title":"Bought an iPhone 6+ and wish you had the 6 instead? Let's trade. [legit]"}
{"title":"MY TEACHER STUDENT RELATIONSHIP LOVE STORY"}
{"title":"Man wounded in Palms outside Bamboo Room"}
{"title":"Me at the observatory being a king!!!"}
{"title":"NASA Shuttle Endeavour Los Angeles Final Flight"}
{"title":"Some people in LA can really be shitty. Been actively job hunting for the past month, and I email this guy on CL for a position"}
{"title":"An Open Letter I sent to the Mayor and Police Commissioners Regarding Drunk Driving"}
{"title":"Chalk Festival West Covina 2015 - Album on Imgur"}
{"title":"My experience in today's centennial march"}
{"title":"California Dreamer"}
{"title":"What to do on a 26th birthday for your average redditor in your fine city?"}
{"title":"Stupid question:is there any place in Los Angeles I can bet money on the Mayweather vs Pac fight? I don't want to drive to Vegas."}
{"title":"Hollywood Blvd from Vine Street, 1965."}
{"title":"Anyone know of a place that allows you to do some wood working?"}
{"title":"What are the best bars in downtown?"}
{"title":"NPR in LA?"}
{"title":"How do I do a series recording for Dodger games?"}
{"title":"Complaint about parking enforcement in Beverly Hills"}
{"title":"LAPD urges officers to be community guardians, not warriors on crime"}
{"title":"LAPD urges officers to be community guardians, not warriors on crime"}
{"title":"Illegal immigrant granted $15K scholarship and attending UCLA."}
{"title":"Stoked about coming to LA! At the same time scared!"}
{"title":"Looking for County of Los Angeles Library Card for Lynda Online Learning"}
{"title":"Alright! FYF is now here! Who's everyone excited to see?!"}
{"title":"Bonoboville News: \u201cPOLY on WRY\u201d this Saturday on DrSuzy.Tv with Ryan Wry, Wicked &amp; Nova!"}
{"title":"Sometimes this city is okay."}
{"title":"\u201cPOLY on WRY\u201d this Saturday on DrSuzy.Tv with Ryan Wry, Wicked &amp; Nova! [Discussion][AMA][Education]"}
{"title":"My Dreams"}
{"title":"Locations close to LA where you can see a lot of stars?"}
{"title":"State legislature considering gas tax increases to pay for infrastructure repairs"}
{"title":"Traffic Question: If I was to live in LA but work out near Riverside, would the traffic still be horrible?"}
{"title":"Found small black dog in Lincoln Heights area"}
{"title":"My neighbor is about to become homeless, any ideas on how to help?"}
{"title":"House of Blues, Larry Flynt's Hustler Hollywood Store to Close as Sunset Strip Goes Upscale"}
{"title":"Doll Collectors - Madame Alexander specifically"}
{"title":"Judge's ruling on Sunset/Gordon tower puts tenants in limbo"}
{"title":"Question: I work from home and don't drive much - whats the best part of town for me to live in?"}
{"title":"[Meet-up] In town for two nights"}
{"title":"Is moving to LA at 18 a good idea?"}
{"title":"Cali4nia Pass will increase from $689 to $799 Oct 20th"}
{"title":"Fun Mexican restaurant for a birthday dinner"}
{"title":"Are there any buildings downtown or in the hills that have observation decks?"}
{"title":"[Meet-up]$20 Texas Hold'em home poker game this Sunday 10/19 at 4:30pm in downtown LA"}
{"title":"What LAFD Says About Facebook's New Safety Check Feature"}
{"title":"Just got this in the mail with no return address with my license that I lost two weeks ago. Thanks, Anonymous Angeleno!"}
{"title":"6 Ways to Stay Sane in Rush-hour Traffic"}
{"title":"With 'single-stream' recycling, convenience comes at a cost"}
{"title":"looking for a (relatively last minute) birth photographer -- any help is much appreciated!"}
{"title":"Da Vinci Fire Suspect Caught Carrying Fuel On Video, Official Says"}
{"title":"What do you call the hot dogs wrapped in bacon (w/ onions, etc.) from the street vendors, Dirty Dogs or Danger Dogs?"}
{"title":"Naked man rams cars head first in southern CA parking lot"}
{"title":"Metro Officials To Start Testing Expo Line Phase II Trains Next Week between Culver City and Santa Monica!"}
{"title":"Los Angeles considering automatic rewards for information leading to finding hit-and-run drivers"}
{"title":"Transit experts suggest Metro consider improving fare structure, consolidating service, charging for parking to better serve low-income riders"}
{"title":"A notice that a Inspector from the LA housing department needs to enter apartment???"}
{"title":"[MY EVENT] Tales of the Extraordinary w/ The Library Bards! Saturday, April 11 at 8:00pm in PDT at California Institute of Abnormalarts in North Hollywood, California"}
{"title":"USC's Black House proposal raises questions about racial tensions on campus"}
{"title":"A new shelter in East LA provides sanctuary for homeless women"}
{"title":"Malibu Guest Houses Don\u2019t Count Toward Region\u2019s Affordable Housing Needs"}
{"title":"Lost: Sons stuffed bunny on Venice beach"}
{"title":"There Were Tunnels to Celebrity Homes Below the Playboy Mansion (nsfw domain)"}
{"title":"LAPD does not adequately review dash-cam footage, audit says"}
{"title":"Time Warner Cable Hates Dodgers Fans, Tells Them To Switch To Cable Companies They Can\u2019t Get"}
{"title":"Da Vinci Fire Suspect Caught Carrying Fuel On Video"}
{"title":"RIP Mai's Mexican Kitchen, the all-natural Mexican hole in the wall on Spring St."}
{"title":"Where is a safe place to throw molotov cocktails?"}
{"title":"You or anyone you know still in legal trouble because of testing positive for marijuana in California?"}
{"title":"Search Continues For 4 Robbery Suspects Accused Of Assaulting 87-Year-Old Man"}
{"title":"J. Paul Getty's grandson found dead; LAPD homicide investigating"}
{"title":"Dirty Secret: Inspectors Fail to Reveal Salmonella Outbreak at Popular Restaurant, Brent\u2019s Deli in Westlake Village -- Officials said they were under no requirement to notify the public, even as a salmonella outbreak continued to make diners ill."}
{"title":"List: Haggen Stores Opening Across California"}
{"title":"Surprise: Los Angeles Has the Worst Traffic in US, Study Shows"}
{"title":"Closing the 710 Freeway gap would take up to $5.6B"}
{"title":"Brief history of southern CA water: natural carrying capacity of the LA basin is only 250,000"}
{"title":"One of the first of seven electric street lights installed in Los Angeles at Main Street and Commercial Street in 1882. It stood 150 feet tall."}
{"title":"ffs"}
{"title":"Inside Los Angeles's Strangest Museum"}
{"title":"Metrolink train strikes a person in Pomona"}
{"title":"Buzzcut Season - Lorde (Subtitulado al Espa\u00f1ol)"}
{"title":"20 year old East LA woman described as 'recluse' has went missing since Thursday"}
{"title":"20 year old East LA woman described as 'recluse' has been missing since Thursday"}
{"title":"[meet-up] I'm hosting a weekly Game-of-Thrones/Movie/Boardgame meetup every Sunday. Join meetup.com to join us!"}
{"title":"Car Vs. Bike: Duking It Out In L.A. Traffic"}
{"title":"Cyclist beats Ferrari from Woodland Hills to SM Pier--it's not even rush hour"}
{"title":"Coast Guard Air Station Los Angeles trains with Baywatch Lifeguards off Santa Monica"}
{"title":"FOUND DOG!!! Miniature Pinscher/Chihuahua mix in Glendale (San Fernando/Los Feliz area)"}
{"title":"I turn 21 on May 5th and wanna go out that weekend! Where should we go, what should we do?"}
{"title":"Shyp Launches"}
{"title":"Controversial American journalist Abby Martin to appear on The Dr. Susan Block Show this Saturday night."}
{"title":"Nestl\u00e9 is making waves across the West Coast this week for its bottled water business. In drought-stricken California, the food and beverage conglomerate is under investigation by the U.S. Forest Service for using expired permits to use water from a national forest."}
{"title":"Griffith Park Mountain Lion (P-22) is trapped under a house in the 2700 block of Glendower"}
{"title":"And yet no mention of Lisa May? Despicable."}
{"title":"A Zip Line Over Runyon Canyon Could Happen"}
{"title":"One of the most beautiful sights in LA"}
{"title":"Im driving from Los Angeles to Phoenix, Arizona. What places are good to check out on the way?"}
{"title":"Rolston Rye's Guide To LA"}
{"title":"Fuck this area in particular"}
{"title":"Places To Film in Los Angeles You Shouldn't Miss"}
{"title":"Chef Chris Cormier finds life-changing work at L.A. Mission"}
{"title":"Pico Rivera Walmart closing for 6 months due to \"plumbing\" problems employees to lose jobs"}
{"title":"Worst principal ever? Pretty close! *Special thanks to LAUSD for growing all the lemons (like this piece of work)."}
{"title":"L.A. Nature Map, the Natural History Museum Project to Identify Southern California Wildlife."}
{"title":"When Is It Safe To Drive After Drinking"}
{"title":"Looking for plus sized prom dress stores. Not vastly plus sized, just slightly."}
{"title":"Watching TV Fights, Nicholson's, Sunset Boulevard, Hollywood, 1949 by Richard Crump Miller."}
{"title":"Famed P-22 mountain lion stuck under house, won't come out"}
{"title":"For Los Angelers: Top 7 Apps For Your Business"}
{"title":"Top 7 Mobile Apps for Entrepreneurs"}
{"title":"LAFD Battles Flames in UCLA Dentistry Building"}
{"title":"Renting a car as an 18 year old? Or other options?"}
{"title":"Google Now just posted this card about a string of burglaries on the area. First time I've seen this. Extra points for \"this is not an April fools joke.\""}
{"title":"Hawthorne MAYOR refuses to pay rent at his new apartment after being kicked out of previous property for refusing to pay rent. Why?"}
{"title":"Remember that lonely as fuck dude with the flyers?"}
{"title":"What kinda mischief can I get into in LA right now?"}
{"title":"Can anyone reccomend a store in Torrance-ish that sells Ben Nye Creme Colors?"}
{"title":"LAPD: Busboy Sexually Assaulted Transgender Woman At Popular Hollywood Sports Bar (Big Wangs)"}
{"title":"Hey L.A. need some moving advice for a student!"}
{"title":"Should i invest more in this program ? LA"}
{"title":"Los Angeles daily discussion thread 04/02/15"}
{"title":"IMAX to debut laser projection system in the US with 'Furious 7' at the TCL Chinese Theatre in LA."}
{"title":"A legal challenge to LA's \"72 hour parking\" rule?"}
{"title":"Decomposing Body Found In The Hollywood Hills."}
{"title":"Los Angeles Maritime Lawyer | 1-800-752-1503 | Maritime Attorney Los Ang..."}
{"title":"College student returns from Mexico, disappears"}
{"title":"Visiting LA for the first time. Advice please."}
{"title":"Los Angeles Housing Now More Screwed Up Than San Francisco"}
{"title":"AN ARMY OF CAT LOVERS IS FEEDING L.A.'S FERAL FELINES. SHOULD THEY BE? (X-post /r/Cats)"}
{"title":"Missing Woman - Last Seen Near MacArthur Park"}
{"title":"Should a 710 Freeway tunnel allow trucks, and will it be safe?"}
{"title":"Help with Non-profits"}
{"title":"L.A. Approves Trying Out New Parking Signs"}
{"title":"FAA Debuts Helicopter Noise Reporting System"}
{"title":"soo this video was shot in LA. Funny interview with a CEO asking kids questions. gets some hilarious answers."}
{"title":"Need a decent quality picture of an ugly house in the San Fernando Valley. Anyone got any?"}
{"title":"San Bernadino County Sheriff has used Stingray over 300 times with no warrant"}
{"title":"Los Angeles daily discussion thread 05/25/15"}
{"title":"[Podcast] A Master Architect in Los Angeles: Bertram Grosvenor Goodhue's Central Library and Caltech Campus"}
{"title":"PennySaver shuts down; hundreds lose their jobs"}
{"title":"Anyone just feel a little earthquake?"}
{"title":"Giulia Cors\u00ec \u2022 for The Nex7 Project"}
{"title":"Philosopher's Stone lost on Hogwarts Express (amtrak) signed by J.K.R &amp; whole cast of 1st film (x-post to r/harrypotter &amp; r/orangecounty)"}
{"title":"Sailing Today?"}
{"title":"Things to do under 21 friendly"}
{"title":"Low flying military plane over Venice/Santa Monica?"}
{"title":"i seen the devil in the LA River! a demon lifing in los angeles river"}
{"title":"LA bachelor party"}
{"title":"Researcher Looking for Giant Whitefly Locations in Southern CA. If you own Hibiscus you probably have it!"}
{"title":"Expansion L.A. soccer team plans new stadium on Sports Arena site"}
{"title":"Earthquake?"}
{"title":"Preliminary magnitude 2.6 earthquake hits east of Malibu, California."}
{"title":"Two more kittens need homes."}
{"title":"So, I've been kicking around the idea of starting a blog based off of stops near the metro stops. Here's my first write up based off the Pershing Square stop."}
{"title":"[HIRING] an entry/ intermediate, tech support/customer service in OC/cypress(~$15-16)"}
{"title":"What is a Legal Separation?"}
{"title":"Best Orthopedic surgeons in Los Angeles"}
{"title":"Los Angeles daily discussion thread 05/27/15"}
{"title":"largest selection of bedroom furniture for babies, kids, and teens in Orange County, Los Angeles, and Riverside."}
{"title":"yify #theGrove #tesla #car FULL MOVIES ONLINE"}
{"title":"Funeral Fare - Venice Beach"}
{"title":"Where's a good place to live near UCLA?"}
{"title":"Labor leaders who fought for minimum wage increase now want exemptions from minimum wage"}
{"title":"Tire art in the Arts District"}
{"title":"\u200bNevada joins the high-speed rail bandwagon with plans for Vegas, SoCal link"}
{"title":"Got a ticket, but had to move the next week"}
{"title":"When people ask why Angelenos drive everywhere"}
{"title":"LAUSD board members have proposed creating a new marketing campaign to attract students as enrollment continues to decline"}
{"title":"U2's longtime tour manager Dennis Sheehan dies in LA hotel room"}
{"title":"Does anyone want free drone footage of anything over the next few days?"}
{"title":"I'd be happy with a creative greeting card/ :)"}
{"title":"Best Restaurants in Los Angeles"}
{"title":"[X-post bikeLA] Save our southern sidewalk over the Glendale Hyperion Bridge."}
{"title":"Best way to get from LAX Airport to the DoubleTree by Hilton Hotel Los Angeles Downtown?"}
{"title":"My commercial real estate company is hiring a bookkeeper/office admin by The Grove &amp; La Brea. I'd love for them to be a redditor!"}
{"title":"Los Angeles DUI Attorney"}
{"title":"Need help identifying a uniform from a local DWP, AT&amp;T or something similar. Littering and driving like an ass."}
{"title":"Apartment Complexes in LA with lenient credit check/income requirements? ANYWHERE in LA or surrounding!"}
{"title":"Los Angeles daily discussion thread. 11/26/14"}
{"title":"Thanksgiving Megathread. All Thanksgiving related posts in here, please."}
{"title":"Street Scene of Los Angeles in 1942."}
{"title":"130 Arrested During Ferguson Protests In Downtown LA"}
{"title":"Guy stands on cop car and takes selfie during Los Angeles protests"}
{"title":"Los Angeles Making Quiet Bid for 2024 Olympics"}
{"title":"Cheapest Hotel in LA?"}
{"title":"Protesters Halt Traffic On 101 Fwy In Downtown LA Again"}
{"title":"PSA: There are more drunk driving arrests over the Thanksgiving holidays than any other time of year. Please don't drink and drive."}
{"title":"What is the fastest internet service provider in the Beverly Hills area?"}
{"title":"Possible Card Skimmer on Wells Fargo ATM @ Crescent Heights and Sunset"}
{"title":"Possible Card Skimmer on Wells Fargo ATM @ Crescent Heights and Sunset"}
{"title":"moving to LA"}
{"title":"Are you a foodie in LA? We need your help!"}
{"title":"Japanese firm plans to build light-rail cars in L.A. area after all"}
{"title":"Japanese firm Kinkishario International plans to build light-rail cars in L.A. area after all"}
{"title":"Japanese firm Kinkishario International plans to build light-rail cars in L.A. County area after all"}
{"title":"Japanese firm Kinkisharyo International plans to build light-rail cars in L.A. area after all"}
{"title":"Why do traffic jams sometimes form for no reason? (Article)"}
{"title":"What store should I go to for the best pie?"}
{"title":"Protesters try to bring down a fence to block the freway."}
{"title":"Whistler's Mother to Make Visit to U.S."}
{"title":"Is downtown LA going to be safe tonight?"}
{"title":"Fear the Walking Dead LA Film Locations"}
{"title":"Anyone see a car fire near downtown on freeway around 11:30pm-12 on Friday? 8/28"}
{"title":"Power Outage! 8/29/15"}
{"title":"Today I came across a homeless family outside of costco in burbank. Are there any outreach programs that I can donate to to help people like this?"}
{"title":"If you're looking to rent a place with rats, well then 1753 Winona is for you."}
{"title":"Shrine Auditorium Seating Question"}
{"title":"URGENT Found a Kitten on the side of the road, needs a Foster/home!"}
{"title":"What time is the Santa Monica Pier arcades open until?"}
{"title":"Day trip to Ventura county? Suggestions / must sees?"}
{"title":"What is going on with LA radio? Shotgun Tom off the air, BigBoy at 92.3, KIIS-FM out of the top 3."}
{"title":"Red light camera tickets, can you guys post your updates?"}
{"title":"How much does a \"Speed Stick\" cost in L.A.?"}
{"title":"They're all tuckered out..."}
{"title":"Need help with Grad School Project...Need at least 5 people who feel they are overweight to fill out this 1.3 minute survey"}
{"title":"You guys wanna serve the community a bit. Try serve24 at DreamCenterLA"}
{"title":"The Most Powerful Municipal Utility In the United States"}
{"title":"Kanye West to perform 808s &amp; Heartbreak in full at Hollywood Bowl"}
{"title":"Question about Huntington Park."}
{"title":"Montebello Police Asking Public To Be On Lookout For Runaway Teen Who Has Autism"}
{"title":"Wifi Problem (was told it might be a city wide issue)"}
{"title":"Tourist needing help!"}
{"title":"Will parking meters be enforced during Memorial Day?"}
{"title":"Nokia theatre? How are the seats at the loge... is worth paying 50 more for ochestra?"}
{"title":"I'm going as a Waffen-SS Officer for Halloween, what kind of reactions should I expect?"}
{"title":"Free Ticket to Neutral Milk Hotel in San Pedro this Wednesday, May 27"}
{"title":"$6 burning a hole in my pocket and I'm a healthy eater. Wtf can I buy to eat rn!?!"}
{"title":"Things to do tonight?"}
{"title":"Went on a hike to Griffith Park and took this picture."}
{"title":"What do you think about the LA Times? Is it worth reading? Is it worth subscribing to?"}
{"title":"There were no traffic-related fatalities on Los Angeles County highways during the first 36 hours of this year\u2019s Memorial Day holiday weekend, the California Highway Patrol reported Sunday."}
{"title":"Anyone here volunteer for an organization and need more volunteers for the summer?"}
{"title":"Where can I send my folks to buy papel picado?"}
{"title":"Luggage service?"}
{"title":"West LA churches with a sanctuary/chapel open to the public in the evening?"}
{"title":"One upside of LA traffic is that google thinks I meet my walking goals"}
{"title":"Best places to run?"}
{"title":"Why a huge Los Angeles crowd turned out for Bernie Sanders"}
{"title":"I have a friend visiting first time to LA, what does she need to see/do??"}
{"title":"Millions of Shade Balls Protecting Los Angeles Reservoir"}
{"title":"Need an Ezhibits Pass to SIGGRAPH. Please help me out."}
{"title":"Looking for advice to mitigate traffic violation"}
{"title":"Saw these amazing sculptures in Highland Park"}
{"title":"View toward the northwest corner of Hollywood and Vine, looking over an ornate two-lamp streetlight. Note traffic signal at lower right shows \"GO\" even though the intersection is full of cross-traffic, 1947."}
{"title":"Strategy for finding housing"}
{"title":"Ten Not Tourist Things To Do In LA On A Sunday"}
{"title":"#On_Pico"}
{"title":"I walked all of Pico Blvd with a camera [OC]"}
{"title":"What steakhouse should I go to?"}
{"title":"Anyone where this costume shop is? Soz vague"}
{"title":"Belatedly ... Michelle Obama\u200b's empowering speech at the Special Olympics World Games on 'unity'. She certainly is a class act! [video]"}
{"title":"Los Angeles daily discussion thread 8/12/15"}
{"title":"L.A. will add bike and bus lanes, cut car lanes in sweeping policy shift"}
{"title":"\"Smart Meters\" Crack Down on Water Wasters"}
{"title":"$3B-$6B Tunnel Proposed In Contested 710 Freeway Extension"}
{"title":"South LA Man Fights City\u2019s Resistance To \u2018Guerrilla Gardening\u2019"}
{"title":"Los Angeles daily discussion thread 03/31/15"}
{"title":"Metro Expo Line Trains To Begin Testing Santa Monica Tracks Starting April 6"}
{"title":"Is Snapchat's rapid growth changing Venice's funky vibe?"}
{"title":"LA is City with the Worst Rush-Hour Traffic"}
{"title":"Posting this here to help out. I love dogs."}
{"title":"Got speeding ticket and have no clue what to do. The information is incomprehensible. Is traffic school worth it?"}
{"title":"Another drunk girl stopped in the middle of a San Diego freeway - good samaritans step in - bonus video of peeing"}
{"title":"Peace Love Plates - Los Angeles Non-Profit Giving Free Cooking and Nutrition Classes"}
{"title":"I'm so lucky to get gift cards by just few taps! Wanna be lucky too? Use my referral code: 376d62a to get 20 bonus coins."}
{"title":"Any freelancers living in Santa Monica?"}
{"title":"[Meet-up] Any interest in a mellow, low-stakes poker game? West Hollywood, this Thursday"}
{"title":"Anybody do monthly parking in Miracle Mile"}
{"title":"Apocalyptic Schadenfreude: What the New York Times \u2014 and everybody else \u2014 gets wrong about California\u2019s water crisis."}
{"title":"Seven Days To California Incline Closure In Santa Monica"}
{"title":"Gold line metro accident between South Pasadena station and Highland Park station. Shut down for 3-4 hours."}
{"title":"I hate to be a dick, but this guy is running a chopper shop out of his garage in our neighborhood, what can I do?"}
{"title":"Pedestrian killed by Gold Line train in Highland Park"}
{"title":"Anyone looking for a racquetball partner? (Glendora LAfitness)"}
{"title":"Friendly reminder: no bike riding allowed at Echo Park Lake"}
{"title":"Places to Eat Near Dodger Stadium for Every Kind of Dodger Fan"}
{"title":"There's Something in the Water at Ray's &amp; Stark Bar"}
{"title":"My favorite LA outdoor activities"}
{"title":"The ExxonMobil Explosion That Nobody Is Talking About"}
{"title":"First Renders of South Park's Third Megaproject"}
{"title":"Want to see what happens when a comedian can't hear the audience? Here's a 2 minute promo for \"Seven Minutes in Purgatory\""}
{"title":"Workpop, LA's newest job platform is live! It blows away Craigslist, Indeed, any all other job platforms. It's in beta so we are looking for comments and suggestions! Thanks!"}
{"title":"[My Event] My solo show about trans identity, Something Something New Vagina, is in LA for two more weeks! Thursdays are pay-what-you-can!"}
{"title":"Small Coffee Shops in Culver City?"}
{"title":"Dueling \"artists\" in Echo Park"}
{"title":"[South Bay] I'm about to be kicked out of the house -- are there any places around the South Bay that offer temporary housing for free?"}
{"title":"Anyone else see this billboard at the corner of La Cienega &amp; Olympic and laugh?"}
{"title":"Found: Two pet chickens, Valley Village"}
{"title":"Which one of you is lonely? (Xpost r/funny)"}
{"title":"Looking to start an IT company in LA and to partner with someone else who is an IT engineer."}
{"title":"Anybody know of any art spaces or communities?"}
{"title":"Torrance Transit celebrates 75th anniversary by implementing TAP across entire system"}
{"title":"San Diego\u2019s First Medical Marijuana Permit Faces Last Bureaucratic Hurdle"}
{"title":"LA Metro Could Switch Rail Line Names From Colors to Letters"}
{"title":"KTLA confuses non-profit New Directions for Veterans with pop group One Direction"}
{"title":"Creole Restaurant and a Cuban restaurant recommendations"}
{"title":"DTLA Sunrise from Santa Monica (another picture)"}
{"title":"My friend was carjacked in West Hills and it was caught on surveillance video."}
{"title":"The oldest palm tree in Los Angeles."}
{"title":"Slideshow: SoCal needs to build more homes, but 'density' is a tough sell"}
{"title":"I got a bullshit parking ticket while in LA - can you help me prove it?"}
{"title":"Applause for Bonin-Huizar Council Motion to Rein in LAPD Pedestrian Crackdown"}
{"title":"Today's gloom reminded me of my trip into the depths of the Angeles National Forest during the last rain storm, hope it brightens your spirits. [My Flickr]"}
{"title":"\"There are so many white people tired of your nigger garbage...\""}
{"title":"Things to do?"}
{"title":"'Django Unchained' Actress Ordered to Apologize to Police in Lewd Conduct Case - An actress who accused Los Angeles police of racial profiling when they investigated a report she was having sex with her boyfriend in a parked car has been ordered to apologize to officers as part of a plea deal."}
{"title":"How Los Angeles's Ridiculous Lack of Crosswalks Can Throttle Potential Pedestrian Districts"}
{"title":"For Goodness\u2019 Sake, Stop Widening the 405"}
{"title":"In Order to Create a More Walkable L.A., Start with the Basics: More and Better Crosswalks"}
{"title":"2-Way Protected Bikeway between Hermosa Beach and Redondo Beach to open June 13!"}
{"title":"Are there any websites that help facilitate renting monthly parking spaces?"}
{"title":"Traveling to LA for the first time."}
{"title":"Confidence inspiring sign in the window at a McDonalds in LA"}
{"title":"California\u2019s low-wage workers now earn less than in 1979"}
{"title":"Anyone notice Haggen's taking over a lot of area supermarkets? Looks like its all over the west coast."}
{"title":"Councilmen Ask LAPD To Explain Why They Give Dumb Tickets To Pedestrians"}
{"title":"Anyone know anything about the potential Rolling Stones Show on Wednesday?"}
{"title":"Looking for a place to eat near Hollywood."}
{"title":"Anyone know of any internships for high schoolers in film/television?"}
{"title":"Expo: Phase II Bike Path Will Open with Light Rail in 2016"}
{"title":"Upcoming Sawtelle Development Revealed"}
{"title":"FHFModern Collaborating With L.A. Artist Spencer Caligiuri"}
{"title":"Caine's Arcade"}
{"title":"TODAY is election day in LA! If you live in Los Feliz, Silver Lake, Echo Park, or the Southeast Cities, you could win $25,000 just for casting a ballot today."}
{"title":"Best place to buy a pre-owned tux?"}
{"title":"Pinoy boy who just turned 18 initiated with bareback sex"}
{"title":"Land of nuts - a rant about living in LA."}
{"title":"Sushi chef at Santa Monica restaurant sentenced in whale meat case"}
{"title":"Breaking into the skilled trades in Los Angeles, impossible for a non-Spanish speaker? Help and advice appreciated"}
{"title":"Los Angeles daily discussion thread 05/19/15"}
{"title":"Los Angeles Drug Lawyers | (818) 781-1570 | Drug Lawyer Los Angeles CA"}
{"title":"The view of DTLA from the LAFC Stadium (render)"}
{"title":"Los Angeles Criminal Defense Attorney | (818) 781-1570 | Criminal Defens..."}
{"title":"LA Times seems to think if Boston fails at Olympic hosting, LA could potentially step in for 2024."}
{"title":"Uber just launched uberEspa\u00f1ol which uses Spanish speaking drivers"}
{"title":"Munchery.com is offering $20 of free food delivered to Los Angeles residents."}
{"title":"Tips sought in case of missing Pasadena teen"}
{"title":"A Guide to Finding Public Art Wherever You Are in Los Angeles"}
{"title":"Thanks Reddit Los Angeles. I took your suggestions and made my rental home search site totally free! Let me know what you think!"}
{"title":"Thanks Reddit Los Angeles. I took your suggestions and made my rental home search site free! Let me know what you think!"}
{"title":"Post-rain LA is really pretty. Everyone do more rain dance."}
{"title":"Foodie Shares, the Uber of Home Cooking, Launches in L.A. Today"}
{"title":"As Smog Thins in L.A., Dramatic Evidence of Kids' Healthier Lungs | New study shows Los Angeles\u2013area kids have fewer breathing problems now than they did in the 1990s."}
{"title":"In U.C.L.A. Debate Over Jewish Student, Echoes on Campus of Old Biases - A student board debated whether the religion of a second-year economics major meant she would be biased in dealing with sensitive governance questions, and the discussion has upended the campus."}
{"title":"Cooking crack cocaine in public restroom, Skid Row style."}
{"title":"What is going on with this? We outnumbered any other city I've looked at on Google Maps currently with our traffic warning icons."}
{"title":"20 Novels That Dared To Define A Different Los Angeles"}
{"title":"El Ni\u00f1o is officially here but only a miracle will save California"}
{"title":"Boston on bring of abandoning US Olympic Bid; LA could be substitute bid"}
{"title":"Boston on brink of abandoning Olympics bid; LA could be substitute US bid"}
{"title":"What's the deal with all the Saudi's in Santa Monica especially at the promenade?"}
{"title":"100 days and 100 nights"}
{"title":"Why is no one shopping at Southern California's new Haggen supermarkets?"}
{"title":"Our Lady of Gentrification"}
{"title":"Train or drive to hollywood?"}
{"title":"Good doctors in LA?"}
{"title":"The Most Beautiful Places in California"}
{"title":"The Perils of Driving While Black in Los Angeles"}
{"title":"DOWNTOWN DAILY TOP 10 LOFTS LOS ANGELES FOR SALE REAL ESTATE NEWS UPDATE"}
{"title":"Good low key places to eat around west/north Hollywood?"}
{"title":"How easy is public transportation in LA?"}
{"title":"Is this Banksy? Spotted on N. Hudson just north of Hollywood Bl."}
{"title":"Lunch at Grand Central Market"}
{"title":"Buddy found a dog. More info in comments"}
{"title":"Boston's bid withdrawal puts L.A. back in the running for 2024 Olympics"}
{"title":"Went to Mount Baldy this weekend. GF took a panorama pic at the summit. I animated it."}
{"title":"Warehouse/open space for party (X-Post AskLosAngeles)"}
{"title":"Quick Question about Special Olympics"}
{"title":"Kayaking down the LA River"}
{"title":"Wait staff and restaurant owners: what do you think of Dine LA week?"}
{"title":"Instead of just donating money to the LA Food Bank, I thought I'd make it a little more interesting..."}
{"title":"Man killed by LAPD wanted by US Marshals"}
{"title":"Homeless woman at the Santa Monica Blvd 405 onramp. Anyone know her story?"}
{"title":"Ceres: Bright spot on dwarf planet is a twofer, NASA spacecraft finds"}
{"title":"There is a God"}
{"title":"Man Killed by Los Angeles Police Was Wanted by US Marshals"}
{"title":"Most Instagrammed Restaurants in LA"}
{"title":"The Secret Lives of L.A.'s Bottle-Service Girls"}
{"title":"Hollywood sign from inside Griffith Observatory Coelostat dome."}
{"title":"The LA Times has broken the story that Blacks and Hispanics get automatic boosts on their SAT scores so they can get grants, loans and admissions to elite colleges with bad original scores. Blacks get 230 extra points and Hispanics 185 but Asians get 50 points deducted for their race."}
{"title":"DISNEYLAND"}
{"title":"What is going on in Glendale right now? Helicopters and sirens oh my"}
{"title":"Anyone ever been to the music venue called Hotel Cafe in Hollywood?"}
{"title":"Beeping sound in Hollywood-- driving me insane!"}
{"title":"Feds fight 'maternity tourism' with raids on California 'maternity hotels'"}
{"title":"The end of Westside Rentals?? R.I.P. 12/03/2014?"}
{"title":"Andy Lank \u00bb 40 Secrets To Growing Your Entrepreneurial Success 10x warrior reviews + download link"}
{"title":"For Women's History month a look at the role California's female athletes played in challenging 20th century gender roles and sexism"}
{"title":"Good news is it looks like more parents are getting measles vaccinations for their kids"}
{"title":"Los Angeles daily discussion thread 03/04/15"}
{"title":"Working illegally in LA."}
{"title":"PSA: Downtown traffic will be a nightmare this afternoon."}
{"title":"Any advice for moving to Northridge? How hard is it to get a lease and a decent place? Any tips?"}
{"title":"Man stabbed, person with knife arrested at LAX"}
{"title":"L.A. Port police chief indicted in alleged fraud scheme"}
{"title":"Long shot. Lost keys in Venice."}
{"title":"Kinky Competitor To AirBNB Lets Travelers Rent Out Dungeons"}
{"title":"Comedy Game Show Seeks \"Los Angeles\" Prizes."}
{"title":"The Lalas burlesque show tonight in Los Angeles - The Federal, 8pm"}
{"title":"Los Angeles Federal Criminal Defense Attorney | (877) 781-1570"}
{"title":"Question. Why does WeHo use the sheriff's department while the rest of LA is overseen by LAPD?"}
{"title":"Help LA! Out-of-towner here!"}
{"title":"I just received this in my mailbox, I tried googling it but I can't find anything helpful. Can anyone provide more info?"}
{"title":"Happy Friday, LA. We live in paradise."}
{"title":"Places to get married in LA that feel like Wine Country"}
{"title":"Did anyone else feel that?"}
{"title":"Newhall man charged w/ sexually abusing, killing 19-day-old daughter"}
{"title":"Carnie Wilson sings about L.A.'s Original Ramen Burger to the tune of Wilson Phillips' hit Hold On [my blog]"}
{"title":"Anyone have experience selling at farmers markets?"}
{"title":"Bars for live music?"}
{"title":"LAPD, Which Tracks Citizens Through Their Phones, Worries About You Doing the Same to Them"}
{"title":"The Reddit guide to LA -- Are we ever going to update it?"}
{"title":"Microsoft Bing Streetside Camera Car on the 405 South from this Morning"}
{"title":"Exclusive: California DMV Ordered to Overlook Identity Theft by Illegal Immigrants"}
{"title":"Fake \"Dad Land\" brochure added to Hollywood Blvd. kiosk (x-post r/funny)"}
{"title":"Mr. Incredible convicted of assaulting Batgirl in Hollywood"}
{"title":"Waze critic Charlie Beck: Sometimes, public shouldn't know where police are"}
{"title":"Los Angeles Limousine | The Vault Nightclub LA"}
{"title":"Holy f*ck! This is one jaw dropping Instagram! Anyone else see this?"}
{"title":"Reputable Judo gyms in San Fernando Valley"}
{"title":"Report: California\u2019s High Welfare Benefits Attract New Immigrants"}
{"title":"Los Angeles daily discussion thread 12/25/14"}
{"title":"What IS open today? Restaurants, stores,etc"}
{"title":"Where does one go to have a good photo-op of the Hollywood sign?"}
{"title":"Do they still do that street full of Christmas lights thing in Griffith park?"}
{"title":"Controversial nativity scene at Claremont church depicts Mary as homeless woman"}
{"title":"VIDEO: Vet Hunters help struggling veterans over holidays"}
{"title":"Significant theatrical release at Cinefamily with Seth Rogen. In one piece.No terrorists in sight. The only terrorizers of the night were our fears..."}
{"title":"About the California Science Center showing of Interstellar the DEC 26"}
{"title":"If you have a south facing apartment this how-to will help you grow herbs in your windows"}
{"title":"Here is my Christmas gift to you /r/LosAngeles. Enjoy."}
{"title":"Where to watch basketball today in LA?"}
{"title":"[Meet-up]$20 Texas Hold'em home poker game this Sunday 12/28 at 4:30pm"}
{"title":"What cities near LA don't have AT&amp;T Uverse?"}
{"title":"Napa/Sonoma opinions and advice needed. Have you been?"}
{"title":"all this wind is making for a nice clear view of downtown"}
{"title":"Are there any print shops open today?"}
{"title":"Christmas Eve LA sunset. It's hard to ignore that it feels like summer all the time."}
{"title":"Homeless man gets $100, goes to liquor shop"}
{"title":"Hollywood Bowl Overlook on a clear Christmas morning"}
{"title":"Anyone up for a ride tonight?"}
{"title":"Libraries on libraries"}
{"title":"CA Sunset...you could see the ocean from here [OC] [instagram.com/4thandspring]"}
{"title":"Last Christmas Light"}
{"title":"Sunset at the Ocean [OC] [instagram.com/4thandspring]"}
{"title":"New NHL 15 LA Kings Be A GM on Youtube"}
{"title":"I found this emergency phone while hiking in the San Gabriel mountains"}
{"title":"What are the Trader Joe's items you think everyone should know about?"}
{"title":"Merry Xmas LA!"}
{"title":"What is there to do in LA for two and a half day starting tomorrow?"}
{"title":"Check out the moon if you can right now"}
{"title":"Does anyone know how much a red light ticket is going to run me?"}
{"title":"That sunset last night put on a hell of a show! Happy Holidays fellow Angelinos!"}
{"title":"Awesome Los Angeles Time Lapse of Christmas!"}
{"title":"Is it just me, or is it spooky as fuck outside right now?"}
{"title":"For the few Taiwanese in this subreddit (and, actually, anybody else who likes international stuff...) I'm coming back to LA from Taiwan in January. Does anybody want me to bring back something from Taiwan? :)"}
{"title":"The Best Concerts to See in L.A. This Weekend"}
{"title":"Yup... it's raining in LA"}
{"title":"So what is everyone's favorite spot to hang out in during rain/cold weather?"}
{"title":"10 Places for Weird But Awesome Ice Cream Flavors in L.A."}];

posts.insert( stateposts );
