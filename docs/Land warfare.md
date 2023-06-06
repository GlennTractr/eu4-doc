Land warfare
============

From Europa Universalis 4 Wiki

(Redirected from [Assault](/index.php?title=Assault&redirect=no "Assault"))

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

_This page deals with **combat mechanics**. For information on the recruitment and maintenance of armies see [army](/Army "Army"). For the individual unit types see [land units](/Land_units "Land units")._  

_**EU4 Beginner Tutorial #4 - War**_. A complete beginner tutorial with _MordredViking_ looking at how warfare works in the game.

Land warfare is the deployment and maneuvering of military assets against an enemy, in most cases this results in combat between opposing armies. In EUIV most combat is land-based and, while the [naval](/Naval_warfare "Naval warfare") aspect of war holds importance, losing the land war is usually the main cause of defeat. The art of land warfare is therefore of significant importance, and its complexities are discussed here as fully as possible.

Contents
--------

*   [1 Combat interface](#Combat_interface)
*   [2 Terrain](#Terrain)
    *   [2.1 Crossing penalties](#Crossing_penalties)
    *   [2.2 Battles in a province under siege](#Battles_in_a_province_under_siege)
    *   [2.3 Simultaneous arrival](#Simultaneous_arrival)
*   [3 Deployment](#Deployment)
    *   [3.1 Army composition](#Army_composition)
    *   [3.2 Combat width](#Combat_width)
    *   [3.3 Unit deployment](#Unit_deployment)
        *   [3.3.1 For the smaller army](#For_the_smaller_army)
        *   [3.3.2 For the bigger army](#For_the_bigger_army)
*   [4 Combat sequence](#Combat_sequence)
    *   [4.1 Phases](#Phases)
    *   [4.2 Target selection](#Target_selection)
    *   [4.3 Total pips](#Total_pips)
    *   [4.4 Casualties multiplier](#Casualties_multiplier)
    *   [4.5 Morale casualties (i.e. Morale damage)](#Morale_casualties_.28i.e._Morale_damage.29)
    *   [4.6 Strength casualties](#Strength_casualties)
    *   [4.7 'Zombie' regiments](#.27Zombie.27_regiments)
    *   [4.8 Overkill](#Overkill)
*   [5 Combat statistics](#Combat_statistics)
    *   [5.1 Military tactics](#Military_tactics)
    *   [5.2 Pips](#Pips)
    *   [5.3 Flanking range](#Flanking_range)
    *   [5.4 Morale](#Morale)
        *   [5.4.1 Modifiers](#Modifiers)
        *   [5.4.2 Morale recovery](#Morale_recovery)
    *   [5.5 Cavalry to infantry ratio](#Cavalry_to_infantry_ratio)
    *   [5.6 Broad Summary & Strategic Impact](#Broad_Summary_.26_Strategic_Impact)
*   [6 Forts](#Forts)
    *   [6.1 Fort level and garrison](#Fort_level_and_garrison)
    *   [6.2 Fort maintenance](#Fort_maintenance)
    *   [6.3 Zone of control](#Zone_of_control)
    *   [6.4 Sieges](#Sieges)
        *   [6.4.1 Sortie](#Sortie)
        *   [6.4.2 Siege ability](#Siege_ability)
        *   [6.4.3 Fort defense](#Fort_defense)
        *   [6.4.4 Phases](#Phases_2)
        *   [6.4.5 Dice roll](#Dice_roll)
        *   [6.4.6 Effects](#Effects)
        *   [6.4.7 Artillery barrage](#Artillery_barrage)
        *   [6.4.8 Naval barrage](#Naval_barrage)
        *   [6.4.9 Assault](#Assault)
*   [7 Mechanics of an army](#Mechanics_of_an_army)
    *   [7.1 Exile](#Exile)
    *   [7.2 Looting](#Looting)
    *   [7.3 Attach to army](#Attach_to_army)
    *   [7.4 Attack natives](#Attack_natives)
    *   [7.5 Scorched earth](#Scorched_earth)
    *   [7.6 Rebel suppression](#Rebel_suppression)
    *   [7.7 Forced march](#Forced_march)
*   [8 References](#References)

Combat interface\[[edit](/index.php?title=Land_warfare&veaction=edit&section=1 "Edit section: Combat interface") | [edit source](/index.php?title=Land_warfare&action=edit&section=1 "Edit section: Combat interface")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[![](/images/thumb/d/df/Land_battle_result.jpg/400px-Land_battle_result.jpg)](/File:Land_battle_result.jpg)

[](/File:Land_battle_result.jpg "Enlarge")

The conclusion to a normal land battle.

Combat is not only determined by mere numbers such as modifiers and dice-rolls, but through a complex simulation in which units deployed into two rows of positions for each side, allowing units to fight the enemy units in front of them, the enemies at their flanks if possible (with high enough flanking range), and move between different positions if needed. All the while, the system retreats destroyed or low-morale units and deploys reinforcements and reserves as well.

The combat system, while not being entirely obvious or intuitive, can be seen through the combat interface which allows the player to see which regiment is fighting which, and which is moving where.

Terrain\[[edit](/index.php?title=Land_warfare&veaction=edit&section=2 "Edit section: Terrain") | [edit source](/index.php?title=Land_warfare&action=edit&section=2 "Edit section: Terrain")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

[![](/images/thumb/c/cb/Terrain_map.png/800px-Terrain_map.png)](/File:Terrain_map.png)

[](/File:Terrain_map.png "Enlarge")

Terrain map. Border pixels belong to the province to their southeast.

Terrain for each province is shown in both the _terrain_ and _simple terrain_ mapmodes. _Terrain_ shows a natural-looking map, while _simple terrain_ color-codes each province by its terrain type; both have tooltips showing terrain type, fort level, and the current winter, if any. Some terrain imposes a movement speed penalty to armies traveling in the province in addition to a negative rough terrain modifier to the attacking army, with different types of terrain having different modifiers.

Here is a list of the types of terrain and the modifiers which they grant.

Terrain

[![Supply limit.png](/images/thumb/9/97/Supply_limit.png/24px-Supply_limit.png)](/Supply_limit "Supply limit")  
Supply limit

[![Local defensiveness.png](/images/thumb/1/15/Local_defensiveness.png/24px-Local_defensiveness.png)](/Local_defensiveness "Local defensiveness")  
Local defensiveness

[![Movement speed.png](/images/thumb/8/8a/Movement_speed.png/24px-Movement_speed.png)](/Movement_speed "Movement speed")  
Movement cost

  
Attacker penalty

Expand[![Local development cost](/images/thumb/a/a2/Development_cost.png/24px-Development_cost.png)](/Development_cost "Local development cost")  
Local development cost

[![Glacial terrain](/images/c/c9/Combat_terrain_arctic.png)](/File:Combat_terrain_arctic.png "Glacial terrain") Glacial

**+2**

**+25%**

**−1**

**+50%**

[![Farmlands terrain](/images/5/54/Combat_terrain_farmlands.png)](/File:Combat_terrain_farmlands.png "Farmlands terrain") Farmlands

**+10**

**+10%**

**−5%**

[![Forest terrain](/images/a/ad/Combat_terrain_forest.png)](/File:Combat_terrain_forest.png "Forest terrain") Forest

**+4**

**+25%**

**−1**

**+20%**

[![Hills terrain](/images/2/2b/Combat_terrain_hills.png)](/File:Combat_terrain_hills.png "Hills terrain") Hills

**+5**

**+10%**

**+40%**

**−1**

**+25%**

[![Woods terrain](/images/8/81/Combat_terrain_woods.png)](/File:Combat_terrain_woods.png "Woods terrain") Woods

**+6**

**+10%**

**−1**

**+15%**

[![Mountain terrain](/images/1/1a/Combat_terrain_mountains.png)](/File:Combat_terrain_mountains.png "Mountain terrain") Mountain

**+4**

**+25%**

**+50%**

**−2**

**+35%**

[![Grasslands terrain](/images/f/fb/Combat_terrain_grasslands.png)](/File:Combat_terrain_grasslands.png "Grasslands terrain") Grasslands

**+8**

[![Jungle terrain](/images/d/d3/Combat_terrain_jungle.png)](/File:Combat_terrain_jungle.png "Jungle terrain") Jungle

**+5**

**+50%**

**−1**

**+35%**

[![Marsh terrain](/images/9/9b/Combat_terrain_marsh.png)](/File:Combat_terrain_marsh.png "Marsh terrain") Marsh

**+5**

**+30%**

**−1**

**+25%**

[![Desert terrain](/images/3/33/Combat_terrain_desert.png)](/File:Combat_terrain_desert.png "Desert terrain") Desert

**+4**

**+5%**

**+50%**

[![Coastal Desert terrain](/images/a/a4/Combat_terrain_coastal_desert.png)](/File:Combat_terrain_coastal_desert.png "Coastal Desert terrain") Coastal Desert

**+4**

**+35%**

[![Coastline terrain](/images/b/bb/Combat_terrain_inland_ocean.png)](/File:Combat_terrain_inland_ocean.png "Coastline terrain") Coastline

**+6**

**+15%**

[![Drylands terrain](/images/3/30/Combat_terrain_drylands.png)](/File:Combat_terrain_drylands.png "Drylands terrain") Drylands

**+7**

**+5%**

[![Highlands terrain](/images/4/44/Combat_terrain_highlands.png)](/File:Combat_terrain_highlands.png "Highlands terrain") Highlands

**+6**

**+10%**

**+40%**

**−1**

**+20%**

[![Savannah terrain](/images/4/44/Combat_terrain_savannah.png)](/File:Combat_terrain_savannah.png "Savannah terrain") Savannah

**+6**

**+15%**

[![Steppe terrain](/images/1/1a/Combat_terrain_steppe.png)](/File:Combat_terrain_steppe.png "Steppe terrain") Steppes

**+6**

**+20%**

### Crossing penalties\[[edit](/index.php?title=Land_warfare&veaction=edit&section=3 "Edit section: Crossing penalties") | [edit source](/index.php?title=Land_warfare&action=edit&section=3 "Edit section: Crossing penalties")\]

A crossing penalty that reduces all dice rolls is applied to the attacker under the following circumstances:

*   **Crossing a river**: **−1** to all rolls.
    
    The presence of a river in between a province and its neighbors is indicated in the province window, through a small river icon. Mousing over this icon will show which neighboring provinces require a river to be crossed in order for an army to reach the province.
    
*   **Crossing a strait**: **−2** to all rolls. See [straits](/Province#Straits "Province") for a list.
*   **Amphibious landing**: **−2** to all rolls. This includes an attack from sea or a landing directly with ships at port.

For attackers that originate from multiple provinces, they will all receive the crossing penalty if any one of them would normally receive it alone. All crossing penalties are removed if the attacking leader has a higher maneuver rating than the defending leader. The check on leader maneuver rating is performed daily, so a high maneuver leader can still swing the tide of battle even if he joins an engagement late.

### Battles in a province under siege\[[edit](/index.php?title=Land_warfare&veaction=edit&section=4 "Edit section: Battles in a province under siege") | [edit source](/index.php?title=Land_warfare&action=edit&section=4 "Edit section: Battles in a province under siege")\]

Normally, the "attacker" is defined as whichever side moves into a given province last, while the "defender" is whichever one was already occupying the area. However, if a given army is in a province which contains a hostile fort, the roles are switched: the army which was in the province first is treated as the "attackers", and those which arrive afterwards are the "defenders" as they are attempting to break the siege. Attacker penalties from terrain are applied to the "siege" army, while attacker penalties from river/strait crossings are nullified regardless of any leaders' maneuver pips. This even applies if the army is not actually sieging or if the fort is hostile to both armies.

The player can take this into account when building forts, as well as when choosing which provinces to siege and which besieged provinces to prioritize sending their troops to.

If a sieging army wins a battle on a province where they're sieging, an immediate bonus siege tick is triggered. This does not reset the ticking down for the next siege tick.

### Simultaneous arrival\[[edit](/index.php?title=Land_warfare&veaction=edit&section=5 "Edit section: Simultaneous arrival") | [edit source](/index.php?title=Land_warfare&action=edit&section=5 "Edit section: Simultaneous arrival")\]

If two opposing armies are set to arrive in the same province on the same day, it is possible to tell which army shall be designated the attacker by hovering the cursor over the [![Battle MapIcon.png](/images/thumb/c/cf/Battle_MapIcon.png/28px-Battle_MapIcon.png)](/File:Battle_MapIcon.png) crossed swords: the resulting tooltip names the attacker and the defender, in that order. This order is based on the tag order (see [Countries](/Countries "Countries")).

Deployment\[[edit](/index.php?title=Land_warfare&veaction=edit&section=6 "Edit section: Deployment") | [edit source](/index.php?title=Land_warfare&action=edit&section=6 "Edit section: Deployment")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

### Army composition\[[edit](/index.php?title=Land_warfare&veaction=edit&section=7 "Edit section: Army composition") | [edit source](/index.php?title=Land_warfare&action=edit&section=7 "Edit section: Army composition")\]

_Main article: [Army#Composition](/Army#Composition "Army")_  

To maximize the effectiveness of an army, a proper mixture of troops is important.

### Combat width\[[edit](/index.php?title=Land_warfare&veaction=edit&section=8 "Edit section: Combat width") | [edit source](/index.php?title=Land_warfare&action=edit&section=8 "Edit section: Combat width")\]

Combat width determines how many units can actively participate in a battle at one time. For every 1 combat width, 1 additional regiment can be placed in the front and back rows, if sufficient troops are available. The base combat width is 15.[\[1\]](#cite_note-1) As military technology advances, a country's combat width increases, allowing them to use more soldiers effectively at once. All countries other than Native Americans start with tech level 2 or 3, so their starting combat width will be 20. The combat width used in a battle will be that of the highest value among the participants. Here is a table of combat width by military technology level.

[![Military technology.png](/images/1/1a/Military_technology.png)](/Military_technology "Military technology") Military technology level

0

2

5

6

9

11

14

16

18

20

22

24

26

[![Combat width.png](/images/c/c1/Combat_width.png)](/Combat_width "Combat width") Combat width

15

20

22

24

25

27

29

30

32

34

36

38

40

### Unit deployment\[[edit](/index.php?title=Land_warfare&veaction=edit&section=9 "Edit section: Unit deployment") | [edit source](/index.php?title=Land_warfare&action=edit&section=9 "Edit section: Unit deployment")\]

The game uses an undocumented algorithm to automatically deploy [land units](/Land_units "Land units") on the battlefield for each side of the battle. Through observation and controlled experiments, the community has suggested a theory that the game seems to follow, dependent on the rough size and [composition](/Composition "Composition") of each [army](/Army "Army").

#### For the smaller army\[[edit](/index.php?title=Land_warfare&veaction=edit&section=10 "Edit section: For the smaller army") | [edit source](/index.php?title=Land_warfare&action=edit&section=10 "Edit section: For the smaller army")\]

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

![Battle counter NUL.png](/images/0/0e/Battle_counter_NUL.png)

![Battle counter NUL.png](/images/0/0e/Battle_counter_NUL.png)

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

![Battle counter NUL.png](/images/0/0e/Battle_counter_NUL.png)

![Battle counter NUL.png](/images/0/0e/Battle_counter_NUL.png)

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

*   If there is not enough infantry to fill the entire first row, the game will prioritize to:
    1.  Deploy all infantry in the first row.
    2.  Deploy as much cavalry as possible to the sides of the first row.
    3.  Deploy all artillery in the second row. If there are more units in the second row than the first, then it will redeploy artillery to the first row until both rows are even.
    4.  If there is still space remaining in the second row, deploy all remaining cavalry onto the second row, beginning from the edge of the first row then inwards.

  

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

*   If there is enough infantry to fill the entire first row, the game will prioritize to:
    1.  Deploy all infantry in first row, except for X\[Unknown value\] positions to each side.
    2.  Deploy X units of cavalry on each side of the first row.
    3.  Deploy all artillery on the second row.
    4.  If space is left on the second row, deploy all remaining infantry in the second row next to the artillery, except for Y\[Unknown value\] positions to each side.
    5.  Deploy all remaining cavalry in the second row, beginning from the edge and going inwards.

#### For the bigger army\[[edit](/index.php?title=Land_warfare&veaction=edit&section=11 "Edit section: For the bigger army") | [edit source](/index.php?title=Land_warfare&action=edit&section=11 "Edit section: For the bigger army")\]

For an army bigger than the combat width, the game will prioritize to:

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle line.png](/images/2/2c/Battle_line.png)](/File:Battle_line.png)

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter ART.png](/images/c/cc/Battle_counter_ART.png)](/Artillery "Artillery")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter INF.png](/images/7/71/Battle_counter_INF.png)](/Infantry "Infantry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

[![Battle counter CAV.png](/images/9/95/Battle_counter_CAV.png)](/Cavalry "Cavalry")

1.  Deploy all infantry in the first row that can be positioned to attack enemy units in the first row, except for X\[Unknown value\] positions to each side.
2.  Deploy all cavalry in the first row that can be positioned to attack the enemy units in the first row.
3.  Deploy all artillery in the second row.

The deployment of allied regiments within a multinational army is similarly undocumented. It can be observed that units belonging to the combat leader (e.g. the country who arrived first, or to whom other nations have attached regiments) will have priority in placement, with allied regiments only added the edge of the lines of battle if combat width is left over. This is an example of a wider tendency to place the first units present in the battle at the front and center, with reinforcements placed to the fringes.

Combat sequence\[[edit](/index.php?title=Land_warfare&veaction=edit&section=12 "Edit section: Combat sequence") | [edit source](/index.php?title=Land_warfare&action=edit&section=12 "Edit section: Combat sequence")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

When two hostile armies meet in a province a battle will commence. A battle will last until one side is routed or annihilated.

### Phases\[[edit](/index.php?title=Land_warfare&veaction=edit&section=13 "Edit section: Phases") | [edit source](/index.php?title=Land_warfare&action=edit&section=13 "Edit section: Phases")\]

Combat is divided into a series of 3-day phases. Phases alternate between Fire and Shock, with the Fire phase happening first.

At the beginning of each phase, each side rolls a die. The result is used to determine the morale damage and casualties inflicted to the opponents each day in the three-day-phase.

Generally, during the shock phase, cavalry is the most powerful and during the fire phase, infantry. Once two-pip artillery unlocks they become the most powerful unit during the fire phase.

### Target selection\[[edit](/index.php?title=Land_warfare&veaction=edit&section=14 "Edit section: Target selection") | [edit source](/index.php?title=Land_warfare&action=edit&section=14 "Edit section: Target selection")\]

Units in the front row can attack any enemy unit within their horizontal flanking range. Normally they will only engage enemies that are directly ahead of themselves, but they can sometimes execute flanking attack regardless if it will be more effective at reducing the enemy's combat ability. This typically occurs if the unit is facing an enemy artillery regiment or a particularly outdated unit; in this case the unit may choose to attack the flanks of a stronger enemy unit nearby. Artillery are the only units that can attack from the back row, but they will only deal 50% damage from that position.

### Total pips\[[edit](/index.php?title=Land_warfare&veaction=edit&section=15 "Edit section: Total pips") | [edit source](/index.php?title=Land_warfare&action=edit&section=15 "Edit section: Total pips")\]

Pips determine the base damage:

![{\displaystyle Pips=(Roll+DiceRollBonus)+\max(0,Leader-EnemyLeader)+AttackPips-DefensePips-Terrain}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/946ba4cdc6bcbf1212759cf4aa223fc55a9d7780)

*   Dice roll (![{\displaystyle Roll}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/612d0c503a31431793be227470aa80b65c327e93)): A random number between 0–9, rolled for each side at the beginning of each phase (not each day).
*   Dice Roll Bonus (![{\displaystyle DiceRollBonus}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/0289b6e5baf8dd3081ebfdb8f22397863c377b3d))
*   Leader fire / shock skill (![{\displaystyle Leader}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/f80607c32571b408502b95d8f95903d860876f6d)).
*   Enemy leader fire / shock skill (![{\displaystyle EnemyLeader}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/fc99b7fa84b823ca5c1630acc47c502f5ee87b09)).
    *   Note that the leader skill bracket cannot be negative. For example: with all else being equal, if your general has 6 fire pips and your opponent's general has 3 fire pips, your side will inflict 15 base casualties to the enemy during the fire phase, whereas your opponent will inflict 0 base casualties to your side, _not_ -15.
*   Unit attack pips (![{\displaystyle AttackPips}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/b5cf6dbb399da9002ab62d3fc276c4c5dac62014)): Morale pips for morale casualties and fire / shock for strength casualties.
*   Target unit defense pips (![{\displaystyle DefensePips}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/9d3cd3a74700aea123f17b19836695fd2af9da8c)): Morale pips for morale casualties and fire / shock for strength casualties.
*   Terrain modifiers (![{\displaystyle Terrain}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/3fc6596f0fc7c2d8caa6a0f2f57c9dcffefa8960)): Harsh terrain may give a penalty to the attacks of the attacking army.

### Casualties multiplier\[[edit](/index.php?title=Land_warfare&veaction=edit&section=16 "Edit section: Casualties multiplier") | [edit source](/index.php?title=Land_warfare&action=edit&section=16 "Edit section: Casualties multiplier")\]

Multipliers affecting both morale and strength casualties:

![{\displaystyle Multipliers={\frac {Strength}{1000}}\cdot {\frac {Damage}{Tactics}}\cdot (1+CombatAbility)\cdot (1+Discipline)\cdot (1+{\frac {Round}{100}})}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/1f817cc0ad1d1de00a6c30e09d6a9dd385ace08b)

*   Unit strength (![{\displaystyle Strength}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/7d3b5815eef04d9e9175b949d569363446202c7b)): Amount of men in the unit. This shows the importance of 'shift+consolidate' just before a battle to ensure as many units as possible are at full strength when engaging.
*   Unit fire / shock damage (![{\displaystyle Damage}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/14fec91530a293994d7c73b44614298a790d6aa4)): Determined by unit type and military technology level and certain ideas. See [Technology#Cumulative mil tech effects to army](/Technology#Cumulative_mil_tech_effects_to_army "Technology").
*   _**Target unit**_ Military Tactics (![{\displaystyle Tactics}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/1a580c7a9fa768fd05167876a87b6d0f73ffb224)). Note the importance of relative tactics differences; as the denominator it impacts all factors and hence 0.25 for the enemy leads to a 4 multiplier (1/0.25) while a higher tactics number of say 0.5 leads only to a 2 multiplier (1/0.5)
*   Unit Combat Ability (![{\displaystyle CombatAbility}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/8e3b1061b61781ab06df7a40e5c90afd1a4dbf99)).
*   Unit Discipline (![{\displaystyle Discipline}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/f5761755a0983c94d04cf6c1b8ad805956a757cf)): Discipline also increases Military Tactics, so it indirectly increases target defense.
*   Battle length (![{\displaystyle Round}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/2977229116f141878266bf832b8b584f77bb023f)): The casualties are increased by 1% per day of the battle, starting at +1% on the first round.

### Morale casualties (i.e. Morale damage)\[[edit](/index.php?title=Land_warfare&veaction=edit&section=17 "Edit section: Morale casualties (i.e. Morale damage)") | [edit source](/index.php?title=Land_warfare&action=edit&section=17 "Edit section: Morale casualties (i.e. Morale damage)")\]

![{\displaystyle Casualties=(15+5\cdot Pips)\cdot Multipliers\cdot (1+DamageModifier)\cdot (1+DamageReceived)\cdot {\frac {MaxMorale}{540}}+0.03\cdot (1-RO)}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/a802326564b6ef205bdc4da160dadd00e680aca2)

*   Total morale pips (![{\displaystyle Pips}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/ec26c72024a5940f09630db3b95060ce2a57c9b6)).
*   Shared multipliers (![{\displaystyle Multipliers}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/fb1d4b959bbd7ea4afb6b7096127132afb8a8a49)).
*   Unit max morale (![{\displaystyle MaxMorale}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/f2f0d38f5abffd9373c6977ceba655500356ac78)).
*   Unit morale damage modifier (![{\displaystyle DamageModifier}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/58cdfa3ac36e43890e946aa5409fb6751ed1d9ac)).
*   Target unitmorale damage received (![{\displaystyle DamageReceived}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/40c71f9069a24b1d8f688dc4449484fadc17f3e9)).
*   All units present in a battle take base morale damage equal to 1% of the average max morale of enemy troops per day on top of the calculated morale casualties. Reserve troops take daily morale damage equal to 2% of the average max morale of enemy troops. This is lowered by the "Reduced morale damage taken by reserves" modifier (![{\displaystyle RO}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/5cc6ff8b77ac1ffe3b494fbddbd14b2fedb57fd2)), such as 50% from having 80 professionalism.
*   Units on the backline take full morale casualties.

**Ideas and conditions that increase morale damage dealt:**

[![](/images/thumb/d/d7/Morale_damage.png/24px-Morale_damage.png)](/File:Morale_damage.png)

**Conditions**

**+50%**

for [Winged Hussars](/Army "Army") regiments (available only to [![Flag of Poland](/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland"), [![Flag of Lithuania](/images/thumb/d/d9/Lithuania.png/20px-Lithuania.png)](/Lithuania "Lithuania") [Lithuania](/Lithuania "Lithuania") and the [![Flag of Commonwealth](/images/thumb/d/df/Commonwealth.png/20px-Commonwealth.png)](/Commonwealth "Commonwealth") [Commonwealth](/Commonwealth "Commonwealth"))

**+5%**

*   for [Caroleans](/Army "Army") regiments (available only to [![Flag of Sweden](/images/thumb/9/98/Sweden.png/20px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden"))

### Strength casualties\[[edit](/index.php?title=Land_warfare&veaction=edit&section=18 "Edit section: Strength casualties") | [edit source](/index.php?title=Land_warfare&action=edit&section=18 "Edit section: Strength casualties")\]

![{\displaystyle Casualties=(15+5\cdot Pips)\cdot Multipliers\cdot (1+DamageModifier)\cdot (1+DamageReceived)}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/aa315b3cdc51c0b19a8b573f9420f1674dbccca6)

*   Total fire / shock pips (![{\displaystyle Pips}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/ec26c72024a5940f09630db3b95060ce2a57c9b6)).
*   Shared multipliers (![{\displaystyle Multipliers}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/fb1d4b959bbd7ea4afb6b7096127132afb8a8a49)).
*   Unit fire / shock damage modifier (![{\displaystyle DamageModifier}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/58cdfa3ac36e43890e946aa5409fb6751ed1d9ac)).
*   Target unit fire / shock damage received (![{\displaystyle DamageReceived}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/40c71f9069a24b1d8f688dc4449484fadc17f3e9)).

There are several unique national ideas which modify the amount of damage inflicted and received in both the fire and shock phases.

**Ideas and conditions that increase fire damage dealt:**

[![Land fire damage.png](/images/thumb/6/68/Land_fire_damage.png/24px-Land_fire_damage.png)](/Land_fire_damage "Land fire damage")

Traditions

Ideas

Bonuses

ExpandPolicies

+15%

—

*   Alaskan idea 4: Bear Hunting

—

—

+10%

—

*   Cirebonese idea 4: Mount Ciremai
*   Date idea 4: Dragon Corps
*   Dutch idea 7: Platoon Fire
*   English idea 5: Redcoats
*   Evenk idea 7: New Ways to Hunt
*   Hatakeyama idea 7: Saika-shu
*   Hindustani idea 5: Gunpowder Empire
*   Ilkhanid idea 7: Recruit Turkoman Gunners
*   Isshiki idea 5: Inadome Gunnery
*   Jaunpuri idea 1: Purbias
*   Korean idea 3: Choi Mu-Seon Gunpowder Engines
*   Mewari idea 6: Mandatory Firearm Drills
*   Mysorean idea 5: Rockets!
*   Münster idea 6: Bommen Berend
*   Oda idea 5: Triple Firing
*   Palawa idea 6: Survivors of the Black War
*   Plains Native idea 2: Bow Archery
*   Rajputana idea 4: Purbia Legacy
*   Shimazu idea 5: Tanegashima
*   Smolenskian idea 2: The Armories of Smolensk
*   Sonoran idea 4: Cowboy Country
*   Texan idea 2: Texan Revolution
*   Tirhuti idea 4: Purbias
*   Utsunomiya idea 2: Legacy of Nasu no Yoichi

*   Beninese ambition
*   Bregenzer ambition
*   Dhundhari ambition
*   Nubian ambition
*   Saxe-Lauenburg ambition

—

+5%

—

*   Hanoverian idea 3: Schützenfest
*   Siamese idea 6: Advanced Elephant Warfare

—

—

[![Land fire damage.png](/images/thumb/6/68/Land_fire_damage.png/24px-Land_fire_damage.png)](/File:Land_fire_damage.png)

Conditions

**+20%**

with [![Ab france fire damage.png](/images/thumb/c/cd/Ab_france_fire_damage.png/24px-Ab_france_fire_damage.png)](/File:Ab_france_fire_damage.png) ‘French Musketeers’ splendor ability (only [![Flag of France](/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France") during [![Age of Absolutism.png](/images/thumb/e/ec/Age_of_Absolutism.png/24px-Age_of_Absolutism.png)](/Age_of_Absolutism "Age of Absolutism") Age of Absolutism)

**+10%**

*   for [Streltsy](/Streltsy "Streltsy") regiments (available only to East Slavic countries)
*   with a [general](/General "General") who has the ‘Ruthless’ [leader trait](/Leader_trait "Leader trait")

**+10%**

with [The Sisterhood of Jeanne d'Arc](/The_Sisterhood_of_Jeanne_d%27Arc "The Sisterhood of Jeanne d'Arc") Tier 1 reform (available only to [![Flag of Orleans](/images/thumb/7/7e/Orleans.png/20px-Orleans.png)](/Orleans "Orleans") [Orleans](/Orleans "Orleans"))

**+5%**

*   for [![Zoroastrianism.png](/images/thumb/2/25/Zoroastrianism.png/28px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") Zoroastrian countries with the [![Great project fire temple of ateshgah.png](/images/thumb/6/64/Great_project_fire_temple_of_ateshgah.png/42px-Great_project_fire_temple_of_ateshgah.png)](/File:Great_project_fire_temple_of_ateshgah.png) [Baku Ateshgah](/Great_project#Baku_Ateshgah "Great project") monument on [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) magnificent level (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**0** − **+10%**

*   depending on [army professionalism](/Army_professionalism "Army professionalism")
*   depending on regiment [drill](/Drill "Drill")

**Ideas and conditions that increase shock damage dealt:**

[![Shock damage.png](/images/thumb/1/1d/Shock_damage.png/24px-Shock_damage.png)](/Shock_damage "Shock damage")

Traditions

Ideas

Bonuses

ExpandPolicies

+20%

—

*   Norse idea 5: Berserkir
*   Palawa idea 3: Darwin Glass

—

—

+15%

—

*   Highlander idea 5: Highland Charge

—

—

+10%

*   Kamilaroi traditions
*   Muscovite traditions

*   Australian idea 6: Integration of the Bushrangers
*   Corsican idea 1: The Unblinded Moor
*   Danish idea 4: Royal Mercenaries
*   Great Yuan idea 4: Keshik and Weijun
*   Kiwi idea 4: The Kiwi Haka
*   Larrakia idea 5: Ceremonial Scarring
*   Nagpuri idea 5: Light Cavalry Shock Tactics
*   Nanbu idea 6: Chosonji Temple
*   Timurid idea 3: Unleash the Tiger
*   Trent idea 6: Mountain Warfare
*   Zulu idea 3: The Impi Warriors

*   Aboriginal ambition
*   Cossack ambition

*   Horde-Diplomatic: Fear Tactics
*   Horde-Expansion: War Horses

+5%

—

—

—

*   Influence-Quantity: Guerrilla Warfare

[![Shock damage.png](/images/thumb/1/1d/Shock_damage.png/24px-Shock_damage.png)](/File:Shock_damage.png)

Conditions

**+10%**

*   for [Cossack](/Cossack "Cossack") regiments (available only to countries with the [![Cossacks](/images/thumb/c/c6/Cossacks.png/24px-Cossacks.png)](/Cossacks_estates#Cossacks "Cossacks") Cossacks estate)
*   for following or inviting a scholar from the [![Shiite Islam](/images/thumb/5/5c/Shiite.png/28px-Shiite.png)](/Shiite "Shiite") [Shia](/Shia "Shia") [![Jafari school](/images/thumb/6/6a/Muslim_school_jafari.png/24px-Muslim_school_jafari.png)](/Jafari "Jafari school") [Jafari](/Jafari "Jafari") school

**+5%**

after assimilating Celtic culture group as [![Flag of Mughals](/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals")

**0** − **+10%**

*   depending on [army professionalism](/Army_professionalism "Army professionalism")
*   depending on regiment [drill](/Drill "Drill")

**Ideas and conditions that reduce fire damage taken:**

[![Fire damage received.png](/images/thumb/e/e7/Fire_damage_received.png/24px-Fire_damage_received.png)](/Fire_damage_received "Fire damage received")

Traditions

Ideas

Bonuses

ExpandPolicies

−15%

—

*   Andalusian idea 1: Stand Against the Reconquista
*   Hanoverian idea 7: King’s Legion

—

—

−10%

*   Texan traditions

*   Divine idea 2: By the Grace of God
*   Leinster idea 4: He Who Is Not Strong Must Be Cunning
*   Russian idea 7: Broaden the curriculum of the Cadet Corps

*   Latgalian ambition

—

−5%

—

—

—

*   Horde-Innovative: The Best Defense

[![Fire damage received.png](/images/thumb/e/e7/Fire_damage_received.png/24px-Fire_damage_received.png)](/File:Fire_damage_received.png)

Conditions

**−20%**

with [![Ab pru military.png](/images/thumb/f/f3/Ab_pru_military.png/24px-Ab_pru_military.png)](/File:Ab_pru_military.png) ‘Prussian Discipline’ splendor ability (only [![Flag of Prussia](/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia") or [![Flag of Germany](/images/thumb/9/9b/Germany.png/20px-Germany.png)](/Germany "Germany") [Germany](/Germany "Germany") during [![Age of Revolutions.png](/images/thumb/5/59/Age_of_Revolutions.png/24px-Age_of_Revolutions.png)](/Age_of_Revolutions "Age of Revolutions") Age of Revolutions)

**−10%**

*   for [Janissary](/Janissary "Janissary") regiments (only recruitable by [![Flag of Ottomans](/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") and [![Flag of Rûm](/images/thumb/8/85/R%C3%BBm.png/20px-R%C3%BBm.png)](/R%C3%BBm "Rûm") [Rûm](/R%C3%BBm "Rûm"))
*   for [![Zoroastrianism.png](/images/thumb/2/25/Zoroastrianism.png/28px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") Zoroastrian countries with the [![Great project fire temple of ateshgah.png](/images/thumb/6/64/Great_project_fire_temple_of_ateshgah.png/42px-Great_project_fire_temple_of_ateshgah.png)](/File:Great_project_fire_temple_of_ateshgah.png) [Baku Ateshgah](/Great_project#Baku_Ateshgah "Great project") monument on [![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) significant level (only with [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan"))

**0** − **−25%**

depending on regiment [drill](/Drill "Drill")

**Ideas and conditions that reduce shock damage taken:**

[![Shock damage received.png](/images/thumb/3/36/Shock_damage_received.png/24px-Shock_damage_received.png)](/Shock_damage_received "Shock damage received")

Traditions

Ideas

Bonuses

ExpandPolicies

−20%

*   Tiwi traditions

—

—

—

−15%

—

*   Ando idea 1: March of Akita
*   Rassid idea 5: Mountain Strongholds

—

—

−10%

*   Ayyubid traditions
*   Dithmarscher traditions
*   Manipur traditions
*   Orissan traditions
*   Sistani traditions
*   Yi traditions

*   Assamese idea 3: River Warfare
*   Baluch idea 2: Hani and Sheh Mureed
*   Hausan idea 5: Sarkin Yaki
*   Irish idea 1: Irish Endurance
*   Kanem Bornuan idea 5: Fixed Military Camps
*   Lur idea 1: Kingdom in the Zagros Mountains

*   Butua ambition

—

−5%

—

*   Bohemian idea 3: Wagenburg

—

*   Horde-Innovative: The Best Defense

[![Shock damage received.png](/images/thumb/3/36/Shock_damage_received.png/24px-Shock_damage_received.png)](/File:Shock_damage_received.png)

Conditions

**−30%**

for [Tercio](/Army#Tercio "Army") regiments (recruitable by [![Flag of Castile](/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile"), [![Flag of Aragon](/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon") and [![Flag of Spain](/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") or by non-muslim, non colonial, Iberian culture nations (except Portuguese or Brazilian))

**−10%**

*   for [Janissary](/Janissary "Janissary") regiments (only recruitable by [![Flag of Ottomans](/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") and [![Flag of Rûm](/images/thumb/8/85/R%C3%BBm.png/20px-R%C3%BBm.png)](/R%C3%BBm "Rûm") [Rûm](/R%C3%BBm "Rûm"))
*   with a [general](/General "General") who has the ‘Defensive Planner’ [leader trait](/Leader_trait "Leader trait")
*   for following or inviting a scholar from the [![Shiite Islam](/images/thumb/5/5c/Shiite.png/28px-Shiite.png)](/Shiite "Shiite") [Shia](/Shia "Shia") [![Zaidi school](/images/thumb/1/12/Muslim_school_zaidi.png/24px-Muslim_school_zaidi.png)](/Zaidi "Zaidi school") [Zaidi](/Zaidi "Zaidi") school

**0** − **−25%**

depending on regiment [drill](/Drill "Drill")

### 'Zombie' regiments\[[edit](/index.php?title=Land_warfare&veaction=edit&section=19 "Edit section: 'Zombie' regiments") | [edit source](/index.php?title=Land_warfare&action=edit&section=19 "Edit section: 'Zombie' regiments")\]

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.34.

In principle, units on the frontline retreat and are replaced by reserve units when they reach either 0 morale or 0 regiment strength. However, before patch 1.34 this mechanic did not function when regiment strength reaches 0 before morale reaches 0 during the first 12 days of a battle. When this occurred, the 0-strength regiment stayed on the frontline until the first 12 days passed. This remains true even when the 0 strength regiment reaches 0 morale during the first 12 days.

### Overkill\[[edit](/index.php?title=Land_warfare&veaction=edit&section=20 "Edit section: Overkill") | [edit source](/index.php?title=Land_warfare&action=edit&section=20 "Edit section: Overkill")\]

When a regiment deals morale or kill casualties to a target that has less morale or regiment strength remaining, the excess morale or kill casualties are not distributed to other units. Thus a regiment that has 0.01 morale left after a phase will absorb an entire other day of kill & morale casualties.

Combat statistics\[[edit](/index.php?title=Land_warfare&veaction=edit&section=21 "Edit section: Combat statistics") | [edit source](/index.php?title=Land_warfare&action=edit&section=21 "Edit section: Combat statistics")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

### Military tactics\[[edit](/index.php?title=Land_warfare&veaction=edit&section=22 "Edit section: Military tactics") | [edit source](/index.php?title=Land_warfare&action=edit&section=22 "Edit section: Military tactics")\]

Military tactics reduces the amount of damage a country's troops take in combat. Military tactics is increased by [military technology](/Technology "Technology"). It is also multiplied by discipline.

[![Military technology.png](/images/1/1a/Military_technology.png)](/Military_technology "Military technology") Military technology level

0

4

6

7

9

12

15

19

21

23

24

30

32

[![Military tactics.png](/images/thumb/4/4f/Military_tactics.png/28px-Military_tactics.png)](/Military_tactics "Military tactics") Military tactics

0.5

0.75

1.0

1.25

1.5

1.75

2.0

2.25

2.5

2.75

3.0

3.25

3.5

### Pips\[[edit](/index.php?title=Land_warfare&veaction=edit&section=23 "Edit section: Pips") | [edit source](/index.php?title=Land_warfare&action=edit&section=23 "Edit section: Pips")\]

[![Dots offensive.png](/images/6/60/Dots_offensive.png)](/File:Dots_offensive.png)

[![Dots defensive.png](/images/d/d3/Dots_defensive.png)](/File:Dots_defensive.png)

Each military unit has offensive and defensive stats in three categories: fire, shock, and morale. Offensive stats are represented by yellow pips, and defensive stats by green pips. During each combat phase, each unit will use its offensive pips to increase casualties dealt, its defensive pips to mitigate casualties received, and its morale pips to increase and mitigate, respectively, morale damage.[\[2\]](#cite_note-2)

The respective effect of pips depends on the shock and fire modifiers of military technology and ideas.

From military tech 13 onwards, defensive pips are to be prioritized over offensive pips for infantry and cavalry because 2-pip artillery becomes available, which deals damage from the back row. Thus the defensive pips of the frontline regiments impact the kill casualty equation of two enemy regiments, while the offensive pips only affect a single regiment.

Top priority is to be given to morale defensive pips, because morale pips affect both fire and shock phases. Secondary priority is to be given to the defensive fire or shock pips depending on the military technology, then to offensive morale, then to offensive fire or shock pips depending on the military technology.

Early game fire damage should not be underestimated, as theoretically fire damage could be equivalent to shock damage from military technology 7 onwards. Fire damage becomes the undisputed main source of damage once players reach military technology 13 with its 2-pip artillery and definitely from tech 16 when artillery receive a full **+1** fire bonus.

Pips prioritization for cannons differs in that offensive shock modifiers are marginal at best and defensive pips are only given effect by multiples of two. The latter is caused by the defensive pips of cannons being divided by two, then rounded down and ultimately added to the frontline’s defensive pips (or, stated alternatively, contributing half of their defensive pips to the front line).

Later technologies are limited to one cannon type.

### Flanking range\[[edit](/index.php?title=Land_warfare&veaction=edit&section=24 "Edit section: Flanking range") | [edit source](/index.php?title=Land_warfare&action=edit&section=24 "Edit section: Flanking range")\]

Flanking range determines the horizontal range in which a unit may make a flanking attack. The base flanking range is 1 for infantry, and 2 for cavalry and artillery. There are military technologies which increase the flanking range of units as the game progresses. Below is a table with said military technology levels and how much they increase flanking range.

Flanking range

[![Military technology.png](/images/1/1a/Military_technology.png)](/Military_technology "Military technology")

[![Improved flanking range.png](/images/1/19/Improved_flanking_range.png)](/Improved_flanking_range "Improved flanking range")

[![Infantry.png](/images/thumb/9/9f/Infantry.png/28px-Infantry.png)](/Infantry "Infantry")

[![Cavalry.png](/images/thumb/1/15/Cavalry.png/28px-Cavalry.png)](/Cavalry "Cavalry")

[![Artillery.png](/images/thumb/d/d8/Artillery.png/28px-Artillery.png)](/Artillery "Artillery")

0

0

1

2

2

10

**+25%**

1

2

2

18

**+50%**

1

3

3

23

**+100%**

2

4

4

28

**+125%**

2

4

4

30

**+150%**

2

5

5

A unit that has 75% or more of its troop strength left will fight at 100% flanking range. If they are in between 50 and 75% of their strength, they will fight at 75% flanking range. When between 25 and 50% strength they will fight at 50% of their flanking range.

Unit strength

Flanking range

1000–750

100%

749–500

**−25%**

499–250

**−50%**

249–0

**−75%**

The final range is always rounded down to the nearest integer.

Several ideas give increased cavalry flanking range:

[![Cavalry flanking ability.png](/images/thumb/3/3a/Cavalry_flanking_ability.png/24px-Cavalry_flanking_ability.png)](/Cavalry_flanking_ability "Cavalry flanking ability")

Traditions

Ideas

Bonuses

ExpandPolicies

+50%

—

*   Albanian idea 4: Hit and Run
*   Clanricarde idea 4: Irish Hobbies
*   Deccani Sultanate idea 5: Bargi Giri
*   Lan Na idea 6: Elephant Charge
*   Mossi idea 2: Cavalry Raids
*   Najdi idea 5: Arabian Horsemanship

*   Ilkhanid ambition
*   Kazani ambition

*   Horde-Espionage: Psychological Warfare

+25%

—

*   Arabian idea 2: Arabian Horses
*   Oyo idea 5: The Oyo Cavalry

—

—

*   **+20%** Assimilating Evenki culture group as [![Flag of Mughals](/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals")

### Morale\[[edit](/index.php?title=Land_warfare&veaction=edit&section=25 "Edit section: Morale") | [edit source](/index.php?title=Land_warfare&action=edit&section=25 "Edit section: Morale")\]

Morale is an important factor in fighting battles. Each day of combat a unit will take a morale hit equal to 1% of the average max morale of enemy troops, regardless of damage taken from an enemy regiment. If it is taking casualties from an enemy, additional morale damage will be inflicted. Once an army's overall morale value has been reduced to zero the army will attempt to retreat. Retreat cannot happen until both two fire and two shock phases have been completed. An army that has its morale reduced to 0 _and_ is outnumbered 2:1 before that point will be destroyed. This destruction is known as a stackwipe. Contrary to popular belief, reducing the enemy army to 0 morale before they can retreat is _not_ sufficient to stackwipe. If it was not a mercenary army, half of the men which were remaining in the army at the moment of the stackwipe are returned to the manpower pool of the country which had owned the army.

A unit that has its morale drop below 0.50 is flagged as disorganized, which is indicated by a small flame next to its morale bar on the map and interface. A disorganized army is unable to start moving until its morale has recovered above 0.50. Newly trained regiments at low land unit maintenance will often fall below this threshold.

If an army loses a battle while having low enough morale to be disorganized, they will be forced to retreat to a controlled province (owned, allied in war, or occupied by player or allies). This province can be very far away from where the battle took place. They will prioritize to retreat to a province with high development, a fort, and no adjacent enemies. While retreating, it cannot be engaged in combat or controlled until it reaches the safer province (or in extreme circumstances if it recovers to 100% morale before reaching the destination). The army also moves slightly faster, and will recover morale at a normal rate during the retreat. If there are no available controlled provinces to retreat to within a large range, the army will shattered retreat to one province away. The army can then be immediately re-engaged, often with very low to even no morale, if a monthly tick has not yet completed. This can be devastating as it is very likely to be stack-wiped if re-engaged immediately.

A controlled retreat is manually ordering an army to retreat from battle after the initial fire and shock phases, and while it still has greater than 0.50 average morale. This allows the player to control the destination of the shattered retreat. If the morale of an army is less than 0.50 the player can not control the destination. If multiple armies have converged into a battle, it is possible that some armies will have enough morale for a controlled retreat, while others may not (often the initial stack in the battle).

Winning a battle gives the winning armies 50% of their maximum morale and retreating from a battle will reduce the other allied armies' morale relative to the portion of troops leaving the engagement.

After a battle is fought, an army must spend some time without fighting for its morale to recover. The normal morale recovery on the 1st of every month cannot occur while in combat.

*   A shattered army will get an extra morale bonus once it stops retreating.
*   Morale is not gained while [forced marching](/Forced_march "Forced march").

#### Modifiers\[[edit](/index.php?title=Land_warfare&veaction=edit&section=26 "Edit section: Modifiers") | [edit source](/index.php?title=Land_warfare&action=edit&section=26 "Edit section: Modifiers")\]

The following modifiers contribute to the maximum morale of a nation's army:

*   Army maintenance: Ranging from **0.51** at minimum maintenance to the defined maximum at maximum maintenance.
*   Ideas and policies:

[![Morale of armies.png](/images/thumb/f/fa/Morale_of_armies.png/24px-Morale_of_armies.png)](/Morale_of_armies "Morale of armies")

Traditions

Ideas

Bonuses

ExpandPolicies

+20%

—

*   Prussian idea 3: Army Professionalism

*   Sundanese ambition

—

+15%

*   Andalusian traditions
*   Cascadian traditions
*   Castilian traditions
*   Jerusalem traditions
*   Nagpuri traditions
*   Norse traditions
*   Persian traditions
*   Spanish traditions

*   Defensive idea 2: Military Drill
*   Air idea 2: Cross of Agades
*   Balinese idea 5: Conquerer Dalems
*   Cirebonese idea 3: Ali's Panther
*   Eora idea 6: Pemulwuy
*   French idea 2: Lessons of the Hundred Years War
*   Great Qing idea 7: The Ten Great Campaigns
*   Highlander idea 1: The Wallace
*   Holy Roman idea 2: Kaiserliche Armee
*   Iroquoian Federation idea 5: The Good Word
*   Kiwi idea 6: Rejecting the Australia Constitution
*   Lotharingian idea 2: Glory of Charlemagne
*   Muskogean Federation idea 4: Valiant in War
*   Polish idea 7: Focus on Field Defenses
*   Revolutionary French idea 2: Elan!
*   Siouan Federation idea 6: Until Death and After
*   Vermont idea 1: Home of the American Revolution
*   Veronese idea 4: Civil Blood and Civil Hands
*   Zulu idea 5: Warrior Culture

*   Manchu ambition
*   Swabian ambition
*   Texan ambition

—

+10%

*   Anhalt traditions
*   Aq Qoyunlu traditions
*   Augsburger traditions
*   Austrian traditions
*   Ava traditions
*   Beninese traditions
*   Berber traditions
*   Bruneian traditions
*   Burgundian traditions
*   Butua traditions
*   Chernihiv traditions
*   Client State traditions
*   Corsican traditions
*   Dalmatian traditions
*   Deccani traditions
*   Dhundhari traditions
*   Dithmarscher traditions
*   Gond traditions
*   Hatakeyama traditions
*   Hojo traditions
*   Huron traditions
*   Irish traditions
*   Jurchen traditions
*   Kamilaroi traditions
*   Khorasani traditions
*   Korean traditions
*   Liège traditions
*   Malayan traditions
*   Moldavian traditions
*   Mysorean traditions
*   Nepalese Princedom traditions
*   North Western Native traditions
*   Oda traditions
*   Ogasawara traditions
*   Palawa traditions
*   Pomeranian traditions
*   Provençal traditions
*   Punjabi traditions
*   Rajputana traditions
*   Rothenburg traditions
*   Rûmi traditions
*   Sicilian traditions
*   Somalian traditions
*   Transoxianian traditions
*   Trent traditions
*   Tsutsui traditions
*   Welsh traditions
*   Zimbabwe traditions

*   Indigenous idea 4: Braves
*   Plutocratic idea 2: Abolished Serfdom
*   Adalite idea 6: Yahu Yahu
*   Ajami idea 3: Legacy of the Ilkhans
*   Amago idea 4: Ten Brave Warriors
*   American Southwest idea 3: Raiding Nomads
*   American idea 4: Lessons of Valley Forge
*   Aragonese idea 7: Protect the Little Folk
*   Ardabili idea 1: The Safavid Order
*   Aymaran idea 5: The Tinku Rites
*   Ayyubid idea 3: Righteousness of the Faith
*   Aztec idea 4: Eagles and Jaguars
*   Bolognese idea 1: Etruscan Origins
*   Brandenburg idea 4: Pomeranian Wars
*   Bulgarian idea 6: Military Flexibility
*   Carib idea 3: Resistance towards the Pailanti'po
*   Catalan idea 6: 'Lliures o Morts'
*   Cebu idea 1: Lumaya’s Ambition
*   Chachapoyan idea 1: Warriors of the Clouds
*   Charruan idea 6: Garra Charrua
*   Cherokee idea 5: Ghigau
*   Chiba idea 2: Dream of Masakado
*   Creek idea 7: Red Sticks
*   Daimyo idea 4: The Five Rings
*   Desmondian idea 3: Gaelic Bastion
*   Fijian idea 5: Fijian Warlords
*   Finnish idea 7: The Anjala Conspiracy
*   French Ducal idea 7: La Petite Nation
*   Frisian idea 3: Dutch Courage
*   Fulani Jihad idea 4: Imams and Emirs
*   Galician idea 5: Santiago y Cierra!
*   Garhwali idea 3: Martial Diplomacy
*   Gelre idea 5: The Gelderland Wars
*   Genevan idea 7: Armed Neutrality
*   Goslar idea 6: Resisting the Welfs
*   Great Shun idea 4: Obedient to Heaven
*   Great Yuan idea 2: A Savage Kingdom Holy and Enchanted
*   Herzegovinian idea 3: Stjepan's Rebellion
*   Imerina idea 2: The Twelve Sampys of Imerina
*   Ionian idea 1: Frankokratia
*   Israeli idea 7: The Chosen People
*   Iwi idea 4: Kapa Haka
*   K'iche idea 6: K'iq'ab's Vengeance
*   Kangra idea 3: Martial Heritage
*   Khmer idea 1: Preah Ko Preah Keo
*   Kikuchi idea 4: Fortify the Domain
*   Kildarean idea 3: Silken Thomas
*   Krakowian idea 1: Legendary Legacy
*   Lanfang idea 4: National Militia
*   Livonian idea 2: Border between East and West
*   Luban idea 4: Encourage the Kasala Tradition
*   Lur idea 6: Rise of the Lurs
*   Lüneburger idea 7: Lionhearted
*   Mainzian idea 3: Weck, Worscht & Woi
*   Majapahit idea 5: Gajah Mada's Oath
*   Manipur idea 2: Martial Traditions
*   Mayan idea 7: Caste War
*   Medri Bahri idea 5: Independent Traditions
*   Mexican idea 7: Grito de Dolores
*   Miao idea 3: Unity of the tribes
*   Mindanao idea 6: Guerrilla Warfare
*   Muscovite idea 4: Pomestnoe Voisko
*   Mushasha idea 1: Fervent Millenarianism
*   Nanbu idea 1: Genji in the North
*   Native idea 1: Counting Coups
*   Neapolitan idea 4: Crush the Power of the Barons
*   Nepali idea 5: The Royal Kumari
*   Nivernais idea 4: True Frenchmen
*   Northeastern Woodlands idea 5: Marten Clan
*   Orleanaise idea 2: The Maid of Orleans
*   Pegu idea 4: Ramannadesa
*   Perugian idea 6: The War of the Eight Saints
*   Rassid idea 1: The Living Imam
*   Sadiyan idea 1: Land of Glory
*   Saluzzo idea 3: Marquisate
*   Samtskhe idea 4: Independent Ambitions
*   Sardinian idea 1: From the Judicate
*   Semien idea 1: Legacy of Queen Judith
*   Serbian idea 7: Balkan Hajduks
*   Shiba idea 4: Atsuta Shrine
*   Shimazu idea 1: Satsuma Hayato
*   Shoni idea 2: Defender of Japan
*   Slovak idea 7: Slovak National Awakening
*   Songhai idea 3: Jihad Against the Pagans
*   Swabian City-State idea 3: Bavarian Resistance
*   Takeda idea 1: Leader of Kai Genji
*   Three Leagues idea 4: The League of Ten
*   Timurid idea 2: The Mantle of the Great Khan
*   Tiwi idea 6: Tiwi Isolationism
*   Tokugawa idea 1: Mikawa Bushi
*   Trebizond idea 5: The Lessons of the Fourth Crusade
*   Uesugi idea 4: Dragon of Echigo
*   Yarkandi idea 5: Holy Warriors
*   Yi idea 7: Children of the Black Tiger

*   Ajuuraan ambition
*   Athenian ambition
*   Brabant ambition
*   Circassian ambition
*   Colonial ambition
*   Cornish ambition
*   Dai Viet ambition
*   Frankfurter ambition
*   Kievan ambition
*   Kitabatake ambition
*   Pueblo ambition
*   Ryazan ambition
*   Siamese ambition

*   Divine-Religious: Wielders of the Flaming Sword
*   Indigenous-Exploration: War on Our Terms
*   Mercenary-Religious: Dutiful Mercenaries Act
*   Religious-Quantity: Field Priests and Soldier's Prayer Books

+5%

—

*   Chagatai idea 2: Ceaseless Border Wars
*   Russian idea 7: Broaden the curriculum of the Cadet Corps

—

*   Horde-Influence: Kharash
*   Indigenous-Economic: The Three Sisters

*   Researching military technology:
    *   Military technology (0): **+2.0**
    *   Military technology (3): **+0.5** (cumulative **+2.5**)
    *   Military technology (4): **+0.5** (cumulative **+3.0**)
    *   Military technology (15): **+1.0** (cumulative **+4.0**)
    *   Military technology (26): **+1.0** (cumulative **+5.0**)
    *   Military technology (30): **+1.0** (cumulative **+6.0**)

Various national bonuses:

*   Prestige: **+10%** at 100 prestige, **\-10%** at -100 prestige
*   Power projection: **+10%** at 100 power projection
*   Army reformer advisor: **+10%**
*   Army tradition: **+25%** at 100 tradition
*   Being the [Defender of the Faith](/Religion#Defender_of_the_Faith "Religion"): **+5%**
*   Piety (Muslim only): **+10%** at 100 mysticism
*   [Golden Era](/Ages#Golden_Era "Ages"): **+10%**

Religion:

*   Shia: **+5%**
*   Protestant church aspect ‘Saints Accept Prayers’: **+5%**
*   Reformed "War" focus (requires [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") Wealth of Nations DLC) **+10%**
*   Catholic during a [crusade](/Papacy#Call_a_crusade "Papacy"): **+10%**
*   Catholic with bless ruler curia power **+10%**
*   Vajrayana: **+5%**
*   Shinto: **+10%**
*   Sikh: **+10%**
*   Inti with ‘Yana Lords’ reform: **+10%**
*   Nahuatl: **+10%**
*   Tengri with either Shia, Nahuatl or Sikh as syncretic faiths: **+5%**

Government:

*   Noble Republic: **+10%**
*   Revolutionary Empire: **+10%**
*   Daimyo: **+10%**
*   Merchant Republic with "Aristocrats" Faction in power: **+5%**
*   Republican Dictatorship: **+10%**
*   Revolutionary Republic: **+10%**
*   Ambrosian Republic: **+5%**
*   Peasants Republic: **+5%**
*   Assimilating Japanese culture group as [![Flag of Mughals](/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals"): **+10%**

#### Morale recovery\[[edit](/index.php?title=Land_warfare&veaction=edit&section=27 "Edit section: Morale recovery") | [edit source](/index.php?title=Land_warfare&action=edit&section=27 "Edit section: Morale recovery")\]

Every month, a regiment recovers 15% of its maximum morale. The following contributes to a nation's morale recovery speed.

*   Regiment is in home territory: **+5%**
*   Army tradition: **+10%** at 100 tradition
*   When commanded by a leader with the Inspirational Leader [personality](/Personality "Personality") trait: **+10%**
*   Various events, decisions, and modifiers
*   Armies that win battles will gain a significant boost to morale, to prevent situations where an army is stack wiped due to winning a narrowly fought battle and then immediately being attacked. The amount of morale regained depends on the strength of the enemy army defeated relative to their own strength.
*   Certain ideas and policies as follows

[![Recover army morale speed.png](/images/thumb/1/1d/Recover_army_morale_speed.png/24px-Recover_army_morale_speed.png)](/Recover_army_morale_speed "Recover army morale speed")

Traditions

Ideas

Bonuses

ExpandPolicies

+15%

—

—

—

*   Expansion-Defensive: Local Army Organization
*   Mercenary-Expansion: Hired Expeditions Act
*   Quality-Administrative: The Liquor Act

+10%

—

—

*   Fully Offensive

*   Divine-Administrative: Omne Datum Optimum

+5%

*   Armenian traditions
*   Fulani traditions
*   Hungarian traditions
*   Montferrat traditions
*   Ryazan traditions

*   Pskovian idea 2: Legacy of Daumantas

*   Persian ambition

*   Religious-Quantity: Field Priests and Soldier's Prayer Books

### Cavalry to infantry ratio\[[edit](/index.php?title=Land_warfare&veaction=edit&section=28 "Edit section: Cavalry to infantry ratio") | [edit source](/index.php?title=Land_warfare&action=edit&section=28 "Edit section: Cavalry to infantry ratio")\]

Armies exceeding their nation's ratio of cavalry to infantry receive the _"insufficient support"_ penalty. Your [![Cavalry to infantry ratio.png](/images/thumb/7/71/Cavalry_to_infantry_ratio.png/28px-Cavalry_to_infantry_ratio.png)](/Cavalry_to_infantry_ratio "Cavalry to infantry ratio") cavalry to infantry ratio shows what percentage of your frontline can be made up of Cavalry. Having your frontline be made up of more Cavalry than your Ratio allows, applies a [![Military tactics.png](/images/thumb/4/4f/Military_tactics.png/28px-Military_tactics.png)](/Military_tactics "Military tactics") Military Tactics Debuff to your Cavalry Units in the Frontline, equal to the percantage that you are exceeding your Ratio, divided by 2. In steppes this Malus is doubled. For example, if your Ratio is 50%, but your Frontline is made up of 100% cavalry, these Units will receive a **\-25%** [![Military tactics.png](/images/thumb/4/4f/Military_tactics.png/28px-Military_tactics.png)](/Military_tactics "Military tactics") Military Tactics Debuff, which is raised to **\-50%** in steppes. This ratio threshold is checked daily even during battles, and is based on the actual headcount of individual soldiers instead of regiments. Since infantry tends to take more casualties than cavalry, it is advisable to take at least a bit more infantry than the ratio would suggest.

The base [![Cavalry to infantry ratio.png](/images/thumb/7/71/Cavalry_to_infantry_ratio.png/28px-Cavalry_to_infantry_ratio.png)](/Cavalry_to_infantry_ratio "Cavalry to infantry ratio") cavalry to infantry ratio is **50%**. This is further modified by the following:

[![Cavalry to infantry ratio.png](/images/thumb/7/71/Cavalry_to_infantry_ratio.png/24px-Cavalry_to_infantry_ratio.png)](/Cavalry_to_infantry_ratio "Cavalry to infantry ratio")

Traditions

Ideas

Bonuses

CollapsePolicies

+25%

—

*   Epirote idea 5: Latin Knights
*   Latin idea 5: Latin Knights

—

—

+10%

*   Lan Xang traditions

*   Aristocratic idea 3: Noble Connections
*   Horde government idea 1: Horse-lords of the Steppes
*   Plains Native idea 7: Horse Riders

—

—

*   **+50%** Has a [![Government native.png](/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") Great Mongol State government
*   **+50%** Reward from [![Flag of Teutonic Order](/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order") Crusader path mission [Establish a Great Cavalry](/Teutonic_missions#Establish_a_Great_Cavalry "Teutonic missions"), upgraded from **+25%** or **+10%** from previous mission rewards on the Crusader path.
*   **+25%** Has a [![Government native.png](/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") Steppe Horde government
*   **+25%** Has a [![Government tribal.png](/images/thumb/a/a5/Government_tribal.png/28px-Government_tribal.png)](/Tribal_government "Tribal government") Tribal Federation government
*   **+25%** Is [![Tengri](/images/thumb/9/9f/Tengri.png/28px-Tengri.png)](/Tengri "Tengri") Tengri (with _no_ syncretic faith)
*   **+25%** Has [All Under Tengri](/Theocracy#All_Under_Tengri "Theocracy") government reform
*   **+20%** Reward from [![Flag of Lan Xang](/images/thumb/e/ea/Lan_Xang.png/20px-Lan_Xang.png)](/Lan_Xang "Lan Xang") [Lan Xang](/Lan_Xang "Lan Xang") mission [A Million Eephants](/Lan_Xang_missions#A_Million_Elephants "Lan Xang missions")
*   **+20%** Has [![Ab cavalry armies.png](/images/thumb/1/19/Ab_cavalry_armies.png/24px-Ab_cavalry_armies.png)](/File:Ab_cavalry_armies.png) Cavalry Armies ability (an [![Age of Discovery.png](/images/thumb/e/eb/Age_of_Discovery.png/24px-Age_of_Discovery.png)](/Age_of_Discovery "Age of Discovery") Age of Discovery only ability)
*   **+20%** Has the [Sich Rada](/Republic#Sich_Rada "Republic") government reform (available to [Zaporozhie](/Zaporozhie "Zaporozhie"))
*   **+10%** Is [![Sunni Islam](/images/thumb/2/2f/Sunni.png/28px-Sunni.png)](/Sunni "Sunni") Sunni
*   **+10%** A loyal [![Cossacks](/images/thumb/c/c6/Cossacks.png/24px-Cossacks.png)](/Cossacks_estates#Cossacks "Cossacks") Cossacks estate (max value)

  

### Broad Summary & Strategic Impact\[[edit](/index.php?title=Land_warfare&veaction=edit&section=29 "Edit section: Broad Summary & Strategic Impact") | [edit source](/index.php?title=Land_warfare&action=edit&section=29 "Edit section: Broad Summary & Strategic Impact")\]

Given all the formulae and modifiers described above one could broadly assume the following when determining army composition:

*   Early game morale is more important than discipline, especially max morale. Discipline becomes more important as damage multipliers increase over time.
*   Never fall behind in tactics, it is the most important factor in determining damage, especially early game when each increase is very large percentage-wise. Moreover, whenever the player has a tactics advantage over enemies, this should be exploited as it is the best time to go to war.
    *   For example, tech 4's 0.75 over tech 3's 0.5 is an astonishing 50% higher, while tech 6's jump to 1.0 is 33% higher than tech 4 and 5's 0.75.
*   Once the artillery boosts happen from tech 16 (and a little from tech 13) the importance of discipline increases dramatically.
*   Possibly from tech 13, when artillery finally gains a second pip which can be used to attack from the back row - half of the defensive pips which are added to the front line units, and really from tech 16 when artillery gets a full **+1** fire bonus - try to fill as much of the back line with artillery as economics allow. Until then artillery only assists in helping sieges go faster. Hence, until tech 13, try and keep at least one artillery in a stack, more than that is generally too pricey for the benefit.
*   Pip differences are always a key driver and are the main determinant of damage, but are dependent on high multipliers (that come from morale, combat ability, discipline and tactics)
*   Cavalry's relative damage peaks at tech 17 when they receive **+1** shock and remains high until tech 22 after which the fire damage from artillery completely destroys them for their (cavalry's) lack of defensive fire pips.
    *   Hence, start phasing out cavalry between tech 16 to 22.
*   Nations with cavalry bonuses, e.g. hordes and the Ottomans, should maximise their use early game (until tech 22 when artillery receive **+2** fire damage) as long as economics allow.
*   Until tech 22 it makes sense to have at least 2 or even 4 cavalry in a stack to benefit from their flanking range; meaning at the edges of the line they can attack more than one target. Once full stacks engage, the flanking ability becomes moot.
*   Having a front line larger than the enemy, especially with at least 2 cavalry, is beneficial. They can more quickly whittle down the enemy's much shorter front line. Hence, try and avoid enemies if their front lines far exceed yours. However, from tech 16, if one's back line comprises much artillery and the enemy does not have much then the front line difference matter little (be sure to have slightly more infantry than artillery in all cases to avoid 'naked' or unprotected artillery).
*   Ensure as many full strength units as possible when engaging, hence just before a battle consolidate units or 'shift+consolidate' units.

Forts\[[edit](/index.php?title=Land_warfare&veaction=edit&section=30 "Edit section: Forts") | [edit source](/index.php?title=Land_warfare&action=edit&section=30 "Edit section: Forts")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

Forts are used to protect a nation from invading armies.

### Fort level and garrison\[[edit](/index.php?title=Land_warfare&veaction=edit&section=31 "Edit section: Fort level and garrison") | [edit source](/index.php?title=Land_warfare&action=edit&section=31 "Edit section: Fort level and garrison")\]

The following modifiers affect fort level:

*   Capital province: [![Fort level.png](/images/thumb/a/a0/Fort_level.png/28px-Fort_level.png)](/Fort_level "Fort level") **+1** fort level for the [![Capital.png](/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") capital province
*   [Fort buildings](/Buildings#List_of_normal_buildings "Buildings"): [![Fort level.png](/images/thumb/a/a0/Fort_level.png/28px-Fort_level.png)](/Fort_level "Fort level") **+2** fort level per building level.

Each fort level increases the garrison of the province by 1000 and provides a **−1** modifier to the besieger's siege rolls. The besieger requires 3x the fort level adjusted for garrison modifiers to siege a fort (be sure to add an extra unit or two to offset attrition losses). Garrison below 50% strength add **+1** to the besieger, hence the player is advised to refill the garrison after winning a fort siege to ensure it continues to operate at maximum defensive strength.

Maximum garrison size is also increased by the following ideas and policies:

[![Garrison size.png](/images/thumb/5/59/Garrison_size.png/24px-Garrison_size.png)](/Garrison_size "Garrison size")

Traditions

Ideas

Bonuses

ExpandPolicies

+33%

—

*   Defensive idea 7: Improved Foraging

—

—

+25%

*   Desmondian traditions
*   Highlander traditions
*   Isshiki traditions

*   Great Ming idea 1: Nine Garrisons of The Great Wall
*   Toki idea 4: Strategic Castles
*   Trading City idea 2: Walls of the City

—

*   Infrastructure-Defensive: Bolstered Defence Act

+20%

*   Nuremberger traditions

*   Bayreuther idea 3: Plassenburg
*   Betsimisaraka idea 1: People of the Coast
*   Cilli idea 5: Border Wars
*   Dortmund idea 6: Fortmund
*   Rothenburg idea 7: Klingentorturm

—

—

+15%

—

—

—

*   Innovative-Quantity: The Garrison System

+10%

—

*   Divine idea 5: Onward Christian Soldiers
*   Garhwali idea 2: Himalayan Kingdom
*   Italian (minor) idea 4: Trace Italienne
*   Kangra idea 4: Control of the Hill Forts
*   Slovak idea 4: Land of Castles

—

*   Indigenous-Humanist: By the People, for the People

Unless the province is besieged, the garrison recovers monthly at a base rate of **5%** plus:

[![National garrison growth.png](/images/thumb/9/98/National_garrison_growth.png/24px-National_garrison_growth.png)](/File:National_garrison_growth.png)

Conditions

**+1%**

per base manpower

**+25%**

for producing [![Tea.png](/images/thumb/5/59/Tea.png/24px-Tea.png)](/Tea "Tea") tea

The rate is also increased by the following national ideas and policies:

[![National garrison growth.png](/images/thumb/9/98/National_garrison_growth.png/24px-National_garrison_growth.png)](/National_garrison_growth "National garrison growth")

Traditions

Ideas

Bonuses

ExpandPolicies

+25%

*   Ito traditions
*   Luxembourg traditions
*   Meath traditions
*   Pueblo traditions
*   Rigan traditions

*   Clevian idea 7: Militarize Schwanenburg

—

—

+20%

*   Toki traditions

—

—

—

+15%

—

*   Austrian idea 2: Military Frontier

—

—

+10%

—

*   Divine idea 5: Onward Christian Soldiers

—

—

### Fort maintenance\[[edit](/index.php?title=Land_warfare&veaction=edit&section=32 "Edit section: Fort maintenance") | [edit source](/index.php?title=Land_warfare&action=edit&section=32 "Edit section: Fort maintenance")\]

Each building level of fort costs [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") 1 ducat per month. Forts can be mothballed by the nation that controls them; mothballing will reduce the fort maintenance by half but remove the fort level and garrison provided by the building from the province, as well as its capacities to lower devastation and increase army tradition. A fort cannot be mothballed or de-mothballed while the province is under siege. The garrison will recover at a normal rate after mothballing is cancelled. Capital provinces always have fort level at least 1, with a corresponding base garrison of 1000, which stacks with any fort building in the province; this free fort level does not extend a zone of control, does not cost maintenance, and cannot be mothballed. A fort building in a capital province can be mothballed as normal, but the free fort will remain.

Mothballed or not, fort maintenance can be reduced by following modifiers:

[![Fort maintenance.png](/images/thumb/d/d4/Fort_maintenance.png/24px-Fort_maintenance.png)](/File:Fort_maintenance.png)

Conditions

**−20%**

with ‘[Monastic Order](/Monastic_Order "Monastic Order")’ [government reform](/Government_reform "Government reform").

**−10%**

*   with ‘[Sidhi Recruitment](/Sidhi_Recruitment "Sidhi Recruitment")’ government reform.
*   with [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament and active issue ‘Tax Provinces for Fortifications’.
*   as [![March icon.png](/images/thumb/1/1d/March_icon.png/24px-March_icon.png)](/March "March") march.

**−10%** − **+10%**

with [![Rajputs.png](/images/thumb/5/56/Rajputs.png/24px-Rajputs.png)](/Rajputs "Rajputs") Rajputs estate depending on their influence and loyalty.

**+1%**

for each percentage point of [inflation](/Inflation "Inflation").

[![Fort maintenance.png](/images/thumb/d/d4/Fort_maintenance.png/24px-Fort_maintenance.png)](/Fort_maintenance "Fort maintenance")

Traditions

Ideas

Bonuses

ExpandPolicies

−33%

—

—

—

*   Innovative-Defensive: Superior Fortifications

−25%

—

*   Infrastructure idea 6: Fortification Logistics
*   Bukharan idea 5: The Ark

—

*   Innovative-Quantity: The Garrison System

−20%

*   Great Ming traditions
*   Lur traditions
*   Mantuan traditions
*   Meath traditions
*   Vindhyan traditions

*   Cascadian idea 3: The Forts of Hudson Bay
*   Estonian idea 3: Castles of Estonia
*   Ladakh idea 2: Fortified Mountain Cities
*   Muscovite idea 6: Zasechnaya Cherta
*   Odoyev idea 6: Fortification Efforts
*   Somali idea 2: Qalqads
*   Swiss idea 4: Alpine Defensiveness

*   Sligonian ambition

—

−15%

*   Garjati traditions
*   Gujarati Princedom traditions

*   Banteni idea 4: Rebuttal
*   Bolognese idea 6: La Turrita
*   Livonian Knight idea 3: Castles of the Order
*   Luxembourg idea 4: The Fortress of Luxembourg
*   Northumbrian idea 4: A Land of Castles
*   Telugu idea 4: Great Forts of the East

—

—

−10%

*   Baden traditions
*   Baluch traditions
*   French Ducal traditions
*   Miao traditions
*   Nizhny Novgorod traditions
*   Zimbabwe traditions

*   Defensive idea 5: Defensive Mentality
*   Ajami idea 5: Tribes of Iraq-e Ajam
*   Austrian idea 2: Military Frontier
*   Catalan idea 4: Fortifying Catalonia
*   Iwi idea 5: Pa Defense
*   Kangra idea 4: Control of the Hill Forts
*   Laotian idea 7: Laotian Hill Warfare
*   Mutapan idea 3: Mutapa Architecture
*   Nubian (minor) idea 7: Fortified Strongholds
*   Semien idea 2: Mountain Kingdom
*   Slovak idea 4: Land of Castles
*   Tarascan idea 5: Fortified Frontier

—

—

On borders towards rivals there are additional modifiers:

[![Fort maintenance on border with rival.png](/images/thumb/1/1d/Fort_maintenance_on_border_with_rival.png/24px-Fort_maintenance_on_border_with_rival.png)](/File:Fort_maintenance_on_border_with_rival.png)

Conditions

**−100%**

with ‘Protecting Forts’ ability in the [![Age of Absolutism.png](/images/thumb/e/ec/Age_of_Absolutism.png/24px-Age_of_Absolutism.png)](/Age_of_Absolutism "Age of Absolutism") ‘Age of Absolutism’.

[![Fort maintenance on border with rival](/images/thumb/1/1d/Fort_maintenance_on_border_with_rival.png/24px-Fort_maintenance_on_border_with_rival.png)](/Fort_maintenance "Fort maintenance on border with rival")

Traditions

Ideas

Bonuses

ExpandPolicies

−50%

—

—

—

*   Religious-Plutocratic: The Tolerance Act

−25%

—

*   Andalusian idea 7: Al Awasim
*   Veronese idea 3: Ancient Grudge

—

—

### Zone of control\[[edit](/index.php?title=Land_warfare&veaction=edit&section=33 "Edit section: Zone of control") | [edit source](/index.php?title=Land_warfare&action=edit&section=33 "Edit section: Zone of control")\]

_Main article: [Zone of control](/Zone_of_control "Zone of control")_  

Active fort buildings (not counting the free fort level in the capital) provide a zone of control. A zone of control restricts the movement of enemy armies through the province with the fort, and provinces immediately adjacent to it. When an army enters a zone of control from a province not affected by a hostile zone of control the province it entered from is set as the 'return province'. In general the army can then only move to another province that has no more than one province that is not affected by a hostile zone of control between itself and the return province. The main exception to this rule is that the army can always move to a hostile fort. Please see the main article for full details as there are a number of exceptions and the behaviour is not intuitive.

An occupied province that does not have a fort in it but is next to a fort will automatically revert back to its owner's control after about a month. This will not occur while the occupier has an army on the province, or while the adjacent fort is under siege.

### Sieges\[[edit](/index.php?title=Land_warfare&veaction=edit&section=34 "Edit section: Sieges") | [edit source](/index.php?title=Land_warfare&action=edit&section=34 "Edit section: Sieges")\]

When hostile troops enter a province and stop moving, a siege/occupation will begin. To progress, the attacker requires a minimum of 3000 men per 1000 garrison. If the province has no garrison (whether because it has no fort or the fort's garrison is empty), 1000 men is enough and occupation is guaranteed within a month. Any unit types can be used for sieging, but for sieging a fortified province, only infantry will be used in an [assault](/Land_warfare#Assault "Land warfare"), and artillery [speeds the siege up](/Land_warfare#Dice_roll "Land warfare"). Progress in a siege will never decrease as long as attackers are continuously present; however, if all attackers leave the province, you will lose 1 siege status progress per day the province is unsieged.

Besieging armies will always take at least **1%** base [![Attrition](/images/thumb/8/85/Attrition.png/28px-Attrition.png)](/Army#Supply_and_attrition "Attrition") [attrition](/Army#Supply_and_attrition "Army"), even if the province is unfortified. This rule only applies to enemy-owned provinces, however - when besieging friendly provinces to retake them from the enemy, this rule is ignored.

Army besieging a fort always count as the attacker if a battle takes place and will receive the [attacker penalty](/Land_warfare#Terrain "Land warfare").

Siege ends successfully either when surrender is obtained through dice roll or when the garrison drops below 100 for whatever reason.

#### Sortie\[[edit](/index.php?title=Land_warfare&veaction=edit&section=35 "Edit section: Sortie") | [edit source](/index.php?title=Land_warfare&action=edit&section=35 "Edit section: Sortie")\]

[![Art of War.png](/images/thumb/0/0f/Art_of_War.png/28px-Art_of_War.png)](/Art_of_War "Art of War")

Available only with the [Art of War](/Art_of_War "Art of War") DLC enabled.

The garrison can be ordered to make a sortie to fight the hostile army, at the cost of [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power")**10** military power. (The [![Sortie from siege.png](/images/thumb/3/30/Sortie_from_siege.png/24px-Sortie_from_siege.png)](/File:Sortie_from_siege.png) ‘Sortie from siege’ button is shown on the siege screen.) If the garrison army, which consists only of infantry, loses the fight, the province and fort will become occupied. Since sortie-ing troops fight together with friendly stacks if there are ones, this can be used to win a battle in which both sides are evenly matched. Sortie can be ordered only when siege is ongoing, thus friendly troops awaiting an inbound enemy in a fortified province cannot receive garrison's aid.

Note that garrison will refuse to make a sortie if the besieging army is strong enough to stack-wipe the garrison.

#### Siege ability\[[edit](/index.php?title=Land_warfare&veaction=edit&section=36 "Edit section: Siege ability") | [edit source](/index.php?title=Land_warfare&action=edit&section=36 "Edit section: Siege ability")\]

Siege ability is influenced by the following ideas and policies:

[![Siege ability.png](/images/thumb/f/f4/Siege_ability.png/24px-Siege_ability.png)](/Siege_ability "Siege ability")

Traditions

Ideas

Bonuses

ExpandPolicies

+20%

—

*   Offensive idea 5: Engineer Corps

—

—

+15%

—

—

*   Revolutionary French ambitions

—

+10%

*   Ferraran traditions
*   Jolof traditions
*   Saxe-Lauenburg traditions

*   Espionage idea 3: Efficient Spies
*   Beninese idea 2: Isiatua
*   Dutch idea 6: Army Sappers
*   Great Shun idea 5: Perfection of Siegecraft
*   Highlander idea 3: Storming the Castle
*   Ormond idea 6: Irish Siegecraft
*   Otomo idea 7: Kunikuzushi
*   Smolenskian idea 7: Tsar Mortars
*   Utrecht idea 3: Fortified City

*   Luxembourg ambition

*   Divine-Espionage: My Word Is My Bond
*   Horde-Diplomatic: Fear Tactics
*   Innovative-Offensive: Modern Siege Weapons
*   Quality-Religious: The Military Zeal Act

Various modifiers:

*   [![War exhaustion.png](/images/8/8c/War_exhaustion.png)](/War_exhaustion "War exhaustion") War exhaustion: **−1%** per point
*   [![Army tradition.png](/images/8/8d/Army_tradition.png)](/Army_tradition "Army tradition") Army Tradition: **+5%** at 100
*   [![Spy network construction.png](/images/thumb/d/d2/Spy_network_construction.png/28px-Spy_network_construction.png)](/Spy_network_construction "Spy network construction") Spy network: **+20%** at 100 (_Requires [![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/22px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum") [Mare Nostrum](/Mare_Nostrum "Mare Nostrum")_)
*   [![Tengri](/images/thumb/9/9f/Tengri.png/28px-Tengri.png)](/Tengri "Tengri") Tengri with [![Coptic.png](/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") Coptic syncretic faith: **+10%** (_Requires [![The Cossacks.png](/images/thumb/b/b6/The_Cossacks.png/22px-The_Cossacks.png)](/The_Cossacks "The Cossacks") [The Cossacks](/The_Cossacks "The Cossacks")_)
*   [![Hinduism](/images/thumb/1/1a/Hinduism.png/28px-Hinduism.png)](/Hindu "Hindu") Hindu with [![Hindu Deity Shakti](/images/thumb/e/ef/Shakti.png/28px-Shakti.png)](/Shakti "Shakti") Shakti as divinity: **+5%** (_Requires [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/22px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") [Wealth of Nations](/Wealth_of_Nations "Wealth of Nations")_)
*   [![Army professionalism.png](/images/thumb/6/64/Army_professionalism.png/28px-Army_professionalism.png)](/Army_professionalism "Army professionalism") Army professionalism: **+20%** at 100 (_Requires [![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/22px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization") [Cradle of Civilization](/Cradle_of_Civilization "Cradle of Civilization")_)
*   Improve inland routes trade policy: **+10%**
*   General with _Siege Specialist_ personality: **+15%**
*   [Military Hegemon](/Hegemon "Hegemon") at max hegemon power: **+20%**
*   [Lucky nation](/Luck "Luck") (AI only): **+5%**

#### Fort defense\[[edit](/index.php?title=Land_warfare&veaction=edit&section=37 "Edit section: Fort defense") | [edit source](/index.php?title=Land_warfare&action=edit&section=37 "Edit section: Fort defense")\]

Fort defense is influenced by the following ideas and policies:

[![Fort defense.png](/images/thumb/f/fd/Fort_defense.png/24px-Fort_defense.png)](/Fort_defense "Fort defense")

Traditions

Ideas

Bonuses

ExpandPolicies

+25%

*   Georgian traditions
*   Rothenburg traditions

*   Defensive idea 5: Defensive Mentality
*   Afghan idea 2: Shadows of the Hindu Kush
*   Bregenzer idea 6: In the Shadow of Pfander
*   Bremen idea 6: Bremish Walls
*   Cypriot idea 5: Cypriot Fortifications
*   Divine idea 3: True Defender of the Faith
*   Genevan idea 6: Unconquerable City
*   Hamburger idea 3: Walls of Hamburg
*   Jerusalem idea 6: Crusader Castles
*   Knights Hospitaller idea 1: Defense of the Faith
*   Mainzian idea 6: The Guard of the Rhine
*   Sardinian-Piedmontese idea 2: Defensive Prowess
*   Swiss idea 4: Alpine Defensiveness
*   Theodoro idea 5: Mangup and Kalamita Forts
*   Ulmer idea 4: Dürer's Fortifications
*   Zimbabwe idea 4: Zimbabwe's Walls

—

*   Indigenous-Humanist: By the People, for the People

+20%

*   Albanian traditions
*   Bolognese traditions
*   Circassian traditions
*   Kildarean traditions
*   Leinster traditions
*   Mushasha traditions
*   Odoyev traditions
*   Orleanaise traditions
*   Ormond traditions
*   Slovak traditions
*   Telugu traditions
*   Tsutsui traditions
*   Wallachian traditions
*   Yi traditions

*   Ainu idea 1: Chasi
*   Ajami idea 1: Jibal
*   Al-Haasa idea 4: Fortify the coastline
*   Ayyubid idea 1: Citadels and Fortresses
*   Barbary Corsair idea 5: Fortified Pirate Strongholds
*   Breton idea 3: Breton March
*   Caspian idea 6: A Safe Haven
*   Chickasaw idea 6: Lessons of Ackia
*   Couronian idea 1: Legacy of Sword Brethren
*   Dai Viet idea 3: Autonomous Villages
*   Dhundhari idea 1: Improve the Fort at Amer
*   Dortmund idea 6: Fortmund
*   Ethiopian idea 3: Hostile Borders
*   Franconian idea 3: A Rugged Land of Fortresses
*   Galician idea 2: Galicia la Bella
*   Hojo idea 5: Castles of the Hojo
*   Hormuz idea 2: Protecting the Islands
*   Horn of African idea 7: Defensive Nature
*   Ionian idea 2: Castles of the Angels
*   Ito idea 5: Network of Forty-Eight Fortifications
*   Krakowian idea 4: Casimirian Fortifications
*   Latgalian idea 5: Modernize Livonian Castles
*   Ligori idea 5: Bridge to Siam
*   Lorraine idea 1: The Vosges
*   Luxembourg idea 2: The Ardennes
*   Malvi idea 4: Fortified Strongholds
*   Mantuan idea 4: Gonzaga's Walls
*   Maratha idea 2: Forts of Maharashtra
*   Mazovian idea 2: Mazovian Frontier
*   Meath idea 7: Siege Mentality
*   Mindanao idea 5: Fortify our Ports
*   Nivernais idea 5: Bridges of the Loire
*   Offaly idea 5: Tower Houses
*   Ogasawara idea 1: Shinano Shugo
*   Perugian idea 1: Saint Herculanus
*   Rigan idea 6: Fortify Riga
*   Samtskhe idea 3: Fortresses of Samtskhe
*   Savoyard idea 1: Repel the French
*   Shirvani idea 2: Fortresses of Shirvan
*   Sundanese idea 3: Defensive Moats
*   Swabian City-State idea 2: By the River Iller
*   Thüringian idea 2: Fortifications of Erfurt
*   Trebizond idea 2: Pontic Mountains
*   Tripuran idea 7: Strengthen Local Defenses
*   Tverian idea 2: Defend Against Muscovy
*   Tyrconnell idea 1: Fort of the Foreigners
*   Ulster idea 7: Last Redoubt of Ireland
*   Yamana idea 6: Isolated Heartland

*   Italian ambition
*   Ladakh ambition
*   Mesoamerican ambition
*   Novgorodian ambition
*   Permian ambition
*   Rassid ambition
*   Sumatran ambition

—

+15%

*   Aymaran traditions
*   Carib traditions
*   Kurdish traditions
*   Mayan traditions
*   Montenegrin traditions
*   Muiscan traditions
*   Transylvanian traditions

*   Amago idea 3: Fortified Strongholds
*   American Southwest idea 5: The Grand Canyon
*   Bosnian idea 7: Over the Hills and Through the Woods
*   Chernihiv idea 4: Konotop Fortress
*   Clevian idea 1: Walled Cities
*   Client State idea 3: Fortified Border
*   Danziger idea 6: Continued Independence
*   Ferraran idea 6: Este Castle
*   Finnish idea 1: Expand Viborg
*   French idea 7: Vauban Fortifications
*   Frisian idea 5: Flooding the Polders
*   Fulani Jihad idea 2: Unrighteous Kings
*   Garjati idea 1: Securing Our Defenses
*   Gond idea 1: Securing Our Defenses
*   Guarani idea 6: Repel the Bandeirantes!
*   Imerina idea 4: Fortify the Highlands
*   Iroquoian Federation idea 2: Tree of Peace
*   Kazani idea 6: Settle Down
*   Khivan idea 6: Ichan Qal'a
*   Kievan idea 3: Fending Off The Invaders
*   Kikuchi idea 7: Central Stronghold
*   Malagasy idea 1: Fortify the Coastline
*   Mapuche idea 1: Mapuche Pucaras
*   Mewari idea 3: The Fort of Kumbhalgarh
*   Mossi idea 5: Land of the Ancestors
*   Nepalese Princedom idea 5: Seize the Mountain Passes
*   Nepali idea 2: Land of Peaks
*   Northeastern Woodlands idea 1: Turtle Clan
*   Provençal idea 4: Tarascon Castle
*   Pueblo idea 3: Mesa Settlements
*   Québécois idea 4: Fortifications of Quebec
*   Rajput idea 2: Fortifying Rajputana
*   Sadiyan idea 3: Hills and Jungles
*   Shan idea 1: Fortified Cities
*   Siberian idea 4: Siberian Backwoods
*   Siddi idea 3: Impregnable Island Fortress
*   Sligonian idea 2: Rebuild the Castle of Sligo
*   Songhai idea 2: Independence from Mali
*   Teutonic idea 5: Expand the Marches
*   Vindhyan idea 2: Forts of the Vindhyas
*   Yaroslavlyian idea 6: The Two Towers

*   Desmondian ambition
*   Manipur ambition

*   Espionage-Defensive: The Privy Council Establishment Act
*   Mercenary-Espionage: Loyal Conduct Act

+10%

*   Athenian traditions
*   Dahomey traditions
*   Pagarruyung traditions
*   Pisan traditions
*   Sinhalese traditions

*   Andalusian idea 7: Al Awasim
*   Andean idea 6: Hidden Cities
*   Beninese idea 4: The Walls of Benin
*   Bornean idea 4: Anti-Piracy Measures
*   Chachapoyan idea 3: Summit Fortresses
*   Cham idea 7: Resisting Foreign Rule
*   Cherokee idea 6: Mountainous Isolation
*   Chimu idea 2: Ciudadelas
*   Garhwali idea 2: Himalayan Kingdom
*   Holstein idea 1: Limes Saxoniae
*   Kongolese idea 1: The Kongo River Basin
*   Lan Xang idea 6: Merchants of Vientiane
*   Nizhny Novgorod idea 4: Citadel Of Russia
*   Polotskian idea 4: Land of Strongholds
*   Portuguese idea 7: Royal Academy of Fortification, Artillery and Drawing
*   Tarascan idea 5: Fortified Frontier
*   Tupi idea 7: Wall Builders
*   Utrecht idea 3: Fortified City

*   Moldavian ambition

*   Innovative-Defensive: Superior Fortifications

+5%

—

*   Croatian idea 4: Antemurale Christianitatis
*   Great Ming idea 1: Nine Garrisons of The Great Wall
*   Italian (minor) idea 4: Trace Italienne
*   Toki idea 4: Strategic Castles

—

—

Various Modifiers:

*   [![Hinduism](/images/thumb/1/1a/Hinduism.png/28px-Hinduism.png)](/Hindu "Hindu") Hindu with [![Vishnu.png](/images/thumb/d/d0/Vishnu.png/28px-Vishnu.png)](/Vishnu "Vishnu") Vishnu as divinity: **+20%** (_Requires [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/22px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") Wealth of Nations_)
*   [![Norse.png](/images/thumb/c/ce/Norse.png/28px-Norse.png)](/Norse "Norse") Norse with [![Norse Deity Tor](/images/thumb/1/1f/Tor.png/28px-Tor.png)](/Tor "Tor") Tor as divinity: **+10%** (_Requires [![El Dorado.png](/images/thumb/1/16/El_Dorado.png/22px-El_Dorado.png)](/El_Dorado "El Dorado") [El Dorado](/El_Dorado "El Dorado") or a save converted from [Crusader Kings II](/Crusader_Kings_II "Crusader Kings II")_)
*   [![Mysticism](/images/thumb/3/3c/Mysticism.png/28px-Mysticism.png)](/Piety "Mysticism") Mysticism as a Muslim: **+20%** at 100 Mysticism
*   [![Coptic.png](/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") Coptic: **+10%**
*   Power Projection: **+10%** at 100 Power Projection
*   Defence Edict: **+33%**
*   Local/Permanent Quarters trade company investment: **+15%/+30%**
*   [![Latin march.png](/images/thumb/9/94/Latin_march.png/24px-Latin_march.png)](/Ramparts "Ramparts") Ramparts manufactory: **+15%**
*   [![Native earthwork.png](/images/thumb/8/8e/Native_earthwork.png/24px-Native_earthwork.png)](/File:Native_earthwork.png) Earthwork [native building](/Buildings#List_of_native_buildings "Buildings"): **+25%**
*   Military Engineer advisor: **+20%**
*   Salt production in province: **+15%**
*   Lucky nation (AI only): **+10%**
*   Certain [events](/Generic_events "Generic events") can temporarily increase siege ability or fort defense.

#### Phases\[[edit](/index.php?title=Land_warfare&veaction=edit&section=38 "Edit section: Phases") | [edit source](/index.php?title=Land_warfare&action=edit&section=38 "Edit section: Phases")\]

A siege progresses in phases. Each phase has a base length of 30 days and is modified by:

*   Fort defense: +1% per defender's 1% [![Fort defense.png](/images/thumb/f/fd/Fort_defense.png/28px-Fort_defense.png)](/Fort_defense "Fort defense") fort defense and [![Local defensiveness.png](/images/thumb/1/15/Local_defensiveness.png/28px-Local_defensiveness.png)](/Local_defensiveness "Local defensiveness") province defensiveness (produces salt: **15%**, hills or highlands terrain: **10%**, mountain terrain: **25%**)
*   Siege ability: −1% per attacker's 1% [![Siege ability.png](/images/thumb/f/f4/Siege_ability.png/28px-Siege_ability.png)](/Siege_ability "Siege ability") Siege Ability
*   Tactics difference: 6.25% per 0.25 [![Military tactics.png](/images/thumb/4/4f/Military_tactics.png/28px-Military_tactics.png)](/Military_tactics "Military tactics") military tactics difference to both sides. E.G. If the player's tactics is 0.5 higher than the enemy, the player's siege will be 12.5% faster and the enemy's siege will be 12.5% slower. Only the base tactics value counts, bonuses from discipline have no effect on phase time.

A siege dice roll is also triggered if the sieging army wins a battle on the besieged province.

The mean number of phases to finish a siege for a particular starting bonus is as follows:

Starting bonus

−9

−8

−7

−6

−5

−4

−3

−2

−1

0

1

2

3

4

5

6

7

8

9

10

No fort

Starting success %

−100

−92

−85

−78

−71

−64

−57

−50

−42

−35

−28

−21

−14

−7

0

7

14

21

28

35

100%

Mean phases

43.18

30.51

25.24

21.44

17.42

14.75

12.65

10.87

9.41

8.20

7.24

6.48

5.78

5.13

4.52

3.86

3.27

2.82

2.46

2.17

1

Sieges per year

0.28

0.40

0.48

0.57

0.70

0.82

0.96

1.12

1.29

1.48

1.68

1.88

2.10

2.37

2.69

3.15

3.72

4.32

4.95

5.60

12

"Sieges per year" is computed at the default phase length of 30 days.

#### Dice roll\[[edit](/index.php?title=Land_warfare&veaction=edit&section=39 "Edit section: Dice roll") | [edit source](/index.php?title=Land_warfare&action=edit&section=39 "Edit section: Dice roll")\]

At the end of each siege phase, a die (1 to 14) is rolled. The following modifiers are then applied:

*   **Siege status.** The most important modifier. As the siege goes on, this bonus will increase from its starting value of 0 depending on previous dice rolls. The maximum starts at 12 for a Castle or capital fort and is increased by 1 for each building level above a Castle, up to a maximum of 15 for a Fortress.
*   **Leader siege.** If the attacking army has a leader, the leader's siege skill (+0–6) is added as a bonus.
*   **Artillery.** Adding artillery to a siege will add a **+1** to **+5** _besieging Artillery_ bonus.
    *   A single regiment of artillery will always give at least a **+1** bonus, regardless of fort level.
    *   The necessary number of artillery is equal: "building №" \* desired _besieging Artillery_ bonus.
    *   Each 1000 artillery soldiers count as 1 artillery. e.g. having 10 regiments with 100 artillery each is the same as 1 regiment with 1000.
    *   The [![Age of Revolutions.png](/images/thumb/5/59/Age_of_Revolutions.png/28px-Age_of_Revolutions.png)](/Age_of_Revolutions "Age of Revolutions") Age of Revolutions splendor ability [![Ab napoleonic warfare.png](/images/thumb/e/ea/Ab_napoleonic_warfare.png/24px-Ab_napoleonic_warfare.png)](/File:Ab_napoleonic_warfare.png) ‘Napoleonic Warfare’ gives a further [![Artillery bonus vs fort.png](/images/thumb/2/29/Artillery_bonus_vs_fort.png/28px-Artillery_bonus_vs_fort.png)](/Artillery_bonus_vs_fort "Artillery bonus vs fort") **+3** Artillery bonus vs fort. (_Requires [![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/22px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven") Mandate of Heaven_); hence instead of the cap of **+5**, additional artillery will grant a bonus up to **+8**. A [![Artillery bonus vs fort.png](/images/thumb/2/29/Artillery_bonus_vs_fort.png/28px-Artillery_bonus_vs_fort.png)](/Artillery_bonus_vs_fort "Artillery bonus vs fort") **+1** bonus can be activated by the trade policy 'Improve Inland Routes' for any trade node with over 50% share of trade power, in any age.

№

Fort building level

+1

+2

+3

+4

+5

+6

+7

+8

+9

1

Capital without fort

1

2

3

4

5

6

7

8

9

2

Castle (Fort level 2)

1

4

6

8

10

12

14

16

18

3

Bastion (Fort level 4)

1

6

9

12

15

18

21

24

27

4

Star fort (Fort level 6)

1

8

12

16

20

24

28

32

36

5

Fortress (Fort level 8)

1

10

15

20

25

30

35

40

45

*   **Blockade.** If the province is coastal and not completely blockaded, a **−2** penalty is applied, or **−1** if the attacker is the rightful owner of the province. Partial blockades (anything less than 100% for the province in question) have no effect on sieges. Note that the blockading fleet doesn't have to be owned by the same nation as the sieging army, or even a part of the same war to help in a siege. Some ideas and the Portuguese naval doctrine apply a **+1** bonus to blockades.

[![Blockade impact on siege](/images/thumb/9/9c/Blockade_impact_on_siege.png/24px-Blockade_impact_on_siege.png)](/Blockade "Blockade impact on siege")

Traditions

Ideas

Bonuses

CollapsePolicies

+1

—

*   Naval idea 4: Naval Glory
*   Norman idea 6: Naval Invasion

—

*   Naval-Espionage: The Maritime Intelligencer Unit
*   Naval-Maritime: The Naval Supremacy Act

*   **Fort Level.** The defender's fort level is applied as a penalty.
    *   **Obsolete Fort**: If the attacker's technology allows the building of more advanced forts, than the sieged one, they gain a +1 bonus per fort level difference. Сapital without a fort counts as "№"=2.
    *   **Insufficient Garrison**: Having less than half of the maximum garrison gives the attacker a **+1** bonus. If the fort has no garrison whatsoever (i.e., if the fort has been mothballed during this month and is not a capital), then the province is treated as unfortified and the siege will automatically succeed. Below 100 garrison a siege will succeed automatically on the next siege tick, regardless of progress percentage.
*   **Walls Breached.** Each time the walls are breached, the breach status value will increase by 1, to a maximum of **+3**. If this value is at least **+1**, then the fort can also be assaulted (see below).

The highest possible starting bonus is **+22**: a capital fort (**−1**), obsolete by 3 fort levels (**+3**), with an insufficient garrison (**+1**), with a 6-siege general (**+6**), blockading with a flagship modified with Mortars (**+1**), Norman ideas: Naval invasion (**+1**), Naval doctrine : Portugues Marines (**+1**), Naval-espionage policy (**+1**) and at least 9 regiments of artillery (**+9**). The worst possible starting bonus is **−11**, for a level 8 fort in a capital (**−9**) with no blockade (**−2**).

#### Effects\[[edit](/index.php?title=Land_warfare&veaction=edit&section=40 "Edit section: Effects") | [edit source](/index.php?title=Land_warfare&action=edit&section=40 "Edit section: Effects")\]

The die roll may result in an increase of the siege status, which improves the results of future siege stages. Maximum siege status values goes up with the attackers's maximum fort building level. (12/13/14/15 for fort building level 1/2/3/4). Maximum breach status is always 3.

*   If the **unmodified** roll is 1, a Disease Outbreak happens—the attacking army loses 5% of its troops, and the siege does not progress (a surrender takes priority over a Disease Outbreak).
*   If a breach occurs, ignore all results on the table below except for "Surrender". If the fort does not surrender, add 1 to the breach status and 2 to the siege status. A breach occurs if:
    
    ![{\displaystyle {\text{unmodified roll}}+{\frac {{\text{Artillery bonus}}+{\text{Obsolete Fort bonus}}}{3}}+{\frac {\text{Attacker's maximum fort building level}}{10}}\geqslant 14}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/625935601712eb8e9eccc4fcda38d5008e916a90)
    
    Or an artillery barrage or a naval barrage is used (see below)
    
*   Then look up the **modified** die roll on the table below.

Roll

Result

Effect

Garrison losses

4 or less

Status Quo

–

–

5 – 11

Supplies Shortage

+1 siege status

−1% garrison

12 – 13

Food Shortage

+2 siege status

−3% garrison

14 – 15

Water Shortage

+3 siege status

−5% garrison

16 – 19

Defenders Desert

+2 siege status

−10% garrison

20 or more

Surrender

Siege successful

–

The attacker needs at least a net +6 bonus to have a chance of ending the siege.

To be noted that the success rate shown on the screen only reflects the probability of getting the modified die roll ≥ 20, and when the garrison is very low the modified die roll 5-19 might immediately end siege due to loss of garrison.

#### Artillery barrage\[[edit](/index.php?title=Land_warfare&veaction=edit&section=41 "Edit section: Artillery barrage") | [edit source](/index.php?title=Land_warfare&action=edit&section=41 "Edit section: Artillery barrage")\]

[![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven")

Available only with the [Mandate of Heaven](/Mandate_of_Heaven "Mandate of Heaven") DLC enabled.

The option to conduct an artillery barrage becomes available when a siege has at least one full artillery regiment per fort level. This costs [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") **50** military power and creates 3 breaches in the walls. In total, these add +3 permanent siege status. Rolling a natural breach is still possible and will affect the siege status but will not add another breach.

#### Naval barrage\[[edit](/index.php?title=Land_warfare&veaction=edit&section=42 "Edit section: Naval barrage") | [edit source](/index.php?title=Land_warfare&action=edit&section=42 "Edit section: Naval barrage")\]

[![Golden Century.png](/images/thumb/b/bb/Golden_Century.png/28px-Golden_Century.png)](/Golden_Century "Golden Century")

Available only with the [Golden Century](/Golden_Century "Golden Century") DLC enabled.

Same as artillery barrage, but only available if the number of cannons on ships adjacent to the fort divided by 100 equals the fort level. The base cost is [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") **50** military power which can be further modified by [Portuguese naval doctrine](/Naval_warfare#Portuguese_Marines "Naval warfare") and [flagship modification](/Naval_units#Portuguese_Bombardier "Naval units"). With both perks on, the cost can be reduced down to [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") **10** military power. From 1.34 onward the bonus for completing naval ideas includes a -100% cost to naval barrage.

#### Assault\[[edit](/index.php?title=Land_warfare&veaction=edit&section=43 "Edit section: Assault") | [edit source](/index.php?title=Land_warfare&action=edit&section=43 "Edit section: Assault")\]

The attacker may choose to assault the garrison with their infantry if the walls have been breached at least once. This can result in a speedy conclusion of the siege at the cost of [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power")**5** military power, and usually costs lots of lives. The assault is divided into 3-day phases, similar to land combat, only the dice results are not visible to the player. The attacker loses roughly 5 times as many troops as defender do and assaults on fully-manned forts are highly discouraged. Only infantry can assault. If all infantry units of the attacker are killed before the defenders are defeated, the remaining cavalry and artillery will continue the siege normally. Only ![{\displaystyle ({\text{fort level}}\times 5000)}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/c55daf7dbf7156dd1b83f5c931e48f7b13eda1b4) men can be part of an assault per day. The assault losses depend on the [![Fort defense.png](/images/thumb/f/fd/Fort_defense.png/24px-Fort_defense.png)](/Fort_defense "Fort defense") fort defense of the defender and the [![Siege ability.png](/images/thumb/f/f4/Siege_ability.png/24px-Siege_ability.png)](/Siege_ability "Siege ability") siege ability of the attacker.

Mechanics of an army\[[edit](/index.php?title=Land_warfare&veaction=edit&section=44 "Edit section: Mechanics of an army") | [edit source](/index.php?title=Land_warfare&action=edit&section=44 "Edit section: Mechanics of an army")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

_Main article: [Army](/Army "Army")_  

### Exile\[[edit](/index.php?title=Land_warfare&veaction=edit&section=45 "Edit section: Exile") | [edit source](/index.php?title=Land_warfare&action=edit&section=45 "Edit section: Exile")\]

An exiled army can be identified by a black flag attached to its unit icon. It can't fight, siege provinces or explore, and it won't lift fog of war even in the province it's in. However, it can traverse any territory (other than wasteland) without needing military access. It still suffers attrition and its regiments can still move between armies, though regiments can't be mixed between exiled and non-exiled armies.

An army will become exiled under the following circumstances:

*   When a war ends, any army still in territory it doesn't have peacetime access to is exiled. This prevents it from being permanently stuck in a place it can't get out of, as well as preventing several exploits.
*   When a war begins, any army in a neutral or hostile province that it only had access to through a military access agreement is exiled. This prevents troops from being placed outside their country's territory in preparation for war. An army in uncolonized land or the territory of a subject or ally won't be exiled, even if the ally isn't called into the war.
*   When a [native tribe](/Native_Council "Native Council") migrates, any armies that happen to be in the province it migrated to at the time and don't otherwise have access are exiled.
*   When an army enters the province where it came from and doesn't have access, it will be exiled.
*   When an army is in a province to which it lost military access in any other way it will also be exiled.

It will stop being exiled when it either:

*   enters a province that the army's country or one of their subjects control or own
    *   This includes home provinces occupied by an enemy
*   boards a transport ship that moves into a sea zone or is currently in one.

If an army is in combat when it gets exiled, the battle will end only if all of its enemies are no longer hostile. For example, if an army is fighting rebels in enemy territory when peace is signed, they will continue fighting despite being exiled.

### Looting\[[edit](/index.php?title=Land_warfare&veaction=edit&section=46 "Edit section: Looting") | [edit source](/index.php?title=Land_warfare&action=edit&section=46 "Edit section: Looting")\]

Every province (other than developing colonies and uncolonized provinces) has a loot bar. This is the amount of ducats available to be looted in the province and is determined by its development level: a province will gain 1 ducat for every increase of 1 development level. The player can loot provinces they occupy or those which they are besieging, but troops must be present to do so. The amount of loot taken depends on the number and type of troops in the province. A full strength infantry/cavalry/artillery regiment loots 0.1/0.3/0.05 ducats per months.[\[3\]](#cite_note-3) When a province's loot bar is empty no more loot can be taken from that province. A province will only begin to recover two years after the last successful looting, at a rate of 10% each month.

Looting is the main cause of [![Devastation.png](/images/thumb/8/8c/Devastation.png/24px-Devastation.png)](/Devastation "Devastation") devastation, which greatly reduces the owner's production income and manpower, as well as decreasing movement speed, supply limits and [institution](/Institution "Institution") spread. Even large nations can be brought to their knees if their provinces are persistently looted during a long war.

Various ideas increase [![Looting speed.png](/images/thumb/1/12/Looting_speed.png/28px-Looting_speed.png)](/Looting_speed "Looting speed") looting speed; this bonus increases the amount of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") ducats looted each month by the stated amount (and thus decreases the time taken to fully loot a province).

[![Looting speed.png](/images/thumb/1/12/Looting_speed.png/24px-Looting_speed.png)](/Looting_speed "Looting speed")

Traditions

Ideas

Bonuses

ExpandPolicies

+25%

*   Ashanti traditions
*   Baluch traditions
*   Cossack traditions
*   Interlacustrine traditions
*   Manipur traditions
*   Zaporozhian traditions

*   Crimean idea 3: Lead Raids into Ruthenia
*   Gelre idea 6: Loot as Payment
*   Piratical idea 2: Plunder!

—

—

+20%

*   West African traditions

—

—

—

+10%

—

*   Anatolian idea 3: Akîncî Cavalry
*   Berber idea 5: Tuareg Cavalry
*   Chickasaw idea 5: Slave Raids
*   Shan idea 5: Raiders

—

—

*   **+50%** Assimilating Great Lakes culture group as [![Flag of Mughals](/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals")

### Attach to army\[[edit](/index.php?title=Land_warfare&veaction=edit&section=47 "Edit section: Attach to army") | [edit source](/index.php?title=Land_warfare&action=edit&section=47 "Edit section: Attach to army")\]

This action attaches the player's army to a friendly army, causing their army to travel and fight alongside the friendly unit without further input from the player. The army can be detached at any time except in battle. An attached army cannot board transports. Attaching units to an AI army will change its behavior, making it bolder and more willing to actively engage enemies.

### Attack natives\[[edit](/index.php?title=Land_warfare&veaction=edit&section=48 "Edit section: Attack natives") | [edit source](/index.php?title=Land_warfare&action=edit&section=48 "Edit section: Attack natives")\]

_See also: [Colonization#Natives](/Colonization#Natives "Colonization")_  

The native population of a colony or uncolonized province can be eliminated using the _attack natives_ military action. A native army equal in size to the local native population (rounded to the nearest thousand) will spawn immediately and must be defeated in battle to clear out the native population. This action costs [![Military power.png](/images/9/98/Military_power.png)](/Military_power "Military power") military power proportional to the native population, [![Native aggressiveness](/images/e/e2/Aggressiveness.png)](/Colonization#Aggressiveness "Native aggressiveness") aggressiveness, and [![Ferocity.png](/images/f/f1/Ferocity.png)](/Ferocity "Ferocity") ferocity, and will permanently reduce the potential value of the province from the native assimilation bonus. The elimination of all natives in a province will prevent any future raids on the local colony or any passing armies.

### Scorched earth\[[edit](/index.php?title=Land_warfare&veaction=edit&section=49 "Edit section: Scorched earth") | [edit source](/index.php?title=Land_warfare&action=edit&section=49 "Edit section: Scorched earth")\]

An army in an owned and controlled province may scorch the earth for [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") **5** military power, as long as it has not already been scorched. This increases [![Devastation.png](/images/thumb/8/8c/Devastation.png/28px-Devastation.png)](/Devastation "Devastation") [devastation](/Devastation "Devastation") in the province by **10** and gives the province modifier _“Scorched Earth”_, lasting for 60 months with the following effects:[\[4\]](#cite_note-4)

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this table. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.33.

[![Hostile movement speed](/images/thumb/9/9f/Hostile_movement_speed.png/28px-Hostile_movement_speed.png)](/Movement_speed "Hostile movement speed")

**−50%**

Local hostile movement speed

[![Local devastation](/images/thumb/4/44/Monthly_devastation.png/28px-Monthly_devastation.png)](/Devastation "Local devastation")

**+0.25**

+0.25 Local Monthly Devastation.

The devastation itself has the following effects (scaled to these figures at 100 devastation), decaying as devastation decays as usual:

[![Local goods produced modifier](/images/thumb/a/ae/Local_goods_produced_modifier.png/28px-Local_goods_produced_modifier.png)](/Goods_produced_modifier "Local goods produced modifier")

**−200%**

Local goods produced modifier

[![Supply limit modifier](/images/thumb/9/97/Supply_limit.png/28px-Supply_limit.png)](/Supply_limit "Supply limit modifier")

**−50%**

Supply limit modifier

[![Local institution spread.png](/images/thumb/c/ce/Local_institution_spread.png/28px-Local_institution_spread.png)](/Institution_spread "Institution spread")

**−200%**

Institution spread

[![Local development cost](/images/thumb/a/a2/Development_cost.png/28px-Development_cost.png)](/Development_cost "Local development cost")

**+20%**

Local development cost

[![Local manpower modifier.png](/images/thumb/8/8b/Local_manpower_modifier.png/28px-Local_manpower_modifier.png)](/Local_manpower_modifier "Local manpower modifier")

**−200%**

Manpower modifier

[![Local sailors modifier.png](/images/thumb/a/a0/Local_sailors_modifier.png/28px-Local_sailors_modifier.png)](/Local_sailors_modifier "Local sailors modifier")

**−200%**

Sailors modifier

[![Hostile movement speed](/images/thumb/9/9f/Hostile_movement_speed.png/28px-Hostile_movement_speed.png)](/Movement_speed "Hostile movement speed")

**−25%**

Local hostile movement speed

[![Local movement speed](/images/thumb/8/8a/Movement_speed.png/28px-Movement_speed.png)](/Movement_speed#Local_movement_speed_modifiers "Local movement speed")

**−25%**

Local friendly movement speed

Scorching the earth can be useful when the player's army is too weak to fend off attackers and their provinces are likely to be occupied. It increases attrition (hurting the enemy's manpower), and makes the provinces less valuable to the attacker while they're occupying them. The player will lose income in the meantime, but if they were going to lose control of them anyway it could be a good idea to make them less valuable for the enemy.

### Rebel suppression\[[edit](/index.php?title=Land_warfare&veaction=edit&section=50 "Edit section: Rebel suppression") | [edit source](/index.php?title=Land_warfare&action=edit&section=50 "Edit section: Rebel suppression")\]

Stationing an army in an allied province provides a “Friendly Troops” negative modifier to unrest in that province, to the value of [![Local unrest.png](/images/thumb/d/dd/Local_unrest.png/28px-Local_unrest.png)](/Local_unrest "Local unrest") **−0.25** per regiment, to a maximum of **−5** at 20 regiments. This value scales linearly with the army maintenance slider.

Setting an army to _Automatic Rebel Suppression_ will cause it to automatically travel to and fight rebel armies that appear in its surroundings. It will not attack rebel armies it thinks it cannot beat. The army will return to its previous position after the rebels are dispatched. Armies that are ordered to move will stop suppressing rebels. An army cannot drill while doing this.

Units set to auto suppression reduce unrest by a greater amount than normal; to be exact, they suppress unrest at 500% effectiveness. But the cap of unrest reduction through rebel suppression still stays 5.

With the [![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma") Dharma expansion, automatic rebel suppression is localized to the area they are in, rather than just the province they are in, and up to two other contiguous areas (chosen by clicking on the map). The army then reduces unrest in all of those provinces via the "Friendly Troops" modifier, as though they were stationed in each individual province. This is more effective than simply stationing troops for a single area, but less effective (but usually still more efficient in manpower) across multiple areas.

### Forced march\[[edit](/index.php?title=Land_warfare&veaction=edit&section=51 "Edit section: Forced march") | [edit source](/index.php?title=Land_warfare&action=edit&section=51 "Edit section: Forced march")\]

[![Forced march.png](/images/thumb/a/a2/Forced_march.png/28px-Forced_march.png)](/File:Forced_march.png) Forced march makes an army move 50% faster, but costs [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") **2** military power[\[5\]](#cite_note-5) for each province the army marches through. Forced march is available at [administrative technology](/Administrative_technology "Administrative technology") 15. Armies that are forced marching do not recover morale. During [Age of Revolutions](/Age_of_Revolutions "Age of Revolutions") it is possible to enable Improved Force March ability, which reduces [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") military power cost to 0 (requires [![Mandate of Heaven.png](/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven") Mandate of Heaven).

References\[[edit](/index.php?title=Land_warfare&veaction=edit&section=52 "Edit section: References") | [edit source](/index.php?title=Land_warfare&action=edit&section=52 "Edit section: References")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  [↑](#cite_ref-1 "Jump up") See in /Europa Universalis IV/common/defines.lua: BASE\_COMBAT\_WIDTH = 15.0
2.  [↑](#cite_ref-2 "Jump up") [http://steamcommunity.com/app/236850/discussions/0/864976115458051703/](http://steamcommunity.com/app/236850/discussions/0/864976115458051703/)
3.  [↑](#cite_ref-3 "Jump up") See in /Europa Universalis IV/common/defines.lua under `INF_LOOT`, `CAV_LOOT` and `ART_LOOT`.
4.  [↑](#cite_ref-4 "Jump up") See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static modifiers#Scorched Earth](/Static_modifiers#Scorched_Earth "Static modifiers")).
5.  [↑](#cite_ref-5 "Jump up") This cost is affected by modifiers to [![All power costs.png](/images/thumb/0/0f/All_power_costs.png/24px-All_power_costs.png)](/All_power_costs "All power costs") all power costs and if the discount is at least **−0.1%**, the game rounds down the cost to [![Military power.png](/images/thumb/9/98/Military_power.png/24px-Military_power.png)](/Military_power "Military power") **1**. The cost is specified as PS\_FORCE\_MARCH = 2 in /Europa Universalis IV/common/defines.lua.

**[Warfare](/Warfare "Warfare")**

Land warfare

[Army](/Army "Army") • [Land units](/Land_units "Land units") • [Discipline](/Discipline "Discipline") • [Manpower](/Manpower "Manpower")

[Naval warfare](/Naval_warfare "Naval warfare")

[Navy](/Navy "Navy") • [Naval units](/Naval_units "Naval units") • [Sailors](/Sailors "Sailors")

Other concepts

[Casus belli](/Casus_belli "Casus belli") • [War exhaustion](/War_exhaustion "War exhaustion") • [Military tradition](/Military_tradition "Military tradition") • [Leaders](/Military_leader "Military leader") • [Alliance](/Alliance "Alliance")

  

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

Declaring war

[Alliance](/Alliance "Alliance") • [Casus belli](/Casus_belli "Casus belli") • [Claim](/Claim "Claim") • [Peace](/Peace "Peace") • [War exhaustion](/War_exhaustion "War exhaustion") • [Warfare](/Warfare "Warfare")

Defense

[Fort](/Fort "Fort") • [Zone of control](/Zone_of_control "Zone of control")

Land warfare

[Army](/Army "Army") • [Condottieri](/Condottieri "Condottieri") • [Discipline](/Discipline "Discipline") • [Drilling](/Drilling "Drilling") • [Land units](/Land_units "Land units") • Land warfare • [Manpower](/Manpower "Manpower") • [Militarisation](/Militarisation "Militarisation") • [Mercenaries](/Mercenaries "Mercenaries") • [Professionalism](/Professionalism "Professionalism")

Naval warfare

[Flagship](/Flagship "Flagship") • [Naval blockade](/Naval_warfare#Blockading "Naval warfare") • [Naval doctrine](/Naval_doctrine "Naval doctrine") • [Naval units](/Naval_units "Naval units") • [Naval warfare](/Naval_warfare "Naval warfare") • [Navy](/Navy "Navy") • [Sailors](/Sailors "Sailors")

Other

[Force limit](/Force_limit "Force limit") • [Military leader](/Military_leader "Military leader") • [Military tradition](/Military_tradition "Military tradition")

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Land\_warfare&oldid=155019#Assault](https://eu4.paradoxwikis.com/index.php?title=Land_warfare&oldid=155019#Assault)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.24](/Category:1.24 "Category:1.24")
*   [Military](/Category:Military "Category:Military")

Hidden categories:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")
*   [Articles with potentially outdated tables](/Category:Articles_with_potentially_outdated_tables "Category:Articles with potentially outdated tables")