# GraphSales
Applications for displaying sales graph with total amount and number of sales by periods (day, week, month, quarter)
sales: transaction itself, date of transaction closing

#### Backend: .Net 8, Automapper, EF Core
#### Frontend: React, Mantine, Recharts

#### How to run:
1. Download repository `git clone https://github.com/DmitriyTereschenko89/GraphSales.git`
2. Change the connection string in the `src/GraphSales.Api/appsettings.json file`
3. Run `src/GraphSales.Api/`
4. Api url http://localhost:5159/swagger/index.html
5. Go to `src/GraphSales.UI` folder and run `npm start` command
6. UI url http://localhost:3000/
   
#### Application demo:
1. Swagger
   
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/63e493ac-bd7e-492f-a335-3b1dbc5101b2)
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/d08e11af-ecee-4f5b-a629-5e35b5b69af7)
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/78c55691-474b-470d-8ead-b285d2bae678)
2. Contains data from 01.01.2012 to 12.31.2023

   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/088a91b3-2a1c-4653-aa45-7d51cb17748b)
3. Main page
   
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/6def2936-3a2e-44f9-8776-9112c460aef8)
4. Spinner
   
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/7c461f34-cc82-4282-bbff-3c88c51a93df)
5. Server error handling
   
   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/47dd6ae0-d51b-4a74-988f-ae2bfca122d1)
6. Empty field handling

   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/30d7db62-7b48-41b2-bd78-b95ee754755b)
7. Data by day period from 02.01.2017 to 05.09.2017

   ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/822c4fb7-208d-4292-94c4-831e4b0215bd)
   8. Zoom graph

      ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/5597e381-8625-47bf-81a4-d23cb1fd148b)
   9. Data by week

      ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/11098027-4ba7-47e0-a15f-c0744d945b2c)
   10. Data by month

     ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/cb283ef9-3019-4bd7-8708-18525b12dd98) 
   11. Data by quarter

      ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/8483a312-2487-4934-9e91-7aff2c1bc86f)
   12. No data

     ![image](https://github.com/DmitriyTereschenko89/GraphSales/assets/120090144/05ef7a35-52ce-4d0d-9832-817431c036bc)



