const users = [
  { "id": 1, "userId": 1, "name": "John Doe", "email": "john.doe@example.com", "role": "Manager" },
  { "id": 2, "userId": 2, "name": "Jane Smith", "email": "jane.smith@example.com", "role": "Developer" },
  { "id": 3, "userId": 3, "name": "Michael Brown", "email": "michael.brown@example.com", "role": "Tester" },
  { "id": 4, "userId": 4, "name": "Emily Davis", "email": "emily.davis@example.com", "role": "Principal Engineer" },
  { "id": 5, "userId": 5, "name": "Robert Johnson", "email": "robert.johnson@example.com", "role": "Manager" },
  { "id": 6, "userId": 6, "name": "Jessica Taylor", "email": "jessica.taylor@example.com", "role": "Developer" },
  { "id": 7, "userId": 7, "name": "William Wilson", "email": "william.wilson@example.com", "role": "Tester" },
  { "id": 8, "userId": 8, "name": "Olivia Martinez", "email": "olivia.martinez@example.com", "role": "Principal Engineer" },
  { "id": 9, "userId": 9, "name": "James Anderson", "email": "james.anderson@example.com", "role": "Manager" },
  { "id": 10, "userId": 10, "name": "Sophia Thomas", "email": "sophia.thomas@example.com", "role": "Developer" },
  { "id": 11, "userId": 11, "name": "David Lee", "email": "david.lee@example.com", "role": "Tester" },
  { "id": 12, "userId": 12, "name": "Isabella White", "email": "isabella.white@example.com", "role": "Principal Engineer" },
  { "id": 13, "userId": 13, "name": "Richard Harris", "email": "richard.harris@example.com", "role": "Manager" },
  { "id": 14, "userId": 14, "name": "Mia Clark", "email": "mia.clark@example.com", "role": "Developer" },
  { "id": 15, "userId": 15, "name": "Joseph Lewis", "email": "joseph.lewis@example.com", "role": "Tester" },
  { "id": 16, "userId": 16, "name": "Abigail Walker", "email": "abigail.walker@example.com", "role": "Principal Engineer" },
  { "id": 17, "userId": 17, "name": "Christopher Hall", "email": "christopher.hall@example.com", "role": "Manager" },
  { "id": 18, "userId": 18, "name": "Grace Young", "email": "grace.young@example.com", "role": "Developer" },
  { "id": 19, "userId": 19, "name": "Daniel King", "email": "daniel.king@example.com", "role": "Tester" },
  { "id": 20, "userId": 20, "name": "Madison Wright", "email": "madison.wright@example.com", "role": "Principal Engineer" },
  { "id": 21, "userId": 21, "name": "Matthew Green", "email": "matthew.green@example.com", "role": "Manager" },
  { "id": 22, "userId": 22, "name": "Chloe Adams", "email": "chloe.adams@example.com", "role": "Developer" },
  { "id": 23, "userId": 23, "name": "Ryan Baker", "email": "ryan.baker@example.com", "role": "Tester" },
  { "id": 24, "userId": 24, "name": "Ella Carter", "email": "ella.carter@example.com", "role": "Principal Engineer" },
  { "id": 25, "userId": 25, "name": "Joshua Turner", "email": "joshua.turner@example.com", "role": "Manager" },
  { "id": 26, "userId": 26, "name": "Ava Morris", "email": "ava.morris@example.com", "role": "Developer" },
  { "id": 27, "userId": 27, "name": "Anthony Nelson", "email": "anthony.nelson@example.com", "role": "Tester" },
  { "id": 28, "userId": 28, "name": "Lily Mitchell", "email": "lily.mitchell@example.com", "role": "Principal Engineer" },
  { "id": 29, "userId": 29, "name": "Andrew Perez", "email": "andrew.perez@example.com", "role": "Manager" },
  { "id": 30, "userId": 30, "name": "Samantha Roberts", "email": "samantha.roberts@example.com", "role": "Developer" },
  { "id": 31, "userId": 31, "name": "Ethan Scott", "email": "ethan.scott@example.com", "role": "Tester" },
  { "id": 32, "userId": 32, "name": "Harper Ramirez", "email": "harper.ramirez@example.com", "role": "Principal Engineer" },
  { "id": 33, "userId": 33, "name": "Benjamin Phillips", "email": "benjamin.phillips@example.com", "role": "Manager" },
  { "id": 34, "userId": 34, "name": "Amelia Campbell", "email": "amelia.campbell@example.com", "role": "Developer" },
  { "id": 35, "userId": 35, "name": "Logan Parker", "email": "logan.parker@example.com", "role": "Tester" },
  { "id": 36, "userId": 36, "name": "Zoe Evans", "email": "zoe.evans@example.com", "role": "Principal Engineer" },
  { "id": 37, "userId": 37, "name": "Nathan Edwards", "email": "nathan.edwards@example.com", "role": "Manager" },
  { "id": 38, "userId": 38, "name": "Victoria Collins", "email": "victoria.collins@example.com", "role": "Developer" },
  { "id": 39, "userId": 39, "name": "Alexander Stewart", "email": "alexander.stewart@example.com", "role": "Tester" },
  { "id": 40, "userId": 40, "name": "Natalie Sanchez", "email": "natalie.sanchez@example.com", "role": "Principal Engineer" },
  { "id": 41, "userId": 41, "name": "Jacob Morris", "email": "jacob.morris@example.com", "role": "Manager" },
  { "id": 42, "userId": 42, "name": "Evelyn Rogers", "email": "evelyn.rogers@example.com", "role": "Developer" },
  { "id": 43, "userId": 43, "name": "Luke Reed", "email": "luke.reed@example.com", "role": "Tester" },
  { "id": 44, "userId": 44, "name": "Scarlett Cook", "email": "scarlett.cook@example.com", "role": "Principal Engineer" },
  { "id": 45, "userId": 45, "name": "Owen Bailey", "email": "owen.bailey@example.com", "role": "Manager" },
  { "id": 46, "userId": 46, "name": "Luna Bell", "email": "luna.bell@example.com", "role": "Developer" },
  { "id": 47, "userId": 47, "name": "Elijah Cooper", "email": "elijah.cooper@example.com", "role": "Tester" },
  { "id": 48, "userId": 48, "name": "Hannah Foster", "email": "hannah.foster@example.com", "role": "Principal Engineer" },
  { "id": 49, "userId": 49, "name": "Mason Rivera", "email": "mason.rivera@example.com", "role": "Manager" },
  { "id": 50, "userId": 50, "name": "Aria Richardson", "email": "aria.richardson@example.com", "role": "Developer" }
  ]

  const updatedUsers = users.map((user, index) => {
    const emailPrefix = user.email.split('@')[0]; // Get the prefix from email (e.g., john.doe)
    return {
        ...user,
        userId: `${emailPrefix}@${index + 1}` // Update userId to the new format
    };
});
 
export default updatedUsers  