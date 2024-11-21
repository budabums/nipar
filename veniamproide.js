function collect(values) {
  return values.split(',').reduce((acc, current) => acc.concat([current]), []);
}
