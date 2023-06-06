Core
====

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

A **core** is a [province](/Province "Province") that is considered a rightful part of a country. Cores give several strategically important benefits:

*   Provinces without a core add to [overextension](/Overextension "Overextension") (except colonies[\[1\]](#cite_note-1)), proportional to their development value.
*   Core provinces get a +75% positive tax modifier.
*   A country will always have a casus belli if one of their core provinces is owned by another country.
*   Some missions or decisions require certain provinces to be cored

The following actions are not allowed in uncored provinces:

*   [Developing](/Development#Developing_a_province "Development")
*   [Exploit development](/Exploit_development "Exploit development")
*   Moving the [capital](/Capital "Capital") or [main trading port](/Main_trading_port "Main trading port") to the province
*   [Culture conversion](/Culture_conversion "Culture conversion")
*   [Recruiting](/Army#Recruiting_an_army "Army") non-mercenary units
*   Establishing a [holy order](/Holy_order "Holy order") (requires a full core)
*   Adding the province to the [HRE](/HRE "HRE")
*   Create a [trade post](/Trade_post "Trade post")

Contents
--------

*   [1 Coring](#Coring)
    *   [1.1 States and territories](#States_and_territories)
    *   [1.2 Range](#Range)
    *   [1.3 Duration](#Duration)
    *   [1.4 Restrictions](#Restrictions)
    *   [1.5 Gaining cores through other means](#Gaining_cores_through_other_means)
*   [2 Coring costs](#Coring_costs)
    *   [2.1 Base costs](#Base_costs)
    *   [2.2 Modifiers](#Modifiers)
    *   [2.3 Hostile core-creation](#Hostile_core-creation)
*   [3 Losing cores](#Losing_cores)
*   [4 Uncontested cores](#Uncontested_cores)
*   [5 References](#References)

Coring\[[edit](/index.php?title=Core&veaction=edit&section=1 "Edit section: Coring") | [edit source](/index.php?title=Core&action=edit&section=1 "Edit section: Coring")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

### States and territories\[[edit](/index.php?title=Core&veaction=edit&section=2 "Edit section: States and territories") | [edit source](/index.php?title=Core&action=edit&section=2 "Edit section: States and territories")\]

_Main article: [States and territories](/States_and_territories "States and territories")_  

_States and territories_ are a new mechanic introduced in [patch 1.16](/Patch_1.16 "Patch 1.16") intended to replace the old _Overseas_ mechanic. The system introduces a 2-part coring process. A newly conquered province is considered as part of a territory (unless it already belongs to one of the nation's existing states). Turning a territory into a state requires that all owned provinces in the area be made "territorial cores" (which have a higher minimum autonomy, and are lost if the province is conquered); this costs half the base coring cost and takes the same amount of time. Once a state has been established, it is possible to instantaneously complete the coring process by paying the remaining coring costs. Administering development in states and territories costs governing capacity, which has a soft limit based on administrative technology.

### Range\[[edit](/index.php?title=Core&veaction=edit&section=3 "Edit section: Range") | [edit source](/index.php?title=Core&action=edit&section=3 "Edit section: Range")\]

Coring range is the same as [colonial range](/Colonization#Range "Colonization"), so it is often necessary to research diplomatic tech if expanding overseas without a land bridge. To check the range to a given province, change the map mode to "colonial range", and hover over the province of interest. The range will show, green for in range and red for out of range.

The following ideas and policies increase colonial range:

[![Colonial range.png](/images/thumb/f/f5/Colonial_range.png/24px-Colonial_range.png)](/Colonial_range "Colonial range")

Traditions

Ideas

Bonuses

CollapsePolicies

+50%

—

*   Exploration idea 3: Overseas Exploration

—

—

+40%

—

*   Hawaiian idea 7: Legendary Voyagers

—

—

+33%

—

*   Norwegian idea 1: The Call of our Forefathers

—

—

+25%

—

*   Livonian idea 5: Livonian Colonization

—

*   Indigenous-Trade: Commercial Tribes

+20%

—

*   Kilwan idea 1: Kilwan Latitude Staves
*   Norman idea 4: Descendants of Seafarers
*   Portuguese idea 1: Legacy of the Navigator

—

*   Exploration-Plutocratic: The Colonial Companies Act

+15%

—

*   Couronian idea 5: Couronian Colonization

—

—

+10%

—

*   Fijian idea 2: Lutunasobasoba and Degel
*   Iwi idea 1: Sons of Kupe

—

—

Diplomatic technology increases colonial range as seen here:

[![Diplomatic technology.png](/images/2/22/Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology") Diplomatic  
technology

[![Colonial range.png](/images/thumb/f/f5/Colonial_range.png/28px-Colonial_range.png)](/Colonial_range "Colonial range") Colonial  
range

0

**+60**

3

**+100**

7

**+115**

9

**+50**

11

**+100**

15

**+50**

17

**+50**

19

**+50**

23

**+150**

26

**+200**

Colonial range can also be increased by hiring a Navigator [advisor](/Advisor "Advisor"). Note that navigator advisors can only appear if a country has at least one [![Colonists.png](/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist") colonist [envoy](/Envoy "Envoy").

*   If a country has a core in province A, it can core every neighboring province. A doesn't have to be owned or controlled by that country.
*   If a country controls, owns and has a core in coastal province A, it can core every other coastal province that is within coring range. The ingame tooltip of requiring an "unblockaded" province is wrong, blockades do not affect this.
*   If a country controls, owns and has a core in coastal province A, then it can core any province that has a "land bridge" of owned provinces to A and is within coring distance of A.
*   If a country's subject owns and has a core in province B, then the country can core any province C which is adjacent to B as long as C is on the same continent as the capital of the country.
*   If a country's colonial nation owns and has a core in province C, then the country can core any province adjacent to C in all continents.

The [Age of Revolutions](/Ages "Ages") 'Unrestricted Conquest' splendor ability allows any province to be cored, regardless of range or connection. (requires [![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven") [Mandate of Heaven](/Mandate_of_Heaven "Mandate of Heaven")).

The [![Imperial authority.png](/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") [Holy Roman Emperor](/Holy_Roman_Empire "Holy Roman Empire") can core any province that belongs to the empire, regardless of where it is.

### Duration\[[edit](/index.php?title=Core&veaction=edit&section=4 "Edit section: Duration") | [edit source](/index.php?title=Core&action=edit&section=4 "Edit section: Duration")\]

The base duration for coring is **36 months**. All the coring-cost modifiers apply to the coring duration, except for administrative efficiency, innovativeness, and corruption. Claims apply in a different manner, as shown below.

For example, it can be reduced by the following modifiers:

*   Adaptability idea **−25%** coring cost modifier
*   Country traditions or ideas that reduce coring cost (Ottomans **−20%** for example)
*   Choosing Shiva as personal deity of a ruler of a Hindu nation **−10%** (only with [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") Wealth of Nations DLC)
*   [Tribal Government](/Government#Tribal_governments "Government") **−5%** per government rank

**Note:** Hostile core-creation will not apply to coring duration.

These modifiers above will stack additively.

Having a claim of any type (temporary or permanent) will give a multiplicative reduction.

*   Province is claimed: **−10%**

A further culture bonus may be applied multiplicatively.

*   Province in same culture group than primary culture: **−50%**
*   Province has promoted culture: **−25%**

For example, if Ottomans with Kannunames (**−20%**) and Adaptability idea **−25%** is going to core a Greek (promoted culture) province with no claim, it will take 36 × (1 − 0.20 − 0.25) × (1 − 0.25) = 14 months to core.

**Note:** Coring takes a **minimum of 6 months.**

Coring progress will be halted if the province is occupied by hostile forces or when the current owner is at war with any country that already has a core on the province. Progress will resume as soon as these conditions are lifted.

### Restrictions\[[edit](/index.php?title=Core&veaction=edit&section=5 "Edit section: Restrictions") | [edit source](/index.php?title=Core&action=edit&section=5 "Edit section: Restrictions")\]

It is not possible to core a province:

*   While being at war with someone who also has a core in that province. The ongoing core creation will temporarily halt if this happens.
*   While there is a missionary converting the province.
*   While a building is being constructed in the province.
*   While the culture of the province is being changed.
*   Province is occupied (Progress halts, will resume if unoccupied).
*   Province is under siege (Progress halts, will resume if siege is lifted).

Once the coring process has been started, failing the adjacency, range or land connection requirements does not revert the coring process. Coring will proceed as originally scheduled. As well, gaining or losing cost modifiers or development while coring does not change the [![Administrative power.png](/images/e/ef/Administrative_power.png)](/Administrative_power "Administrative power") cost originally deducted nor the coring duration originally scheduled.

### Gaining cores through other means\[[edit](/index.php?title=Core&veaction=edit&section=6 "Edit section: Gaining cores through other means") | [edit source](/index.php?title=Core&action=edit&section=6 "Edit section: Gaining cores through other means")\]

In addition to coring newly acquired provinces manually, a nation can also gain cores by [diplo-annexation of vassals](/Vassal#Diplomatic_annexation_strategy "Vassal") or [integrating a junior partner of a personal union](/Personal_union#Incorporation_or_inheritance "Personal union"). Both processes automatically give cores on all provinces of the acquired territory, making the strategy of "feeding" vassals with uncored provinces a viable strategy to save [monarch points](/Monarch_points "Monarch points"), especially [![Administrative power.png](/images/e/ef/Administrative_power.png)](/Administrative_power "Administrative power") administrative power. However, provinces cored this way begin with high [local autonomy](/Local_autonomy "Local autonomy") and will be relatively unproductive for some time, depending on government type.

When a colony becomes a city, its owner gains a free territorial core on it. If the owner has a [colonial nation](/Colonial_nation "Colonial nation") in the same colonial region (or becomes eligible for one with the colony finished), the core is instantly granted to the colonial nation instead (and ceded to it).

If a nation is occupying a province of their religion which is owned by a nation of a different religion, they have a small chance of gaining the province as a core; a full core, even if the province is in a territory. If the province is owned by a Tengri nation who has syncretized its faith, the event can still fire.

Certain decisions can also give cores on specific provinces. For example, the Ottoman decision "Make Constantinople capital" gives the ottomans a free core on Constantinople.

Coring costs\[[edit](/index.php?title=Core&veaction=edit&section=7 "Edit section: Coring costs") | [edit source](/index.php?title=Core&action=edit&section=7 "Edit section: Coring costs")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

### Base costs\[[edit](/index.php?title=Core&veaction=edit&section=8 "Edit section: Base costs") | [edit source](/index.php?title=Core&action=edit&section=8 "Edit section: Base costs")\]

Coring is an action which costs [![Administrative power.png](/images/e/ef/Administrative_power.png)](/Administrative_power "Administrative power")[administrative monarch points](/Monarch_points "Monarch points"). The base cost depend on the [![Development.png](/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") development of the province. For each point of development, the coring cost is 10[\[2\]](#cite_note-2) [![Administrative power.png](/images/e/ef/Administrative_power.png)](/Administrative_power "Administrative power") administrative monarch points.

### Modifiers\[[edit](/index.php?title=Core&veaction=edit&section=9 "Edit section: Modifiers") | [edit source](/index.php?title=Core&action=edit&section=9 "Edit section: Modifiers")\]

Core-creation costs are influenced by the following:

Ideas and policies:

[![Core-creation cost.png](/images/thumb/5/56/Core-creation_cost.png/24px-Core-creation_cost.png)](/Core-creation_cost "Core-creation cost")

Traditions

Ideas

Bonuses

CollapsePolicies

−25%

*   Great Qing traditions
*   Mughal traditions

*   Administrative idea 3: Adaptability
*   Chagatai idea 5: The Tradition of Conquest
*   Golden Horde idea 2: Perso-Mongol Administration
*   Great Yuan idea 1: Da Zai Qian Yuan
*   Horde idea 5: The Tradition of Conquest
*   Italian idea 7: The Path to Citizenship
*   Kazani idea 2: Tribal Legacy
*   Mongolian idea 4: The Northern Yuan
*   Ottoman idea 1: Kanunnames
*   Roman idea 7: Imperium Sine Fine

*   Crimean ambition

—

−20%

*   Anatolian traditions
*   Candarid traditions
*   Cirebonese traditions
*   Karamanid traditions
*   Oirat traditions

*   Alaskan idea 3: The Secretary's Icebox
*   Angevin idea 1: Decentralized Rule
*   Aq Qoyunlu idea 3: Turko-Iranian Bureaucracy
*   Banteni idea 7: Cultural Richness
*   Bukharan idea 1: Jochid Patrimony
*   Holy Roman idea 5: Roman Heritage
*   Kaurna idea 7: South Australia Act
*   Lotharingian idea 7: Europa Universalis Imperii
*   Revolutionary French idea 7: European Ambitions
*   Rûmi idea 2: Sultan al-Sharq wa al-Gharb

—

—

−15%

*   Cherokee traditions
*   Gutnish traditions
*   Russian traditions
*   Semien traditions

*   Andalusian idea 5: Jund Settlements
*   Ayyubid idea 5: Rise of the Eagle
*   Brazilian idea 5: Entradas and Bandeiras
*   Dalmatian idea 7: Legacy of Illyria
*   Granada idea 2: Recover Al Andalus
*   Hawaiian idea 6: Naha Prophecy
*   Kamilaroi idea 1: The Sacred Caves
*   Kitaran idea 6: Nile Conquest
*   Larrakia idea 7: The Kenbi Land Claim
*   Manchu idea 1: United Three Jurchens
*   Maratha idea 4: Office of the Peshwa
*   Rajputana idea 1: Imperial Legacy
*   Ryazan idea 6: Russian Ambition
*   Southeastern Woodlands idea 1: Mississippian Legacy
*   Tarascan idea 7: Tarascan Assimilation

*   Bosnian ambition
*   Burmese ambition
*   Herzegovinian ambition
*   Saluzzo ambition

—

−10%

*   Bulgarian traditions
*   Client State traditions
*   Federation traditions
*   Thomondian traditions

*   Dai Viet idea 5: Don Dien
*   Date idea 1: Oshu Shugo
*   Delhian idea 3: Restore the Delhi Empire
*   Desmondian idea 4: The Munster Ambition
*   Divine idea 2: Church Administration
*   Ethiopian idea 6: Expansionist Policy
*   French idea 5: Divine Right
*   Imagawa idea 7: March to Kyoto
*   Ito idea 4: Anti-Shugo Movement
*   Iwi idea 7: The Maori King Movement
*   Lunda idea 1: The Great Family
*   Manx idea 2: Kings of Mann
*   Mysorean idea 1: Unification of Mysore
*   Naxian idea 7: Naxian Ambition
*   Oda idea 2: Tenka Fubu
*   Qara Qoyunlu idea 2: Governor of Azerbaijan
*   Ruthenian idea 6: Reuniting Rus'
*   Ruthenian idea 6: Reuniting Rus'
*   Sardinian idea 5: Piedmontese Ambition
*   Sardinian-Piedmontese idea 5: Centralized State
*   Sicilian idea 4: Greater Sicily
*   Sonoran idea 2: The Sale of Sonoran Script
*   Tongan idea 4: True Claimants to Polynesia
*   Yamana idea 2: Grand Shugo
*   Zulu idea 4: Zulu Expansion

*   Greek ambition

—

−5%

—

—

—

*   Court-Administrative: Big Government Act
*   Economic-Divine: Otto Per Mille

Further modifiers:

Type

[![Core-creation cost.png](/images/thumb/5/56/Core-creation_cost.png/28px-Core-creation_cost.png)](/Core-creation_cost "Core-creation cost")

Having a [claim](/Claim "Claim")

**−10%**

Having a [permanent claim](/Permanent_claim "Permanent claim")

**−25%**

Territorial core

**−50%**

For the Holy Roman Emperor after the reform “[Reform the Hofgericht](/Imperial_reform#List_of_reforms_and_their_effects "Imperial reform")”

**−10%**

Enacting celestial reform “[Establish Lifan Yuan](/Emperor_of_China#Reforms "Emperor of China")” (requires [![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven") DLC)

**−10%**

Enacting celestial decree “[Expand Palace Bureaucracy](/Emperor_of_China#Decrees "Emperor of China")” (requires [![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven") DLC)

**−10%**

Tribal Government Reform “[Centralize Power](/Tribal_government#Modernization "Tribal government")” (requires [![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma") DLC)

**−5%**

Adopt Land Acquisition Taxation Policy as an [Indian Sultanate](/Monarchy#Indian_Sultanate "Monarchy") or [Iqta](/Monarchy#Iqta "Monarchy") (requires [![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/28px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization") DLC)

**−5%**

[Tribal despotism](/Tribal_despotism "Tribal despotism") government form

**−10%**

[Assimilating](/Mughals#Diwan "Mughals") Hindustani culture as Mughal (requires [![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma") DLC)

**−10%**

Choosing [![Hindu Deity Shiva](/images/thumb/e/ec/Shiva.png/28px-Shiva.png)](/Shiva "Shiva") Shiva as [personal deity](/Personal_deity "Personal deity") of a ruler of a [![Hinduism](/images/thumb/1/1a/Hinduism.png/28px-Hinduism.png)](/Hindu "Hindu") Hindu nation (requires [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") [Wealth of Nations](/Wealth_of_Nations "Wealth of Nations") DLC)

**−10%**

Choosing [![Norse Deity Odin](/images/thumb/5/58/Odin.png/28px-Odin.png)](/Odin "Odin") Odin as [personal deity](/Personal_deity "Personal deity") of a ruler of a [![Norse.png](/images/thumb/c/ce/Norse.png/28px-Norse.png)](/Norse "Norse") Norse nation (requires [![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado") [El Dorado](/El_Dorado "El Dorado") DLC)

**−10%**

[![War exhaustion.png](/images/8/8c/War_exhaustion.png)](/War_exhaustion "War exhaustion") War exhaustion

**+3%** per point

[![Corruption.png](/images/7/75/Corruption.png)](/Corruption "Corruption") Corruption

**+1%** per point

[![Administrative efficiency.png](/images/thumb/6/6e/Administrative_efficiency.png/28px-Administrative_efficiency.png)](/Administrative_efficiency "Administrative efficiency") [Administrative efficiency](/Administrative_efficiency "Administrative efficiency")

**−1%** per 1%

Enacting Promote Territorial Rights as a [![Coptic.png](/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") Coptic nation (requires [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") [Rights of Man](/Rights_of_Man "Rights of Man") DLC)

**−10%**

Enacting Reform the Bureaucracy as a [![Mayan.png](/images/thumb/9/98/Mayan.png/28px-Mayan.png)](/Mayan "Mayan") Mayan nation (requires [![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado") [El Dorado](/El_Dorado "El Dorado") DLC)

**−20%**

Enacting Reform the Bureaucracy as an [![Inti.png](/images/thumb/d/d2/Inti.png/28px-Inti.png)](/Inti "Inti") Inti nation (requires [![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado") [El Dorado](/El_Dorado "El Dorado") DLC)

**−10%**

Holding [![Great project kashi vishwanath.png](/images/thumb/7/72/Great_project_kashi_vishwanath.png/48px-Great_project_kashi_vishwanath.png)](/File:Great_project_kashi_vishwanath.png) [Kashi Vishwanath Temple](/Kashi_Vishwanath_Temple "Kashi Vishwanath Temple") while province religion is in [Dharmic](/Dharmic "Dharmic") group and same as owner (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**\-5%** [![Great project level icon tier 1.png](/images/thumb/a/a0/Great_project_level_icon_tier_1.png/24px-Great_project_level_icon_tier_1.png)](/File:Great_project_level_icon_tier_1.png) / **\-7.5%** [![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) / **\-10%** [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png)

Modifiers are summed before being applied, except the modifiers from administrative efficiency and being a territory, which are applied multiplicatively after the additive modifiers are applied.

**Note:** The minimum coring cost for a province before applying multiplicative modifiers is 20% of its coring cost, or 2 Administrative power per development, up to 30 development. Even with a **−100%** modifier on a province, the cost is still **20%** of the coring cost. Also the maximum coring cost is capped at 30 development for a province. This means that if the province has 31 development, its coring cost will be treated as if it only had 30 development.

### Hostile core-creation\[[edit](/index.php?title=Core&veaction=edit&section=10 "Edit section: Hostile core-creation") | [edit source](/index.php?title=Core&action=edit&section=10 "Edit section: Hostile core-creation")\]

The national ideas listed below _increase_ coring costs for a province with a core from a nation which possesses this modifier. The increase applies even if the nation with the core does not exist. These modifiers are taken into account by the AI when making decisions on which nation to attack.

[![Hostile core-creation cost on us.png](/images/thumb/9/93/Hostile_core-creation_cost_on_us.png/24px-Hostile_core-creation_cost_on_us.png)](/Hostile_core-creation_cost_on_us "Hostile core-creation cost on us")

Traditions

Ideas

Bonuses

CollapsePolicies

In patch 1.35 no ideas and policies have the modifier _“hostile core-creation cost on us”_

Losing cores\[[edit](/index.php?title=Core&veaction=edit&section=11 "Edit section: Losing cores") | [edit source](/index.php?title=Core&action=edit&section=11 "Edit section: Losing cores")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

When negotiating a [peace deal](/Warfare#Demands "Warfare"), some of the loser's cores may no longer exist afterwards:

*   As mentioned above, territorial cores in a province disappear if the province changes hands.
*   The loser can be forced to 'revoke their core' on any province they do not own and that is not of their primary culture (unless the victor owns that province and hasn't cored it themselves - probably a restriction to make working around hostile coring cost increases more difficult).
*   If the loser is forced to 'release a nation', or 'return a core' to a third nation, their cores on all provinces not of their primary culture disappear.
*   If a country is entirely destroyed, it loses all cores in provinces not of its primary culture **group**.

Cores in uncontrolled provinces will disappear some time after the most recent of these events:

*   The owner of the core lost ownership of the province.
*   A war between the current owner and the nation owning the core was fought.

The time to lose a core depends on the province's culture relative to the core:[\[3\]](#cite_note-3)

*   If the core is the primary nation for that province culture, or belongs to a nation that is a subject of the current owner, it will never expire.
*   If the core shares a culture group with the province culture, the base expiration duration is 150 years, else 50 years.
*   This amount of time is affected by the current owner's [![Absolutism.png](/images/thumb/c/c2/Absolutism.png/28px-Absolutism.png)](/Absolutism "Absolutism")[absolutism](/Absolutism "Absolutism"), scaling up to 50% reduced duration at 100 absolutism.
*   Changing the culture in a province changes the length of the core decay timer. If a change to the length of the core decay timer means that the core would already have disappeared, then the core disappears.

Other ways to lose cores:

*   A nation can abandon a core on a province that it doesn't own (a player can do this with a button on the province view, requires [![Art of War.png](/images/thumb/0/0f/Art_of_War.png/28px-Art_of_War.png)](/Art_of_War "Art of War")[Art of War](/Art_of_War "Art of War")). However, this action also costs some [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige")[prestige](/Prestige "Prestige").
*   When a nation sells a province, they lose both the province and core. However, this action also costs some [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige")[prestige](/Prestige "Prestige").
*   When a nation releases a vassal from owned provinces, or cancels an existing subject's vassalage, they lose all cores in that subject's provinces.

Uncontested cores\[[edit](/index.php?title=Core&veaction=edit&section=12 "Edit section: Uncontested cores") | [edit source](/index.php?title=Core&action=edit&section=12 "Edit section: Uncontested cores")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A country has uncontested cores when it has cores on provinces that are owned by (part of) other countries without being at war or in a truce with those countries. They are a drain on a country's prestige: a yearly decrease of **−0.1** prestige for each core province being held by another nation. Due to this prestige loss, it may be a good idea to recover such core provinces, especially if the provincial culture is already accepted in your nation.

References\[[edit](/index.php?title=Core&veaction=edit&section=13 "Edit section: References") | [edit source](/index.php?title=Core&action=edit&section=13 "Edit section: References")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  [↑](#cite_ref-1 "Jump up") any province which was settled by colonization doesn't give overextension even if it is conquered by another country after the colony finished
2.  [↑](#cite_ref-2 "Jump up") See in /Europa Universalis IV/common/defines.lua: PS\_MAKE\_PROVINCE\_CORE = 10,
3.  [↑](#cite_ref-3 "Jump up") See in /Europa Universalis IV/common/defines.lua: CORE\_LOSE = 50 and CORE\_LOSE\_CULTURE\_GROUP = 150

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

[Decisions](/Decisions "Decisions") • [Disasters](/Disasters "Disasters") • [Events](/Events "Events") • [List of decisions](/List_of_decision_lists "List of decision lists") • [Missions](/Missions "Missions")

Goverment

[Absolutism](/Absolutism "Absolutism") • [Culture](/Culture "Culture") • [Government](/Government "Government") • [Government rank](/Government#Government_rank "Government") • [Modifiers](/Modifiers "Modifiers") • [Policies](/Policies "Policies")

Province mechanics

[Autonomy](/Autonomy "Autonomy") • [Buildings](/Buildings "Buildings") • [Canal](/Canal "Canal") • [Capital](/Capital "Capital") • Core • [Province](/Province "Province")

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

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Core&oldid=154551](https://eu4.paradoxwikis.com/index.php?title=Core&oldid=154551)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.29](/Category:1.29 "Category:1.29")
*   [Province mechanics](/Category:Province_mechanics "Category:Province mechanics")

Hidden categories:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")
*   [Bonus table outdated](/Category:Bonus_table_outdated "Category:Bonus table outdated")