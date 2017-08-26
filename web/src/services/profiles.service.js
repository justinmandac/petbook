/**
 * @fileoverview API calls for retrieving profiles and profile data.
 */

/**
 * @param {number} userId
 * @return {!Promise<!Array>}
*/
export function GetProfiles(userId) {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: 1,
                name: 'Bochog',
                typebreed: 'Mongrel',
            },
            {
                id: 2,
                name: 'Kongking',
                typebreed: 'Chow Chow',
            },
        ]);
    });
}

/**
 * @param {number} userId
 * @param {number} profileId
 * @return {!Promise<!Object>}
*/
export function GetProfile(userId, profileId) {
    return new Promise((resolve, reject) => {
        resolve({
            id: 1,
            name: 'Bochog',
            birthday: '2010-11-05',
            profilePhoto: '',
            description: '',
            dietaryNotes: '',
            typebreed: 'Mongrel',
            events: [],            
        });
    });
}