import {RootStoreType} from '../store';
import {IPost} from '../../types/types';

export const selectorPosts = (store: RootStoreType): IPost[] => store.posts