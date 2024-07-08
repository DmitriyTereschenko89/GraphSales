# GraphSales
applications for displaying sales graph with total amount and number of sales by periods (day, week, month, quarter)
sales: transaction itself, date of transaction closing
Backend: .Net 8, automapper, ef core
Frontend: react, mantine, recharts

how to run:
1. download repository
2. in the GraphSales.Api change the server name in the connection string in the appsettings.json file
3. run the api
4. open in visual code graphsales.ui and in terminal run npm start
5. 10000 data from 01.01.2012 to 12.31.2023 will be generated at the first access.
first run:
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/7baec974-31b2-4cff-abeb-54795f87eed2)
empty field handling
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/eb6751a1-41ef-4602-af18-0a9750784e21)
show data for day period from 02.01.2017 to 05.09.2017
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/fd0f69e1-53b3-47aa-9db7-ae232623a9e1)
zoom graph
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/3869dea6-6c83-44da-b65a-891a3da1706e)
data for week, month and quarter and no data
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/644ac60e-e80a-4df2-afc1-6b43f22ef444)
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/8ffc2fba-22c1-4c86-b687-593523e1e8c3)
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/90262cd9-cc58-4c34-88ad-0d67d73df47f)
  ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/38c8e277-678c-4269-a4f9-c64c83bf9b5e)



