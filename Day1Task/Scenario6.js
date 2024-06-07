const userProfile = {
  name: "Gandu Gayathri",
  dateOfBirth: "1999-06-04"
};

// Freeze the immutable properties
Object.freeze(userProfile.dateOfBirth); // We Can Use The writeble Attribute we can't use The object.freeze attribute

// Adding mutable properties
userProfile.email = "abc6@gmail.com";
userProfile.address = "345 Tenali";

// Attempting to change immutable properties will have no effect
userProfile.dateOfBirth = "1999-06-04"; // This will not change the dateOfBirth

// Changing mutable properties
userProfile.email = "abd7@gmail.com";
userProfile.address = "Tenali7";

console.log(userProfile);

