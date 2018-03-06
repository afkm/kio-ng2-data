import { KioNodeModel } from './kio-node'
import { KioContent } from '../interfaces'

export class KioContentModel extends KioNodeModel {

  constructor ( data:any, parent?:any ) {
    super(data,parent)

    if ( 'data' in data ) {
      this._data = data.data
    } else if ( 'text' in data ) {
      this._data = data.text
    }

    this.text = data.text
  }

  // only for nodes of type TXT
  readonly text : string

  get isKioContent(){
    return true
  }

  get isLoaded () {
    return this._data !== null
  }

  private _data : any = null

  get data(){
    return this._data
  }

  set data ( $data ) {
    this._data = $data
  }

  toObject():KioContent {
    return Object.assign ( {} , super.toObject() , {data: this._data} )
  }
}
