# **Budget Calculator**

## **Project Overview**

This project helps users calculate a website budget interactively by selecting services and managing quotes. It demonstrates React.js, Bootstrap 5, and React Router 6.

## **Features**

1. **Interactive Budget Calculation**:

   - Services offered:
     - SEO Campaign (€300)
     - Advertising Campaign (€400)
     - Website Development (€500)
   - Calculates total cost dynamically based on selected services.

2. **Website Customization**:

   - Allows users to specify:
     - Number of pages
     - Number of languages
   - Website cost formula: `(Pages + Languages) * €30`

3. **Enhanced User Experience**:

   - Buttons to increase/decrease page and language count.
   - Modal popups to explain inputs.

4. **Multi-Quote Management**:

   - Add quotes with a name and client details.
   - Save multiple quotes with unique configurations.

5. **Sorting and Searching**:

   - Sort quotes alphabetically, by date, or reset sorting.
   - Search bar to find quotes by name.

6. **Annual Budget Discount**:

   - Option to enable/disable a 20% discount for annual quotes.
   - Interface updates to reflect the discounted price.

7. **Shareable URLs**:

   - Dynamically updates the URL based on user-selected options.
   - Shareable links for others to view the same quote configuration.

---

## **How It Works**

### **User Interaction**

- Select desired services using checkboxes.
- Configure the website with pages and languages.
- Add quote details (name, client).
- View and manage multiple quotes with sorting and filtering options.

### **Dynamic URL Example**

When sharing a quote, the URL dynamically updates to include the selected options:

```
https://budgets-zeta.vercel.app/calculate?seo=true&ads=false&web=false&pages=0&languages=0&isAnnual=true
```

### **Live Version**

Visit the live version of the project here:
[Live Budget Calculator](https://budgets-zeta.vercel.app/calculate?seo=true&ads=false&web=false&pages=0&languages=0&isAnnual=true)

### **Navigation**

- **Welcome Page**: Explains the purpose and functionality of the application.
- **Calculator Page**: Main interface to calculate and manage quotes.
- Navigation is implemented using React Router 6.

---

## **Technologies Used**

- **Frontend Framework**: React.js
- **State Management**: React Context API
- **Styling**: Bootstrap 5
- **Routing**: React Router 6
- **Build Tool**: Vite

---

## **Setup Instructions**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/laligb/budgets
   cd budgets
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run Locally**:

   ```bash
   npm run dev
   ```

   - Open your browser and navigate to:
     [http://localhost:5173](http://localhost:5173)
   - The application will run on your local machine.

4. **Explore the Project**:

   - Visit the live version of the project here:
     [Live Budget Calculator](https://budgets-zeta.vercel.app/)
   - Explore the source code on GitHub:
     [GitHub Repository](https://github.com/laligb/budgets)

---

## **How to Use**

1. **Navigate to the Welcome Page**:

   - Click the 'Go to Calculator Page' button to proceed.

2. **Go to the Calculator Page**:

   - Select services and configure the website.
   - Add quote details (name, client).

3. **Generate Multiple Quotes**:

   - View and manage all saved quotes.

4. **Share a Quote**:

   - Copy the dynamically updated URL to share a specific configuration.

---

## **License**

This project is part of the Barcelona Activa IT Academy and is intended for educational purposes.
