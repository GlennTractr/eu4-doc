Manpower
========

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

A country's **manpower** is its stock of men eligible for military service. Manpower is used to recruit and reinforce [armies](/Armies "Armies") (except [mercenaries](/Mercenaries "Mercenaries") and some [special unit types](/Army#Special_land_units "Army")). A country with exhausted manpower reserves will be crippled in its ability to wage war.

Contents
--------

*   [1 Maximum](#Maximum)
*   [2 Manpower increase](#Manpower_increase)
*   [3 Province manpower](#Province_manpower)
    *   [3.1 Base](#Base)
    *   [3.2 Local manpower increase](#Local_manpower_increase)
    *   [3.3 Local manpower modifier](#Local_manpower_modifier)
        *   [3.3.1 Manpower in true faith provinces](#Manpower_in_true_faith_provinces)
*   [4 National manpower modifier](#National_manpower_modifier)
*   [5 Using manpower](#Using_manpower)
*   [6 Manpower recovery](#Manpower_recovery)
    *   [6.1 Manpower recovery speed](#Manpower_recovery_speed)
*   [7 Strategy](#Strategy)
*   [8 Footnotes](#Footnotes)

Maximum\[[edit](/index.php?title=Manpower&veaction=edit&section=1 "Edit section: Maximum") | [edit source](/index.php?title=Manpower&action=edit&section=1 "Edit section: Maximum")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The maximum manpower of a country is calculated as follows:

![{\displaystyle {{\text{maximum manpower}}=({\text{manpower increase}}+\sum {\text{province manpower}})\cdot (1+{\text{national manpower modifier}})}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/c2cf9166ed5419f7199822d23a4efa97c11a3968)

Manpower increase\[[edit](/index.php?title=Manpower&veaction=edit&section=2 "Edit section: Manpower increase") | [edit source](/index.php?title=Manpower&action=edit&section=2 "Edit section: Manpower increase")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

The base value for every country is **+10 000** men.[\[1\]](#cite_note-1) Furthermore:

[![Manpower.png](/images/thumb/0/0c/Manpower.png/24px-Manpower.png)](/File:Manpower.png)

Conditions

**+500**

as [emperor](/Holy_Roman_Empire#Emperor "Holy Roman Empire") per member state (excluding free cities) in the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")[\[2\]](#cite_note-2)

**+1 000**

as emperor per [free city](/Free_city "Free city") in the Holy Roman Empire[\[3\]](#cite_note-3)

**+100**

as emperor per member state in the Holy Roman Empire after enacting [![HRE expand the gemeiner pfennig.png](/images/thumb/3/34/HRE_expand_the_gemeiner_pfennig.png/24px-HRE_expand_the_gemeiner_pfennig.png)](/Holy_Roman_Empire#List_of_reforms_and_their_effects "Holy Roman Empire#List of reforms and their effects") ‘Expand the Gemeiner Pfennig’ imperial reform

**+200**

as [elector](/Elector "Elector") per member state in the Holy Roman Empire after enacting [![HRE expand the gemeiner pfennig.png](/images/thumb/3/34/HRE_expand_the_gemeiner_pfennig.png/24px-HRE_expand_the_gemeiner_pfennig.png)](/Holy_Roman_Empire#List_of_reforms_and_their_effects "Holy Roman Empire#List of reforms and their effects") ‘Expand the Gemeiner Pfennig’ imperial reform

**+100 000**

as [invasion nation](/Static_modifiers#Invasion "Static modifiers")[\[4\]](#cite_note-4)

**+250**

as [Shogun](/Shogun "Shogun") per Daimyo during active [![Sword hunt.png](/images/thumb/1/1f/Sword_hunt.png/24px-Sword_hunt.png)](/Sword_Hunt "Sword Hunt") ‘Sword Hunt’ government ability [\[5\]](#cite_note-Shogun-5)

**−1 000**

as [Daimyo](/Daimyo "Daimyo") during active [![Sword hunt.png](/images/thumb/1/1f/Sword_hunt.png/24px-Sword_hunt.png)](/Sword_Hunt "Sword Hunt") ‘Sword Hunt’ government ability of the Shogun[\[5\]](#cite_note-Shogun-5)

**+5 000**

with [![Gov soldiers 7.png](/images/thumb/8/8a/Gov_soldiers_7.png/24px-Gov_soldiers_7.png)](/File:Gov_soldiers_7.png) ‘[Municipal Self-Defense](/Municipal_Self-Defense "Municipal Self-Defense")’ (tier 5 [![Government republic.png](/images/thumb/5/5d/Government_republic.png/24px-Government_republic.png)](/Republic "Republic") republic) government reform

**+2 000**

for each [![TC governor generals mansion.png](/images/thumb/c/c9/TC_governor_generals_mansion.png/24px-TC_governor_generals_mansion.png)](/File:TC_governor_generals_mansion.png) Governor General's Mansion [trade company investment](/Trade_company_investment "Trade company investment")

Province manpower\[[edit](/index.php?title=Manpower&veaction=edit&section=3 "Edit section: Province manpower") | [edit source](/index.php?title=Manpower&action=edit&section=3 "Edit section: Province manpower")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

Province manpower is the amount of soldiers each province contributes to the national manpower maximum. It is computed as follows:

![{\displaystyle {{\text{province manpower}}=({\text{base}}+{\text{manpower increase}})\cdot (1+{\text{local manpower modifier}})\cdot (1-{\text{local autonomy}})}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/4f7608f9478ad83c9b764a976af3d2d0660073b9)

Therefore, for example, if base manpower is 1,000 and the local manpower modifiers added up to say 200% and local autonomy say 77%, then the calculation would be:  
province manpower = 1,000 x 200% x (100%-77%) or  
province manpower = 1,000 x 2 x (1.0-0.77) or  
province manpower = 1,000 x 2 x 0.23 or  
province manpower = 460

The manpower which is displayed in the province window also includes national manpower modifiers, but these are not actually applied when summing the manpower of all provinces. Instead they are applied after adding the national manpower increases.

### Base\[[edit](/index.php?title=Manpower&veaction=edit&section=4 "Edit section: Base") | [edit source](/index.php?title=Manpower&action=edit&section=4 "Edit section: Base")\]

[![](/images/thumb/4/49/Base_manpower_map.png/300px-Base_manpower_map.png)](/File:Base_manpower_map.png)

[](/File:Base_manpower_map.png "Enlarge")

Province base manpower in 1444.

Base manpower is determined by the level of military [development](/Development "Development") in a province. Each level of military development adds **250** men[\[6\]](#cite_note-defines-6) to the province base manpower. The starting development level of a province is a preset in the game files[\[7\]](#cite_note-7). See the [economic list of provinces](/Economic_list_of_provinces "Economic list of provinces") for these values.

The military development level of a province can be increased by spending [military points](/Military_points "Military points"). It can also be modified by a few special events, decisions and missions.

### Local manpower increase\[[edit](/index.php?title=Manpower&veaction=edit&section=5 "Edit section: Local manpower increase") | [edit source](/index.php?title=Manpower&action=edit&section=5 "Edit section: Local manpower increase")\]

This local modifier is additional to base manpower.

[![Local manpower modifier.png](/images/thumb/8/8b/Local_manpower_modifier.png/24px-Local_manpower_modifier.png)](/File:Local_manpower_modifier.png)

Conditions

**+1 500**

has [![Latin constable.png](/images/thumb/d/dc/Latin_constable.png/24px-Latin_constable.png)](/Soldier%27s_households "Soldier's households") Soldier's Households in a province producing [![Grain.png](/images/thumb/6/66/Grain.png/24px-Grain.png)](/Grain "Grain") grain, [![Fish.png](/images/thumb/f/fb/Fish.png/24px-Fish.png)](/Fish "Fish") fish, [![Livestock.png](/images/thumb/e/e1/Livestock.png/24px-Livestock.png)](/Livestock "Livestock") livestock or [![Wine.png](/images/thumb/6/69/Wine.png/24px-Wine.png)](/Wine "Wine") wine

**+750**

has [![Latin constable.png](/images/thumb/d/dc/Latin_constable.png/24px-Latin_constable.png)](/Soldier%27s_households "Soldier's households") Soldier's Households

### Local manpower modifier\[[edit](/index.php?title=Manpower&veaction=edit&section=6 "Edit section: Local manpower modifier") | [edit source](/index.php?title=Manpower&action=edit&section=6 "Edit section: Local manpower modifier")\]

[![Local manpower modifier.png](/images/thumb/8/8b/Local_manpower_modifier.png/24px-Local_manpower_modifier.png)](/Local_manpower_modifier "Local manpower modifier")

Conditions

**+100%**

[![Latin training fields.png](/images/thumb/4/4f/Latin_training_fields.png/24px-Latin_training_fields.png)](/Training_fields "Training fields") Training Fields

**+100%**

[![Great project the kremlin.png](/images/thumb/c/c7/Great_project_the_kremlin.png/48px-Great_project_the_kremlin.png)](/File:Great_project_the_kremlin.png) [The Kremlin](/The_Kremlin "The Kremlin")[![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) with culture in East Slavic group (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+75%**

[![Core Icon.png](/images/thumb/1/12/Core_Icon.png/28px-Core_Icon.png)](/Core "Core") [Core province](/Core_province "Core province")[\[8\]](#cite_note-sm-8)

**+50%**

[![Latin barracks.png](/images/thumb/c/c0/Latin_barracks.png/24px-Latin_barracks.png)](/Barracks "Barracks") Barracks

**+50%**

[![Native great trail.png](/images/thumb/0/05/Native_great_trail.png/24px-Native_great_trail.png)](/File:Native_great_trail.png) Great Trail ([native building](/Buildings#List_of_native_buildings "Buildings"))

**+50%**

[![Great project the kremlin.png](/images/thumb/c/c7/Great_project_the_kremlin.png/48px-Great_project_the_kremlin.png)](/File:Great_project_the_kremlin.png) [The Kremlin](/The_Kremlin "The Kremlin")[![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) with culture in East Slavic group (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+50%**

[![Great project belem tower.png](/images/thumb/f/ff/Great_project_belem_tower.png/48px-Great_project_belem_tower.png)](/File:Great_project_belem_tower.png) [Belem Tower](/Belem_Tower "Belem Tower")[![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) within area (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+33%**

[![Patriarch authority.png](/images/thumb/a/af/Patriarch_authority.png/24px-Patriarch_authority.png)](/Patriarch_authority "Patriarch authority") Patriarch authority at 100% (in [![Orthodoxy](/images/thumb/9/96/Orthodox.png/28px-Orthodox.png)](/Orthodox "Orthodox") Orthodox provinces)[\[8\]](#cite_note-sm-8)

**+33%**

World Trade Center (level 3 inland [center of trade](/Center_of_trade "Center of trade")) within the state

**+25%**

Land province[\[8\]](#cite_note-sm-8)

**+25%**

[![Great project the kremlin.png](/images/thumb/c/c7/Great_project_the_kremlin.png/48px-Great_project_the_kremlin.png)](/File:Great_project_the_kremlin.png) [The Kremlin](/The_Kremlin "The Kremlin")[![Great project level icon tier 1.png](/images/thumb/a/a0/Great_project_level_icon_tier_1.png/24px-Great_project_level_icon_tier_1.png)](/File:Great_project_level_icon_tier_1.png) with culture in East Slavic group (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+25%**

[![Great project belem tower.png](/images/thumb/f/ff/Great_project_belem_tower.png/48px-Great_project_belem_tower.png)](/File:Great_project_belem_tower.png) [Belem Tower](/Belem_Tower "Belem Tower")[![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) within area (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+15%**

[![Great project belem tower.png](/images/thumb/f/ff/Great_project_belem_tower.png/48px-Great_project_belem_tower.png)](/File:Great_project_belem_tower.png) [Belem Tower](/Belem_Tower "Belem Tower")[![Great project level icon tier 1.png](/images/thumb/a/a0/Great_project_level_icon_tier_1.png/24px-Great_project_level_icon_tier_1.png)](/File:Great_project_level_icon_tier_1.png) within area (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+10%**

[![Government republic.png](/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") [Republican cultural sufferance](/Republican_cultural_sufferance "Republican cultural sufferance") as non-tribal republic[\[8\]](#cite_note-sm-8)

**+10%**

[![Parliament.png](/images/thumb/f/f9/Parliament.png/28px-Parliament.png)](/Parliament "Parliament") Seat in parliament[\[8\]](#cite_note-sm-8)

**−15%**

[![Culture icon.png](/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Non-accepted [culture](/Culture "Culture") in the primary culture group[\[8\]](#cite_note-sm-8)

**−33%**

[![Culture icon.png](/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Non-accepted [culture](/Culture "Culture") in a culture group other than the primary[\[8\]](#cite_note-sm-8)

**−50%**

[Occupation](/Occupation "Occupation")[\[8\]](#cite_note-sm-8)

**−1%**

[![Autonomy.png](/images/thumb/a/a9/Autonomy.png/24px-Autonomy.png)](/Autonomy "Autonomy") Per point of autonomy (applied multiplicatively)[\[8\]](#cite_note-sm-8)

#### Manpower in true faith provinces\[[edit](/index.php?title=Manpower&veaction=edit&section=7 "Edit section: Manpower in true faith provinces") | [edit source](/index.php?title=Manpower&action=edit&section=7 "Edit section: Manpower in true faith provinces")\]

[![Manpower in true faith provinces](/images/thumb/f/f6/Manpower_in_true_faith_provinces.png/24px-Manpower_in_true_faith_provinces.png)](/Manpower "Manpower in true faith provinces")

Traditions

Ideas

Bonuses

CollapsePolicies

+20%

—

—

*   Livonian Knight ambition

—

+15%

—

*   Divine idea 7: Martyrs
*   Latin idea 7: Frankokratia

—

*   Divine-Administrative: Omne Datum Optimum

+10%

—

*   Religious idea 2: Church Attendance Duty

—

—

[![Manpower in true faith provinces.png](/images/thumb/f/f6/Manpower_in_true_faith_provinces.png/24px-Manpower_in_true_faith_provinces.png)](/File:Manpower_in_true_faith_provinces.png)

Conditions

**+20%**

being [![Become Defender of the Faith.png](/images/thumb/0/0f/Become_Defender_of_the_Faith.png/24px-Become_Defender_of_the_Faith.png)](/Defender_of_the_faith "Defender of the faith") Defender of the Faith of tier IV or tier V

**+10%**

*   with [![Gov soldiers 6.png](/images/thumb/5/5a/Gov_soldiers_6.png/24px-Gov_soldiers_6.png)](/File:Gov_soldiers_6.png) ‘[Magister Militum Dei](/Magister_Militum_Dei "Magister Militum Dei")’ government reform (tier 5 [![Government theocracy.png](/images/thumb/8/81/Government_theocracy.png/24px-Government_theocracy.png)](/Theocracy "Theocracy") theocracy)
*   after the third concession [![Reformation soldiers of christ.png](/images/thumb/2/22/Reformation_soldiers_of_christ.png/24px-Reformation_soldiers_of_christ.png)](/File:Reformation_soldiers_of_christ.png) ‘Soldiers of Christ’ during the [Council of Trent](/Council_of_Trent "Council of Trent")

National manpower modifier\[[edit](/index.php?title=Manpower&veaction=edit&section=8 "Edit section: National manpower modifier") | [edit source](/index.php?title=Manpower&action=edit&section=8 "Edit section: National manpower modifier")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[![National manpower modifier.png](/images/thumb/f/fe/National_manpower_modifier.png/24px-National_manpower_modifier.png)](/National_manpower_modifier "National manpower modifier")

Conditions

**+50%**

with [difficulty](/Difficulty "Difficulty") set to ‘very easy’

**+33%**

with [Golden Liberty](/Base_estates#Golden_Liberty "Base estates") privilege available for [Elective Monarchies](/Monarchy#Elective_Monarchy "Monarchy")

**+30%**

with the Crusade [triggered modifier](/Triggered_modifier "Triggered modifier")

**+25%**

Scaling at 100% estate's land ownership with the [Increased Levies](/Base_estates#Nobility "Base estates") privilege for [![Nobility.png](/images/thumb/c/c8/Nobility.png/28px-Nobility.png)](/Nobility "Nobility")[Nobility estate](/Base_estates#Nobility "Base estates") or [![Marathas](/images/thumb/9/94/Marathas_estate.png/28px-Marathas_estate.png)](/Marathas_estate "Marathas")[Marathas estate](/Dharma_estates#Marathas "Dharma estates")

**+25%**

as [![March icon.png](/images/thumb/1/1d/March_icon.png/24px-March_icon.png)](/March "March") march[\[8\]](#cite_note-sm-8)

**+25%**

with [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/24px-Government_monarchy.png)](/Monarchy "Monarchy") [Revolutionary Empire](/Monarchy#Revolutionary_Empire "Monarchy") Tier 1 Government Reform

**+20%**

With [Larger Tribal Host](/Cossacks_estates#Tribes_Privileges "Cossacks estates") privilege for [![Tribes](/images/thumb/3/3a/Tribes.png/28px-Tribes.png)](/Cossacks_estates#Tribes "Tribes") Tribes

**+20%**

with [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/24px-Government_monarchy.png)](/Monarchy "Monarchy") [Tsardom](/Monarchy#Tsardom "Monarchy") Tier 1 Government Reform

**+15%**

with [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/24px-Government_monarchy.png)](/Monarchy "Monarchy") [Nayankara System](/Monarchy#Nayankara_System "Monarchy") Tier 1 Government Reform

**+15%**

with [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/24px-Government_monarchy.png)](/Monarchy "Monarchy") [Misl Confederacy](/Monarchy#Misl_Confederacy "Monarchy") Tier 1 Government Reform

**+15%**

with [![Government monarchy.png](/images/thumb/4/4d/Government_monarchy.png/24px-Government_monarchy.png)](/Monarchy "Monarchy") [Strengthen Noble Privileges](/Monarchy#Strengthen_Noble_Privileges "Monarchy") Tier 2 Government Reform

**+10%**

as [![Government native.png](/images/thumb/a/a8/Government_native.png/24px-Government_native.png)](/Steppe_nomads "Steppe nomads") [steppe nomads](/Steppe_nomads "Steppe nomads") (modified by [government rank](/Government_rank "Government rank"))

**+20%**

**+30%**

**+10%**

with [![Freya.png](/images/thumb/2/29/Freya.png/24px-Freya.png)](/Freya "Freya") Freya as personal deity as Norse nation

**+10%**

with a [![Advisor Master recruiter.png](/images/thumb/8/8a/Advisor_Master_recruiter.png/24px-Advisor_Master_recruiter.png)](/Master_Recruiter "Master Recruiter") Master Recruiter advisor

**+10%**

as [![Revolution target.png](/images/thumb/8/8a/Revolution_target.png/24px-Revolution_target.png)](/Revolution_target "Revolution target") revolution target[\[8\]](#cite_note-sm-8)

**+5%**

with [![Parliament.png](/images/thumb/f/f9/Parliament.png/28px-Parliament.png)](/Parliament "Parliament") parliament and _“Conduct Nationwide Census”_ as active issue

**+0.2%**

for each percentage point of [![Legalism](/images/thumb/4/47/Legalism.png/28px-Legalism.png)](/Piety "Legalism") legalism (positive piety) as a [Muslim](/Muslim "Muslim") nation[\[8\]](#cite_note-sm-8)

**−10%**

with [![Guilds](/images/thumb/a/a7/Guilds.png/28px-Guilds.png)](/Merchant_republic "Guilds") The Guilds in power as [merchant republic](/Merchant_republic "Merchant republic")

**−25%**

during the [![Plutocratic Coup.png](/images/thumb/c/c2/Plutocratic_Coup.png/24px-Plutocratic_Coup.png)](/Plutocratic_Coup "Plutocratic Coup") Plutocratic Coup disaster

**Ideas and policies**:

[![National manpower modifier.png](/images/thumb/f/fe/National_manpower_modifier.png/24px-National_manpower_modifier.png)](/National_manpower_modifier "National manpower modifier")

Traditions

Ideas

Bonuses

ExpandPolicies

+33%

*   Russian traditions

*   Quantity idea 1: Levée en Masse
*   Italian idea 4: The Office of Censor
*   Tverian idea 7: National Army

*   Roman ambition

—

+25%

*   Desmondian traditions
*   Golden Horde traditions
*   Great Shun traditions
*   Great Yuan traditions
*   LPC traditions
*   Lotharingian traditions
*   Mongolian traditions
*   Siamese traditions

*   Aq Qoyunlu idea 4: Dynastic Appanages
*   Ayutthayan idea 2: The Corvee System
*   Burgundian idea 7: Create the Regimental System
*   Burmese idea 1: Mandala System
*   Chagatai idea 7: The Glory of Conquest
*   Crimean idea 7: Accept Nogai Protectorates
*   Dai Viet idea 4: Village Militia
*   Daimyo idea 6: Armies of the Daimyo
*   Horde idea 7: The Glory of Conquest
*   Iroquois idea 2: Keepers of the Western Door
*   Kazani idea 4: Legacy of the Great Horde
*   Oirat idea 7: The Glory of Conquest
*   Polish idea 3: Piechota Wybraniecka
*   Prussian idea 6: Regimental Cantons
*   Qara Qoyunlu idea 1: The Black Sheep
*   Shan idea 7: Expansionism
*   Tuscan idea 7: Territorial Ambition

*   Aksumite ambition
*   Aztec ambition
*   Chinese ambition
*   Jerusalem ambition

—

+20%

*   Angevin traditions
*   Bregenzer traditions
*   Danish traditions
*   Franconian traditions
*   French traditions
*   Hatakeyama traditions
*   Hindustani traditions
*   Rassid traditions
*   Shiba traditions
*   Sicilian traditions
*   Swabian traditions
*   Yamana traditions

*   Afghan idea 3: Tureh
*   Australian idea 3: The Eureka Rebellion
*   Ava idea 5: Recruit from the Hill Tribes
*   Bengali idea 3: Bengal's Endlessly Productive Rice Fields
*   Central Algonquian idea 3: Medicinal Infusions
*   Chernihiv idea 3: Expand Regimental Barracks
*   Cherokee idea 3: Red Chiefs
*   Federation idea 1: Council of Elders
*   Hosokawa idea 5: Ashigaru
*   Hungarian idea 2: Bulwark of Christianity
*   Japanese idea 1: Reformed Land Holding
*   Lur idea 3: A Haven for Dissenters
*   Native idea 6: War and Peace Chiefs
*   Novgorod idea 5: Grand Duke's Army
*   Oda idea 7: Kenchi
*   Otomo idea 1: Unite the Clans
*   Punjabi idea 4: The Khalsa
*   Scottish idea 3: Rein in the Clans
*   Shawnee idea 7: Private War Parties
*   Swedish idea 7: Union and Security Act
*   Tiwi idea 1: Yiminga
*   Utsunomiya idea 5: Unify the Shimotsuke Lands
*   Wallachian idea 7: Abolition of Serfdom
*   Westphalian idea 3: Universal Conscription

*   Khmer ambition
*   Milanese ambition
*   Neapolitan ambition
*   Scandinavian ambition
*   Semien ambition
*   Zaporozhian ambition

*   Aristocratic-Exploration: The Colonial Nobility Act
*   Espionage-Plutocratic: The Military Allotment Act

+15%

*   Arabian traditions
*   Ardabili traditions
*   Bengal Sultanate traditions
*   Caucasian traditions
*   Colognian traditions
*   Gond traditions
*   Holstein traditions
*   Jurchen traditions
*   Lunda traditions
*   Ruthenian traditions
*   Trierian traditions
*   West African traditions

*   Aristocratic idea 2: Serfdom
*   Indigenous idea 5: Controlled Burns
*   Albanian idea 7: Break The Power Of Princes
*   Andalusian idea 5: Jund Settlements
*   Ashanti idea 5: Centralized Coalition
*   Ayyubid idea 2: Ancestral Heritage
*   Baluch idea 4: Reorganization of the Army
*   Bornean idea 5: Encourage Immigration
*   Chosokabe idea 2: Seven Clans of Tosa
*   Creek idea 5: Micos Leadership
*   Dahomey idea 2: Slave Hunts
*   Estonian idea 1: Brotherhood of Blackheads
*   Farsi idea 6: Integrate the Qashqai
*   Garjati idea 3: Tribal Feudatories
*   Great Qing idea 2: The Green Standard Army
*   Guarani idea 5: Missions Settlements
*   Hadramhi idea 2: Tribes of Hadramut
*   Hojo idea 6: Unification of Kanto
*   Interlacustrine idea 1: Source of the Nile
*   Karelian idea 1: Ladoga Fishing Industry
*   Malvi idea 1: The Rajputs Malwa
*   Manchu idea 1: United Three Jurchens
*   Mewari idea 5: Recall the Purbias
*   Montenegrin idea 7: Cojstvo I Junastvo
*   Muiscan idea 4: The Tale of Bochica
*   Mushasha idea 4: Arabistan
*   Nepali idea 3: Our Valleys United
*   Offaly idea 7: The Buannacht
*   Ogasawara idea 4: Unification of the Kori
*   Persian idea 1: The Qizilbash
*   Rajput idea 1: Clan Loyalties
*   Rajputana idea 2: King of Petty Princes
*   Ryazan idea 1: The Arsenal of Ryazan
*   Siberian idea 6: Successful Raids
*   Somali idea 3: Somali Clans
*   Tapuian idea 7: Unite The Tribes
*   Tarascan idea 6: Otomi Settlements
*   Toki idea 3: Banner of Bellflower
*   Tumbuka idea 2: Central Melting Pot
*   Tupi idea 4: Slash And Burn
*   Tyrone idea 4: Arming the People
*   Württemberger idea 2: Swabian League

*   Ainu ambition
*   Asturian ambition
*   Miao ambition
*   Sindhi ambition

*   Court-Aristocratic: Universal Serfdom Act

+10%

*   Assamese traditions
*   Banteni traditions
*   Beninese traditions
*   Dali traditions
*   Hejazi traditions
*   Lan Na traditions
*   Mapuche traditions
*   Maratha traditions
*   Moravian traditions
*   Sami traditions
*   Transylvanian traditions
*   Ulster traditions
*   Zambezi traditions

*   Ajami idea 5: Tribes of Iraq-e Ajam
*   Anatolian idea 2: Seljuq Marches
*   Bosnian idea 3: Empower Bosnian Nobility
*   Byzantine idea 2: Repopulation of the Countryside
*   Carib idea 7: Integrate the Garifuna
*   Chimu idea 7: The Mit'a
*   Danziger idea 3: Centralized Population
*   East India idea 4: Presidency Armies
*   Granada idea 6: Moors
*   Highlander idea 6: The Arming Act
*   Incan idea 4: Drafted Hatun Runas
*   Indian Sultanate idea 4: Counting the People
*   Kangra idea 2: Riches of the Kangra Valley
*   Khorasani idea 3: Princely Appanages
*   Kildarean idea 7: Royal Irish Army
*   Kongolese idea 2: Elephant Hunts
*   Kurdish idea 3: Kurdish Tribes
*   Mahri idea 3: The Mahra Tribes
*   Malagasy idea 4: Martial Traditions
*   Malian idea 3: Reclamation of Land
*   Manipur idea 5: Unite the Hill Tribes
*   Maravi idea 3: A Fertile Land
*   Pisan idea 7: Fund the Masnada
*   Romanian idea 5: Peasant Soldiers
*   Rothenburg idea 7: Klingentorturm
*   Sardinian-Piedmontese idea 4: Royal Sardinian Army
*   Siddi idea 4: The Siddi Diaspora
*   South Indian idea 3: Polygar System
*   Yarkandi idea 6: Black Mountain and White Mountain
*   Yemeni idea 5: Uniting the Yemeni Tribes

*   Central Algonquian ambitions
*   Deccani Sultanate ambition
*   Eastern Algonquian ambitions
*   Mindanao ambition
*   Telugu ambition

*   Administrative-Horde: Steppe Supplies
*   Administrative-Plutocratic: The Land Inheritance Act
*   Diplomatic-Plutocratic: Mandatory Service
*   Divine-Exploration: Render Unto Caesar
*   Espionage-Quantity: The Mercenary Registration Act
*   Expansion-Plutocratic: Taxation with Representation

+5%

—

*   National idea 5: Peasant Levy

—

—

Using manpower\[[edit](/index.php?title=Manpower&veaction=edit&section=9 "Edit section: Using manpower") | [edit source](/index.php?title=Manpower&action=edit&section=9 "Edit section: Using manpower")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Raising new [regiments](/Regiment "Regiment"), as well as replenishing existing ones that have lost men due to [battles](/Battle "Battle") or [attrition](/Attrition "Attrition"), will draw men from the manpower pool. [Mercenaries](/Mercenaries "Mercenaries") do not require manpower to raise or reinforce, but are much more expensive and are only available in limited amounts. All regiment types (infantry/cavalry/artillery) require the same amount of manpower. Nation-specific [special units](/Army#Special_land_units "Army"), such as Russian streltsy and Ottoman janissaries, as well as units created through [estate](/Estate "Estate") interactions, don't cost manpower to raise but do require it to reinforce, with the exception of Manchu banners.

Manpower recovery\[[edit](/index.php?title=Manpower&veaction=edit&section=10 "Edit section: Manpower recovery") | [edit source](/index.php?title=Manpower&action=edit&section=10 "Edit section: Manpower recovery")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.29.

Manpower replenishes over time until it reaches the maximum level. It takes a base time of 10 years[\[6\]](#cite_note-defines-6) to fill the manpower reserves from zero. The monthly recovery rate is:

![{\displaystyle {{\text{monthly manpower recovery}}={\frac {({\text{manpower increase}}+\sum {\text{province manpower}})\cdot (1+{\text{national manpower modifier}})\cdot (1+{\text{manpower recovery speed}})}{120}}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/236d86c3c38a4761e35936c2dc353f1b40c221ed)

or **100**,[\[6\]](#cite_note-defines-6) whichever is greater.

### Manpower recovery speed\[[edit](/index.php?title=Manpower&veaction=edit&section=11 "Edit section: Manpower recovery speed") | [edit source](/index.php?title=Manpower&action=edit&section=11 "Edit section: Manpower recovery speed")\]

Manpower recovery speed modifies the recovery rate of province manpower.

[![Manpower recovery speed.png](/images/thumb/e/ee/Manpower_recovery_speed.png/24px-Manpower_recovery_speed.png)](/Manpower_recovery_speed "Manpower recovery speed")

Conditions

**+100%****.0**

as [invasion nation](/Static_modifiers#Invasion "Static modifiers")[\[8\]](#cite_note-sm-8)

**+50%****.0**

with enabled [player](/Player_bonuses "Player bonuses") _or_ [AI bonuses](/AI_bonuses "AI bonuses").[\[8\]](#cite_note-sm-8)

**+20%****.0**

as [![March icon.png](/images/thumb/1/1d/March_icon.png/24px-March_icon.png)](/March "March") march[\[8\]](#cite_note-sm-8)

**+20%****.0**

owning [![Great project chichen itza.png](/images/thumb/e/e1/Great_project_chichen_itza.png/48px-Great_project_chichen_itza.png)](/File:Great_project_chichen_itza.png)[Chichen Itza](/Chichen_Itza "Chichen Itza")[![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) while province culture is in Mayan group and accepted (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+15%****.0**

as [![Fetishist](/images/thumb/8/8d/Fetishist.png/24px-Fetishist.png)](/Fetishist "Fetishist") Fetishist nation with [![Cult Enkai.png](/images/thumb/e/e7/Cult_Enkai.png/24px-Cult_Enkai.png)](/Enkai "Enkai") Cult of Enkai.

**+15%****.0**

as [![Catholicism](/images/thumb/3/39/Catholic.png/24px-Catholic.png)](/Catholic "Catholic") Catholic nation with Papal action_“Proclaim holy war”_

**+15%****.0**

owning [![Great project chichen itza.png](/images/thumb/e/e1/Great_project_chichen_itza.png/48px-Great_project_chichen_itza.png)](/File:Great_project_chichen_itza.png)[Chichen Itza](/Chichen_Itza "Chichen Itza")[![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) while province culture is in Mayan group and accepted (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+10%****.0**

with [![Government republic.png](/images/thumb/5/5d/Government_republic.png/24px-Government_republic.png)](/Republic "Republic") [Landholders](/Republic#Landholders "Republic") Tier 8 Government Reform

**+10%****.0**

with [![Government theocracy.png](/images/thumb/8/81/Government_theocracy.png/24px-Government_theocracy.png)](/Theocracy "Theocracy") [External Mission](/Theocracy#External_Mission "Theocracy") Tier 2 Government Reform

**+10%****.0**

as [![Orthodoxy](/images/thumb/9/96/Orthodox.png/24px-Orthodox.png)](/Orthodox "Orthodox") Orthodox nation with Icon of St. Michael active

**+10%****.0**

as [![Coptic.png](/images/thumb/7/74/Coptic.png/24px-Coptic.png)](/Coptic "Coptic") Coptic nation with the blessing Encourage Warriors of the Faith active

**+10%****.0**

with [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament and _“Support the War Effort”_ as active issue

**+10%****.0**

with [![China temple.png](/images/thumb/5/5a/China_temple.png/24px-China_temple.png)](/Commanderies_of_the_Five_Armies "Commanderies of the Five Armies") the temples in power as [celestial empire](/Celestial_empire "Celestial empire") (without [![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven"))

**+10%****.0**

with _“Parish Registers”_ aspect as [![Protestantism](/images/thumb/0/0d/Protestant.png/24px-Protestant.png)](/Protestant "Protestant") Protestant country

**+10%****.0**

as [![Inti.png](/images/thumb/d/d2/Inti.png/24px-Inti.png)](/Inti "Inti") Inti country with _Organized Recruitment_ reform.

**+10%****.0**

owning [![Great project chichen itza.png](/images/thumb/e/e1/Great_project_chichen_itza.png/48px-Great_project_chichen_itza.png)](/File:Great_project_chichen_itza.png)[Chichen Itza](/Chichen_Itza "Chichen Itza")[![Great project level icon tier 1.png](/images/thumb/a/a0/Great_project_level_icon_tier_1.png/24px-Great_project_level_icon_tier_1.png)](/File:Great_project_level_icon_tier_1.png) while province culture is in Mayan group and accepted (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**+5%****.0**

for [trading in](/Trading_in "Trading in") [![Cocoa.png](/images/thumb/8/8d/Cocoa.png/24px-Cocoa.png)](/Cocoa "Cocoa") cocoa

**+0.5%**

for each percentage point of [![Revanchism icon.png](/images/thumb/d/de/Revanchism_icon.png/24px-Revanchism_icon.png)](/Revanchism "Revanchism") revanchism[\[8\]](#cite_note-sm-8)

**+0.2%**

for each point of [![Militarization of state.png](/images/thumb/d/de/Militarization_of_state.png/24px-Militarization_of_state.png)](/Militarization "Militarization") militarization as [![Flag of Prussia](/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia")

**+0.1%**

for each point of [![Army tradition.png](/images/thumb/8/8d/Army_tradition.png/24px-Army_tradition.png)](/Army_tradition "Army tradition") army tradition[\[8\]](#cite_note-sm-8)

**−1%****.0**

for each point of [![War exhaustion.png](/images/thumb/8/8c/War_exhaustion.png/24px-War_exhaustion.png)](/War_exhaustion "War exhaustion") war exhaustion[\[8\]](#cite_note-sm-8)

**−20%****.0**

for having [Recruitment Sabotaged](/Espionage#Covert_actions "Espionage") [\[8\]](#cite_note-sm-8)

**−100%****.0**

if [bankrupt](/Bankrupt "Bankrupt")[\[8\]](#cite_note-sm-8)

Ideas and policies:

[![Manpower recovery speed.png](/images/thumb/e/ee/Manpower_recovery_speed.png/24px-Manpower_recovery_speed.png)](/Manpower_recovery_speed "Manpower recovery speed")

Traditions

Ideas

Bonuses

ExpandPolicies

+25%

—

*   Palawa idea 7: Enduring People

—

—

+20%

*   Ruthenian traditions
*   Rûmi traditions
*   Sundanese tradition

*   Plutocratic idea 7: Emancipation
*   Quantity idea 2: The Young can Serve
*   Adalite idea 1: Our Infinite Struggle
*   Anatolian idea 4: Ghazi
*   Cossack idea 1: Escaped Serfs
*   Georgian idea 5: Sadrosho Districts
*   Golden Horde idea 5: Logistics of the Khan
*   Hawaiian idea 5: Kanawai Mamalahoe
*   Horde idea 6: Logistics of the Khan
*   Iroquois idea 5: Mourning Wars
*   Jurchen idea 4: The Borderlands
*   Karamanid idea 2: Ghazi
*   Liège idea 2: The Wars of Liège
*   Northeastern Woodlands idea 3: Bear Clan
*   Ottoman idea 2: Ghazi
*   Revolutionary French idea 5: Jourdan Law
*   Romanian idea 1: Flexible Recruiting
*   Swedish idea 4: Indelningsverket
*   Zulu idea 2: The Ukubuthwa

*   Rigan ambition
*   Wallachian ambition

—

+15%

*   Divine traditions
*   Kitaran traditions
*   Latgalian traditions
*   Lithuanian traditions
*   Lithuanian traditions
*   Maratha traditions
*   Native traditions
*   Serbian traditions
*   Siouan traditions
*   Swabian City-State traditions
*   Tyrconnell traditions

*   Assamese idea 4: Reform the Paik System
*   Bayreuther idea 6: Gravenreuther Stift
*   Catalan idea 5: Miquelets
*   Chagatai idea 2: Ceaseless Border Wars
*   Great Qing idea 2: The Green Standard Army
*   Hanseatic idea 5: Hanseatic Levy System
*   Knights Hospitaller idea 2: Assistance to the Suffering
*   Mamluk idea 3: Purchase New Mamluks
*   Norse idea 1: Eternal Struggle
*   Oirat idea 6: Defiance of the Dzungars
*   Ryazan idea 3: Land Charters
*   Shimazu idea 2: Satsunan School
*   Teutonic idea 2: Recruit Peasants
*   Württemberger idea 4: Swabian Circle

*   Chiba ambition
*   Hojo ambition
*   Karelian ambition
*   Kurdish ambition
*   Mexican ambition
*   Shan ambition

*   Administrative-Horde: Steppe Supplies
*   Administrative-Quantity: Provincial Taxation System

+10%

*   Albanian traditions
*   Ardabili traditions
*   Chinese traditions
*   Imerina traditions
*   Nepalese Princedom traditions
*   Nepali traditions
*   Rajput traditions
*   Ruthenian traditions
*   Tupi traditions
*   Yaroslavlyian traditions
*   Zaporozhian traditions

*   Aztec idea 3: Telpochcalli
*   Bahmani idea 1: Gharbians
*   Balinese idea 7: Rivals to Slaves
*   Crimean idea 6: Settle the Crimean Steppe
*   Eora idea 4: Protect the Ancestral Land
*   Great Shun idea 1: Humble Beginnings
*   Lunda idea 4: An Army Overnight
*   Luxembourg idea 5: The Spanish Road
*   Moldavian idea 2: Razesi Peasants
*   Nivernais idea 6: Morvan Wet Nurses
*   Persian idea 6: Promotion of Irrigation
*   Ryukyuan idea 7: The Three Mountains

*   Highlander ambition
*   Tarascan ambition
*   Yi ambition

*   Quality-Exploration: Superior Supply Systems

+5%

—

*   Danziger idea 6: Continued Independence

—

—

Estates:

[![Manpower recovery speed.png](/images/thumb/e/ee/Manpower_recovery_speed.png/24px-Manpower_recovery_speed.png)](/Manpower_recovery_speed "Manpower recovery speed")

ExpandEstate

**+5%** - **+20%**

with loyal [![Nobility.png](/images/thumb/c/c8/Nobility.png/24px-Nobility.png)](/Nobility "Nobility")nobility estate (scaled by influence)

**+5%** - **+20%**

with neutral [![Nobility.png](/images/thumb/c/c8/Nobility.png/24px-Nobility.png)](/Nobility "Nobility")nobility estate (scaled by influence)

**−2.5%** - **−10%**

with disloyal [![Nobility.png](/images/thumb/c/c8/Nobility.png/24px-Nobility.png)](/Nobility "Nobility")nobility estate (scaled by influence)

**+5%** - **+20%**

with loyal [![Tribes](/images/thumb/3/3a/Tribes.png/24px-Tribes.png)](/Cossacks_estates#Tribes "Tribes")tribes estate (scaled by influence)

**+5%** - **+20%**

with neutral [![Tribes](/images/thumb/3/3a/Tribes.png/24px-Tribes.png)](/Cossacks_estates#Tribes "Tribes")tribes estate (scaled by influence)

**−10%** - **−40%**

with disloyal [![Tribes](/images/thumb/3/3a/Tribes.png/24px-Tribes.png)](/Cossacks_estates#Tribes "Tribes")tribes estate (scaled by influence)

Strategy\[[edit](/index.php?title=Manpower&veaction=edit&section=12 "Edit section: Strategy") | [edit source](/index.php?title=Manpower&action=edit&section=12 "Edit section: Strategy")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Strategy](/images/thumb/a/a2/Years_of_separatism.png/36px-Years_of_separatism.png "Strategy") _The below is **one of many** player suggested strategies for **Manpower**. Bear in mind, due to the dynamic nature of the game, it may unfold differently for other players._

Manpower is one of the three greatest limits on a nation's ability to expand, the others being money and monarch points. As a small nation it accumulates slowly and can be consumed in large amounts by a single unsuccessful battle. Some things to keep in mind to save or conserve manpower are:

*   Rebels eat up valuable manpower for no gain. Keeping unrest low, through harsh treatment, is equivalent to trading monarch points for manpower. Other methods of lowering unrest (raising autonomy, hiring an advisor, etc.) trade money for manpower, so balance assets in short supply against those that are more plentiful.
*   Once a nation has replenished its manpower pool up to the maximum, any excess manpower is not accrued and essentially lost. Consider raising new regiments, even exceeding the force limit if money is plentiful, in order to stockpile manpower.
*   Mercenaries don't cost national manpower, instead they draw from a pool of their own, and they do cost extra cash, but cannot be [drilled](/Drill "Drill"). In most situations they should not be kept around during peacetime since they cost more. But if you are out of manpower having mercenaries to fight rebels is one way to get your own manpower to grow faster.
*   Full strength units do more damage than reduced strength ones. Consider consolidating regiments in an army after a battle but don't do so consistently if the units are only slightly to moderately damaged and may reinforce up to full strength before the next anticipated battle.
*   Each regiment in an army (of a particular type) reinforces at the same rate and costs the same to reinforce. The more regiments are below full strength, the faster the army will reinforce, but also the more money you will spend on reinforcing it. So if you need to fill a partial army quickly, it is better not to consolidate early; conversely, if your income is poor and you already have many loans, it may be better to consolidate some to reduce reinforcement costs.
*   If shift-consolidating units, decide whether to save the emptied regiments, which can take between 5 and 20 months to completely refill, or disband them and recruit new regiments which will only take from one to three months, but will then need time to recover morale and be moved into place near the war-zone, and will have zero drill and will cost more ducats.
*   Unless the manpower pool is at maximum, avoid attrition whenever possible. For short sea voyages, set sail at the beginning of the month as units at sea suffer attrition and it is senseless to lose a month's worth of manpower while sailing between ports that are less than a month apart.
*   Also on attrition, sieges are great consumers of manpower. Try to keep only slightly more than the required numbers to hold the siege. Disease outbreak will eat up 10% of a besieging force, so at least that much more is prudent but be prepared to add to the siege force periodically if numbers drop too close to the minimum required to advance it. If you haver mercenaries - you can always let them siege a fort to save your own manpower.
*   Having manpower to refill units is, arguably, more important than having a greater force cap. That makes [![Latin barracks.png](/images/thumb/c/c0/Latin_barracks.png/28px-Latin_barracks.png)](/Barracks "Barracks") barracks and training fields more important than regimental camps and conscription centers.

Footnotes\[[edit](/index.php?title=Manpower&veaction=edit&section=13 "Edit section: Footnotes") | [edit source](/index.php?title=Manpower&action=edit&section=13 "Edit section: Footnotes")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  [↑](#cite_ref-1 "Jump up") See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers#Base values](/Static_modifiers#Base_values "Static modifiers")).
2.  [↑](#cite_ref-2 "Jump up") See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers#States in the Holy Roman Empire](/Static_modifiers#States_in_the_Holy_Roman_Empire "Static modifiers")).
3.  [↑](#cite_ref-3 "Jump up") See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers#Free Cities in the Holy Roman Empire](/Static_modifiers#Free_Cities_in_the_Holy_Roman_Empire "Static modifiers")).
4.  [↑](#cite_ref-4 "Jump up") See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers#Invasion](/Static_modifiers#Invasion "Static modifiers")).
5.  ↑ [Jump up to: 5.0](#cite_ref-Shogun_5-0) [5.1](#cite_ref-Shogun_5-1) See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers#Shogunate](/Static_modifiers#Shogunate "Static modifiers")).
6.  ↑ [Jump up to: 6.0](#cite_ref-defines_6-0) [6.1](#cite_ref-defines_6-1) [6.2](#cite_ref-defines_6-2) See in /Europa Universalis IV/common/defines.lua.
7.  [↑](#cite_ref-7 "Jump up") See the files in /Europa Universalis IV/history/provinces.
8.  ↑ [Jump up to: 8.00](#cite_ref-sm_8-0) [8.01](#cite_ref-sm_8-1) [8.02](#cite_ref-sm_8-2) [8.03](#cite_ref-sm_8-3) [8.04](#cite_ref-sm_8-4) [8.05](#cite_ref-sm_8-5) [8.06](#cite_ref-sm_8-6) [8.07](#cite_ref-sm_8-7) [8.08](#cite_ref-sm_8-8) [8.09](#cite_ref-sm_8-9) [8.10](#cite_ref-sm_8-10) [8.11](#cite_ref-sm_8-11) [8.12](#cite_ref-sm_8-12) [8.13](#cite_ref-sm_8-13) [8.14](#cite_ref-sm_8-14) [8.15](#cite_ref-sm_8-15) [8.16](#cite_ref-sm_8-16) [8.17](#cite_ref-sm_8-17) [8.18](#cite_ref-sm_8-18) [8.19](#cite_ref-sm_8-19) See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers](/Static_modifiers "Static modifiers")).

**

Mechanics

**

*   [War](javascript:void(0); "War")
*   [Economy](javascript:void(0); "Economy")
*   [External relations](javascript:void(0); "External relations")
*   [Internal country management](javascript:void(0); "Internal country management")
*   [Meta](javascript:void(0); "Meta")
*   [Technology](javascript:void(0); "Technology")

Declaring war

[Alliance](/Alliance "Alliance") • [Casus belli](/Casus_belli "Casus belli") • [Claim](/Claim "Claim") • [Peace](/Peace "Peace") • [War exhaustion](/War_exhaustion "War exhaustion") • [Warfare](/Warfare "Warfare")

Defense

[Fort](/Fort "Fort") • [Zone of control](/Zone_of_control "Zone of control")

Land warfare

[Army](/Army "Army") • [Condottieri](/Condottieri "Condottieri") • [Discipline](/Discipline "Discipline") • [Drilling](/Drilling "Drilling") • [Land units](/Land_units "Land units") • [Land warfare](/Land_warfare "Land warfare") • Manpower • [Militarisation](/Militarisation "Militarisation") • [Mercenaries](/Mercenaries "Mercenaries") • [Professionalism](/Professionalism "Professionalism")

Naval warfare

[Flagship](/Flagship "Flagship") • [Naval blockade](/Naval_warfare#Blockading "Naval warfare") • [Naval doctrine](/Naval_doctrine "Naval doctrine") • [Naval units](/Naval_units "Naval units") • [Naval warfare](/Naval_warfare "Naval warfare") • [Navy](/Navy "Navy") • [Sailors](/Sailors "Sailors")

Other

[Force limit](/Force_limit "Force limit") • [Military leader](/Military_leader "Military leader") • [Military tradition](/Military_tradition "Military tradition")

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

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Manpower&oldid=152579](https://eu4.paradoxwikis.com/index.php?title=Manpower&oldid=152579)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.29](/Category:1.29 "Category:1.29")
*   [Military](/Category:Military "Category:Military")
*   [Province mechanics](/Category:Province_mechanics "Category:Province mechanics")

Hidden category:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")