export const DEFAULT_PROFILE_PIC = "/profile-pic/vicky-hladynets.webp";

const profilePics = {
    "Pasang Tamang": "/profile-pic/mohmeed.webp",
    "Balen Parajuli": "/profile-pic/joseph-gonzalez.webp",
    "Arman Tamang": "/profile-pic/jurica-koletic.webp",
    "Alok Shah": "/profile-pic/ali.webp",
    "Bhim Thapa": "/profile-pic/sara.webp",
    "Mohmmed Hashimy": "/profile-pic/mohmeed.webp",
    "Ali Maktoum": "/profile-pic/ali.webp",
    "Sara Al Hashimy": "/profile-pic/sara.webp",
};

export function getProfilePic(name) {
    return profilePics[name] || DEFAULT_PROFILE_PIC;
}
