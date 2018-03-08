import {Component} from "./Component";

export class Entity {
  private static _count: number = 0;
  public id: number/* = (+new Date()).toString(16) + (Math.random() * 100000000 | 0).toString(16) +  this._count */;
  public components: Map<string, Component> = new Map();

  constructor() {
    this.id = Entity._count++;
  }

  addComponent(component: Component): this {
    this.components[component.constructor.name] = component;
    // add the entity to the list of entities with this component.
    Component.all[component.constructor.name].add(this.id);
    return this;
  }

  removeComponent(componentName: string | Function): this {
    let name: string;
    if (typeof componentName === 'function') {
      name = componentName.name;
    } else {
      name = componentName;
    }
    // remove the entity from the list of entities with this component.
    Component.all[name].delete(this.id);
    this.components.delete(name);
    return this;
  }

  toString(): string {
    // Function to print / log information about the entity
    return JSON.stringify(this, null, 2);
  };
}
