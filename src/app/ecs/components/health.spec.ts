import {Health} from "./health";
import {Entity} from "../Entity";

describe('Health', () => {
  it('should be created', () => {
    let en = new Entity();
    en.addComponent(new Health(30));
    console.log(en.toString());
  });
});
