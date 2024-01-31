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
        // Xử lý Preflight request
    }
}
