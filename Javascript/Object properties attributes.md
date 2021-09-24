- Every object property has these attributes:

  - Value: value of the property.
  - writable:  the value can be updated ?
  - enumerable: the value can be included when enumerating the object members?
  - configurable: property can be deleted?

- We can get these attributes by `getOwnPropertyDesciptor` method

  ```
  Object.getOwnPropertyDescriptor(<object name> , <property name>)
  ```

  