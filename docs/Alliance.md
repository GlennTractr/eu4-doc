Alliance
========

From Europa Universalis 4 Wiki

(Redirected from [Coalition](/index.php?title=Coalition&redirect=no "Coalition"))

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

[![](/images/thumb/c/c6/Form_alliance.jpg/330px-Form_alliance.jpg)](/File:Form_alliance.jpg)

[](/File:Form_alliance.jpg "Enlarge")

Offering an alliance and its tooltips

An **alliance** is a bilateral military agreement between two nations. When a nation creates an alliance with another nation, the nation receives a diplomatic relations bonus with the ally, but it also comes with obligations: a nation's allies are _called to arms_ (CTA) when an alliance member has war declared on them (a defensive call to arms), or when they choose to call their allies into their own war of aggression (an offensive call to arms).

Generally an alliance is a good-faith pledge to come to the aid of the ally during a time of war. There are exceptions when an ally might refuse a call to join an offensive war (such as being in debt or having a high relationship value with the nation the player is planning to attack), or may not be able to respond to a defensive call-to-arms (for instance, if it is already involved in a war on the side of the aggressor nation).

Contents
--------

*   [1 Forming an alliance](#Forming_an_alliance)
    *   [1.1 Alliance with AI](#Alliance_with_AI)
*   [2 Call to arms](#Call_to_arms)
    *   [2.1 Defensive](#Defensive)
    *   [2.2 Offensive](#Offensive)
    *   [2.3 Consequences](#Consequences)
    *   [2.4 Conflicting call to arms](#Conflicting_call_to_arms)
    *   [2.5 Avoiding call to arms](#Avoiding_call_to_arms)
    *   [2.6 Calling the AI into wars](#Calling_the_AI_into_wars)
*   [3 Ending an alliance](#Ending_an_alliance)
*   [4 Other relations effects of alliances](#Other_relations_effects_of_alliances)
    *   [4.1 Subjects](#Subjects)
*   [5 Invite to Federation](#Invite_to_Federation)
*   [6 Support independence](#Support_independence)
*   [7 Coalition](#Coalition)
    *   [7.1 Joining coalitions](#Joining_coalitions)
    *   [7.2 Leaving coalitions](#Leaving_coalitions)
    *   [7.3 Coalitions in war](#Coalitions_in_war)
    *   [7.4 Coalition strategy](#Coalition_strategy)

Forming an alliance\[[edit](/index.php?title=Alliance&veaction=edit&section=1 "Edit section: Forming an alliance") | [edit source](/index.php?title=Alliance&action=edit&section=1 "Edit section: Forming an alliance")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

The player may ask a nation to form an alliance through their diplomacy screen. As long as there are more positive reasons than negative reasons, the nation will accept the military alliance. Being in an alliance gives a major relationship boost ([![Icon diplomacy relations.png](/images/e/e6/Icon_diplomacy_relations.png)](/Relations "Relations")**+50** [relations](/Relations "Relations")) between the two allied nations.

Certain [attitudes](/Attitudes "Attitudes") of the other nation (such as hostile) may preclude them from choosing to be the player's ally. Setting an allied nation as a [rival](/Rival "Rival") will automatically break the alliance with this nation and prevents the player from allying again. Additionally, if either country has accepted a peace deal annulling treaties with the other, they cannot enter an alliance together for 10 years after the peace deal.

Maintaining an alliance uses a [![Diplomatic relations.png](/images/thumb/5/58/Diplomatic_relations.png/28px-Diplomatic_relations.png)](/Diplomatic_relations "Diplomatic relations") diplomatic relations slot for each nation. If a nation has more diplomatic relations than its diplomatic cap (for most nations this is initially 4), maintaining agreements costs 1 [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") diplomatic power a month for each excess nation.

### Alliance with AI\[[edit](/index.php?title=Alliance&veaction=edit&section=2 "Edit section: Alliance with AI") | [edit source](/index.php?title=Alliance&action=edit&section=2 "Edit section: Alliance with AI")\]

AI nations will only accept alliance offers if they have more **positive** than **negative** reasons for doing so:

Factor

Effect

Proposer army strength

**+20** max  
**−20** min

Proposer navy strength  
_(if target nation has any ports)_

**+10** max  
**−10** min

Attitude towards proposer

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **+50**

[![Protective attitude](/images/a/aa/Attitude_protective.png)](/Attitude "Protective attitude") Protective: **+50**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **+20**

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral: **−20**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−100**

[![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") Rivalry: **−1000**

Proposer is a subject nation

**−1000**

Nation is a subject nation

**−1000**

Historical rival

**−1000**

Common rival

**+10**

Royal Marriage

**+10**

Nation's opinion about proposer

**+0.25** per positive relation

Trust

at 50 0, **+0.5** or **−2** per point above or below.

Allied to proposer's rival

**−50**

Proposer allied to rival

**−50**

Proposer diplomatic reputation

**+5** per positive point  
**−5** per negative point

Proposer is at war

**−1000** per offensive war, **50** per defensive war

Not the same religious group

**−20**

Distance between borders  
_(only if attitude is neutral)_

**−0.2** per distance between borders greater than 30†

Target nations' ruler is [Kind-Hearted](/Kind-Hearted "Kind-Hearted")

**+10**

Proposer is threatened by nation's rival

**+20**

Proposer already has a powerful ally

**−50**

Same religious school  
_(for Islam nations)_

**+15**

Religious school relations  
_(for Islam nations)_

**−15**

†: Distance between borders can only be seen in [debug mode](/Debug_mode "Debug mode"). It is possible to estimate distances using the fact that diplomats travel at a speed of 20 distance per day between capitals.

Call to arms\[[edit](/index.php?title=Alliance&veaction=edit&section=3 "Edit section: Call to arms") | [edit source](/index.php?title=Alliance&action=edit&section=3 "Edit section: Call to arms")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

The current [war leaders](/War_leader "War leader") in a war may send a call to arms to their allies at any point in time, asking them to **join _all_ their current wars in which they are the war leader**. Any co-belligerent can also call their allies to war. If no decision is made in regards to a call to arms, it will automatically be declined in two months. The attacker may only call in allies during the first 30 months of the war.

### Defensive\[[edit](/index.php?title=Alliance&veaction=edit&section=4 "Edit section: Defensive") | [edit source](/index.php?title=Alliance&action=edit&section=4 "Edit section: Defensive")\]

If war is declared on a nation, it will automatically call on all its allies to come to its defense. Allies who answer a defensive call to arms **will not suffer any penalties** for breaking a [truce](/Truce "Truce"), attacking nations they are in a [![Royalmarriage.png](/images/thumb/2/22/Royalmarriage.png/28px-Royalmarriage.png)](/Royal_marriage "Royal marriage") royal marriage with, or have good relations with. Nations who refuse to join will lose [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") **25** prestige, the alliance, and [trust](/Trust "Trust") with all their allies, even those not participating in any wars.

### Offensive\[[edit](/index.php?title=Alliance&veaction=edit&section=5 "Edit section: Offensive") | [edit source](/index.php?title=Alliance&action=edit&section=5 "Edit section: Offensive")\]

When a nation declares war, it has the option of individually calling its allies into the fight. Allies who answer an offensive call to arms will suffer all penalties for breaking a truce, attacking nations they are in a royal marriage with, or having good relations with. The aggressor has the option of declaring each of the enemy's allies as co-belligerent or not; if not, taking that country's provinces costs double warscore and diplomatic power as well as additional aggressive expansion penalty, but they cannot call their own allies.

Players that are fielding any call to arms from an AI nation must be very careful about these penalties. As the player will enter all wars that the AI nation is leading, this may incur severe penalties on the player, though the same mechanic could be used against the AI nations as well. Defensive calls to arms are the most common culprit here because they are sent out automatically. For an offensive call to arms, AI nations will only consider the player's ability to join one specific war, and will not evaluate any secondary effects that may result from the player joining all the wars on the side of the AI.

### Consequences\[[edit](/index.php?title=Alliance&veaction=edit&section=6 "Edit section: Consequences") | [edit source](/index.php?title=Alliance&action=edit&section=6 "Edit section: Consequences")\]

Answering the call to arms brings a nation into the war on the side of its ally as a junior partner in the conflict. Because the ally is not a [war leader](/War_leader "War leader"), it can only negotiate peace with the opposing war leader and only on behalf of itself and its vassals. This is called a separate peace and choosing to make a separate peace will give [![Icon diplomacy relations.png](/images/e/e6/Icon_diplomacy_relations.png)](/Relations "Relations")**−30** [relations](/Relations "Relations") penalty with co-belligerents, as well as **−10** [trust](/Trust "Trust") with all your allies. [Warscore](/Warscore "Warscore") for separate peace is calculated solely from occupations and blockades and will not consider battles or ticking warscore from wargoals.

Declining a call to arms will result in [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige")**−25** [prestige](/Prestige "Prestige") and the cancellation of the alliance, as well as a [![Icon diplomacy relations.png](/images/e/e6/Icon_diplomacy_relations.png)](/Relations "Relations")**−50** [relations](/Relations "Relations") penalty for refusing to join their war, plus [![Icon diplomacy relations.png](/images/e/e6/Icon_diplomacy_relations.png)](/Relations "Relations")**−50** [relations](/Relations "Relations") for dishonoring the alliance. Refusing a call to arms from a nation that the nation is guaranteeing will result in an additional [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige")**−25** [prestige](/Prestige "Prestige") penalty (for a total effect of [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige")**−50** [prestige](/Prestige "Prestige") if the nation also had an alliance). In addition, declining a call to arms will give you **−1** [diplomatic reputation](/Diplomatic_reputation "Diplomatic reputation") for 10 years.

### Conflicting call to arms\[[edit](/index.php?title=Alliance&veaction=edit&section=7 "Edit section: Conflicting call to arms") | [edit source](/index.php?title=Alliance&action=edit&section=7 "Edit section: Conflicting call to arms")\]

In the war declarations window, it's possible to see what will happen if there are conflicting calls to arms. Usually, the nation will only consider joining the defensive call to arms and not the attackers.

### Avoiding call to arms\[[edit](/index.php?title=Alliance&veaction=edit&section=8 "Edit section: Avoiding call to arms") | [edit source](/index.php?title=Alliance&action=edit&section=8 "Edit section: Avoiding call to arms")\]

A nation cannot be called at all if accepting would put it in a war against any nation it is already in a war with, either as an ally or an enemy.

AI nations will only send the player a call to arms if another AI in the position of the player would have accepted that call. A combination of the following options can be used to prevent the AI from sending an _offensive call to arms_:

*   Have a truce with the AI's war target
*   Have a royal marriage with the AI's war target
*   Make the AI's war target have a high opinion of the player. _This is typically the easiest to achieve of all options._
*   Have low trust of the AI
*   Be in another war
*   Be far from the war target
*   Be in debt
*   Have low manpower
*   Have occupied or besieged provinces
*   Have high war exhaustion

In previous versions, it was possible to "cheat" by declaring other wars so the player could not answer calls to war. That has been stopped and the player must accept calls to arms or take the malus for declining.

### Calling the AI into wars\[[edit](/index.php?title=Alliance&veaction=edit&section=9 "Edit section: Calling the AI into wars") | [edit source](/index.php?title=Alliance&action=edit&section=9 "Edit section: Calling the AI into wars")\]

Ask an ally to join a war. This action does not require a diplomat. An ally called into a war cannot call in his allies, unless it is a defensive war and the ally was named a co-belligerent by the attacker (including the emperor when called in due to being the emperor, but not countries called in as members of a coalition). If an AI will join it or not is shown in the declare war window.

The factors that influence an AI nation's proclivity for accepting a call to arms are

Factor

Effect

Caller diplomatic skill

**+2** per ruler [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") diplomatic skill

Caller diplomatic reputation

Positive: **+5** per point

Negative: **−5** per negative point

Trust _(only on offense)_

Above 50: **+1** per point

Below 50: **−1** per point

Attitude towards caller _(on offense)_

[![Defensive attitude](/images/e/e0/Attitude_defensive.png)](/Attitude "Defensive attitude") Defensive: **−30**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **−120**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−150**

Attitude towards caller _(on defense)_

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **−20**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **−20**

Attitude towards enemy _(on offense)_

[![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") Rivalry: **+40**

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile: **+20**

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral: **0**

[![Unknown attitude](/images/2/2e/Attitude_unknown.png)](/Attitude "Unknown attitude") Unknown: **0**

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened: **−40**

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **−60**

Attitude towards enemy _(on defense)_

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral: **0**

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly: **−20**

Defender is part of the empire and nation is the emperor  
_(calling emperor to defend HRE member)_

**+50**

Defensive war

**+30**

Would be called into multiple wars

**−1000**

Allied with target in another war

**−1000**

Fighting in another war together

**−1000**

Has a truce with enemy

**−1000**

Recently broke a promise to give land

**−1000**

Nation is allied with target _(only on offense)_

**−1000**

Not willing to join another offensive war until _date_

**−1000**

Nation is the Holy Roman Emperor  
_(calling emperor against HRE member)_

**−1000**

Emperor's opinion about HRE member _(on defense)_

Negative: **−1** per point

Accepting would destabilize nation

**−50** per point of [![Stability.png](/images/a/ae/Stability.png)](/Stability "Stability") stability hit

Nation is in debt

Offensive call to arms: **−10** per month of income† needed to pay off all loans

Defensive call to arms: **−2.5** per month of income† needed to pay off all loans (2.5 may not be perfectly accurate)

Defender of the Faith call to arms

Fighting in another war

**−20**

War exhaustion

**−10** per point

Prepared for War _(i.e. previously spent favours)_

**+20**

Manpower low

Army strength low

Distant war

†: _Actual monthly income may differ from amount reported in ledger_

Among the factors that influence the AI's behaviour above, _nation is in debt_ is generally the easiest one for human players to manipulate. If an AI ally is reluctant to join a war due to debt, establishing a maximum subsidy can significantly reduce this negative factor once the ledger registers the increased income. This allows one to quickly drag the AI ally into war, and the subsidy can be cancelled immediately if there is no concern over the ally's [war enthusiasm](/War_enthusiasm "War enthusiasm"). Sending a gift _before_ establishing the subsidy may be helpful as well, though there is no guarantee that the AI will use the gift to pay down its debt. With the [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") Rights of Man expansion, as a [great power](/Great_power "Great power") it is also possible to simply pay off the ally's loans, provided the ally is not also a great power.

Ending an alliance\[[edit](/index.php?title=Alliance&veaction=edit&section=10 "Edit section: Ending an alliance") | [edit source](/index.php?title=Alliance&action=edit&section=10 "Edit section: Ending an alliance")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

Dissolves an alliance with the target country if one exists. After an alliance is dissolved a 5-year truce is established between the former allies (note that this will not replace an existing, longer truce however). Dissolving an alliance during peacetime will lower relations by **−50** with said country. Breaking an alliance with a war ally (i.e., you are at war together) will incur an additional [![Stability.png](/images/a/ae/Stability.png)](/Stability "Stability") **−2** stability hit on top of the relation penalty.

Note that the opinion malus applies even if you weren't the one breaking the alliance, which may cause former allies becoming hostile shortly after they broke an alliance with you.

Apart from the diplomatic option, several events can break an alliance:

*   Attacking a country that your ally is allied with or whose independence he guaranteed. The ally will most of the times join the attacked country, effectively ending your alliance.
*   If an ally declines a call to arms, the alliance will be broken automatically. As a call to arms isn't available to be issued when attacking without being assured of the ally's acceptance, this happens most of the times when allies decline a defensive call to arms, issued immediately after the war declaration.
*   Breaking the alliance can be as part of a peace treaty imposed on either you or your ally.

Other relations effects of alliances\[[edit](/index.php?title=Alliance&veaction=edit&section=11 "Edit section: Other relations effects of alliances") | [edit source](/index.php?title=Alliance&action=edit&section=11 "Edit section: Other relations effects of alliances")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

Having an alliance with a nation will lower the impact of [aggressive expansion](/Aggressive_expansion "Aggressive expansion"). Enemies or rivals may become outraged by a nation's actions, yet its allies will have a less severe reaction. If the nation continues to pile on aggressive expansion, even the closest friend might eventually break their alliance with a nation they consider a hostile warmonger.

Having an alliance can also affect relations with nations other than the ally. Allying with a country that other countries consider a rival will cause a [![Icon diplomacy relations.png](/images/e/e6/Icon_diplomacy_relations.png)](/Relations "Relations")**−50** [relations](/Relations "Relations") relationship penalty with all countries that consider the ally their [rival](/Rival "Rival").

Being allied with a nation slowly builds up [trust](/Diplomatic_feedback "Diplomatic feedback"), which is factored into most diplomatic actions. It is especially important to the AI when weighing whether or not to accept an offensive call to arms.

### Subjects\[[edit](/index.php?title=Alliance&veaction=edit&section=12 "Edit section: Subjects") | [edit source](/index.php?title=Alliance&action=edit&section=12 "Edit section: Subjects")\]

_Main article: [Subject nation](/Subject_nation "Subject nation")_  

[Vassals](/Vassal "Vassal") and [personal unions](/Personal_union "Personal union") experience a special non-negotiable alliance with their suzerain for the entire duration of their vassalage/union. A war on one necessarily involves the other, unless the overlord has [enabled scutage](/Vassal#Subject_interaction "Vassal").

[Colonial nations](/Colonial_nation "Colonial nation") can fight wars without their overlord becoming involved, so long as the war is with another colonial nation or independent Native American nation. The overlord can enforce peace to join any such war, which will also bring in the overlord of an opposing colonial nation. Colonial nations attacked by any other state automatically call their overlord in, just like vassals.

Two subjects of the same overlord may enter into a special alliance with each other. If one nation declares an independence war on its overlord, the other is called in. On success, both become independent.

Vassals, personal unions, and colonial nations can also get support for independence from independent nations. This acts as an alliance in case a subject declares an independence war against its overlord. In cases where multiple subjects are allied with one another, all nations supporting the independence of any of the allied subjects will be dragged into the independence war against the overlord.

[Protectorates](/Protectorate "Protectorate") are not called into their overlord's wars, but their overlord will be called to defend them if they are attacked.

If [Japan](/Japan "Japan") has the Shogunate government type, its vassals with the Daimyo government type can declare war on each other with the Sengoku casus belli without involving Japan in the war. See the [Japan](/Japan "Japan") page for more information.

Invite to Federation\[[edit](/index.php?title=Alliance&veaction=edit&section=13 "Edit section: Invite to Federation") | [edit source](/index.php?title=Alliance&action=edit&section=13 "Edit section: Invite to Federation")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Federations](/Federations "Federations") are multilateral defensive alliances available only to natives with the [native council](/Government#Native_Council "Government") government. If a federation member is attacked, all members are called in. Federations are not mutually exclusive with regular alliances. The leader of a federation gets a bonus to diplomatic reputation and morale.

Support independence\[[edit](/index.php?title=Alliance&veaction=edit&section=14 "Edit section: Support independence") | [edit source](/index.php?title=Alliance&action=edit&section=14 "Edit section: Support independence")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[![Conquest of Paradise.png](/images/thumb/3/31/Conquest_of_Paradise.png/28px-Conquest_of_Paradise.png)](/Conquest_of_Paradise "Conquest of Paradise")[![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado")

Available only with the [Conquest of Paradise](/Conquest_of_Paradise "Conquest of Paradise") DLC _or_ the [El Dorado](/El_Dorado "El Dorado") DLC enabled.

Join the independence war against the target country's side if this country as a subject declares war against its overlord. The target must accept the offer of independence and is unlikely to do so if it likes its overlord. If war breaks out, the support is converted to a regular alliance.

Coalition\[[edit](/index.php?title=Alliance&veaction=edit&section=15 "Edit section: Coalition") | [edit source](/index.php?title=Alliance&action=edit&section=15 "Edit section: Coalition")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

A coalition is a group of nations which band together against another nation with high [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") aggressive expansion. They serve the purpose of containing a mutual threat: if the target nation declares war on a coalition member, or a coalition member declares war on the target with the Coalition or Crush the Revolution CB, all coalition members will join the war without penalties. Note that this call to war is not triggered if a coalition member is a secondary participant in the war of a non-coalition member against the target nation. A coalition comes with no obligation to aid coalition members in wars that are not against the target. As a result, rivals may join a coalition to stop a mutually disliked nation, even if the rival countries would never sign an alliance. They model historical coalitions against marauding conquerors, such as the various Holy Leagues against the Ottoman Empire, and the seven coalitions against revolutionary France under Napoleon.

### Joining coalitions\[[edit](/index.php?title=Alliance&veaction=edit&section=16 "Edit section: Joining coalitions") | [edit source](/index.php?title=Alliance&action=edit&section=16 "Edit section: Joining coalitions")\]

Any country may choose to form or join a coalition against a target nation as long as:

*   the country has no truce with the target nation
*   the country is not an ally or subject of the target nation
*   the country has **−50** or worse [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") aggressive expansion (AE) opinion against the target nation (can be viewed using the [![Coalition.png](/images/thumb/c/cc/Coalition.png/28px-Coalition.png)](/Coalition "Coalition") Coalition [map mode](/Map#Diplomatic_map_modes "Map"))

AI countries only join coalitions if the following conditions are also fulfilled:

*   the country has [![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") rivalry or [![Outraged attitude](/images/c/ca/Attitude_outraged.png)](/Attitude "Outraged attitude") outraged attitude against the target nation(a country with at least 0 opinion will lose its outraged attitude on the next month tick).
*   there are at least 4 nations "eligible" (hence they do not have to join, just be able) to join the coalition.
*   the coalition could pose a threat to the target.

A nation can only be part of one coalition at a time.

Note that at least 4 members need to have formally joined the coalition before any one of them can declare using the coalition CB. While waiting for others to join, until the full set of 4 or more is reached to enable to coalition CB, the existing 2 or 3 members can defend one another (they are co-belligerents) if one of them happens to be attacked during that period.

Joining coalitions is an instantaneous diplomatic action with no cooldown.

### Leaving coalitions\[[edit](/index.php?title=Alliance&veaction=edit&section=17 "Edit section: Leaving coalitions") | [edit source](/index.php?title=Alliance&action=edit&section=17 "Edit section: Leaving coalitions")\]

*   Leaving coalitions is an instantaneous diplomatic action with no cooldown.
*   AI nations will leave the coalition instantly if they have a truce with the coalition target.
*   Countries flip to outraged attitude if they have a negative opinion with [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") **−50** aggressive expansion (AE) against the target nation, except rivals, who keep the rival attitude.
*   AI coalition nations will almost instantly lose the outraged attitude if they are in the same religious league, if they have no aggressive expansion, or have more than **+50** opinion of the target nation. They will then leave the coalition after a few months.
*   The coalition will dissolve if the remaining coalition members are far weaker than the coalition target. This can be forced by declaring war on an ally of a strong coalition member (for instance Austria or Prussia in a German coalition), as the coalition member will be forced to leave the coalition when a truce is signed. This can snowball into some small states leaving the coalition, and then the whole thing collapsing. (Be careful though, because if the war starts to go poorly the coalition may attack you.)
*   Once a coalition has formed, countries that drop below the required −50 AE will lose their outraged attitude and leave the coalition when no country in the coalition has aggressive expansion of −50 or higher.
*   Once a coalition has formed, countries with a Rival attitude will leave the coalition when either A: the coalition is reduced to 3 or fewer members, or B: the country's aggressive expansion with them drops all the way to 0.
*   Sometimes AI nations will leave a coalition immediately after you reload a saved game, probably due to the game recalculating unsaved internal AI data.

### Coalitions in war\[[edit](/index.php?title=Alliance&veaction=edit&section=18 "Edit section: Coalitions in war") | [edit source](/index.php?title=Alliance&action=edit&section=18 "Edit section: Coalitions in war")\]

*   Coalition members will be not called to arms in an offensive war unless using the Coalition or Crush the Revolution [casus belli](/Casus_belli "Casus belli"). AI will prefer to use these CBs when available.
*   The coalition call to arms is automatic and will result in all members not currently at war with another coalition member instantly being part of the war, even if they have a truce with the target. There is no option to decline.
*   Each coalition has a war leader. If the coalition is attacking, the war leader is the nation that declared war. If the coalition is defending, the war leader is the nation under attack.
*   The war leader always negotiates for the entire coalition; unlike alliances, countries in a coalition cannot make a separate peace. The coalition members can only take cores in a peace deal.
*   If you attack an ally of a member of a coalition and call in a coalition member as a co-belligerent, he will call in all the coalition members, causing all coalition members (including the one you made co-belligerent) to be treated as being coalition members in a coalition war. This means making a coalition member co-belligerent is never beneficial as doing so will prevent you from separate peacing them at all.
*   War leaders, and the Holy Roman Emperor in a coalition, may call non-coalition allies into the war, but these allies are not bound by the coalition rules – they may decline the call, sign a separate peace with the enemy, and take non-cores.
*   Coalitions will be dissolved after a coalition war. This does not remove existing aggressive expansion, however, so the coalitions may still reform after the truce from the coalition war expires.

### Coalition strategy\[[edit](/index.php?title=Alliance&veaction=edit&section=19 "Edit section: Coalition strategy") | [edit source](/index.php?title=Alliance&action=edit&section=19 "Edit section: Coalition strategy")\]

*   Coalitions form easily as a result of aggressive expansion; avoid expanding too much into the same area to reduce the likelihood of having a huge coalition forming against your nation.
*   An alternative strategy in a large-scale conquest is to concentrate attacks on one religious group at a time until they are all gone. Hindus don't care as much about attacks against Muslims, for example. As long as no more than three countries are able to join a coalition at a time (−50 AE, negative opinion, no truce), the coalition will not form.
*   Countries cannot join a coalition against a country they have a truce with, and a coalition is dismantled after a coalition war. You can use this to your advantage by attacking a coalition while it is still small, dismantling it and preventing the members from joining the coalition again for a while. To reduce further coalitions against you, you should only make demands that don't increase aggressive expansion, such as money, releasing of nations, returning of cores, and humiliation.
*   You may use Threaten War against a coalition member to get a truce timer with another nation. This will make the nation leave the coalition. This can be used to break down coalitions.
*   You should prefer to attack a coalition rather than let it strike first since the coalition CB gives a −30 modifier for the coalition to keep fighting, thus making the war longer and more costly.
*   If a coalition can reform after a truce, you should prepare and be ready to attack before the coalition has a chance to reform after the truce ends and they can enter the coalition again.
*   Diplomacy can be a useful tool to dismantle coalitions. Any nation with a modifier of −90 or better can potentially be brought up to +50 with a combination of improving relations, gifts, and subsidies, which will cause them to leave the coalition. Doing this to a very large and powerful coalition member may cause the rest of the coalition to collapse outright, as none of them want to be the target of your wrath without a powerful neighbour to back them up.

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

Alliance • [Casus belli](/Casus_belli "Casus belli") • [Claim](/Claim "Claim") • [Peace](/Peace "Peace") • [War exhaustion](/War_exhaustion "War exhaustion") • [Warfare](/Warfare "Warfare")

Defense

[Fort](/Fort "Fort") • [Zone of control](/Zone_of_control "Zone of control")

Land warfare

[Army](/Army "Army") • [Condottieri](/Condottieri "Condottieri") • [Discipline](/Discipline "Discipline") • [Drilling](/Drilling "Drilling") • [Land units](/Land_units "Land units") • [Land warfare](/Land_warfare "Land warfare") • [Manpower](/Manpower "Manpower") • [Militarisation](/Militarisation "Militarisation") • [Mercenaries](/Mercenaries "Mercenaries") • [Professionalism](/Professionalism "Professionalism")

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

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Alliance&oldid=152941#Coalition](https://eu4.paradoxwikis.com/index.php?title=Alliance&oldid=152941#Coalition)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.30](/Category:1.30 "Category:1.30")
*   [Diplomacy](/Category:Diplomacy "Category:Diplomacy")
*   [Military](/Category:Military "Category:Military")

Hidden category:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")