export interface __Config {
    id: number;
    aboutus: string;
    countries: number;
    exprienceYear: number;
    projectCount: number;
    projects: number;
}
export interface __TopBanner {
    id: number;
    imageurl: string;
    enable: boolean;
    firstTxt: string;
    secondTxt: string;
}
export interface __CategoryList {
    id: number;
    imageurl: string;
    title: string;
    enable: boolean;
}
export interface __Award {
    enable: boolean;
    id: number;
    imageurl: string;
    title: string;
}
export interface __RecentProject {
    categoryEntity: __CategoryList;
    eighthimg: string;
    eighthtxt: string;
    enable: boolean;
    fifthimg: string;
    fifthtxt: string;
    firstPage: boolean;
    firstimg: string;
    firsttxt: string;
    fourthimg: string;
    fourthtxt: string;
    id: number;
    ninthimg: string;
    ninthtxt: string;
    position: number;
    secondimg: string;
    secondtxt: string;
    seventhimg: string;
    seventhtxt: string;
    sixthimg: string;
    sixthtxt: string;
    tenthimg: string;
    tenthtxt: string;
    thirdimg: string;
    thirdtxt: string;
    thumbnailimg: string;
    title: string;
}
export interface __History {
    id: number;
    image: string;
    firsttxt: string;
    secondtxt: string;
    enable: boolean;
}
export interface __BlogList {
    eighthimg: string;
    eighthtxt: string;
    enable: boolean;
    fifthimg: string;
    fifthtxt: string;
    firstPage: boolean;
    firstimg: string;
    firsttxt: string;
    fourthimg: string;
    fourthtxt: string;
    id: number;
    ninthimg: string;
    ninthtxt: string;
    secondimg: string;
    secondtxt: string;
    seventhimg: string;
    seventhtxt: string;
    sixthimg: string;
    sixthtxt: string;
    tenthimg: string;
    tenthtxt: string;
    thirdimg: string;
    thirdtxt: string;
    thumbnailimg: string;
    title: string;
}
