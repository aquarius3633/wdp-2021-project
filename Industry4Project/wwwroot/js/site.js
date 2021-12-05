// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $(function () {
        $("#elasticGrid").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'popup',
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 450,
            'items':
                [
                    {
                        'title'          : 'IBM AI <hr/> <a class="btn btn-primary">More Details</a>',
                        'description'    : '<h4>IBM’s portfolio of business-ready tools, applications and solutions, designed to reduce the costs and hurdles of AI adoption while optimizing outcomes and responsible use of AI.</h4>',
                        'thumbnail'      : ['/images/emergingTech/ibm_AI_small.jpg'],
                        'large'          : ['/images/emergingTech/ibm_AI.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/watson', 'new_window': true },
                            ],
                        'tags'           : ['AI']
                    },

                    {
                        'title'          : 'Amazon AI <hr/> <a class="btn btn-primary">More Details</a>',
                        'description'    : '<h4>Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans.</h4>',
                        'thumbnail'      : ['/images/emergingTech/amazon_ai_small.jpg'],
                        'large'          : ['/images/emergingTech/amazon_ai.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://aws.amazon.com/machine-learning/ai-lex-polly-rekognition/', 'new_window': true },
                            ],
                        'tags'           : ['AI']
                    },

                    {
                        'title'          : 'Microsoft AI <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>',
                        'thumbnail'      : ['/images/emergingTech/microsoft_AI_small.jpg'],
                        'large'          : ['/images/emergingTech/microsoft_AI.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.microsoft.com/en-us/ai/default.aspx', 'new_window': true },
                            ],
                        'tags'           : ['AI']
                    },

                    {
                        'title'          : 'CSIRO AI <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/csiro_ai_small.jpg'],
                        'large'          : ['/images/emergingTech/csiro_ai.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://data61.csiro.au/en/Our-Work/AI-and-Machine-Learning', 'new_window': true },
                            ],
                        'tags'           : ['AI']
                    },

                    {
                        'title'          : 'IBM IoT <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/ibm_IoT_small.jpg'],
                        'large'          : ['/images/emergingTech/ibm_IoT.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/blogs/internet-of-things/industry-4-0/', 'new_window': true },
                            ],
                        'tags'           : ['IoT']
                    },

                    {
                        'title'          : 'Amazon IoT <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/aws_iot_small.jpg'],
                        'large'          : ['/images/emergingTech/aws_iot.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://aws.amazon.com/iot/?sc_channel=PS&sc_campaign=acquisition_AU&sc_publisher=google&sc_medium=iot_nb&sc_content=iot_e&sc_detail=iot&sc_category=iot&sc_segment=154387165862&sc_matchtype=e&sc_country=AU&s_kwcid=AL!4422!3!154387165862!e!!g!!iot&ef_id=WmksLwAAAHVHXlHa:20180805102347:s', 'new_window': true },
                            ],
                        'tags'           : ['IoT']
                    },

                    {
                        'title'          : 'CIO IoT <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/cio_iot_small.jpg'],
                        'large'          : ['/images/emergingTech/cio_iot.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.cio.com.au/article/641518/feds-launch-ai-iot-projects/', 'new_window': true },
                            ],
                        'tags'           : ['IoT']
                    },

                    {
                        'title'          : 'Microsoft IoT <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/microsoft_iot_small.jpg'],
                        'large'          : ['/images/emergingTech/microsoft_iot.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.microsoft.com/en-au/internet-of-things/', 'new_window': true },
                            ],
                        'tags'           : ['IoT']
                    },

                    {
                        'title'          : 'IBM Cognitive Computer <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/ibm_cc_small.jpg'],
                        'large'          : ['/images/emergingTech/ibm_cc.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/services/artificial-intelligence', 'new_window': true },
                            ],
                        'tags'           : ['Cognitive Computer']
                    },

                    {
                        'title'          : 'Google Cognitive Computer <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/google_cc_small.jpg'],
                        'large'          : ['/images/emergingTech/google_cc.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://cloud.google.com/vision/', 'new_window': true },
                            ],
                        'tags'           : ['Cognitive Computer']
                    },

                    {
                        'title'          : 'Forbes Cognitive Computer <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/forbes_cc_small.jpg'],
                        'large'          : ['/images/emergingTech/forbes_cc.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.forbes.com/sites/bernardmarr/2016/03/23/what-everyone-should-know-about-cognitive-computing/#62c3c5885088', 'new_window': true },
                            ],
                        'tags'           : ['Cognitive Computer']
                    },


                    {
                        'title'          : 'Microsoft Cognitive Computer <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/microsoft_cc_small.jpg'],
                        'large'          : ['/images/emergingTech/microsoft_cc.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/cloud/', 'new_window': true },
                            ],
                        'tags'           : ['Cognitive Computer']
                    },

                    {
                        'title'          : 'IBM Cloud<hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/ibm_cloud_small.jpg'],
                        'large'          : ['/images/emergingTech/ibm_cloud.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/cloud/', 'new_window': true },
                            ],
                        'tags'           : ['Cloud Computer']
                    },

                    {
                        'title'          : 'Google Cloud<hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/google_cloud_small.jpg'],
                        'large'          : ['/images/emergingTech/google_cloud.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://cloud.google.com/vision/', 'new_window': true },
                            ],
                        'tags'           : ['Cloud Computer']
                    },

                    {
                        'title'          : 'Microsoft Cloud <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/microsoft_cloud_small.jpg'],
                        'large'          : ['/images/emergingTech/microsoft_cloud.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://azure.microsoft.com/en-au/', 'new_window': true },

                            ],
                        'tags'           : ['Cloud Computer']
                    },

                    {
                        'title'          : 'Amazon Cloud <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/aws_cloud_small.jpg'],
                        'large'          : ['/images/emergingTech/aws_cloud.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://azure.microsoft.com/en-au/', 'new_window': true },

                            ],
                        'tags'           : ['Cloud Computer']
                    },

                    {
                        'title'          : 'Forbes<hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/forbes_robotics_small.jpg'],
                        'large'          : ['/images/emergingTech/forbes_robotics.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.forbes.com/sites/jimlawton/2018/03/20/the-role-of-robots-in-industry-4-0/#69de1dca706b', 'new_window': true },
                            ],
                        'tags'           : ['Robotics']
                    },

                    {
                        'title'          : 'Automation World <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/automation_world_small.jpg'],
                        'large'          : ['/images/emergingTech/automation_world.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.automationworld.com/industry-40-here-are-you-ready', 'new_window': true },
                            ],
                        'tags'           : ['Robotics']
                    },

                    {
                        'title'          : 'I-Scoop robots cobots<hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/cobots_small.jpg'],
                        'large'          : ['/images/emergingTech/cobots.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.i-scoop.eu/robots-cobots-logistics-4-0/', 'new_window': true },
                            ],
                        'tags'           : ['Robotics']
                    },

                    {
                        'title': 'ZDnet<hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail': ['/images/emergingTech/zdnet_small.jpg'],
                        'large': ['/images/emergingTech/zdnet.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.zdnet.com/article/robotics-and-industry-4-0/', 'new_window': true },
                            ],
                        'tags': ['Robotics']
                    },

                    {
                        'title'          : 'Forbes Blockchain <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/forbes_blockchain_small.jpg'],
                        'large'          : ['/images/emergingTech/forbes_blockchain.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/blogs/internet-of-things/industry-4-0/', 'new_window': true },
                            ],
                        'tags'           : ['Blockchain']
                    },

                    {
                        'title'          : 'Blockchain<hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/blockchain_small.jpg'],
                        'large'          : ['/images/emergingTech/blockchain.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.blockchain.com/', 'new_window': true },
                            ],
                        'tags'           : ['Blockchain']
                    },

                    {
                        'title'          : 'PC Magazine<hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/pc_magazine_small.jpg'],
                        'large'          : ['/images/emergingTech/pc_magazine.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://au.pcmag.com/amazon-web-services/46389/feature/blockchain-the-invisible-technology-thats-changing-the-world', 'new_window': true },
                            ],
                        'tags'           : ['Blockchain']
                    },

                    {
                        'title'          : 'CSIRO Blockchain <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>',
                        'thumbnail'      : ['/images/emergingTech/csiro_blockchain_small.jpg'],
                        'large'          : ['/images/emergingTech/csiro_blockchain.jpg'],
                        'button_list'    :
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.data61.csiro.au/en/our-work/safety-and-security/secure-systems-and-platforms/blockchain', 'new_window': true },
                            ],
                        'tags'           : ['Blockchain']
                    },
                ]
        });
    });
});
