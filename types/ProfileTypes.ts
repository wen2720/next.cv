export type IconText = {
    icon: React.ElementType,
    id: string
}

export type SpecialSkills = [IconText, string[]]

export type Contacts = [IconText, IconText[]]

export type SpeakingLanguage = {
    language: string,
    level: string
}

export type LanguageSkills = [IconText, SpeakingLanguage[]]


