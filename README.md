rework-plugin-prefix-selectors
====================

[![Build Status](https://travis-ci.org/reworkcss/rework-plugin-prefix-selectors.png)](https://travis-ci.org/reworkcss/rework-plugin-prefix-selectors)

### .prefixSelectors(string)

Prefix selectors with the given `string`.

```css
h1 {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #ddd;
}
```

yields:

```css
#dialog h1 {
  font-weight: bold;
}

#dialog a {
  text-decoration: none;
  color: #ddd;
}
```
