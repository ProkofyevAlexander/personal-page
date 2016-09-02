import { IPagePart } from '../page-about-me.types';

export interface IPageAboutMeContentItem<DataType> {
    pagePart: IPagePart<DataType>;
    pagePartIndex: number;
}
