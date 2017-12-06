'use strict';

jQuery(document).ready(function(){

  $(function() {

    var datasource = {
      'name': "Rickard Stark",
      'title': 'Lord of Winterfell',
      'children': [
        
        { 'name': 'Brandon Stark', 'title': 'Heir of Winterfell' },
        
        { 'name': "Eddard 'Ned' Stark", 'title': 'Hand of the King',
          'children': [
            { 'name': 'Robb Stark', 'title': 'The Young Wolf' },
            { 'name': 'Sansa Stark', 'title': 'Princess of Winterfell',
                'children': [
                    { 'name': 'Lady', 'title': 'Executed Dire Wolf' }
              ]
            },

            { 'name': 'Arya Stark', 'title': 'Faceless One',
            'children': [
                
                { 'name': 'Nymeria', 'title': 'Abandoned Dire Wolf' },
                { 'name': 'Siberia', 'title': 'Made up Dire Wolf' }

              ]
            },

            { 'name': "Brandon 'Bran' Stark", 'title': 'Lawful Lord of Winterfell' },
            { 'name': 'Rickon Stark', 'title': 'Prince of Winterfell',
              'children': [
                { 'name': 'Shaggydog', 'title': 'DEAD Dire Wolf' }
              ]
            },

            { 'name': 'Jon Snow', 'title': 'Bastard of Winterfell',
                'children': [
                    { 'name': 'Ghost', 'title': 'Dire Wolf' }
                ]
            }
          ]
        },

        { 'name': 'Lyanna Stark', 'title': 'Tower of Joy', 
            'children': [
                { 'name': 'Spoiler Alert', 'title': 'Just kidding' },
                { 'name': 'Another Child', 'title': 'Just my Title' }
            ]
        },

        { 'name': 'Benjen Stark', 'title': "First Ranger of the Night's Watch", 
            'children': [
                { 'name': 'Name', 'title': 'Title' },
                { 'name': 'Namey', 'title': 'Muh Title'},
                { 'name': 'Arya Stark', 'title': 'Faceless One'},
            ]
        }
      ]
    };

    $('#chart-container').orgchart({
      'data' : datasource,                      // Use [  $('#ul-data')  ] for output using <ul>
      'depth' : 4,                              // How many rows show initially
      'verticalDepth' : 3,                      // Align child nodes vertically from given depth
      'nodeContent' : 'title',
      'pan' : true,                             // Drag the chart with mouse
      'zoom' : true,                            // Zoom with mousewheel
      'zoominLimit' : '3',                      // Zoom in default 7
      'zoomoutLimit' : '0',                     // Zoom out default 0.5
      'exportButton' : true,                    // Adds download button to top left
      'exportFilename' : 'emory-orgchart',      // Filename of downloaded document
      'exportFileextension' : 'pdf',            // Supports 'pdf' and 'png'
      'parentNodeSymbol' : 'fa-plus-square-o'   // Icon that appears on parent nodes
      // All options: https://github.com/dabeng/OrgChart#options
    });

  });

});