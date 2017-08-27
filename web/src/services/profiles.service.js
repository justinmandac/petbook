/**
 * @fileoverview API calls for retrieving profiles and profile data.
 */

const mockProfiles = [
    {
      id: 1,
      userId: 1,
      name: 'Bochog',
      birthday: '2010-11-05',
      profilePhoto: '',
      description: '',
      dietaryNotes: '',
      typebreed: 'Mongrel',
    },
    {
      id: 2,
      userId: 1,
      name: 'Kong King',
      birthday: '2015-01-01',
      profilePhoto: '',
      description: 'Black, fluffy, and annoying as hell',
      dietaryNotes: '',
      typebreed: 'Chow-chow',
    },
    {
      id: 3,
      userId: 1,
      name: 'Blondie',
      birthday: '2012-04-12',
      profilePhoto: '',
      description: 'Butt-ugly',
      dietaryNotes: '',
      typebreed: 'Mini Pinscher',
    },
];

/** @constructor */
export function PetProfileItem() {}

/** @type {number} */
PetProfileItem.prototype.id = -1;

/** @type {string} */
PetProfileItem.prototype.name = '';

/** @type {string} */
PetProfileItem.prototype.typebreed = '';

/** @constructor */
export function PetProfile() {}
PetProfile.prototype = new PetProfileItem();

/** @type {(!Date|string)} */
PetProfile.prototype.birthday = '';

/** @type {string} */
PetProfile.prototype.description = '';

/** @type {string} */
PetProfile.prototype.dietaryNotes = '';

/** @type {string} */
PetProfile.prototype.profilePhoto = '';

/** @type {numner} */
PetProfile.prototype.userId = -1;

/**
 * Retrieves the list of pets owned by the user possessing the
 * provided ID.
 * 
 * @param {number} id ID of the user/pet owner.
 * @return {!Promise<!Array<!PetProfileItem>>}
*/
export function GetProfiles(id) {
    return new Promise((resolve, reject) => {
      const resolvedProfileItems = mockProfiles
        .filter(({ userId }) => userId == id)
        .map(({ id, name, typebreed }) => {
          /** @type {!PetProfileItem} */
          const item = new PetProfileItem();

          item.id = id;
          item.name = name;
          item.typebreed = typebreed;

          return item;
        });
        
        resolve(resolvedProfileItems);
    });
}

/**
 * @param {number} userId
 * @param {number} profileId
 * @return {!Promise<(!Object|undefined)>}
*/
export function GetProfile(userId, profileId) {
    return new Promise((resolve, reject) => {
      const resolvedProfiles = 
        mockProfiles.filter(({ id }) => id == profileId) || [];
      const retrivedProfile = resolvedProfiles.shift();

      if (typeof retrivedProfile == 'undefined') {
        reject();
        return;
      }

      /** @type {!PetProfile} */
      const profile = new PetProfile();

      Object.keys(retrivedProfile).forEach((key) => {
        profile[key] = retrivedProfile[key];
      });

      resolve(profile);
    });
}