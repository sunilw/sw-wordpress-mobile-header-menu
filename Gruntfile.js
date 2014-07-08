module.exports = function (grunt){
    grunt.initConfig({

        compass : {
            dist : {
                options : {
                    cssDir : 'css',
                    sassDir : 'sass'
                }
            }
        },  // ends compass task definitions

	watch : {
            files : ['*.html',  '*.php',  'js/*', 'sass/*', 'css/*'],
            tasks : ['compass'],
            options : {
                livereload: true
            }
        },  // ends watch task definition
	
	concurrent : {	    
	    target1 :   ['watch'],
	    options : {
		logConcurrentOutput : true
	    }
	} // ends concurrent
	

    });  // end task defintions

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.loadNpmTasks('grunt-contrib-compass');   
    grunt.registerTask( 'default' , ['concurrent:target1', 'concurrent:target2'] ) ;

} ;
