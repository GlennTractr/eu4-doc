Development
===========

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

[![Development.png](/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development")**Development** is a province attribute, which replaces the former system of static base [tax](/Tax "Tax") and [manpower](/Manpower "Manpower"). There are three kinds of development in a province - base tax, production, and manpower, corresponding to administrative, diplomatic and military power respectively. Players can increase province development values by using [monarch power](/Monarch_power "Monarch power"); players who have the [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") Rights of Man expansion can develop subjects' provinces.

Province development is involved in some [Age](/Ages "Ages") Objectives:

*   Having a cored province with at least 30 development is an objective in the Age of Discovery.
*   Having a total development of at least 100 while the nation's capital is _not_ in Europe, Asia and Africa is another objective in the Age of Discovery.
*   Having a capital with at least 50 development is an objective in the Age of Revolutions.
*   Having a subject with at least 250 development is another objective in the Age of Revolutions.

[![](/images/thumb/1/17/Base_development_map.png/300px-Base_development_map.png)](/File:Base_development_map.png)

[](/File:Base_development_map.png "Enlarge")

Base development

Contents
--------

*   [1 Effects of development](#Effects_of_development)
    *   [1.1 Provincial level](#Provincial_level)
    *   [1.2 National level](#National_level)
*   [2 Developing a province](#Developing_a_province)
    *   [2.1 Base cost](#Base_cost)
        *   [2.1.1 Other modifiers](#Other_modifiers)
    *   [2.2 Development cost modifiers](#Development_cost_modifiers)
    *   [2.3 Stacking development cost modifiers](#Stacking_development_cost_modifiers)
        *   [2.3.1 Terrain](#Terrain)
        *   [2.3.2 Climate](#Climate)
        *   [2.3.3 Ideas and traditions](#Ideas_and_traditions)
        *   [2.3.4 Other modifiers](#Other_modifiers_2)
*   [3 Exploiting development](#Exploiting_development)
*   [4 Settlement growth](#Settlement_growth)
*   [5 Concentrate development](#Concentrate_development)
    *   [5.1 Calculation](#Calculation)
*   [6 AI behavior](#AI_behavior)
*   [7 Strategy](#Strategy)
*   [8 References](#References)

Effects of development\[[edit](/index.php?title=Development&veaction=edit&section=1 "Edit section: Effects of development") | [edit source](/index.php?title=Development&action=edit&section=1 "Edit section: Effects of development")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

### Provincial level\[[edit](/index.php?title=Development&veaction=edit&section=2 "Edit section: Provincial level") | [edit source](/index.php?title=Development&action=edit&section=2 "Edit section: Provincial level")\]

A [province](/Province "Province") gains per development level in:

[![Base tax.png](/images/9/90/Base_tax.png)](/Base_tax "Base tax") **Base tax:**

[![Local recruitment time.png](/images/thumb/a/af/Local_recruitment_time.png/28px-Local_recruitment_time.png)](/Local_recruitment_time "Local recruitment time")

**−2%**

Local recruitment time

**−1%**

Local great project upgrade time

[![Local construction time](/images/thumb/9/98/Local_construction_time.png/28px-Local_construction_time.png)](/Construction_time "Local construction time")

**−1%**

Local construction time

[![Local institution spread.png](/images/thumb/c/ce/Local_institution_spread.png/28px-Local_institution_spread.png)](/Institution_spread "Institution spread")

**+2%**

Local institution spread

[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") **+1** yearly tax income base

[![Production.png](/images/thumb/a/ad/Production.png/28px-Production.png)](/Production "Production") **Production:**

[![Local goods produced](/images/thumb/b/b3/Local_goods_produced.png/28px-Local_goods_produced.png)](/Goods_produced "Local goods produced")

**+0.2**%

Local goods produced

[![Local shipbuilding time.png](/images/thumb/d/de/Local_shipbuilding_time.png/28px-Local_shipbuilding_time.png)](/Local_shipbuilding_time "Local shipbuilding time")

**−1%**.0

Local shipbuilding time

[![Local manpower modifier.png](/images/thumb/8/8b/Local_manpower_modifier.png/28px-Local_manpower_modifier.png)](/Local_manpower_modifier "Local manpower modifier") **Manpower:**

[![National garrison growth.png](/images/thumb/9/98/National_garrison_growth.png/28px-National_garrison_growth.png)](/Garrison_growth "Garrison growth")

**+1%**

Garrison growth

[![Manpower.png](/images/thumb/0/0c/Manpower.png/28px-Manpower.png)](/Manpower "Manpower") **+250** maximum [manpower](/Manpower "Manpower")

Irrespective of category, every point of development has the following effects on the individual province (note that only coastal provinces get sailor and naval force limit bonuses):

[![Possible number of buildings.png](/images/thumb/0/02/Possible_number_of_buildings.png/28px-Possible_number_of_buildings.png)](/Possible_number_of_buildings "Possible number of buildings")

**+0.1**00%

Possible number of buildings

[![Supply limit modifier](/images/thumb/9/97/Supply_limit.png/28px-Supply_limit.png)](/Supply_limit "Supply limit modifier")

**+2%**.000

Supply limit modifier

[![Local missionary strength.png](/images/thumb/0/08/Local_missionary_strength.png/28px-Local_missionary_strength.png)](/Local_missionary_strength "Local missionary strength")

**−0.1%**00

Local missionary strength

[![Land forcelimit.png](/images/thumb/9/9f/Land_forcelimit.png/28px-Land_forcelimit.png)](/Land_force_limit "Land force limit")

**+0.1**00%

Land force limit

[![Naval forcelimit.png](/images/thumb/9/98/Naval_forcelimit.png/28px-Naval_forcelimit.png)](/Naval_forcelimit "Naval forcelimit")

**+0.1**00%

Naval force limit

[![Sailors.png](/images/thumb/8/8f/Sailors.png/28px-Sailors.png)](/Sailors "Sailors")

**+60**.000%

Sailors

[![Local trade power.png](/images/thumb/c/cf/Local_trade_power.png/28px-Local_trade_power.png)](/Local_trade_power "Local trade power")

**+0.2**00%

Local trade power

[![Possible Manchu banners (local)](/images/thumb/f/fa/Possible_Manchu_banners_%28local%29.png/28px-Possible_Manchu_banners_%28local%29.png)](/Possible_Manchu_banners "Possible Manchu banners (local)")

**+0.066**%

Possible Manchu banners

[![Possible cawa (local)](/images/thumb/a/a4/Possible_cawa_%28local%29.png/28px-Possible_cawa_%28local%29.png)](/Possible_cawa "Possible cawa (local)")

**+0.125**%

Possible cawa

*   [![Development cost.png](/images/thumb/a/a2/Development_cost.png/28px-Development_cost.png)](/Development_cost "Development cost")**+3%** local development cost per point above 10 total development. This increase rises by 3% every 10 total development (**+6%** at 20, **+9%** at 30, etc.).
*   [![Province war score cost.png](/images/thumb/9/9c/Province_war_score_cost.png/28px-Province_war_score_cost.png)](/Province_war_score_cost "Province war score cost")**+1%** Province warscore cost
*   [![Overextension.png](/images/0/0b/Overextension.png)](/Overextension "Overextension")**+1%** Province [overextension](/Overextension "Overextension") value
*   [![Core-creation cost.png](/images/thumb/5/56/Core-creation_cost.png/28px-Core-creation_cost.png)](/Core-creation_cost "Core-creation cost")**+10** [Core](/Core "Core") creation cost
*   [![Diplomatic annexation cost](/images/thumb/c/c5/Diplomatic_annexation_cost.png/28px-Diplomatic_annexation_cost.png)](/Diplomatic_annexation "Diplomatic annexation cost")**+8** Diplomatic annexation cost
*   [![Culture icon.png](/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Increases the percentage of the local province culture in the player's nation.
*   [![Institutions.png](/images/thumb/4/43/Institutions.png/28px-Institutions.png)](/Institutions "Institutions") Increases the institution presence in the province by (new development level/6). This is capped at +10% increase.
*   [![Institutions.png](/images/thumb/4/43/Institutions.png/28px-Institutions.png)](/Institutions "Institutions") Most institution spread modifiers scale linearly with province development.

*   Removes 5% [![Devastation.png](/images/thumb/8/8c/Devastation.png/28px-Devastation.png)](/Devastation "Devastation")devastation（with adjustment based on local autonomy).

[![Development.png](/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") Development levels over 30 no longer contribute to higher coring and culture conversion costs. For every 10 levels of development, a province gets an additional [building](/Building "Building") slot.

### National level\[[edit](/index.php?title=Development&veaction=edit&section=3 "Edit section: National level") | [edit source](/index.php?title=Development&action=edit&section=3 "Edit section: National level")\]

*   A nation gains [![Caravan power.png](/images/thumb/a/ac/Caravan_power.png/28px-Caravan_power.png)](/Caravan_power "Caravan power")**+1** [caravan power](/Trade#Caravan_power "Trade") for each 3 total development, up to 50.
*   A nation cannot be [vassalized](/Vassal "Vassal") diplomatically if total development is more than 100 (**−1000** reasons).
*   The base cost of annexation of a nation (before modifiers) is [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") 8 diplomatic power per development of the vassal nation.
*   With [![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/28px-Common_Sense.png)](/Common_Sense "Common Sense") Common Sense, if the nation's [government](/Government "Government") type allows for rank increases, having 300/1000 development is part of the requirement of becoming a kingdom/empire respectively.

Developing a province\[[edit](/index.php?title=Development&veaction=edit&section=4 "Edit section: Developing a province") | [edit source](/index.php?title=Development&action=edit&section=4 "Edit section: Developing a province")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

[![](/images/8/8f/Developed_province.jpg)](/File:Developed_province.jpg)

Development cost tooltip.

[Monarch points](/Monarch_points "Monarch points") ([![Administrative power.png](/images/thumb/e/ef/Administrative_power.png/24px-Administrative_power.png)](/Administrative_power "Administrative power"), [![Diplomatic power.png](/images/thumb/d/da/Diplomatic_power.png/24px-Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") _or_ [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power")) can be used to increase base tax, production, and manpower values, respectively. A province's base tax, production or manpower cannot be increased if its value is already more than that of the other two combined (for example, if the province's production and manpower are 1 each, then the base tax can not be raised above 3 and only an improvement of production or manpower is possible). In other words, the cap for one development type is equal to the sum of the other 2 plus 1.

Developing a province this way increases the [crownland](/Crownland "Crownland") by **0.2%** per click.

### Base cost\[[edit](/index.php?title=Development&veaction=edit&section=5 "Edit section: Base cost") | [edit source](/index.php?title=Development&action=edit&section=5 "Edit section: Base cost")\]

The base cost for developing a province is 50 monarch points. Development efficiency from [administrative technology](/Administrative_technology "Administrative technology") affects the base cost by additional **−10%** at level 17, 23 and 27.

![{\displaystyle {\text{final base cost}}=50\cdot (1-{\text{development efficiency}})}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/c117fff266ac1128132d47321878a7c6a17c252b)

#### Other modifiers\[[edit](/index.php?title=Development&veaction=edit&section=6 "Edit section: Other modifiers") | [edit source](/index.php?title=Development&action=edit&section=6 "Edit section: Other modifiers")\]

**−5%**

Perfectionism Ability: Inward Focus

**−5%**

Centralized Bureaucracy Goverment Reform

**−2.5%**

Divinity through Craftsmanship Goverment Reform

  

### Development cost modifiers\[[edit](/index.php?title=Development&veaction=edit&section=7 "Edit section: Development cost modifiers") | [edit source](/index.php?title=Development&action=edit&section=7 "Edit section: Development cost modifiers")\]

The development cost modifiers influence how much it costs to develop a province. The cost to develop provinces increases by +3% per point above 9 total development. This modifier itself increases by 3 for every 10 total development. For example, a province upgrading from total development level 30 to 31 will have "Development: [![Development cost.png](/images/thumb/a/a2/Development_cost.png/28px-Development_cost.png)](/Development_cost "Development cost")**+99%**" modifier (21 levels above 9 give 21×3%, 11 levels above 19 give 11×3% and 1 level above 29 give 1×3% for a total of 33×3%).

All development cost modifiers are applied in an additive fashion.

### Stacking development cost modifiers\[[edit](/index.php?title=Development&veaction=edit&section=8 "Edit section: Stacking development cost modifiers") | [edit source](/index.php?title=Development&action=edit&section=8 "Edit section: Stacking development cost modifiers")\]

Developing a province to get an institution can be expensive in terms of monarch points; it is recommended that the player choose to develop a province with multiple modifiers that stack. To be specific, to attain the maximal reduction in development cost, the player should choose to locate their capital in a province with a level 2 or 3 Centre of Trade (the province has to be part of a state), temperate climate, farmlands, and that produces cloth or cotton. The following provinces have this combination of modifiers: Amsterdam, Baghdad, Cairo, London, Lublin, Macedonia, Milan, Prague, Regensburg, Warszawa and Wroclaw. These provinces have a cumulative reduction in developing cost of −20%/25% (−5% from farmlands, −5%/-10% from level 2/3 CoT, −10% from cloth/cotton).

[![](/images/thumb/f/f8/Development_opportunity.png/300px-Development_opportunity.png)](/File:Development_opportunity.png)

[](/File:Development_opportunity.png "Enlarge")

Stacking development cost modifiers map including trade center, climate, terrain and goods. Colors range from red (expensive development) to green (cheap development) with yellow for no modification.

#### Terrain\[[edit](/index.php?title=Development&veaction=edit&section=9 "Edit section: Terrain") | [edit source](/index.php?title=Development&action=edit&section=9 "Edit section: Terrain")\]

Terrain

Development cost modifier

[![Farmlands terrain](/images/thumb/5/54/Combat_terrain_farmlands.png/193px-Combat_terrain_farmlands.png)](/File:Combat_terrain_farmlands.png "Farmlands terrain") Farmlands

**−5%**

[![Grasslands terrain](/images/thumb/f/fb/Combat_terrain_grasslands.png/193px-Combat_terrain_grasslands.png)](/File:Combat_terrain_grasslands.png "Grasslands terrain") Grasslands

**0%**

[![Drylands terrain](/images/thumb/3/30/Combat_terrain_drylands.png/193px-Combat_terrain_drylands.png)](/File:Combat_terrain_drylands.png "Drylands terrain") Drylands

**+5%**

[![Woods terrain](/images/thumb/8/81/Combat_terrain_woods.png/193px-Combat_terrain_woods.png)](/File:Combat_terrain_woods.png "Woods terrain") Woods

**+15%**

[![Savannah terrain](/images/thumb/4/44/Combat_terrain_savannah.png/193px-Combat_terrain_savannah.png)](/File:Combat_terrain_savannah.png "Savannah terrain") Savannah

**+15%**

[![Coastline terrain](/images/thumb/b/bb/Combat_terrain_inland_ocean.png/193px-Combat_terrain_inland_ocean.png)](/File:Combat_terrain_inland_ocean.png "Coastline terrain") Coastline

**+15%**

[![Forest terrain](/images/thumb/a/ad/Combat_terrain_forest.png/193px-Combat_terrain_forest.png)](/File:Combat_terrain_forest.png "Forest terrain") Forest

**+20%**

[![Steppe terrain](/images/thumb/1/1a/Combat_terrain_steppe.png/193px-Combat_terrain_steppe.png)](/File:Combat_terrain_steppe.png "Steppe terrain") Steppe

**+20%**

[![Highlands terrain](/images/thumb/4/44/Combat_terrain_highlands.png/193px-Combat_terrain_highlands.png)](/File:Combat_terrain_highlands.png "Highlands terrain") Highlands

**+20%**

[![Hills terrain](/images/thumb/2/2b/Combat_terrain_hills.png/193px-Combat_terrain_hills.png)](/File:Combat_terrain_hills.png "Hills terrain") Hills

**+25%**

[![Marsh terrain](/images/thumb/9/9b/Combat_terrain_marsh.png/193px-Combat_terrain_marsh.png)](/File:Combat_terrain_marsh.png "Marsh terrain") Marsh

**+25%**

[![Mountain terrain](/images/thumb/1/1a/Combat_terrain_mountains.png/193px-Combat_terrain_mountains.png)](/File:Combat_terrain_mountains.png "Mountain terrain") Mountain

**+35%**

[![Jungle terrain](/images/thumb/d/d3/Combat_terrain_jungle.png/193px-Combat_terrain_jungle.png)](/File:Combat_terrain_jungle.png "Jungle terrain") Jungle

**+35%**

[![Coastal Desert terrain](/images/thumb/a/a4/Combat_terrain_coastal_desert.png/193px-Combat_terrain_coastal_desert.png)](/File:Combat_terrain_coastal_desert.png "Coastal Desert terrain") Coastal Desert

**+35%**

[![Desert terrain](/images/thumb/3/33/Combat_terrain_desert.png/193px-Combat_terrain_desert.png)](/File:Combat_terrain_desert.png "Desert terrain") Desert

**+50%**

[![Arctic terrain](/images/thumb/c/c9/Combat_terrain_arctic.png/193px-Combat_terrain_arctic.png)](/File:Combat_terrain_arctic.png "Arctic terrain") Glacial

**+50%**

#### Climate\[[edit](/index.php?title=Development&veaction=edit&section=10 "Edit section: Climate") | [edit source](/index.php?title=Development&action=edit&section=10 "Edit section: Climate")\]

Climate

Local development cost

Temperate

**0%**

[![Tropical.png](/images/0/01/Tropical.png)](/Tropical "Tropical") Tropical

**+5%**

[![Arid.png](/images/6/6a/Arid.png)](/Arid "Arid") Arid

**+10%**

[![Arctic.png](/images/6/6a/Arctic.png)](/Arctic "Arctic") Arctic

**+50%**

#### Ideas and traditions\[[edit](/index.php?title=Development&veaction=edit&section=11 "Edit section: Ideas and traditions") | [edit source](/index.php?title=Development&action=edit&section=11 "Edit section: Ideas and traditions")\]

These modifiers lower the cost for developing a province. Starting with [patch 1.28](/Patch_1.28 "Patch 1.28"), the [![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/28px-Common_Sense.png)](/Common_Sense "Common Sense") Common Sense DLC is no longer needed to develop provinces. On prior versions, these modifiers are replaced with a [![Goods produced modifier.png](/images/thumb/1/12/Goods_produced_modifier.png/28px-Goods_produced_modifier.png)](/Goods_produced_modifier "Goods produced modifier") goods produced modifier of the same size if Common Sense is not active.

[![Development cost.png](/images/thumb/a/a2/Development_cost.png/24px-Development_cost.png)](/Development_cost "Development cost")

Traditions

Ideas

Bonuses

ExpandPolicies

−15%

—

*   Alaskan idea 1: Aleutian Endurance
*   Genevan idea 1: The Grand Council
*   Tongan idea 3: The Islands of Maui

*   Australian ambition

—

−10%

*   Bukharan traditions
*   Caspian traditions
*   Colonial traditions
*   Federation traditions
*   Frisian traditions
*   Garhwali traditions
*   Goslar traditions
*   Hojo traditions
*   Rigan traditions
*   Saxon traditions
*   Tuscan traditions
*   West Indies traditions

*   Aboriginal idea 2: Fire-stick Farming
*   Ajuuraan idea 5: Hydraulic Empire
*   American Southwest idea 4: Prosperous Sedentarism
*   Andean idea 5: Monumental Ornaments
*   Ansbach idea 4: Protestant Exiles
*   Armenian idea 2: Land Reclamation
*   Asakura idea 3: Ichijodani City
*   Assamese idea 2: Wet Rice Cultivation
*   Ayutthayan idea 6: Phrai Luang
*   Banteni idea 6: By the River
*   Bengal Sultanate idea 3: Clear the Delta
*   California Native idea 4: Forest Gardening
*   Candarid idea 3: Ismail Bey Complex
*   Cebu idea 7: Expand the Capital
*   Chachapoyan idea 2: Legacy of Kuelap
*   Charruan idea 1: Hunter-Gatherer Ways
*   Colognian idea 3: Hanseatic Trade City
*   Dali idea 6: Rice Terraces
*   Date idea 7: Intensive Domain Development
*   Dhundhari idea 4: Found the city of Jaipur
*   Dithmarscher idea 5: Fortify the Coastline
*   Dutch idea 3: Polders
*   Eastern Algonquian idea 2: Seasonal Economy
*   Farsi idea 7: A Capital for an Empire
*   Finnish idea 4: Settle Middle Finland
*   Flemish idea 2: Land Reclamation
*   Garjati idea 4: Extend Tanks and Reservoirs
*   Gelre idea 4: Rule the Rivers
*   Golden Horde idea 6: Populating the Steppes
*   Gutnish idea 1: Rebuild Visby
*   Hanoverian idea 2: Weser Renaissance
*   Hessian idea 4: Receive Religious Immigrants
*   Hindustani idea 7: Proto-Industrialization
*   Hormuz idea 6: Develop Qeshm and Hormuz
*   Hosokawa idea 7: Horeki Reform
*   Incan idea 2: Increased Obligations
*   Israeli idea 6: People of Exile
*   Isshiki idea 7: Expand our Ports
*   Jaunpuri idea 4: Jaunpuri Architecture
*   Kamilaroi idea 3: Fertile Soils of Kamilaroi
*   Karamanid idea 5: Karamanid Architecture
*   Kilwan idea 7: Center of Migration
*   Kiwi idea 3: Piopiotahi
*   Kuban idea 2: Children of Woot
*   LPC idea 3: New Magdeburg Laws
*   Lanfang idea 7: Expansion of the State
*   Lithuanian idea 3: New Magdeburg Laws
*   Luban idea 5: Lukasa Boards
*   Luccan idea 3: Draining Lago di Bientina
*   Madyas idea 3: Riches of the Visayas
*   Mayan idea 2: Building Traditions
*   Mewari idea 4: City of Lakes
*   Milanese idea 3: Lowered Power of the Barons
*   Mogadishan idea 4: City of Mogadishu
*   Moravian idea 3: Cities of Moravia
*   Mori idea 5: Hiroshima
*   Nanbu idea 7: Defeating the Famines
*   Neapolitan idea 3: Encourage City Living
*   Nizhny Novgorod idea 2: Crossroads Of Nations
*   Norse idea 4: Norse Artisans
*   Pattani idea 7: Canal Infrastructure
*   Pisan idea 4: Urbanization effort
*   Plains Native idea 3: Bison Hunters
*   Polotskian idea 7: Forest of Europe
*   Rostov idea 1: Re-Unification of Rostov
*   Satake idea 6: Strong Central Rule
*   Semien idea 4: Builders and Artisans
*   Siamese idea 3: Encourage Immigration
*   Silesian idea 3: German Settlers
*   Swiss idea 5: Oasis of Peace and Prosperity
*   Texan idea 7: Adelsverein
*   Venetian idea 7: Found the provveditori ai beni inculti
*   Zaporozhian idea 1: Fast Fort Builders

*   Full Infrastructure
*   Augsburger ambition
*   Bavarian ambition
*   Bolognese ambition
*   French ambition
*   Hausan ambition
*   Kaurna ambition
*   Lan Na ambition
*   Mutapan ambition
*   Pegu ambition
*   Tokugawa ambition
*   Tyrone ambition

*   Administrative-Indigenous: Administration of Sacred Land

−5%

*   Trading City traditions

*   Aristocratic idea 2: Serfdom
*   Divine idea 1: Servants of God
*   Indigenous idea 1: Bountiful Land
*   Plutocratic idea 6: Free Cities
*   Bamberger idea 4: Little Venice
*   Dalmatian idea 4: Center of Art and Literature
*   Franconian idea 7: Franconian Bourgeoisie
*   Hanseatic idea 5: Merchants with a State
*   Horn of African idea 3: Highland Cultivation
*   Icelandic idea 6: Resilient Craftsmen
*   Korean idea 4: Korean Artisanery
*   Livonian idea 2: Border between East and West
*   Prussian idea 7: Religious Toleration
*   Sardinian-Piedmontese idea 5: Centralized State
*   Westphalian idea 2: Westphalian Decentralization

—

*   Indigenous-Infrastructure: Indigenous Development Act
*   Innovative-Indigenous: Disruptive Innovation

**Note:** The minimum cost is capped at 3 power per development.

#### Other modifiers\[[edit](/index.php?title=Development&veaction=edit&section=12 "Edit section: Other modifiers") | [edit source](/index.php?title=Development&action=edit&section=12 "Edit section: Other modifiers")\]

**−5%**

in the capital province per 100 country development (up to **−50%**)

**−1%**

per **−1%** modifier to [![All power costs.png](/images/thumb/0/0f/All_power_costs.png/28px-All_power_costs.png)](/File:All_power_costs.png) all power costs (up to **−10%** with 100 [Innovativeness](/Innovativeness "Innovativeness") and another **−10%** during a [Golden Era](/Ages#Splendor "Ages"))

**−15%**

per level of Expanded infrastructure

**0%** – **\-33%**

with [![Privilege grant autonomy.png](/images/thumb/b/be/Privilege_grant_autonomy.png/28px-Privilege_grant_autonomy.png)](/File:Privilege_grant_autonomy.png) 'Inwards Perfection' privilege granted to [![Clergy.png](/images/thumb/0/0e/Clergy.png/28px-Clergy.png)](/Clergy "Clergy") Clergy estate, available to countries in the [Eastern religion group](/Eastern_denominations "Eastern denominations") (scaled to the estate's land ownership)

**−20%**

if a [![Latin university.png](/images/thumb/9/95/Latin_university.png/24px-Latin_university.png)](/University "University") University is built in the province

**−20%**

in Capital area, with Invite Minorities from Abroad action as [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") Feudal Theocracy

**−15%**

in Steppe provinces with [![Privilege grant new world charter.png](/images/thumb/5/50/Privilege_grant_new_world_charter.png/28px-Privilege_grant_new_world_charter.png)](/File:Privilege_grant_new_world_charter.png) ‘Cossack Exploration Expedition’ privilege granted to [![Cossacks](/images/thumb/c/c6/Cossacks.png/28px-Cossacks.png)](/Cossacks_estates#Cossacks "Cossacks") Cossacks estate (effectively lowers the Steppe cost modifier from **+20%** to **+5%**)

**−10%**

if province trade good is [![Cloth.png](/images/thumb/5/51/Cloth.png/28px-Cloth.png)](/Cloth "Cloth") Cloth or [![Cotton.png](/images/thumb/c/c3/Cotton.png/28px-Cotton.png)](/Cotton "Cotton") Cotton (requires [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man"))

**−10%**

with the decree "Expand Palace Bureaucracy" active, available to the [![Emperor of china icon.png](/images/thumb/2/25/Emperor_of_china_icon.png/28px-Emperor_of_china_icon.png)](/Emperor_of_China "Emperor of China") Emperor of China

**−10%**

with [![Parliament.png](/images/thumb/f/f9/Parliament.png/28px-Parliament.png)](/Parliament "Parliament") parliamentary issue "Land Reform" active

**−10%**

as an Imperial [Free City](/Government#Unique_republic_types "Government")

**−10%**

if [![Burghers.png](/images/thumb/d/dd/Burghers.png/28px-Burghers.png)](/Burghers "Burghers") Burghers are at [![Estate loyalty](/images/a/a6/Estates_loyalty.png)](/Estates "Estate loyalty") 60 loyalty and [![Estate influence](/images/9/98/Estates_influence.png)](/Estates "Estate influence") 60 influence (lower at less influence)

**−10%**

as [![Orthodoxy](/images/thumb/9/96/Orthodox.png/28px-Orthodox.png)](/Orthodox "Orthodox") Orthodox with Icon of Christ Pantocrator active

**−10%**

as [![Cult Islam.png](/images/thumb/e/ee/Cult_Islam.png/28px-Cult_Islam.png)](/File:Cult_Islam.png) Muslim with [![Maliki school](/images/thumb/9/91/Muslim_school_maliki.png/28px-Muslim_school_maliki.png)](/Maliki "Maliki school") Maliki school followed or invited.

**−10%**

as [![Shintoism](/images/thumb/8/85/Shinto.png/28px-Shinto.png)](/Shinto "Shinto") Shinto with Closed Doors level (4)

**\-10%**

as [![Confucianism](/images/thumb/a/a2/Confucianism.png/28px-Confucianism.png)](/Confucian "Confucian") Confucian with 100 Harmony (scaling by **\-0.2%** for each point over 50)

**−10%**

as [![Tengri](/images/thumb/9/9f/Tengri.png/28px-Tengri.png)](/Tengri "Tengri") Tengri with [![Theravada.png](/images/thumb/5/52/Theravada.png/28px-Theravada.png)](/Theravada "Theravada") Theravada as syncretic faith

**−10%**

as [![Fetishist](/images/thumb/8/8d/Fetishist.png/28px-Fetishist.png)](/Fetishist "Fetishist") Fetishist with [![Buddhism.png](/images/thumb/3/3f/Buddhism.png/28px-Buddhism.png)](/Buddhist "Buddhist") Buddhism cult

**−10%**

as [![Fetishist](/images/thumb/8/8d/Fetishist.png/28px-Fetishist.png)](/Fetishist "Fetishist") Fetishist with [![Buddhism.png](/images/thumb/3/3f/Buddhism.png/28px-Buddhism.png)](/Buddhist "Buddhist") Buddhism cult and [![Privilege singular cult.png](/images/thumb/a/ab/Privilege_singular_cult.png/28px-Privilege_singular_cult.png)](/File:Privilege_singular_cult.png) Embrace Singlar Cult clergy estate privilege (stacks with previous)

**−10%**

with [![Anglican.png](/images/thumb/6/68/Anglican.png/28px-Anglican.png)](/Anglican "Anglican") Anglican religion

**−10%**

with the [![Sikhism](/images/thumb/f/f0/Sikh.png/28px-Sikh.png)](/Sikh "Sikh") Sikh teaching "Eternally Living Guru"

**−10%**

with Encourage Development [edict](/Edict "Edict")

**−10%**

with Prosperity

**−10%**

[![Province trade power value.png](/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade")if the state the province is in has a level 3 Center of Trade, a "World Port" or "World Trade Center".

**−5%**

[![Province trade power value.png](/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade")if the province is a level 2 Center of Trade, an "Entrepot" or "Market Town".

**−5%**

with "Trading in Tropical Wood" bonus

**−5%**

with [![Government theocracy.png](/images/thumb/8/81/Government_theocracy.png/28px-Government_theocracy.png)](/Theocracy "Theocracy") Expulsion of Heathens (Tier 3)

**−5%**

as [![Protestantism](/images/thumb/0/0d/Protestant.png/28px-Protestant.png)](/Protestant "Protestant") Protestant with "Organized through bishops" aspect active

**−5%**

for members of the Holy Roman Empire, if the "[Call for Reichsreform](/Holy_Roman_Empire#List_of_reforms_and_their_effects "Holy Roman Empire")" reform is passed

**−5%**

for embracing the [![Renaissance.png](/images/thumb/7/73/Renaissance.png/28px-Renaissance.png)](/Renaissance "Renaissance") Renaissance institution

**−5%**

as [![Catholicism](/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") catholic while the [![Golden bull praeclara carissimi.png](/images/thumb/e/e0/Golden_bull_praeclara_carissimi.png/24px-Golden_bull_praeclara_carissimi.png)](/Golden_bull "Golden bull") [Golden bull](/Golden_bull "Golden bull") _“Christiana Pietas”_ is active.

**−5%**

in Tropical provinces with [![Privilege grant new world charter.png](/images/thumb/5/50/Privilege_grant_new_world_charter.png/28px-Privilege_grant_new_world_charter.png)](/File:Privilege_grant_new_world_charter.png) ‘Tropical City Planning’ privilege granted to [![Burghers.png](/images/thumb/d/dd/Burghers.png/28px-Burghers.png)](/Burghers "Burghers") Burghers estate (effectively lowers the Tropical climate cost modifier from **+10%** to **+5%**).

**−5%**

with mission [Gosti Guests](/Croatian_missions#Splendor_of_Croatia "Croatian missions") complete.

**\-5%**

with [![Privilege patronize jain families.png](/images/thumb/9/99/Privilege_patronize_jain_families.png/28px-Privilege_patronize_jain_families.png)](/File:Privilege_patronize_jain_families.png) 'Jains Clerival Class' privilege granted to [![Jains.png](/images/thumb/9/95/Jains.png/28px-Jains.png)](/Jains "Jains") Jains estate, available to countries in the [![Indian technology group](/images/thumb/1/19/Indian.png/28px-Indian.png)](/Technology_group "Indian technology group") Indian technology group.

**+0.1%**

per 1% of devastation

**+50%**

for being a primitive nation

**+50%**

for being a subject nation

Exploiting development\[[edit](/index.php?title=Development&veaction=edit&section=13 "Edit section: Exploiting development") | [edit source](/index.php?title=Development&action=edit&section=13 "Edit section: Exploiting development")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

[![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/28px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization")

Available only with the [Cradle of Civilization](/Cradle_of_Civilization "Cradle of Civilization") DLC enabled.

A province can be exploited for short-term benefits by permanently reducing its development by 1.

*   Exploit [![Base tax.png](/images/9/90/Base_tax.png)](/Base_tax "Base tax") Base Tax to gain 60 months worth of that province's tax income
*   Exploit [![Production.png](/images/thumb/a/ad/Production.png/28px-Production.png)](/Production "Production") Production to gain 60 months worth of that province's sailors
*   Exploit [![Manpower.png](/images/thumb/0/0c/Manpower.png/28px-Manpower.png)](/Manpower "Manpower") Base Manpower to gain 60 months worth of that province's manpower

A province has to have at least 2 development in a category for it to be exploitable, and is required to have at least a [territorial core](/Territorial_core "Territorial core"). A province cannot be exploited within the 20 years following its last exploitation, even if it changes owners.

Settlement growth\[[edit](/index.php?title=Development&veaction=edit&section=14 "Edit section: Settlement growth") | [edit source](/index.php?title=Development&action=edit&section=14 "Edit section: Settlement growth")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.33.

[![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma")

Available only with the [Dharma](/Dharma "Dharma") DLC enabled.

It is also possible to develop provinces by promoting settlement growth in colonized provinces or cities. By placing the colonist on the little empty window to the top right of the province overview screen, the colonist will automatically start to improve the province. The development of that province will have a certain chance of increasing by 1 in a random category after each yearly tick in accordance to when you started to promote settlement growth. The chance of the colonist improving the base development is based on the amount of development in the province. This chance is also affected by Local Development Cost modifiers such as terrain, Universities, Expand Infrastructure, and local modifiers like those temporarily granted by events. The Settlement Growth mechanic is not affected by Global Settler Increase, New Settlers Chance, or any global development cost reductions.

The subject interaction "Block Settlement Growth" allows the overlord to prohibit a subject from using their colonist in this way, and instantly cancels any ongoing settlement growth.

Concentrate development\[[edit](/index.php?title=Development&veaction=edit&section=15 "Edit section: Concentrate development") | [edit source](/index.php?title=Development&action=edit&section=15 "Edit section: Concentrate development")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.33.

[![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan")

Available only with the [Leviathan](/Leviathan "Leviathan") DLC enabled.

Provinces in territories you own, or states controlled by a non-tributary subject, can be used to concentrate development in the [![Capital.png](/images/thumb/6/6e/Capital.png/24px-Capital.png)](/Capital "Capital") [capital](/Capital "Capital"). This can be done on the state interface by selecting the [![Concentrate development.png](/images/thumb/f/f7/Concentrate_development.png/24px-Concentrate_development.png)](/File:Concentrate_development.png) concentrate development button. Some of the development from provinces in the state is turned into [monarch power](/Monarch_power "Monarch power"), which is then used to develop the capital. The tooltip over the concentrate development button shows the amount of monarch points, and the amount of development that will be gained (this usually displays higher than the actual result, explained below). Concentrate development will not be available if there is not enough development to produce enough monarch points to develop the capital.

Concentrating development in a subject will increase their [![Liberty desire.png](/images/thumb/f/fd/Liberty_desire.png/24px-Liberty_desire.png)](/Liberty_desire "Liberty desire") [liberty desire](#Liberty_desire) by **+3** and decrease relations by **−8** per point of development taken.

### Calculation\[[edit](/index.php?title=Development&veaction=edit&section=16 "Edit section: Calculation") | [edit source](/index.php?title=Development&action=edit&section=16 "Edit section: Calculation")\]

The amount of [![Base tax.png](/images/thumb/9/90/Base_tax.png/24px-Base_tax.png)](/Base_tax "Base tax") base tax , [![Production.png](/images/thumb/a/ad/Production.png/24px-Production.png)](/Production "Production") production, or [![Manpower.png](/images/thumb/0/0c/Manpower.png/24px-Manpower.png)](/Manpower "Manpower") base manpower removed from a province when concentrating is ![{\textstyle {\frac {\text{Development category}}{5}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/30e33e8f9d9dca65b1ee671d37c515f5c4914c88) rounded to the nearest whole number. For example a 3/2/2 province would become a 2/2/2 (−1/−0/−0) because only the first category rounds to at least 1. By the same logic, 13/7/4 would become 10/6/3 (−3/−1/−1). This also means if a state has no provinces with more than 2 development in any category, it cannot be used to concentrate development.

The amount of monarch points generated from development is equal to the development cost of the province. However the calculation is redone after each development category in the order tax → production → manpower. What this means is that an 8/8/8 province with a development cost of 80, will not get 6 x 80 total points but instead get 2 × 80 + 2 × 74 + 2 × 68 total points. As a result [![Administrative power.png](/images/thumb/e/ef/Administrative_power.png/24px-Administrative_power.png)](/Administrative_power "Administrative power") administrative will receive the most points, followed by [![Diplomatic power.png](/images/thumb/d/da/Diplomatic_power.png/24px-Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") diplomatic, then [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") military. This contradicts the in game tooltip, which implies that all categories use the initial value, as a result only [![Administrative power.png](/images/thumb/e/ef/Administrative_power.png/24px-Administrative_power.png)](/Administrative_power "Administrative power") administrative is accurate.

Points generated from all provinces in a state are combined and then reduced by 20% (except for countries with Mandala System government) and are then used to apply development to the capital. The initial development cost of the capital is what is used to apply _all_ of the development, meaning there is no increase as points are applied.

The ideal use of this feature would be to somehow raise development cost in a territory or vassal state as high as possible, and decrease development cost in the capital as much as possible, this will gain the most monarch points from concentrating, and make the most use of points on the capital.

AI behavior\[[edit](/index.php?title=Development&veaction=edit&section=17 "Edit section: AI behavior") | [edit source](/index.php?title=Development&action=edit&section=17 "Edit section: AI behavior")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.33.

AI generally will not develop provinces to more than original development × 2 or 10 development, whichever is higher. These numbers can be changed in defines.[\[1\]](#cite_note-1)

AI never exploit development, but may sometimes promote settlement growth.

The exception to this rule emerges when the AI develops one province for the purposes of institution spread, introduced in [Patch 1.18](/Patch_1.18 "Patch 1.18"), and also when developing coal provinces (even if the trade good isn't enabled yet) which can sometimes result in these provinces reaching over 40 development. At this time the exact behaviour of the AI regarding this is not well understood. The AI does not develop provinces anywhere as efficiently as a human player may do so.

Strategy\[[edit](/index.php?title=Development&veaction=edit&section=18 "Edit section: Strategy") | [edit source](/index.php?title=Development&action=edit&section=18 "Edit section: Strategy")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Strategy](/images/thumb/a/a2/Years_of_separatism.png/36px-Years_of_separatism.png "Strategy") _The below is **one of many** player suggested strategies for **Development**. Bear in mind, due to the dynamic nature of the game, it may unfold differently for other players._

*   Prioritize provinces with 9 and 19 development (followed by 8 and 18, etc.) to open an additional [building](/Building "Building") slot.
*   Improve production in provinces with high value trade goods before provinces with lower valued goods.
*   Evenly developing a province (4/4/4) is not as lucrative as weighting towards one type of development and reaping a greater bonus with an appropriate building (6/3/3 and a [![Latin temple.png](/images/thumb/5/57/Latin_temple.png/24px-Latin_temple.png)](/Temple "Temple") church).
*   Developing a coastal province instead of an inland province also improves sailors and trade power (through the **+25%** coastal province modifier).
*   Consider timing: Is the province close to prosperity? Is an institution about to spawn? Is the [![Latin university.png](/images/thumb/9/95/Latin_university.png/24px-Latin_university.png)](/University "University") University about to finish construction? Is the parliamentary issue about to expire? Has the state edict reset time elapsed? Delaying or expediting development can save vital monarch points.
*   Various missions and events give an additional cost modifier (_see [linked page](/Special:WhatLinksHere/Development_cost "Special:WhatLinksHere/Development cost") to “development cost”_).

References\[[edit](/index.php?title=Development&veaction=edit&section=19 "Edit section: References") | [edit source](/index.php?title=Development&action=edit&section=19 "Edit section: References")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  [↑](#cite_ref-1 "Jump up") patch notes 1.15

**

Mechanics

**

*   [Economy](javascript:void(0); "Economy")
*   [External relations](javascript:void(0); "External relations")
*   [Internal country management](javascript:void(0); "Internal country management")
*   [Meta](javascript:void(0); "Meta")
*   [Technology](javascript:void(0); "Technology")
*   [War](javascript:void(0); "War")

Colonisation

[Exploration](/Discovery "Discovery") • [Colonisation](/Colonisation "Colonisation") • [Colonial nation](/Colonial_nation "Colonial nation") • [Tariffs](/Tariffs "Tariffs") • [Trade company](/Trade_company "Trade company")

Economy

[Debase currency](/Debase_currency "Debase currency") • Development • [Economy](/Economy "Economy") • [Privateering](/Privateering "Privateering") • [Production](/Production "Production") • [Raid coasts](/Raid_coasts "Raid coasts") • [Tax](/Tax "Tax")

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

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Development&oldid=155018](https://eu4.paradoxwikis.com/index.php?title=Development&oldid=155018)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.24](/Category:1.24 "Category:1.24")
*   [Economy](/Category:Economy "Category:Economy")
*   [Province mechanics](/Category:Province_mechanics "Category:Province mechanics")

Hidden category:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")