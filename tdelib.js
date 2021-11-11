//
// REFERENCE: 
// The Dark Eye Game Reference
// https://ulisses-regelwiki.de/home.html
//

class Publication {
    constructor (name) {
        this.name = name;
    }
}

class Reference {
    constructor (publication, location) {
        this.publication = publication;
        this.location = location;
    }
}

class ExperienceLevel {
    constructor (reference, name, adventurePoints, maximumAttributeValue, maximumSkillValue, maximumCombatTechnique, maximumAttributeTotal, totalSpellsOrChants) {
        this.reference = reference;
        this.name = name;
        this.adventurePoints = adventurePoints;
        this.maximumAttributeValue = maximumAttributeValue;
        this.maximumSkillValue = maximumSkillValue;
        this.maximumCombatTechnique = maximumCombatTechnique;
        this.maximumAttributeTotal = maximumAttributeTotal;
        this.totalSpellsOrChants = totalSpellsOrChants;
    }
}

class Language {
    constructor (name) {
        this.name = name;
    }
}

class Script {
    constructor (name) {
        this.name = name;
    }
}

class ProfessionType {
    constructor (name) {
        this.name = name;
    }
}

class ProfessionSubtype {
    constructor (name) {
        this.name = name;
    }
}

class Profession {
    constructor (professonType, professionSubtype, name) {
        this.professonType = professonType;
        this.professionSubtype = professionSubtype;
        this.name = name;
    }
}

class Perk {
    constructor () {
        // TODO: ...
    }
}

class Advantage extends Perk {
    // TODO: ...
}

class Disadvantage extends Perk {
    // TODO: ...
}

class Skill {
    constructor (name) {
        this.name = name;
    }
}

class Name {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Culture {
    constructor (reference, name, language, script, areaKnowledge, socialStatus, commonProfessions, commonAdvantages, commonDisadvantages, uncommonAdvantages, uncommonDisadvantages, commonSkills, uncommonSkills, commonNames) {
        this.reference = reference;
        this.name = name;
        this.language = language;
        this.script = script;
        this.areaKnowledge = areaKnowledge;
        this.socialStatus = socialStatus;
        this.commonProfessions = commonProfessions;
        this.commonAdvantages = commonAdvantages;
        this.commonDisadvantages = commonDisadvantages;
        this.uncommonAdvantages = uncommonAdvantages;
        this.uncommonDisadvantages = uncommonDisadvantages;
        this.commonSkills = commonSkills;
        this.uncommonSkills = uncommonSkills;
        this.commonNames = commonNames;
    }
}

class CulturalPackage {
    // TODO: 
}

class Attribute {
    constructor (name, code) {
        this.name = name;
        this.code = code;
    }
}

class AttributeCost {
    // TODO: 
}

class BaseValue {
    constructor (attribute, value) {
        this.attribute = attribute;
        this.value = value;
    }
}

class Adjustment {
    constructor (value) {
        this.value = value;
    }
}

class AttributeAdjustment {
    constructor (attribute, adjustment) {
        this.attribute = attribute;
        this.adjustment = adjustment;
    }
}

class Race {
    constructor (reference, name, cost, baseValues, attributeAdjustments, recommendedAdvantages, recommendedDisadvantages, commonCultures, commonAdvantages, commonDisadvantages, uncommonAdvantages, uncommonDisadvantages) {
        this.reference = reference;
        this.name = name;
        this.cost = cost;
        this.baseValues = baseValues;
        this.attributeAdjustments = attributeAdjustments;
        this.recommendedAdvantages = recommendedAdvantages;
        this.recommendedDisadvantages = recommendedDisadvantages;
        this.commonCultures = commonCultures;
        this.commonAdvantages = commonAdvantages;
        this.commonDisadvantages = commonDisadvantages;
        this.uncommonAdvantages = uncommonAdvantages;
        this.uncommonDisadvantages = uncommonDisadvantages;
    }
}

class SpecialAbility {
    // TODO: ...
}

class KarmaAbility extends SpecialAbility {
    // TODO: ...
}

class MagicType {
    // TODO: ...
}

class MagicAbility /* extends SpecialAbility */ {
    // TODO: 
}

class EquipmentType {
    // TODO: ...
}

class Equipment {
    // TODO: ...
}

class Armour extends Equipment {
    // TODO: ...
}

class Artifacts extends Equipment {
    // TODO: ...
}

class Elixirs extends Equipment {
    // TODO: ...
}

class Weapon extends Equipment {
    // TODO: ...
}

class Character {
    constructor () {
        // TODO: ...
    }
}

//
// data
//

const Defaults = {
    StartingAttributeValue: 8,
    AttributeBreakpoint: 14
}

const Publications = {
    CoreRules: new Publication("Core Rules"),
    TDEGameReference: new Publication("TDE Game Reference")
}

const ExperienceLevels = {
    Inexperienced: new ExperienceLevel(new Reference(Publications.CoreRules, "page 38"), "Inexperienced", 900, 12, 10, 8, 95, 8, 0),
    Ordinary: new ExperienceLevel(new Reference(Publications.CoreRules, "page 38"), "Ordinary", 1000, 13, 10, 10, 98, 10, 1),
    Experienced: new ExperienceLevel(new Reference(Publications.CoreRules, "page 38"), "Experienced", 1100, 14, 10, 12, 100, 12, 2),
    Competent: new ExperienceLevel(new Reference(Publications.CoreRules, "page 38"), "Competent", 1200, 15, 13, 14, 102, 14, 3),
    Masterly: new ExperienceLevel(new Reference(Publications.CoreRules, "page 38"), "Masterly", 1400, 16, 16, 16, 105, 16, 4),
    Brilliant: new ExperienceLevel(new Reference(Publications.CoreRules, "page 38"), "Brilliant", 1700, 17, 19, 18, 109, 18, 5),
    Legendary: new ExperienceLevel(new Reference(Publications.CoreRules, "page 38"), "Legendary", 2100, 18, 20, 20, 114, 20, 6)
}

const Attributes = {
    Agility: new Attribute("Agility", "AGI"),
    Charisma: new Attribute("Charisma", "CHA"),
    Constitution: new Attribute("Constitution", "CON"),
    Courage: new Attribute("Courage", "COU"),
    Dexterity: new Attribute("Dexterity", "DEX"),
    Intuition: new Attribute("Intuition", "INT"),
    Sagacity: new Attribute("Sagacity", "SGC"),
    Strength: new Attribute("Strength", "STR")
}

const Races = {
    Dwarf: new Race(
        new Reference(Publications.CoreRules, "page 94"), 
        "Dwarf", 
        61, 
        null
    ),
    Elf: new Race(
        new Reference(Publications.CoreRules, "page 91"), 
        "Elf", 
        18, 
        null
    ),
    HalfElf: new Race(
        new Reference(Publications.CoreRules, "page 92"), 
        "HalfElf", 
        0, 
        null
    ),
    Human: new Race(
        new Reference(Publications.CoreRules, "page 89"), 
        "Human", 
        0, 
        null
    )
}

const ProfessionTypes = {
    Blessed: new ProfessionType("Blessed"),
    Magical: new ProfessionType("Magical"),
    Mundane: new ProfessionType("Mundane")
}

const ProfessionSubtypes = {
    BlessedOnesOfTheTwelveGods: new ProfessionSubtype("Blessed Ones of the twelve Gods"),
    Elves: new ProfessionSubtype("Elves"),
    GuildMages: new ProfessionSubtype("Guild Mages"),
    Witches: new ProfessionSubtype("Witches"),
    Fighters: new ProfessionSubtype("Fighters"),
    Mundane: new ProfessionSubtype("Mundane")
}

const Professions = {
    BlessedOneOfBoron: new Profession(ProfessionTypes.Blessed, ProfessionSubtypes.BlessedOnesOfTheTwelveGods, "Blessed One of Boron"),
    BlessedOneOfHesinde: new Profession(ProfessionTypes.Blessed, ProfessionSubtypes.BlessedOnesOfTheTwelveGods, "Blessed One of Hesinde"),
    BlessedOneOfPeraine: new Profession(ProfessionTypes.Blessed, ProfessionSubtypes.BlessedOnesOfTheTwelveGods, "Blessed One of Peraine"),
    BlessedOneOfPhex: new Profession(ProfessionTypes.Blessed, ProfessionSubtypes.BlessedOnesOfTheTwelveGods, "Blessed One of Phex"),
    BlessedOneOfPraios: new Profession(ProfessionTypes.Blessed, ProfessionSubtypes.BlessedOnesOfTheTwelveGods, "Blessed One of Praios"),
    BlessedOneOfRondra: new Profession(ProfessionTypes.Blessed, ProfessionSubtypes.BlessedOnesOfTheTwelveGods, "Blessed One of Rondra"),
    
    // Elves
    Spellweaver: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.Elves, "Spellweaver"),
    Wyldrunner: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.Elves, "Wyldrunner"),

    // Guild Mages
    BlackMage: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.GuildMages, "Black Mage (Fasar Academy of Mental Power)"),
    GrayMage: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.GuildMages, "Gray Mage (Lowangen School of Tranformation)"),
    GuidlessMage: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.GuildMages, "Guidless Mage (Student of Magister Dagabor)"),
    WhiteMage: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.GuildMages, "White Mage (Gareth Academy of Sword and Staff)"),

    // Witches
    CatWitch: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.Witches, "Cat Witch"),
    RavenWitch: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.Witches, "Raven Witch"),
    ToadWitch: new Profession(ProfessionTypes.Magical, ProfessionSubtypes.Witches, "Toad Witch"),

    // Fighter
    Gladiator: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Fighters, "Gladiator"),
    Guard: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Fighters, "Guard"),
    Knight: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Fighters, "Knight"),
    Mercenary: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Fighters, "Mercenary"),
    TribalWarrior: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Fighters, "Tribal Warrior"),
    Warrior: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Fighters, "Warrior"),

    // Mundane
    Bard: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Bard"),
    Courtier: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Courtier"),
    Healer: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Healer"),
    Hunter: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Hunter"),
    Merchant: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Merchant"),
    Performer: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Performer"),
    Rogue: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Rogue"),
    Sailor: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Sailor"),
    Spy: new Profession(ProfessionTypes.Mundane, ProfessionSubtypes.Mundane, "Spy")
}

