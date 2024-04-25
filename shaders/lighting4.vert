#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;
out vec3 Normal;
out vec3 Ver;
out vec4 Position;

uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

void main()
{
    vec3 N = normalize(normalMatrix * normal);
    Normal = N;
    Ver = -(modelViewMatrix*vec4(vertex.xyz, 1)).xyz;
    frontColor = vec4(color,1.0) * N.z;
    vtexCoord = texCoord;
    Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
    gl_Position = Position;
}
