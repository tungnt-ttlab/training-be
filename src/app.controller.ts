import { Controller, Get, Options } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Ping API')
@Controller()
export class AppController {
    @ApiOperation({ summary: 'Ping system alive' })
    @Get('ping')
    pingAlive() {
        return 'pong';
    }

    @Options('*')
    handleOptions() {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://training-fe.vercel.app', // Thay đổi thành origin của bạn
                'Access-Control-Allow-Methods':
                    'GET,HEAD,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
            },
        };
    }
}
