import {Component} from "./Component";

export class Entity {
  private static readonly _count = 0;
  public id: number/* = (+new Date()).toString(16) + (Math.random() * 100000000 | 0).toString(16) +  this._count */;
  public components: Component[] = [];

  constructor() {
    this.id = this._count++;
  }

  addComponent(component: Component): this {
    this.components[component.name] = component;
    // add the entity to the list of entities with this component.
    Component.all[component.name].add(this.id);
    return this;
  }

  removeComponent(componentName: string | Function): this {
    let name = componentName;
    if (typeof name === 'function') {
      name = componentName.name
    }
    // remove the entity from the list of entities with this component.
    Component.all[name].delete(this.id);
    return this;
  }

  print(): this {
    // Function to print / log information about the entity
    console.log(JSON.stringify(this, null, 2));
    return this;
  };
}
