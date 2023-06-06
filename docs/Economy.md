Economy
=======

From Europa Universalis 4 Wiki

(Redirected from [Economics](/index.php?title=Economics&redirect=no "Economics"))

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

[![](/images/thumb/7/74/UI_tab_economy.png/330px-UI_tab_economy.png)](/File:UI_tab_economy.png)

[](/File:UI_tab_economy.png "Enlarge")

Economy interface

**Economics** in [EU4](/EU4 "EU4") revolves around the earning and expenditure of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")_ducats_, the game's international currency. The national and international **economy** underpin almost every function of a country, and often fuels international diplomacy. Understanding and developing a country's economy yields better national finances, allowing the country to boost its standing in the world and further grow at a faster pace.

The Economy panel in the [Country interface](/Country_interface "Country interface") displays a summary of the player's finances and provides a few important actions relating to it (such as Loans and Reduce Inflation).

Contents
--------

*   [1 Overview](#Overview)
*   [2 Income](#Income)
    *   [2.1 Taxation](#Taxation)
    *   [2.2 Production](#Production)
    *   [2.3 Trade](#Trade)
    *   [2.4 Gold](#Gold)
        *   [2.4.1 Treasure fleet](#Treasure_fleet)
    *   [2.5 Tariffs](#Tariffs)
    *   [2.6 Vassals](#Vassals)
    *   [2.7 Harbor fees](#Harbor_fees)
    *   [2.8 Subsidies](#Subsidies)
    *   [2.9 Spoils of war](#Spoils_of_war)
    *   [2.10 War Reparations](#War_Reparations)
    *   [2.11 Condottieri](#Condottieri)
    *   [2.12 Knowledge Sharing](#Knowledge_Sharing)
*   [3 Expenses](#Expenses)
    *   [3.1 Advisors](#Advisors)
    *   [3.2 State maintenance](#State_maintenance)
    *   [3.3 Interest](#Interest)
    *   [3.4 Diplomatic expenses](#Diplomatic_expenses)
    *   [3.5 Fort maintenance](#Fort_maintenance)
    *   [3.6 Colonial maintenance](#Colonial_maintenance)
    *   [3.7 Missionary maintenance](#Missionary_maintenance)
    *   [3.8 Root out corruption](#Root_out_corruption)
        *   [3.8.1 Example](#Example)
    *   [3.9 Army maintenance](#Army_maintenance)
    *   [3.10 Fleet maintenance](#Fleet_maintenance)
*   [4 Loans](#Loans)
    *   [4.1 Bank loans](#Bank_loans)
        *   [4.1.1 Interest](#Interest_2)
    *   [4.2 Loans from countries](#Loans_from_countries)
        *   [4.2.1 Interest](#Interest_3)
        *   [4.2.2 CB for cancelling loan](#CB_for_cancelling_loan)
    *   [4.3 Loans from estates](#Loans_from_estates)
*   [5 Debase currency](#Debase_currency)
*   [6 Bankruptcy](#Bankruptcy)
    *   [6.1 Bankruptcy strategy](#Bankruptcy_strategy)
*   [7 Inflation](#Inflation)
    *   [7.1 Gaining inflation](#Gaining_inflation)
    *   [7.2 Reducing inflation](#Reducing_inflation)
        *   [7.2.1 Passive](#Passive)
        *   [7.2.2 Active](#Active)
*   [8 War taxes](#War_taxes)
*   [9 Footnotes](#Footnotes)

Overview\[[edit](/index.php?title=Economy&veaction=edit&section=1 "Edit section: Overview") | [edit source](/index.php?title=Economy&action=edit&section=1 "Edit section: Overview")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

The total amount of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") ducats in a country's treasury is updated at the beginning of every month. The amount by which this changes is the total [![Income.png](/images/a/aa/Income.png)](/Income "Income") income minus the [![Expenses.png](/images/a/ae/Expenses.png)](/Expenses "Expenses") expenditure for the previous month. The various factors which affect these amounts are listed below. In addition, various [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event")[events](/Events "Events") may add or take away from the treasury.

Aside from the continuing incomes and expenses mentioned below, [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") ducats may also be gained or spent as one-time earnings or payments in the following ways:

**Earnings**:

*   [Treasure fleets](/Economy#Treasure_fleet "Economy")
*   Estate interactions
*   Receiving gifts and loans from other countries through [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power")diplomacy
*   Siphon income from a junior partner in a [personal union](/Personal_union "Personal union")
*   [Exploiting Development](/Development#Exploiting_development "Development") from provinces

**Expenditures**:

*   Constructing [buildings](/Buildings "Buildings")
*   [Estate](/Estate "Estate") interactions
*   Hiring and salary costs for [![Advisor.png](/images/thumb/6/6a/Advisor.png/28px-Advisor.png)](/Advisor "Advisor")[advisors](/Advisors "Advisors")
*   Recruitment costs for [![Infantry.png](/images/thumb/9/9f/Infantry.png/28px-Infantry.png)](/Infantry "Infantry")[land](/Land_units "Land units") and [![Heavy ship.png](/images/thumb/5/50/Heavy_ship.png/28px-Heavy_ship.png)](/Heavy_ship "Heavy ship")[naval](/Naval_units "Naval units") units
*   Providing gifts, subsidies, and loans to other countries through [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power")diplomacy
*   Supporting rebels in another country through [espionage](/Espionage "Espionage")
*   Paying another country to share knowledge
*   Embracing [institutions](/Institutions "Institutions")

Income\[[edit](/index.php?title=Economy&veaction=edit&section=2 "Edit section: Income") | [edit source](/index.php?title=Economy&action=edit&section=2 "Edit section: Income")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

[![](/images/d/de/Incomes.png)](/File:Incomes.png)

[](/File:Incomes.png "Enlarge")

The "Income" column lists regular streams of income, and effect by modifiers plus efficiency (in grey, middle column).

[![Income.png](/images/a/aa/Income.png)](/Income "Income")Income is the sum of all money gained monthly. Unlike in EU3, all income is liquid and does not need to be minted. The continuous sources of income that a country has is listed in the "Income" column, which is on the left side of the Economy panel (see right). This panel lists both the total amount from each source and that source's bonus (if any). Hovering over the source or bonus shows a tooltip with detailed information, such as modifiers or a breakdown of income by province.

The maximum amount of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats a country can have in its treasury is 1 million. However, this number is considered to be difficult to reach without using console commands or mods.

### Taxation\[[edit](/index.php?title=Economy&veaction=edit&section=3 "Edit section: Taxation") | [edit source](/index.php?title=Economy&action=edit&section=3 "Edit section: Taxation")\]

_Main article: [Tax](/Tax "Tax")_  

[![Yearly tax income.png](/images/thumb/1/19/Yearly_tax_income.png/28px-Yearly_tax_income.png)](/Tax "Tax")[Tax](/Tax "Tax") comes directly from the population of a province, and produces a relatively dependable baseline income. Each province has a [![Base tax.png](/images/9/90/Base_tax.png)](/Base_tax "Base tax")base tax (which may be increased by spending [![Administrative power.png](/images/e/ef/Administrative_power.png)](/Administrative_power "Administrative power") administrative power), and a [![Local tax modifier.png](/images/thumb/8/8f/Local_tax_modifier.png/28px-Local_tax_modifier.png)](/Local_tax_modifier "Local tax modifier")tax income efficiency. The yearly province tax amount is the multiple of the two amounts. There is also a [![National tax modifier.png](/images/thumb/3/34/National_tax_modifier.png/28px-National_tax_modifier.png)](/National_tax_modifier "National tax modifier")[National Tax Income](/Tax#National_Tax_Income "Tax"), that is calculated at a countrywide level. Various tax modifiers exist that may change this amount.

### Production\[[edit](/index.php?title=Economy&veaction=edit&section=4 "Edit section: Production") | [edit source](/index.php?title=Economy&action=edit&section=4 "Edit section: Production")\]

_Main article: [Production](/Production "Production")_  

[![Production.png](/images/thumb/a/ad/Production.png/28px-Production.png)](/Production "Production")[Production](/Production "Production") is a measure of the amount of income generated in a province by local producers of its [trade good](/Trade_good "Trade good"). Unlike in EU3, production income is added directly to the state's income each month. This amount depends on the good's [prices](/Trade_goods#Prices "Trade goods"), the province's base production, and the [![Production efficiency.png](/images/thumb/c/cf/Production_efficiency.png/28px-Production_efficiency.png)](/Production_efficiency "Production efficiency")production efficiency (among other modifiers).

### Trade\[[edit](/index.php?title=Economy&veaction=edit&section=5 "Edit section: Trade") | [edit source](/index.php?title=Economy&action=edit&section=5 "Edit section: Trade")\]

_Main article: [Trade](/Trade "Trade")_  

The [![Trade value.png](/images/thumb/f/f9/Trade_value.png/28px-Trade_value.png)](/Trade_value "Trade value")[trade value](/Trade#Trade_value "Trade") produced by each province flows into the trade network, where it is eventually collected by capitals and [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")merchants and converted into [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats. Careful management of trade can make it the most powerful source of income by far, which makes control of trade-important provinces instrumental for a long-term increase of a nation's economical power.

### Gold\[[edit](/index.php?title=Economy&veaction=edit&section=6 "Edit section: Gold") | [edit source](/index.php?title=Economy&action=edit&section=6 "Edit section: Gold")\]

[![Gold](/images/thumb/1/10/Gold.png/28px-Gold.png)](/Trade_goods#Gold "Gold")Gold is a special "trade" good. Gold does not produce any [![Trade value.png](/images/thumb/f/f9/Trade_value.png/28px-Trade_value.png)](/Trade_value "Trade value")trade value; instead, it is converted directly into ducats. Gold production income is 40 [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats per year per unit produced, with the exception of unreformed New World natives, who only receive 1 [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducat per year per unit produced. Income from gold causes [![Yearly inflation reduction.png](/images/thumb/7/79/Yearly_inflation_reduction.png/28px-Yearly_inflation_reduction.png)](/Inflation_reduction "Inflation reduction")inflation per year equal to half its proportion of the country's income; at 100% income the country's inflation would increase by **0.50%** per year.

#### Treasure fleet\[[edit](/index.php?title=Economy&veaction=edit&section=7 "Edit section: Treasure fleet") | [edit source](/index.php?title=Economy&action=edit&section=7 "Edit section: Treasure fleet")\]

[![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado")[![Golden Century.png](/images/thumb/b/bb/Golden_Century.png/28px-Golden_Century.png)](/Golden_Century "Golden Century")

Available only with the [El Dorado](/El_Dorado "El Dorado") DLC _or_ the [Golden Century](/Golden_Century "Golden Century") DLC enabled.

[![Subject colony icon.png](/images/thumb/d/de/Subject_colony_icon.png/24px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation")[Colonial nations](/Colonial_nation "Colonial nation") with gold provinces will not receive the income of gold for themselves, but instead will store it in a ‘Treasure Fleet Counter’ that counts up towards a certain sum depending on the size of the colony’s gold mines. Once the counter is full, the colony will send a treasure fleet. The treasure fleet travels downstream along the [trade routes](/Trade_route "Trade route"), passing each node between the colonial nation and its overlord's [trade capital](/Trade_capital "Trade capital"). If there are [privateers](/Privateer "Privateer") present in these nodes, they will steal a share of the gold corresponding to their power in the node. At the end of the journey, any money that remains is given to the overlord nation. Both the overlord nation and nations privateering suffer [![Yearly inflation reduction.png](/images/thumb/7/79/Yearly_inflation_reduction.png/24px-Yearly_inflation_reduction.png)](/Inflation_reduction "Inflation reduction")[inflation](/Inflation "Inflation") similar to that gained from gold mines.

The income of treasure fleets may be increased by:

[![Treasure fleet income.png](/images/thumb/b/b1/Treasure_fleet_income.png/24px-Treasure_fleet_income.png)](/File:Treasure_fleet_income.png)

Conditions

**+50%**

with [![Grand Armada.png](/images/thumb/c/cf/Grand_Armada.png/24px-Grand_Armada.png)](/File:Grand_Armada.png) ‘Grand Armada’ [naval doctrine](/Naval_doctrine "Naval doctrine")

**+25%**

with [![Gov compass.png](/images/thumb/6/62/Gov_compass.png/24px-Gov_compass.png)](/File:Gov_compass.png) ‘Exploitation of the New World’ government reform (tier 7 [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/24px-Government_monarchy.png)](/Monarchy "Monarchy") [monarchy](/Monarchy#Exploitation_of_the_New_World "Monarchy"), [![Government republic.png](/images/thumb/5/5d/Government_republic.png/24px-Government_republic.png)](/Republic "Republic") [republic](/Republic#Exploitation_of_the_New_World "Republic") and [![Government theocracy.png](/images/thumb/8/81/Government_theocracy.png/24px-Government_theocracy.png)](/Theocracy "Theocracy")[theocracy](/Theocracy#Exploitation_of_the_New_World "Theocracy"))

with [![](/images/thumb/d/d1/Exploration_idea_group.png/24px-Exploration_idea_group.png)](/File:Exploration_idea_group.png) Exploration idea 7: Global empire

**+20%**

with [![Gov merchant ship.png](/images/thumb/f/f4/Gov_merchant_ship.png/24px-Gov_merchant_ship.png)](/File:Gov_merchant_ship.png) ‘Council of the Indies’ government reform (tier 3 [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/24px-Government_monarchy.png)](/Monarchy "Monarchy") [monarchy](/Monarchy#Council_of_the_Indies "Monarchy") and [![Government republic.png](/images/thumb/5/5d/Government_republic.png/24px-Government_republic.png)](/Republic "Republic") [republic](/Republic#Council_of_the_Indies "Republic"))

with 'Expand treasure fleet' button in the subject interaction menu (it accumulates)

with [![Great project el escorial.png](/images/thumb/d/dc/Great_project_el_escorial.png/48px-Great_project_el_escorial.png)](/File:Great_project_el_escorial.png) [El Escorial](/El_Escorial "El Escorial")[![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) while province culture is in Iberian group and same as or accepted by owner (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+10%**

with [![Great project el escorial.png](/images/thumb/d/dc/Great_project_el_escorial.png/48px-Great_project_el_escorial.png)](/File:Great_project_el_escorial.png) [El Escorial](/El_Escorial "El Escorial")[![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) while province culture is in Iberian group and same as or accepted by owner (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+5%**

with [![Great project el escorial.png](/images/thumb/d/dc/Great_project_el_escorial.png/48px-Great_project_el_escorial.png)](/File:Great_project_el_escorial.png) [El Escorial](/El_Escorial "El Escorial")[![Great project level icon tier 1.png](/images/thumb/a/a0/Great_project_level_icon_tier_1.png/24px-Great_project_level_icon_tier_1.png)](/File:Great_project_level_icon_tier_1.png) while province culture is in Iberian group and same as or accepted by owner (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

Note: Without [![El Dorado.png](/images/thumb/1/16/El_Dorado.png/24px-El_Dorado.png)](/El_Dorado "El Dorado") ‘El Dorado’ or [![Golden Century.png](/images/thumb/b/bb/Golden_Century.png/24px-Golden_Century.png)](/Golden_Century "Golden Century") ‘Golden Century’ DLC these modifiers are replaced with [![Global tariffs.png](/images/thumb/0/0b/Global_tariffs.png/24px-Global_tariffs.png)](/Global_tariffs "Global tariffs") global tariffs modifier of one-tenth the magnitude.

Nations who do not have their trade capital downstream of their colonies’ trade nodes will be unable to receive treasure fleets. In these cases, the colonial nation will simply keep the gold for themselves, paying just the usual amount in tariffs.

### Tariffs\[[edit](/index.php?title=Economy&veaction=edit&section=8 "Edit section: Tariffs") | [edit source](/index.php?title=Economy&action=edit&section=8 "Edit section: Tariffs")\]

_Main article: [Tariffs](/Tariffs "Tariffs")_  

[![Subject colony icon.png](/images/thumb/d/de/Subject_colony_icon.png/28px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation")[Colonial nations](/Colonial_nation "Colonial nation") are required to transfer a part of their total income, called [![Global tariffs.png](/images/thumb/0/0b/Global_tariffs.png/28px-Global_tariffs.png)](/Global_tariffs "Global tariffs")tariffs, to their overlord. At their formation, this amount is 10% of their income. The tariffs can be set for each colonial nation by the overlord in the [Subjects](/Country_interface "Country interface") interface or may change through [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event")events. Higher tariffs increase the level of [Liberty desire](/Colonial_nation "Colonial nation") in the colonial nation.

### Vassals\[[edit](/index.php?title=Economy&veaction=edit&section=9 "Edit section: Vassals") | [edit source](/index.php?title=Economy&action=edit&section=9 "Edit section: Vassals")\]

_Main article: [Income from vassals](/Income_from_vassals "Income from vassals")_  

[![Vassal.png](/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal")Vassals are required to pay a [![Income from vassals.png](/images/thumb/b/b2/Income_from_vassals.png/28px-Income_from_vassals.png)](/Income_from_vassals "Income from vassals")fee to their overlords. The basis for calculating this fee is the [![Yearly tax income.png](/images/thumb/1/19/Yearly_tax_income.png/28px-Yearly_tax_income.png)](/Tax "Tax")[tax income](/Tax_income "Tax income") of the vassal. The amount that must be paid is modified by the ‘vassals tax efficiency’ of the overlord, which is influenced by the overlord's [![Legitimacy.png](/images/2/25/Legitimacy.png)](/Legitimacy "Legitimacy")[legitimacy](/Legitimacy "Legitimacy"), among other factors. Apart from the fee, vassals may be requested to give all of their trade power to their overlord. While this action will increase their liberty desire by **30 %**, this may significantly boost the overlord's trade income, especially if he has better [trade efficiency](/Trade_efficiency "Trade efficiency").

### Harbor fees\[[edit](/index.php?title=Economy&veaction=edit&section=10 "Edit section: Harbor fees") | [edit source](/index.php?title=Economy&action=edit&section=10 "Edit section: Harbor fees")\]

Signing a [fleet basing](/Fleet_basing "Fleet basing") agreement with another country will cost an amount equal to 0.1[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats[\[1\]](#cite_note-defines-1) per month for every port belonging to the other country with a minimum of 0.5[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats and maximum of 2.0[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats per month.

The AI never asks to access ports of the player, and the player can never offer it (there is a **\-1000** "strategic interests" modifier). Whether the province is cored or not has no effect on the cost of fleet basing rights.

### Subsidies\[[edit](/index.php?title=Economy&veaction=edit&section=11 "Edit section: Subsidies") | [edit source](/index.php?title=Economy&action=edit&section=11 "Edit section: Subsidies")\]

_Main article: [Diplomacy § Give subsidies](/Diplomacy#Give_subsidies "Diplomacy")_  

Countries that have a strategic interest in another country may grant subsidies to that country, which is given in the form of a certain amount of the benefactor's [![Income.png](/images/a/aa/Income.png)](/Income "Income") monthly income each month for a certain number of years.

### Spoils of war\[[edit](/index.php?title=Economy&veaction=edit&section=12 "Edit section: Spoils of war") | [edit source](/index.php?title=Economy&action=edit&section=12 "Edit section: Spoils of war")\]

The _Spoils of War_ section includes income gained from military and wartime actions. This includes:

*   **Looting**: [Looting](/Land_warfare#Looting "Land warfare") occurs when a province (either occupied or besieged) has hostile units stationed in it. Each province has a loot bar that depletes based on the amount that the army can loot every month.
*   **Privateering**: A country can send their [![Light ship.png](/images/thumb/c/cd/Light_ship.png/28px-Light_ship.png)](/Light_ship "Light ship") light ships on missions to [Privateer](/Naval_warfare#Privateering "Naval warfare") in certain sea zones, aiding pirate nations in exchange for a portion of their earnings.

### War Reparations\[[edit](/index.php?title=Economy&veaction=edit&section=13 "Edit section: War Reparations") | [edit source](/index.php?title=Economy&action=edit&section=13 "Edit section: War Reparations")\]

[![Art of War.png](/images/thumb/0/0f/Art_of_War.png/28px-Art_of_War.png)](/Art_of_War "Art of War")

Available only with the [Art of War](/Art_of_War "Art of War") DLC enabled.

A country has the option to demand 10% of an enemy's income for 10 years as part of a peace deal.

### Condottieri\[[edit](/index.php?title=Economy&veaction=edit&section=14 "Edit section: Condottieri") | [edit source](/index.php?title=Economy&action=edit&section=14 "Edit section: Condottieri")\]

[![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum")

Available only with the [Mare Nostrum](/Mare_Nostrum "Mare Nostrum") DLC enabled.

It is possible to offer a country [Condottieri](/Condottieri "Condottieri"), which are armies rented out for money. Note that, in the event that the contractor is a player-controlled country, the army will stay under the control of the AI.

### Knowledge Sharing\[[edit](/index.php?title=Economy&veaction=edit&section=15 "Edit section: Knowledge Sharing") | [edit source](/index.php?title=Economy&action=edit&section=15 "Edit section: Knowledge Sharing")\]

[![Rule Britannia.png](/images/thumb/5/5a/Rule_Britannia.png/28px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia")

Available only with the [Rule Britannia](/Rule_Britannia "Rule Britannia") DLC enabled.

_Main article: [Diplomacy § Knowledge Sharing](/Diplomacy#Knowledge_Sharing "Diplomacy")_  

A country may offer other countries progress in institutions they haven't yet embraced. This costs [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") **10%** of their monthly income, which they pay direct to the country that's sharing. Only one knowledge sharing agreement may be made at a time.

Expenses\[[edit](/index.php?title=Economy&veaction=edit&section=16 "Edit section: Expenses") | [edit source](/index.php?title=Economy&action=edit&section=16 "Edit section: Expenses")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

[![](/images/4/4d/Expenses_column.png)](/File:Expenses_column.png)

[](/File:Expenses_column.png "Enlarge")

The "Expenses" column showing major payments and maintenances.

A country's [![Expenses.png](/images/a/ae/Expenses.png)](/Expenses "Expenses")expenses, i.e., its monthly continuous payments, is similarly listed in the Expenses column on the right side of the Economy panel. This column lists two types of expenses:

*   **Automatic expenses**: These are expenses which are automatically deducted from the treasury. They cannot be modified from the Economy panel, simply viewed (except for [![Interest per annum.png](/images/thumb/f/fc/Interest_per_annum.png/28px-Interest_per_annum.png)](/Interest_per_annum "Interest per annum")_Interest_, which may be changed through the **Loans** interface).
*   **Adjustable expenses**: These expenses are shown with sliders, to adjust the amount being spent monthly on them. Changing these expenses using the sliders will have an impact on the action being done or the asset being maintained.

### Advisors\[[edit](/index.php?title=Economy&veaction=edit&section=17 "Edit section: Advisors") | [edit source](/index.php?title=Economy&action=edit&section=17 "Edit section: Advisors")\]

_Main article: [Advisor cost](/Advisor_cost "Advisor cost")_  

[![Advisor.png](/images/thumb/6/6a/Advisor.png/28px-Advisor.png)](/Advisor "Advisor")Advisors have a base monthly salary equal to the square of their skill level, increased by **0.5%** per game year since 1444. Hovering over this in the Expenses column shows a tooltip that lists other modifiers, including [Inflation](/Inflation "Inflation").

### State maintenance\[[edit](/index.php?title=Economy&veaction=edit&section=18 "Edit section: State maintenance") | [edit source](/index.php?title=Economy&action=edit&section=18 "Edit section: State maintenance")\]

_Main article: [State maintenance](/State_maintenance "State maintenance")_  

[![Icon states.png](/images/thumb/9/9e/Icon_states.png/28px-Icon_states.png)](/States "States")[States](/States "States") require continuous monetary upkeep, depending on the [development](/Development "Development") of the provinces, the distance to the capital and further modifiers.

### Interest\[[edit](/index.php?title=Economy&veaction=edit&section=19 "Edit section: Interest") | [edit source](/index.php?title=Economy&action=edit&section=19 "Edit section: Interest")\]

_Main article: [Loans](/Loans "Loans")_  

[![Interest per annum.png](/images/thumb/f/fc/Interest_per_annum.png/28px-Interest_per_annum.png)](/Interest_per_annum "Interest per annum")Interest must be paid on loans. The default interest rate is 4%, which may be changed by modifiers. Further information is given in the [Loans](/Loans "Loans") section below.

### Diplomatic expenses\[[edit](/index.php?title=Economy&veaction=edit&section=20 "Edit section: Diplomatic expenses") | [edit source](/index.php?title=Economy&action=edit&section=20 "Edit section: Diplomatic expenses")\]

[![](/images/d/d9/Diplomatic_expenses.jpg)](/File:Diplomatic_expenses.jpg)

[](/File:Diplomatic_expenses.jpg "Enlarge")

Diplomatic expenses.

Hovering over _Diplomatic Expenses_ shows a tooltip with a more detailed breakdown of a country's diplomatic expenses (see right). These are as follows:

*   **Subsidies**: [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")Ducats sent monthly to other countries as [subsidies](/Subsidies "Subsidies"), if any.
*   **Vassal fee**: If the country is a [![Vassal.png](/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal")vassal, the amount of [![Income from vassals.png](/images/thumb/b/b2/Income_from_vassals.png/28px-Income_from_vassals.png)](/Income_from_vassals "Income from vassals")vassal fees sent to their overlord.
*   **Outgoing tariffs**: If the country is a [![Subject colony icon.png](/images/thumb/d/de/Subject_colony_icon.png/28px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation")colonial nation, the amount of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats paid to their overlord as [![Global tariffs.png](/images/thumb/0/0b/Global_tariffs.png/28px-Global_tariffs.png)](/Global_tariffs "Global tariffs")tariffs.
*   **War reparations**: Amount paid to winners of previous wars (usually 10% of income for 10 years). See [war reparations](/Warfare#Peace_terms "Warfare") for more details (Requires [![Art of War.png](/images/thumb/0/0f/Art_of_War.png/28px-Art_of_War.png)](/Art_of_War "Art of War")Art of War DLC).
*   **Support loyalists**: Amount spent to junior partners in [![Personal union.png](/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union")[Personal unions](/Personal_unions "Personal unions") to reduce their [![Liberty desire.png](/images/thumb/f/fd/Liberty_desire.png/28px-Liberty_desire.png)](/Liberty_desire "Liberty desire")Liberty desire.
*   **Send officers**: Amount sent to [![March icon.png](/images/thumb/1/1d/March_icon.png/28px-March_icon.png)](/March "March")marches to reduce their [liberty desire](/Liberty_desire "Liberty desire") and provide a bonus to their armies.
*   **Knowledge sharing**: Amount sent to subjects to spread [institutions](/Institutions "Institutions"). (Requires [![Rule Britannia.png](/images/thumb/5/5a/Rule_Britannia.png/28px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia")Rule Britannia DLC).
*   **Condottieri fees**: Amount paid to other countries as rent for [Condottieri](/Condottieri "Condottieri") (requires [![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum")Mare Nostrum DLC).

### Fort maintenance\[[edit](/index.php?title=Economy&veaction=edit&section=21 "Edit section: Fort maintenance") | [edit source](/index.php?title=Economy&action=edit&section=21 "Edit section: Fort maintenance")\]

_Main article: [Forts](/Forts "Forts")_  

This shows the amount spent monthly to maintain the [![Fort level.png](/images/thumb/a/a0/Fort_level.png/28px-Fort_level.png)](/Fort_level "Fort level")forts present in a country. The amount spent on each fort depends on its fort level. Forts can be mothballed while at peace to reduce their [![Fort maintenance.png](/images/thumb/d/d4/Fort_maintenance.png/28px-Fort_maintenance.png)](/Fort_maintenance "Fort maintenance")maintenance by a **\-50%** modifier. Doing so will inhibits the forts upkeep of [![Army tradition.png](/images/8/8d/Army_tradition.png)](/Army_tradition "Army tradition")army tradition and remove the defenders making it easy to conquer in a war. Further modifiers are granted by [ideas](/Ideas "Ideas") and [policies](/Policies "Policies") among others.

### Colonial maintenance\[[edit](/index.php?title=Economy&veaction=edit&section=22 "Edit section: Colonial maintenance") | [edit source](/index.php?title=Economy&action=edit&section=22 "Edit section: Colonial maintenance")\]

_Main article: [Colonial maintenance](/Colonial_maintenance "Colonial maintenance")_  

Colonies require a monthly maintenance while they grow until they become full cities. The cost per year is:

![{\displaystyle {\text{cost per year}}=\left(24+{\frac {\text{total development}}{4}}\right)}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/2d438c6ee05017a83955e9b5c9728fbf0a020745)

So, the cost per month is roughly:

![{\displaystyle {\text{cost per month}}=\left(2+\left({\text{total development}}\cdot 0.02\right)\right)}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/126407109896ecf3189917553d3b12a78d3239c3)

Thus, a 5 [![Development.png](/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development")development province will cost about 2.10 [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats per month to colonize, while a 6 development province will cost 2.12[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats per month. The cost is further increased quadratically for each colony over the number of [![Colonists.png](/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist")colonists the country has. Colonial maintenance can be reduced, but at the cost of colonial growth. Provincial modifiers to colony growth are applied separately to this change. So, a tropical colony will shrink by **\-110** settlers with zero maintenance due to the additional **\-10** settlers provincial modifier. Colonial maintenance also does not affect growth from colonist agents.

[![Colonists.png](/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist")Colonists cannot be sent while a country is bankrupt.

### Missionary maintenance\[[edit](/index.php?title=Economy&veaction=edit&section=23 "Edit section: Missionary maintenance") | [edit source](/index.php?title=Economy&action=edit&section=23 "Edit section: Missionary maintenance")\]

_Main article: [Missionary maintenance](/Missionary_maintenance "Missionary maintenance")_  

The costs of an active [![Missionaries.png](/images/thumb/a/ad/Missionaries.png/28px-Missionaries.png)](/Missionary "Missionary")missionary depends on the founding and the [development](/Development "Development") and [local autonomy](/Local_autonomy "Local autonomy") of the province which he is converting.

### Root out corruption\[[edit](/index.php?title=Economy&veaction=edit&section=24 "Edit section: Root out corruption") | [edit source](/index.php?title=Economy&action=edit&section=24 "Edit section: Root out corruption")\]

_Main article: [Corruption](/Corruption "Corruption")_  

A country can lower [![Corruption.png](/images/7/75/Corruption.png)](/Corruption "Corruption")corruption by spending up to 0.05[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats per _effective_ [![Development.png](/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development")development per month under the _Root Out Corruption_ slider, for a maximum of **\-1%** every year. Effective development is affected by [![Autonomy.png](/images/thumb/a/a9/Autonomy.png/28px-Autonomy.png)](/Autonomy "Autonomy")[autonomy](/Autonomy "Autonomy"). The total cost of rooting out corruption is calculated using the formula:

cost of rooting out corruption = corruption cost multiplier × effective development

where _effective development_ is determined by the formula:

effective development = total national development − Σ(total province development × local autonomy)

*   _Corruption cost multiplier_ is the amount spent per effective development. This is the amount that is controlled by the slider. It can be changed from 0[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats per month to 0.05[![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats")ducats per month.
*   _Local autonomy_ is used in decimal form in the above calculations.

#### Example\[[edit](/index.php?title=Economy&veaction=edit&section=25 "Edit section: Example") | [edit source](/index.php?title=Economy&action=edit&section=25 "Edit section: Example")\]

[![](/images/thumb/6/6e/Corruption_example.png/330px-Corruption_example.png)](/File:Corruption_example.png)

[](/File:Corruption_example.png "Enlarge")

Total province development and local autonomy for each of the three provinces for [Andhra](/Andhra "Andhra")

For the three-province country [Andhra](/Andhra "Andhra") (see right), the maximum cost to root out corruption can be calculated as follows:

*   Total national development: Kosta + Velanadu + Konaseema = 11 + 15 + 11 = 37
*   Sum of effective development changes by each province: Σ(province development × local autonomy)
    *   Kosta: 11 × 0.25 = 2.75
    *   Velanadu: 15 × 0.25 = 3.75
    *   Konaseema: 11 × 0 = 0
*   effective development change = 2.75 + 3.75 + 0 = 6.5
*   effective development = total national development − effective development change \= 37 − 6.5 \= 30.5

So, the final cost will be:

total cost of rooting out corruption \= 0.05 × 30.5 \= 1.52 ducats/month

The calculations above mean that higher [![Autonomy.png](/images/thumb/a/a9/Autonomy.png/28px-Autonomy.png)](/Autonomy "Autonomy")local autonomy will decrease the cost of lowering corruption.

### Army maintenance\[[edit](/index.php?title=Economy&veaction=edit&section=26 "Edit section: Army maintenance") | [edit source](/index.php?title=Economy&action=edit&section=26 "Edit section: Army maintenance")\]

_Main article: [Army maintenance](/Army_maintenance "Army maintenance")_  

At full [![Land maintenance modifier.png](/images/thumb/1/10/Land_maintenance_modifier.png/28px-Land_maintenance_modifier.png)](/Land_maintenance_modifier "Land maintenance modifier")army maintenance, each fielded regiment has a monthly maintenance cost equal to **2%** of its [![Regiment cost.png](/images/thumb/2/2e/Regiment_cost.png/28px-Regiment_cost.png)](/Regiment_cost "Regiment cost")recruitment price. All modifiers to maintenance are added together and applied to this. Reducing army maintenance using the slider affects [![Reinforce speed.png](/images/thumb/6/6e/Reinforce_speed.png/28px-Reinforce_speed.png)](/Reinforce_speed "Reinforce speed")[reinforcement](/Reinforcement "Reinforcement") rates and [![Morale of armies.png](/images/thumb/f/fa/Morale_of_armies.png/28px-Morale_of_armies.png)](/Morale_of_armies "Morale of armies")morale, to 0% reinforcement rate and a **\-100%** modifier to morale at minimal funding. Condottieri reinforcements and maintenance costs are applied even when maintenance slider is at zero.

Maintenance costs increase over time as a country advances in [![Technology.png](/images/thumb/1/16/Technology.png/28px-Technology.png)](/Technology "Technology")[technology](/Technology "Technology").

Maintenance costs will reduce when a regiment suffers casualties, but will increase due to an added cost for reinforcement. Maintenance costs will also increase when a country exceeds its [![Land forcelimit.png](/images/thumb/9/9f/Land_forcelimit.png/28px-Land_forcelimit.png)](/Land_force_limit "Land force limit")force limit.

### Fleet maintenance\[[edit](/index.php?title=Economy&veaction=edit&section=27 "Edit section: Fleet maintenance") | [edit source](/index.php?title=Economy&action=edit&section=27 "Edit section: Fleet maintenance")\]

_Main article: [Navy maintenance](/Navy_maintenance "Navy maintenance")_  

[![Naval maintenance modifier.png](/images/thumb/3/32/Naval_maintenance_modifier.png/28px-Naval_maintenance_modifier.png)](/Naval_maintenance_modifier "Naval maintenance modifier")Fleet maintenance works the same as army maintenance but with certain exceptions:

*   **First**, naval maintenance increases at discrete steps rather than continuously. It is increased by **10%** at [![Diplomatic technology.png](/images/2/22/Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology")Diplomatic technology levels 3, 5, 9, 15, 19, 22, 25, 27, 29, and 31 (to a total of **+100%**).

*   **Second**, each vessel type has its own [maintenance modifier](/Naval_units#Base_cost "Naval units").

*   **Third**, vessels do not cost increased maintenance to [![Global ship repair.png](/images/thumb/5/5d/Global_ship_repair.png/28px-Global_ship_repair.png)](/Global_ship_repair "Global ship repair")repair, but also do not cost reduced maintenance if damaged.

Further differences, including those on how modifiers are applied, are listed on the [Navy](/Navy "Navy") page.

If the [![Art of War.png](/images/thumb/0/0f/Art_of_War.png/28px-Art_of_War.png)](/Art_of_War "Art of War")[Art of War](/Art_of_War "Art of War") DLC is enabled, mothballing allows naval units to be left unusable in a country's docks for lower maintenance, while giving ships **5%** hull damage per year of being mothballed until 25% health remains.

Loans\[[edit](/index.php?title=Economy&veaction=edit&section=28 "Edit section: Loans") | [edit source](/index.php?title=Economy&action=edit&section=28 "Edit section: Loans")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

### Bank loans\[[edit](/index.php?title=Economy&veaction=edit&section=29 "Edit section: Bank loans") | [edit source](/index.php?title=Economy&action=edit&section=29 "Edit section: Bank loans")\]

The _size_ of the loans are determined by your country's development as per the formula below, while the _number_ of loans are a function of the interest (that is, the maximum number of loans are limited to when your total interest equals your monthly income (the point where one goes bankrupt)

Taking a loan grants an amount of money equal to result of the following formula:

loan size = 0.5 × [![Development.png](/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") total development × (1 + [![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/28px-Trade_efficiency.png)](/Trade_efficiency "Trade efficiency") trade efficiency from diplomatic technology)

A loan may be taken at any time, although each loan taken increases inflation by **0.1**.[\[1\]](#cite_note-defines-1) A loan may be paid back in full, plus the total remaining interest owed, at any time during the loan period. If a loan expires and the borrower cannot (or chooses not to) pay the principal, the loan will be extended for an additional 5 years at the current interest rate, and inflation will increase by an additional 0.1.

_Debt Restructure_: Given the same increase in inflation whenever a loan is renewed automatically, it may be good to "restructure" your debt every now and then. That is, over time as your development increases your loan sizes increase, however when the old loan renews it gives the same inflation but for a smaller original loan amount. Therefore rather borrow doing a new larger loan to repay the old one before it expires. This allows you more debt capacity as you may recall the size of the loan (based on development) is determined separately from the number of loans (based on interest vs income).

_Determining total loans outstanding by others_: There is no ledger to view this, however, as a Great Power one can hover over the great power action "Take on Foreign Debt" to see the target nation's total outstanding loan balance. Alternatively, if one is not a great power with access to this menu option, there is a rough short-hand that is fairly accurate to help estimate this value. In the Ledger under "Country", "Score Comparison" hover your mouse over the "Adm. Rating". Loans will be shown in a red negative number, where each **−0.02** is roughly equal to one outstanding loan. Hence, **−0.08** would roughly be equal to 4 loans. To determine the value of each loan view the country development under the ledger and divide the development by 2. Hence, a 500 total development country would roughly be able to borrow 250 ducats per loan. Another method would be to use the "Declare War" on the target county's ally. One of the reasons for not joining in the war would be "loans outstanding" and a total debt value would be shown.

#### Interest\[[edit](/index.php?title=Economy&veaction=edit&section=30 "Edit section: Interest") | [edit source](/index.php?title=Economy&action=edit&section=30 "Edit section: Interest")\]

Loans have a default interest rate of 4% per year,[\[1\]](#cite_note-defines-1) paid monthly. The interest rate is influenced by the following factors. Note that these add to or subtract from the base 4%, so for example "[![Interest per annum.png](/images/thumb/f/fc/Interest_per_annum.png/28px-Interest_per_annum.png)](/Interest_per_annum "Interest per annum")**−1%** interest per annum" with no other modifiers results in an interest rate of 3%. The minimum interest rate that has to be paid is 1%.[\[1\]](#cite_note-defines-1)

[![Interest per annum.png](/images/thumb/f/fc/Interest_per_annum.png/24px-Interest_per_annum.png)](/File:Interest_per_annum.png)

Conditions

**−2%.00**

as optional [difficulty](/Difficulty "Difficulty") bonus (for the player (easy, very easy) _or_ the AI (hard, very hard))

**−1%.00**

as [lucky](/Lucky "Lucky") nation (AI only)

**−0.5%.0**

with [![Great project potosi.png](/images/thumb/a/a2/Great_project_potosi.png/48px-Great_project_potosi.png)](/File:Great_project_potosi.png)[Cerro Rico del Potosí](/Cerro_Rico_del_Potos%C3%AD "Cerro Rico del Potosí")[![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) or with [Zacatecas Mine City](/Zacatecas_Mine_City "Zacatecas Mine City") (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**−0.5%.0**

with the [![Interest per annum.png](/images/thumb/f/fc/Interest_per_annum.png/28px-Interest_per_annum.png)](/Interest_per_annum "Interest per annum") [Jewish festival of Sukkot](/Additional_denominations#Jewish "Additional denominations") aspect

**−0.25%**

with [![Ganga.png](/images/thumb/6/63/Ganga.png/24px-Ganga.png)](/Ganga "Ganga") Ganga as [personal deity](/Personal_deity "Personal deity") (for [![Hinduism](/images/thumb/1/1a/Hinduism.png/24px-Hinduism.png)](/Hindu "Hindu") Hindu nations)

**−0.25%**

during [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament issue _“Contribute to Government Debt Payment”_

**−0.25%**

with Papal action: Forgive Usury

**−0.25%**

with [![Great project potosi.png](/images/thumb/a/a2/Great_project_potosi.png/48px-Great_project_potosi.png)](/File:Great_project_potosi.png)[Cerro Rico del Potosí](/Cerro_Rico_del_Potos%C3%AD "Cerro Rico del Potosí")[![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png)or with [Zacatecas Mine City](/Zacatecas_Mine_City "Zacatecas Mine City") (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**−0.02%**

for every percentage point of [![Revanchism icon.png](/images/thumb/d/de/Revanchism_icon.png/24px-Revanchism_icon.png)](/Revanchism "Revanchism")revanchism

**+1%.00**

per point of negative [![Stability.png](/images/thumb/a/ae/Stability.png/24px-Stability.png)](/Stability "Stability")stability

**+5%.00**

if [bankrupt](/Bankrupt "Bankrupt")

Ideas and policies

[![Interest per annum.png](/images/thumb/f/fc/Interest_per_annum.png/24px-Interest_per_annum.png)](/Interest_per_annum "Interest per annum")

Traditions

Ideas

Bonuses

ExpandPolicies

−1.00

—

*   Acehnese/Pasai idea 6: Acehnese Moneylending
*   Gujarati Princedom idea 3: Safe Harbor for Jain Bankers

—

—

−0.50

*   Genoese traditions

*   Economic idea 6: Debt and Loans
*   Augsburger idea 4: The Fugger
*   Austrian idea 3: Fugger Banking
*   Brabant idea 5: Banks of Antwerp
*   Frankfurter idea 3: Standardization of Exchange Rates
*   Great Shun idea 3: Hidden Treasury
*   Gutnish idea 7: Found Visby Bank
*   Hamburger idea 6: Berenberg Bank
*   Hanseatic idea 7: The Hansa Bank
*   Swabian idea 2: Fugger Banking
*   Tuscan idea 3: Tuscan Banking

—

—

−0.25

—

—

—

*   Innovative-Trade: The Banking System

Various events and decisions.

### Loans from countries\[[edit](/index.php?title=Economy&veaction=edit&section=31 "Edit section: Loans from countries") | [edit source](/index.php?title=Economy&action=edit&section=31 "Edit section: Loans from countries")\]

Countries that have a strategic interest in another country's wars may grant loans to that country. With [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") Rights of Man active, rulers with the Indulgent trait will accept loans from human players if needed.

#### Interest\[[edit](/index.php?title=Economy&veaction=edit&section=32 "Edit section: Interest") | [edit source](/index.php?title=Economy&action=edit&section=32 "Edit section: Interest")\]

The interest rate of loans from countries is set by the country granting the loan.

#### CB for cancelling loan\[[edit](/index.php?title=Economy&veaction=edit&section=33 "Edit section: CB for cancelling loan") | [edit source](/index.php?title=Economy&action=edit&section=33 "Edit section: CB for cancelling loan")\]

If the borrower refuse to pay the principal when a loan expires, the lender gets a 12-month CB "Cancelled Loan" against the borrower.

### Loans from estates\[[edit](/index.php?title=Economy&veaction=edit&section=34 "Edit section: Loans from estates") | [edit source](/index.php?title=Economy&action=edit&section=34 "Edit section: Loans from estates")\]

The estate privileges [Indebted to the Bourgeoisie](/Base_estates#Burghers_privileges "Base estates") and [Indebted to the Jains](/Dharma_estates#Jains_Privileges "Dharma estates") provide five loans at 1% interest. Repaying the loans automatically removes the privilege.

Debase currency\[[edit](/index.php?title=Economy&veaction=edit&section=35 "Edit section: Debase currency") | [edit source](/index.php?title=Economy&action=edit&section=35 "Edit section: Debase currency")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

[![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man")

Available only with the [Rights of Man](/Rights_of_Man "Rights of Man") DLC enabled.

Debasing currency gives the player a loan's amount of money at the cost of **2** [![Corruption.png](/images/7/75/Corruption.png)](/Corruption "Corruption") corruption. It cannot be done if corruption is already over 90. This is useful if the player wants to repay it over time at their pace (not receiving even more inflation for re-newing loans); however, it is a lot more costly than a regular loan to be repaid using only "Root Out Corruption", plus the negative modifiers for having [corruption](/Corruption "Corruption"). But the value to root it out can be reduced significantly if the player is ahead of time on diplomatic and/or administrative technology, and if its ruler has the Incorruptible [trait](/Personalities "Personalities"), giving a "negative" interest if the player is willing to wait for it to decay naturally, with the only penalty the negative effects from [corruption](/Corruption "Corruption"). The cost for rooting out corruption depends on the autonomy modified development while the loan size depends on the unmodified development. With a high average autonomy (over 60%) debasing currency gives more money than it cost to root out the corruption.

Bankruptcy\[[edit](/index.php?title=Economy&veaction=edit&section=36 "Edit section: Bankruptcy") | [edit source](/index.php?title=Economy&action=edit&section=36 "Edit section: Bankruptcy")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

If the combined monthly interest of loans exceeds a country's monthly income, the country will be forced to declare bankruptcy. It is also possible for any country with at least one loan to manually declare bankruptcy.

Bankruptcy clears all loans and removes **25%** of the country's current [inflation](/Economy#Inflation "Economy") (unless already bankrupt), but gives a number of negative effects for 5 years:[\[2\]](#cite_note-2)

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this table. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.33.

[![Interest per annum.png](/images/thumb/f/fc/Interest_per_annum.png/28px-Interest_per_annum.png)](/Interest_per_annum "Interest per annum")

**+5%**.00

Interest per annum

[![Morale of armies.png](/images/thumb/f/fa/Morale_of_armies.png/28px-Morale_of_armies.png)](/Morale_of_armies "Morale of armies")

**−50%**.00

Morale of armies

[![Morale of navies.png](/images/thumb/8/80/Morale_of_navies.png/28px-Morale_of_navies.png)](/Morale_of_navies "Morale of navies")

**−50%**.00

Morale of navies

[![Reinforce speed.png](/images/thumb/6/6e/Reinforce_speed.png/28px-Reinforce_speed.png)](/Reinforce_speed "Reinforce speed")

**−25%**.00

Reinforce speed

[![Secretariat faction influence](/images/thumb/c/c9/Secretariat_faction_influence.png/28px-Secretariat_faction_influence.png)](/Grand_Secretariat "Secretariat faction influence")

**+0.25**%

Secretariat faction influence

[![Guilds influence](/images/thumb/f/f7/Guilds_influence.png/28px-Guilds_influence.png)](/Merchant_republic "Guilds influence")

**+0.25**%

The Guilds influence

[![Manpower recovery speed.png](/images/thumb/e/ee/Manpower_recovery_speed.png/28px-Manpower_recovery_speed.png)](/Manpower_recovery_speed "Manpower recovery speed")

**−100%**.00

Manpower recovery speed

[![Sailor recovery speed.png](/images/thumb/8/8a/Sailor_recovery_speed.png/28px-Sailor_recovery_speed.png)](/Sailor_recovery_speed "Sailor recovery speed")

**−100%**.00

Sailor recovery speed

[![Advisor cost.png](/images/thumb/4/4d/Advisor_cost.png/28px-Advisor_cost.png)](/Advisor_costs "Advisor costs")

**+50%**.00

Advisor cost

[![Monthly fervor.png](/images/thumb/7/71/Monthly_fervor.png/28px-Monthly_fervor.png)](/Monthly_fervor "Monthly fervor")

**−1**.00%

Monthly fervor

[![Autonomy.png](/images/thumb/a/a9/Autonomy.png/28px-Autonomy.png)](/Autonomy "Autonomy")

**+0.05**%

Monthly autonomy change

[![Institution spread.png](/images/thumb/b/bb/Institution_spread.png/28px-Institution_spread.png)](/Institution_spread "Institution spread")

**−50%**.00

Institution spread

[![Militarization of state.png](/images/thumb/d/de/Militarization_of_state.png/28px-Militarization_of_state.png)](/Militarization "Militarization")

**−0.5**0%

Militarization of state

[![Absolutism.png](/images/thumb/c/c2/Absolutism.png/28px-Absolutism.png)](/Absolutism "Absolutism")

**−2**.00%

Yearly absolutism

[![Technology cost.png](/images/thumb/e/ea/Technology_cost.png/28px-Technology_cost.png)](/Technology_cost "Technology cost")

**+50%**.00

Technology cost

[![Idea cost.png](/images/thumb/3/3c/Idea_cost.png/28px-Idea_cost.png)](/Idea_cost "Idea cost")

**+50%**.00

Idea cost

[![Mandate.png](/images/thumb/4/4e/Mandate.png/28px-Mandate.png)](/Mandate_growth_modifier "Mandate growth modifier")

**−0.1**0%

Mandate growth modifier

[![Great project upgrade cost.png](/images/thumb/7/71/Great_project_upgrade_cost.png/28px-Great_project_upgrade_cost.png)](/Great_project "Great project")

**+50%**.00

Great project upgrade cost

*   [![Global settler increase.png](/images/thumb/2/2b/Global_settler_increase.png/28px-Global_settler_increase.png)](/Global_settler_increase "Global settler increase") **−200** Global settler increase[\[3\]](#cite_note-3)
*   **−1000** respond to an ally's call to arms

Entering bankruptcy has the following immediate effects:

*   Lose [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") **100** [prestige](/Prestige "Prestige")
*   Lose [![Stability.png](/images/a/ae/Stability.png)](/Stability "Stability") **3** [stability](/Stability "Stability")
*   Lower [![Legitimacy.png](/images/2/25/Legitimacy.png)](/Legitimacy "Legitimacy") [legitimacy](/Legitimacy "Legitimacy") to **0**
*   Lose [![Republican tradition.png](/images/e/ee/Republican_tradition.png)](/Republic_tradition "Republic tradition") **25** [republican tradition](/Republican_tradition "Republican tradition") (other government types' scores are not affected)
*   Lose all [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") money in the treasury
*   Reduce [![All power costs.png](/images/thumb/0/0f/All_power_costs.png/28px-All_power_costs.png)](/All_power_costs "All power costs") all monarch power to **−100**
*   Disband all mercenaries
*   Disband all armies and fleets over force limit
*   Automatically fire all advisors
*   Cancel all buildings, great projects and units under construction
*   Cancel all coring or culture conversion currently in progress
*   Gain [![Devastation.png](/images/thumb/8/8c/Devastation.png/28px-Devastation.png)](/Devastation "Devastation") **10%** [devastation](/Devastation "Devastation") in all provinces
*   Remove the 'Recent Uprising' modifier from all provinces
*   Destroy all buildings built or upgraded in the last 5 years (hence one cannot deliberately borrow to build buildings before declaring bankruptcy, one will simply gain inflation and lose all the buildings)
*   Downgrade all centers of trade by 1 level
*   Remove all trade company investments

### Bankruptcy strategy\[[edit](/index.php?title=Economy&veaction=edit&section=37 "Edit section: Bankruptcy strategy") | [edit source](/index.php?title=Economy&action=edit&section=37 "Edit section: Bankruptcy strategy")\]

Deliberately going bankrupt, though dangerous, can be a powerful tool for restoring the economy if managed carefully. Try to have truces lasting at least 5 years with as many dangerous neighbors as possible, so they can't attack during bankruptcy. Before declaring bankruptcy, spend all monarch points on developing provinces or boosting stability (to at least +1 - less will be wasted, the best is to boost stability to 3 before declaring as bankruptcy reduces it by 3), as they will all be lost otherwise. Ensure that no provinces are in the process of being cored. Colonies should be abandoned unless very close to completion (no provinces can be colonized during bankruptcy).

Rebels are more difficult to fight while bankrupt due to the penalties to army morale, but can be beaten with enough numbers (just feed a series of small stacks one day apart into the same battle - the small morale boost from fresh new troops will help win these costly battles). Get stability back up to at least 1 (to avoid instability events) as soon as possible and also consider spending military points to raise legitimacy (requires [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") Rights of Man DLC).

Inflation\[[edit](/index.php?title=Economy&veaction=edit&section=38 "Edit section: Inflation") | [edit source](/index.php?title=Economy&action=edit&section=38 "Edit section: Inflation")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

In economics, inflation is an increase in the money supply which contributes to an increase in the price of goods over time. In gameplay terms, inflation makes all expenses cost more. Low levels of inflation (around 10%), though not ideal, are reasonable. Around 20% or higher, this could signify an economic catastrophe, and measures must be taken to avoid total collapse. However, as soon as inflation is 5+%, it's possible to get bad events because of the high inflation incurring stability drops or increased local autonomy.

Contrary to real life, inflation in game does not mean constantly increasing prices, but rather a flat increase of the country's expenses. In real life, certain incomes would increase with inflation as well. This reflects that the in game "ducats" have a constant value over the course of centuries and serve as an absolute indicator of value. The in-game inflation simply represents the inflation over the time between collecting income and spending it, therefore representing that the income has lost value while it was sitting in the country's treasury.

### Gaining inflation\[[edit](/index.php?title=Economy&veaction=edit&section=39 "Edit section: Gaining inflation") | [edit source](/index.php?title=Economy&action=edit&section=39 "Edit section: Gaining inflation")\]

Inflation is increased by the following:

*   Each loan taken or extended increases inflation by **+0.10**.
*   Income from gold increases inflation by **0.50** per year times the proportion of income from gold relative to 100% of total income. Accordingly, assuming one has a Master of Mint, ensure that income from gold is less than 20% of total income so as not to increase inflation. [![Flag of Kilwa](/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa") idea 5: Gold of Sofala and [![Flag of Zimbabwe](/images/thumb/5/57/Zimbabwe.png/20px-Zimbabwe.png)](/Zimbabwe "Zimbabwe") [Zimbabwe](/Zimbabwe "Zimbabwe") idea 3: Gold Deposits decrease this amount by **\-20%**.
*   Lump sums of monetary compensation claimed in a peace treaty (but _not_ reparations) cause a one-time increase of inflation.
*   Selling provinces or ships to other nations
*   Receiving gifts from other nations
*   (Requires [![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado")El Dorado DLC) Receiving or plundering [treasure fleets](/Treasure_fleet "Treasure fleet")
*   Various _events_ can increase inflation.

These are all situations where the country's money supply is expanded. In economics, an expansion in the supply of money without corresponding economic growth causes a decrease in its value, i.e. inflation. Before the middle of the 20th century, and certainly during the period of EU4, currency was only considered money to the extent that it was either made of or backed by gold (and silver, which is represented by gold in the game), which is why gold income (a direct injection of pure money) causes inflation.

### Reducing inflation\[[edit](/index.php?title=Economy&veaction=edit&section=40 "Edit section: Reducing inflation") | [edit source](/index.php?title=Economy&action=edit&section=40 "Edit section: Reducing inflation")\]

#### Passive\[[edit](/index.php?title=Economy&veaction=edit&section=41 "Edit section: Passive") | [edit source](/index.php?title=Economy&action=edit&section=41 "Edit section: Passive")\]

Several effects reduce inflation by a specific amount per **year**:

[![Yearly inflation reduction.png](/images/thumb/7/79/Yearly_inflation_reduction.png/24px-Yearly_inflation_reduction.png)](/File:Yearly_inflation_reduction.png)

Conditions

**+0.15**

*   _“Control over Monetary Policy”_ privilege for the [![Burghers.png](/images/thumb/d/dd/Burghers.png/28px-Burghers.png)](/Burghers "Burghers") burghers, [![Vaishyas.png](/images/thumb/5/5d/Vaishyas.png/28px-Vaishyas.png)](/Vaishyas "Vaishyas") Vaishyas and [![Jains.png](/images/thumb/9/95/Jains.png/28px-Jains.png)](/Jains "Jains") Jains estates

**+0.10**

*   employing a [![Advisor Master of Mint.png](/images/thumb/d/d5/Advisor_Master_of_Mint.png/24px-Advisor_Master_of_Mint.png)](/Master_of_Mint "Master of Mint") Master of Mint advisor
*   for 20 years after the “Forgive Usury” Papal interaction

**+0.05**

*   during [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament issue _“Contribute to Government Debt Payment”_
*   for [trading in](/Trading_in "Trading in") [![Gems.png](/images/thumb/d/d5/Gems.png/24px-Gems.png)](/Gems "Gems") gems
*   with [difficulty](/Difficulty "Difficulty") set to very easy for players (or very hard for the AI)
*   assimilating the _Southern African_ culture group as the [![Flag of Mughals](/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals")

[![Yearly inflation reduction.png](/images/thumb/7/79/Yearly_inflation_reduction.png/24px-Yearly_inflation_reduction.png)](/Inflation_reduction "Inflation reduction")

Traditions

Ideas

Bonuses

CollapsePolicies

+0.15

—

*   Somalian idea 3: African Minting

—

—

+0.10

*   Amago traditions
*   Lanfang traditions
*   Mexican traditions
*   Mutapan traditions

*   Economic idea 2: National Bank
*   Aksumite idea 7: Coin Minting
*   Andean idea 3: Tears of the Sun
*   Brazilian idea 3: Mines of Minas Gerais
*   Bregenzer idea 5: The Sale of Bregenz Titles
*   Butua idea 2: Strict Gold Trade Regulations
*   Corsican idea 5: The Bank of Saint George
*   Dutch idea 1: Found the Amsterdam Wisselbank
*   Malvi idea 6: Jain Bankers
*   Navarran idea 4: Cámara de Comptos
*   Sienese idea 3: The Bank of Siena
*   Slovak idea 3: Golden Kremnica
*   Sonoran idea 3: Gold, Gold, Gold!

—

—

+0.05

—

*   Austrian idea 3: Fugger Banking
*   Revolutionary French idea 3: Franc Germinal
*   Swabian idea 2: Fugger Banking

—

—

+0.03

—

*   Kilwan idea 5: Gold of Sofala

—

—

Furthermore, various events, decisions and mission rewards can affect inflation.

#### Active\[[edit](/index.php?title=Economy&veaction=edit&section=42 "Edit section: Active") | [edit source](/index.php?title=Economy&action=edit&section=42 "Edit section: Active")\]

If passive means are unavailable or insufficient, the [![Reduce inflation.png](/images/thumb/c/ce/Reduce_inflation.png/24px-Reduce_inflation.png)](/File:Reduce_inflation.png) _‘Reduce Inflation’_ button in the budget panel reduces inflation by **−2.0** in exchange for [![Administrative power.png](/images/thumb/e/ef/Administrative_power.png/24px-Administrative_power.png)](/Administrative_power "Administrative power") **75** administrative power.

The modifier ‘reduce inflation cost’ affects these costs.

[![Reduce inflation cost.png](/images/thumb/e/ed/Reduce_inflation_cost.png/24px-Reduce_inflation_cost.png)](/File:Reduce_inflation_cost.png)

Conditions

**+50%**

as [![Flag of Poland](/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") with [![Privilege royal authority.png](/images/thumb/8/80/Privilege_royal_authority.png/24px-Privilege_royal_authority.png)](/File:Privilege_royal_authority.png) _“Pacta Conventa”_ privilege for the [![Nobility.png](/images/thumb/c/c8/Nobility.png/24px-Nobility.png)](/Nobility "Nobility") nobility estate

War taxes\[[edit](/index.php?title=Economy&veaction=edit&section=43 "Edit section: War taxes") | [edit source](/index.php?title=Economy&action=edit&section=43 "Edit section: War taxes")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.31.

Counter-intuitively, _war taxes_ do not increase tax income. They instead decrease army maintenance as long as war taxes are toggled but cost [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") **2** military power per month. When at peace, both the bonuses and the cost are disabled.

The bonus given are:

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this table. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.33.

[![Land maintenance modifier.png](/images/thumb/1/10/Land_maintenance_modifier.png/28px-Land_maintenance_modifier.png)](/Land_maintenance_modifier "Land maintenance modifier")

**−15%**

Land maintenance modifier

[![Naval maintenance modifier.png](/images/thumb/3/32/Naval_maintenance_modifier.png/28px-Naval_maintenance_modifier.png)](/Naval_maintenance_modifier "Naval maintenance modifier")

**−15%**

Naval maintenance modifier

[![Mercenary maintenance.png](/images/thumb/6/68/Mercenary_maintenance.png/28px-Mercenary_maintenance.png)](/Mercenary_maintenance "Mercenary maintenance")

**−5%**

Mercenary maintenance

The following reduces war taxes cost:

[![War taxes cost.png](/images/thumb/8/8a/War_taxes_cost.png/24px-War_taxes_cost.png)](/File:War_taxes_cost.png)

Conditions

**−100%**

*   being emperor or elector of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire") after [![HRE reichskrieg.png](/images/thumb/8/84/HRE_reichskrieg.png/24px-HRE_reichskrieg.png)](/File:HRE_reichskrieg.png) ‘Reichskrieg’ [imperial reform](/Imperial_reform "Imperial reform") while at war with enemies of the empire
*   with [![Ab free war taxes.png](/images/thumb/a/ad/Ab_free_war_taxes.png/28px-Ab_free_war_taxes.png)](/File:Ab_free_war_taxes.png) ‘Improved Wartaxes’ ability during the [![Age of Discovery.png](/images/thumb/e/eb/Age_of_Discovery.png/24px-Age_of_Discovery.png)](/Age_of_Discovery "Age of Discovery") Age of Discovery
*   with the [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png)Sankin-kotai Palaces [Great project](/Great_project "Great project")

**−50%**

with [![Privilege exempt officers from jaziya.png](/images/thumb/b/bf/Privilege_exempt_officers_from_jaziya.png/24px-Privilege_exempt_officers_from_jaziya.png)](/File:Privilege_exempt_officers_from_jaziya.png) _“Levy War Contributions”_ privilege for the [![Vaishyas.png](/images/thumb/5/5d/Vaishyas.png/24px-Vaishyas.png)](/Vaishyas "Vaishyas") vaishyas estate

*   with the [![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png)Sankin-kotai Palaces [Great project](/Great_project "Great project")
*   Mercenary idea 5: Benefits for Mercenaries

Footnotes\[[edit](/index.php?title=Economy&veaction=edit&section=44 "Edit section: Footnotes") | [edit source](/index.php?title=Economy&action=edit&section=44 "Edit section: Footnotes")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  ↑ [Jump up to: 1.0](#cite_ref-defines_1-0) [1.1](#cite_ref-defines_1-1) [1.2](#cite_ref-defines_1-2) [1.3](#cite_ref-defines_1-3) See in /Europa Universalis IV/common/defines.lua.
2.  [↑](#cite_ref-2 "Jump up") See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers#Bankruptcy](/Static_modifiers#Bankruptcy "Static modifiers")).
3.  [↑](#cite_ref-3 "Jump up") From /Europa Universalis IV/common/defines.lua: BANKRUPTCY\_COLONIAL\_GROWTH\_PENALTY = -200, -- growth penalty for bankruptcy

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

[Debase currency](/Debase_currency "Debase currency") • [Development](/Development "Development") • Economy • [Privateering](/Privateering "Privateering") • [Production](/Production "Production") • [Raid coasts](/Raid_coasts "Raid coasts") • [Tax](/Tax "Tax")

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

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Economy&oldid=153828](https://eu4.paradoxwikis.com/index.php?title=Economy&oldid=153828)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.24](/Category:1.24 "Category:1.24")
*   [Economy](/Category:Economy "Category:Economy")

Hidden categories:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")
*   [Articles with potentially outdated tables](/Category:Articles_with_potentially_outdated_tables "Category:Articles with potentially outdated tables")