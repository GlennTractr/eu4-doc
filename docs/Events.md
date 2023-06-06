Events
======

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

This article is [timeless](/Category:Timeless "Category:Timeless") and should be accurate for any version of the game.

[![The Comet Sighted pulse event](/images/thumb/d/d9/CometSightedEvent.png/500px-CometSightedEvent.png)](/File:CometSightedEvent.png "The Comet Sighted pulse event")

_This page deals with **event mechanics**. For an overview of all events in the game, see [list of event lists](/List_of_event_lists "List of event lists")._  

**Events** occur throughout the course of play of [EU4](/EU4 "EU4"). There are a whole range of events in the game, which can result in positive, negative and mixed outcomes for a player's country. They take the form of a pop-up notification on the player's screen, which may present a player with a choice, or may simply inform the player of the consequences and require they acknowledge the event has occurred. After four months on the same date, the first choices gets autoselected, if the player did not choose an option.

Contents
--------

*   [1 Triggered-only events](#Triggered-only_events)
*   [2 Pulse events](#Pulse_events)
    *   [2.1 Date calculations for x-year pulses](#Date_calculations_for_x-year_pulses)
*   [3 Mean time to happen](#Mean_time_to_happen)
*   [4 See also](#See_also)

Triggered-only events\[[edit](/index.php?title=Events&veaction=edit&section=1 "Edit section: Triggered-only events") | [edit source](/index.php?title=Events&action=edit&section=1 "Edit section: Triggered-only events")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Triggered-only events are events that occur as a result of a nation's actions. The events can happen to that same nation or to another nation altogether. The needed trigger can be as simple as one nation choosing a particular option in an event or complex as taking over a certain province, thereby enabling an event at another nation. The events are usually fired immediately or within a short amount of time from being triggered.

Pulse events\[[edit](/index.php?title=Events&veaction=edit&section=2 "Edit section: Pulse events") | [edit source](/index.php?title=Events&action=edit&section=2 "Edit section: Pulse events")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Pulse events[\[1\]](#cite_note-1) are random events that happen within regular intervals of time. One of their main purposes is to provide interactions and a sense of randomness within the game. That being said, while the events are _bound_ to happen they are still based on player's actions; for example, for an [exploration event](/Exploration_events "Exploration events") to fire, the player needs to have an explorer/conquistador in the process of exploration.

The events are grouped together into different sets depending on their purpose (regular gameplay or mechanic related) and assigned weights within their respective sets. Each set is programmed to fire in regular time intervals. The time intervals range from yearly intervals and up-to 5 year intervals. It is important to note however that there are several same-year intervals and it does not mean they'll fire at the same date. When the interval arrives an event is picked at random from within the set and fired. Events with higher weights have higher chances to fire than the lower ones[\[2\]](#cite_note-2). Having certain modifiers, idea groups, provinces etc. can increase or decrease some events' weights. Most pulses also have a weight for getting no event at all.

#### Date calculations for x-year pulses\[[edit](/index.php?title=Events&veaction=edit&section=3 "Edit section: Date calculations for x-year pulses") | [edit source](/index.php?title=Events&action=edit&section=3 "Edit section: Date calculations for x-year pulses")\]

The 2 year pulses always happen in years which are divisible by 2 and the 3 year pulses happen in years divisible by 3. The years in which the 4 and 5 year pulses happen depend on the tag order id[\[3\]](#cite_note-3) of the country which gets the event. They happen if ![{\displaystyle ({\text{year}}-{\text{tag order id}})}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/7500634d0a56952c9da41a6930544dff952fd7f1) is divisible by 4 (5 for 5 year pulses). The day of the year on which the pulse happens for a country is calculated with the following formula(this applies to all x-year pulses):

![{\displaystyle ({\text{year}}+{\text{tag order id}}+{\text{pulse offset}}){\bmod {3}}65}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/1f823f4a718a1394600f6e46496a8009afbbd499)

Day 0 is January 1st and day 364 is December 31st.

A spreadsheet to compute the exact date of each pulse for any given tag can be found [here](https://docs.google.com/spreadsheets/d/17qKfZ6JTVROUcW3L115Ot-26ftfYKAW37ljwhQQre4k/edit?usp=sharing).

The pulse offset is different for each pulse:

Pulse

ExpandOffset

2 year pulse I

0

2 year pulse II

30

2 year pulse III

60

2 year pulse IV

90

2 year pulse V

120

3 year pulse I

94

3 year pulse II

124

3 year pulse III

154

3 year pulse IV

184

4 year pulse I

130

4 year pulse II _(unused)_

160

4 year pulse III _(unused)_

190

4 year pulse IV _(unused)_

220

5 year pulse I

167

5 year pulse II

197

5 year pulse III

227

5 year pulse IV _(only used for fail-safes/cleanups)_

257

Mean time to happen\[[edit](/index.php?title=Events&veaction=edit&section=4 "Edit section: Mean time to happen") | [edit source](/index.php?title=Events&action=edit&section=4 "Edit section: Mean time to happen")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[![](/images/3/3c/MTTH.png)](/File:MTTH.png)

The chance of an event with an MTTH of 365 days firing within x days.

Other events are not triggered but have a chance of happening at any time if their conditions are met. These events are controlled by a mean time to happen (MTTH).

This mechanic determines the time it takes for an event to trigger, measured in months. Yet since events are probabilistic, there is a small chance an event may happen very quickly, or possibly never at all during the game. For example, if an event had a MTTH of 120 months, it means that usually it would take around a decade for the event to trigger. Certain factors may increase or decrease MTTH for an event, such as country's leader's quality, national stability, and so on.

Assuming the probabilities are calculated in the same manner as [in EU3](https://forum.paradoxplaza.com/forum/index.php?threads/304046#post6927706 "forum:304046"), then despite the name MTTH is actually the [median](http://en.wikipedia.org/wiki/Median#Probability_distributions "wikipedia:Median") time, or half-life, for the event to trigger, i.e., the amount of time during which there is a 50% chance of the event occurring by that time, rather than the [mean](http://en.wikipedia.org/wiki/Mean#Mean_of_a_probability_distribution "wikipedia:Mean") (average).

The engine checks whether an event occurs every EVENT\_PROCESS\_OFFSET days, set to 20 at default. The chance per check is

![1 - 2^{-t_c / t_{1/2} }](https://en.wikipedia.org/api/rest_v1/media/math/render/png/a52d2e5d3ea85c779e2d42a46cd38712315e6287)

where ![t_c](https://en.wikipedia.org/api/rest_v1/media/math/render/png/53bbbb440d268a75fb79393f108922e0f7fa1878) is the EVENT\_PROCESS\_OFFSET and ![t_{1/2}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/912e84bd4334048bc94cecebe2b5c036ca1f0299) is the median.

This approximates the "ideal" probability

![1 - 2^{-t / t_{1/2}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/1539585494937c8638d5963421c894991bb4fc21)

where ![t](https://en.wikipedia.org/api/rest_v1/media/math/render/png/a69220aabe3435c83e275b3757b11461fcc261c1) is the amount of time that passes. The approximation is best for a long MTTH.

The median ![t_{1/2}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/912e84bd4334048bc94cecebe2b5c036ca1f0299) and mean ![\overline{t}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/64b3834d5791e79ce2facc0f775f1b50bd4d1ad1) are related by

![\overline{t} = \frac{t_{1/2}}{\ln 2} \approx 1.44 t_{1/2}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/b5777f07a27fa78ea67410d5f0cf4b35935c09ed)

In terms of the mean, the ideal probability is:

![1 - e^{-t / \overline{t}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/66a0ea612fc18b744ab17ef1f49b24c381d59fb1)

For a repeating event the number of occurrences within a given number of checks is given by a [binomial distribution](http://en.wikipedia.org/wiki/Binomial_distribution "wikipedia:Binomial distribution"), which may be approximated by a [Poisson distribution](http://en.wikipedia.org/wiki/Poisson_distribution "wikipedia:Poisson distribution") for a long MTTH.

See also\[[edit](/index.php?title=Events&veaction=edit&section=5 "Edit section: See also") | [edit source](/index.php?title=Events&action=edit&section=5 "Edit section: See also")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   [List of events files](/List_of_events_files "List of events files")

**

Mechanics

**

*   [Internal country management](javascript:void(0); "Internal country management")
*   [Economy](javascript:void(0); "Economy")
*   [External relations](javascript:void(0); "External relations")
*   [Meta](javascript:void(0); "Meta")
*   [Technology](javascript:void(0); "Technology")
*   [War](javascript:void(0); "War")

Concepts

[Corruption](/Corruption "Corruption") • [Governing capacity](/Governing_capacity "Governing capacity") • [Overextension](/Overextension "Overextension") • [Power projection](/Power_projection "Power projection") • [Rebellion](/Rebellion "Rebellion") • [Regions](/Regions "Regions") • [Stability](/Stability "Stability") • [States and territories](/States_and_territories "States and territories")

Court

[Advisors](/Advisors "Advisors") • [Consort](/Consort "Consort") • [Monarch power](/Monarch_power "Monarch power") • [National focus](/National_focus "National focus") • [Ruler](/Ruler "Ruler") • [Ruler personalities](/Ruler_personalities "Ruler personalities")

Estates and Factions

[Base estates](/Base_estates "Base estates") • [Cossacks estates](/Cossacks_estates "Cossacks estates") • [Dharma estates](/Dharma_estates "Dharma estates") • [Estates](/Estates "Estates") • [Factions](/Factions "Factions")

Events and Missions

[Decisions](/Decisions "Decisions") • [Disasters](/Disasters "Disasters") • Events • [List of decisions](/List_of_decision_lists "List of decision lists") • [Missions](/Missions "Missions")

Goverment

[Absolutism](/Absolutism "Absolutism") • [Culture](/Culture "Culture") • [Government](/Government "Government") • [Government rank](/Government#Government_rank "Government") • [Modifiers](/Modifiers "Modifiers") • [Policies](/Policies "Policies")

Province mechanics

[Autonomy](/Autonomy "Autonomy") • [Buildings](/Buildings "Buildings") • [Canal](/Canal "Canal") • [Capital](/Capital "Capital") • [Core](/Core "Core") • [Province](/Province "Province")

Religions

[Christian denominations](/Christian_denominations "Christian denominations") • [Eastern denominations](/Eastern_denominations "Eastern denominations") • [Muslim denominations](/Muslim_denominations "Muslim denominations") • [Other denominations](/Additional_denominations "Additional denominations") • [Pagan denominations](/Pagan_denominations "Pagan denominations") • [Religion](/Religion "Religion")

Specific governments

[Native council](/Native_council "Native council") • [Parliament](/Parliament "Parliament") • [Steppe hordes](/Steppe_hordes "Steppe hordes")

Colonisation

[Exploration](/Discovery "Discovery") • [Colonisation](/Colonisation "Colonisation") • [Colonial nation](/Colonial_nation "Colonial nation") • [Tariffs](/Tariffs "Tariffs") • [Trade company](/Trade_company "Trade company")

Economy

[Debase currency](/Debase_currency "Debase currency") • [Development](/Development "Development") • [Economy](/Economy "Economy") • [Privateering](/Privateering "Privateering") • [Production](/Production "Production") • [Raid coasts](/Raid_coasts "Raid coasts") • [Tax](/Tax "Tax")

Trade

[Trade](/Trade "Trade") • [Trade company](/Trade_company "Trade company") • [Trade goods](/Trade_goods "Trade goods") • [Trade nodes](/Trade_nodes "Trade nodes")

Diplomacy

[Diplomacy](/Diplomacy "Diplomacy") • [Diplomatic feedback](/Diplomatic_feedback "Diplomatic feedback") • [Envoy](/Envoy "Envoy") • [Espionage](/Espionage "Espionage")

Other

[Defender of the Faith](/Defender_of_the_Faith "Defender of the Faith") • [Great power](/Great_power "Great power") • [Hegemon](/Hegemon "Hegemon") • [Prestige](/Prestige "Prestige") • [Regions](/Regions "Regions")

Political structures

[Emperor of China](/Emperor_of_China "Emperor of China") • [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire") • [Papacy](/Papacy "Papacy")

Relations

[Personal union](/Personal_union "Personal union") • [Relations](/Relations "Relations") • [Subject nation](/Subject_nation "Subject nation")

Customization

[Nation designer](/Nation_designer "Nation designer") • [Random New World](/Random_New_World "Random New World")

Other

[Achievements](/Achievements "Achievements") • [Luck](/Luck "Luck") • [Score system](/Score_system "Score system")

Ideas and Policies

[Idea groups](/Idea_groups "Idea groups") • [National ideas](/National_ideas "National ideas") • [Policies](/Policies "Policies")

Ages and Institutions

[Ages](/Ages "Ages") • [Institutions](/Institutions "Institutions")

Innovativeness and Technology

[Innovativeness](/Innovativeness "Innovativeness") • [Technology](/Technology "Technology")

Declaring war

[Alliance](/Alliance "Alliance") • [Casus belli](/Casus_belli "Casus belli") • [Claim](/Claim "Claim") • [Peace](/Peace "Peace") • [War exhaustion](/War_exhaustion "War exhaustion") • [Warfare](/Warfare "Warfare")

Defense

[Fort](/Fort "Fort") • [Zone of control](/Zone_of_control "Zone of control")

Land warfare

[Army](/Army "Army") • [Condottieri](/Condottieri "Condottieri") • [Discipline](/Discipline "Discipline") • [Drilling](/Drilling "Drilling") • [Land units](/Land_units "Land units") • [Land warfare](/Land_warfare "Land warfare") • [Manpower](/Manpower "Manpower") • [Militarisation](/Militarisation "Militarisation") • [Mercenaries](/Mercenaries "Mercenaries") • [Professionalism](/Professionalism "Professionalism")

Naval warfare

[Flagship](/Flagship "Flagship") • [Naval blockade](/Naval_warfare#Blockading "Naval warfare") • [Naval doctrine](/Naval_doctrine "Naval doctrine") • [Naval units](/Naval_units "Naval units") • [Naval warfare](/Naval_warfare "Naval warfare") • [Navy](/Navy "Navy") • [Sailors](/Sailors "Sailors")

Other

[Force limit](/Force_limit "Force limit") • [Military leader](/Military_leader "Military leader") • [Military tradition](/Military_tradition "Military tradition")

1.  [↑](#cite_ref-1 "Jump up") For a list of Pulse events see [List of event lists](/List_of_event_lists "List of event lists").
2.  [↑](#cite_ref-2 "Jump up") The weight for no event and all weights of events who's triggers are fulfilled are added together to arrive at the total weight. The chance for each event is its weight divided by the total weight.
3.  [↑](#cite_ref-3 "Jump up") The tag order id of a country can be found in the first column of the [tag order list](/Countries#List_of_tags "Countries").

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Events&oldid=150858](https://eu4.paradoxwikis.com/index.php?title=Events&oldid=150858)"

[Categories](/Special:Categories "Special:Categories"):

*   [Timeless](/Category:Timeless "Category:Timeless")
*   [Events](/Category:Events "Category:Events")
*   [Realm](/Category:Realm "Category:Realm")