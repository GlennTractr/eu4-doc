Relations
=========

From Europa Universalis 4 Wiki

(Redirected from [Diplomatic relation](/index.php?title=Diplomatic_relation&redirect=no "Diplomatic relation"))

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

Each country has an opinion of every other country that it knows of, expressed as a numerical value (which ranges from -200 to +200) and a descriptive attitude (which indicates an overall "mood" and general intentions). A country's **Relations** with another determine how likely it is to hurt or help the other country, such as by entering agreements with it or joining coalitions against it. Relations are shaped by diplomatic actions, the countries' relative power, their proximity, their recent [wars](/War "War"), their [religions](/Religion "Religion"), the [casus belli](/Casus_belli "Casus belli") that they have against each other, and [events](/Events "Events"). As such, how country A views country B is sometimes very different from how country B views country A.

Contents
--------

*   [1 Attitude](#Attitude)
    *   [1.1 Attitude table](#Attitude_table)
    *   [1.2 Manually setting attitude](#Manually_setting_attitude)
*   [2 Decay](#Decay)
    *   [2.1 Improve relations modifier](#Improve_relations_modifier)
*   [3 Relation modifiers](#Relation_modifiers)
    *   [3.1 Aggressive expansion](#Aggressive_expansion)
        *   [3.1.1 Causes](#Causes)
        *   [3.1.2 Effects of aggressive expansion](#Effects_of_aggressive_expansion)
        *   [3.1.3 AE impact modifiers](#AE_impact_modifiers)
    *   [3.2 Border friction](#Border_friction)
    *   [3.3 List of modifiers](#List_of_modifiers)
        *   [3.3.1 Historical friends and rivals](#Historical_friends_and_rivals)
    *   [3.4 Improving relations](#Improving_relations)
*   [4 Changing own opinion](#Changing_own_opinion)

Attitude\[[edit](/index.php?title=Relations&veaction=edit&section=1 "Edit section: Attitude") | [edit source](/index.php?title=Relations&action=edit&section=1 "Edit section: Attitude")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

The player can learn about another nation's view of their nation by hovering over the small symbol in the diplomacy screen next to the numerical representation of their view of the player's nation. Attitudes are affected by a number of factors, including opinion level, [aggressive expansion](/Aggressive_expansion "Aggressive expansion"), the distance between two countries and whether they border, and their relative military strengths. For example, a nation usually will not have the _outraged_ attitude towards a nation it has a positive opinion of.

The attitude of a nation affects its willingness to accept diplomatic proposals, manifesting as modifiers that affect the decision of AI nations during [diplomacy](/Diplomacy "Diplomacy"). For example, nations with the _hostile_ attitude will almost never agree to an alliance even if mutual opinions are positive.

While the descriptions below refer to the player, AI nations also have attitudes towards other AI nations.

*   [![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") **Neutral:** This is the default attitude for nations far away from the player's. If a nation views the player as neutral, war can happen under certain circumstances; however, a good relationship with these nations can often prevent this.
*   [![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") **Hostile:** This nation wants to fight the player, either to conquer land or break free from them. Unlike _rivalry_ or _outraged_, this attitude is more opportunistic, and the nation may switch to another attitude if the player no longer appears as an appealing target. Growing in military strength or improving mutual opinions may change this attitude.
*   [![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") **Rivalry:** If a nation sees the player as their [rival](/Rival "Rival"), they will want to destroy the player and will be very unlikely to change their opinion. In contrast to someone who is _outraged_ or simply in a military alliance against the player, a rival will be the player's enemy for the foreseeable future. A nation will stop being a rival if it becomes either far weaker or far stronger than the player's nation.
*   [![Outraged attitude](/images/c/ca/Attitude_outraged.png)](/Attitude "Outraged attitude") **Outraged:** If a nation is outraged by the player's behaviour, they will actively seek to destroy the player. These nations are an enemy and will be so as long as the reasons for the outrage are present. They will very likely join a coalition against the player. Then they will revert to their "normal" view of the player. This attitude is linked to a high [aggressive expansion](/Aggressive_expansion "Aggressive expansion") modifier towards the player's nation and will change if aggressive expansion decreases.
*   [![Ally attitude](/images/7/75/Attitude_ally.png)](/Attitude "Ally attitude") **Ally:** This nation views the player as an ally.
*   [![Defensive attitude](/images/e/e0/Attitude_defensive.png)](/Attitude "Defensive attitude") **Defensive:** This nation views the player as an ally in a defensive alliance. They are less likely to join offensive wars, however, unless they strongly dislike the target (especially if they're rivals). However this attitude will not deter the AI ally from joining your offensive wars, unlike the threatened attitude, which will give −120 reasons to join your wars.
*   [![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") **Friendly:** This nation views the player as a natural ally. They will not declare war on the player, and are unlikely to join their allies in a war against the player as long the diplomatic landscape doesn't change significantly, even if relations are bad. These nations will seek to ally with the player. Nations that regard the player as a _historical friend_ are predisposed to hold the _friendly_ attitude towards the player.
*   [![Protective attitude](/images/a/aa/Attitude_protective.png)](/Attitude "Protective attitude") **Protective:** This nation wants to guard the player's nation—by diplomatically vassalizing them. It will guarantee the player's nation and defend it from enemies, easily accepting alliances though possibly as a prelude to vassalization, but also usually refusing to partake in any offensive wars.
*   [![Loyal attitude](/images/f/fe/Attitude_loyal.png)](/Attitude "Loyal attitude") **Loyal:** This subject nation views the player positively, has low [![Liberty desire.png](/images/thumb/f/fd/Liberty_desire.png/28px-Liberty_desire.png)](/Liberty_desire "Liberty desire") [liberty desire](/Liberty_desire "Liberty desire"), and will cooperate in times of war and be little inclined to declare independence.
*   [![Disloyal attitude](/images/1/1d/Attitude_disloyal.png)](/Attitude "Disloyal attitude") **Disloyal:** This subject nation views the player negatively or with hostility, has high liberty desire, will refuse to participate in wars, defend the player's land or pay taxes, and is more inclined to declare independence.
*   [![Rebellious attitude](/images/6/64/Attitude_rebellious.png)](/Attitude "Rebellious attitude") **Rebellious:** This subject nation views the player as weak and unjust, and will be very likely to declare an independence war.
*   [![Overlord attitude](/images/9/98/Attitude_overlord.png)](/Attitude "Overlord attitude") **Overlord:** This country views the player as one of its subjects.
*   [![Domineering attitude](/images/2/2f/Attitude_domineering.png)](/Attitude "Domineering attitude") **Domineering:** This nation feels like the player should be its subject nation and will pursue any attempt to make it that way. An allied nation that develops a domineering attitude toward the player will tend to break any alliances, as the domineering attitude gives -1000 reasons to stay in an alliance.
*   [![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") **Threatened:** If a nation feels threatened by the player they will seek safety in an alliance either against or with the player. This happens when the player is becoming relatively stronger than them. Here it is better to ally with them, because even though they fear the player they will often be ready to fight with them in a defensive war. However, they are still the player's enemy and will break the alliance as soon as the power landscape changes.
*   [![Unknown attitude](/images/2/2e/Attitude_unknown.png)](/Attitude "Unknown attitude") **Unknown:** The nation doesn't know the player exists, or else the nation is human-controlled and thus unpredictable.

### Attitude table\[[edit](/index.php?title=Relations&veaction=edit&section=2 "Edit section: Attitude table") | [edit source](/index.php?title=Relations&action=edit&section=2 "Edit section: Attitude table")\]

Attitude

Antagonize

Annex

Weaken

Coalition

Warn

Vassalize

Ally

Befriend

Protect

Threat

Ignore

[![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

**X**

[![Ally attitude](/images/7/75/Attitude_ally.png)](/Attitude "Ally attitude") Ally

\-

\-

\-

\-

\-

\-

**X**

**X**

**X**

\-

\-

[![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile

**X**

**X**

\-

\-

**X**

\-

\-

\-

\-

\-

\-

[![Rivalry attitude](/images/8/8a/Attitude_rivalry.png)](/Attitude "Rivalry attitude") Rivalry

**X**

**X**

**X**

**X**

\-

\-

\-

\-

\-

\-

[![Outraged attitude](/images/c/ca/Attitude_outraged.png)](/Attitude "Outraged attitude") Outraged

**X**

\-

**X**

**X**

**X**

\-

\-

\-

\-

**X**

\-

[![Defensive attitude](/images/e/e0/Attitude_defensive.png)](/Attitude "Defensive attitude") Defensive

\-

\-

\-

\-

\-

\-

\-

**X**

\-

\-

\-

[![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly

\-

\-

\-

\-

\-

**X**

**X**

**X**

\-

\-

\-

[![Protective attitude](/images/a/aa/Attitude_protective.png)](/Attitude "Protective attitude") Protective

\-

\-

\-

\-

\-

\-

\-

\-

**X**

\-

\-

[![Loyal attitude](/images/f/fe/Attitude_loyal.png)](/Attitude "Loyal attitude") Loyal

\-

\-

\-

\-

\-

\-

**X**

**X**

\-

\-

\-

[![Disloyal attitude](/images/1/1d/Attitude_disloyal.png)](/Attitude "Disloyal attitude") Disloyal

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

[![Rebellious attitude](/images/6/64/Attitude_rebellious.png)](/Attitude "Rebellious attitude") Rebellious

**X**

**X**

\-

\-

\-

**X**

\-

\-

\-

**X**

\-

[![Overlord attitude](/images/9/98/Attitude_overlord.png)](/Attitude "Overlord attitude") Overlord

\-

\-

\-

\-

\-

**X**

**X**

**X**

**X**

\-

\-

[![Domineering attitude](/images/2/2f/Attitude_domineering.png)](/Attitude "Domineering attitude") Domineering

**X**

\-

\-

\-

**X**

\-

\-

\-

\-

\-

\-

[![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened

\-

\-

**X**

\-

\-

\-

**X**

**X**

\-

**X**

\-

[![Unknown attitude](/images/2/2e/Attitude_unknown.png)](/Attitude "Unknown attitude") Unknown

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

**X**

Table legend:

*   **Antagonize:** The AI considers them a potential target for war
*   **Annex:** The AI desires complete conquest of them
*   **Weaken:** The AI want to weaken them by releasing countries, allying/guaranteeing their neighbours, etc.
*   **Coalition:** The AI want to form a coalition against them (Applies for rivalry attitude if the rival has at least 50 Aggressive Expansion against the target nation)
*   **Warn:** The AI want to send warnings
*   **Vassalize:** The AI want to vassalize them
*   **Ally:** The AI actively desires an alliance with them
*   **Befriend:** The AI want to raise relations with them
*   **Protect:** The AI want to protect them
*   **Threat:** The AI want to protect themselves against them
*   **Ignore:** The AI want to actively ignore them

### Manually setting attitude\[[edit](/index.php?title=Relations&veaction=edit&section=3 "Edit section: Manually setting attitude") | [edit source](/index.php?title=Relations&action=edit&section=3 "Edit section: Manually setting attitude")\]

[![The Cossacks.png](/images/thumb/b/b6/The_Cossacks.png/28px-The_Cossacks.png)](/The_Cossacks "The Cossacks")

Available only with the [The Cossacks](/The_Cossacks "The Cossacks") DLC enabled.

_Main article: [Diplomatic feedback#Managing attitude](/Diplomatic_feedback#Managing_attitude "Diplomatic feedback")_  

Player nations have a default attitude towards other nations based on what the attitude of an AI nation would be. Players may manually adjust their attitude, however, to one of [![Friendly attitude](/images/4/44/Attitude_friendly.png)](/Attitude "Friendly attitude") Friendly, [![Neutral attitude](/images/d/d7/Attitude_neutral.png)](/Attitude "Neutral attitude") Neutral, [![Hostile attitude](/images/2/28/Attitude_hostile.png)](/Attitude "Hostile attitude") Hostile or [![Threatened attitude](/images/b/bb/Attitude_threatened.png)](/Attitude "Threatened attitude") Threatened.

Decay\[[edit](/index.php?title=Relations&veaction=edit&section=4 "Edit section: Decay") | [edit source](/index.php?title=Relations&action=edit&section=4 "Edit section: Decay")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

Many relations modifiers decay over time. The base rate depends on the type of modifier, and is affected by the modifier [![Improve relations.png](/images/thumb/4/46/Improve_relations.png/24px-Improve_relations.png)](/File:Improve_relations.png) _Improve relations_.

###  [![Improve relations.png](/images/thumb/4/46/Improve_relations.png/28px-Improve_relations.png)](/File:Improve_relations.png) Improve relations modifier\[[edit](/index.php?title=Relations&veaction=edit&section=5 "Edit section: Improve relations modifier") | [edit source](/index.php?title=Relations&action=edit&section=5 "Edit section: Improve relations modifier")\]

[![Improve relations.png](/images/thumb/4/46/Improve_relations.png/24px-Improve_relations.png)](/File:Improve_relations.png)

Conditions

**+50%.00**

for having the [native advancement](/Native_advancement "Native advancement") ‘Trade Diplomacy’

**+30%.00**

with the [church aspect](/Christian_denominations#Church_aspects "Christian denominations") Pacifism (for [![Hussite](/images/thumb/2/24/Hussite.png/24px-Hussite.png)](/Hussite "Hussite") Hussite nations)

**+25%.00**

with Icon of St. Nicholas as active icon (for [![Orthodoxy](/images/thumb/9/96/Orthodox.png/24px-Orthodox.png)](/Orthodox "Orthodox") Orthodox nations)

**+25%.00**

for choosing the conciliatory position during the [Council of Trent](/Papacy#Council_of_Trent "Papacy") (for [![Catholicism](/images/thumb/3/39/Catholic.png/24px-Catholic.png)](/Catholic "Catholic") Catholic nations)

**+25%.00**

for being a [lucky nation](/Lucky_nation "Lucky nation") (AI only).

**+20%.00**

with [![Ganesha.png](/images/thumb/8/8b/Ganesha.png/24px-Ganesha.png)](/Ganesha "Ganesha") Ganesha as [personal deity](/Personal_deity "Personal deity") (for [![Hinduism](/images/thumb/1/1a/Hinduism.png/24px-Hinduism.png)](/Hindu "Hindu") Hindu nations)

**+20%.00**

with the [![Cult Cwezi.png](/images/thumb/2/24/Cult_Cwezi.png/24px-Cult_Cwezi.png)](/Cwezi "Cwezi") Cwezi [cult](/Pagan_denominations#Cults "Pagan denominations") (for [![Fetishist](/images/thumb/8/8d/Fetishist.png/24px-Fetishist.png)](/Fetishist "Fetishist") Fetishist nations)

**+20%.00**

for having a [ruler](/Ruler "Ruler") with the [![Improve relations.png](/images/thumb/4/46/Improve_relations.png/24px-Improve_relations.png)](/Silver_Tongue "Silver Tongue") ‘Silver Tongue’ personality

**+20%.00**

with a [![Advisor Diplomat.png](/images/thumb/3/3d/Advisor_Diplomat.png/24px-Advisor_Diplomat.png)](/Diplomat_Advisor "Diplomat Advisor") Diplomat as [advisor](/Advisor "Advisor")

**+15%.00**

with "Establish communities" as [trade policy](/Trade_policies "Trade policies"), towards the countries collecting/steering in this trade node

**+15%.00**

with the [![Government republic.png](/images/thumb/5/5d/Government_republic.png/24px-Government_republic.png)](/Republic "Republic") [Constituent Assembly](/Republic#Constituent_Assembly "Republic") government reform for revolutionary republics

**+15%.00**

as a [![Protestantism](/images/thumb/0/0d/Protestant.png/24px-Protestant.png)](/Protestant "Protestant") Protestant country

**+1%.00**

for each [![Royalmarriage.png](/images/thumb/2/22/Royalmarriage.png/24px-Royalmarriage.png)](/Royal_marriage "Royal marriage") royal marriage

**+0.50%**

for each point of [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/24px-Yearly_prestige.png)](/Prestige "Prestige") prestige

**−0.50%**

for each point of [![Overextension.png](/images/thumb/0/0b/Overextension.png/24px-Overextension.png)](/Overextension "Overextension") overextension

**−0.50%**

for each percentage point over [![Governing capacity.png](/images/thumb/2/2b/Governing_capacity.png/24px-Governing_capacity.png)](/Governing_capacity "Governing capacity") governing capacity

**−20%.00**

for having a [ruler](/Ruler "Ruler") with the [![Naive Enthusiast.png](/images/thumb/0/0a/Naive_Enthusiast.png/24px-Naive_Enthusiast.png)](/Naive_Enthusiast "Naive Enthusiast") ‘Naive Enthusiast’ personality

Ideas and policies:

[![Improve relations.png](/images/thumb/4/46/Improve_relations.png/24px-Improve_relations.png)](/Improve_relations "Improve relations")

Traditions

Ideas

Bonuses

ExpandPolicies

+50%

*   Italian traditions

*   Yaroslavlyian idea 7: Russian Ambition

*   Iroquois ambition

—

+33%

*   Moldavian traditions

*   Holy Roman idea 3: Imperial Diplomacy

—

—

+30%

*   Angevin traditions
*   Antemoro traditions
*   Austrian traditions
*   Luban traditions

*   Humanist idea 6: Benevolence
*   Ayutthayan idea 5: Embassies
*   Georgian idea 2: Georgian Isolation
*   Hadramhi idea 7: Distant Diplomacy
*   Latgalian idea 2: Diplomatic Overtures
*   Liège idea 4: Wittelsbach Bishops
*   Montferrat idea 4: Savoyard Loyalty
*   Satake idea 7: Honorable Reputation
*   Saxe-Lauenburg idea 4: Claiming the Electorate
*   Siamese idea 2: Experienced Ambassadors
*   Takeda idea 4: Kurokawa Gold Mine
*   Veronese idea 5: Ending the Strife

*   Great Ming ambition
*   Kongo ambition
*   Mainzian ambition
*   Palatine ambition
*   Wurzburgian ambition
*   Württemberger ambition

—

+25%

*   Offaly traditions
*   Sardinian-Piedmontese traditions
*   Savoyard traditions
*   Swabian traditions

*   Diplomatic idea 4: Benign Diplomats
*   Jurchen idea 6: Generosity of the Warlord

*   Romanian ambition
*   Swabian City-State ambition

—

+20%

*   Augsburger traditions
*   Oyo traditions

*   Aboriginal idea 7: Musical Tradition
*   Cham idea 5: Che Man's Legacy
*   Chiba idea 4: Sakura Kadan
*   Farsi idea 3: Diplomatic Prudence
*   Iroquoian Federation idea 3: Great White Roots
*   Khivan idea 7: Great Power Diplomacy
*   Kildarean idea 2: Silver Tongues
*   Lanfang idea 3: Careful Diplomacy
*   North Western Native idea 3: Potlatch

*   Thüringian ambition

*   Diplomatic-Defensive: The Diplomatic Defense Act
*   Humanist-Diplomatic: Multilingual Diplomats

+15%

—

*   Bremen idea 3: Deep Pockets
*   Frankfurter idea 4: Frankfurter Postzeitung
*   Horn of African idea 6: Cushitic Language
*   Khmer idea 2: Theravada Buddhism
*   Lan Xang idea 3: Court History Of Lan Xang
*   Sienese idea 6: The Saints of Siena
*   Silesian idea 1: Under the Influence
*   Southeastern Woodlands idea 6: Exogamous Marriages

—

*   Divine-Trade: Solidarity
*   Indigenous-Diplomatic: Appeal to the Old Powers

+10%

—

*   Imagawa idea 1: Claim to the Shogunate
*   Northeastern Woodlands idea 6: Eagle Clan
*   Palembang idea 4: Center of the Dynasty

—

—

Decisions, events and missions:

[![Improve relations.png](/images/thumb/4/46/Improve_relations.png/24px-Improve_relations.png)](/File:Improve_relations.png)

Event modifier

Trigger

ExpandDuration

**−10%**

Privateers

Decision: [Enlist Privateers](/Enlist_Privateers "Enlist Privateers")

until the end of the campaign.

**−10%**

Anti-Christian Edict

Decision: [Anti-Christian Edict](/Anti-Christian_Edict "Anti-Christian Edict")

until the country becomes [Christian](/Christian "Christian").

**+10%**

Competent Diplomacy

Event: [Competent Diplomacy!](/Diplomatic_events#Competent_Diplomacy.21 "Diplomatic events")

for 5 years.

**−10%**

Incompetent Diplomacy

Event: [Incompetent Diplomacy!](/Diplomatic_events#Incompetent_Diplomacy.21 "Diplomatic events")

for 5 years.

**+5%**

Western Wrecked Ship

Japanese culture event: [Western Wrecked Ship](/Japanese_events#Western_Wrecked_Ship "Japanese events")

Option: ‘Help the foreigners’

until ruler changes.

**−15%**

Reckless Privateer

Privateer event: [A Reckless Privateer](/Privateers_events#A_Reckless_Privateer "Privateers events")

Option: ‘Laws and treaties are more like guidelines, anyway...’

for 10 years.

**+15%**

Curtailed Privateer

Privateer event: [A Reckless Privateer](/Privateers_events#A_Reckless_Privateer "Privateers events")

Option: ‘We will not tolerate outlaws in our employ!’

for 10 years.

**+20%**

Sierra de la Plata

Seven Cities event: [Sierra de la Plata - Mountain of Silver](/Seven_Cities_events#Sierra_de_la_Plata_-_Mountain_of_Silver "Seven Cities events")

until the end of the campaign.

**+10%**

Sistine Chapel decorated by Perugino

Papal event: [Decorate the Sistine Chapel](/Papal_events#Decorate_the_Sistine_Chapel "Papal events")

Option: ‘Hire Pietro Perugino.’

until the end of the campaign.

**+30%**

Bavarian Ambition

Bavarian mission: [The Franconian Inheritance](/Bavarian_missions#The_Franconian_Inheritance "Bavarian missions")

for 10 years

Bavarian mission: [C.laiming the Wittelsbach lands](/Bavarian_missions#Claiming_the_Wittelsbach_lands "Bavarian missions")

for 10 years

Bavarian mission: [Uniting the Wittelsbach Domains](/Bavarian_missions#Uniting_the_Wittelsbach_Domains "Bavarian missions")

for 10 years

Bavarian mission: [Drive the Hohenzollerns out](/Bavarian_missions#Drive_the_Hohenzollerns_out "Bavarian missions")

for 10 years

The ‘Improve relations’ modifier only affect negative relationships. Positive relationships decay at a fixed rate.

Relation modifiers\[[edit](/index.php?title=Relations&veaction=edit&section=6 "Edit section: Relation modifiers") | [edit source](/index.php?title=Relations&action=edit&section=6 "Edit section: Relation modifiers")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

### Aggressive expansion\[[edit](/index.php?title=Relations&veaction=edit&section=7 "Edit section: Aggressive expansion") | [edit source](/index.php?title=Relations&action=edit&section=7 "Edit section: Aggressive expansion")\]

![Wiki letter w.png](https://central.paradoxwikis.com/images/6/6a/Wiki_letter_w.png)

Please help improve this article or section by [**expanding it**](https://eu4.paradoxwikis.com/index.php?title=Relations&action=edit) with:

*   AE caps for different peace terms(vassalizing seems to be capped at 100 dev and forcing union is capped at 250 dev. But it might be that peace terms modifier multiplied by the dev is capped at 50)
*   how exactly is AE from no-cb and breaking truces impacted by the other modifiers(e.g. religion, culture, hre membership, distance)
*   modifications if the aggressor is the defender in a war
*   describe everything in a manner which can be understood easier
*   impact of threaten war
*   AE increase when target and loser are subjects of the same overlord
*   Vassal actions: overlord gains full aggressive expansion penalty from all actions of its vassals
*   AE for each province is calculated separately and then rounded down
*   add more AE impact modifiers (ae\_impact in the game files).

Aggressive expansion is a game mechanic modeling the negative diplomatic impact on other nations caused by aggressive behavior, mainly when expanding the country through annexing provinces and force vassalizing enemies. If a diplomatic relation suffers from aggressive expansion penalty, it will be listed in the detailed relationship view. When negotiating a peace, the additional amount of aggressive expansion that makes the sum go beyond -50 will be listed in the interface with the notification of countries that might join coalition against the player.

#### Causes\[[edit](/index.php?title=Relations&veaction=edit&section=8 "Edit section: Causes") | [edit source](/index.php?title=Relations&action=edit&section=8 "Edit section: Causes")\]

AE is generated by various peace terms, by breaking a truce, and by declaring a war without a [casus belli](/Casus_belli "Casus belli"). The amount of aggressive expansion that a **target country** gets towards an **aggressor country** for actions of the aggressor against a **loser country** depend on the religion, culture, distance and various other attributes of the target country compared to the provinces taken or towards the loser country or the aggressor.

The peace deal description in the game contains a _base aggressive expansion_ which is independent of the target country and calculated as follows:

![{\displaystyle {\text{base aggressive expansion}}={\text{development}}\cdot {\text{peace term modifier}}\cdot (100\%+{\text{AE impact}})\cdot (100\%-{\text{Administrative efficiency}})\cdot {\text{CB modifier}}\cdot {\text{noncobelligerent modifier}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/81907cd8349680f10b6eab53aca394b2f9f09857)

*   development is the development of the conquered province (capped at 30) or the development of the target country (for peace terms which affect the whole country)
*   CB modifier is 100% for Conquest, 75% for Imperialism, 25% for Reconquest
*   Noncobelligerent modifier is 150% for non-co-belligerents and 100% otherwise
*   Peace term modifier:
    *   Demand province: **60%**
    *   Return core to victor's subject: **40%**
    *   Force vassalization: **50%**
    *   Force tributary: **50%**
    *   Force personal union: **20%**
    *   Concede Colonial region: **20%**
    *   Force join HRE: **20%**
    *   Transfer subject with the [![Age of Discovery.png](/images/thumb/e/eb/Age_of_Discovery.png/24px-Age_of_Discovery.png)](/Age_of_Discovery "Age of Discovery") Age of Discovery ability: **30%**

The base aggressive expansion is then modified based on the target country:

![{\displaystyle {\text{aggressive expansion}}={\text{base aggressive expansion}}\cdot (100\%+{\text{religion modifier}}+{\text{infidel conquest modifier}}+{\text{culture modifier}}+{\text{HRE modifier}})\cdot {\frac {1}{1+{\frac {\text{distance}}{100}}\cdot 0.75}}\cdot (100\%-{\text{spynetwork in target}}\cdot 10\%)\cdot {\text{ally modifier}}\cdot {\text{subject modifier}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/b46d304853d26abde2537f0f384988a9095fa945)

*   Religion modifier is based on the state religion of the target country compared to the state religion of the loser. It is 50% if they are the same[\[1\]](#cite_note-1), 0% if they are different[\[2\]](#cite_note-2), but in the same religious group and -50% if they are in different religious groups[\[3\]](#cite_note-3)
*   Infidel conquest modifier is 50% if the target country has the same state religion as the loser country and the state religion of the aggressor country is in a different religious group[\[4\]](#cite_note-4)
*   Culture modifier is 50%[\[5\]](#cite_note-5) if the primary culture of the target country is the same as the culture of the province, 25% for different culture in the same culture group[\[6\]](#cite_note-6), 0% for unrelated culture
*   HRE modifier is 50%[\[7\]](#cite_note-7) if the conquered province and the target country are part of the HRE
*   distance is the ingame distance between the conquered province and the nearest province of the target country. This value is rounded down to the nearest multiple of 100 and capped at 400.
*   Ally modifier is 2/3 if the target nation is allied to the aggressor and 1 otherwise
*   Subject modifier is 10% if the target nation is a subject of the aggressor and 100% otherwise

#### Effects of aggressive expansion\[[edit](/index.php?title=Relations&veaction=edit&section=9 "Edit section: Effects of aggressive expansion") | [edit source](/index.php?title=Relations&action=edit&section=9 "Edit section: Effects of aggressive expansion")\]

*   [![Opinion.png](/images/thumb/9/97/Opinion.png/24px-Opinion.png)](/Opinion "Opinion") **Opinion** will be reduced by the aggressive expansion penalty. The negative penalty will decay by a base of **+2** per year, further increased by bonuses to [![Improve relations.png](/images/thumb/4/46/Improve_relations.png/28px-Improve_relations.png)](/Improve_relations "Improve relations") improve relations.
*   **[Attitude](/Attitude "Attitude")** towards the aggressor may change to [![Outraged attitude](/images/c/ca/Attitude_outraged.png)](/Attitude "Outraged attitude") outraged as the aggressive expansion penalty increases in strength. It is less likely for a nation with a high opinion of the aggressor to become outraged, but this is not foolproof if too much expansion is taken.
*   [![Coalition.png](/images/thumb/c/cc/Coalition.png/28px-Coalition.png)](/Coalition "Coalition") **[Coalitions](/Coalition "Coalition")** may be formed against an aggressor by nations with at least a **−50** aggressive expansion relations modifier. There must be at least **4** nations who do not hold a truce with the aggressor, have at least a **−50** aggressive expansion modifier, **and** have a negative opinion of the aggressor in order for a coalition to form. Coalitions are unlikely to form if the combined power of all potential members is much lower than that of the target country and its allies.

#### AE impact modifiers\[[edit](/index.php?title=Relations&veaction=edit&section=10 "Edit section: AE impact modifiers") | [edit source](/index.php?title=Relations&action=edit&section=10 "Edit section: AE impact modifiers")\]

The base formula for aggressive expansion impact above is also further modified by additional modifiers which are added to the formula afterwards. These modifiers include:

[![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/24px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact")

Traditions

Ideas

Bonuses

CollapsePolicies

−25%

—

*   Ryukyuan idea 1: Chinese Investiture

—

—

−20%

—

*   Espionage idea 2: State Propaganda

*   Fijian ambition

—

−15%

*   Majapahit traditions
*   Nagpuri traditions
*   Saluzzo traditions

*   Aksumite idea 2: Legacy of King Kaleb
*   Baden idea 6: Diplomatic Expansion
*   Croatian idea 5: The Sabor
*   Japanese idea 7: Great Power Diplomacy
*   Mongolian idea 2: Ikh Mongol Uls
*   Oirat idea 5: Legacy of the Great Khan
*   Palawa idea 4: Parlevar
*   Russian idea 1: Land of the Rus
*   Scottish idea 7: Pass the Act of Revocation
*   Swabian idea 7: Barbarossa's Legacy

*   Balinese ambition

—

−10%

*   Crimean traditions
*   Franconian traditions
*   Great Qing traditions
*   Horde traditions
*   Kanem Bornuan traditions
*   Kazani traditions
*   Prussian traditions
*   Tokugawa traditions

*   Horde government idea 2: Beyond the Sun
*   American Southwest idea 7: Far West
*   Ansbach idea 2: Restoring Our Heritage
*   Asakura idea 7: Legacy of Emperor Keitai
*   Bayreuther idea 2: Restoring Our Heritage
*   Chosokabe idea 3: Unification of Shikoku
*   Colognian idea 1: The Pursuit of Territorial Unity
*   Corsican idea 3: The Crown of Sardinia and Corsica
*   Date idea 2: Expansion by Marriages
*   Hejazi idea 3: Sharifs
*   Ito idea 3: Land of God's Landing
*   Lan Xang idea 3: Court History Of Lan Xang
*   Lusatian idea 4: Wittlesbach History
*   Manchu idea 7: The Seven Grievances
*   Mayan idea 3: Ancient Feuds
*   Medri Bahri idea 7: Princely Ambition
*   Norman idea 1: Conquerors
*   Papal idea 7: The Holy Father
*   Rostov idea 2: Ancient Heritage
*   Sardinian idea 4: The Crown of Sardinia and Corsica
*   Sardinian-Piedmontese idea 7: The Risorgimento
*   Semien idea 3: Kebra Negast
*   Swabian City-State idea 5: Reclaiming the Duchy
*   Trierian idea 3: Archicancellarius per Galliam
*   Tsutsui idea 6: Wise Opportunists
*   Utsunomiya idea 6: Mediator of Kanto
*   Württemberger idea 7: Reichsdeputationshauptschluss

*   Lotharingian ambition

*   Court-Defensive: Sturdy Argument Act
*   Court-Horde: Clan Unity Act
*   Indigenous-Court: Native Emissaries Act
*   Influence-Innovative: Foreign Advisors

Additional modifiers include:

*   **20%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for having The Girondists faction in control as a Revolutionary Republic. Requires [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man").
*   **0.5%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for each 1% over the [governing capacity](/Governing_capacity "Governing capacity") limit.
*   **−0.1%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") per point of [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") prestige.
*   **−1%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for an unreformed [![Nahuatl.png](/images/thumb/8/8c/Nahuatl.png/28px-Nahuatl.png)](/Nahuatl "Nahuatl") [Nahuatl](/Nahuatl "Nahuatl") nation per point of Doom.
*   **−5%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for a [Hindu](/Hindu "Hindu") nation with [![Hindu Deity Shiva](/images/thumb/e/ec/Shiva.png/28px-Shiva.png)](/Shiva "Shiva") Shiva as patron god
*   **−5%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for holding [![Great project kashi vishwanath.png](/images/thumb/7/72/Great_project_kashi_vishwanath.png/48px-Great_project_kashi_vishwanath.png)](/File:Great_project_kashi_vishwanath.png)[Kashi Vishwanath Temple](/Kashi_Vishwanath_Temple "Kashi Vishwanath Temple") at [![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) Magnificent level. Requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan").
*   **−10%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") from the Justified Wars ability during the [Age of Discovery](/Age_of_discovery "Age of discovery").
*   **−10%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for rulers with the 'careful' personality trait.
*   **−10%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for an Orthodox nation with the Icon of St. Nicholas.
*   **−10%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for a Muslim nation following the [![Hanbali school](/images/thumb/1/10/Muslim_school_hanbali.png/28px-Muslim_school_hanbali.png)](/Hanbali "Hanbali school") Hanbali [school](/Muslim_denominations#Muslim_schools_of_law "Muslim denominations") or with Hanbali scholars
*   **−10%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for a [![Catholicism](/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") catholic nation while the [![Golden bull illius qui se pro divini.png](/images/thumb/7/75/Golden_bull_illius_qui_se_pro_divini.png/24px-Golden_bull_illius_qui_se_pro_divini.png)](/Golden_bull "Golden bull") [Golden bull](/Golden_bull "Golden bull") _“Illius Qui Se Pro Divini”_ is active.
*   **−10%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for holding [![Great project the grand palace.png](/images/thumb/0/07/Great_project_the_grand_palace.png/48px-Great_project_the_grand_palace.png)](/File:Great_project_the_grand_palace.png)[The Grand Palace of Bangkok](/The_Grand_Palace_of_Bangkok "The Grand Palace of Bangkok") at [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) Magnificent level. Requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan").
*   **−10%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for holding [![Great project kashi vishwanath.png](/images/thumb/7/72/Great_project_kashi_vishwanath.png/48px-Great_project_kashi_vishwanath.png)](/File:Great_project_kashi_vishwanath.png)[Kashi Vishwanath Temple](/Kashi_Vishwanath_Temple "Kashi Vishwanath Temple") at [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) Magnificent level. Requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan").
*   **−15%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for a Alcheringa nation with [![Cult Mwari.png](/images/thumb/3/3b/Cult_Mwari.png/28px-Cult_Mwari.png)](/Alcheringa "Alcheringa") Lumaluma as cult. Requires [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man").
*   **−20%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for a Catholic nation that is Curia Controller.
*   **\-25%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for [lucky nations](/Luck "Luck")
*   **\-33%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for players on the very easy and easy difficulties.
*   **\-33%** [![Aggressive expansion impact.png](/images/thumb/c/ca/Aggressive_expansion_impact.png/28px-Aggressive_expansion_impact.png)](/Aggressive_expansion_impact "Aggressive expansion impact") for AI on the hard and very hard difficulties.

### Border friction\[[edit](/index.php?title=Relations&veaction=edit&section=11 "Edit section: Border friction") | [edit source](/index.php?title=Relations&action=edit&section=11 "Edit section: Border friction")\]

Border friction simulates the tensions felt by countries with neighboring provinces due to things like trade value, immigration, etc.

**Effects**

*   [Border friction events](/Border_Friction_events "Border Friction events") can occur between nations with this modifier. These events will occur more or less often depending on the opinion held between both nations.

### List of modifiers\[[edit](/index.php?title=Relations&veaction=edit&section=12 "Edit section: List of modifiers") | [edit source](/index.php?title=Relations&action=edit&section=12 "Edit section: List of modifiers")\]

These modifiers are non-event based. The Min/max value represents the highest or lowest value available depending on the cause. For example, returning six cores gives no benefit over returning five.

Name

Value

Yearly decay

Min/max

Notes

Rival

**−100**

Hostile relations

**−50**

War or rivalry

Allied to Rival

**−25**

Enemy of Enemy

**+1**

**+20**

Ticking 0–20 when enemy is set. Has no effect on relations with vassals or personal unions.

Invasion

**−1000**

**−1000**

Only applies to [![Flag of Jan Mayen](/images/thumb/a/aa/Jan_Mayen.png/20px-Jan_Mayen.png)](/Jan_Mayen "Jan Mayen") [Jan Mayen](/Jan_Mayen "Jan Mayen") and [![Flag of Synthetics](/images/thumb/2/21/Synthetics.png/20px-Synthetics.png)](/Synthetics "Synthetics") [Synthetics](/Synthetics "Synthetics") in the base game.

Same Religion (republic)

**+10**

Different Religion (republic)

**−5**

Heathens

Heretic Religion (republic)

**−10**

Neighboring Different religion (republic)

**−10**

Neighboring heathens

Neighboring Heretic religion (republic)

**−20**

Tolerated Heretics (republic)

**−5**

Catholic – Orthodox – Coptic

Neighboring Tolerated Heretics (republic)

**−10**

Catholic – Orthodox – Coptic

Defender of Faith

**+10**

Same Religion

**+25**

Same Syncretic Faith

**+10**

Different Religion

**−10**

Heathens

Neighboring Different Religion

**−20**

Neighboring heathens

Heretic Religion

**−20**

Neighboring Heretic Religion

**−40**

Tolerated Heretics

**−10**

Catholic – Orthodox – Coptic

Neighboring Tolerated Heretics

**−20**

Catholic – Orthodox – Coptic

At War

**−20**

Same Dynasty

**+15**

Royal Marriage

**+25**

Guaranteed

**+10**

Alliance

**+50**

In war together

**+25**

Have a Core

**−20**

Have a Claim

**−10**

Claimant towards country they have a claim on

Receiving Subsidies

**+1**

**−2**

**+15**

Ticking 0−15 depending on amount relative to income

Creating claim

**−15**

Vassal

**+50**

Union

**+10**

Colonial Ties

**+50**

Colonial nation towards overlord

They are excommunicated

**−50**

They are excommunicated (theocracy)

**−200**

Transfers trade power to

**+20**

At 100% transfer

Getting trade power from

**+20**

**+20**

At 100% transfer

In Same Trade League

**+20**

Consort Marriage Ties

**+5**

Consort Marriage Ties (consort regent)

**+15**

Religious School Relation

**+25**

Muslim countries following different religious schools if those schools like each other

Same Religious School

**+10**

Hegemon

**−50**

Wants your provinces

**−15**

**−200**

Varies depending on how much they want and how many.

Wants your subjects' provinces

**−15**

**−200**

Border Friction

**−1**

**−200**

Historical Friend

**+25**

Historical Rival

**−25**

Relative power to liege

**−1**

Brothers in struggle against the infidels

**+1**

Embargo

**−15**

They allow us military access

**+10**

They allow us fleet basing rights

**+10**

Pirated us

**−5**

**+5**

**−100**

Converted Our Culture

**−30**

**+1**

Forced other to give up Claim on us

**+15**

**−1**

**+15**

They liberated us

**+300**

**−5**

Cancelled subject status in peace deal

They supported our rebellion

**+100**

**−5**

Won war with Support Rebels CB in support of separatists from a country that didn't exist

They lifted the excommunication against us.

**+50**

**−5**

**+50**

Towards curia controller

They excommunicated us

**−100**

**+5**

**−100**

Towards curia controller

They refused a call for crusade

**−100**

**+5**

**−100**

Towards the Papal State

They refused a call for religious unity

**−100**

**+5**

**−100**

Holy Roman Emperor

They refused to defend the empire

**−50**

**+5**

**−50**

Holy Roman Emperor refused call to arms as emperor

They refused to join our war

**−50**

**+5**

**−50**

From country whose call to arms was refused

They refused to join the war against us

**+10**

**−2**

**+10**

From war leader fighting a country whose call to arms was refused

Defender of Faith refused to join a war

**\-25**

**+5**

They came to the defense of the empire (elector)

**+100**

**−3**

**+100**

They came to the defense of the empire

**+50**

**−3**

**+50**

0 to the prince attacked

They claimed the throne of another imperial subject

**−25**

**+3**

**−25**

They used their royal marriage as pretext to claim our throne

**−100**

**+3**

**−100**

Claim Throne diplomatic action

They used their royal marriage as pretext to claim a throne

**−50**

**+3**

**−50**

Claim Throne diplomatic action

They requested their relative on the throne

**−40**

**+3**

**−100**

Request Relative as Heir diplomatic action

They refused fleet basing rights

**−10**

**+1**

**−10**

They revoked our fleet basing rights

**−20**

**+1**

**−10**

They revoked our military access

**−20**

**+1**

**−10**

They refused military access

**−10**

**+1**

**−10**

They broke free from us

**−100**

**+5**

**−100**

Vassal declared independence from overlord

Our overlord abandoned us

**−200**

**+5**

**\-200**

Cancelling vassalage while at positive relations

They Force Vassalized us

**−100**

**+2**

They forced us into a Union

**−100**

**+2**

They voted for us

**+25**

**−2**

**+25**

Elector voted for us.

They changed their vote from us

**−25**

**+1**

**−25**

Elector stopped voting for us.

Returned a province to us

**+25**

**−1**

**+25**

Gave away our province

**−25**

**+1**

**−75**

Liberated our province

**+25**

**−1**

**+25**

Recaptured a province that was occupied by a hostile third party.

Defended our provinces

**+10**

**−1**

**+20**

Defeated an army that was sieging their province.

Insulted

**−50**

**+5**

0

Duration of 10 years

Scornfully insulted

**−100**

**+5**

0

Duration of 10 years

Scornfully insulted the enemy

**+25**

**−2.5**

**+25**

Duration of 10 years

Revoked Electorate

**−50**

**+2**

Grant Electorate

**+50**

**−1**

Revoked our Electorate

**−200**

**+8**

Revoked an Electorate

**−100**

**+2**

Same religion

Revoked an Electorate

**−50**

**+2**

Other religion

Grant Free City Status

**+25**

**−1**

Revoked our Free City status

**−100**

**+4**

Honored Alliance

**+10**

**−1**

**+10**

Broke Alliance

**−50**

**+1**

Forced Break Alliance

**−50**

**+2**

Applies to both the target country and the country they are forced to break alliance with.

Broke Royal Marriage

**−75**

**+3**

Broke Alliance in wartime

**−50**

**+1**

Dishonoured Alliance

**−50**

**+5**

Declared War

**−25**

**+1**

against the country

Was at War

**−15**

**+1**

against the country

Declared War On Neighbor

**−10**

**+1**

Duration of 10 years

Violated Truce

**−100**

**+1**

Duration of 100 years with target nation

Violated Truce Against Neighbor

**−25**

**+1**

Duration of 25 years with target nation

Separate Peace

**−30**

**+1**

Duration of 30 years with target nation

Fought to the end

**+10**

**−1**

**+20**

Duration of 1 year with allied country

Razed our provinces

**−25**

**+2**

**−200**

Conquered province without claim

**−5**

**+1**

Duration of 5 years with target nation

Conquered province of our religion group

**−10**

**+1**

**−10**

Conquered our province

**−25**

**+1**

Conquered Rival Province

**+15**

**−1**

Per war

Gave province in peace

**+10**

**−1**

Declared War on Enemy

**+10**

**−1**

Simply entering war against enemy counts.

Did Covert Actions

**−20**

**+5**

**−100**

Warned

**−10**

**+1**

Improved Relations

0

**−3**

**+200**

Max is +100 for independent countries, +200 for subjects (including tributaries). Ticks down on year change.

Sabotage Reputation

**−50**

Aggressive Expansion

**−1**

**+2**

**−1000**

Enforced Peace against

**−10**

**+1**

Enforced peace

**+10**

**−1**

Improved imperial relations

**+40**

0

for 20 years

Returned Province

**+40**

**−1**

core

Released in Peace

**+100**

**−1**

Removed provinces from the Empire

**−50**

**+1**

Left the Empire

**−100**

**+2**

Gave us Independence

**+100**

**−1**

Illegal War inside Japan

**−25**

**+1**

Broke Transfer Trade Power relation

**−20**

**+2**

Revoked March Status

**−50**

**+3**

Violated Treaty of Tordesillas

**−50**

**+1**

From the Papal State

Abandoned the Holy Roman Empire

**−100**

**+1**

Duration of 25 years

Forced us to return land

**−100**

**+2**

Towards emperor who demanded for unlawful territory when accepted

Unlawful territory

**−25**

**+1**

HRE nations towards non-HRE nations who refused the emperor's demand. Duration of 25 years.

Land restored to the Empire

**+20**

**−1**

Duration of 25 years.

Annexed a member of the Holy Roman Empire

**−25**

**+1**

HRE nations towards non-HRE nations who have annexed member provinces. Duration of 20 years.

Annexed vassal

**−30**

**+1**

Other vassals only (personal unions do not get the modifier). Disappears after 20 years from last annexation.

Send Gift

**+25**

**+25**

Duration of 5 years.

Broke free from us

**−50**

**+2**

Previous oppressor

**−50**

**+2**

Enforced Religious Unity

**−10**

**+1**

**−100**

Duration of 25 years.

Rejected Alliance

**−25**

**+1**

Supported Independence of our Subject

**−100**

**+1**

**−100**

Supported our Independence

**+100**

**−1**

**+100**

Rejected Support Independence offer

**−25**

**+1**

Supporting Independence of our Subject

**−100**

Supporting our Independence

**+50**

Broke Support Independence treaty

**−50**

**+1**

Was not given occupied cores and claims in the peace

**−1**

**+1**

Same Dynasty after Election

**+100**

**−2**

Dynasty lost Election

**−20**

**+1**

−20}}

Took on Debt

**+10**

**−2**

**+200**

Applied to the recipient of the Great Power's ability to take on foreign debt.

Influenced Relations

**+25**

Applied to nations who have had opinions influenced by the Great Power ability. Duration of 10 years.

Forced to Break Alliance

**−50**

**+2**

Applied to a nation who has been forced by a Great Power to abandon an alliance.

Caught Spy

**−30**

**+3**

Recently Declared Independence

**−50**

**+5**

**−50**

Threatened War

**−75**

**+3**

Share Advanced Neighbor

**+50**

**+50**

Updated every month

Raided Coast

**−25**

**+1**

**−100**

Modifier is per province, e.g. raiding a single sea tile can max it.

Tributary

**+15**

Forced to be Tributary

**−100**

**+2**

Applied to a nation who has been forcefully made into a tributary through war.

Tributary Broke Free

**−50**

+2}}

**−5**

Applied to the overlord of a recently broken free tributary state.

Abandoned by our Overlord

**−50**

+2}}

**−50**

Applied to a nation that has had their tributary status revoked.

#### Historical friends and rivals\[[edit](/index.php?title=Relations&veaction=edit&section=13 "Edit section: Historical friends and rivals") | [edit source](/index.php?title=Relations&action=edit&section=13 "Edit section: Historical friends and rivals")\]

Historical friends and historical rivals are pre-set by the [scenario's](/Scenarios "Scenarios") starting conditions, and do not change over time (except by [events](/Event "Event")). These modifiers don't only affect relations by giving **−25** or **+25** bonus.

Historical rivals will almost always rival each other and if that's no longer possible, they will never make an alliance. If historical rival country is a [vassal](/Vassal "Vassal") or [lesser partner](/Personal_union "Personal union") in personal union, it will have **+50%** [liberty desire](/Liberty_desire "Liberty desire") modifier. For example: Oirat and their vassal Mongolia, Denmark and Sweden after [The Scandinavian Constitution](/Danish_events#The_Scandinavian_Constitution "Danish events") event.

Historical friends on the contrary will gladly and often make alliance with each other. If historical friend become a vassal or lesser partner in personal union, it will have **\-50%** liberty desire, which makes this relation very stable. A good example for this is Polish-Lithuanian union. Historical friendship can be removed by [Growing Animosity](/Friendship_events "Friendship events") event, that can occur when historical friends are fighting each other.

List of historical friends in 1444:

*    [![Flag of Austria](/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") – [![Flag of Hungary](/images/thumb/6/6a/Hungary.png/20px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")
*    [![Flag of Bosnia](/images/thumb/a/ad/Bosnia.png/20px-Bosnia.png)](/Bosnia "Bosnia") [Bosnia](/Bosnia "Bosnia") – [![Flag of Serbia](/images/thumb/7/76/Serbia.png/20px-Serbia.png)](/Serbia "Serbia") [Serbia](/Serbia "Serbia")
*    [![Flag of Bremen](/images/thumb/c/c4/Bremen.png/20px-Bremen.png)](/Bremen "Bremen") [Bremen](/Bremen "Bremen") – [![Flag of Hamburg](/images/thumb/e/e6/Hamburg.png/20px-Hamburg.png)](/Hamburg "Hamburg") [Hamburg](/Hamburg "Hamburg")
*    [![Flag of Bremen](/images/thumb/c/c4/Bremen.png/20px-Bremen.png)](/Bremen "Bremen") [Bremen](/Bremen "Bremen") – [![Flag of Lübeck](/images/thumb/0/09/L%C3%BCbeck.png/20px-L%C3%BCbeck.png)](/L%C3%BCbeck "Lübeck") [Lübeck](/L%C3%BCbeck "Lübeck")
*    [![Flag of Bremen](/images/thumb/c/c4/Bremen.png/20px-Bremen.png)](/Bremen "Bremen") [Bremen](/Bremen "Bremen") – [![Flag of Riga](/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga")
*    [![Flag of Castile](/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile") – [![Flag of Portugal](/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")
*    [![Flag of Denmark](/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark") – [![Flag of Norway](/images/thumb/0/0f/Norway.png/20px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")
*    [![Flag of Hamburg](/images/thumb/e/e6/Hamburg.png/20px-Hamburg.png)](/Hamburg "Hamburg") [Hamburg](/Hamburg "Hamburg") – [![Flag of Lübeck](/images/thumb/0/09/L%C3%BCbeck.png/20px-L%C3%BCbeck.png)](/L%C3%BCbeck "Lübeck") [Lübeck](/L%C3%BCbeck "Lübeck")
*    [![Flag of Hamburg](/images/thumb/e/e6/Hamburg.png/20px-Hamburg.png)](/Hamburg "Hamburg") [Hamburg](/Hamburg "Hamburg") – [![Flag of Riga](/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga")
*    [![Flag of Kochin](/images/thumb/2/25/Kochin.png/20px-Kochin.png)](/Kochin "Kochin") [Kochin](/Kochin "Kochin") – [![Flag of Vijayanagar](/images/thumb/3/31/Vijayanagar.png/20px-Vijayanagar.png)](/Vijayanagar "Vijayanagar") [Vijayanagar](/Vijayanagar "Vijayanagar")
*    [![Flag of Lithuania](/images/thumb/d/d9/Lithuania.png/20px-Lithuania.png)](/Lithuania "Lithuania") [Lithuania](/Lithuania "Lithuania") – [![Flag of Poland](/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")
*    [![Flag of Livonian Order](/images/thumb/8/81/Livonian_Order.png/20px-Livonian_Order.png)](/Livonian_Order "Livonian Order") [Livonian Order](/Livonian_Order "Livonian Order") – [![Flag of Riga](/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga")
*    [![Flag of Livonian Order](/images/thumb/8/81/Livonian_Order.png/20px-Livonian_Order.png)](/Livonian_Order "Livonian Order") [Livonian Order](/Livonian_Order "Livonian Order") – [![Flag of Teutonic Order](/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order")
*    [![Flag of Lübeck](/images/thumb/0/09/L%C3%BCbeck.png/20px-L%C3%BCbeck.png)](/L%C3%BCbeck "Lübeck") [Lübeck](/L%C3%BCbeck "Lübeck") – [![Flag of Riga](/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga")
*    [![Flag of Portugal](/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal") – [![Flag of Spain](/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")
*    [![Flag of Theodoro](/images/thumb/1/11/Theodoro.png/20px-Theodoro.png)](/Theodoro "Theodoro") [Theodoro](/Theodoro "Theodoro") – [![Flag of Trebizond](/images/thumb/1/1f/Trebizond.png/20px-Trebizond.png)](/Trebizond "Trebizond") [Trebizond](/Trebizond "Trebizond")
*    [![Flag of Venice](/images/thumb/e/e1/Venice.png/20px-Venice.png)](/Venice "Venice") [Venice](/Venice "Venice") – [![Flag of The Knights](/images/thumb/8/84/The_Knights.png/20px-The_Knights.png)](/The_Knights "The Knights") [The Knights](/The_Knights "The Knights")

List of historical rivals in 1444 as defined in countries' history files.

Country

Rival

Mutual[\[8\]](#cite_note-8)

 [![Flag of Arawak](/images/thumb/4/41/Arawak.png/20px-Arawak.png)](/Arawak "Arawak") [Arawak](/Arawak "Arawak")

 [![Flag of Carib](/images/thumb/0/05/Carib.png/20px-Carib.png)](/Carib "Carib") [Carib](/Carib "Carib")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Byzantium](/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium")

 [![Flag of Ottomans](/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Castile](/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile")

 [![Flag of Granada](/images/thumb/a/a7/Granada.png/20px-Granada.png)](/Granada "Granada") [Granada](/Granada "Granada")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Can Pech](/images/thumb/1/17/Can_Pech.png/20px-Can_Pech.png)](/Can_Pech "Can Pech") [Can Pech](/Can_Pech "Can Pech")

 [![Flag of Cocomes](/images/thumb/1/1b/Cocomes.png/20px-Cocomes.png)](/Cocomes "Cocomes") [Cocomes](/Cocomes "Cocomes")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Cocomes](/images/thumb/1/1b/Cocomes.png/20px-Cocomes.png)](/Cocomes "Cocomes") [Cocomes](/Cocomes "Cocomes")

 [![Flag of Xiu](/images/thumb/4/4b/Xiu.png/20px-Xiu.png)](/Xiu "Xiu") [Xiu](/Xiu "Xiu")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of France](/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")

 [![Flag of Austria](/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Great Horde](/images/thumb/b/b7/Great_Horde.png/20px-Great_Horde.png)](/Great_Horde "Great Horde") [Great Horde](/Great_Horde "Great Horde")

 [![Flag of Ottomans](/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Great Horde](/images/thumb/b/b7/Great_Horde.png/20px-Great_Horde.png)](/Great_Horde "Great Horde") [Great Horde](/Great_Horde "Great Horde")

 [![Flag of Kazan](/images/thumb/3/33/Kazan.png/20px-Kazan.png)](/Kazan "Kazan") [Kazan](/Kazan "Kazan")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Austria](/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")

 [![Flag of Ottomans](/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Kanem Bornu](/images/thumb/e/e9/Kanem_Bornu.png/20px-Kanem_Bornu.png)](/Kanem_Bornu "Kanem Bornu") [Kanem Bornu](/Kanem_Bornu "Kanem Bornu")

 [![Flag of Yao](/images/thumb/c/cb/Yao.png/20px-Yao.png)](/Yao "Yao") [Yao](/Yao "Yao")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Khiva](/images/thumb/6/60/Khiva.png/20px-Khiva.png)](/Khiva "Khiva") [Khiva](/Khiva "Khiva")

 [![Flag of Uzbek](/images/thumb/7/73/Uzbek.png/20px-Uzbek.png)](/Uzbek "Uzbek") [Uzbek](/Uzbek "Uzbek")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Khiva](/images/thumb/6/60/Khiva.png/20px-Khiva.png)](/Khiva "Khiva") [Khiva](/Khiva "Khiva")

 [![Flag of Bukhara](/images/thumb/7/71/Bukhara.png/20px-Bukhara.png)](/Bukhara "Bukhara") [Bukhara](/Bukhara "Bukhara")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Kazakh](/images/thumb/1/15/Kazakh.png/20px-Kazakh.png)](/Kazakh "Kazakh") [Kazakh](/Kazakh "Kazakh")

 [![Flag of Uzbek](/images/thumb/7/73/Uzbek.png/20px-Uzbek.png)](/Uzbek "Uzbek") [Uzbek](/Uzbek "Uzbek")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Mamluks](/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks")

 [![Flag of Ottomans](/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Mamluks](/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks")

 [![Flag of Timurids](/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Mombasa](/images/thumb/2/2b/Mombasa.png/20px-Mombasa.png)](/Mombasa "Mombasa") [Mombasa](/Mombasa "Mombasa")

 [![Flag of Malindi](/images/thumb/b/b4/Malindi.png/20px-Malindi.png)](/Malindi "Malindi") [Malindi](/Malindi "Malindi")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Muscovy](/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy")

 [![Flag of Novgorod](/images/thumb/5/5e/Novgorod.png/20px-Novgorod.png)](/Novgorod "Novgorod") [Novgorod](/Novgorod "Novgorod")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Poland](/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")

 [![Flag of Teutonic Order](/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order")

[![Yes](/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")

 [![Flag of Pate](/images/thumb/e/e8/Pate.png/20px-Pate.png)](/Pate "Pate") [Pate](/Pate "Pate")

 [![Flag of Mombasa](/images/thumb/2/2b/Mombasa.png/20px-Mombasa.png)](/Mombasa "Mombasa") [Mombasa](/Mombasa "Mombasa")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Uzbek](/images/thumb/7/73/Uzbek.png/20px-Uzbek.png)](/Uzbek "Uzbek") [Uzbek](/Uzbek "Uzbek")

 [![Flag of Timurids](/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Timurids](/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids")

 [![Flag of Delhi](/images/thumb/d/d5/Delhi.png/20px-Delhi.png)](/Delhi "Delhi") [Delhi](/Delhi "Delhi")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Timurids](/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids")

 [![Flag of Multan](/images/thumb/9/94/Multan.png/20px-Multan.png)](/Multan "Multan") [Multan](/Multan "Multan")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

 [![Flag of Muscovy](/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy")

 [![Flag of Great Horde](/images/thumb/b/b7/Great_Horde.png/20px-Great_Horde.png)](/Great_Horde "Great Horde") [Great Horde](/Great_Horde "Great Horde")

[![No](/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No")

### Improving relations\[[edit](/index.php?title=Relations&veaction=edit&section=14 "Edit section: Improving relations") | [edit source](/index.php?title=Relations&action=edit&section=14 "Edit section: Improving relations")\]

There are several diplomatic actions available if a country wants to improve relations with another country.

*   [Improve Relations](/Diplomacy#Improve_relations "Diplomacy") action is the most direct way. A country can get up to **+100** (**+200** for a suzerain -> vassal relation) relation points with another country. It takes time and ties down a diplomat.
*   [Send Gift](/Diplomacy#Send_gift "Diplomacy") will get a country up to **+25** relation points for a one-time gift of money. The relation bonus will last for 5 years, effects from several gifts do not add up, only the last gift will affect relations.
*   [Give Subsidies](/Diplomacy#Give_subsidies "Diplomacy") will transfer a specified amount of money each month to the target country for a certain duration. Maintaining subsidies will improve the target country's relations with the subsidizer each month, up to a maximum of **+15**. This will disappear entirely once subsidies stop, unlike Improve Relations which ticks down over time.
*   [Offer Military Access](/Diplomacy#Offer_military_access "Diplomacy") to the target country, allowing their land armies to pass through the territory of the one who offered. Acceptance will raise the target country's opinion of the offering country by **+10**.
*   [Transfer Trade Power](/Diplomacy#Transfer_trade_power "Diplomacy") ask a target non-subject nation to transfer a percentage of its [trade](/Trade "Trade") power to the requester. Grants a mutual relation bonus of **+20** per 100% of power transferred. (only with [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/24px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") Wealth of Nations enabled)
*   [Influence Nation](/Great_power "Great power") gives **+25** with the target country for one time their yearly income, if you are [Great power](/Great_power "Great power") and the target nation is not. Lasts for 10 years and for that duration the target country receives a monarch point on whatever category it has the lowest influx of. (only with [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") Rights of Man enabled)
*   [Take on foreign debt](/Great_power "Great power") improves relations by **+10** for every loan of debt the target country has that you take over. Requires being a [Great power](/Great_power "Great power") while the target is not. (only with [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/24px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") Rights of Man enabled)

The following actions will tie down [Diplomatic Relations](/Diplomacy#Diplomatic_relations_cap "Diplomacy") point.

*   [Royal Marriage](/Diplomacy#Royal_marriage "Diplomacy") may arrange royal marriages with others. This will improve relations by **+25** while in effect. Only available to monarchies, Noble Republics and Dutch Republics.
*   [Proclaim Guarantee](/Diplomacy#Proclaim_guarantee "Diplomacy") will call the nation that guaranteed into the war if someone declares war on the guaranteed country. Grants the nation that guaranteed **+10** relation points.
*   [Offer Alliance](/Diplomacy#Offer_alliance "Diplomacy") proposes to form an alliance with the target nation. Grants **+50** relations if accepted.

Changing own opinion\[[edit](/index.php?title=Relations&veaction=edit&section=15 "Edit section: Changing own opinion") | [edit source](/index.php?title=Relations&action=edit&section=15 "Edit section: Changing own opinion")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.24.

Although human-controlled countries do not have game-defined _attitudes_ toward other nations (except their rivals, subjects and overlords), they still have numerical opinion values which enable or affect diplomatic options. For example,

*   In order to form an [alliance](/Alliance "Alliance"), opinion in both directions must be positive.
*   Declaring war against a country viewed too positively hurts stability.
*   In order to take the [decision](/Decision "Decision") to Revoke Restraint of Appeals, the country must have **+100** opinion of the Papal State.

If [Castile](/Castile "Castile") was to improve relations completely with [France](/France "France"). France would like Castile **+100** and Castile would like France **+50**. One way to raise one's own country's opinion of another country is to ask for [military access](/Military_access "Military access"). Other opinion modifiers work both ways: a [royal marriage](/Royal_marriage "Royal marriage"), having the same dynasty, rival modifiers and religion modifiers affect both countries' opinions.

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

[Diplomacy](/Diplomacy "Diplomacy") • [Diplomatic feedback](/Diplomatic_feedback "Diplomatic feedback") • [Envoy](/Envoy "Envoy") • [Espionage](/Espionage "Espionage")

Other

[Defender of the Faith](/Defender_of_the_Faith "Defender of the Faith") • [Great power](/Great_power "Great power") • [Hegemon](/Hegemon "Hegemon") • [Prestige](/Prestige "Prestige") • [Regions](/Regions "Regions")

Political structures

[Emperor of China](/Emperor_of_China "Emperor of China") • [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire") • [Papacy](/Papacy "Papacy")

Relations

[Personal union](/Personal_union "Personal union") • Relations • [Subject nation](/Subject_nation "Subject nation")

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

1.  [↑](#cite_ref-1 "Jump up") AE\_SAME\_RELIGION = 0.5 from /Europa Universalis IV/common/defines.lua
2.  [↑](#cite_ref-2 "Jump up") AE\_SAME\_RELIGION\_GROUP = 0.0 from /Europa Universalis IV/common/defines.lua
3.  [↑](#cite_ref-3 "Jump up") AE\_DIFFERENT\_RELIGION = -0.5 from /Europa Universalis IV/common/defines.lua
4.  [↑](#cite_ref-4 "Jump up") AE\_SAME\_RELIGION = 0.5 from /Europa Universalis IV/common/defines.lua is used and **not** AE\_INFIDEL\_CONQUEST = 0.25
5.  [↑](#cite_ref-5 "Jump up") AE\_SAME\_CULTURE = 0.5 from /Europa Universalis IV/common/defines.lua
6.  [↑](#cite_ref-6 "Jump up") AE\_SAME\_CULTURE\_GROUP = 0.25 from /Europa Universalis IV/common/defines.lua
7.  [↑](#cite_ref-7 "Jump up") AE\_HRE\_INTERNAL = 0.5 from /Europa Universalis IV/common/defines.lua
8.  [↑](#cite_ref-8 "Jump up") Not mutual means that second country doesn't have the first as a historical rival.

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Relations&oldid=154615](https://eu4.paradoxwikis.com/index.php?title=Relations&oldid=154615)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.24](/Category:1.24 "Category:1.24")
*   [Expand](/Category:Expand "Category:Expand")
*   [Diplomacy](/Category:Diplomacy "Category:Diplomacy")
*   [Realm](/Category:Realm "Category:Realm")

Hidden category:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")