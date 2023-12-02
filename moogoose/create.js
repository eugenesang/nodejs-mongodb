const bcrypt = require('bcrypt');

const Account = require('./path-to-your-account-model'); // Adjust the path accordingly

async function createAccount(name, email, phone, password) {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new account instance
    const newAccount = new Account({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword // Use the hashed password
    });

    // Save the new account to the database
    const savedAccount = await newAccount.save();

    console.log('Account created successfully:', savedAccount);
    return savedAccount;
  } catch (error) {
    console.error('Error creating account:', error.message);
    throw error;
  }
}

// Example usage
createAccount('John Doe', 'john.doe@example.com', '1234567890', 'securePassword');
