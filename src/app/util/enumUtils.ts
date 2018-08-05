class EnumUtils {

    public static readonly size = <T extends {}>(enumDefinition: T): number => {
        const half: number = 2;

        return Object.keys(enumDefinition).length / half;
    }

    public static readonly getRandom = <T extends {}>(enumDefinition: T): number =>
        Math.floor(Math.random() * EnumUtils.size(enumDefinition))

}
