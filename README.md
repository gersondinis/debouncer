# debouncer / debounce
Simple debouncer with identifiers


## Get started:
- **Install** `yarn add @grd/debouncer`
- **Import** the _helper_: `import {debounce} from '@grd/debouncer';`
- **Import** the _instance_: `import {debouncer} from '@grd/debouncer';`
<hr/>


## API:
- debounce(fn: `function`[, delay: `number` = 250][, identifier: `string` = 'DEFAULT']): `Debouncer`
- clearAll(): `Debouncer` :: _Clear all pending timeouts._
- clear(identifier: `string`): `Debouncer`  :: _Clear a specific timeout._
- getAll(): `Object`  :: _Get the timout id's and associated identifiers._
- setDefaultDelay(delay: `number`): `Debouncer`  :: _Sets the default delay._

`Note: delay = 0 will invoke the function immediately.`
<hr/>

## The `debounce` helper:

### Example 1 - Simple use of `debounce` helper method:
```js
import {debounce} from '@grd/debouncer';

<button onClick={() => {
    debounce(() => console.log('Some debounced handler'), 800)
}}>
    Example 1
</button>
```
### Example 2 - With `identifier` (_Preventing parallel issues_):
##### With no identifiers the second debounce call would cancel the first one.
```js
import {debounce} from '@grd/debouncer';

<button onClick={() => {
    debounce(() => console.log('Debounced handler A'), 800, 'A')
    debounce(() => console.log('Debounced handler B'), 800, 'B')
}}>
    Simple use case with identifiers
</button>
```
<hr/>

## The `debouncer` instance:

#### Example 1 - Clear all pending timeouts:
```js
import {debouncer} from '@grd/debouncer';

<button onClick={() => {
    debouncer.debounce(() => console.log('Some debounced handler'), 8000)
}}>
    Example 1
</button>

<button onClick={() => debouncer.clearAll()}>
    Clear all pending timouts
</button>

```

#### Example 2 - Using `unique identifiers` to prevent concurrency issues, and clearing them:
```js
import {debouncer} from '@grd/debouncer';

<button onClick={() => {
    debouncer.debounce(() => console.log('Debounced handler A'), 1000, 'A')
    debouncer.debounce(() => console.log('Debounced handler B'), 2000, 'B')
    debouncer.debounce(() => console.log('Debounced handler C'), 3000, 'C')
}}>
    Example 2
</button>

<button onClick={() => debouncer.clear('C')}>
    Clear a specific timeout
</button>

```

#### Example 3 - Also you can access all pending timout id's:
```js
import {debouncer} from '@grd/debouncer';

<button onClick={() => {
    debouncer.debounce(() => console.log('Debounced handler A'), 1000, 'A')
    debouncer.debounce(() => console.log('Debounced handler B'), 2000, 'B')
    debouncer.debounce(() => console.log('Debounced handler C'), 3000, 'C')
}}>
    Example 3
</button>

<button onClick={() => console.log(debouncer.getAll())}>
    Get the timout id's and associated identifiers
</button>

//{DEFAULT: 0, A: 1, B: 2, C: 3}
```
<hr/>

## The `debouncer` class:

#### Example 1 - Same debouncer instance `API` but you choose the scope `[by default is application wide]`:
```js
import {Debouncer} from '@grd/debouncer';

const debouncerA = new Debouncer();
const debouncerB = new Debouncer(600); //You can pass a default delay.

<button onClick={() => {
    debouncerA.debounce(() => console.log('Some debounced handler'), 8000)
    debouncerB.debounce(() => console.log('Some debounced handler'), 8000)
}}>
    Example 1
</button>

```