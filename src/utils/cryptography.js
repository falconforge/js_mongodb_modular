import crypto from 'crypto';
import fs from 'fs';
import axios from 'axios';

const algorithm = 'aes-250-cbc';
const secretKey = process.env.CRYPTO_SECRET_KEY;
const iv = crypto.randomBytes(16);

const getEncryption = (data) => {
    try {
        const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
        const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
        return {
            iv: iv.toString('hex'),
            content: encrypted.toString('hex')
        }
    } catch (error) {
        throw Error(error);
    }
}

const getDecryption = (data) => {
    try {
        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(data.iv, 'hex'));
        const decrypted = Buffer.concat([decipher.update(Buffer.from(data.content, 'hex')), decipher.final()]);
        return decrypted.toString();
    } catch (error) {
        throw Error(error);
    }
}

const getCryptoFile = (operation, data) => {
    try {
        
    } catch (error) {
        throw Error(error);
    }
}