/**
 * @fileoverview Events Service
*/

/** @constructor */
export function PetEventListItem() {};

/** @type {(!Date|string)} */
PetEventListItem.prototype.date = null;

/** @type {string} */
PetEventListItem.prototype.title = '';

/** @type {string} */
PetEventListItem.prototype.type = '';

/** @type {string} */
PetEventListItem.prototype.notes = '';

/** @type {string} */
PetEventListItem.prototype.location = '';

/** @enum {number} */
export const ORDER_VALUES = {
  ASC: 1,
  DESC: -1,
};

/**
 * @param {number} userId
 * @param {(!Date|string)} startDate
 * @param {(!Date|string)} endDate
 * @param {ORDER_VALUES=} order
 * @return {!Promise<!Array<!PetEventItem>>}
*/
export function GetEvents(
  userId,
  startDate,
  endDate,
  order = ORDER_VALUES.DESC) {

}

/**
 * @param {number} userId
 * @param {number} eventId
 * @return {!Promise<>}
*/
export function GetEventDetails(userId, eventId) {

}

/**
 * @param {number} petId
 * @param {(!Date|string)} startDate
 * @param {(!Date|string)} endDate
 * @param {ORDER_VALUES=} order 
 * @return {!Promise<!Array<!Object>>}
*/
export function GetPetEvents(
  petId,
  startDate,
  endDate,
  order = ORDER_VALUES.DESC) {

}
