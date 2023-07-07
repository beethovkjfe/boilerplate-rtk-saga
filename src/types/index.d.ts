import { Store } from 'redux';
import { Saga } from '@redux-saga/types';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: Saga | (() => IterableIterator<any>) | undefined, args: any | undefined): any;
}

export declare interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}
