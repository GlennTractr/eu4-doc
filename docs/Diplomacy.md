Diplomacy
=========

From Europa Universalis 4 Wiki

(Redirected from [Reputation](/index.php?title=Reputation&redirect=no "Reputation"))

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

_**EU4 Beginner Tutorial #3 - Diplomacy**_. A complete beginner tutorial with _MordredViking_ looking at how diplomacy works and how you can utilize it to achieve the goals you have set for yourself.

[![](/images/thumb/2/29/UI_tab_diplomacy.png/330px-UI_tab_diplomacy.png)](/File:UI_tab_diplomacy.png)

[](/File:UI_tab_diplomacy.png "Enlarge")

The diplomacy interface, as the player nation, viewing France

**Diplomacy** in EU4 is the system that involves all relations and actions with other nations. [Relations](/Relations "Relations") can be increased through alliances, coalitions, common wars, common rivalries, decisions, events and having a diplomat improve relations. Relations are decreased by declaring war, being rivals, sending insults, having a different [religion](/Religion "Religion"), breaking/dishonoring an alliance, events and decisions. Diplomacy is a bilateral system and will affect relations on both sides of an agreement.

Reasons for a nation's opinion of another are displayed in tooltips wherever opinion is shown. The total is capped at **+200**/**−200**.

Diplomacy is conducted by [diplomats](/Envoys#Diplomats "Envoys"), and the diplomatic options available to diplomats depends on a country's [technology](/Technology "Technology") and [ideas](/Espionage_ideas "Espionage ideas"). Diplomatic options are split in seven categories: [alliance](#Alliance_actions), [influence](#Influence_actions), [relations](#Relations_actions), [dynastic](#Dynastic_actions), [covert](#Covert_actions), [economy](#Economy_actions) and [access](#Access_actions). Three additional categories are available to any nation that qualifies for them:

*   The emperor of the Holy Roman Empire has an extra category: [Emperor](/Holy_Roman_Empire#Powers_of_the_Emperor "Holy Roman Empire") actions.
*   The Papal controller also has an extra category: [Papal](/Papacy "Papacy") actions.
*   The leading 8 powers of the world have an extra category: [Great Power](/Great_power "Great power") actions.

The [declare war](/Warfare#Starting_a_war "Warfare") and [sue for peace](/Warfare#Sue_for_peace "Warfare") diplomatic options are found outside of these categories.

Contents
--------

*   [1 Diplomats](#Diplomats)
    *   [1.1 Gaining diplomats](#Gaining_diplomats)
*   [2 Diplomatic relations cap](#Diplomatic_relations_cap)
    *   [2.1 Increasing the diplomatic relations cap](#Increasing_the_diplomatic_relations_cap)
*   [3 Diplomatic reputation](#Diplomatic_reputation)
    *   [3.1 Effects](#Effects)
    *   [3.2 Gaining diplomatic reputation](#Gaining_diplomatic_reputation)
        *   [3.2.1 Modifiers](#Modifiers)
        *   [3.2.2 National ideas and traditions, idea groups and policies](#National_ideas_and_traditions.2C_idea_groups_and_policies)
*   [4 Diplomatic actions](#Diplomatic_actions)
    *   [4.1 War](#War)
    *   [4.2 Alliance actions](#Alliance_actions)
        *   [4.2.1 Form coalition against](#Form_coalition_against)
        *   [4.2.2 Offer alliance](#Offer_alliance)
        *   [4.2.3 Support independence](#Support_independence)
        *   [4.2.4 Offer condottieri](#Offer_condottieri)
        *   [4.2.5 Trade league](#Trade_league)
    *   [4.3 Influence actions](#Influence_actions)
        *   [4.3.1 Reign in Eyalet](#Reign_in_Eyalet)
        *   [4.3.2 Grant autonomy to Eyalet](#Grant_autonomy_to_Eyalet)
        *   [4.3.3 Promote to Eyalet](#Promote_to_Eyalet)
        *   [4.3.4 Call Eyalet to war](#Call_Eyalet_to_war)
        *   [4.3.5 Offer Indulgence](#Offer_Indulgence)
        *   [4.3.6 Enforce peace](#Enforce_peace)
        *   [4.3.7 Offer vassalization](#Offer_vassalization)
        *   [4.3.8 Break vassalization](#Break_vassalization)
        *   [4.3.9 Designate march](#Designate_march)
        *   [4.3.10 Revoke march](#Revoke_march)
        *   [4.3.11 Annex vassal](#Annex_vassal)
        *   [4.3.12 Integrate](#Integrate)
        *   [4.3.13 Proclaim guarantee](#Proclaim_guarantee)
        *   [4.3.14 Send warning](#Send_warning)
        *   [4.3.15 Threaten war](#Threaten_war)
    *   [4.4 Relations actions](#Relations_actions)
        *   [4.4.1 Improve relations](#Improve_relations)
        *   [4.4.2 Send an insult](#Send_an_insult)
            *   [4.4.2.1 Scornful insult](#Scornful_insult)
    *   [4.5 Dynastic actions](#Dynastic_actions)
        *   [4.5.1 Royal marriage](#Royal_marriage)
        *   [4.5.2 Break royal ties](#Break_royal_ties)
        *   [4.5.3 Claim throne](#Claim_throne)
        *   [4.5.4 Support heir](#Support_heir)
    *   [4.6 Covert actions](#Covert_actions)
    *   [4.7 Economy actions](#Economy_actions)
        *   [4.7.1 Purchase Modern Ideas](#Purchase_Modern_Ideas)
        *   [4.7.2 Sell Modern Ideas](#Sell_Modern_Ideas)
        *   [4.7.3 Transfer trade power](#Transfer_trade_power)
        *   [4.7.4 Steer trade power](#Steer_trade_power)
        *   [4.7.5 Issue embargo](#Issue_embargo)
        *   [4.7.6 Offer knowledge sharing](#Offer_knowledge_sharing)
        *   [4.7.7 Send gift](#Send_gift)
        *   [4.7.8 Loan offer](#Loan_offer)
        *   [4.7.9 Give subsidies](#Give_subsidies)
        *   [4.7.10 Sell province](#Sell_province)
        *   [4.7.11 Sell ships](#Sell_ships)
        *   [4.7.12 Request to share maps](#Request_to_share_maps)
        *   [4.7.13 Charter company](#Charter_company)
    *   [4.8 Access actions](#Access_actions)
        *   [4.8.1 Ask for military access](#Ask_for_military_access)
        *   [4.8.2 Offer military access](#Offer_military_access)
        *   [4.8.3 Ask for fleet basing rights](#Ask_for_fleet_basing_rights)
    *   [4.9 Favors](#Favors)
        *   [4.9.1 Earning favors](#Earning_favors)
        *   [4.9.2 Spending favors](#Spending_favors)
    *   [4.10 Papal actions](#Papal_actions)
    *   [4.11 Emperor actions](#Emperor_actions)
    *   [4.12 Great Power actions](#Great_Power_actions)
*   [5 Other](#Other)
    *   [5.1 Select rival](#Select_rival)
        *   [5.1.1 Historical Rivals](#Historical_Rivals)
    *   [5.2 Release subject](#Release_subject)
*   [6 Achievements](#Achievements)
*   [7 Footnotes](#Footnotes)

Diplomats\[[edit](/index.php?title=Diplomacy&veaction=edit&section=1 "Edit section: Diplomats") | [edit source](/index.php?title=Diplomacy&action=edit&section=1 "Edit section: Diplomats")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

A [![Diplomat.png](/images/thumb/e/ee/Diplomat.png/24px-Diplomat.png)](/File:Diplomat.png) [diplomat](/Envoy "Envoy") is required to perform most diplomatic actions. Some actions - improving relations, annexing a vassal, building up a spy network and counterespionage - will occupy a diplomat indefinitely or until completion of the task, unless the diplomat is manually recalled. Actions that will occupy a diplomat for a period of time will display a diplomat icon ([![Diplomat.png](/images/thumb/e/ee/Diplomat.png/24px-Diplomat.png)](/File:Diplomat.png)) on their button. Other actions are immediate.

When initiating a mission, a diplomat takes one day to reach the target country and begin its mission. After completing a mission, a diplomat will be unavailable while he travels back home, the time which scales based on the distance between one's capital and that of the target country. The precise travel speed of diplomats is 20 distance per day.

### Gaining diplomats\[[edit](/index.php?title=Diplomacy&veaction=edit&section=2 "Edit section: Gaining diplomats") | [edit source](/index.php?title=Diplomacy&action=edit&section=2 "Edit section: Gaining diplomats")\]

Each country has 2 [![Diplomat.png](/images/thumb/e/ee/Diplomat.png/24px-Diplomat.png)](/Diplomat "Diplomat") diplomats by default. Additional diplomats may be gained through the following triggers, ideas and policies:

[![Diplomat.png](/images/thumb/e/ee/Diplomat.png/24px-Diplomat.png)](/Diplomat "Diplomat")

Triggers

**+1**

*   As [![Kingdom rank](/images/thumb/0/01/Kingdom.png/24px-Kingdom.png)](/Government_rank "Kingdom rank") Kingdom or [![Empire rank](/images/thumb/9/9d/Empire.png/24px-Empire.png)](/Government_rank "Empire rank") Empire
*   As [Curia Controller](/Curia_Controller "Curia Controller")
*   As [Holy Roman Emperor](/Holy_Roman_Emperor "Holy Roman Emperor") after ‘[Institute Reichsregiment](/Institute_Reichsregiment "Institute Reichsregiment")’ reform
*   As [Emperor of China](/Emperor_of_China "Emperor of China") after ‘[Reform Seaban](/Reform_Seaban "Reform Seaban")’ reform
*   As [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/24px-Government_monarchy.png)](/Monarchy "Monarchy") [Shogunate](/Shogunate "Shogunate")
*   With [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament and ‘Expand the Diplomatic Corps’ as active issue for 10 years.
*   As [![Tengri](/images/thumb/9/9f/Tengri.png/24px-Tengri.png)](/Tengri "Tengri")Tengri country and [![Theravada.png](/images/thumb/5/52/Theravada.png/24px-Theravada.png)](/Theravada "Theravada")Theravada as [secondary religion](/Secondary_religion "Secondary religion")
*   As AI-controlled country (_reserved for short-term actions_)

[![Diplomat.png](/images/thumb/e/ee/Diplomat.png/24px-Diplomat.png)](/Diplomat "Diplomat")

Traditions

Ideas

Bonuses

ExpandPolicies

+2

—

*   Jolof idea 4: Ambassadors Abroad

—

—

+1

*   Aachen traditions
*   Ajami traditions
*   Hausan traditions
*   Kurdish traditions
*   Mori traditions
*   Samtskhe traditions
*   Sligonian traditions
*   Thüringian traditions
*   Westphalian traditions

*   Aristocratic idea 5: International Nobility
*   Diplomatic idea 1: Grand Banquets
*   Diplomatic idea 4: Benign Diplomats
*   Espionage idea 4: Agent Training
*   Expansion idea 5: Additional Diplomats
*   Aq Qoyunlu idea 5: Expansive Diplomacy
*   Assamese idea 7: Ahom Diplomacy
*   Asturian idea 3: Asturian Aristocracy
*   Baden idea 3: Active Diplomacy
*   Bosnian idea 6: Flexible Diplomacy
*   Butuan idea 7: Long Range Diplomacy
*   Chagatai idea 6: Scheming Nobility
*   Cherokee idea 7: Cherokee Emperor
*   Cilli idea 3: Political Maneuvering
*   Circassian idea 6: Steppe Diplomats
*   Gelre idea 1: Feudal Elevation
*   Iroquois idea 4: Keepers of the Fire
*   Kamilaroi idea 4: Dhulu
*   Karamanid idea 4: Seize the Opportunity
*   Krakowian idea 7: The Free City
*   Lorraine idea 4: Flexible Diplomacy
*   Luxembourg idea 7: Rivals On All Sides
*   Manx idea 1: The Stanleys
*   Medri Bahri idea 3: Diplomatic Flexibility
*   Moluccan idea 7: Pragmatic Diplomacy
*   Mushasha idea 6: Outward Pragmatism
*   Nanbu idea 3: Connection With Kyoto
*   Odoyev idea 2: Dynamic Diplomacy
*   Ragusan idea 3: Patronage
*   Rostov idea 6: Political Influence
*   Saxon idea 1: Albertine and Ernestine lines
*   Shawnee idea 6: Far-Reaching Relations
*   Shiba idea 3: Consolidation of the Kanrei Position
*   Shoni idea 3: Diplomacy through Tsushima
*   Siamese idea 2: Experienced Ambassadors
*   Siddi idea 5: Siddi Diplomacy
*   Trebizond idea 4: Komnenoi Princesses
*   Tyrone idea 5: Catholic Diplomacy
*   Utsunomiya idea 1: Fujiwara Descendant
*   Venetian idea 2: Printing Industry
*   Vijayanagar idea 6: Adroit Diplomacy
*   Yamana idea 1: Descendant of Nitta
*   Yemeni idea 7: Foreign Embassies

*   Antemoro ambition
*   Mapuche ambition
*   West African ambition

*   Administrative-Diplomatic: The Recordkeeping Act
*   Diplomatic-Aristocratic: The Tenures Abolition Act
*   Diplomatic-Defensive: The Diplomatic Defense Act
*   Espionage-Economic: The Foreign Support Act
*   Espionage-Offensive: The Black Chamber Act
*   Innovative-Espionage: The Espionage Act

Diplomatic relations cap\[[edit](/index.php?title=Diplomacy&veaction=edit&section=3 "Edit section: Diplomatic relations cap") | [edit source](/index.php?title=Diplomacy&action=edit&section=3 "Edit section: Diplomatic relations cap")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

The number of other countries a nation can have diplomatic agreements with is limited. Each relation over the cap costs 1[![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") diplomatic monarch point per month. The limit only counts for the _number of different countries_ with whom an agreement has been closed, not the number of agreements. Having multiple agreements with a single nation only counts as one diplomatic relation.

Agreements that count towards the cap include:

*   [![Alliance.png](/images/thumb/e/e8/Alliance.png/28px-Alliance.png)](/Alliance "Alliance")[Alliances](/Alliance "Alliance")
*   [![Royalmarriage.png](/images/thumb/2/22/Royalmarriage.png/28px-Royalmarriage.png)](/Royal_marriage "Royal marriage")[Royal marriages](/Royal_marriage "Royal marriage")
*   [Guarantees](/Guarantee "Guarantee"), but not the guarantees created from forcing the release of nations in peace deals
*   Having a [![Vassal.png](/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal")[vassal](/Vassal "Vassal") or [![Personal union.png](/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union")junior [personal union](/Personal_union "Personal union") partner
*   Receiving [military access](/Military_access "Military access")
*   [Supporting independence](#Support_independence)
*   Having a [client state](/Client_state "Client state")

Agreements that do _not_ count toward the cap include:

*   Granting [military access](/Military_access "Military access")
*   Receiving or granting [fleet basing rights](/Fleet_basing_rights "Fleet basing rights")
*   Receiving or granting [loans](/Economy#Loans_from_countries "Economy")
*   [![Coalition.png](/images/thumb/c/cc/Coalition.png/28px-Coalition.png)](/Coalition "Coalition")[Coalitions](/Coalition "Coalition")
*   [Federations](/Federations "Federations")
*   [Embargoes](/Embargo "Embargo")
*   [Warning](/Warning "Warning") other nations
*   [Giving subsidies](#Give_subsidies)
*   Having a [![Subject colony icon.png](/images/thumb/d/de/Subject_colony_icon.png/28px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation")[colonial subject](/Colonial_subject "Colonial subject").
*   War reparations
*   [Transferring trade power](#transfer_trade_power) (including enforced 'transfer trade' as part of a peace agreement)
*   Having vassals who are members of the empire as the Holy Roman Emperor, if [Revoke the Privilegia](/Holy_Roman_Empire#Revoke_the_Privilegia "Holy Roman Empire") has been passed.
*   Receiving conditional military access (e.g. within the HRE due to being in a war with the Emperor, or with someone else who has access)
*   Daimyo subjects of the Shogunate government type.

### Increasing the diplomatic relations cap\[[edit](/index.php?title=Diplomacy&veaction=edit&section=4 "Edit section: Increasing the diplomatic relations cap") | [edit source](/index.php?title=Diplomacy&action=edit&section=4 "Edit section: Increasing the diplomatic relations cap")\]

The base diplomatic relations cap is **4** diplomatic relations.[\[1\]](#cite_note-1) It is affected by the following:

[![Diplomatic relations.png](/images/thumb/5/58/Diplomatic_relations.png/24px-Diplomatic_relations.png)](/Diplomatic_relations "Diplomatic relations")

Conditions

**+1**

*   [![Imperial authority.png](/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") [Holy Roman Emperor](/Holy_Roman_Emperor "Holy Roman Emperor")
*    [![Nahuatl.png](/images/thumb/8/8c/Nahuatl.png/24px-Nahuatl.png)](/Nahuatl "Nahuatl") [Nahuatl](/Nahuatl "Nahuatl") after **Extend Pochteca Obligations** reform
*   [Player bonuses](/Player_bonuses "Player bonuses") (Very Easy difficulty)
*   [AI](/AI "AI") (_reserved for diplomacy with the player_)

**−1**

*   [![China temple.png](/images/thumb/5/5a/China_temple.png/24px-China_temple.png)](/Commanderies_of_the_Five_Armies "Commanderies of the Five Armies") Temples faction for [Celestial empire](/Celestial_empire "Celestial empire")
*   [Native council](/Native_council "Native council") government
*   [![Kingdom rank](/images/thumb/0/01/Kingdom.png/24px-Kingdom.png)](/Government_rank "Kingdom rank") [Tribal government](/Tribal_government "Tribal government") Kingdom

**−2**

[![Duchy rank](/images/thumb/5/5a/Duchy.png/24px-Duchy.png)](/Government_rank "Duchy rank") [Tribal government](/Tribal_government "Tribal government") Duchy

Ideas and policies:

[![Diplomatic relations.png](/images/thumb/5/58/Diplomatic_relations.png/24px-Diplomatic_relations.png)](/Diplomatic_relations "Diplomatic relations")

Traditions

Ideas

Bonuses

ExpandPolicies

+2

—

*   Larrakia idea 2: The Larrakia Federation
*   Provençal idea 5: Public Weal

*   Tongan ambition

*   Mercenary-Diplomatic: Diplomatic Arms Act

+1

*   Antemoro traditions
*   Brunswicker traditions
*   Burgundian traditions
*   Isshiki traditions
*   Jaunpuri traditions
*   Kiwi traditions
*   Ladakh traditions
*   Milanese traditions
*   Muscovite traditions
*   Nubian (minor) traditions
*   Palatine traditions
*   Savoyard traditions
*   Timurid traditions

*   Diplomatic idea 3: Cabinet
*   Influence idea 4: Buffer States
*   Asakura idea 1: Hidden Diplomacy
*   Austrian idea 6: Austrian Court
*   Berber idea 6: Dual Diplomacy
*   Bosnian idea 4: Italian Connections
*   Butuan idea 1: Indianized Society
*   California Native idea 3: Tribelets
*   Colognian idea 6: Shifting Alliances
*   Danziger idea 1: Danzig Law
*   Desmondian idea 5: Fierce Independence
*   English idea 3: Secretaries of State
*   French Ducal idea 6: French Enlightenment
*   German idea 6: Thurn und Taxis
*   Goslar idea 7: Joining the Leagues
*   Greek idea 6: Philhellenism
*   Hanoverian idea 6: Hanoverian Chancery
*   Hausan idea 1: Heirs of Bayajida
*   Hawaiian idea 4: Ohana
*   Herzegovinian idea 7: Shifting Allegiances
*   Hormuz idea 4: Far-reaching Diplomacy
*   Imagawa idea 5: Triple Alliance
*   Iroquoian Federation idea 1: Great Law of Peace
*   Italian (minor) idea 6: Italian Diplomacy
*   Knights Hospitaller idea 3: The Tongues of Knights
*   Krakowian idea 7: The Free City
*   Kurdish idea 4: Active Diplomacy
*   Lan Na idea 7: Dynastic Spread
*   Leinster idea 6: The Geraldine League
*   Lur idea 7: Foreign Trade Ties
*   Luxembourg idea 6: The Grand Duchy of Luxembourg
*   Lüneburger idea 6: Adroit Diplomacy
*   Manipur idea 6: Bengali Influence
*   Mantuan idea 6: Mantuan Royal Ties
*   Mazovian idea 3: Between Monk, Eagle and Purse
*   Mori idea 3: Diplomatic Intrigues
*   Muskogean Federation idea 3: Green Corn Ceremony
*   Orleanaise idea 7: French Language in All Courts
*   Polotskian idea 6: Diplomatic Initiative
*   Québécois idea 3: Relations with the First Nations People
*   Sardinian-Piedmontese idea 1: Diplomatic Flexibility
*   Satake idea 5: Eastern Coalitions
*   Saxon idea 5: Corpus Evangelicorum
*   Siouan Federation idea 2: Tioshpayes
*   Swabian City-State idea 4: Decapole
*   Swabian idea 4: The Swabian League
*   Swahili idea 7: Familiar Presence Abroad
*   Three Leagues idea 1: The League System
*   Thüringian idea 7: Expansive Marriage Policy
*   Transylvanian idea 7: Anti-Habsburg Policies
*   Tunisian idea 2: Dual Diplomacy
*   Uesugi idea 1: Kanto Kanrei
*   Ulmer idea 2: Schwäbischer Bund
*   Wurzburgian idea 1: Legacy of the Imperial Diets
*   Yamana idea 3: Mediate Succession Disputes

*   Aachen ambition
*   Ajami ambition
*   Imperial German ambition
*   Kikuchi ambition
*   Kuban ambition
*   Mossi ambition
*   Native ambition
*   Northeastern ambition

*   Humanist-Influence: The Foreign Aid Act
*   Indigenous-Influence: Loyalty to the Land
*   Influence-Economic: Vassal Obligations Act
*   Influence-Offensive: Foreign Conscription Centers

Certain events may also give a temporary increase in the relations cap.

Diplomatic reputation\[[edit](/index.php?title=Diplomacy&veaction=edit&section=5 "Edit section: Diplomatic reputation") | [edit source](/index.php?title=Diplomacy&action=edit&section=5 "Edit section: Diplomatic reputation")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

A nation's [![Diplomatic reputation.png](/images/thumb/2/21/Diplomatic_reputation.png/24px-Diplomatic_reputation.png)](/File:Diplomatic_reputation.png) diplomatic reputation represents its overall diplomatic ability and credibility. Diplomatic reputation is visible in the diplomacy window of the country screen.

### Effects\[[edit](/index.php?title=Diplomacy&veaction=edit&section=6 "Edit section: Effects") | [edit source](/index.php?title=Diplomacy&action=edit&section=6 "Edit section: Effects")\]

Diplomatic reputation positively affects both subject relations and relations with sovereign nations.

With subject nations, each point of diplomatic reputation gives:

*   **+5%** chance to inherit lesser partner in a personal union
*   **+1** [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") diplomatic power used per month while annexing vassals or junior partners
*   **−3%** to the [![Liberty desire.png](/images/thumb/f/fd/Liberty_desire.png/28px-Liberty_desire.png)](/Liberty_desire "Liberty desire") [liberty desire](/Subject_nation#Liberty_desire "Subject nation") of all subject nations

With other countries, each point of diplomatic reputation gives the following bonuses when accepting diplomatic proposals:

Action

Bonus

Offer [Alliance](/Alliance "Alliance")

5

Offensive Call to Arms

5

[Royal Marriage](/Royal_Marriage "Royal Marriage")

5

Offer [Vassalization](/Vassalization "Vassalization")

3

[Transfer Trade Power](#Transfer_trade_power)

3

[Ask for Military Access](#Ask_for_military_access)

3

[Ask for fleet basing rights](#Ask_for_fleet_basing_rights)

3

[Request to share maps](#Request_to_share_maps)

5

[Demand unlawful territory](/Demand_unlawful_territory "Demand unlawful territory")

3

[Grant free city status](/Holy_Roman_Empire#Grant_Free_City_Status "Holy Roman Empire")

3

Increasing diplomatic reputation also improves:

*   the country's score in elections for the Holy Roman Emperor.
*   [![Res Publica.png](/images/thumb/b/b5/Res_Publica.png/28px-Res_Publica.png)](/Res_Publica "Res Publica") the chance that the country's candidate for the heir of an [elective monarchy](/Elective_monarchy "Elective monarchy") will gain points while being supported.

### Gaining diplomatic reputation\[[edit](/index.php?title=Diplomacy&veaction=edit&section=7 "Edit section: Gaining diplomatic reputation") | [edit source](/index.php?title=Diplomacy&action=edit&section=7 "Edit section: Gaining diplomatic reputation")\]

Diplomatic reputation can be increased by completing certain missions, as well as by the following modifiers and ideas:

#### Modifiers\[[edit](/index.php?title=Diplomacy&veaction=edit&section=8 "Edit section: Modifiers") | [edit source](/index.php?title=Diplomacy&action=edit&section=8 "Edit section: Modifiers")\]

*   [![Legitimacy.png](/images/2/25/Legitimacy.png)](/Legitimacy "Legitimacy") [Legitimacy](/Legitimacy "Legitimacy"): **−1** at **0** legitimacy to **+1** at **100** legitimacy
*   [![Overextension.png](/images/0/0b/Overextension.png)](/Overextension "Overextension") [Overextension](/Overextension "Overextension"): **−2** per 100%
*   Trading in [![Ivory.png](/images/thumb/5/55/Ivory.png/28px-Ivory.png)](/Ivory "Ivory") Ivory: **+2**
*   [![Advisor Statesman.png](/images/thumb/8/8d/Advisor_Statesman.png/24px-Advisor_Statesman.png)](/Statesman "Statesman") Statesman advisor: **+1**
*   Subjugation of the Papacy ([triggered modifier](/Triggered_modifier "Triggered modifier"): Catholic nation with the Papal States as subject, other than Italy or (after revoking the Privilegia and if the Pope is a member) the Empire/Emperor): **−2**
*   The Occupation of Rome (triggered modifier: Catholic nation other than Italy, the unified HRE or the Papal States owning Rome): **−1**
*   [![Imperial authority.png](/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") Being a member state of the HRE: **+1** (except the emperor)
*   [![Imperial authority.png](/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") [Institute Reichsregiment](/Holy_Roman_Empire#Institute_Reichsregiment "Holy Roman Empire") (HRE reform): **+1** for the Emperor
*   [![Imperial authority.png](/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") [Enact Gemeiner Pfennig](/Holy_Roman_Empire#Enact_Gemeiner_Pfennig "Holy Roman Empire") (HRE reform): **+1** for non-emperor HRE member
*   [![Hinduism](/images/thumb/1/1a/Hinduism.png/28px-Hinduism.png)](/Hindu "Hindu")[Hindu](/Hindu "Hindu") state with [![Ganesha.png](/images/thumb/8/8b/Ganesha.png/28px-Ganesha.png)](/Ganesha "Ganesha")[Ganesha](/Ganesha "Ganesha") as patron deity: **+1**
*   [![Buddhism.png](/images/thumb/3/3f/Buddhism.png/28px-Buddhism.png)](/Buddhist "Buddhist")[Buddhist](/Buddhist "Buddhist") state with balanced karma: **+2**
*   [![Buddhism.png](/images/thumb/3/3f/Buddhism.png/28px-Buddhism.png)](/Buddhist "Buddhist")[Buddhist](/Buddhist "Buddhist") state with high karma: **+1**
*   [![Catholicism](/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") [Catholic](/Catholic "Catholic") state with [Papal Influence](/Papacy#Papal_Influence "Papacy") spent on the "_Send papal legate_" option: **+1** for 20 years
*   [![Reformed.png](/images/thumb/3/3e/Reformed.png/28px-Reformed.png)](/Reformed "Reformed")[Reformed](/Reformed "Reformed") state with stability focus: **+1**
*   [![Tengri](/images/thumb/9/9f/Tengri.png/28px-Tengri.png)](/Tengri "Tengri")[Tengri](/Tengri "Tengri") state with Catholic syncretic faith: **+1**
*   [![Fetishist](/images/thumb/8/8d/Fetishist.png/28px-Fetishist.png)](/Fetishist "Fetishist") [Fetishist](/Fetishist "Fetishist") state: **+1**
*   [![Ab austria rep.png](/images/thumb/d/d8/Ab_austria_rep.png/28px-Ab_austria_rep.png)](/File:Ab_austria_rep.png) Austrian Diplomacy [Splendor](/Splendor "Splendor") ability during [![Age of Revolutions.png](/images/thumb/5/59/Age_of_Revolutions.png/24px-Age_of_Revolutions.png)](/Age_of_Revolutions "Age of Revolutions") Age of Revolutions (available only to [![Flag of Austria](/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") or [![Flag of Holy Roman Empire](/images/thumb/e/ee/Holy_Roman_Empire.png/20px-Holy_Roman_Empire.png)](/Holy_Roman_Empire "Holy Roman Empire") [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")): **+5**
*   Annexed Vassals: **−3** for 10 years
*   Dishonored alliance: **−1** for 5 years
*   [![China eunuch.png](/images/thumb/5/58/China_eunuch.png/28px-China_eunuch.png)](/Factions#Celestial_empire "Factions#Celestial empire") 'Offices of Maritime Trade' [faction](/Factions#Celestial_empire "Factions") of the [Celestial Empire](/Government#Unique_monarchy_types "Government") government: **+1**
*   [![Jacobins.png](/images/thumb/d/d7/Jacobins.png/28px-Jacobins.png)](/Factions#Revolutionary_republics "Factions#Revolutionary republics") 'The Jacobins' [faction](/Factions#Revolutionary_republics "Factions") of the [Revolutionary Republic](/Government#Republics "Government") government: **−2**
*   [![Imperials.png](/images/thumb/b/b2/Imperials.png/28px-Imperials.png)](/Factions#Revolutionary_republics "Factions#Revolutionary republics") 'The Imperials' [faction](/Factions#Revolutionary_republics "Factions") of the [Revolutionary Republic](/Government#Republics "Government") government: **+1**
*   [![Government tribal.png](/images/thumb/a/a5/Government_tribal.png/28px-Government_tribal.png)](/Tribal_government "Tribal government") [Native](/Native_council "Native council") diplomatic idea 2: Smoke Ceremonies: **+1**
*   [![Diplomatic idea group.png](/images/thumb/3/36/Diplomatic_idea_group.png/28px-Diplomatic_idea_group.png)](/Diplomatic_ideas "Diplomatic ideas") Diplomatic ideas [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event ['Improved Reputation'](/Diplomatic_idea_group_events#Improved_Reputation "Diplomatic idea group events") modifier: **+1** for 10 years
*   [![Diplomatic idea group.png](/images/thumb/3/36/Diplomatic_idea_group.png/28px-Diplomatic_idea_group.png)](/Diplomatic_ideas "Diplomatic ideas") Diplomatic ideas [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event ['Babbling buffoons'](/Diplomatic_idea_group_events#Babbling_buffoons "Diplomatic idea group events") modifier: **−1** for 10 years
*   [![Expansion idea group.png](/images/thumb/7/73/Expansion_idea_group.png/28px-Expansion_idea_group.png)](/Expansion_ideas "Expansion ideas") Expansion idea [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event ['Enhanced Reputation'](/Expansion_idea_group_events#Enhanced_Reputation "Expansion idea group events") modifier: **+1** for 10 years
*   [![Expansion idea group.png](/images/thumb/7/73/Expansion_idea_group.png/28px-Expansion_idea_group.png)](/Expansion_ideas "Expansion ideas") Expansion idea [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event ['Diplomatic Faux Pas'](/Expansion_idea_group_events#Diplomatic_Faux_Pas "Expansion idea group events") modifier: **−1** for 10 years
*   [![Influence idea group.png](/images/thumb/4/43/Influence_idea_group.png/28px-Influence_idea_group.png)](/Influence_ideas "Influence ideas") Influence idea [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event ['Popular Noble'](/Influence_idea_group_events#Popular_Noble "Influence idea group events") modifier: **+1** for 10 years
*   [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event")[Reichshofrat](/Austrian_events#Reichshofrat "Austrian events") [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event for [![Flag of Austria](/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria"): **+1** for the rest of the campaign
*   [![Internal Conflicts.png](/images/thumb/7/7b/Internal_Conflicts.png/28px-Internal_Conflicts.png)](/Internal_Conflicts "Internal Conflicts") Internal Conflicts [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event [National Instability](/Internal_Conflicts#National_Instability "Internal Conflicts"): **−5** for 10 years
*   [![Advisor Diplomat.png](/images/thumb/3/3d/Advisor_Diplomat.png/28px-Advisor_Diplomat.png)](/File:Advisor_Diplomat.png) Diplomat advisor [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event [Excellent Diplomacy](/Advisor-related_events#Excellent_Diplomacy "Advisor-related events"): **+1** for 10 years
*   [![Become Defender of the Faith.png](/images/thumb/0/0f/Become_Defender_of_the_Faith.png/28px-Become_Defender_of_the_Faith.png)](/Defender_of_the_faith "Defender of the faith") Defender of the Faith [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") event '[Rise of the \[Root.Religion.GetName\] Faith](/Defender_of_the_Faith_events#dotf.9 "Defender of the Faith events")' for [![Ibadi Islam](/images/thumb/0/02/Ibadi.png/28px-Ibadi.png)](/Ibadi "Ibadi") Ibadi or [![Shiite Islam](/images/thumb/5/5c/Shiite.png/28px-Shiite.png)](/Shiite "Shiite") Shia nations at [![Become Defender of the Faith.png](/images/thumb/0/0f/Become_Defender_of_the_Faith.png/28px-Become_Defender_of_the_Faith.png)](/Defender_of_the_faith "Defender of the faith") Defender of the Faith tier 4 or higher: **+1** for the rest of the campaign
*   Holding [![Great project alhambra.png](/images/thumb/c/c3/Great_project_alhambra.png/48px-Great_project_alhambra.png)](/File:Great_project_alhambra.png) [Alhambra](/Alhambra "Alhambra") at [![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) "Significant" level or better: **+1**
*   Holding [![Great project kanbawzathadi palace.png](/images/thumb/b/bf/Great_project_kanbawzathadi_palace.png/48px-Great_project_kanbawzathadi_palace.png)](/File:Great_project_kanbawzathadi_palace.png) [Kanbawzathadi Palace](/Kanbawzathadi_Palace "Kanbawzathadi Palace"): **+1**
*   Holding [![Great project petra.png](/images/thumb/2/2f/Great_project_petra.png/48px-Great_project_petra.png)](/File:Great_project_petra.png) [Petra](/Petra "Petra") while meeting its culture requirements: **+1** (**+2** at [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) "Magnificent" level)

#### National ideas and traditions, idea groups and policies\[[edit](/index.php?title=Diplomacy&veaction=edit&section=9 "Edit section: National ideas and traditions, idea groups and policies") | [edit source](/index.php?title=Diplomacy&action=edit&section=9 "Edit section: National ideas and traditions, idea groups and policies")\]

[![Diplomatic reputation.png](/images/thumb/2/21/Diplomatic_reputation.png/24px-Diplomatic_reputation.png)](/Diplomatic_reputation "Diplomatic reputation")

Traditions

Ideas

Bonuses

ExpandPolicies

+2

*   Holy Roman traditions
*   Siamese traditions
*   Tongan traditions

*   Diplomatic idea 5: Experienced Diplomats
*   Influence idea 5: Diplomatic Influence
*   Aachen idea 7: Congresses of Aachen
*   Austrian idea 4: Habsburg Dominance
*   Jerusalem idea 7: Cosmopolitan Nobility
*   Kiwi idea 7: Pokarekare Ana
*   Larrakia idea 6: Larrakia Hospitality
*   Roman idea 2: Legacy of Rome

—

—

+1

*   Ansbach traditions
*   Cilli traditions
*   Date traditions
*   Delhian traditions
*   Eora traditions
*   French traditions
*   Goslar traditions
*   Hessian traditions
*   Iroquoian traditions
*   Iroquois traditions
*   Navarran traditions
*   Novgorodian traditions
*   Odoyev traditions
*   Papal traditions
*   Provençal traditions
*   Rajput traditions
*   Ryukyuan traditions
*   Silesian traditions
*   Sukhothai traditions
*   Yamana traditions

*   Afghan idea 4: Afghan Diaspora
*   Ajami idea 4: Persian Language and Court Culture
*   Antemoro idea 4: Ombiasa
*   Arakanese idea 5: Buddhist Sultans
*   Arawak idea 6: Enemy Of My Enemy
*   Armenian idea 3: Border Nation
*   Athenian idea 3: Athenian Pragmatism
*   Ava idea 6: Keep the Shan in Line
*   Ayutthayan idea 3: Promotion of Trading links
*   Bahmani idea 5: Takht-e-Firoza
*   Barbary Corsair idea 4: Mazmorras
*   Bayreuther idea 1: Hohenzollern Margrave
*   Berg idea 4: The Seat of the Electorate
*   Betsimisaraka idea 7: European Diplomacy
*   Brandenburg idea 5: Seat of the Old Emperors
*   Bremen idea 1: Lex Saxonum
*   Breton idea 6: League of the Public Weal
*   Bruneian idea 3: Bruneian Diplomacy
*   Brunswicker idea 1: The Welfian Dynasty
*   Butuan idea 4: Butuan Goldwork
*   Castilian idea 5: Infantas
*   Chachapoyan idea 4: Women Diplomacy
*   Chiba idea 1: Taira Lineage
*   Chinese idea 7: Middle Kingdom
*   Clevian idea 4: Strategic Marriages
*   Creek idea 6: Muscogee Neutrality
*   Cypriot idea 4: Lusignan Diplomacy
*   Deccani idea 6: Jewels of the Nizams
*   Dhundhari idea 2: Seek the Protection of Great Powers
*   Dortmund idea 4: The Emperor's Favorite
*   Estonian idea 6: Estophilia
*   Ethiopian idea 4: Diplomatic Demeanor
*   Ferraran idea 4: Margraves of Este
*   Frankfurter idea 2: Seat of Imperial Elections and Coronations
*   Genevan idea 2: Neutral Grounds
*   Georgian idea 7: Georgian Embassies
*   German idea 3: Reichskreis
*   Great Shun idea 2: The Dashing King
*   Greek idea 6: Philhellenism
*   Gujarati Princedom idea 4: Rajput Dynasties
*   Herzegovinian idea 4: Accommodation with the Ottoman Turks
*   Holstein idea 2: Between a Kingdom and the Empire
*   Hormuz idea 4: Far-reaching Diplomacy
*   Huron idea 5: Missionary Welcome
*   Isshiki idea 3: Bridge of Heaven
*   Jolof idea 1: Legacy of Ndiadiane Ndiaye
*   K'iche idea 4: The Ball Game
*   Khorasani idea 1: Land of the Rising Sun
*   Kievan idea 2: Heritage of the Rus'
*   Kildarean idea 1: Lords Deputy
*   Kilwan idea 3: The Deal with King Almuli
*   Kitabatake idea 3: Supporters of the Emperor
*   Kongo idea 4: Diplomacy With European Monarchs
*   Lanfang idea 3: Careful Diplomacy
*   Latin idea 7: Frankokratia
*   Ligori idea 1: Autonomous Subject
*   Liège idea 5: The Prince-Bishop's Palace
*   Luban idea 7: Prestige of the Mulopwe
*   Luxembourg idea 1: Imperial Legacy
*   Lüneburger idea 2: The Welfian Dynasty
*   Malaccan idea 3: Malaccan Hegemony
*   Manipur idea 7: Far-Reaching Diplomacy
*   Mantuan idea 1: Free Imperial City of Mantua
*   Mapuche idea 6: Peace Parliaments
*   Maravi idea 2: Mlira Cult
*   Meath idea 2: Foreign Nationals
*   Mesoamerican idea 3: The Ball Game
*   Montferrat idea 1: Cousins to Kings and Emperors
*   Moravian idea 1: Margraviate of Moravia
*   Muscovite idea 7: Descendants of Byzantine Emperors
*   Muskogean Federation idea 6: Red and White Towns
*   Mysorean idea 7: Dynamic Diplomacy
*   Münster idea 4: Cities of Peace
*   Nepali idea 1: The Divya Upadesh
*   Northeastern Woodlands idea 4: Wolf Clan
*   Ormond idea 2: The Courts of Europe
*   Ouchi idea 1: Descendant of Baekje
*   Palatinate idea 1: Imperial Vicar and Archsteward
*   Pegu idea 7: Mon Diaspora
*   Plains Native idea 4: Peaceful People
*   Rigan idea 5: Free City of Riga
*   Saxon idea 3: The Zwinger
*   Shoni idea 1: Vice-Minister of Dazai-fu
*   Sinhalese idea 4: Centre of Learning
*   So idea 5: Tough Negotiators
*   Sulu idea 3: Across the Sulu Sea
*   Swahili idea 7: Familiar Presence Abroad
*   Theodoro idea 3: Russian Aristocracy
*   Thomondian idea 1: Fierce Rivalry
*   Three Leagues idea 3: The Grey League
*   Tibetan idea 5: Potala Palace
*   Trebizond idea 4: Komnenoi Princesses
*   Ulster idea 3: Civilist of the Irishry
*   Urbinate idea 5: The Book of the Courtier
*   Vindhyan idea 1: Rajput Connections
*   Wallachian idea 1: Cunning Diplomacy
*   West Indies idea 6: Interconnected Relations
*   Wurzburgian idea 2: Duke in Franconia
*   Yarkandi idea 3: Tarikh-i-Rashidi
*   Yaroslavlyian idea 2: Third Option

*   Assamese ambition
*   Epirote ambition
*   Federation ambitions
*   Israeli ambition
*   Medri Bahri ambition
*   Nuremberger ambition
*   Pisan ambition
*   Rostov ambition
*   Sadiyan ambition
*   Tirhuti ambition

*   Diplomatic-Expansion: Commercial Embassies
*   Diplomatic-Offensive: The Underhanded Diplomacy Act
*   Diplomatic-Quality: Professional Diplomatic Corps
*   Diplomatic-Quantity: The Pen Relies on the Sword Act
*   Divine-Diplomatic: Faith Advisors
*   Humanist-Influence: The Foreign Aid Act
*   Indigenous-Diplomatic: Appeal to the Old Powers
*   Infrastructure-Diplomatic: Smooth Integration Act
*   Innovative-Diplomatic: The Diplomatic Cooperation

Diplomatic actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=10 "Edit section: Diplomatic actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=10 "Edit section: Diplomatic actions")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### War\[[edit](/index.php?title=Diplomacy&veaction=edit&section=11 "Edit section: War") | [edit source](/index.php?title=Diplomacy&action=edit&section=11 "Edit section: War")\]

_Main article: [Warfare](/Warfare "Warfare")_  

Declaring [war](/War "War") initiates a military conquest against the target country. A [casus belli](/Casus_belli "Casus belli") can be selected and the allies of both sides are shown in the declare war screen. Winning [battles](/Battle "Battle"), achieving the [wargoal](/Wargoal "Wargoal"), and occupying provinces accumulates [![War score.png](/images/thumb/b/b3/War_score.png/28px-War_score.png)](/War_score "War score")[war score](/War_score "War score") for both parties, by which [peace terms](/Peace_terms "Peace terms") may be agreed upon. At war a country can offer a peace deal ([sue for peace](/Sue_for_peace "Sue for peace")) or an [unconditional surrender](/Unconditional_surrender "Unconditional surrender").

### Alliance actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=12 "Edit section: Alliance actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=12 "Edit section: Alliance actions")\]

#### Form coalition against\[[edit](/index.php?title=Diplomacy&veaction=edit&section=13 "Edit section: Form coalition against") | [edit source](/index.php?title=Diplomacy&action=edit&section=13 "Edit section: Form coalition against")\]

_Main article: [Alliance#Coalition](/Alliance#Coalition "Alliance")_  

A [![Coalition.png](/images/thumb/c/cc/Coalition.png/24px-Coalition.png)](/Coalition "Coalition") [coalition](/Coalition "Coalition") is an alliance of nations who have bonded together against a common enemy because of that enemy's very high [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") [aggressive expansion](/Aggressive_expansion "Aggressive expansion"). Coalitions members will automatically be offensively and defensively called to arms in any direct war between a coalition member and the coalition target.

#### Offer alliance\[[edit](/index.php?title=Diplomacy&veaction=edit&section=14 "Edit section: Offer alliance") | [edit source](/index.php?title=Diplomacy&action=edit&section=14 "Edit section: Offer alliance")\]

_Main article: [Alliance](/Alliance "Alliance")_  

An [![Alliance.png](/images/thumb/e/e8/Alliance.png/24px-Alliance.png)](/Alliance "Alliance") [alliance](/Alliance "Alliance") is a military agreement of mutual support in wars between two nations. The strength of an alliance is based on [trust](/Trust "Trust") and [favors](/Favors "Favors") with the alliance partner.

#### Support independence\[[edit](/index.php?title=Diplomacy&veaction=edit&section=15 "Edit section: Support independence") | [edit source](/index.php?title=Diplomacy&action=edit&section=15 "Edit section: Support independence")\]

[![Conquest of Paradise.png](/images/thumb/3/31/Conquest_of_Paradise.png/28px-Conquest_of_Paradise.png)](/Conquest_of_Paradise "Conquest of Paradise")[![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado")

Available only with the [Conquest of Paradise](/Conquest_of_Paradise "Conquest of Paradise") DLC _or_ the [El Dorado](/El_Dorado "El Dorado") DLC enabled.

Nations may support the independence of a nation if the target nation is a subject nation and has a [![Liberty desire.png](/images/thumb/f/fd/Liberty_desire.png/28px-Liberty_desire.png)](/Liberty_desire "Liberty desire")[liberty desire](/Liberty_desire "Liberty desire") of over **50%**. If the target nation declares a war of independence, all nations supporting its independence will automatically ally the target nation and join the war against the former overlord of the now (temporarily) independent nation.

#### Offer condottieri\[[edit](/index.php?title=Diplomacy&veaction=edit&section=16 "Edit section: Offer condottieri") | [edit source](/index.php?title=Diplomacy&action=edit&section=16 "Edit section: Offer condottieri")\]

[![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum")

Available only with the [Mare Nostrum](/Mare_Nostrum "Mare Nostrum") DLC enabled.

_Main article: [Condottieri](/Condottieri "Condottieri")_  

A nation may rent out their armies to another nation in exchange for payment, while maintaining manual control of the army. A maximum of 20 regiments can be rented out simultaneously.

#### Trade league\[[edit](/index.php?title=Diplomacy&veaction=edit&section=17 "Edit section: Trade league") | [edit source](/index.php?title=Diplomacy&action=edit&section=17 "Edit section: Trade league")\]

[![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum")

Available only with the [Mare Nostrum](/Mare_Nostrum "Mare Nostrum") DLC enabled.

_Main article: [Trade league](/Trade_league "Trade league")_  

Trade leagues are a group of small countries banded together to boost trade and provide defensive protection to each other. Only single province countries can join a trade league. A trade league must be lead by a [Merchant republic](/Merchant_republic "Merchant republic") or [Veche republic](/Veche_republic "Veche republic").

### Influence actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=18 "Edit section: Influence actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=18 "Edit section: Influence actions")\]

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

#### Reign in Eyalet\[[edit](/index.php?title=Diplomacy&veaction=edit&section=19 "Edit section: Reign in Eyalet") | [edit source](/index.php?title=Diplomacy&action=edit&section=19 "Edit section: Reign in Eyalet")\]

Turns a Eyalet into a Core Eyalet.

Factors that influence the AI's willingness to be reigned in:

Factor

Value

Overlords Diplomatic reputation

**x 3**

Trust of Overlord

**x 0.1**

Opinion of Overlord

**x 0.2**

Subjects total development

**x 0.25**

Subjects liberty desire

**x 1**

Furthermore, completing the "End the Eyalet Rebellion" mission, grants all Eyalets a flat **+20** reasons to be Reigned in.

#### Grant autonomy to Eyalet\[[edit](/index.php?title=Diplomacy&veaction=edit&section=20 "Edit section: Grant autonomy to Eyalet") | [edit source](/index.php?title=Diplomacy&action=edit&section=20 "Edit section: Grant autonomy to Eyalet")\]

Turns a Core Eyalet into a Eyalet

#### Promote to Eyalet\[[edit](/index.php?title=Diplomacy&veaction=edit&section=21 "Edit section: Promote to Eyalet") | [edit source](/index.php?title=Diplomacy&action=edit&section=21 "Edit section: Promote to Eyalet")\]

Turns a Vassal into a Eyalet

#### Call Eyalet to war\[[edit](/index.php?title=Diplomacy&veaction=edit&section=22 "Edit section: Call Eyalet to war") | [edit source](/index.php?title=Diplomacy&action=edit&section=22 "Edit section: Call Eyalet to war")\]

Call the Eyalet into all current wars they do not have a truce with the warleader.

#### Offer Indulgence\[[edit](/index.php?title=Diplomacy&veaction=edit&section=23 "Edit section: Offer Indulgence") | [edit source](/index.php?title=Diplomacy&action=edit&section=23 "Edit section: Offer Indulgence")\]

Available for [![Flag of Riga](/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga") with the "Blessed Plutocracy" Government.

Selling Indulgences costs [![Papal influence.png](/images/thumb/5/5f/Papal_influence.png/28px-Papal_influence.png)](/Papal_influence "Papal influence") 50 Papal Influence and gives [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") 3 months of the targets income, while raising their [![Stability.png](/images/a/ae/Stability.png)](/Stability "Stability") Stability by **+1** and their [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") Prestige by **+10**.

Only able to offer to other [![Catholicism](/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") Catholic Nations.

#### Enforce peace\[[edit](/index.php?title=Diplomacy&veaction=edit&section=24 "Edit section: Enforce peace") | [edit source](/index.php?title=Diplomacy&action=edit&section=24 "Edit section: Enforce peace")\]

The enforce peace action demands that the leading attacker in a war make a white peace with the leading defender. After clicking the _Enforce peace_ action, the enforce peace screen is opened in which the enforcer has to select in which war they want to enforce peace by clicking on the flag of the defender in that war(even if there is only one war). Refusal will bring the enforcing nation into the war on the side of the defender. The following conditions must be met in order to enforce peace:

*   The enforcer must not have a [truce](/Truce "Truce") with the leading attacker.
*   The enforcer must have at least **+100** [relations](/Relation "Relation") with the leading defender (if the enforcer is the emperor of the HRE and the defender is an HRE member, only **+0** [relations](/Relation "Relation") are necessary).
*   The attacker must have **−25%** [![War score.png](/images/thumb/b/b3/War_score.png/28px-War_score.png)](/War_score "War score") [warscore](/Warscore "Warscore") or better.
*   The enforcer must be able to declare war on the attacker (e.g. not in a regency and not being allied to the attacker and not having a transfer trade power relationship with the attacker)

If the defender is a colonial nation of the enforcer, only the last two conditions must be fulfilled and the enforcer becomes the warleader if the attacker refuses the demand.

Enforce peace is a useful method for entering wars without triggering any automatic defensive call to arms from the opponent. For example, European powers outside the [![Imperial authority.png](/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority")[Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire") can use enforce peace on empire members to enter wars against them without having to fight the Emperor. Enforce peace can also turn the tides against a [rival](/Rival "Rival")'s offensive war.

#### Offer vassalization\[[edit](/index.php?title=Diplomacy&veaction=edit&section=25 "Edit section: Offer vassalization") | [edit source](/index.php?title=Diplomacy&action=edit&section=25 "Edit section: Offer vassalization")\]

_Main article: [Vassal#Offer vassalization (diplomatic)](/Vassal#Offer_vassalization_.28diplomatic.29 "Vassal")_  

Vassalization makes the target nation a subject nation of the country that offered it. Vassals are automatically called to their overlord's wars and pay a portion of their [![Income from vassals.png](/images/thumb/b/b2/Income_from_vassals.png/28px-Income_from_vassals.png)](/Income_from_vassals "Income from vassals") [tax income](/Vassal#Benefits_of_vassals "Vassal").

#### Break vassalization\[[edit](/index.php?title=Diplomacy&veaction=edit&section=26 "Edit section: Break vassalization") | [edit source](/index.php?title=Diplomacy&action=edit&section=26 "Edit section: Break vassalization")\]

Breaking vassalization cancels a subject nation's vassalage and makes them independent. This action costs [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") **−25** prestige and **−200** relations penalty with the former vassal, and results in a truce of 5 years with the former overlord. Vassalization cannot be cancelled when a [truce](/Warfare#Truce "Warfare") exists with the target.

#### Designate march\[[edit](/index.php?title=Diplomacy&veaction=edit&section=27 "Edit section: Designate march") | [edit source](/index.php?title=Diplomacy&action=edit&section=27 "Edit section: Designate march")\]

[![Art of War.png](/images/thumb/0/0f/Art_of_War.png/28px-Art_of_War.png)](/Art_of_War "Art of War")

Available only with the [Art of War](/Art_of_War "Art of War") DLC enabled.

_Main article: [March](/March "March")_  

Designating a vassal as a [![March icon.png](/images/thumb/1/1d/March_icon.png/24px-March_icon.png)](/March "March") march grants it substantial military bonuses. Marches do not pay [![Income from vassals.png](/images/thumb/b/b2/Income_from_vassals.png/28px-Income_from_vassals.png)](/Income_from_vassals "Income from vassals")tax income to their overlord, and cannot be diplomatically annexed or peacefully released.

#### Revoke march\[[edit](/index.php?title=Diplomacy&veaction=edit&section=28 "Edit section: Revoke march") | [edit source](/index.php?title=Diplomacy&action=edit&section=28 "Edit section: Revoke march")\]

_Main article: [March](/March "March")_  

Revoking a march changes it to normal [![Vassal.png](/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") vassal status, allowing for it to be annexed. This action costs [![Stability.png](/images/a/ae/Stability.png)](/Stability "Stability") **−1** [stability](/Stability "Stability") and results in a **−50** relations penalty with the subject.

#### Annex vassal\[[edit](/index.php?title=Diplomacy&veaction=edit&section=29 "Edit section: Annex vassal") | [edit source](/index.php?title=Diplomacy&action=edit&section=29 "Edit section: Annex vassal")\]

_Main article: [Vassal#Annexation](/Vassal#Annexation "Vassal")_  

Diplomatic annexation incorporates a [client state](/Client_state "Client state") or [![Vassal.png](/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal")[vassal](/Vassal "Vassal") into the overlord's domain, resulting in direct control of the former subject's territory and military. This action occupies a [![Diplomat.png](/images/thumb/e/ee/Diplomat.png/28px-Diplomat.png)](/Diplomat "Diplomat")[diplomat](#diplomats) for its duration and costs [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") diplomatic power.

#### Integrate\[[edit](/index.php?title=Diplomacy&veaction=edit&section=30 "Edit section: Integrate") | [edit source](/index.php?title=Diplomacy&action=edit&section=30 "Edit section: Integrate")\]

_Main article: [Personal Union#Integration](/Personal_Union#Integration "Personal Union")_  

Diplomatic integration incorporates a junior parter of a [![Personal union.png](/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union")[personal union](/Personal_union "Personal union") into the senior partner's realm. Like diplomatic annexation of [vassals](/Vassal "Vassal") and [client states](/Client_state "Client state"), completion results in control of the junior partner's territory and military, but also gains control of the junior partner's [![Vassal.png](/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal")vassals and [![Subject colony icon.png](/images/thumb/d/de/Subject_colony_icon.png/28px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation")[colonial nations](/Colonial_nation "Colonial nation"). Diplomatic integration of a [junior partner](/Personal_union "Personal union") in a personal union follows nearly the same principles for requirements, cost, speed, and effects as diplomatic annexation of a [vassal](/Vassal "Vassal").

#### Proclaim guarantee\[[edit](/index.php?title=Diplomacy&veaction=edit&section=31 "Edit section: Proclaim guarantee") | [edit source](/index.php?title=Diplomacy&action=edit&section=31 "Edit section: Proclaim guarantee")\]

[![Guaranteed.png](/images/thumb/5/51/Guaranteed.png/24px-Guaranteed.png)](/File:Guaranteed.png) Guaranteeing a nation calls the guarantor to war if the target nation is directly attacked by another nation. The guarantor will not be called to war if the guaranteed nation is called into another war as an ally, unless they are called in as a co-belligerent. The relation uses a [![Diplomatic relations.png](/images/thumb/5/58/Diplomatic_relations.png/28px-Diplomatic_relations.png)](/Diplomatic_relations "Diplomatic relations")[diplomatic relations](#Diplomatic_relations_cap) slot and lasts until revoked or a call to arms from the target is declined. A call to arms from a guarantee functions identically to a defensive call to arms in an alliance and carries the same penalties if declined. Guarantees can be revoked at will, which gives the former guarantor a truce on the formerly guaranteed country. It is only possible to guarantee countries that are significantly weaker than the guarantor - protection from a weaker nation will not be taken seriously.

#### Send warning\[[edit](/index.php?title=Diplomacy&veaction=edit&section=32 "Edit section: Send warning") | [edit source](/index.php?title=Diplomacy&action=edit&section=32 "Edit section: Send warning")\]

Sending a warning to a target country results in a defensive call to arms if the target attacks one of the warner's neighbors (bordering by land). Rejecting this call to arms only incurs a penalty to trust with relevant nations. The list of neighbors for any nation can be found in its diplomacy tab by filtering its relation list to neighbors only. A country cannot warn another country it is already warned by, or that is not significantly weaker. A warning lasts for 20 years and can be issued again once it expires.

#### Threaten war\[[edit](/index.php?title=Diplomacy&veaction=edit&section=33 "Edit section: Threaten war") | [edit source](/index.php?title=Diplomacy&action=edit&section=33 "Edit section: Threaten war")\]

[![The Cossacks.png](/images/thumb/b/b6/The_Cossacks.png/28px-The_Cossacks.png)](/The_Cossacks "The Cossacks")

Available only with the [The Cossacks](/The_Cossacks "The Cossacks") DLC enabled.

Threaten war is a diplomatic action which lets a nation demand a province that it has a claim or core on. If the demand is accepted, the province is transferred to the demanding nation. If the demand is not accepted a war is declared with the [![Casus belli.png](/images/thumb/d/d3/Casus_belli.png/28px-Casus_belli.png)](/Casus_belli "Casus belli") _Conquest_ [casus belli](/Casus_belli "Casus belli") for said province. War _cannot_ be threatened over a country's [![Capital.png](/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") capital (it cannot be targeted at an OPM) or if a truce exists with the target country, and nor can a subject nation (other than Tributaries) threaten war. Successfully demanding a province will cause the threatening country to gain [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact")[aggressive expansion](/Aggressive_expansion "Aggressive expansion") as if the province had be conquered in a peace deal and the target nation to lose **−10** [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige")[prestige](/Prestige "Prestige"). This also creates a 5-year truce between the two nations. A country will relinquish a province if the relative strength of the demanding country's alliance outweighs the relative worth of the province and the alliances of the threatened nation. The AI is more willing to give up provinces that the demanding country has a core on, and much less willing to give up provinces if that country has recently demanded another province.

Factors that influence the AI's willingness to giving up a province are:

Factor

Effect

Base value:

**−20**

Province is not a core of the threatening nation:

**−20**

Relative strength of alliances:

**−100** to **+100**

Relative worth of province to target's entire development:

**−1** to **−200**

Recently gave in to threat:

Base of **−120**, increasing by **+1** per month after truce ended

### Relations actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=34 "Edit section: Relations actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=34 "Edit section: Relations actions")\]

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

_See also: [Relations](/Relations "Relations")_  

#### Improve relations\[[edit](/index.php?title=Diplomacy&veaction=edit&section=35 "Edit section: Improve relations") | [edit source](/index.php?title=Diplomacy&action=edit&section=35 "Edit section: Improve relations")\]

[![Improve relations.png](/images/thumb/4/46/Improve_relations.png/24px-Improve_relations.png)](/File:Improve_relations.png) Improving relations sends a diplomat to the target country to improve relations over time. Relations can be improved up to **+200** for subjects and up to **+100** for all other nations. Improved relations decay by **−3** on the first day of each year if there is no diplomat currently improving relations with the target country. The rate at which relations improve is highest when relations are **0**, and decreases as the difference increases. This rate can be further improved by the improve relations modifier. Any bonus to the improve relations modifier also affects how fast any accumulated aggressive expansion will decay.

When sending a diplomat to improve relations for the first time or when the improved relations value has decayed to **0** doubly improved opinion is gained on the first tick. The rest of the relations improvements take place at the end of each month.

#### Send an insult\[[edit](/index.php?title=Diplomacy&veaction=edit&section=36 "Edit section: Send an insult") | [edit source](/index.php?title=Diplomacy&action=edit&section=36 "Edit section: Send an insult")\]

Sending an insult gives the target country the [![Casus belli.png](/images/thumb/d/d3/Casus_belli.png/24px-Casus_belli.png)](/Casus_belli "Casus belli") _‘Diplomatic Insult’_ casus belli on the insulter for 1 year. The target country also gets the opinion modifier _“Insulted”_ towards the insulter for 10 years, worth [![Opinion.png](/images/thumb/9/97/Opinion.png/24px-Opinion.png)](/Opinion "Opinion") **−50** opinion with a yearly decay of **+5**. Insults are useful for negating the **−1** [![Stability.png](/images/a/ae/Stability.png)](/Stability "Stability") [stability](/Stability "Stability") hit of declaring war on nations that have **+100** relations of the aggressor. Insulting a rival also grants [![Power projection.png](/images/8/8b/Power_projection.png)](/Power_projection "Power projection") **+5** power projection, decaying by **−1** per year, provided that the insulter neither has a truce with them nor already has power projection from a previous insult. Some ideas double the power projection from insults.

  

[![Power projection from insults.png](/images/thumb/a/a0/Power_projection_from_insults.png/24px-Power_projection_from_insults.png)](/Power_projection_from_insults "Power projection from insults")

Traditions

Ideas

Bonuses

CollapsePolicies

+100%

—

*   Court idea 1: Long Echo
*   Bregenzer idea 4: Resisting Habsburg Hegemony
*   Cossack idea 4: Scornful Insults
*   Veronese idea 3: Ancient Grudge
*   Zaporozhian idea 5: Brutal Diplomacy

—

—

+25%

—

—

—

*   Court-Offensive: Sharp Wits Act

##### Scornful insult\[[edit](/index.php?title=Diplomacy&veaction=edit&section=37 "Edit section: Scornful insult") | [edit source](/index.php?title=Diplomacy&action=edit&section=37 "Edit section: Scornful insult")\]

[![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma")

Available only with the [Dharma](/Dharma "Dharma") DLC enabled.

A scornful insult will double the loss of opinion – the opinion modifier _“Insulted”_ is replaced by the opinion modifier _“Scornfully Insulted”_, worth [![Opinion.png](/images/thumb/9/97/Opinion.png/24px-Opinion.png)](/Opinion "Opinion") **−100** opinion – at costs of [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/24px-Yearly_prestige.png)](/Prestige "Prestige") **5** prestige (only possible with a positive prestige). Scornfully insulting a rival gains [![Power projection.png](/images/8/8b/Power_projection.png)](/Power_projection "Power projection") **+10** power projection that stacks upon the potential gain from regular insult. [Rivals](/Rival "Rival") of the target country get the opinion modifier _“Scornfully Insulted Enemy”_ towards the insulter for 10 years, worth [![Opinion.png](/images/thumb/9/97/Opinion.png/24px-Opinion.png)](/Opinion "Opinion") **+25** opinion with a yearly decay of **−2.5**.

### Dynastic actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=38 "Edit section: Dynastic actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=38 "Edit section: Dynastic actions")\]

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

#### Royal marriage\[[edit](/index.php?title=Diplomacy&veaction=edit&section=39 "Edit section: Royal marriage") | [edit source](/index.php?title=Diplomacy&action=edit&section=39 "Edit section: Royal marriage")\]

_For the dynastic effects of royal marriage, see [Ruler#Royal marriage](/Ruler#Royal_marriage "Ruler")_  

_For information on personal unions, see [personal union](/Personal_union "Personal union")_  

Countries ruled by monarchs may arrange [![Royalmarriage.png](/images/thumb/2/22/Royalmarriage.png/24px-Royalmarriage.png)](/File:Royalmarriage.png) [royal marriages](/Royal_marriage "Royal marriage") with others. This improves relations by **+25** while in effect. Attacking a country with whom a nation has a royal marriage results in **−1** [![Stability.png](/images/a/ae/Stability.png)](/Stability "Stability") stability and **+1** [![War exhaustion.png](/images/8/8c/War_exhaustion.png)](/War_exhaustion "War exhaustion") war exhaustion. Note that this penalty will _not_ occur except through a standard declaration of war; to circumvent it, the player may find it useful to Threaten War over a province that the target will refuse to cede.

Upon the death of a [![Catholicism](/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic")[Christian](/Christian "Christian") monarch with no heir, a ruler from the dynasty of a more prestigious country that shares a royal marriage may rise to the throne. If the countries already share a dynasty, a [![Personal union.png](/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union") personal union may result instead. Personal union partners function militarily like vassals. They do not pay a portion of their tax income but may be inherited. Higher [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") prestige increases chances of gaining the crown of a royal marriage partner for a country's dynasty, either independently or as a personal union.

Royal marriages are unavailable to [![Government theocracy.png](/images/thumb/8/81/Government_theocracy.png/28px-Government_theocracy.png)](/Theocracy "Theocracy")[theocracies](/Theocracy "Theocracy") and [![Government republic.png](/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic")[republics](/Republic "Republic"), with the exceptions of the Dutch Republic and Italian Signoria. Christians may only marry other Christians. All non-Christians may marry each other, but personal unions will only occur for Christian nations.

The factors that influence a nation's acceptance of a royal marriage proposal are:

Factor

Effect

Attitude towards proposer

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **+40**

[![Protective attitude](/images/a/aa/Attitude_protective.png)](/Attitude "Protective attitude") Protective: **+40**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **+10**

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral: **−20**

[![Domineering attitude](/images/2/2f/Attitude_domineering.png)](/Attitude "Domineering attitude") Domineering: **−980**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−1000**

[![Outraged attitude](/images/c/ca/Attitude_outraged.png)](/Attitude "Outraged attitude") Outraged: **−1000**

[![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") Rivalry: **−1000**

Nation opinion about proposer

Positive: **+0.25** per point

Negative: **−0.25** per point

Same culture group

**+20**

Same religion

**+5**

Neighbors

**+5**

Proposer's diplomatic reputation

**+5** per point

Distance between borders

**−0.1** per distance between borders†

†: Distance between borders can only be seen in [debug mode](/Debug_mode "Debug mode").

#### Break royal ties\[[edit](/index.php?title=Diplomacy&veaction=edit&section=40 "Edit section: Break royal ties") | [edit source](/index.php?title=Diplomacy&action=edit&section=40 "Edit section: Break royal ties")\]

Breaking royal ties ends a royal marriage. This results in **−1** stability and **−10** prestige. Furthermore, the relation with the target country is decreased by **−75**. The stability cost may be negated by completing [![Diplomatic idea group.png](/images/thumb/3/36/Diplomatic_idea_group.png/24px-Diplomatic_idea_group.png)](/Diplomatic_ideas "Diplomatic ideas") [Diplomatic ideas](/Diplomatic_ideas "Diplomatic ideas"), being the [Curia Controller](/Papacy "Papacy"), or rivaling the target country. The death of the ruler who proposed the marriage will also end a royal marriage without penalty.

#### Claim throne\[[edit](/index.php?title=Diplomacy&veaction=edit&section=41 "Edit section: Claim throne") | [edit source](/index.php?title=Diplomacy&action=edit&section=41 "Edit section: Claim throne")\]

_For information on improving chances of obtaining a personal union, see [Personal Union](/Personal_Union "Personal Union")_  

Claiming a throne gives the "claim on throne" CB, a military means of forcing a personal union.

The requirements to claim a throne are as follows:

*   Target has a [![Royalmarriage.png](/images/thumb/2/22/Royalmarriage.png/28px-Royalmarriage.png)](/Royal_marriage "Royal marriage") royal marriage
*   Target shares the **same dynasty** as claimant
*   Target has a **weak claim** heir or **no** heir
*   Claimant has more [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige")[prestige](/Prestige "Prestige") than target

Claiming the throne of a country results in the following diplomatic effects:

*   **−50** [relations](/Relations "Relations") with other [royal marriage](/Royal_marriage "Royal marriage") partners
*   **−100** relations with the target country
*   **−20** [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") prestige.
*   **−25** Trust with the target.
*   Claimant gains [![Casus belli.png](/images/thumb/d/d3/Casus_belli.png/28px-Casus_belli.png)](/Casus_belli "Casus belli") "Claim on Throne" [casus belli](/Casus_belli "Casus belli") against the target. The [![War score.png](/images/thumb/b/b3/War_score.png/28px-War_score.png)](/War_score "War score") [war score](/War_score "War score") cost to enforce a [![Personal union.png](/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union") personal union is **84%** regardless of the target's size.
*   If the target country dies without an heir, and a succession war ensues, the claiment of the thone will have priority to be the defender in the war over those who do not have claim on the throne \[usualy settled by highest dev\].

If there are multiple claimants to the throne then the country with the highest dev will be the defender.

Note that while some allies may be willing to join a conquest war, they will not join a claim on throne war or succession war, due to opposition to a successful personal union. The gained casus belli lasts until the target country produces an heir with a strong claim or a new heir rises to the throne or the royal marriage is cancelled by claimant. Claimee cancelling RM, or claimant dying, while retaining dynasty, does not appear to invalidate it. Thus, when declaring war using this CB, the aggressor will take a -1 stability hit for the royal marriage.

The claim throne diplomatic action is only possible for Christian nations as no other religious group allows personal unions. While the [![Government republic.png](/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Dutch republic, oligarchic republic, Italian Signoria, and elective monarchy can have royal marriages, their thrones cannot be claimed as they do not have heirs.

#### Support heir\[[edit](/index.php?title=Diplomacy&veaction=edit&section=42 "Edit section: Support heir") | [edit source](/index.php?title=Diplomacy&action=edit&section=42 "Edit section: Support heir")\]

[![Res Publica.png](/images/thumb/b/b5/Res_Publica.png/28px-Res_Publica.png)](/Res_Publica "Res Publica")

Available only with the [Res Publica](/Res_Publica "Res Publica") DLC enabled.

Supporting an heir is an action that can be initiated on nations with an [elective monarchy](/Elective_monarchy "Elective monarchy") (which can only be gained by event for [![Flag of Poland](/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") and the [![Flag of Commonwealth](/images/thumb/d/df/Commonwealth.png/20px-Commonwealth.png)](/Commonwealth "Commonwealth") [Commonwealth](/Commonwealth "Commonwealth"), or by using a custom nation). Any nation that is in the same religious group as the country with elective monarchy can support an heir.

In an elective monarchy, each nation that has supported its heir in the current election cycle has a possible heir to the throne with an associated amount of support. A [diplomat](/Diplomat "Diplomat") must be sent in order to support a nation's own heir in an elective monarchy,

The probability of increasing the heir's support every month by **1** is as follows:

![{\displaystyle \%{\text{ probability of increase}}=5\cdot {\text{diplomatic reputation}}+5\cdot {\frac {\text{relations}}{100}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/eb612792a6d679210bbc0d9732de8276486826be)

The elective monarchy may also increase support for its own heir by 5 points at the cost of **−10** [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") prestige. Upon the death of the elective monarchy's ruler, the heir with the most support rises to the throne in the elective monarchy.

If a foreign heir arises, the country that provided the heir gains:

*   **+25** [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") [prestige](/Prestige "Prestige")
*   **+10** [![Legitimacy.png](/images/2/25/Legitimacy.png)](/Legitimacy "Legitimacy") [legitimacy](/Legitimacy "Legitimacy")
*   **+24×** [![Administrative power.png](/images/e/ef/Administrative_power.png)](/Administrative_power "Administrative power") administrative, [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") diplomatic, and [![Military power.png](/images/9/98/Military_power.png)](/Military_power "Military power") military power of the new ruler

If a local noble rises to the throne, the elective monarchy loses **−20** relations with all countries that supported an heir in the election.

### Covert actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=43 "Edit section: Covert actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=43 "Edit section: Covert actions")\]

_Main article: [Espionage](/Espionage "Espionage")_  

Diplomats can be send to other nations to build up a spy network, or to practice counterespionage and increase the chance of catching spies sent by the target nation. When a spy network has grown enough, espionage actions can be undertaken, which do not require sending a diplomat. Most of the espionage actions require certain ideas from the espionage idea group in order to become available. Actions that do not need this group are fabricate claim, support rebels and justify trade conflict. Completing the espionage group will give access to various powerful actions. One example is the vetting idea, the first of the idea group, which grants a discount to technology cost depending on the difference in technology level between the home country of the spies and the target country, as well as the size of the spy network there. Covert actions are described in more detail on the [Espionage](/Espionage "Espionage") page.

### Economy actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=44 "Edit section: Economy actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=44 "Edit section: Economy actions")\]

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

_See also: [Economy](/Economy "Economy")_  

#### Purchase Modern Ideas\[[edit](/index.php?title=Diplomacy&veaction=edit&section=45 "Edit section: Purchase Modern Ideas") | [edit source](/index.php?title=Diplomacy&action=edit&section=45 "Edit section: Purchase Modern Ideas")\]

[![Domination.png](/images/thumb/3/3d/Domination.png/28px-Domination.png)](/Domination "Domination")

Available only with the [Domination](/Domination "Domination") DLC enabled.

Spend **3** months worth of Income to gain **2** + **0.5** times the Total levels of tech they are ahead of [![Flag of Russia](/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia") in Modernization, up to a total maximum of **5**

The factors that influence a nation's willingness to sell Modern Ideas:

Factor

Effect

Base

**\-50**

Target is in a deficit

**+25**

Attitude towards proposer

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **+40**

[![Protective attitude](/images/a/aa/Attitude_protective.png)](/Attitude "Protective attitude") Protective: **+40**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **+10**

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral: **−20**

[![Domineering attitude](/images/2/2f/Attitude_domineering.png)](/Attitude "Domineering attitude") Domineering: **−980**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−1000**

[![Outraged attitude](/images/c/ca/Attitude_outraged.png)](/Attitude "Outraged attitude") Outraged: **−1000**

[![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") Rivalry: **−1000**

Personality of Ruler

[![Balanced personality](/images/e/eb/Personality_icon_balanced.png)](/Personality "Balanced personality") Balanced: **+15**

[![Administrator](/images/2/27/Personality_icon_administrator.png)](/Personality "Administrator") Administrator: **+15**

[![Diplomat](/images/b/b4/Personality_icon_diplomat.png)](/Personality "Diplomat") Diplomat: **+10**

[![Militarist](/images/8/8c/Personality_icon_militarist.png)](/Personality "Militarist") Militarist: **\-25**

Nation opinion about proposer

Positive: **+0.1** per point

Negative: **−0.1** per point

Nation trust towards proposer

Above 50: **+0.4** per point

Below 50: **−0.4** per point

Proposer's diplomatic reputation

**+5** per point

Distance between borders

**+0.1** per distance between borders

#### Sell Modern Ideas\[[edit](/index.php?title=Diplomacy&veaction=edit&section=46 "Edit section: Sell Modern Ideas") | [edit source](/index.php?title=Diplomacy&action=edit&section=46 "Edit section: Sell Modern Ideas")\]

[![Domination.png](/images/thumb/3/3d/Domination.png/28px-Domination.png)](/Domination "Domination")

Available only with the [Domination](/Domination "Domination") DLC enabled.

Offer **2** Modernization to [![Flag of Russia](/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia") in exchange for **3** months worth of their Income.  
This is supposed to scale like the "Purchase Modern idea" action but currently it doesnt.

#### Transfer trade power\[[edit](/index.php?title=Diplomacy&veaction=edit&section=47 "Edit section: Transfer trade power") | [edit source](/index.php?title=Diplomacy&action=edit&section=47 "Edit section: Transfer trade power")\]

[![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations")

Available only with the [Wealth of Nations](/Wealth_of_Nations "Wealth of Nations") DLC enabled.

Ask a target non-subject nation to transfer a percentage of its [trade](/Trade "Trade") power to the proposer. While a transfer of trade power is active, the two nations involved cannot declare war on each other, and will also receive a mutual, scaling relation bonus (**+20** if 100% of power is transferred). The agreement does not count towards each country's diplomatic relations limit. Even without [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations"), AI can be demanded to transfer trade power in a peace deal. Colonial nations automatically transfer trade power to their overlord.

The factors that influence an AI nation's desire to accept a request to transfer trade power are

Factor

Effect

Proposer military power compared to nation

**+80** max

Proposer base tax compared to nation

**+20** max

Attitude towards proposer

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **+20**

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **+10**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−100**

Proposer is not allied with or guaranteeing nation

**−50**

Nation opinion of proposer

**+0.1** per positive relation

[![Diplomatic reputation.png](/images/thumb/2/21/Diplomatic_reputation.png/28px-Diplomatic_reputation.png)](/Diplomatic_reputation "Diplomatic reputation") Diplomatic reputation

Positive: **+1** per point

Negative: **−2.5** per point

Trust

**+0.2** per positive point

Amount of power asked for

Starts at **+20** with 10% power. Increases for each percentage point between

10–40%: **−1**

41-60%: **−3**

61-80%: **−5**

81-100%: **−7**

Number of countries transferring trade power to proposer

**−10** per transfer trade power agreement

Distance between borders

#### Steer trade power\[[edit](/index.php?title=Diplomacy&veaction=edit&section=48 "Edit section: Steer trade power") | [edit source](/index.php?title=Diplomacy&action=edit&section=48 "Edit section: Steer trade power")\]

[![Rule Britannia.png](/images/thumb/5/5a/Rule_Britannia.png/28px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia")

Available only with the [Rule Britannia](/Rule_Britannia "Rule Britannia") DLC enabled.

Ask a target non-subject nation to use their merchants to steer trade toward the proposing nation's trade capital. While a transfer of trade power is active, the two nations involved cannot declare war on each other, but unlike [transfer trade power](/Transfer_trade_power "Transfer trade power"), there is no relations bonus. This effectively hijacks trade power in as many nodes as the target has merchants, where their merchants can be placed for the maximum benefit of the proposer. Technically, no trade power is transferred, so the values for each nation in each trade node remain the same, and if both share the same home node, then the target will still collect with their trade power, effectively wasting the value of the diplomatic agreement. The agreement does not count toward either country's diplomatic relations limit.

#### Issue embargo\[[edit](/index.php?title=Diplomacy&veaction=edit&section=49 "Edit section: Issue embargo") | [edit source](/index.php?title=Diplomacy&action=edit&section=49 "Edit section: Issue embargo")\]

Reduces the [![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power") [trade](/Trade "Trade") power of the target country in every trade node the embargoing country has trade power in, depending on several factors. Embargoing a rival grants [power projection](/Power_projection "Power projection"). Embargoing a non-rival gives a penalty to [trade efficiency](/Trade_efficiency "Trade efficiency"), but can give a net gain in trade power share (and hence income) if the other country is very dominant in an important node.

The following bonuses apply to embargo efficiency:

[![Embargo efficiency.png](/images/thumb/8/87/Embargo_efficiency.png/24px-Embargo_efficiency.png)](/Embargo_efficiency "Embargo efficiency")

Traditions

Ideas

Bonuses

CollapsePolicies

+25%

—

*   Vermont idea 2: The Boston Tea Party

—

—

+10%

—

*   Betsimisaraka idea 2: Pirate Ports
*   Cebu idea 5: 'The Place for Trading'
*   Cypriot idea 7: Raid Turkish Commerce
*   Malagasy idea 3: Pirate Ports
*   Mindanao idea 7: Pirates of Mindanao
*   Montenegrin idea 4: Balkan Gusars
*   Naxian idea 3: Archipelago Of Opportunities
*   Pomeranian idea 1: Legacy of Pirates

—

—

+5%

—

*   Palembang idea 3: Controlling the Strait

—

—

#### Offer knowledge sharing\[[edit](/index.php?title=Diplomacy&veaction=edit&section=50 "Edit section: Offer knowledge sharing") | [edit source](/index.php?title=Diplomacy&action=edit&section=50 "Edit section: Offer knowledge sharing")\]

[![Rule Britannia.png](/images/thumb/5/5a/Rule_Britannia.png/28px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia")

Available only with the [Rule Britannia](/Rule_Britannia "Rule Britannia") DLC enabled.

Gives the other country **+1** monthly progress in its [capital area](/Capital_area "Capital area") towards the oldest [![Institutions.png](/images/thumb/4/43/Institutions.png/28px-Institutions.png)](/Institutions "Institutions") institution the sending country has embraced that the other one hasn't embraced. This costs [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") **10%** of the receiving country's monthly income and lasts for 10 years, or until all the sending country's institutions are present everywhere in the receiving country's capital state. It cannot be offered to a country with loans or which would suffer a deficit post acceptance.

For the player to be offered knowledge sharing by the AI, the player doesn't need to be allied nor have positive opinion with the target who has already embraced the required institution, but needs (i) to be within colonial range, (ii) have no loans, (iii) have a comfortable monthly profit remaining after covering the cost of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") **10%** of income for the arrangement, and (iv) not be in any knowledge sharing agreement already.

This means there should be sufficient tax income, production, trade and gold (_excluding_ war reparations or other flexible non-recurring items) to cover expenses for the duration of the agreement.

#### Send gift\[[edit](/index.php?title=Diplomacy&veaction=edit&section=51 "Edit section: Send gift") | [edit source](/index.php?title=Diplomacy&action=edit&section=51 "Edit section: Send gift")\]

Allows a nation to send money to improve relations with a country, up to a maximum of **+25**. The gift amount can be adjusted in increments of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") 25 ducats. The effect of the gift is:

![{\displaystyle {\text{relation bonus}}={\frac {2.4\cdot {\text{ducats gifted}}}{\text{monthly income of target country}}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/060b029c0047eb67c9f7ab395d8ba6d480571d10)

The final value is rounded down to the nearest integer. The relation bonus will last for 5 years. Additional gifts sent during this time will have no effect unless it would increase relations more than previous gifts did.

#### Loan offer\[[edit](/index.php?title=Diplomacy&veaction=edit&section=52 "Edit section: Loan offer") | [edit source](/index.php?title=Diplomacy&action=edit&section=52 "Edit section: Loan offer")\]

Allows a nation to loan out money to other countries for interest. When the loan is due to be repaid, the loan-taker can instead choose to keep the ducats. This will give the loan-giver a casus belli. AI rulers will always decline unless they have one of the correct personalities.

#### Give subsidies\[[edit](/index.php?title=Diplomacy&veaction=edit&section=53 "Edit section: Give subsidies") | [edit source](/index.php?title=Diplomacy&action=edit&section=53 "Edit section: Give subsidies")\]

Transfer a specified amount of money each month to the target country for a certain duration. The sender may transfer between [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") 0.1 ducats and +50% of its monthly income to the target country each month, adjustable in increments of 1% of its monthly income. The duration of the subsidy can be set between 10 and 400 years, adjustable in increments of 10 years.

Maintaining subsidies will improve the target country's [relations](/Relations "Relations") with the subsidiser each month, up to a maximum of **+15** per year. The accumulated relation bonus is completely removed when the subsidy is cancelled or expires. Since there is otherwise no penalty for terminating a subsidy early, it is generally good practice to set a long subsidy duration unless diplomat time is severely constrained. The relation bonus is

![{\displaystyle {\text{yearly relations increase}}={\frac {12\cdot {\text{monthly subsidy}}}{\text{target countrys total monthly income}}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/4ea58f862f57e4c0e4355c285ca5f513b76537d4)

All _monthly income_ mentioned in this section refers to the monthly income as reported in the ledger. Be aware that the target country's total monthly income will therefore include this monthly subsidy once the ledger is updated after the establishment of the subsidy. This imposes significant diminishing returns on the relation benefits of a large subsidy, and encourages one to maintain smaller subsidies over a longer time frame instead.

**Example**: Country A has a monthly income of 10 ducats, and country B provides it with a monthly subsidy of 5 ducats. The reported yearly relations boost will start at +6 per year (B's subsidy is 1/2 of A's income), then immediately drop to +4 per year after the first month (the subsidy is now 1/3 their income).

Subsidies do not consume a diplomatic relations slot. This makes them a valuable tool for blandishing future targets of diplomatic vassalization or annexation.

Subsidizing a nation at war with a [rival](/Rival "Rival") grants [![Power projection.png](/images/8/8b/Power_projection.png)](/Power_projection "Power projection") [power projection](/Power_projection "Power projection").

#### Sell province\[[edit](/index.php?title=Diplomacy&veaction=edit&section=54 "Edit section: Sell province") | [edit source](/index.php?title=Diplomacy&action=edit&section=54 "Edit section: Sell province")\]

A province can be sold to an another nation for a price of 0 to 2,000 ducats at a cost of [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") **−10** prestige. Both the buyer and seller must be at peace, and neither can be rivals of the other party. Only one province can change hands in a single transaction. The AI will only offer to sell isolated provinces, particularly if it is unable to [core](/Core "Core") them. When the sell province button is clicked, the province to be sold can be chosen together with the price that will be asked for it.

Factors that influence an AI nation's willingness to buy a province:

Factor

Effect

Province is priced above current treasury of buyer

**−1000**

Buyer has no core or claim on province that is of a different [culture](/Culture "Culture") group

**−1000**

Buyer has no core or claim on province that is of a different [religious](/Religious "Religious") group

**−1000**

Buyer has no core on province and is currently [overextended](/Overextension "Overextension") by any amount

**−1000**

Buyer has no core on province that is part of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")

**−1000**

Buyer would lose Free City status

**−50**

Price

**−1** for every 1% above above 50% of buyer's treasury

Province is adjacent to buyer

**+10**

Province has the same culture as buyer

**+10**

Province has the same religion as buyer

**+10**

Price

**−100** to **+100** based on development of target province

A province can **always** be bought as long as the price is affordable if:

*   Buyer is a subject and seller has a core on the province
*   Buyer has core on province
*   Buyer is at peace
*   Seller is at peace
*   Buyer is not at war with the seller

Additionally, it is not possible to sell a province to a colonial subject if the province is not in, bordering, or bordering a province which borders its own colonial region. If the province is particularly undesirable to the buyer, then its base value and associated price modifier will both be halved.

Selling provinces to a vassal is one method of saving administrative power by letting the vassal core the province. It is useful for avoiding overextension in the short term, and exchanges immediate [![Administrative power.png](/images/e/ef/Administrative_power.png)](/Administrative_power "Administrative power") administrative coring costs for [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") diplomatic annexation costs later. The [![Cossacks](/images/thumb/c/c6/Cossacks.png/28px-Cossacks.png)](/Cossacks_estates#Cossacks "Cossacks") DLC enables giving provinces to vassals directly via the subject interactions interface, making selling provinces to them unnecessary.

As AI nations place a very high priority on core creation, one can delay their research progress in administrative technologies by selling them provinces with a high [![Administrative power.png](/images/e/ef/Administrative_power.png)](/Administrative_power "Administrative power") coring cost. This can be particularly useful if the next administrative technology would otherwise unlock a troublesome idea group (e.g. AI [Portugal](/Portugal "Portugal")'s first idea group is always [exploration](/Idea_groups#Exploration "Idea groups")).

#### Sell ships\[[edit](/index.php?title=Diplomacy&veaction=edit&section=55 "Edit section: Sell ships") | [edit source](/index.php?title=Diplomacy&action=edit&section=55 "Edit section: Sell ships")\]

[![Art of War.png](/images/thumb/0/0f/Art_of_War.png/28px-Art_of_War.png)](/Art_of_War "Art of War")

Available only with the [Art of War](/Art_of_War "Art of War") DLC enabled.

[Navies](/Navy "Navy") can be sold to other nations for a price of 0 to 1000 ducats. If the target nation accepts the proposal, the fleet in question will transfer its allegiance to the buyer. In order to be able to sell ships to a nation, both sides have to be at peace and cannot be rivals of each other. After pressing the button, the fleet that is to be sold can be chosen together with the asking price. When offered to buy a fleet, the AI will want to hold on to a certain ratio of ships (for example, most countries on the Atlantic coast don't want to buy galleys) and will never go above their naval force limit. In order to be able to sell ships, the buyer has to have a fleet within supply range of the target nation. Fleets outside of the receiving country's supply range are not available to sell. The mouse-over on the YES/NO bar will give the factors for their decision (shown below), and if the fleet being offered is too large, it specifies how many less they desire, allowing the player to exit diplomacy and structure a fleet that meets the target countries desired profile.

The factors that influence an AI nation's willingness to buy ships:

Factor

Effect

Attitude towards proposer

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **+10**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **−20**

[![Loyal attitude](/images/f/fe/Attitude_loyal.png)](/Attitude "Loyal attitude") Loyal: **+10**

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral: **−10**

Price

**+50** to **−200** depending on treasury of buyer and value of the ships

Buyer wants x fewer ship types

**−10** per ship of undesired type

Diplomatic reputation

**+1** per positive point, **−1** per negative point

The AI will at times purchase obsolete ships. This makes it possible to get friends, allies, and subjects, as well as other non-rival countries to pay for upgrading the player nation's vessels when new models become available through advances in diplomatic technology. An aggressive nation may have trouble finding willing buyers and could potentially arm subsequent targets/victims, albeit with obsolete weapons.

#### Request to share maps\[[edit](/index.php?title=Diplomacy&veaction=edit&section=56 "Edit section: Request to share maps") | [edit source](/index.php?title=Diplomacy&action=edit&section=56 "Edit section: Request to share maps")\]

[![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum")

Available only with the [Mare Nostrum](/Mare_Nostrum "Mare Nostrum") DLC enabled.

This allows a nation to ask another nation if they want to share the map of a region. If the nation accepts, the proposer will, at a cost of [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") **−15** prestige, discover all provinces that were not yet discovered in the specific region. The nation giving the map will receive [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") **10**. Nations can't be rivals of each other. In order to be able confirm the map exchange, the receiving nation has to have a unit stationed in a region adjacent to the specific region.

The factors that influence an AI nation's willingness to share maps are:

Factor

Effect

Distance between borders

**+20** max

Easy

**+10**

Prestige of target nation

**+0.25** per negative [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") prestige

Rival's interest in region

**50** max

Target nation's interest in region

**−100** max

Target nation is a colonizer

**−1000**

Not the same religious group

**−20** max

Attitude towards proposer

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **+25**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **+20**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−1000**

[![Unknown attitude](/images/2/2e/Attitude_unknown.png)](/Attitude "Unknown attitude") Unknown: **−50**

Nation opinion of proposer

**+0.25** per positive relation

**−0.25** per negative relation

**−1000** if opinion -25 or lower

[![Diplomatic reputation.png](/images/thumb/2/21/Diplomatic_reputation.png/28px-Diplomatic_reputation.png)](/Diplomatic_reputation "Diplomatic reputation") Diplomatic reputation

Positive: **+5** per point

Negative: **−5** per point

Trust

**+1** per point above 50 trust

**−2** per point under 50 trust

**−1000** if trust 30 or lower

#### Charter company\[[edit](/index.php?title=Diplomacy&veaction=edit&section=57 "Edit section: Charter company") | [edit source](/index.php?title=Diplomacy&action=edit&section=57 "Edit section: Charter company")\]

[![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma")

Available only with the [Dharma](/Dharma "Dharma") DLC enabled.

This option allows a nation to purchase a province in a [Trade Company](/Trade_Company "Trade Company") region on a different continent from another nation. Both nations must be at peace in order to negotiate the transaction. The player selects a non-capital province to purchase and moves the slider to increase the cash offered until the reasons to sell is one or more higher than the reasons not to sell. The more important the province to the owning nation the more reasons not to sell. Some of the factors are listed below.

Factor

Effect

Notes

Base Reluctance

**−50**

[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducat "Ducat") Money offered

up to **+100**

[![Alliance.png](/images/thumb/e/e8/Alliance.png/28px-Alliance.png)](/Alliance "Alliance") Alliance

**+50**

Trust

**+1** for each point of trust over 50 and **−1** for each point below 50

the maximum is **+10** and the minimum is **−50**

[![Diplomatic reputation.png](/images/thumb/2/21/Diplomatic_reputation.png/28px-Diplomatic_reputation.png)](/Diplomatic_reputation "Diplomatic reputation") Diplomatic reputation

Positive: **+2** per point

Negative: **−2** per point

[![Development.png](/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") Province Development

![{\displaystyle -1.5\cdot {\text{development of the province}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/15f4a7ca03202819f09c9707a1f151e9ce8a870a)

this value is rounded down. e.g. -3.33 becomes -4

Province share of development

**−X**

unknown exact formula, except for rounding error it seems to be :  

![{\displaystyle -200\cdot ({\frac {\text{development of the province}}{\text{total development of the nation}}}-0.1)}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/d822f30fda1968348fd7308bded7ff5a0780cb51)

Other provinces nearby

**−X**

only other provinces of the buying nation matter. It doesn't matter if these provinces are part of a trade company or not. The amount of provinces and the distance matters, but the development of these provinces doesn't matter

[![Opinion.png](/images/thumb/9/97/Opinion.png/24px-Opinion.png)](/Opinion "Opinion") Opinion

the formula for that is not known. It seems to be about **+1** for each 40 opinion, but the thresholds don't seem to be the same in every situation.

Feeling Threatened

**−100**

the selling nation has [![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened attitude towards the buyer.

Too powerful

**−1000**

the selling nation has [empire rank](/Empire_rank "Empire rank")

[![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") Rivalry

**−100**

the selling nation is a rival of the buying nation or the other way around

Tradecharter Regional Scepticism

**−X**

this applies to provinces in the subcontinents Western Europe, Eastern Europe, Levant and Persia. The value differs. Observed values have been **−50** and **−70**

The base cost for charter company depends on the colonial range: ![{\displaystyle {\text{base cost}}=1000-0.5\cdot {\text{colonial range}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/8732eadecdd1d1d015c66154500405e8224987e8)

### Access actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=58 "Edit section: Access actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=58 "Edit section: Access actions")\]

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

#### Ask for military access\[[edit](/index.php?title=Diplomacy&veaction=edit&section=59 "Edit section: Ask for military access") | [edit source](/index.php?title=Diplomacy&action=edit&section=59 "Edit section: Ask for military access")\]

Request military access from the target country, allowing the requester's land armies to pass through its territories. Acceptance will raise the requester's opinion of the host country by **+10**, while rejection will decrease it by **−10**. Declaring war on a country that is granting the aggressor military access causes a major **−5** hit to stability.

AI nations will only grant military access if they have more **positive** than **negative** reasons for doing so. The relevant factors are

Factor

Effect

At war with neighboring rival

**+150**

Has alliance

**+50**

Requester army strength

**+100** max

Attitude towards requester

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **+20**

[![Defensive attitude](/images/e/e0/Attitude_defensive.png)](/Attitude "Defensive attitude") Defensive: **+20**

[![Protective attitude](/images/a/aa/Attitude_protective.png)](/Attitude "Protective attitude") Protective: **+20**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **+20**

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral: **0**

[![Unknown attitude](/images/2/2e/Attitude_unknown.png)](/Attitude "Unknown attitude") Unknown: **0**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−100**

[![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") Rivalry: **−100**

Requester diplomatic reputation

Positive: **+3** per point

Negative: **−3** per point

Nation opinion about requester

Positive: **+0.2** per point

Negative: **−0.5** per point

Trust

**0.5** per point

Military access is shared for all participants in a war. For example, if France and Brittany are in a war against Burgundy and France requests military access from Savoy, then Brittany will also have military access to Savoy. Similarly Burgundy, and all of its war allies, would also gain military access to Savoy.

Subject nations always give military access to their overlord. All participants in a war automatically grant military access to their allies, as well as being able to march into their enemies' territory. An army in non-allied land when war is declared, or in territory without military access when war ends, will be [exiled](/Exile "Exile").

#### Offer military access\[[edit](/index.php?title=Diplomacy&veaction=edit&section=60 "Edit section: Offer military access") | [edit source](/index.php?title=Diplomacy&action=edit&section=60 "Edit section: Offer military access")\]

Offer military access to the target country, allowing their land armies to pass through the requester's territory. Acceptance will raise the target country's opinion of the requester by **+10**. AI nations are typically uninterested in obtaining military access unless they are the country's ally or subject, or the country is a large and sprawling empire. They will also seek access if they need to travel through a nation to fight in a war. Countries automatically gain military access to countries that grant military access to someone they are at war or allied with.

A country can't revoke access to someone if they, or someone they are at war with, still has troops inside the country's borders.

#### Ask for fleet basing rights\[[edit](/index.php?title=Diplomacy&veaction=edit&section=61 "Edit section: Ask for fleet basing rights") | [edit source](/index.php?title=Diplomacy&action=edit&section=61 "Edit section: Ask for fleet basing rights")\]

Acquiring fleet basing rights from a nation will give the following benefits:

*   Naval supply range will now extend from the ports of that nation.
*   Trading range will now extend from the ports of that nation.
*   The requester may dock and repair ships in the ports of that nation.
*   The requester may disembark ground troops in that nation by docking loaded transports at its ports. These land troops will not be exiled, and may move into any adjacent province that they would normally be able to enter.

The cost of purchasing fleeting basing rights is as follows:

*   The base cost is [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") 0.1 ducats per month per port, with a minimum of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") **0.5 ducats** and maximum of **2.0 ducats**. This fee is based on the amount of permanent ports.
*   Non-city colony ports are usable and count toward the fee.
*   Ports that reside in a province which are terra incognita to the receiving country also count toward the fee.
*   Occupied ports only charge a fee if they can be docked at.
*   The fee can be seen in the economy window under _Harbor Fees_.

Fleet basing rights no longer extend colonial range as in past versions of the game. They can still be used to great advantage by distant fleets however. With [![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado") [El Dorado](/El_Dorado "El Dorado") active, they are no longer useful to explorers since they no longer take attrition while exploring. Only nations that have diplomatic technology level 2 or higher can grant fleet basing rights.

The following factors will influence an AI nation's decision to grant fleet basing rights:

Factor

Effect

Nation is allied to requester

**+50**

Nation opinion of requester

Positive: **+0.2** per point

Negative: **−0.5** per point

Attitude towards requester

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **+20**

[![Defensive attitude](/images/e/e0/Attitude_defensive.png)](/Attitude "Defensive attitude") Defensive: **+20**

[![Protective attitude](/images/a/aa/Attitude_protective.png)](/Attitude "Protective attitude") Protective: **+20**

[![Unknown attitude](/images/2/2e/Attitude_unknown.png)](/Attitude "Unknown attitude") Unknown: **0**

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral: **−20**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **−30**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−1000**

[![Outraged attitude](/images/c/ca/Attitude_outraged.png)](/Attitude "Outraged attitude") Outraged: **−1000**

[![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") Rivalry: **−1000**

Trust

**+0.5** per positive point

Requester diplomatic reputation

Positive: **+3** per point

Negative: **−3** per point

Requester is embargoing nation

**−1000**

Asked nation is embargoing requester

**−1000**

Once fleet basing rights have been obtained, AI nations will generally not revoke them unless there is a drastic change in relationship.

### Favors\[[edit](/index.php?title=Diplomacy&veaction=edit&section=62 "Edit section: Favors") | [edit source](/index.php?title=Diplomacy&action=edit&section=62 "Edit section: Favors")\]

_See also: [Diplomatic feedback](/Diplomatic_feedback "Diplomatic feedback")_  

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.31.

[![](/images/thumb/1/11/Trust_and_Favors.png/300px-Trust_and_Favors.png)](/File:Trust_and_Favors.png)

[](/File:Trust_and_Favors.png "Enlarge")

Shows trust and favors in the diplomatic feedback screen.

Favors are a diplomatic currency that measures the extent to which an AI country owes another country their support, although having a country owe favors is not a guarantee of their support.

#### Earning favors\[[edit](/index.php?title=Diplomatic_feedback&veaction=edit&section=T-1 "Edit section: ") | [edit source](/index.php?title=Diplomatic_feedback&action=edit&section=T-1 "Edit section: ")\]

Favors are gained from three sources:

*   **By participating in an ally's war** - The higher the country's participation, the more favors will be owed. Base favors earned this way is 20, modified by the war contribution relative to the power of the contributing ally (nations expect strong allies to do more work). Participants will earn fewer favors if they receive land in a peace deal negotiated by their side's by the war leader.
*   **By giving an ally land in peace deals** - The more land is given to an ally, the more favors a country will gain from that ally. The exact amount of favors gained is scaled to the warscore cost of the provinces and the war participation of the ally. It is reduced if the ally was promised land when they were called to arms. (In this circumstance, if the ally receives less land than it feels it deserves based on its war participation, the peace deal can cause the ally to lose trust with the war leader instead of the war leader gaining favors from the ally.)
*   **Over time while allied** - The rate depends on the relative strength of the two countries; the stronger one nation is compared to the other, the faster it will accumulate favors.
*   **Using the "Curry Favors" diplomatic action** - Generates favors every month based on Opinion, Diplomatic Reputation, and comparable military strength.

#### Spending favors\[[edit](/index.php?title=Diplomatic_feedback&veaction=edit&section=T-2 "Edit section: ") | [edit source](/index.php?title=Diplomatic_feedback&action=edit&section=T-2 "Edit section: ")\]

Favors can be spent in the following ways:

*   **Call to Arms** - The main purpose of favors is to call allies into offensive wars. Allies have to either be promised land or 10 favors have to be spent in order to invite them into an offensive war. However, if an ally does not first have net positive reasons to accept the call, then no favors can be spent to invite them.
*   **Prepare for war** - Ten favors can be spent to tell a country to prepare for war. For one year they will raise maintenance on their armies and avoid declaring offensive wars. In addition they gain **+20** reasons to accept when being called into a war.
*   **Trade Favors for Trust** - Favors can also be spent in order to increase an ally's trust at a rate of 10 favors for 5 trust.

  
Players with the Leviathan expansion can also spend favors in the following ways:

[![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan")

Available only with the [Leviathan](/Leviathan "Leviathan") DLC enabled.

*   **Trade Favors for Ducats** - Spend 10 favors to receive 6 months of the lowest of the requesting country's and the target country's income.
*   **Trade Favors for Soldiers** - Spend 10 favors for 6 months of the lowest of the requesting country's and the target country's manpower.
*   **Trade Favors for Sailors** - Spend 10 favors for 6 months of the lowest of the requesting country's and the target country's sailors.
*   **Reduce Opinion** - Spend 10 favors to reduce the target country's opinion of a third country by 100.
*   **Ask to Return Core** - Spend 3 favor per development to force another country to cede any province it owns and which you or your subject has a core on.
*   **Break Alliance with X** - Spend 50 favors to force an allied country to break an alliance with a third country. This also blocks them from reforming the broken alliance for ten years.
*   **Request Relative as Heir** - Spend 90 favors to give an heirless country an heir of your dynasty. Both the acting and target countries must be monarchies. However, it generates 20 aggressive expansion with every country of the same religion. (It generates aggressive expansion with countries of your own religion, if the religion of your own nation and the target nation differ.)

  

### Papal actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=63 "Edit section: Papal actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=63 "Edit section: Papal actions")\]

_Main article: [Papacy](/Papacy "Papacy")_  

Some diplomatic actions require control of the Curia and are also discussed on the [papacy](/Papacy "Papacy") page. One of the diplomatic actions, call for crusade, allows the curia controller to call a crusade on a heathen nation. This will give every Christian nation bonuses if they are fighting in a war against the crusade target. The other action, excommunication, will grant every neighbor of the excommunicated ruler of a nation a free casus belli.

### Emperor actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=64 "Edit section: Emperor actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=64 "Edit section: Emperor actions")\]

_Main article: [Holy Roman Empire#Diplomatic Actions of the Emperor](/Holy_Roman_Empire#Diplomatic_Actions_of_the_Emperor "Holy Roman Empire")_  

The Emperor of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire") has several special diplomatic options available. These action are each explained in more detail on the Holy Roman Empire page.

### Great Power actions\[[edit](/index.php?title=Diplomacy&veaction=edit&section=65 "Edit section: Great Power actions") | [edit source](/index.php?title=Diplomacy&action=edit&section=65 "Edit section: Great Power actions")\]

_Main article: [Great power](/Great_power "Great power")_  

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")[![Emperor](/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_(DLC) "Emperor")

Available only with the [Rights of Man](/Rights_of_Man "Rights of Man") DLC _or_ the [Emperor](/Emperor_(DLC) "Emperor (DLC)") DLC enabled.

The top 8 high-scoring nations receive the _Great Power_ status. For being a great power, you will unlock the following actions:

*   **Take on Foreign Debt** – Pay off all the loans of the target independent non-great power country. Gives **+10** [![Icon diplomacy relations.png](/images/e/e6/Icon_diplomacy_relations.png)](/Relations "Relations") relations bonus for every standard size loan of the target you clear, capped at **+200**, decaying **\-2**/year. Also grants **+5** trust and **+2** favours (if [![The Cossacks.png](/images/thumb/b/b6/The_Cossacks.png/28px-The_Cossacks.png)](/The_Cossacks "The Cossacks") The Cossacks is enabled). Requires enough money to pay off target’s loans.
*   **Influence Nation** – Pay 1 year of target income(minimum cost [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") 60) to increase relations and grant **+1** [![All power costs.png](/images/thumb/0/0f/All_power_costs.png/28px-All_power_costs.png)](/All_power_costs "All power costs") monarch points in their weakest category for 10 years in a target non-great power nation. This raises their opinion of the great power by **+25** for the 10 years, also gives +5 trust. Going to war with them cancels this bonus.
*   **Intervene in War** – If there is an ongoing war between three or more great powers but an imbalance in the number of great powers involved on each side, you can make it your business to intervene. For example, if great power England is singlehandedly fighting the great powers of France and Spain, you as a great power Commonwealth can intervene on England's side to balance out the number of great powers involved.
*   **Break Alliance** – This will force a nation to break its alliance with another. They will accept if the target nation is sufficiently afraid of the player and you will gain a 10-year one-way truce with the nation you forced this upon. It is useful for stripping the war target of pesky roadblocks, because there won't be a truce between the great power and the former ally. The former ally gets a "Forced ally to break alliance" CB against the great power for 10 years. Both the target country and the former ally get a **\-50** [![Icon diplomacy relations.png](/images/e/e6/Icon_diplomacy_relations.png)](/Relations "Relations") relations modifier with the great power. The target country's trust towards the great power will be reduced by **5**. This action is only available with the [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") [Rights of Man](/Rights_of_Man "Rights of Man") DLC, but not with the [![Emperor](/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_(DLC) "Emperor") [Emperor](/Emperor_(DLC) "Emperor (DLC)") DLC.

**Note:** nations who lose the status have access to the above actions for a grace period of 5 years.

Other\[[edit](/index.php?title=Diplomacy&veaction=edit&section=66 "Edit section: Other") | [edit source](/index.php?title=Diplomacy&action=edit&section=66 "Edit section: Other")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

These actions are not in the main list, but are also conducted via the Diplomacy panel.

### Select rival\[[edit](/index.php?title=Diplomacy&veaction=edit&section=67 "Edit section: Select rival") | [edit source](/index.php?title=Diplomacy&action=edit&section=67 "Edit section: Select rival")\]

[![](/images/thumb/1/10/Rival_interface.png/330px-Rival_interface.png)](/File:Rival_interface.png)

[](/File:Rival_interface.png "Enlarge")

The rival mechanic was added with [patch 1.6](/Patch_1.6 "Patch 1.6").

Rivals are countries that a nation expects to come into conflict with in the future. Rivals are usually very comparable in military and diplomatic power and have interests in the same regions and thus will often clash with each other. Rivals may be only selected from countries that are comparable in power. When in the rival selection screen, the nations that are available as rivals and their corresponding opinion of the country and their relative army and navy strength can be seen. A country can have up to 3 rivals[\[2\]](#cite_note-2) at the same time. If a rival becomes too weak or too strong it will cease being a valid rival. When selecting possible rivals, the game will take the relative army strength into higher account than the relative navy strength. Relative development and technology levels are also taken into accord. Nations must be relatively near to be eligible rivals, with more powerful countries able to have rivals at greater distance. Setting a nation as a rival will greatly decrease the amount of diplomacy that can be exchanged between the two nations. Rivals rarely accept diplomatic requests from their nemeses. In order to be rivals both countries must have each other discovered. Selecting a rival has the following benefits:

*   A nation is more likely to sign alliances with the enemies of their rivals.
*   **+25%** [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/24px-Yearly_prestige.png)](/Prestige "Prestige") prestige from defeating a rival in battle.[\[3\]](#cite_note-3)
*   No [![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/24px-Trade_efficiency.png)](/Trade_efficiency "Trade efficiency") trade efficiency penalty from embargoing the rival.
*   **+25%** spy network build rate against the rival.[\[4\]](#cite_note-4)
*   **−33%** [![Diplomatic power.png](/images/thumb/d/da/Diplomatic_power.png/24px-Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") Diplomatic Power cost for demanding unjustified provinces from the rival in peace deals.[\[5\]](#cite_note-5)

Having a rival and taking actions against it grants [power projection](/Power_projection "Power projection"). Not having enough rivals gives a penalty to power projection.

Changing a rival is possible after 5 years[\[6\]](#cite_note-6) for [![Diplomatic power.png](/images/thumb/d/da/Diplomatic_power.png/20px-Diplomatic_power.png)](/Diplomatic_power "Diplomatic power")**100** diplomatic power[\[7\]](#cite_note-7). The cost to change a rival may be reduced by **50%** with the ‘Flexible Rivalries’ ability during the [![Age of Absolutism.png](/images/thumb/e/ec/Age_of_Absolutism.png/20px-Age_of_Absolutism.png)](/Age_of_Absolutism "Age of Absolutism") ‘Age of Absolutism’ and by **20%** with the North Western Native idea 1: Raid Warfare.

AI nations have distance penalty cut by 50% and given a lower treshold than the player as to when existing rivals become too small or too big.

#### Historical Rivals\[[edit](/index.php?title=Diplomacy&veaction=edit&section=68 "Edit section: Historical Rivals") | [edit source](/index.php?title=Diplomacy&action=edit&section=68 "Edit section: Historical Rivals")\]

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

_Main article: [Relations#Historical\_friends\_and\_rivals](/Relations#Historical_friends_and_rivals "Relations")_  

Historical rivals are pre-set by the [scenario's](/Scenarios "Scenarios") starting conditions, and do not change over time (except by [events](/Event "Event")). Historical rivalry not only affects relations by giving **−25** malus, but historical rivals will almost always rival each other and if that's no longer possible, they will never make an alliance. If historical rival country is a [vassal](/Vassal "Vassal") or [lesser partner](/Personal_union "Personal union") in personal union, it will have [![Liberty desire.png](/images/thumb/f/fd/Liberty_desire.png/30px-Liberty_desire.png)](/Liberty_desire "Liberty desire")**+50%** [liberty desire](/Liberty_desire "Liberty desire") modifier. For example: Denmark and Sweden after [The Scandinavian Constitution](/Danish_events#The_Scandinavian_Constitution "Danish events") event.

### Release subject\[[edit](/index.php?title=Diplomacy&veaction=edit&section=69 "Edit section: Release subject") | [edit source](/index.php?title=Diplomacy&action=edit&section=69 "Edit section: Release subject")\]

This releases a country as a [![Vassal.png](/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") vassal. The released country gets all of their core provinces that are owned by the releasing country, except for the releasing country's capital if applicable; the releasing country does not need to have cores on any of the provinces. Nations can only be released if at least one owned province is both a core of the nation and has its primary culture. This action can not be done while at war.

This is far more useful of an action than it looks like at first:

*   Annex one or two provinces with cores of an extinct, but formerly large nation, and release that nation as a vassal. Then, you can slowly retake all their former land with the Reconquest CB, at no diplomatic point cost and only 25% of the Aggressive Expansion penalty.
*   You should also do this if the nation is merely near death, but cannot be diplomatically vassalized for whatever reason. It causes more AE than forced vassalization, but the difference will not be significant if the country is small, and you will immediately have a vassal with low liberty desire and a good opinion of you, instead of large penalties from forced vassalization and aggressive expansion.

Achievements\[[edit](/index.php?title=Diplomacy&veaction=edit&section=70 "Edit section: Achievements") | [edit source](/index.php?title=Diplomacy&action=edit&section=70 "Edit section: Achievements")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[![Subsidize my Love icon](/images/a/af/Subsidize_my_Love.jpg)](/File:Subsidize_my_Love.jpg "Subsidize my Love icon")

Subsidize my Love

Subsidize 3 different allies at least 50% of their monthly income without running a deficit.

[![The Continuation of Diplomacy icon](/images/f/f9/The_Continuation_of_Diplomacy.jpg)](/File:The_Continuation_of_Diplomacy.jpg "The Continuation of Diplomacy icon")

The Continuation of Diplomacy

Successfully use Threaten War to gain a province from another nation.

[![Until death do us apart icon](/images/6/6b/Until_death_do_us_apart.jpg)](/File:Until_death_do_us_apart.jpg "Until death do us apart icon")

Until death do us apart

Secure a Royal Marriage with another country.

Footnotes\[[edit](/index.php?title=Diplomacy&veaction=edit&section=71 "Edit section: Footnotes") | [edit source](/index.php?title=Diplomacy&action=edit&section=71 "Edit section: Footnotes")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  [↑](#cite_ref-1 "Jump up") See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers#Base values](/Static_modifiers#Base_values "Static modifiers")).
2.  [↑](#cite_ref-2 "Jump up") See in /Europa Universalis IV/common/defines.lua: _NUM\_POSSIBLE\_RIVALS = 3,_
3.  [↑](#cite_ref-3 "Jump up") See in /Europa Universalis IV/common/defines.lua: _RIVAL\_PRESTIGE\_BONUS = 0.25,_
4.  [↑](#cite_ref-4 "Jump up") See in /Europa Universalis IV/common/defines.lua: _RIVAL\_SPY\_OFFENCE = 0.25,_
5.  [↑](#cite_ref-5 "Jump up") See in /Europa Universalis IV/common/defines.lua: _RIVAL\_PEACE\_COST\_REDUCTION = -0.33,_
6.  [↑](#cite_ref-6 "Jump up") See in /Europa Universalis IV/common/defines.lua: _CHANGE\_RIVAL\_YEARS = 5,_
7.  [↑](#cite_ref-7 "Jump up") See in /Europa Universalis IV/common/defines.lua: _PS\_REPLACE\_RIVAL = 100,_

**

Mechanics

**

*   [External relations](javascript:void(0); "External relations")
*   [Internal country management](javascript:void(0); "Internal country management")
*   [Economy](javascript:void(0); "Economy")
*   [Meta](javascript:void(0); "Meta")
*   [Technology](javascript:void(0); "Technology")
*   [War](javascript:void(0); "War")

Diplomacy

Diplomacy • [Diplomatic feedback](/Diplomatic_feedback "Diplomatic feedback") • [Envoy](/Envoy "Envoy") • [Espionage](/Espionage "Espionage")

Other

[Defender of the Faith](/Defender_of_the_Faith "Defender of the Faith") • [Great power](/Great_power "Great power") • [Hegemon](/Hegemon "Hegemon") • [Prestige](/Prestige "Prestige") • [Regions](/Regions "Regions")

Political structures

[Emperor of China](/Emperor_of_China "Emperor of China") • [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire") • [Papacy](/Papacy "Papacy")

Relations

[Personal union](/Personal_union "Personal union") • [Relations](/Relations "Relations") • [Subject nation](/Subject_nation "Subject nation")

Concepts

[Corruption](/Corruption "Corruption") • [Governing capacity](/Governing_capacity "Governing capacity") • [Overextension](/Overextension "Overextension") • [Power projection](/Power_projection "Power projection") • [Rebellion](/Rebellion "Rebellion") • [Regions](/Regions "Regions") • [Stability](/Stability "Stability") • [States and territories](/States_and_territories "States and territories")

Court

[Advisors](/Advisors "Advisors") • [Consort](/Consort "Consort") • [Monarch power](/Monarch_power "Monarch power") • [National focus](/National_focus "National focus") • [Ruler](/Ruler "Ruler") • [Ruler personalities](/Ruler_personalities "Ruler personalities")

Estates and Factions

[Base estates](/Base_estates "Base estates") • [Cossacks estates](/Cossacks_estates "Cossacks estates") • [Dharma estates](/Dharma_estates "Dharma estates") • [Estates](/Estates "Estates") • [Factions](/Factions "Factions")

Events and Missions

[Decisions](/Decisions "Decisions") • [Disasters](/Disasters "Disasters") • [Events](/Events "Events") • [List of decisions](/List_of_decision_lists "List of decision lists") • [Missions](/Missions "Missions")

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

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Diplomacy&oldid=154363#Diplomatic\_reputation](https://eu4.paradoxwikis.com/index.php?title=Diplomacy&oldid=154363#Diplomatic_reputation)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.24](/Category:1.24 "Category:1.24")
*   [Diplomacy](/Category:Diplomacy "Category:Diplomacy")

Hidden category:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")