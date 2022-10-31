import { isNotUndefined } from './isNotUndefined';
import { isNotNull } from './isNotNull';

export const attrHas = (value) => isNotUndefined(value) && isNotNull(value);
