Console commands
================

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

_This page deals with commands used in the console. For the [modding](/Modding "Modding") term, see [effects](/Effects "Effects")._  

This page lists the codes which may be input into the Console Window, a special debugging window which may be accessed on non-ironman games by pressing ⇧Shift+2, Alt+2+1, ⇧Shift+3,§, ~, ^, °, ², or \` (key varies based on keyboard layout). Press the up or down arrow keys to traverse through previously executed commands. Press ⇆Tab after entering the beginning of a command to autocomplete it or display which commands start with the entered sequence. Many codes can be turned off by repeating the command, but sometimes reloading the save or exiting the game is necessary. Adding a | and a filename to the end of a console command, writes the output of the command to the specified file in the game installation folder.

Contents
--------

*   [1 Commonly used](#Commonly_used)
*   [2 List of commands](#List_of_commands)
*   [3 Casus belli IDs](#Casus_belli_IDs)
*   [4 List of events](#List_of_events)
*   [5 See also](#See_also)

Commonly used\[[edit](/index.php?title=Console_commands&veaction=edit&section=1 "Edit section: Commonly used") | [edit source](/index.php?title=Console_commands&action=edit&section=1 "Edit section: Commonly used")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

Command

Effect

**cash (Insert Number) \[<Country tag> OPTIONAL\]**

Extra Money (if not specified, gives 5000)

**manpower (Insert Number) \[<Country tag> OPTIONAL\]**

Extra [manpower](/Manpower "Manpower") (in thousands)

**sailors (Insert Number) \[<Country tag> OPTIONAL\]**

Extra [sailors](/Sailors "Sailors")

**prestige \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]**

Adds [prestige](/Prestige "Prestige"). Gives 5 prestige if no amount is given.

**legitimacy \[<AMOUNT>\] \[<Country tag> OPTIONAL\]**

Sets the [legitimacy](/Legitimacy "Legitimacy") of the current ruler

**adm \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]**

Get [administrative power](/Administrative_power "Administrative power") points (if not specified, gives 999)

**dip \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]**

Get [diplomatic power](/Diplomatic_power "Diplomatic power") points (if not specified, gives 999)

**mil \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]**

Get [military power](/Military_power "Military power") points (if not specified, gives 999)

**powerpoints \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]**

Get power in all powers._  
Maximizes [monarch points](/Monarch_points "Monarch points") if no number specified._

**yesman**

Toggle AI diplomatic responses (**on**: always accept; **off**: normal response)

**fow**

Toggles [fog of war](/Fog_of_war "Fog of war") on/off

**ti**

Toggles [terra incognita](/Terra_incognita "Terra incognita") on/off

**debug\_mode**

Displays province ID, country tag, and border distance when mousing over provinces.

**splendor**

ability can be gained.

**assimilate \[<Province>\] \[<Tag> OPTIONAL\]**

Change ownership, core, set culture and religion.

List of commands\[[edit](/index.php?title=Console_commands&veaction=edit&section=2 "Edit section: List of commands") | [edit source](/index.php?title=Console_commands&action=edit&section=2 "Edit section: List of commands")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

DLC

Command

Description

absolutism \[<Amount>\] \[<Target Country tag> OPTIONAL\]

_Adds [Absolutism](/Absolutism "Absolutism") to the player_

[![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/24px-Common_Sense.png)](/Common_Sense "Common Sense")

add\_backer \[<prov id>\]

The province becomes a backer of the current issue in the [parliament](/Parliament "Parliament").

add\_baseunrest \[<Province ID>\] \[<Base Unrest>\]

_Adds base [unrest](/Unrest "Unrest") to a province_

add\_cardinal

Adds 1 new [cardinal](/Cardinal "Cardinal") to a Catholic nation.

add\_cb \[<casus belli tag>\] \[<target country tag>\] \[<Actor Country tag> OPTIONAL\]

_Add [casus belli](/Casus_belli "Casus belli") against target country_

add\_claim \[<Province ID>\] \[<Country tag> OPTIONAL\]

_Add [claim](/Claim "Claim")_

add\_colonist \[<Country tag>\]

_Adds a [colonist](/Colonist "Colonist") to a country._

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")

add\_consort \[<Target Country Tag> OPTIONAL\] \[<Origin Country Tag> OPTIONAL\]

_Adds a [consort](/Consort "Consort") from a tag_

add\_core \[<Province ID>\] \[<Country tag> OPTIONAL\]

_Add [core](/Core "Core")_

add\_devastation \[<Province ID>\] \[<Devastation>\]

_Adds [devastation](/Devastation "Devastation") to a province_

add\_diplo \[<Country tag> OPTIONAL\]

_Adds diplomatic enroute_

add\_faction \[<factionname>\]

_Adds a [Faction](/Faction "Faction") to your country_  

*   Celestial Empire Factions: temples / enuchs / bureaucrats  
    
*   Merchant Republic Factions: mr\_aristocrats / mr\_traders / mr\_guilds  
    
*   Revolutionary Republic Factions: rr\_jacobins / rr\_royalists / rr\_girondists  
    
*   Pirate Republic Factions: pr\_buccaneers / pr\_smugglers / pr\_captains

add\_heir \[<Target Country Tag> OPTIONAL\]

_Adds an [heir](/Heir "Heir") (The current heir is immediately killed.)_

add\_idea\_group \[<Idea group key>\] \[<Country tag> OPTIONAL\]

_Adds the specified [idea group](/Idea_group "Idea group")_

add\_interest \[<Country tag>\]

_Add specified country tag to your interest_

[![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/24px-Common_Sense.png)](/Common_Sense "Common Sense")

add\_issue \[<issue tag>\]

Adds issue to a [parliament](/Parliament "Parliament").

add\_liberty\_desire \[<Amount>\] \[<Target Country tag> OPTIONAL\]

_Add [liberty desire](/Liberty_desire "Liberty desire") to the player_

add\_local\_autonomy \[<Province ID>\] \[<Amount>\]

_Adds [local autonomy](/Local_autonomy "Local autonomy") to a province_

add\_loyalty \[<Target Estate>\] \[<Amount>\]

_Adds loyalty to target [estate](/Estate "Estate")_  
The estates have the following identifier:

*   estate\_church
*   estate\_nobles
*   estate\_burghers
*   estate\_cossacks
*   estate\_nomadic\_tribes
*   estate\_dhimmi
*   estate\_brahmins
*   estate\_maratha
*   estate\_vaisyas
*   estate\_jains
*   estate\_rajput

add\_missionary \[<Country tag>\]

Sets missionary count to 1

add\_natives \[<ProvinceID>\] \[<Amount>\]

_Add [natives](/Colonization#Natives "Colonization") to given province_ (100× \[<Amount>\])

add\_opinion \[<Actor Country tag>\] \[<Target Country tag> OPTIONAL\]

_Add [opinion](/Opinion "Opinion") to/from tag_

add\_pa \[<Country tag>\]

_Add [patriarch authority](/Patriarch_authority "Patriarch authority") to tag_

add\_permanent\_claim \[<Province ID>\] \[<Country tag> OPTIONAL\]

_Add [permanent claim](/Permanent_claim "Permanent claim")_

add\_pi \[<Country tag>\]

_Add [papal influence](/Papal_influence "Papal influence") to tag_

add\_prosperity \[<Province ID>\] \[<Prosperity>\]

Adds [prosperity](/Prosperity "Prosperity") to a province's state.

add\_republican\_tradition \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Get [republican tradition](/Republican_tradition "Republican tradition")_

[![Emperor](/images/thumb/c/c5/Emperor.png/24px-Emperor.png)](/Emperor_(DLC) "Emperor")

add\_to\_curia\_treasury \[<money>\]

_Add money to the Curia Treasury_

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")

add\_trait \[<personality tag>, <heir> OPTIONAL, <consort> OPTIONAL\]

_Add [ruler personality](/Ruler_personality "Ruler personality")_

add\_unrest \[<CID Type>\] \[<CID Index>\] \[<Unrest>\]

_Adds [unrest](/Unrest "Unrest") to a faction_

adm \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Get [administrative power](/Administrative_power "Administrative power")_ (default value: 999)

admiral \[<fire>\] \[<shock>\] \[<maneuver>\] \[<siege>\] \[<Country tag> OPTIONAL\]

_Create an [admiral](/Admiral "Admiral")_

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/24px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

age \[X\]

Sets the [age](/Ages "Ages") of the game: 0 is Age of Discovery,1 is Age of Reformation,2 is Age of Absolutism and 3 is Age of Revolution.

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")

age\_consort \[<age> <Country tag> OPTIONAL\]

_Set [consorts](/Consort "Consort") age_

age\_heir \[<age> <Country tag> OPTIONAL\]

_Set [heirs](/Heir "Heir") age_

age\_ruler \[<age> <Country tag> OPTIONAL\]

_Set [rulers](/Ruler "Ruler") age_

ai(ai) \[<Target Country Tag>\]

_Enables/Disables AI for all nations or a specific tag_

ai\_army\_tick \[<Country tag> OPTIONAL\] \[<File name for logging> OPTIONAL\]

_Makes ai reevaluate all army movements_

ai\_budget \[<tag> OPTIONAL\]

prints AI budgeting information. Note: the commands always prints the information for the current country. The optional tag argument doesn't work

ai\_minister \[<0 = army, 1 = diplomacy, 2 = trade>\]

_Enables/Disables specific AI ministers_

ai\_plan\_regions \[<Country tag> OPTIONAL\]

_Makes ai reevaluate all region assignments_

aiinvalid

_Print invalid AI command counts_ to ai.log

aiview

_Toggles additional AI info_

annex \[<Target Country Tag>\] \[<Actor Country tag> OPTIONAL\]

[Annexes](/Annex "Annex") the specified tag without adding cores

[![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/24px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization")

army\_drill \[<AMOUNT \[0.0, 100.0\]>\] \[<Country tag> OPTIONAL\]

_Sets [drill](/Drill "Drill") for all your subunits_

[![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/24px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization")

army\_professionalism \[<Amount>\] \[<Target Country tag> OPTIONAL\]

Sets [army professionalism](/Army_professionalism "Army professionalism") for the target country (default value: 100)

army\_tradition \[<Amount>\] \[<Target Country tag> OPTIONAL\]

Adds [army tradition](/Army_tradition "Army tradition") to the target country (default value: 50)

assert \[\]

_Asserts trigger (otherwise causes test failure)_

assimilate \[<Province>\] \[<Tag> OPTIONAL\]

_Change ownership, core, set culture and religion_

[![El Dorado.png](/images/thumb/1/16/El_Dorado.png/24px-El_Dorado.png)](/El_Dorado "El Dorado")

authority \[<AMOUNT>\] \[<Country tag> OPTIONAL\]

_Add to a country's authority_ ([Inti](/Inti "Inti") religion)

autosave

_Triggers an autosave._

balance

Balance data dumped to game.log, with regions (development,number of provinces) and countries (tax, manpower, development, number of forts).

bearhaslanded \[<Province ID> OPTIONAL\]

_An unwise command to use_  
Spawns [Jan Mayen](/Jan_Mayen "Jan Mayen").

bird\_mana \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Get [diplomatic power](/Diplomatic_power "Diplomatic power")_ (default value: 999)

[![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/24px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations")

canals

_Debug canals on map_

cash \[<Amount> OPTIONAL\] \[<Target Country tag> OPTIONAL\]

Adds [ducats](/Ducats "Ducats") to the treasury. Default is 5000 ducats.

center\_of\_trade(cot) \[CoT Level\] \[<Province ID>\]

_Create or upgrade/downgrade a center of trade._

change\_culture\_court \[<ruler/heir/consort/admadv/dipadv/miladv>\] \[<Culture>\]

_Changes the [culture](/Culture "Culture") of a court member._

change\_religion \[<province ID>/<Target Country tag>\] \[<religion>\]

Change religion of a province or country. If no province id or tag is specified, the state religion of the current country is changed. If only a province id is specified the religion of the province is changed to the state religion of the current country  
The [religions](/Religions "Religions") have the following identifier:

*   Catholic: catholic
*   Protestant: protestant
*   Hussite: hussite
*   Reformed: reformed
*   Anglican: anglican
*   Orthodox: orthodox
*   Coptic: coptic
*   Sunni: sunni
*   Shia: shiite
*   Ibadi: ibadi
*   Theravada: buddhism
*   Vajrayana: vajrayana
*   Mahayana: mahayana
*   Confucian: confucianism
*   Shinto: shinto
*   Hindu: hinduism
*   Sikh: sikhism
*   Animist: animism
*   Fetishist: shamanism
*   Totemist: totemism
*   Inti: inti
*   Nahuatl: nahuatl
*   Mayan: mesoamerican\_religion
*   Norse: norse\_pagan\_reformed
*   Tengri: tengri\_pagan\_reformed
*   Jewish: jewish
*   Zoroastrian: zoroastrian
*   Alcheringa: dreamtime

ExpandAdditional religions in converted CK2 games:

*   Nestorian: nestorian
*   Fraticelli: fraticelli
*   Cathar: cathar
*   Messalian: messalian
*   Waldensian: waldensian
*   Lollard: lollard
*   Monophysite: monophysite
*   Bogomilist: bogomilist
*   Monothelite: monothelite
*   Iconoclast: iconoclast
*   Paulician: paulician
*   Zikri: zikri
*   Yazidi: yazidi
*   Kharijite: kharijite
*   Druze: druze
*   Hurufi: hurufi
*   Mazdaki: mazdaki
*   Manichean: manichean
*   Samaritan: samaritan\_faith
*   Karaite: karaite\_faith
*   Jainism: jain
*   Romuva: baltic\_pagan\_reformed
*   Hellenic: hellenic\_pagan
*   Slavic: slavic\_pagan\_reformed
*   Suomenusko: finnish\_pagan\_reformed
*   Zunist: zun\_pagan\_reformed
*   Bön: bon

change\_religion\_court \[<ruler/heir/consort/admadv/dipadv/miladv>\] \[<Religion>\]

_Changes the religion of a court member._

check\_save

_Check save and load persistence_

[![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/24px-Common_Sense.png)](/Common_Sense "Common Sense")[![Rule Britannia.png](/images/thumb/5/5a/Rule_Britannia.png/24px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia")[![Emperor](/images/thumb/c/c5/Emperor.png/24px-Emperor.png)](/Emperor_(DLC) "Emperor")

church\_power \[<Amount>\] \[<Target Country tag> OPTIONAL\]

_Adds [church power](/Church_power "Church power") to the player_ ([Protestant](/Protestant "Protestant"), [Anglican](/Anglican "Anglican"), [Hussite](/Hussite "Hussite") and [Jewish](/Jewish "Jewish") religion)

clear

_Clears the console_

clearae \[<Against Country Tag>, <By Country Tag (empty for all)>\]

_Clears [Aggressive Expansion](/Aggressive_Expansion "Aggressive Expansion")_

clearreforms \[Target tag <optional>\]

_Removes all [government reforms](/Government_reform "Government reform")_

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")

clr\_consort\_flag \[<Tag>\] \[<Flag>\]

Clears a [flag](/Flag "Flag") from a [consort](/Consort "Consort")

clr\_country\_flag \[<Tag>\] \[<Flag>\]

_Clears a country [flag](/Flag "Flag")_

clr\_flag \[<Flag>\]

_Clears a global [flag](/Flag "Flag")_

clr\_prov\_flag \[<Flag>\] \[<Province>\]

_Clears a [flag](/Flag "Flag") from a province_

collision(debug\_collision)

_Toggles debug display of normals/bounding boxes/collision_

colonize \[<province ID/colonial region>\]

Colonizes and cores an unsettled province (and gets some prestige). The province retains its original culture and religion.  
Note: Works also for settled provinces and keeps any previous owner's core.

Also works for entire colonial regions at once, as listed in 00\_colonial\_regions.txt:

*   colonial\_alaska
*   colonial\_australia
*   colonial\_brazil
*   colonial\_california
*   colonial\_canada
*   colonial\_colombia
*   colonial\_eastern\_america
*   colonial\_la\_plata
*   colonial\_louisiana
*   colonial\_mexico
*   colonial\_peru
*   colonial\_the\_carribean

combat\_dice \[number\]

Fixes combat dice to a number you specify. -1 gives random dicerolls like normal.

combatsound

_How often does the combat view give a random sound? 0-50_

control(controll) \[<Province ID>\] \[<Country tag> OPTIONAL\]

_Change controller_

corrupt \[<AMOUNT>\] \[<Country tag> OPTIONAL\]

Sets the [corruption](/Corruption "Corruption") of the country to the given amount.

country\_modifier \[<country tag>\] \[<Modifier type>\]

_Show country modifier values._

CrashReporter.DeleteCrashData \[<days>\]

_Delete local crash dumps older than X days._

CrashReporter.SimulateCrash

_Simulates a crash (resulting in the game exiting)._

CrashReporter.UploadCrash

_Upload the latest crash dump._

create\_march \[<Target Country Tag>\] \[<Actor Country tag> OPTIONAL\]

The specified tag becomes a [march](/March "March") (of the actor country).

ct

_Puts timer info in clipboard_

culture \[<Province ID>\]

_Changes culture on a province to your [primary culture](/Primary_culture "Primary culture")_

cv

_Prints the game version, and copies to clipboard._

date \[date in format yyyy.mm.dd\]

_Changes current date_

debug\_achievements

_Enables popups for achievements to debug them_. When this command is used, it activates the ingame achievement list and makes its icon look like an ironman game. The list will show all achievements for which the starting conditions were fulfilled at the moment when the command was used(this differs from the behavior in an ironman game which only checks the conditions at the start of the campaign).

debug\_achievements\_clear

_Clear all achievements and user stats_. **Warning:** Do not use this command, because it removes all the earned achievements from steam account (and other stores)

debug\_budgetall \[<tag>\]

_Will log income and expenditure for all countries. This will result in large files and a slower game!_

debug\_budgettag \[<tag>\]

_Will log income and expenditure for a tag_

debug\_crownland \[<tag>\]

_Will log the change in crownland for a tag_

debug\_info

_Toggles Debug info_

debug\_mode

_Makes some debug features available_. Displays province ID, country tag, and border distance when mousing over provinces. Also shows event ids and AI weight in the tooltip for event options.

debug\_nogui

_Toggles GUI on/off_

debug\_reload\_areas

_Reload map areas_

debug\_reload\_regions

_Reload map regions_

declare\_war \[<attacker tag>\] \[<defender tag>\] \[<call willing allies>\]

_Declares [war](/War "War") between two nations (no [CB](/CB "CB"))_

delete\_wars \[<Country tag> OPTIONAL\]

_Delete [wars](/War "War") without removing truces_

devotion \[<AMOUNT>\] \[<Country tag> OPTIONAL\]

_Set the devotion of a theocracy_

die(kill) \[<Target Country Tag> OPTIONAL\]

The [ruler](/Ruler "Ruler") (of the specified country) is killed.

dip \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Get [diplomatic power](/Diplomatic_power "Diplomatic power")_ (default value: 999)

diplocount

_Prints out global diploaction statistics_ to game.log

diplomacy\_info

_Print summary information about currently active diplomatic relations._ to console

disaster \[disaster\_key\]

_Adds 100 progress to a [disaster](/Disaster "Disaster")_

discover \[<Province ID>\] or \[<Target Country Tag>\] \[<Actor Country tag> OPTIONAL\]

_Discover province or capital of target tag_

[![El Dorado.png](/images/thumb/1/16/El_Dorado.png/24px-El_Dorado.png)](/El_Dorado "El Dorado")

doom \[<AMOUNT>\] \[<Country tag> OPTIONAL\]

_Add to a country's doom_ ([Nahuatl](/Nahuatl "Nahuatl") religion)

echo \[Echo\]

_Echoes the arguments in the console (also useful for commenting script files)_

economy \[\]

_Prints out global economy statistics_ to game.log

embrace \[<Province ID>\] \[<institution name> optional\]

_Embraces an [institutions](/Institution "Institution") in a province. If left blank, all institutions will be embraced._  
The institution has the following identifier:

*   Feudalism: feudalism
*   Renaissance: renaissance
*   Colonialism: new\_world\_i
*   Printing Press: printing\_press
*   Global Trade: global\_trade
*   Manufactories: manufactories
*   Enlightenment: enlightenment
*   Industrialization: industrialization

enable\_all\_commands \[\]

Seems to have no effect in the release version of the game. It just prints _Not Successful_

enable\_game\_controller

_Enables/disables support for game controller_

epicfail \[<Target Country Tag> OPTIONAL\]

_Makes all [spies](/Spies "Spies") of target country fail_

estate\_agenda \[<name>\]

_Start a estate agenda_

event \[event id\] \[<Target Country Tag> OPTIONAL\] \[<Option id> OPTIONAL\]

_Executes an [event](/Event "Event")_

exhaust \[<Amount>\] \[<Country tag> OPTIONAL\]

_Alter your [war exhaustion](/War_exhaustion "War exhaustion")_

fast\_colonize

Toggles the fast colonize cheat.(affects AI as well)

fast\_diplo

_Ignore the date check for enroute diplomats_

[![The Cossacks.png](/images/thumb/b/b6/The_Cossacks.png/24px-The_Cossacks.png)](/The_Cossacks "The Cossacks")

favors \[<Target Country tag>\] \[<Amount>\]

_Adds [favors](/Favors "Favors") with target country_

[![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/24px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations")

fervor \[<Amount>\] \[<Target Country tag> OPTIONAL\]

_Adds [fervor](/Fervor "Fervor") to the player_ ([Reformed](/Reformed "Reformed") religion)

[![Conquest of Paradise.png](/images/thumb/3/31/Conquest_of_Paradise.png/24px-Conquest_of_Paradise.png)](/Conquest_of_Paradise "Conquest of Paradise")

federation\_cohesion \[<Amount>\]

_Will change federation cohesion by given value_ ([Native Council](/Native_Council "Native Council") federations)

findcommands \[<Search string>\]

_Finds console commands_

flagship\_galley \[<Ship Name>\] \[<Ability 1>\] \[<Ability 2>\] \[<Ability 3>\]

Creates a [galley](/Galley "Galley") as [flagship](/Flagship "Flagship"). Abilities are:

*   Captain's Log: captains\_log
*   Command Aftercastle: command\_aftercastle
*   Dutch Courage: dutch\_courage
*   Flag Officers: flag\_officers
*   Flagship: base\_flagship\_modification
*   Hull Sheathing: hull\_sheating
*   Improved Crow's Nest: improved\_crows\_nest
*   Integrated Marines: integrated\_marines
*   Mass Load Cannons: mass\_load\_cannons
*   Mortars: mortars
*   Portuguese Bombardier: portuguese\_bombardier
*   Portuguese Fusiliers: portuguese\_corps\_of\_fusiliers
*   Portuguese Navigators: portuguese\_navigators
*   Portuguese Trade Route Map: portuguese\_trade\_route\_map
*   Scandinavian Flag Officers: scandinavian\_flag\_officers
*   Spanish Grand Armada: spanish\_grand\_armada
*   Spanish Mass Load Cannons: spanish\_mass\_load\_cannons
*   Spanish Treasury Convoy: spanish\_treasure\_fleet
*   Spare Jolly Roger: spare\_jolly\_roger
*   Standardized Signal Book: standardized\_signal\_book
*   Trade Route Map: trade\_route\_map

flagship\_heavy \[<Ship Name>\] \[<Ability 1>\] \[<Ability 2>\] \[<Ability 3>\]

Creates a [heavy ship](/Heavy_ship "Heavy ship") as [flagship](/Flagship "Flagship"). See flagship\_galley for a list of abilities.

flagship\_light \[<Ship Name>\] \[<Ability 1>\] \[<Ability 2>\] \[<Ability 3>\]

Creates a [light ship](/Light_ship "Light ship") as [flagship](/Flagship "Flagship"). See flagship\_galley for a list of abilities.

form\_union \[<Country tag>\] \[<Country tag> OPTIONAL\]

_Forms [Union](/Union "Union") with target_

fow (debug\_fow) \[<Province ID> OPTIONAL\]

_Turns off fog of war in a province or in general_

frenzy

_Force enable Great Power frenzy!!!_

frenzy\_off

_Force disable Great Power frenzy!!!_

fullscreen

_Toggles fullscreen_

gamespeed(speed) \[(0-5)\]

_Set the current game speed, pausing the game at speed 0._

[![Leviathan.png](/images/thumb/0/0a/Leviathan.png/24px-Leviathan.png)](/Leviathan "Leviathan")

great\_project \[<great project tag>\]

Create or destroy a [great project](/Great_project "Great project")

god

_godmode on/off_. One effect is that a battle is automatically won after the first day.

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/24px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

golden\_age \[<Country tag>\]

_Starts a golden age in that country._

guibounds

Allows debugging UI elements.

[![Third Rome.png](/images/thumb/4/49/Third_Rome.png/24px-Third_Rome.png)](/Third_Rome "Third Rome")[![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/24px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization")

government\_power(russian) \[<Amount> OPTIONAL\]

Grants full government ability points or specified amount.  
Works for Russian government types added in [Third Rome](/Third_Rome "Third Rome") (e.g. Principality/Tsardom) as well as governments added/updated in [Cradle of Civilization](/Cradle_of_Civilization "Cradle of Civilization") (e.g. Mamluk)

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/24px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

harmonization \[<AMOUNT \[0, 100\]>\] \[<Country tag> OPTIONAL\]

_Sets to country's [Harmonization](/Harmonization "Harmonization") progress_ ([Confucian](/Confucian "Confucian") religion)

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/24px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

harmony \[<AMOUNT>\] \[<Country tag> OPTIONAL\]

_Add to a country's [Harmony](/Harmony "Harmony")_ ([Confucian](/Confucian "Confucian") religion)

heir\_history \[\]

_Prints out heir history_

help \[command name\]

_Print out all console commands or a specific command description._

helphelp

Displays “No help for you!” in the command box

helplog

Print out all console commands to game.log file.

highlight\_islands \[<threshold>\]

Highlights provinces that would trigger the [Province is on an island](/Island#province_is_on_an_island "Island") condition if SIZE\_LIMIT\_FOR\_ISLANDS in defines.lua would be set to the specified threshold

[![The Cossacks.png](/images/thumb/b/b6/The_Cossacks.png/24px-The_Cossacks.png)](/The_Cossacks "The Cossacks")

horde\_unity \[<AMOUNT>\] \[<Country tag> OPTIONAL\]

_Set the [unity of a horde](/Horde_unity "Horde unity")_

ideadump

_Dump all countries that have generic national ideas_ to game.log

imperial\_authority \[<Amount>\] \[<Country tag> OPTIONAL\]

Increases the [imperial authority](/Imperial_authority "Imperial authority") of the emperor.

[![Emperor](/images/thumb/c/c5/Emperor.png/24px-Emperor.png)](/Emperor_(DLC) "Emperor")

imperial\_incident \[<name>\]

_Start an [imperial incident](/Imperial_incident "Imperial incident")_

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/24px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

incident \[<IncidentTag>, <CountryTag> OPTIONAL\]

_Trigger an [incident](/Isolationism "Isolationism") for a country._ ([Shinto](/Shinto "Shinto") religion)

infinite\_combat

Combat doesn't cause damage anymore.

inflation \[<Amount>\] \[<Country tag> OPTIONAL\]

Changes [inflation](/Inflation "Inflation") of the country

[![Rule Britannia.png](/images/thumb/5/5a/Rule_Britannia.png/24px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia")

innovativeness \[<Amount> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Add [Innovativeness](/Innovativeness "Innovativeness")_ (Default is 100)

[![Dharma.png](/images/thumb/f/fc/Dharma.png/24px-Dharma.png)](/Dharma "Dharma")

insult \[Sender Country tag\] \[Receiver Country tag\] \[Insult Index/Key\]

Sends a scornful insult from sender to receiver.

integrate \[<Target Country Tag>\] \[<Actor Country tag> OPTIONAL\]

Integrates the specified tag into actor's country (adds cores)

invasion\_target \[<Province ID>\]

_Force sets AI invasion target to province_

[![Dharma.png](/images/thumb/f/fc/Dharma.png/24px-Dharma.png)](/Dharma "Dharma")

invest \[Investment Key\] \[Province ID\]

_Toggles a [Trade Company](/Trade_Company "Trade Company") Investment defined by investment key in Trade Company defined by Province ID_

[![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/24px-Common_Sense.png)](/Common_Sense "Common Sense")

isolationism \[level\]

_Set your [isolation](/Isolationism "Isolationism") level_ ([Shinto](/Shinto "Shinto") religion)

[![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/24px-Common_Sense.png)](/Common_Sense "Common Sense")

karma \[<Amount>\] \[<Target Country tag> OPTIONAL\]

_Adds [karma](/Karma "Karma") to the player_ ([Buddhist](/Buddhist "Buddhist") religions)

kill\_advisors \[<Country tag>\]

_Kills all [advisors](/Advisor "Advisor") in the court and from the pool_

kill\_cardinal \[<Countrytag> OPTIONAL\]

Kills first [cardinal](/Cardinal "Cardinal") in the list

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")

kill\_consort \[<Target Country Tag> OPTIONAL\]

_Kills your [consort](/Consort "Consort")_

kill\_heir \[<Target Country Tag> OPTIONAL\]

_Kills the [heir](/Heir "Heir") of a tag_

kill\_leader

_Kill a random [leader](/Leader "Leader") with given death cause_

landing\_page \[<dlc\_key>\]

_Show Red Queen dlc landing page_. The DLC keys can be found in the [file name section of the DLC page](/Downloadable_content#File_names "Downloadable content")

leader \[<fire>\] \[<shock>\] \[<maneuver>\] \[<siege>\] \[<Country tag> OPTIONAL\]

Creates a [general](/General "General") with the given values.

leak

_Leaks memory_

leak\_gpu \[Chunk size (bytes)\] \[Number of Chunks\]

_Leaks GPU memory_

legitimacy \[<AMOUNT>\] \[<Country tag> OPTIONAL\]

_Set the [legitimacy](/Legitimacy "Legitimacy") of the ruler_

low\_memory

_Simulates a low memory alert and tries to reduce memory usage_

lucky \[<Country tag> OPTIONAL\]

Toggles [lucky nation](/Lucky_nation "Lucky nation") status.

make\_subject \[<Tag>\] \[<Overlord tag> OPTIONAL\] \[<Subject type>\]

_Make country a [subject](/Subject "Subject")_

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/24px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

mandate \[<Amount>\]

Changes [mandate](/Mandate "Mandate") of the [Emperor of China](/Emperor_of_China "Emperor of China") (to maximum without value).

manpower \[<Amount>\] \[<Target Country tag> OPTIONAL\]

Adds [manpower](/Manpower "Manpower") to pool (1000× \[<Amount>\]) (default 50)

map\_random \[<seed=-1>\] \[<restore>\] \[<nosmooth>\] \[<nosmoothcoasts>\] \[<topology>\] \[<terrain>\] \[<colormap>\] \[<minimap>\] \[<rivers>\] \[<trees>\]

_Randomize new world part of map (heightmap, terrain, ...)_

map\_vertextextures

_Toggle map rendering with vertex textures_

mapmode \[Mapmode type\]

_Change [map mode](/Map_mode "Map mode")._ Some special mapmodes are:

mapmode type

description

aieval

Seems to be an alias for _armyeval_

aihre

Toggles an AI mapmode allowing the player to see the logistics behind whether or not the AI will join the HRE

airegion

aithreateval

armyeval

buildingeval

shows which buildings the AI would build in a province. Selecting a building in the macrobuilder shows the scores for that building

controllerarea

ownerarea

pathfind

pathfinding information for the previously selected army towards the currently selected province

province\_flags

the tooltip shows otherwise hidden province flags and the date on which they were set

winterpower

the tooltip shows a value for the winter

memory

_Prints out the used memory_

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/24px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

meritocracy \[<AMOUNT>\] \[<Country tag> OPTIONAL\]

_Set the [meritocracy](/Meritocracy "Meritocracy") of the Chinese Emperor_

mil \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Get [military power](/Military_power "Military power")_ (default value: 999)

mission \[Mission identifier\]

_Toggles [mission](/Mission "Mission") completion_

morehumans(humans) \[num\]

_Adds more humans_

msg

_Toggles all messages popup_

native\_uprising \[<ProvinceID>\]

_Create [native uprising](/Colonization#Native_uprising "Colonization") in given province_

navy\_tradition \[<Amount>\] \[<Target Country tag> OPTIONAL\]

Adds navy tradition to the specified country

nextsong

_Changes the currently playing soundtrack._

nopausetext

_Toggles the pausebanner for nicer screenshots._

norevolts

_Toggles revolts_

nowar

_Toggles AI war declarations_

observe (spectator)

_Switches to play no country at all, and no longer shows messages or pauses the game_

observe\_mode \[\]

_Changes to the observe mode_

on\_action \[<Identifier>\]

_Will run the giver on\_action_

oos

_Make the client go oos_

own \[<Province ID>\] \[<Country tag> OPTIONAL\]

_Change ownership_

own\_core \[<Province ID>\] \[<Country tag> OPTIONAL\]

_Change ownership + add [core](/Core "Core")_

paper\_mana \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Get [administrative power](/Administrative_power "Administrative power")_ (default value: 999)

pass\_next\_reform \[<reform key> OPTIONAL\]

_Add reforms to [empire](/Holy_Roman_Empire "Holy Roman Empire")_. The reform keys are:

*   Call for Reichsreform: reichsreform / emperor\_reichsreform
*   Institute Reichsregiment: reichsregiment / emperor\_reichsregiment
*   Reform the Hofgericht: hofgericht / emperor\_hofgericht
*   Enact Gemeiner Pfennig: gemeinerpfennig / emperor\_gemeinerpfennig
*   Ewiger Landfriede: landfriede / emperor\_landfriede
*   Proclaim Erbkaisertum: erbkaisertum / emperor\_erbkaisertum
*   Revoke The Privilegia: privilegia\_de\_non\_appelando / emperor\_privilegia\_de\_non\_appelando
*   Renovatio Imperii: renovatio / emperor\_renovatio
*   Absolute Reichsstabilität: emperor\_reichsstabilitaet
*   Perpetual Diet: emperor\_perpetual\_diet
*   Create the Landsknechtswesen: emperor\_landsknechtswesen
*   Establish the Reichstag Collegia: emperor\_reichstag\_collegia
*   Expand the Gemeiner Pfennig: emperor\_expand\_gemeiner\_pfennig
*   Embrace Rechenschaft Measures: emperor\_rechenschaft
*   Geteilte Macht: emperor\_geteilte\_macht
*   Reichskrieg: emperor\_reichskrieg
*   Curtail the Imperial Estates: emperor\_imperial\_estates

[![Emperor](/images/thumb/c/c5/Emperor.png/24px-Emperor.png)](/Emperor_(DLC) "Emperor")

pick\_golden\_bull \[<name>\]

_Pick a golden bull_

piety \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

Adds [piety](/Piety "Piety"). ([Muslim](/Muslim "Muslim") religions) (default: +10)

pirate \[<Province ID>\]

_Starts a Pirate in a province_

poll

_Polls valid [Events](/Events "Events")_

population \[<ProvinceID>\] \[<Amount>\]

_Adds population to a province._ (Only for colonies.)

popup\_pause\_all

_Sets all messages to popup and pause_

power \[<stability/tech\_table\_key/idea\_key>\] \[<Country tag> OPTIONAL\]

_Adds the specified [idea group](/Idea_group "Idea group")_

powerpoints \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Get power in all powers._  
Maximizes [monarch points](/Monarch_points "Monarch points") if no number specified.

powerspend \[\]

_Prints out global powerspend statistics_ to game.log

powerspend\_count \[\]

_Prints out number of times powerspend was executed_ to game.log

prestige \[<Amount>\] \[<Country tag> OPTIONAL\]

Changes [prestige](/Prestige "Prestige") of the specified country. (default value: +6)

prices

_Price Info_ to game.log

print\_estate\_land\_share \[<estate\_type> \[ <|> percent\]\]

_Prints estates (or crown) land shares_

print\_flags

_Prints global [flags](/Flag "Flag")_

print\_modifiers(file)

_Print gamestate modifiers to a file_  
The file will be in `\Documents\Paradox Interactive\Europa Universalis IV\`.

print\_prov\_flags \[<Prov ID>\]

_Prints province [flags](/Flag "Flag")_

PrintSynchStuff

_Prints random count and seed_

province\_modifier

_Show province modifier values._

reform \[<Target Province ID>\]

_Begin [reformation](/Reformation "Reformation") in the specified province ID_

reform\_desire \[\[<value>\]\]

_Will add reform desire (don't you dare)_

reformprogress \[Points to add\] \[Target tag <optional>\]

_Adds [Government reform](/Government_reform "Government reform") progress_ (Default is 500.)

refresh\_knowledge \[\]

_Will recalc bunch of stuff like neighbours, idea rules, etc._

refreshknowledgecount \[\]

_Refresh knowledge perf couner_

reinitchat \[\]

_Posts a CChatSyncAllCommand_

[![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/24px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization")

religious\_school \[School\] \[<Target Country tag> OPTIONAL\]

_Sets [religious school](/Religious_school "Religious school") for target country_  
The religious schools have the following identifier:

*   hanafi\_school
*   hanbali\_school
*   maliki\_school
*   shafii\_school
*   ismaili\_school
*   jafari\_school
*   zaidi\_school

reload \[file name\]

_Reloads the gui or lua file_

reload\_canals

_Reload the canal bitmaps_

reload\_heightmap

_Reloads the heightmap_

reload\_lakes

_Reloads the lakes_

reload\_map

_Reloads the map_

reload\_provincemap

_Reloads the provincemap_

reload\_straits

_Update strait vertex buffers_

reload\_treemap

_Reloads the treemap_

reloadfx \[Arguments: map/mapname/postfx or \*.fx filename\]

_Reloads the shader_

reloadinterface

_Reloads the entire interface_

reloadloc

_Reloads the localisation_

reloadtexture \[texture file name\]

_Reloads the specified texture_

reloadtradewinds

_Reloads trade winds_

remove\_cb \[<casus belli tag>\] \[<target country tag>\] \[<Actor Country tag> OPTIONAL\]

_Remove [casus belli](/Casus_belli "Casus belli") from target country_

remove\_claim \[<Province ID>\] \[<Country tag> OPTIONAL\]

_Remove [claim](/Claim "Claim")_

remove\_core \[<Province ID>\] \[<Country tag> OPTIONAL\]

_Remove [core](/Core "Core")_

remove\_country \[<Target Country Tag>\]

_Obliterate a country from the map_. All its provinces become uncolonized.

remove\_defender\_faith

_Removes the [defender of the Faith](/Defender_of_the_Faith "Defender of the Faith") for the players religion_

remove\_interest \[<Country tag>\]

_Removes specified country tag from your interest_

remove\_march \[<Target Country Tag>\] \[<Actor Country tag> OPTIONAL\]

Revokes [march](/March "March") status of the specified country (with its normal effects).

remove\_rival \[<Country tag>\]

Removes a [rival](/Rival "Rival").

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")

remove\_trait \[<personality tag>\]

_Remove [ruler personality](/Ruler_personality "Ruler personality")._

rendertype

_Reports what render backend is used_

repair \[<Country tag>\]

_Repairs all [ships](/Ship "Ship") of country_

reset\_economy \[\]

_Resets global economy statistics_

[![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/24px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations")

reset\_god

_Resets [personal deity](/Personal_deity "Personal deity")_

[![Conquest of Paradise.png](/images/thumb/3/31/Conquest_of_Paradise.png/24px-Conquest_of_Paradise.png)](/Conquest_of_Paradise "Conquest of Paradise")

reset\_migrate

_Resets the time you'll have to wait until [migration](/Migration "Migration") is allowed again._

reset\_powerspend \[\]

_Resets global powerspend statistics_

[![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/24px-Common_Sense.png)](/Common_Sense "Common Sense")

reshuffle\_seat\_bribes

_Will reshuffle all the seat [bribes](/Bribes "Bribes")_

revolt \[<Province ID>\]

_Starts a [Revolt](/Revolt "Revolt") in a province_

revolution\_target \[<CountryTag>\]

_Sets the [revolution target](/Revolution_target "Revolution target")._

rgb(rgb) \[<Amount>\]

_Prints desired amount of random color values to game.log_

run \[\]

_Runs effects in specified file_.  
Example: `run my_script.txt`  
By default looks in `\Documents\Paradox Interactive\Europa Universalis IV\` for files.  
For mods, the game will look in `\Documents\Paradox Interactive\Europa Universalis IV\mod\name_of_mod\`.

run\_commands

_Runs the specified file with list of console commands_.

runyear \[<year>\] \[<command filename>\]

_Runs command once we reach year_.

sailors \[<Amount>\] \[<Target Country tag> OPTIONAL\]

Adds [sailors](/Sailors "Sailors") (default value: 5000)

savegame

_Creates an savefile._

score

Score data dumped to game.log

selflearningai

_Enables/Disables Self-Learning AI_

set\_base\_manpower \[<province id>, <value>\]

Sets [base manpower](/Base_manpower "Base manpower") of province to value.

set\_base\_production \[<province id>, <value>\]

Sets [base production](/Base_production "Base production") of province to value.

set\_base\_tax \[<province id>, <value>\]

Sets [base tax](/Base_tax "Base tax") of province to value.

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")

set\_consort\_flag \[<Tag>\] \[<Flag>\]

Sets a [flag](/Flag "Flag") for a consort

set\_country\_flag \[<Tag>\] \[<Flag>\]

_Sets a country [flag](/Flag "Flag")_

set\_flag \[<Flag>\]

_Sets a global [flag](/Flag "Flag")_

set\_leader\_trait \[<personality>\]

_Set selected leader's personality trait_

set\_prov\_flag \[<Flag>\] \[<Province>\]

_Sets a [flag](/Flag "Flag") for a province_

setmissionaryprogress \[<ProvinceID>\] \[<Amount>\]

_Sets the [missionary](/Missionary "Missionary") progress for a province._

SetRandomCount

_Sets the randomcount to 0 or arg_

show\_ideas \[<Country tag>\]

[National ideas](/National_ideas "National ideas") of the specified country dumped to game.log

siege \[<Province ID>\]

_Wins the siege in the specified province_

smoothframelog

_Toggles smooth frame logging_

spawn \[<Province ID>\] \[<SubUnit Type>\]

_Spawns an unit in a province._ For example, "spawn 1 western\_medieval\_infantry" spawns a Latin Medieval Infantry in Stockholm. See the file names in the common/units folder for a complete list of <SubUnit Type>.

spawn\_all\_units \[<Animation state>\]

_Spawns all units in capital for all existing countries. Requires unit\_tester mod under Art/Test Resources enabled._

spawnactor \[<Actorname>\] \[<Province ID>\] \[<Animation> OPTIONAL\]

_Spawns an actor with an optional animation_

spectate(spectate)

_Goes into Spectator mode_

splendor \[<Amount>\] \[<Target Country tag> OPTIONAL\]

_Adds [splendor](/Splendor "Splendor") to the player_ (Default: 1000)

[![Emperor](/images/thumb/c/c5/Emperor.png/24px-Emperor.png)](/Emperor_(DLC) "Emperor")

spread\_revolution \[<province ID or tag>\]

_Spread the Revolution_

spritelevel \[<Sprite level>\]

_Sets a forced sprite level. Specify no argument to reset._

spynetwork \[<Target Country tag>\] \[<Amount>\]

_Adds [spy network](/Spy_network "Spy network") with target country_

stability \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

Changes the [stability](/Stability "Stability") of the specified country (to maximum without value)

startup\_screen

_Creates a new startup screen._

state \[<Province ID>\]

_Toggles [State](/State "State") for owner of region of province._

stats

Stats dumped to game.log

stop \[<YYYY.MM.DD>\]

_Pauses the game at a specified date_

surrender

_Surrender_

sword\_mana \[<AMOUNT> OPTIONAL\] \[<Country tag> OPTIONAL\]

_Get [military power](/Military_power "Military power")_ (default value: 999)

syntheticdawn \[<Target Tag> OPTIONAL\]

Specified country changes to [Synthetics](/Synthetics "Synthetics"). This country needs to have more than 10 provinces-

tag \[<Country tag>\]

_Switch tag to another country_

tech \[<AMOUNT>\]

Gets levels in all [technology](/Technology "Technology") types

test \[<test ID>\]

_Runs a code test_

test\_achievement \[<achievement>\]

_tests a specific [achievement](/Achievement "Achievement")_

test\_neighbour \[<Tag>\]

_Will tell you if target Tag counts as neighbour to your country_

testevent \[<Event ID>\] \[<Character ID>\]

_Tests an [event](/Event "Event") without triggering it_

texture\_usage

_Prints texture usage_ to memory.log

ti(debug\_ti)

_Toggles [Terra Incognita](/Terra_Incognita "Terra Incognita") on/off_

time

Displays the current time in the command box.

timer

_Prints out debug timing info_

timer\_dump

_Dumps debug timing info_ to logs

timer\_reset

_Resets debug timing_

timer\_restart

_Restarts (resets and starts) debug timing_

timer\_show

_Shows live timing data_

timer\_start

_Starts debug timing_

timer\_stop

_Stops debug timing_

touch\_test

_Testing touch_

[![Conquest of Paradise.png](/images/thumb/3/31/Conquest_of_Paradise.png/24px-Conquest_of_Paradise.png)](/Conquest_of_Paradise "Conquest of Paradise")

tribal\_development \[<province id>, <value>\]

_adds tribal development to the federation_ Note: the command always adds 1 adm/dip/mil tribal development to the current country if in a [Native Council](/Native_Council "Native Council"), province id and value arguments don't work

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/24px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

tributary \[<Tag>\]

_Make country a [Tributary](/Tributary "Tributary") State_

trust \[<Target Country tag>\] \[<Amount>\]

_Adds [trust](/Trust "Trust") with target country_

update\_loc \[localization tag\]

_Updates the localization tag file_

validateevents

_Validates all [events](/Events "Events") without triggering it_

vassalize \[<Target Country Tag>\] \[<Actor Country tag> OPTIONAL\]

_[Vassalize](/Vassalize "Vassalize") the specified tag_

verify\_loc

_Verifies the localization keys_  
Unlocalized keys are written to error.log.

version

_Prints the game version_

victorycard

_Force enables [victory cards](/Victory_cards "Victory cards") in singleplayer_

window(wnd) \[Arguments: open/close\] \[window gui name\]

_Opens or closes the specified window_

winwars

_Gives max [war score](/War_score "War score") in all wars for the country_

writetestentities

Writes test entities for all countries to local\_temp.log.

yesman

_Toggles AI positive responses_ (on: always accept; off: normal response)

[![Emperor](/images/thumb/c/c5/Emperor.png/24px-Emperor.png)](/Emperor_(DLC) "Emperor")

zeal \[<Amount>\] \[<Target Country Tag>\]

_Adds [revolutionary zeal](/Revolutionary_zeal "Revolutionary zeal") to a country_

zombie

_Zombie army debug on/off_  
On by default, when turned off, armies will be immediately stackwiped on losing a battle instead of doing a [shattered retreat](/Shattered_retreat "Shattered retreat").

Casus belli IDs\[[edit](/index.php?title=Console_commands&veaction=edit&section=3 "Edit section: Casus belli IDs") | [edit source](/index.php?title=Console_commands&action=edit&section=3 "Edit section: Casus belli IDs")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

For use with add\_cb and remove\_cb.

*   cb\_restore\_personal\_union – [Restoration of Union](/Restoration_of_Union "Restoration of Union")
*   cb\_defection – [Defected Province](/Casus_belli#Defected_Province "Casus belli")
*   cb\_loan\_cancelled – [Canceled Loan](/Casus_belli#Canceled_Loan "Casus belli")
*   cb\_spy\_discovered – [Discovered Spy](/Casus_belli#Discovered_Spy "Casus belli")
*   cb\_disloyal\_vassal – [Disloyal Vassal](/Casus_belli#Disloyal_Vassal "Casus belli")
*   cb\_hre\_attacked – [Imperial Liberation](/Imperial_Liberation "Imperial Liberation")
*   cb\_insult – [Diplomatic Insult](/Diplomatic_Insult "Diplomatic Insult")
*   cb\_dishonored\_call – [Dishonored Call](/Casus_belli#Dishonored_Call "Casus belli")
*   cb\_vassalize\_mission – [Subjugation](/Subjugation "Subjugation")
*   cb\_fabricated\_claims – [Obscure Documents](/Obscure_Documents "Obscure Documents")
*   cb\_religious\_conformance – [Religious Unity](/Casus_belli#Religious_Unity "Casus belli")
*   cb\_border\_war – [Border Friction](/Border_Friction "Border Friction")
*   cb\_trade\_war\_triggered – [Trade War](/Casus_belli#Trade_War "Casus belli")
*   cb\_trade\_conflict – [Trade Conflict](/Casus_belli#Trade_Conflict "Casus belli")
*   cb\_trade\_league\_conflict - [Trade Conflict](/Casus_belli#Trade_League_Conflict "Casus belli")
*   cb\_annex – [Annexation War](/Casus_belli#Annexation_War "Casus belli")
*   cb\_change\_government – [Government Form War](/Casus_belli#Government_Form_War "Casus belli")
*   cb\_humiliate – [Humiliate](/Casus_belli#Humiliate "Casus belli")
*   cb\_conquest – [Conquest](/Casus_belli#Conquest "Casus belli")
*   cb\_core – [Reconquest](/Reconquest "Reconquest")
*   cb\_independence\_war – [Independence](/Casus_belli#Independence "Casus belli")
*   cb\_colonial\_independance\_war – [Colonial Independence](/Casus_belli#Colonial_Independence "Casus belli")
*   cb\_nationalist – [Nationalism](/Casus_belli#Nationalism "Casus belli")
*   cb\_imperial – [Imperialism](/Imperialism "Imperialism")
*   cb\_war\_against\_the\_world - [War Against the World](/War_Against_the_World "War Against the World")
*   cb\_daimyo\_annex – [War for the Emperor](/War_for_the_Emperor "War for the Emperor")
*   cb\_independent\_daimyo\_annex – [War for the Emperor](/Casus_belli#Independent_Daimyo_Attacking_Japan "Casus belli")
*   cb\_shogun\_annex – [Annex Daimyo](/Casus_belli#Annex_Daimyo "Casus belli")
*   cb\_sengoku – [Sengoku](/Casus_belli#Sengoku "Casus belli")
*   cb\_revolutionary – [Revolutionary War](/Casus_belli#Revolutionary_War "Casus belli")
*   cb\_colonial – [Colonialism](/Casus_belli#Colonialism "Casus belli")
*   cb\_liberation – [Liberation](/Casus_belli#Liberation "Casus belli")
*   cb\_crusade – [Holy War](/Casus_belli#Holy_War "Casus belli")
*   cb\_defender\_of\_the\_faith – [Defender of the Faith](/Casus_belli#Defender_of_the_Faith "Casus belli")
*   cb\_heretic – [Cleansing of Heresy](/Cleansing_of_Heresy "Cleansing of Heresy")
*   cb\_excommunication – [Excommunicated Ruler](/Casus_belli#Excommunicated_Ruler "Casus belli")
*   cb\_trade\_war – [Trade Dispute](/Casus_belli#Trade_Dispute "Casus belli")
*   cb\_trade\_league\_dispute – [Trade League Dispute](/Casus_belli#Trade_League_Dispute "Casus belli")
*   cb\_imperial\_ban – [Imperial Ban](/Casus_belli#Imperial_Ban "Casus belli")
*   cb\_liberate\_elector – [Liberate Elector](/Casus_belli#Liberate_Elector "Casus belli")
*   cb\_super\_badboy – [Coalition](/Casus_belli#Coalition "Casus belli")
*   cb\_claim\_throne – [Claim on Throne](/Casus_belli#Claim_on_Throne "Casus belli")
*   cb\_horde\_vs\_civ – [Tribal Conquest](/Tribal_Conquest "Tribal Conquest")
*   cb\_tribal\_feud – [Tribal Feud](/Tribal_Feud "Tribal Feud")
*   cb\_revoke\_electorate – [Revoke Electorate](/Casus_belli#Revoke_Electorate "Casus belli")
*   cb\_privateers – [Trade Protection](/Casus_belli#Trade_Protection "Casus belli")
*   cb\_support\_rebels – [Support Rebels](/Casus_belli#Support_Rebels "Casus belli")
*   cb\_crush\_the\_revolution – [Crush the Revolution](/Casus_belli#Crush_the_Revolution "Casus belli")
*   cb\_spread\_the\_revolution – [Spread the Revolution](/Casus_belli#Spread_the_Revolution "Casus belli")
*   cb\_religious\_league – [Religious League](/Casus_belli#Religious_League "Casus belli")
*   cb\_flower\_wars – [Flower Wars](/Casus_belli#Flower_Wars "Casus belli")
*   cb\_maya\_expansion – [Maya Confederation](/Casus_belli#Maya_Confederation "Casus belli")
*   cb\_humiliate\_rotw – [Humiliate Rival](/Humiliate_Rival "Humiliate Rival")
*   cb\_chinese\_unification – [Unify China](/Unify_China "Unify China")
*   cb\_take\_mandate - [Take Mandate of Heaven](/Casus_belli#Take_Mandate_of_Heaven "Casus belli")
*   cb\_force\_migration – [Force Migration](/Casus_belli#Force_Migration "Casus belli")
*   cb\_forced\_break\_alliance – [Forced ally to break alliance](/Casus_belli#Forced_ally_to_break_alliance "Casus belli")
*   cb\_force\_tributary - [Force Tributary State](/Force_Tributary_State "Force Tributary State")
*   cb\_hundred\_years\_union - [Force Union](/index.php?title=Force_Union&action=edit&redlink=1 "Force Union (page does not exist)")
*   cb\_force\_join\_hre - [Imperial Realm War Superiority](/index.php?title=Imperial_Realm_War_Superiority&action=edit&redlink=1 "Imperial Realm War Superiority (page does not exist)")

List of events\[[edit](/index.php?title=Console_commands&veaction=edit&section=4 "Edit section: List of events") | [edit source](/index.php?title=Console_commands&action=edit&section=4 "Edit section: List of events")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

Event ID

Name of event

Event's effect

**700**

_[Election!](/Election_events#700 "Election events")_

Allows player to gain 1[![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") / 1[![Administrative power.png](/images/thumb/e/ef/Administrative_power.png/24px-Administrative_power.png)](/Administrative_power "Administrative power") / 1[![Diplomatic power.png](/images/thumb/d/da/Diplomatic_power.png/24px-Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") to the current leader (Will Replace Queen Regents and Regency Councils)

**862**

_[The New World Beckons!](/Colonization_events#The_New_World_Beckons.21 "Colonization events")_

Pick between a [![Conquistador](/images/thumb/9/91/Conquistador.png/28px-Conquistador.png)](/Military_leaders "Conquistador") Conquistador with 25 army tradition, or a 5-year bonus to settler chance and global settler increase (or both with Expansionist ruler)

**881**

_[Merchant arranges an expedition.](/Colonization_events#Merchant_arranges_an_expedition. "Colonization events")_

Gain [![Explorer](/images/thumb/c/ca/Explorer.png/28px-Explorer.png)](/Military_leaders "Explorer") Explorer with 20 naval tradition.

**2001**

_[The Protestant Reformation](/The_Protestant_Reformation "The Protestant Reformation")_

Starts the [![Protestantism](/images/thumb/0/0d/Protestant.png/24px-Protestant.png)](/Protestant "Protestant") protestant reformation and spawns a [![Center of reformation.png](/images/thumb/e/e4/Center_of_reformation.png/24px-Center_of_reformation.png)](/Center_of_reformation "Center of reformation") center of reformation in the capital.

**5056**

_[Diplomatic Insult](/Diplomatic_events#5056 "Diplomatic events")_

Get Diplomatic Insult CB on neighbor / +60 opinion to neighbors

**9469**

_[Lux Stella](/Dynastic_events#Lux_Stella "Dynastic events")_

gives choice between heir with at least a 6 in [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") / [![Administrative power.png](/images/thumb/e/ef/Administrative_power.png/24px-Administrative_power.png)](/Administrative_power "Administrative power") / [![Diplomatic power.png](/images/thumb/d/da/Diplomatic_power.png/24px-Diplomatic_power.png)](/Diplomatic_power "Diplomatic power")

**flavor\_pol.1**

_[The Commonwealth Navy](/Polish_events#The_Commonwealth_Navy "Polish events")_

*   gains [![Navy tradition.png](/images/c/cd/Navy_tradition.png)](/Navy_tradition "Navy tradition")**20** navy tradition.
*   starts the free construction of [![Heavy ship.png](/images/thumb/5/50/Heavy_ship.png/24px-Heavy_ship.png)](/Heavy_ship "Heavy ship") 5 heavy ships with [![Local shipbuilding time.png](/images/thumb/d/de/Local_shipbuilding_time.png/24px-Local_shipbuilding_time.png)](/Local_shipbuilding_time "Local shipbuilding time") **−90%** ship building time in a random owned coastal province.

**flavor\_sco.8**

_[The Glasgow Chamber of Commerce](/Scottish_events#The_Glasgow_Chamber_of_Commerce "Scottish events")_

[![Mercantilism.png](/images/thumb/0/05/Mercantilism.png/24px-Mercantilism.png)](/Mercantilism "Mercantilism")**+5%** mercantilism

**colonial.1 \[<Province ID>\]**

_[The \[empty\_neighbor\_target.GetAreaName\] Company](/Colonial_events#colonial.1 "Colonial events")_

A new colony with **200** settlers will appear in a random neighbor province and that province gets [![Local settler increase.png](/images/thumb/f/f6/Local_settler_increase.png/28px-Local_settler_increase.png)](/Local_settler_increase "Local settler increase") **+15** local settler increase

**colonial.12 \[<Province ID>\]**

_[The Call of the Hunt](/Colonial_events#The_Call_of_the_Hunt "Colonial events")_

Sets trade good to [![Fur.png](/images/thumb/0/00/Fur.png/24px-Fur.png)](/Fur "Fur")fur

**colonial.13 \[<Province ID>\]**

_[Fur Trade Dwindles](/Colonial_events#Fur_Trade_Dwindles "Colonial events")_

Sets trade good to [![Naval supplies.png](/images/thumb/f/f1/Naval_supplies.png/24px-Naval_supplies.png)](/Naval_supplies "Naval supplies")naval supplies / [![Grain.png](/images/thumb/6/66/Grain.png/24px-Grain.png)](/Grain "Grain")grain

**colonial.18 \[<Province ID>\]**

_[New World Coffee](/Colonial_events#New_World_Coffee "Colonial events")_

Sets trade good to [![Coffee.png](/images/thumb/e/e9/Coffee.png/24px-Coffee.png)](/Coffee "Coffee")coffee

**ideagroups.1**

_[New Traditions & Ambitions](/Idea_group_events#ideagroups.1 "Idea group events")_

Changes your national ideas to match your current country tag.

**ideagroups.606**

_[Improved Reputation](/Diplomatic_idea_group_events#ideagroups.606 "Diplomatic idea group events")_

Increase diplomatic reputation by 1 for 10 years.

**ideagroups.608**

_[Justify my War!](/Diplomatic_idea_group_events#ideagroups.608 "Diplomatic idea group events")_

"Justified Demands" modifier for 10 years, reducing AE by 5% and Unjustified Demands by 20%

**ideagroups.1801**

_[Our Cause is Just](/Influence_idea_group_events#ideagroups.1801 "Influence idea group events")_

Gives the "Just Causes" modifier for 10 years, reducing Aggressive Expansion by 20%

**culture\_religion\_events.21**

_[A Question of Faith](/Culture_and_religion_events#culture_religion_events.21 "Culture and religion events")_

Changes the state religion of the country to that of the ruler.

**culture\_religion\_events.22**

_[The Court of \[Root.Monarch.GetName\]](/Culture_and_religion_events#culture_religion_events.22 "Culture and religion events")_

Changes the primary culture of country to that of the ruler.

See also\[[edit](/index.php?title=Console_commands&veaction=edit&section=5 "Edit section: See also") | [edit source](/index.php?title=Console_commands&action=edit&section=5 "Edit section: See also")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   [List of provinces](/List_of_provinces "List of provinces") - Province IDs are used in many commands
*   [Country tags](/Countries#Country_descriptions_list "Countries") - Country tags are used in many commands
*   [Event ids](/Event_ids "Event ids") - Event IDs used for event and testevent commands

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Console\_commands&oldid=153701](https://eu4.paradoxwikis.com/index.php?title=Console_commands&oldid=153701)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.28](/Category:1.28 "Category:1.28")
*   [Interface](/Category:Interface "Category:Interface")
*   [Modding](/Category:Modding "Category:Modding")

Hidden category:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")