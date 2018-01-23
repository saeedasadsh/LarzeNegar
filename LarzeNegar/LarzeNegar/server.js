var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);


(function () {

    try {
        var c = 0;
        var timeout = setInterval(function () {

            var dataQS = {
                var1: "something",
                var2: "something else"
            };

            var querystring = require("querystring");
            var qs = querystring.stringify(dataQS);
            var qslength = qs.length;

            var options = {
                hostname: "irsc.ut.ac.ir",
                port: 80,
                path: "/events_list_fa.xml",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': qslength
                }
            };

            var buffer = "";
            var req = http.request(options, function (res) {
                res.on('data', function (chunk) {
                    buffer += chunk;
                });

                res.on('end', function () {

                    try
                    {
                        //console.log(buffer);
                        var dt = buffer;

                        var dataerth = {
                            data: dt
                        };
                        var querystringErth = require("querystring");
                        var qse = querystringErth.stringify(data);
                        var qslengthe = qse.length;
                        var options = {
                            hostname: "ashabrasaneh.ir",
                            port: 80,
                            path: "/GamesData/LarzeNegar/addIranLarze.php",
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Content-Length': qslengthe
                            }
                        };

                        var buffere = "";
                        var reqe = http.request(options, function (rese) {
                            rese.on('data', function (chunke) {
                                buffere += chunke;
                            });
                            rese.on('end', function () {
                                console.log(buffere);
                            });
                        });

                        reqe.write(qse);
                        reqe.end();



                    }
                    catch (e) {
                    }
                });

            });

            req.write(qs);
            req.end();

        }, 60000);
    }
    catch (e) {
    }
})();