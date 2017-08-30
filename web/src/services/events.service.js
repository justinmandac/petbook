/**
 * @fileoverview Events Service
*/
import {GetProfiles} from './profiles.service';

const mockPetEvents = [
  {
    petId: 1,
    id: 1,
    title: '5-in-1 Vaccination',
    location: 'Paraan Veterinary Clinic, Antipolo',
    datetime: '2017-09-14',
    type: 'Vaccination',
    notes: 'n/a',
    frequency: '90'
  },
  {
    petId: 1,
    id: 2,
    title: 'Bath',
    location: 'Home',
    datetime: '2017-09-01T11:00:00',
    type: 'Bath',
    notes: 'n/a',
    frequency: '14',
  },
];


/** @constructor */
export function PetEventListItem() {};

/** @type {(!Date|string)} */
PetEventListItem.prototype.datetime = null;

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
  return GetProfiles(userId).then((profiles) => {
    // Attach events along with the pet profile they belong two.
    return profiles.map((profile) => {
      profile
      return {
        profile,
        events: mockPetEvents.filter((event) => event.petId === profile.id),
      };
    });   
  })
  .then(events => events.map(({events, profile}) => {
    return events.map((event) => {
      event.profile = {
        id: profile.id,
        name: profile.name,
        typebreed: profile.typebreed,
      };
      return event; 
    });
  }))
  .then((events) => events.reduce((acc, curr) => acc.concat(curr)), [])
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
  return new Promise((resolve, reject) => {
    const filteredEvents = 
      mockPetEvents.filter(({petId :id}) => id == petId);
    resolve(filteredEvents);
  });
}
