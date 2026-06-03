import { Injectable } from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './update-socio.dto';

@Injectable()
export class SociosService {
    remove(id: string) {
        throw new Error('Method not implemented.');
    }
    update(id: string, updateSocioDto: UpdateSocioDto) {
        throw new Error('Method not implemented.');
    }
    findOne(id: string) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        throw new Error('Method not implemented.');
    }
    create(createSocioDto: CreateSocioDto) {
        throw new Error('Method not implemented.');
    }
}
