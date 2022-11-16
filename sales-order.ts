// playground requires you to assign document definition to a variable called dd

var dd = {      
    pageMargins: [ 40, 60, 40, 160 ],

    header: {
			text: 'Print: 12/07/22, 3:29 PM',
			style: 'small',
			margin: [30,10,0,0]
		},
    footer: {
        stack: [
            {
                columns: [
                      {
                        stack:[
                            {
                        width: '*',
                        text: 'If you have any questions, please contact',
                        style: 'detailData',
                        margin: [0,0,0,5]
                            },
                            {
                                table: {
                                    body: [
                                            [
                                            {
                                            border: [true, true, true,false],
                                            text: 'BE Code: PP010',
                                            style: 'contactText'
                                            },
                                            ],
                                            [
                                            {
                                            border: [true, false, true,false],
                                            text: 'Ahmad Muaz Bin Mohamad',
                                            style: 'contactText'
                                            },
                                            ],
                                            [
                                            {
                                            border: [true, false, true,false],
                                            text: 'muaz@pharmaniaga.com',
                                            style: 'contactText'
                                            },
                                            ],
                                            [
                                            {
                                            border: [true, false, true,true],
                                            text: '014-5432085',
                                            style: 'contactText'
                                            },
                                            ],
                                          ]
                                }
                            }
                              ]  
                      },
                      {
                        stack:[
                              {
                                text: 'Pharmaniaga Logistic Sdn Bhd',
                                style: 'contactText'
                              },
                              {
                                text: 'No. 7, Lorong Keluli 1B,',
                                style: 'contactText'
                              },
                              {
                                text: 'Kawasan Perindustrian Bukit Raja Selatan,',
                                style: 'contactText'
                              },
                              {
                                text: 'Seksyen 7, 40000 Shah Alam,',
                                style: 'contactText'
                              },
                              {
                                text: 'Selangor Darul Ehsan',
                                style: 'contactText'
                              },
                              
                              {
                                margin: [0,10,0,4],
                                text: 'Call Center Hotline: 1-800-888-313 (8 lines) | Fax: 03-3343 8058',
                                style: 'contactText'
                              },
                              {
                                margin: [0,0,0,4],
                                text: 'Email: customercare@pharmaniaga.com',
                                style: 'contactText'
                              },
                              {
                                margin: [0,0,0,4],
                                text: 'Operating Hours: 8.00am to 6.00pm (Monday to Friday)',
                                style: 'contactText'
                              },
                              ]  
                      },
                     ],
                     margin: [40,0,0,0],
                  
            },
            {
                margin: [0,15,0,0],
                text: "THANK YOU FOR YOUR BUSINESS",
                bold: true,
                alignment: 'center',
            },
            // page number
            {
                margin: [0,0,30,0],
                text: "1/1",
                style: 'small',
                alignment: 'right'
            }
               ],
            
        },
	content: [
		{
			text: 'PURCHASE ORDER',
			style: 'header'
		},
		{
            columns: [
                      {
                        width: 'auto',
                        text: 'Order Number',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: 'PN-2707',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
		{
			text: 'II I III IIIII I',
			fontSize: 20,
		},
		{
            columns: [
                      {
                        width: 'auto',
                        text: 'Date',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: '10/2/22',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
        {
            columns: [
                      {
                        width: 'auto',
                        text: 'Payment',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: 'Credit Terms 90 Days',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
		{
            columns: [
                      {
                        width: 'auto',
                        text: 'Shipping',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: 'Direct Delivery Pharmaniaga Logistics',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
		{
            columns: [
                      {
                        width: 'auto',
                        text: 'Total Items',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: '36 units',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
        {
            columns: [
                      {
                        width: 'auto',
                        text: 'Customer Name',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: 'Woodrose Senior Residence',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
        {
            columns: [
                      {
                        width: 'auto',
                        text: 'Company Name',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: 'Woodrose Senior Residence Sdn Bhd',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
        {
            columns: [
                      {
                        width: 'auto',
                        text: 'Customer Email',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: 'ask@woodrose.com.my',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
        {
            columns: [
                      {
                        width: 'auto',
                        text: 'Customer Code',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: 'C02963',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
        {
            columns: [
                      {
                        width: 'auto',
                        text: 'PO NUMBER',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: '-',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
        {
            columns: [
                      {
            columns: [
                      {
                        width: 'auto',
                        text: 'Bill to',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        
                        stack: [
                                 {
                                    text: 'Woodrose Senior Residence Sdn Bhd',
                                    style: 'detailData'
                                 },
                                 {
                                    text: '28, Jalan Silat Gampang 11/3, Seksyen 13, 401000',
                                    style: 'detailData'
                                 },
                                 {
                                    text: 'Shah Alam',
                                    style: 'detailData'
                                 },
                                 {
                                    text: 'Selangor',
                                    style: 'detailData'
                                 },
                                 {
                                    text: '013-4567890',
                                    style: 'detailData'
                                 },
                               ],
                      },
                     ],
                columnGap: 10,
                margin: [0,10,0,0]
                  },
                     {
            columns: [
                      {
                        width: 'auto',
                        text: 'Ship to',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        
                        stack: [
                                 {
                                    text: 'Woodrose Senior Residence',
                                    style: 'detailData'
                                 },
                                 {
                                    text: 'Woodrose Senior Residence Sdn Bhd',
                                    style: 'detailData'
                                 },
                                 {
                                    text: '28, Jalan Silat Gampang 11/3, Seksyen 13, 401000',
                                    style: 'detailData'
                                 },
                                 {
                                    text: 'Shah Alam',
                                    style: 'detailData'
                                 },
                                 {
                                    text: 'Selangor',
                                    style: 'detailData'
                                 },
                                 {
                                    text: '013-4567890',
                                    style: 'detailData'
                                 },
                               ],
                      },
                     ],
                columnGap: 10,
                margin: [0,10,0,0]
        },
                     ],
                
        },
        {
            columns: [
                      '',
                      {
            columns: [
                      {
                        width: 'auto',
                        text: 'Operation Hour',
		                style: 'detailTitle',
                      },
                      {
                        width: '*',
                        text: '(9am-4pm Monday-Friday)',
                        style: 'detailData'
                      },
                     ],
                columnGap: 10
        },
                     ],
                     margin: [0,5,0,0]
        },
        
        // {
        //     margin: [0, 0, 0, 0],
        //     canvas: [
        //       {
        //         type: "line",
        //         x1: 0,
        //         y1: 10,
        //         x2: 515,
        //         y2: 10,
        //         lineWidth: 2,
        //       },
        //     ],
        //   },
        {
			style: 'table',
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? null : '#F8F8F8';
				}
			},
			margin: [0, 8, 0, 0],
// 			layout: 'lightHorizontalLines',
			table: {
			 //   heights: function (row) {
				// 	return (row + 1) * 15;
				// },
				widths: ['*', '40%', '*', '*', '*', 'auto'],
				
				body: [
					[
					    {
					        border: [false, true, false, false],
                            text: 'Item Code',
                            style: 'tableTitle',
                        },
                        {
                            border: [false, true, false, false],
                            text: 'Product Name',
                            style: 'tableTitle',
                        },
                        {
                            border: [false, true, false, false],
                            text: 'UOM',
                            style: 'tableTitle'
                            
                        },
                        {
                            border: [false, true, false, false],
                            text: 'Unit Price',
                            style: 'tableTitle'
                        },
                        {
                            border: [false, true, false, false],
                            text: 'Quantity',
                            style: 'tableTitle'
                        },
                        {
                            border: [false, true, false, false],
                            text: 'Total',
                            style: 'tableTitle'
                            
                        },
                        
					],
					[
					    {
					        border: true,
                            text: '0123.4421.2',
                            style: 'tableData',
                        },
                        {
                            border: true,
                            text: 'CITREX VIT C 1000MG CHEW 50S',
                            style: 'tableData',
                        },
                        {
                            border: true,
                            text: 'Box',
                            style: 'tableData'
                        },
                        {
                            border: true,
                            text: 'RM 22.00',
                            style: 'tableData'
                        },
                        {
                            border: true,
                            text: '24',
                            style: 'tableData'
                        },
                        {
                            border: true,
                            text: 'RM 535.00',
                            style: 'tableData'
                        },
					],
					[
					    {
					        border: true,
                            text: '0123.4421.2',
                            style: 'tableData'
                        },
                        {
                            border: true,
                            text: 'CITREX VIT C 1000MG CHEW 50S',
                            style: 'tableData'
                        },
                        {
                            border: true,
                            text: 'Box',
                            style: 'tableData'
                        },
                        {
                            border: true,
                            text: 'RM 22.00',
                            style: 'tableData'
                        },
                        {
                            border: true,
                            text: '24',
                            style: 'tableData'
                        },
                        {
                            border: true,
                            text: 'RM 535.00',
                            style: 'tableData'
                        },
					],
				// 	[
				// 	    {
				// 	        border: true,
    //                         text: '0123.4421.2',
    //                         style: 'tableData'
    //                     },
    //                     {
    //                         border: true,
    //                         text: 'CITREX VIT C 1000MG CHEW 50S',
    //                         style: 'tableData'
    //                     },
    //                     {
    //                         border: true,
    //                         text: 'Box',
    //                         style: 'tableData'
    //                     },
    //                     {
    //                         border: true,
    //                         text: 'RM 22.00',
    //                         style: 'tableData'
    //                     },
    //                     {
    //                         border: true,
    //                         text: '24',
    //                         style: 'tableData'
    //                     },
    //                     {
    //                         border: true,
    //                         text: 'RM 535.00',
    //                         style: 'tableData',
    //                     },
				// 	],
				]
			}
		},
		{
                                     margin: [0, 0, 0, 5],
                                     canvas: [
                                         {
                                          type: "line",
                                          x1: 0,
                                          y1: 0,
                                          x2: 515,
                                          y2: 0,
                                          lineWidth: 1,
                                          color: '#DCDCDC',
                                         },
                                            ],
                                 },
		 {
            columns: [
                      '',
                      {
                          style: 'totalTable',
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? null : '#F8F8F8';
				}
			},
			
			table: {
			    heights: 18,
				widths: ['*', '*'],
				body: [
					[
					    
					    {
					        border: true,
					       // border: [false, false, false, true],
                            text: 'Sub-total',
                            style: 'detailTitle'
                        },
                        {
                            border: true,
					       // border: [false, false, false, true],
                            text: 'RM 1,941.00',
                            style: 'detailData'
                        },
					],
					[
					    {
					        border: true,
					       // border: [false, false, false, true],
                            text: 'Shipping',
                            style: 'detailTitle'
                        },
                        {
                            border: true,
					       // border: [false, false, false, true],
                            text: 'RM 0.00',
                            style: 'detailData'
                        },
					],
					[
					    {
					        border: true,
					       // border: [false, false, false, true],
                            text: 'Total',
                            style: 'detailTitle'
                        },
                        {
                            border: true,
					       // border: [false, false, false, true],
                            text: 'RM 1,941.00',
                            style: 'detailData'
                        },
                        
					],
				]
			},
		},
                  ],
                    
        },
        {
            columns: [
                      '',
                     {
                        width: "*",
                        stack: [
                                {
                                     margin: [0, 0, 0, 5],
                                     canvas: [
                                         {
                                          type: "line",
                                          x1: 0,
                                          y1: 0,
                                          x2: 257,
                                          y2: 0,
                                          lineWidth: 1,
                                         },
                                            ],
                                 },
                                 {
                                   columns: [
                                              {
                                               text: 'Signed by:',
                                               style: 'detailData',
                                               margin: [5, 5, 0 ,5]
                                              },
                                              {
                                               text: 'Alvin Ho Yoong Chew',
                                               style: 'detailTitle',
                                              },
                                              
                                            ]
                                 },
                                 {
                                   columns: [
                                              {
                                               text: 'Date:',
                                               style: 'detailData',
                                               margin: [5, 5, 0 ,5]
                                              },
                                              {
                                               text: '10/2/2022, 9.19 AM',
                                               style: 'detailData',
                                               
                                              },
                                            ]
                                 },
                                 {
                                   columns: [
                                              {
                                               text: 'OrderBy:',
                                               style: 'detailData',
                                               margin: [5, 5, 0 ,5]
                                              },
                                              {
                                               text: 'Maria Ulpa Apadi',
                                               style: 'detailData'
                                              },
                                            ]
                                 },
                               ],
                      },
                      
                     ],
        },
        // old footer
        // {
        //     columns: [
        //               {
        //                 stack:[
        //                     {
        //                 width: '*',
        //                 text: 'If you have any questions, please contact',
        //                 style: 'detailData',
        //                 margin: [0,0,0,5]
        //                     },
        //                     {
        //                         table: {
        //                             body: [
        //                                     [
        //                                     {
        //                                     border: [true, true, true,false],
        //                                     text: 'BE Code: PP010',
        //                                     style: 'contactText'
        //                                     },
        //                                     ],
        //                                     [
        //                                     {
        //                                     border: [true, false, true,false],
        //                                     text: 'Ahmad Muaz Bin Mohamad',
        //                                     style: 'contactText'
        //                                     },
        //                                     ],
        //                                     [
        //                                     {
        //                                     border: [true, false, true,false],
        //                                     text: 'muaz@pharmaniaga.com',
        //                                     style: 'contactText'
        //                                     },
        //                                     ],
        //                                     [
        //                                     {
        //                                     border: [true, false, true,true],
        //                                     text: '014-5432085',
        //                                     style: 'contactText'
        //                                     },
        //                                     ],
        //                                   ]
        //                         }
        //                     }
        //                       ]  
        //               },
        //               {
        //                 stack:[
        //                       {
        //                         text: 'Pharmaniaga Logistic Sdn Bhd',
        //                         style: 'contactText'
        //                       },
        //                       {
        //                         text: 'No. 7, Lorong Keluli 1B,',
        //                         style: 'contactText'
        //                       },
        //                       {
        //                         text: 'Kawasan Perindustrian Bukit Raja Selatan,',
        //                         style: 'contactText'
        //                       },
        //                       {
        //                         text: 'Seksyen 7, 40000 Shah Alam,',
        //                         style: 'contactText'
        //                       },
        //                       {
        //                         text: 'Selangor Darul Ehsan',
        //                         style: 'contactText'
        //                       },
                              
        //                       {
        //                         margin: [0,10,0,4],
        //                         text: 'Call Center Hotline: 1-800-888-313 (8 lines) | Fax: 03-3343 8058',
        //                         style: 'contactText'
        //                       },
        //                       {
        //                         margin: [0,0,0,4],
        //                         text: 'Email: customercare@pharmaniaga.com',
        //                         style: 'contactText'
        //                       },
        //                       {
        //                         margin: [0,0,0,4],
        //                         text: 'Operating Hours: 8.00am to 6.00pm (Monday to Friday)',
        //                         style: 'contactText'
        //                       },
        //                       ]  
        //               },
        //              ],
        //              margin: [0,10,0,0]
        // },
       
        
	],
	
	styles: {
		header: {
			fontSize: 16,
			bold: true
		},
		subheader: {
			fontSize: 15,
			bold: true
		},
		quote: {
			italics: true
		},
		medium: {
		    fontSize: 12
		},
		detailTitle: {
		    fontSize: 9,
		    bold: true,
		    margin: [0,3,0,0]
		},
		detailData: {
		    fontSize: 9,
		    margin: [0,3,0,0]
		},
		tableTitle: {
		    fontSize: 10,
		    bold: true,
		    margin: [0,5,0,3]
		},
		tableData: {
		    fontSize: 8,
		    margin: [0,5,0,20]
		},
		small: {
			fontSize: 7
		},
		contactText: {
		      fontSize: 9,
		}
		
	}
	
}