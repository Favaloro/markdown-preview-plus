"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    breakOnSingleNewline: {
        type: 'boolean',
        default: false,
        order: 0,
    },
    liveUpdate: {
        type: 'boolean',
        default: true,
        order: 10,
    },
    openPreviewInSplitPane: {
        type: 'boolean',
        default: true,
        order: 20,
    },
    previewSplitPaneDir: {
        title: 'Direction to load the preview in split pane',
        type: 'string',
        default: 'right',
        enum: ['down', 'right'],
        order: 25,
    },
    grammars: {
        type: 'array',
        default: [
            'source.gfm',
            'source.litcoffee',
            'text.html.basic',
            'text.md',
            'text.plain',
            'text.plain.null-grammar',
        ],
        order: 30,
    },
    enableLatexRenderingByDefault: {
        title: 'Enable Math Rendering By Default',
        type: 'boolean',
        default: false,
        order: 40,
    },
    useLazyHeaders: {
        title: 'Use Lazy Headers',
        description: 'Require no space after headings #',
        type: 'boolean',
        default: true,
        order: 45,
    },
    useGitHubStyle: {
        title: 'Use GitHub.com style',
        type: 'boolean',
        default: false,
        order: 50,
    },
    enablePandoc: {
        type: 'boolean',
        default: false,
        title: 'Enable Pandoc Parser',
        order: 100,
    },
    useNativePandocCodeStyles: {
        type: 'boolean',
        default: false,
        description: `\
Don't convert fenced code blocks to Atom editors when using
Pandoc parser`,
        order: 105,
    },
    pandocPath: {
        type: 'string',
        default: 'pandoc',
        title: 'Pandoc Options: Path',
        description: 'Please specify the correct path to your pandoc executable',
        dependencies: ['enablePandoc'],
        order: 110,
    },
    pandocFilters: {
        type: 'array',
        default: [],
        title: 'Pandoc Options: Filters',
        description: 'Comma separated pandoc filters, in order of application. Will be passed via command-line arguments',
        dependencies: ['enablePandoc'],
        order: 115,
    },
    pandocArguments: {
        type: 'array',
        default: [],
        title: 'Pandoc Options: Commandline Arguments',
        description: 'Comma separated pandoc arguments e.g. `--smart, --filter=/bin/exe`. Please use long argument names.',
        dependencies: ['enablePandoc'],
        order: 120,
    },
    pandocMarkdownFlavor: {
        type: 'string',
        default: 'markdown-raw_tex+tex_math_single_backslash',
        title: 'Pandoc Options: Markdown Flavor',
        description: 'Enter the pandoc markdown flavor you want',
        dependencies: ['enablePandoc'],
        order: 130,
    },
    pandocBibliography: {
        type: 'boolean',
        default: false,
        title: 'Pandoc Options: Citations',
        description: `\
Enable this for bibliography parsing.
Note: pandoc-citeproc is applied after other filters specified in
Filters, but before other commandline arguments\
`,
        dependencies: ['enablePandoc'],
        order: 140,
    },
    pandocRemoveReferences: {
        type: 'boolean',
        default: true,
        title: 'Pandoc Options: Remove References',
        description: 'Removes references at the end of the HTML preview',
        dependencies: ['pandocBibliography'],
        order: 150,
    },
    pandocBIBFile: {
        type: 'string',
        default: 'bibliography.bib',
        title: 'Pandoc Options: Bibliography (bibfile)',
        description: 'Name of bibfile to search for recursively',
        dependencies: ['pandocBibliography'],
        order: 160,
    },
    pandocBIBFileFallback: {
        type: 'string',
        default: '',
        title: 'Pandoc Options: Fallback Bibliography (bibfile)',
        description: 'Full path to fallback bibfile',
        dependencies: ['pandocBibliography'],
        order: 165,
    },
    pandocCSLFile: {
        type: 'string',
        default: 'custom.csl',
        title: 'Pandoc Options: Bibliography Style (cslfile)',
        description: 'Name of cslfile to search for recursively',
        dependencies: ['pandocBibliography'],
        order: 170,
    },
    pandocCSLFileFallback: {
        type: 'string',
        default: '',
        title: 'Pandoc Options: Fallback Bibliography Style (cslfile)',
        description: 'Full path to fallback cslfile',
        dependencies: ['pandocBibliography'],
        order: 175,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLG9CQUFvQixFQUFFO1FBQ3BCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsSUFBSTtRQUNiLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFDRCxzQkFBc0IsRUFBRTtRQUN0QixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELG1CQUFtQixFQUFFO1FBQ25CLEtBQUssRUFBRSw2Q0FBNkM7UUFDcEQsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQ3ZCLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxZQUFZO1lBQ1oseUJBQXlCO1NBQzFCO1FBQ0QsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELDZCQUE2QixFQUFFO1FBQzdCLEtBQUssRUFBRSxrQ0FBa0M7UUFDekMsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCLFdBQVcsRUFBRSxtQ0FBbUM7UUFDaEQsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsSUFBSTtRQUNiLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxLQUFLLEVBQUUsc0JBQXNCO1FBQzdCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsRUFBRTtLQUNWO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRSxzQkFBc0I7UUFDN0IsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNELHlCQUF5QixFQUFFO1FBQ3pCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxXQUFXLEVBQUU7O2NBRUg7UUFDVixLQUFLLEVBQUUsR0FBRztLQUNYO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsUUFBUTtRQUNqQixLQUFLLEVBQUUsc0JBQXNCO1FBQzdCLFdBQVcsRUFBRSwyREFBMkQ7UUFDeEUsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzlCLEtBQUssRUFBRSxHQUFHO0tBQ1g7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLHlCQUF5QjtRQUNoQyxXQUFXLEVBQ1Qsb0dBQW9HO1FBQ3RHLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztRQUM5QixLQUFLLEVBQUUsR0FBRztLQUNYO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSx1Q0FBdUM7UUFDOUMsV0FBVyxFQUNULHFHQUFxRztRQUN2RyxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDOUIsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLDRDQUE0QztRQUNyRCxLQUFLLEVBQUUsaUNBQWlDO1FBQ3hDLFdBQVcsRUFBRSwyQ0FBMkM7UUFDeEQsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzlCLEtBQUssRUFBRSxHQUFHO0tBQ1g7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsS0FBSyxFQUFFLDJCQUEyQjtRQUNsQyxXQUFXLEVBQUU7Ozs7Q0FJaEI7UUFDRyxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDOUIsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNELHNCQUFzQixFQUFFO1FBQ3RCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUUsbUNBQW1DO1FBQzFDLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDcEMsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixLQUFLLEVBQUUsd0NBQXdDO1FBQy9DLFdBQVcsRUFBRSwyQ0FBMkM7UUFDeEQsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDcEMsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNELHFCQUFxQixFQUFFO1FBQ3JCLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLEVBQUU7UUFDWCxLQUFLLEVBQUUsaURBQWlEO1FBQ3hELFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDcEMsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLFlBQVk7UUFDckIsS0FBSyxFQUFFLDhDQUE4QztRQUNyRCxXQUFXLEVBQUUsMkNBQTJDO1FBQ3hELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQ3BDLEtBQUssRUFBRSxHQUFHO0tBQ1g7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLHVEQUF1RDtRQUM5RCxXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQ3BDLEtBQUssRUFBRSxHQUFHO0tBQ1g7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYnJlYWtPblNpbmdsZU5ld2xpbmU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgb3JkZXI6IDAsXG4gIH0sXG4gIGxpdmVVcGRhdGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgICBvcmRlcjogMTAsXG4gIH0sXG4gIG9wZW5QcmV2aWV3SW5TcGxpdFBhbmU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgICBvcmRlcjogMjAsXG4gIH0sXG4gIHByZXZpZXdTcGxpdFBhbmVEaXI6IHtcbiAgICB0aXRsZTogJ0RpcmVjdGlvbiB0byBsb2FkIHRoZSBwcmV2aWV3IGluIHNwbGl0IHBhbmUnLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyaWdodCcsXG4gICAgZW51bTogWydkb3duJywgJ3JpZ2h0J10sXG4gICAgb3JkZXI6IDI1LFxuICB9LFxuICBncmFtbWFyczoge1xuICAgIHR5cGU6ICdhcnJheScsXG4gICAgZGVmYXVsdDogW1xuICAgICAgJ3NvdXJjZS5nZm0nLFxuICAgICAgJ3NvdXJjZS5saXRjb2ZmZWUnLFxuICAgICAgJ3RleHQuaHRtbC5iYXNpYycsXG4gICAgICAndGV4dC5tZCcsXG4gICAgICAndGV4dC5wbGFpbicsXG4gICAgICAndGV4dC5wbGFpbi5udWxsLWdyYW1tYXInLFxuICAgIF0sXG4gICAgb3JkZXI6IDMwLFxuICB9LFxuICBlbmFibGVMYXRleFJlbmRlcmluZ0J5RGVmYXVsdDoge1xuICAgIHRpdGxlOiAnRW5hYmxlIE1hdGggUmVuZGVyaW5nIEJ5IERlZmF1bHQnLFxuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBvcmRlcjogNDAsXG4gIH0sXG4gIHVzZUxhenlIZWFkZXJzOiB7XG4gICAgdGl0bGU6ICdVc2UgTGF6eSBIZWFkZXJzJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVpcmUgbm8gc3BhY2UgYWZ0ZXIgaGVhZGluZ3MgIycsXG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgb3JkZXI6IDQ1LFxuICB9LFxuICB1c2VHaXRIdWJTdHlsZToge1xuICAgIHRpdGxlOiAnVXNlIEdpdEh1Yi5jb20gc3R5bGUnLFxuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBvcmRlcjogNTAsXG4gIH0sXG4gIGVuYWJsZVBhbmRvYzoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB0aXRsZTogJ0VuYWJsZSBQYW5kb2MgUGFyc2VyJyxcbiAgICBvcmRlcjogMTAwLFxuICB9LFxuICB1c2VOYXRpdmVQYW5kb2NDb2RlU3R5bGVzOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiBgXFxcbkRvbid0IGNvbnZlcnQgZmVuY2VkIGNvZGUgYmxvY2tzIHRvIEF0b20gZWRpdG9ycyB3aGVuIHVzaW5nXG5QYW5kb2MgcGFyc2VyYCxcbiAgICBvcmRlcjogMTA1LFxuICB9LFxuICBwYW5kb2NQYXRoOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3BhbmRvYycsXG4gICAgdGl0bGU6ICdQYW5kb2MgT3B0aW9uczogUGF0aCcsXG4gICAgZGVzY3JpcHRpb246ICdQbGVhc2Ugc3BlY2lmeSB0aGUgY29ycmVjdCBwYXRoIHRvIHlvdXIgcGFuZG9jIGV4ZWN1dGFibGUnLFxuICAgIGRlcGVuZGVuY2llczogWydlbmFibGVQYW5kb2MnXSxcbiAgICBvcmRlcjogMTEwLFxuICB9LFxuICBwYW5kb2NGaWx0ZXJzOiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBkZWZhdWx0OiBbXSxcbiAgICB0aXRsZTogJ1BhbmRvYyBPcHRpb25zOiBGaWx0ZXJzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDb21tYSBzZXBhcmF0ZWQgcGFuZG9jIGZpbHRlcnMsIGluIG9yZGVyIG9mIGFwcGxpY2F0aW9uLiBXaWxsIGJlIHBhc3NlZCB2aWEgY29tbWFuZC1saW5lIGFyZ3VtZW50cycsXG4gICAgZGVwZW5kZW5jaWVzOiBbJ2VuYWJsZVBhbmRvYyddLFxuICAgIG9yZGVyOiAxMTUsXG4gIH0sXG4gIHBhbmRvY0FyZ3VtZW50czoge1xuICAgIHR5cGU6ICdhcnJheScsXG4gICAgZGVmYXVsdDogW10sXG4gICAgdGl0bGU6ICdQYW5kb2MgT3B0aW9uczogQ29tbWFuZGxpbmUgQXJndW1lbnRzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDb21tYSBzZXBhcmF0ZWQgcGFuZG9jIGFyZ3VtZW50cyBlLmcuIGAtLXNtYXJ0LCAtLWZpbHRlcj0vYmluL2V4ZWAuIFBsZWFzZSB1c2UgbG9uZyBhcmd1bWVudCBuYW1lcy4nLFxuICAgIGRlcGVuZGVuY2llczogWydlbmFibGVQYW5kb2MnXSxcbiAgICBvcmRlcjogMTIwLFxuICB9LFxuICBwYW5kb2NNYXJrZG93bkZsYXZvcjoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdtYXJrZG93bi1yYXdfdGV4K3RleF9tYXRoX3NpbmdsZV9iYWNrc2xhc2gnLFxuICAgIHRpdGxlOiAnUGFuZG9jIE9wdGlvbnM6IE1hcmtkb3duIEZsYXZvcicsXG4gICAgZGVzY3JpcHRpb246ICdFbnRlciB0aGUgcGFuZG9jIG1hcmtkb3duIGZsYXZvciB5b3Ugd2FudCcsXG4gICAgZGVwZW5kZW5jaWVzOiBbJ2VuYWJsZVBhbmRvYyddLFxuICAgIG9yZGVyOiAxMzAsXG4gIH0sXG4gIHBhbmRvY0JpYmxpb2dyYXBoeToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB0aXRsZTogJ1BhbmRvYyBPcHRpb25zOiBDaXRhdGlvbnMnLFxuICAgIGRlc2NyaXB0aW9uOiBgXFxcbkVuYWJsZSB0aGlzIGZvciBiaWJsaW9ncmFwaHkgcGFyc2luZy5cbk5vdGU6IHBhbmRvYy1jaXRlcHJvYyBpcyBhcHBsaWVkIGFmdGVyIG90aGVyIGZpbHRlcnMgc3BlY2lmaWVkIGluXG5GaWx0ZXJzLCBidXQgYmVmb3JlIG90aGVyIGNvbW1hbmRsaW5lIGFyZ3VtZW50c1xcXG5gLFxuICAgIGRlcGVuZGVuY2llczogWydlbmFibGVQYW5kb2MnXSxcbiAgICBvcmRlcjogMTQwLFxuICB9LFxuICBwYW5kb2NSZW1vdmVSZWZlcmVuY2VzOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgdGl0bGU6ICdQYW5kb2MgT3B0aW9uczogUmVtb3ZlIFJlZmVyZW5jZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVtb3ZlcyByZWZlcmVuY2VzIGF0IHRoZSBlbmQgb2YgdGhlIEhUTUwgcHJldmlldycsXG4gICAgZGVwZW5kZW5jaWVzOiBbJ3BhbmRvY0JpYmxpb2dyYXBoeSddLFxuICAgIG9yZGVyOiAxNTAsXG4gIH0sXG4gIHBhbmRvY0JJQkZpbGU6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAnYmlibGlvZ3JhcGh5LmJpYicsXG4gICAgdGl0bGU6ICdQYW5kb2MgT3B0aW9uczogQmlibGlvZ3JhcGh5IChiaWJmaWxlKScsXG4gICAgZGVzY3JpcHRpb246ICdOYW1lIG9mIGJpYmZpbGUgdG8gc2VhcmNoIGZvciByZWN1cnNpdmVseScsXG4gICAgZGVwZW5kZW5jaWVzOiBbJ3BhbmRvY0JpYmxpb2dyYXBoeSddLFxuICAgIG9yZGVyOiAxNjAsXG4gIH0sXG4gIHBhbmRvY0JJQkZpbGVGYWxsYmFjazoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICcnLFxuICAgIHRpdGxlOiAnUGFuZG9jIE9wdGlvbnM6IEZhbGxiYWNrIEJpYmxpb2dyYXBoeSAoYmliZmlsZSknLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVsbCBwYXRoIHRvIGZhbGxiYWNrIGJpYmZpbGUnLFxuICAgIGRlcGVuZGVuY2llczogWydwYW5kb2NCaWJsaW9ncmFwaHknXSxcbiAgICBvcmRlcjogMTY1LFxuICB9LFxuICBwYW5kb2NDU0xGaWxlOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ2N1c3RvbS5jc2wnLFxuICAgIHRpdGxlOiAnUGFuZG9jIE9wdGlvbnM6IEJpYmxpb2dyYXBoeSBTdHlsZSAoY3NsZmlsZSknLFxuICAgIGRlc2NyaXB0aW9uOiAnTmFtZSBvZiBjc2xmaWxlIHRvIHNlYXJjaCBmb3IgcmVjdXJzaXZlbHknLFxuICAgIGRlcGVuZGVuY2llczogWydwYW5kb2NCaWJsaW9ncmFwaHknXSxcbiAgICBvcmRlcjogMTcwLFxuICB9LFxuICBwYW5kb2NDU0xGaWxlRmFsbGJhY2s6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAnJyxcbiAgICB0aXRsZTogJ1BhbmRvYyBPcHRpb25zOiBGYWxsYmFjayBCaWJsaW9ncmFwaHkgU3R5bGUgKGNzbGZpbGUpJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Z1bGwgcGF0aCB0byBmYWxsYmFjayBjc2xmaWxlJyxcbiAgICBkZXBlbmRlbmNpZXM6IFsncGFuZG9jQmlibGlvZ3JhcGh5J10sXG4gICAgb3JkZXI6IDE3NSxcbiAgfSxcbn1cbiJdfQ==