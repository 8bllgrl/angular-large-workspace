// export class Article {
//     title!: string;
//     informationBox!: InformationBox;
//     sections!: Section[];
// }

// export class InformationBox {
//     title!: string;
//     properties!: { key: string, value: string }[];
// }

// export class Section {
//     header!: string;
//     subheader?: string;
//     bodyText!: string;
// }
// article-section/article.model.ts
export class Article {
    title: string;
    informationBox: InformationBox;
    sections: Section[];
    
    constructor() {
        this.title = 'Lobotomy Corp';
        this.informationBox = { title: 'Aaaaa', properties: [] };
        this.sections = [];
    }
}

export class InformationBox {
    title: string;
    properties: { key: string, value: string }[];
    
    constructor() {
        this.title = '';
        this.properties = [];
    }
}

export class Section {
    header: string;
    subheader?: string;
    bodyText: string;
    
    constructor() {
        this.header = '';
        this.bodyText = '';
    }
}
