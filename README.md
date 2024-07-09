# GraphSales
Applications for displaying sales graph with total amount and number of sales by periods (day, week, month, quarter)
sales: transaction itself, date of transaction closing

Backend: .Net 8, automapper, ef core
Frontend: react, mantine, recharts

How to run:
1. Download repository `git clone https://github.com/DmitriyTereschenko89/GraphSales.git`
2. Change the server name in the connection string in the `src/GraphSales.Api/appsettings.json file`
3. run `src/GraphSales.Api/`
4. Go to `src/GraphSales.UI` folder and run `npm start` command
   
Application demo:
1. Main page
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/3f071c0a-e953-45a5-89db-7f5f70ec1883)
2. Spinner
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/7c461f34-cc82-4282-bbff-3c88c51a93df)
3. Server error handling
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/47dd6ae0-d51b-4a74-988f-ae2bfca122d1)
4. Empty field handling
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/30d7db62-7b48-41b2-bd78-b95ee754755b)
5. Show data for day period from 02.01.2017 to 05.09.2017
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/fd0f69e1-53b3-47aa-9db7-ae232623a9e1)
6. Zoom graph
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/3869dea6-6c83-44da-b65a-891a3da1706e)
7. Data for week
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/644ac60e-e80a-4df2-afc1-6b43f22ef444)
8. Data for month
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/8ffc2fba-22c1-4c86-b687-593523e1e8c3)
9. Data for quarter
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/90262cd9-cc58-4c34-88ad-0d67d73df47f)
10. No data
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/38c8e277-678c-4269-a4f9-c64c83bf9b5e)



